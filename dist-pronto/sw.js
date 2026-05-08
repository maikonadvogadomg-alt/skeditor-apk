// SK Code Editor — Service Worker
// Faz duas coisas:
//   1) Cache offline básico (PWA / APK) — estratégia SEGURA pra deploys
//   2) Adiciona headers COOP+COEP em respostas SAME-ORIGIN pra habilitar
//      cross-origin isolation (necessário pro WebContainer / Terminal Real).
//
// ESTRATÉGIAS POR TIPO DE ARQUIVO (essencial pra não quebrar após deploy):
//   - Navegação (HTML): NETWORK-FIRST — sempre tenta rede, só usa cache se offline.
//     Isso garante que após cada deploy o usuário pega o index.html novo, que
//     aponta pros bundles novos. Sem isso, fica preso na versão antiga.
//   - Assets com hash (Vite gera nomes tipo `index-abc123.js`): CACHE-FIRST —
//     hash garante que o conteúdo nunca muda, então cache eterno é seguro.
//   - Outros (manifest, ícones, sw.js): NETWORK-FIRST com cache fallback.

const CACHE = "sk-editor-v24";
const PRECACHE_ASSETS = [
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./favicon.svg",
];

// ─── Install ───────────────────────────────────────────────────────────────
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(PRECACHE_ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

// ─── Activate ──────────────────────────────────────────────────────────────
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
      .then(() => {
        // Recarrega clientes pra garantir que os headers COOP+COEP do novo SW
        // sejam aplicados ao documento imediatamente (necessário pro WebContainer).
        // Usamos navigate() que recarrega ATRAVÉS do SW → headers COI presentes.
        // O guard sessionStorage no index.html evita loop infinito.
        return self.clients.matchAll({ type: "window" }).then((clients) => {
          clients.forEach((client) => {
            if ("navigate" in client && client.url) {
              try { client.navigate(client.url); } catch {}
            }
          });
        });
      })
  );
});

// ─── Mensagens do cliente (ex: limpar cache, pular waiting) ────────────────
self.addEventListener("message", (e) => {
  if (!e.data) return;
  if (e.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  } else if (e.data.type === "CLEAR_CACHE") {
    e.waitUntil(
      caches.keys()
        .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
        .then(() => {
          // Avisa todos os clientes que o cache foi limpo
          return self.clients.matchAll({ type: "window" }).then((clients) => {
            clients.forEach((c) => c.postMessage({ type: "CACHE_CLEARED" }));
          });
        })
    );
  }
});

// ─── Helpers de detecção ───────────────────────────────────────────────────
function isHashedAsset(url) {
  // Vite gera nomes tipo `index-DhPq8x_p.js` ou `chunk-AbCdEf12.css`
  // Match: arquivo com hash de 8+ chars hexadecimais/base64-ish antes da extensão
  return /\/assets\/.*-[A-Za-z0-9_-]{8,}\.(js|css|woff2?|ttf|otf|png|jpg|svg|webp)$/i.test(url.pathname);
}

function isNavigationRequest(req) {
  return req.mode === "navigate" || (req.method === "GET" && req.headers.get("accept")?.includes("text/html"));
}

// ─── Fetch ─────────────────────────────────────────────────────────────────
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  if (e.request.cache === "only-if-cached" && e.request.mode !== "same-origin") return;

  const url = new URL(e.request.url);
  const sameOrigin = url.origin === self.location.origin;

  // Não interfere em /api/ (chamadas backend, podem ser streams) e cross-origin
  if (!sameOrigin || url.pathname.startsWith("/api/")) return;

  e.respondWith(handleRequest(e.request, url));
});

async function handleRequest(req, url) {
  // ── Estratégia 1: NAVEGAÇÃO (HTML) — network-first ──
  // Sempre tenta a rede primeiro pra pegar o index.html novo após deploys.
  // Se falhar (offline), usa qualquer HTML que tiver no cache.
  if (isNavigationRequest(req)) {
    try {
      const netRes = await fetch(req);
      if (netRes && netRes.status === 200) {
        try {
          const clone = netRes.clone();
          caches.open(CACHE).then((c) => c.put("./", clone)).catch(() => {});
        } catch {}
        return await addCOIHeaders(netRes);
      }
      // status não-200 não é cacheado, mas devolvido como veio
      return await addCOIHeaders(netRes);
    } catch (err) {
      // Offline — tenta cache do "./"
      const cached = await caches.match("./") || await caches.match(req);
      if (cached) return await addCOIHeaders(cached);
      throw err;
    }
  }

  // ── Estratégia 2: ASSETS COM HASH — cache-first eterno ──
  // Vite garante que arquivos com hash nunca mudam de conteúdo.
  if (isHashedAsset(url)) {
    const cached = await caches.match(req);
    if (cached) return await addCOIHeaders(cached);

    try {
      const netRes = await fetch(req);
      if (netRes && netRes.status === 200 && netRes.type === "basic") {
        try {
          const clone = netRes.clone();
          caches.open(CACHE).then((c) => c.put(req, clone)).catch(() => {});
        } catch {}
      }
      return await addCOIHeaders(netRes);
    } catch (err) {
      throw err;
    }
  }

  // ── Estratégia 3: OUTROS (manifest, ícones, sw.js) — network-first com fallback ──
  try {
    const netRes = await fetch(req);
    if (netRes && netRes.status === 200 && netRes.type === "basic") {
      try {
        const clone = netRes.clone();
        caches.open(CACHE).then((c) => c.put(req, clone)).catch(() => {});
      } catch {}
    }
    return await addCOIHeaders(netRes);
  } catch (err) {
    const cached = await caches.match(req);
    if (cached) return await addCOIHeaders(cached);
    throw err;
  }
}

// Adiciona headers Cross-Origin-Embedder-Policy + Cross-Origin-Opener-Policy.
// IMPORTANTE: só re-empacota respostas same-origin "basic" / "default" / "cors".
// Respostas opaque/opaqueredirect/error não dá pra clonar com novo status, então
// devolvemos como vieram pra não quebrar nada.
async function addCOIHeaders(response) {
  if (!response) return response;
  const t = response.type;
  if (t === "opaque" || t === "opaqueredirect" || t === "error") return response;

  try {
    const newHeaders = new Headers(response.headers);
    newHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");
    newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
    if (!newHeaders.has("Cross-Origin-Resource-Policy")) {
      newHeaders.set("Cross-Origin-Resource-Policy", "same-origin");
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  } catch {
    return response;
  }
}
