# Manual para Desenvolvedores — Correções Necessárias no App Mobile

> **Para:** Desenvolvedor(es) do app mobile de edição de código  
> **Autor:** Saulo Kenji (via SK Code Editor)  
> **Data:** Maio 2026  
> **Objetivo:** Trazer o app mobile ao mesmo nível do SK Code Editor (versão web que funciona corretamente)

---

## PROBLEMA 1 — Importar repositório GitHub traz poucos arquivos (2-3 arquivos ao invés de todos)

### O que está errado
O app usa a API `/repos/{owner}/{repo}/contents/` sem percorrer subpastas recursivamente. Esse endpoint retorna **apenas o nível raiz** do repositório.

### Como corrigir
É necessário **percorrer a árvore de arquivos recursivamente**. Use a API do GitHub que retorna tudo de uma vez:

```
GET https://api.github.com/repos/{owner}/{repo}/git/trees/{branch}?recursive=1
```

Essa chamada retorna **todos os arquivos e pastas** do repositório em uma única requisição, sem limite de profundidade.

### Código de referência (JavaScript/TypeScript)

```javascript
async function clonarRepositorio(token, owner, repo, branch = 'main') {
  // 1. Busca a árvore completa recursivamente
  const treeRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`,
    { headers: { Authorization: `token ${token}` } }
  );
  const treeData = await treeRes.json();

  // 2. Filtra só os arquivos (type === 'blob'), ignora pastas
  const arquivos = treeData.tree.filter(item => item.type === 'blob');

  // 3. Baixa o conteúdo de cada arquivo
  const resultado = {};
  for (const arquivo of arquivos) {
    // Pula arquivos muito grandes (>500KB) e node_modules
    if (arquivo.size > 500000) continue;
    if (arquivo.path.startsWith('node_modules/')) continue;
    if (arquivo.path.startsWith('.git/')) continue;

    const contentRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${arquivo.path}?ref=${branch}`,
      { headers: { Authorization: `token ${token}` } }
    );
    const contentData = await contentRes.json();

    // O conteúdo vem em Base64
    resultado[arquivo.path] = atob(contentData.content.replace(/\n/g, ''));
  }

  return resultado; // { 'src/index.js': '...', 'package.json': '...', ... }
}
```

### Observação importante
Se o repositório tiver mais de 100.000 arquivos ou for muito grande, o GitHub retorna `truncated: true`. Nesse caso, é necessário percorrer subpasta por subpasta. Mas para projetos normais (até 10.000 arquivos), o parâmetro `?recursive=1` funciona perfeitamente.

---

## PROBLEMA 2 — Árvore de arquivos não organizada / sem hierarquia

### O que está errado
O app lista arquivos em modo "flat" (lista plana), sem mostrar a hierarquia de pastas, ou não expande subpastas corretamente.

### Como corrigir
A partir da lista de caminhos (`src/components/App.js`, `src/index.js`, `package.json`...) é necessário construir uma árvore hierárquica antes de renderizar.

### Código de referência (JavaScript)

```javascript
function construirArvore(caminhos) {
  const raiz = { nome: 'root', filhos: {}, tipo: 'pasta' };

  for (const caminho of caminhos) {
    const partes = caminho.split('/');
    let no = raiz;

    for (let i = 0; i < partes.length; i++) {
      const parte = partes[i];
      const ehUltimo = i === partes.length - 1;

      if (!no.filhos[parte]) {
        no.filhos[parte] = {
          nome: parte,
          caminho: partes.slice(0, i + 1).join('/'),
          tipo: ehUltimo ? 'arquivo' : 'pasta',
          filhos: {},
        };
      }
      no = no.filhos[parte];
    }
  }

  return raiz;
}

// Uso:
const arquivos = Object.keys(repositorioImportado); // ['src/App.js', 'package.json', ...]
const arvore = construirArvore(arquivos);
```

### Ordenação recomendada
- Pastas primeiro, depois arquivos
- Em ordem alfabética dentro de cada grupo

```javascript
function ordenarFilhos(filhos) {
  return Object.values(filhos).sort((a, b) => {
    if (a.tipo !== b.tipo) return a.tipo === 'pasta' ? -1 : 1;
    return a.nome.localeCompare(b.nome);
  });
}
```

---

## PROBLEMA 3 — Configurar servidor local para rodar sem internet (Termux / Offline)

### O que está errado
O app depende 100% de um servidor remoto para funcionar. Quando sem internet ou sem o servidor pago, nada funciona.

### Solução: Modo Offline com 3 níveis

O SK Code Editor usa três modos de terminal, escolhidos automaticamente:

| Modo | Quando usar | Como funciona |
|------|-------------|---------------|
| **Online** | Com servidor disponível | Bash real via WebSocket no servidor |
| **Real** | Com internet + navegador moderno | WebContainers (Node.js no navegador) |
| **Offline** | Sem internet / sem servidor | Terminal JavaScript simulado |

### Como implementar o terminal offline (mínimo viável)

O terminal offline simula comandos básicos no próprio JavaScript do app, sem precisar de nenhum servidor:

```javascript
const comandosOffline = {
  'ls': (args, cwd, arquivos) => {
    const prefixo = cwd === '/' ? '' : cwd + '/';
    const itens = Object.keys(arquivos)
      .filter(p => p.startsWith(prefixo))
      .map(p => p.slice(prefixo.length).split('/')[0])
      .filter((v, i, a) => a.indexOf(v) === i); // unique
    return itens.join('\n');
  },
  'pwd': (args, cwd) => cwd,
  'cat': (args, cwd, arquivos) => {
    const caminho = args[0]?.startsWith('/') ? args[0] : cwd + '/' + args[0];
    return arquivos[caminho.replace(/^\//, '')] || `cat: ${args[0]}: arquivo não encontrado`;
  },
  'echo': (args) => args.join(' '),
  'clear': () => '\x1Bc', // limpa o terminal
  'help': () => 'Comandos: ls, pwd, cat, echo, clear, help',
};

function executarComandoOffline(linha, cwd, arquivos) {
  const [cmd, ...args] = linha.trim().split(/\s+/);
  const fn = comandosOffline[cmd];
  if (fn) return fn(args, cwd, arquivos);
  return `${cmd}: comando não encontrado (modo offline)`;
}
```

### Como configurar para Termux (Android)

Se o app usa um servidor Node.js rodando no próprio celular via Termux:

1. **Instalar dependências no Termux:**
```bash
pkg install nodejs
pkg install git
npm install -g pm2
```

2. **O servidor deve ouvir em `localhost:8080`** (não em IP externo)

3. **O app mobile deve apontar para `http://localhost:8080`** quando detectar que está rodando localmente:
```javascript
const API_BASE = __DEV__ || window.location.hostname === 'localhost'
  ? 'http://localhost:8080'
  : 'https://seu-servidor-remoto.com';
```

4. **Para iniciar automaticamente com o Termux:**
```bash
pm2 start server.js --name "sk-server"
pm2 startup
pm2 save
```

---

## PROBLEMA 4 — Limites artificiais de arquivos

### O que está errado
O app tem limites como "máximo 50 arquivos", "máximo 100KB por arquivo", etc.

### Como remover os limites

Procure no código por constantes como:
```javascript
const MAX_FILES = 50;        // remover
const MAX_FILE_SIZE = 100000; // aumentar ou remover
const MAX_REPO_FILES = 200;  // remover
```

### Limites recomendados no SK Code Editor

| Item | Limite |
|------|--------|
| Arquivos por projeto | Sem limite |
| Tamanho por arquivo | 500KB (apenas para importação do GitHub) |
| Arquivos ignorados | `node_modules/`, `.git/`, arquivos binários |
| Sincronização com servidor | Apenas o arquivo ativo (não todos de uma vez) |

### Para sincronização eficiente (evitar erros 413 "payload too large")

Em vez de enviar todos os arquivos de uma vez ao servidor, envie **apenas o arquivo que está sendo editado**:

```javascript
// ERRADO: envia tudo de uma vez (causa erro 413)
async function syncTudo(arquivos) {
  await fetch('/api/sync', { body: JSON.stringify(arquivos) }); // pode ser MB de dados
}

// CERTO: envia só o arquivo ativo
async function syncArquivoAtivo(caminho, conteudo) {
  await fetch('/api/workspace/write', {
    method: 'POST',
    body: JSON.stringify({ path: caminho, content: conteudo }),
  });
}
```

No servidor (Express.js), aumentar o limite do body-parser:
```javascript
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
```

---

## REFERÊNCIA — Funcionalidades que funcionam no SK Code Editor

| Funcionalidade | Status | Como funciona |
|----------------|--------|---------------|
| Importar repo GitHub (todos os arquivos) | ✅ | API `git/trees?recursive=1` |
| Salvar arquivos localmente | ✅ | localStorage / IndexedDB |
| Árvore de arquivos hierárquica | ✅ | Construção recursiva da árvore |
| Terminal offline | ✅ | Comandos simulados em JavaScript |
| Terminal online (bash real) | ✅ | WebSocket PTY no servidor |
| Terminal real (Node.js no navegador) | ✅ | WebContainers API |
| Sem limite de arquivos | ✅ | Sem constante de limite |
| Sincronização eficiente | ✅ | Só arquivo ativo via /api/workspace/write |
| Funciona sem servidor | ✅ | Edição + GitHub funcionam offline |
| Instalável como app (PWA) | ✅ | Manifesto + Service Worker |
| Abrir no VS Code / StackBlitz | ✅ | Links externos diretos |
| Publicar no GitHub Pages | ✅ | Build + push para branch gh-pages |

---

## CONTATO / REFERÊNCIA TÉCNICA

O código-fonte de referência do SK Code Editor está no repositório GitHub do Saulo Kenji.  
Os arquivos mais importantes para comparar são:

- `src/lib/github-service.ts` — clone recursivo do GitHub
- `src/components/FileTree.tsx` — árvore hierárquica de arquivos  
- `src/components/StreamTerminal.tsx` — terminal online com WebSocket
- `src/components/Terminal.tsx` — terminal offline simulado
- `api-server/src/routes/exec.ts` — servidor bash real via PTY

---

*Documento gerado pelo SK Code Editor — Maio 2026*
