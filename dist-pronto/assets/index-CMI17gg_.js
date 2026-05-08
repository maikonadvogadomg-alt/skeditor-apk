import{a,j as e,R as pr}from"./vendor-react-D8m3Uig9.js";import{c as ur}from"./vendor-react-dom-CdNyEL3a.js";import{J as qa,F as xa}from"./vendor-fs-BeamS8bA.js";import{C as As,S as za,a as ga,U as _t,F as ha,b as ea,c as Rt,X as ye,G as Pt,d as St,e as Tt,L as qe,D as pt,W as It,f as Io,g as Kt,T as dt,h as Ta,i as mr,j as Oo,k as gt,l as ba,m as Fs,E as Ss,B as mt,n as xr,P as gr,o as Lo,p as pa,M as Gs,q as fa,r as qo,R as no,s as Ts,t as io,u as Ra,v as Nt,w as wa,x as zo,y as Hs,z as hr,V as ss,A as Xa,H as Rs,I as lo,J as br,K as Vs,N as fr,O as xt,Q as Zt,Y as Vt,Z as os,_ as Ft,$ as rs,a0 as vr,a1 as co,a2 as po,a3 as yr,a4 as Za,a5 as jr,a6 as Bt,a7 as fs,a8 as vs,a9 as Nr,aa as Do,ab as Ks,ac as uo,ad as wr,ae as Er,af as kr,ag as Cr,ah as Ar,ai as Sr,aj as Tr,ak as _o,al as Rr,am as Pr,an as Ir,ao as mo,ap as Or,aq as ys,ar as Ws,as as Ba,at as js,au as Fa,av as Ps,aw as ua,ax as Is,ay as Pa,az as Os,aA as Lr,aB as Mo,aC as $o,aD as Uo,aE as Bo,aF as Fo,aG as xo,aH as go,aI as ho,aJ as qr,aK as bo}from"./vendor-lucide-NZRTcJIq.js";import{F as zr}from"./vendor-monaco-CS9w1txC.js";import{W as Dr}from"./vendor-webcontainer-BPoiPq3D.js";import{D as _r,o as Mr,L as $r}from"./vendor-xterm-CT6HrMBF.js";import"./vendor-highlight-Bu9o_ty_.js";import{M as Ur,r as Br,a as Fr}from"./vendor-markdown-CM6-e2rl.js";import"./vendor-misc-COW7C1HQ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(n){if(n.ep)return;n.ep=!0;const c=o(n);fetch(n.href,c)}})();function jt(t){return"children"in t}function Js(t){const s=t.split(".").pop()?.toLowerCase()||"";return{js:"javascript",jsx:"javascript",ts:"typescript",tsx:"typescript",html:"html",css:"css",scss:"scss",json:"json",md:"markdown",py:"python",rb:"ruby",go:"go",rs:"rust",java:"java",c:"c",cpp:"cpp",h:"c",hpp:"cpp",xml:"xml",yaml:"yaml",yml:"yaml",toml:"toml",sh:"shell",bash:"shell",sql:"sql",graphql:"graphql",vue:"html",svelte:"html",php:"php",swift:"swift",kt:"kotlin",dart:"dart"}[s]||"plaintext"}class Gr{files=new Map;listeners=new Set;onChange(s){return this.listeners.add(s),()=>this.listeners.delete(s)}notify(){this.listeners.forEach(s=>s())}writeFile(s,o){const r=this.normalizePath(s);this.files.set(r,o),this.notify()}readFile(s){return this.files.get(this.normalizePath(s))}deleteFile(s){const o=this.normalizePath(s);this.files.delete(o);const r=o+"/";for(const n of this.files.keys())n.startsWith(r)&&this.files.delete(n);this.notify()}renameFile(s,o){const r=this.normalizePath(s),n=this.normalizePath(o),c=this.files.get(r);c!==void 0&&(this.files.delete(r),this.files.set(n,c));const p=r+"/";for(const[h,m]of this.files.entries())h.startsWith(p)&&(this.files.delete(h),this.files.set(n+h.slice(r.length),m));this.notify()}exists(s){const o=this.normalizePath(s);if(this.files.has(o))return!0;const r=o+"/";for(const n of this.files.keys())if(n.startsWith(r))return!0;return!1}listFiles(){return Array.from(this.files.keys()).sort()}getTree(){const s={name:"root",path:"",children:[],expanded:!0},o=this.listFiles();for(const r of o){const n=r.split("/").filter(Boolean);let c=s;for(let h=0;h<n.length-1;h++){const m=n[h],j=n.slice(0,h+1).join("/");let f=c.children.find(k=>jt(k)&&k.name===m);f||(f={name:m,path:j,children:[],expanded:!1},c.children.push(f)),c=f}const p=n[n.length-1];c.children.push({name:p,path:r,content:this.files.get(r)||"",language:Js(r)})}return this.sortTree(s),s}sortTree(s){s.children.sort((o,r)=>{const n=jt(o),c=jt(r);return n&&!c?-1:!n&&c?1:o.name.localeCompare(r.name)});for(const o of s.children)jt(o)&&this.sortTree(o)}clear(){this.files.clear(),this.notify()}toJSON(){const s={};for(const[o,r]of this.files)s[o]=r;return s}fromJSON(s){this.files.clear();for(const[o,r]of Object.entries(s))this.files.set(this.normalizePath(o),r);this.notify()}normalizePath(s){return s.replace(/^\/+/,"").replace(/\/+$/,"")}}async function Aa(t,s="projeto"){const o=new qa;for(const[n,c]of Object.entries(t))o.file(n,c);const r=await o.generateAsync({type:"blob"});xa.saveAs(r,`${s}.zip`)}async function Hr(t){const s=new qa;for(const[n,c]of Object.entries(t))s.file(n,c);const o=await s.generateAsync({type:"uint8array"});let r="";for(let n=0;n<o.byteLength;n++)r+=String.fromCharCode(o[n]);return btoa(r)}const Vr=["node_modules/",".git/",".svn/","dist/","build/",".expo/",".expo-shared/",".cache/","__pycache__/",".venv/","venv/",".next/",".nuxt/",".output/","coverage/",".nyc_output/",".turbo/",".vercel/",".netlify/"],Kr=new Set(["png","jpg","jpeg","gif","webp","bmp","ico","tiff","avif","mp4","mov","avi","webm","mkv","flv","mp3","wav","ogg","aac","flac","m4a","ttf","otf","woff","woff2","eot","pdf","doc","docx","xls","xlsx","ppt","pptx","zip","tar","gz","rar","7z","exe","apk","ipa","dmg","pkg","deb","rpm","so","dll","dylib","bin","dat","db","sqlite","sqlite3","class","pyc","pyd","pyo","DS_Store","lock"]),Wr=new Set(["package-lock.json","yarn.lock","pnpm-lock.yaml","npm-debug.log",".DS_Store","Thumbs.db",".gitkeep"]);function Go(t){const s=t.toLowerCase();for(const n of Vr)if(s.includes("/"+n)||s.startsWith(n))return!0;const o=s.split("/").pop()??"";if(Wr.has(o))return!0;const r=o.split(".").pop()??"";return!!Kr.has(r)}async function Ho(t){const s=t.name.toLowerCase();if(s.endsWith(".tar.gz")||s.endsWith(".tgz")||s.endsWith(".tar"))return Jr(t);const o=await qa.loadAsync(t),r={},n=[];return o.forEach((c,p)=>{if(p.dir||Go(c))return;const h=p.async("uint8array").then(m=>{if(m.length>512*1024)return;const j=m.slice(0,512);for(let k=0;k<j.length;k++)if(j[k]===0)return;const f=new TextDecoder("utf-8",{fatal:!1}).decode(m);r[c]=f});n.push(h)}),await Promise.all(n),Vo(r)}async function Jr(t){const s=t.name.toLowerCase(),o=await t.arrayBuffer();let r;return s.endsWith(".tar.gz")||s.endsWith(".tgz")?r=await Qr(o):r=o,Yr(r)}async function Qr(t){const s=new DecompressionStream("gzip"),o=s.writable.getWriter();return o.write(new Uint8Array(t)),o.close(),new Response(s.readable).arrayBuffer()}function Yr(t){const s=new Uint8Array(t),o={},r=new TextDecoder("utf-8",{fatal:!1});let n=0;const c=(h,m)=>r.decode(s.slice(h,h+m)).replace(/\0+$/,"").trim(),p=(h,m)=>parseInt(c(h,m)||"0",8)||0;for(;n+512<=s.length;){const h=n;if(s[h]===0&&s[h+1]===0){n+=512;continue}let m=c(h,100);const j=c(h+156,1),f=p(h+124,12),k=c(h+345,155);if(k&&(m=k+"/"+m),n+=512,(j==="0"||j===""||j==="\0")&&f>0&&m){const U=m.replace(/^\.\//,"");if(U&&!U.endsWith("/")&&!Go(U)&&f<=512*1024){const K=s.slice(n,n+Math.min(f,512));let C=!1;for(let L=0;L<K.length;L++)if(K[L]===0){C=!0;break}C||(o[U]=r.decode(s.slice(n,n+f)))}}n+=Math.ceil(f/512)*512}return Vo(o)}function Vo(t){const s=Object.keys(t);if(s.length===0)return t;const o=s[0].indexOf("/");if(o<=0)return t;const r=s[0].slice(0,o+1);if(!s.every(m=>m.startsWith(r)))return t;const c=r.slice(0,-1);if(["src","public","lib","dist","components","pages","app"].includes(c))return t;const h={};for(const[m,j]of Object.entries(t))h[m.slice(r.length)]=j;return h}const Ls="sk-editor-projects",qs="sk-editor-current",Ko="sk-proj-files-";function Wo(t){return Object.values(t).reduce((s,o)=>s+o.length,0)}function Jo(t,s){const o=Ko+t;try{localStorage.setItem(o,JSON.stringify(s))}catch{try{const r={};for(const[n,c]of Object.entries(s))c.length<1e5&&(r[n]=c);localStorage.setItem(o,JSON.stringify(r))}catch{try{const r={};for(const n of Object.keys(s))r[n]="";localStorage.setItem(o,JSON.stringify(r))}catch{}}}}function Xr(t){try{const s=localStorage.getItem(Ko+t);return s?JSON.parse(s):{}}catch{return{}}}function Zr(t){try{localStorage.setItem(Ls,JSON.stringify(t))}catch{try{const s=t.slice().sort((o,r)=>r.updatedAt-o.updatedAt).slice(0,10);localStorage.setItem(Ls,JSON.stringify(s))}catch{}}}function fo(){try{const t=localStorage.getItem(Ls);return t?JSON.parse(t).map(o=>{let r;return o.files&&Object.keys(o.files).length>0?(r=o.files,Jo(o.id,r)):r=Xr(o.id),{id:o.id,name:o.name,files:r,createdAt:o.createdAt,updatedAt:o.updatedAt}}):[]}catch{return[]}}function ra(t){for(const o of t)Jo(o.id,o.files);const s=t.map(o=>({id:o.id,name:o.name,createdAt:o.createdAt,updatedAt:o.updatedAt,fileCount:Object.keys(o.files).length,sizeBytes:Wo(o.files)}));Zr(s)}function en(){return localStorage.getItem(qs)}function Ga(t){t?localStorage.setItem(qs,t):localStorage.removeItem(qs)}function tn(t,s){return{id:Date.now().toString(36)+Math.random().toString(36).slice(2,8),name:t,files:s,createdAt:Date.now(),updatedAt:Date.now()}}function Ns(t,s){const o=t.findIndex(r=>r.id===s.id);if(o>=0){const r=[...t];return r[o]={...s},r}return[s,...t]}function an(t){return{...t,id:Date.now().toString(36)+Math.random().toString(36).slice(2,8),name:t.name+" (cópia)",createdAt:Date.now(),updatedAt:Date.now()}}function sn(t){return new Date(t).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}function on(t){const s=Object.keys(t).length,o=Wo(t);return{count:s,size:o>1024?`${(o/1024).toFixed(1)}KB`:`${o}B`}}const zs=[{id:"html-css-js",name:"HTML/CSS/JS",description:"Projeto web basico com HTML, CSS e JavaScript",icon:"globe",files:{"index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Projeto</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="app">
    <h1>Ola Mundo!</h1>
    <p>Edite este arquivo para comecar.</p>
  </div>
  <script src="script.js"><\/script>
</body>
</html>`,"style.css":`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #1a1a2e;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#app {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: 1.2rem;
  color: #aaa;
}`,"script.js":`document.addEventListener('DOMContentLoaded', () => {
  console.log('Projeto carregado com sucesso!');
});`}},{id:"react-app",name:"React App",description:"Aplicacao React com JSX",icon:"component",files:{"index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="src/index.jsx"><\/script>
</body>
</html>`,"src/index.jsx":`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,"src/App.jsx":`import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#0f0f23',
      color: '#fff',
      fontFamily: 'system-ui'
    }}>
      <h1>React App</h1>
      <p>Contador: {count}</p>
      <button 
        onClick={() => setCount(c => c + 1)}
        style={{
          padding: '10px 24px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: '#646cff',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        Incrementar
      </button>
    </div>
  );
}`,"package.json":`{
  "name": "react-app",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}`}},{id:"node-api",name:"Node.js API",description:"API REST com Express",icon:"server",files:{"index.js":`const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let items = [
  { id: 1, name: 'Item 1', description: 'Primeiro item' },
  { id: 2, name: 'Item 2', description: 'Segundo item' },
];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item nao encontrado' });
  res.json(item);
});

app.post('/api/items', (req, res) => {
  const item = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description
  };
  items.push(item);
  res.status(201).json(item);
});

app.listen(PORT, () => {
  console.log(\`Servidor rodando na porta \${PORT}\`);
});`,"package.json":`{
  "name": "node-api",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "express": "^4.18.2"
  },
  "scripts": {
    "start": "node index.js"
  }
}`}},{id:"python-flask",name:"Python Flask",description:"API web com Flask",icon:"code",files:{"app.py":`from flask import Flask, jsonify, request

app = Flask(__name__)

items = [
    {"id": 1, "name": "Item 1", "description": "Primeiro item"},
    {"id": 2, "name": "Item 2", "description": "Segundo item"},
]

@app.route("/")
def home():
    return jsonify({"message": "Bem-vindo a API Flask!"})

@app.route("/api/items")
def get_items():
    return jsonify(items)

@app.route("/api/items", methods=["POST"])
def create_item():
    data = request.get_json()
    item = {
        "id": len(items) + 1,
        "name": data.get("name"),
        "description": data.get("description"),
    }
    items.append(item)
    return jsonify(item), 201

if __name__ == "__main__":
    app.run(debug=True, port=5000)`,"requirements.txt":"flask==3.0.0"}},{id:"typescript-node",name:"TypeScript Node",description:"Projeto TypeScript com Node.js",icon:"file-type",files:{"src/index.ts":`interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "Joao", email: "joao@email.com" },
  { id: 2, name: "Maria", email: "maria@email.com" },
];

function findUser(id: number): User | undefined {
  return users.find(u => u.id === id);
}

function addUser(name: string, email: string): User {
  const newUser: User = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  return newUser;
}

console.log("Usuarios:", users);
console.log("Buscar ID 1:", findUser(1));
console.log("Novo usuario:", addUser("Pedro", "pedro@email.com"));`,"tsconfig.json":`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}`,"package.json":`{
  "name": "typescript-node",
  "version": "1.0.0",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  },
  "devDependencies": {
    "typescript": "^5.3.0"
  }
}`}},{id:"empty",name:"Projeto Vazio",description:"Comece do zero",icon:"folder-plus",files:{"README.md":`# Novo Projeto

Comece a criar seus arquivos aqui.`}},{id:"pwa-app",name:"PWA Instalável",description:"App instalável no celular com suporte offline e manifest completo",icon:"globe",files:{"index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#1a1f2e">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Meu App">
  <meta name="description" content="Meu aplicativo PWA instalavel">
  <title>Meu App</title>
  <link rel="manifest" href="manifest.json">
  <link rel="apple-touch-icon" href="icon-192.png">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="offline-bar" class="offline-bar hidden">
    📡 Sem conexão — modo offline ativo
  </div>

  <header class="header">
    <div class="logo">⚡ Meu App</div>
    <div id="status-dot" class="status-dot online" title="Online"></div>
  </header>

  <main class="main">
    <section class="hero">
      <div class="hero-icon">📱</div>
      <h1>Bem-vindo ao Meu App</h1>
      <p>Este app funciona offline e pode ser instalado no seu celular.</p>
      <button id="install-btn" class="btn btn-primary hidden">
        ⬇️ Instalar no Celular
      </button>
      <button id="refresh-btn" class="btn btn-outline">
        🔄 Recarregar
      </button>
    </section>

    <section class="cards">
      <div class="card">
        <span class="card-icon">📴</span>
        <h3>Funciona Offline</h3>
        <p>Acesse mesmo sem internet graças ao Service Worker.</p>
      </div>
      <div class="card">
        <span class="card-icon">📲</span>
        <h3>Instalável</h3>
        <p>Adicione à tela inicial do celular como um app nativo.</p>
      </div>
      <div class="card">
        <span class="card-icon">⚡</span>
        <h3>Rápido</h3>
        <p>Cache inteligente para carregamento instantâneo.</p>
      </div>
    </section>

    <section class="counter-section">
      <h2>Contador (salvo localmente)</h2>
      <div class="counter">
        <button class="counter-btn" id="dec">−</button>
        <span class="counter-value" id="count">0</span>
        <button class="counter-btn" id="inc">+</button>
      </div>
      <button class="btn btn-outline" id="reset">Resetar</button>
    </section>
  </main>

  <footer class="footer">
    <p>Feito com ❤️ · Instalado como PWA</p>
  </footer>

  <script src="app.js"><\/script>
</body>
</html>`,"style.css":`* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #0f1117;
  --surface: #1a1f2e;
  --card: #1e2540;
  --accent: #4f8ef7;
  --accent2: #7c5cbf;
  --text: #e8eaf0;
  --muted: #8892a4;
  --success: #34d399;
  --danger: #f87171;
  --radius: 16px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.offline-bar {
  background: var(--danger);
  color: white;
  text-align: center;
  padding: 8px;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.3s;
}
.hidden { display: none !important; }

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: var(--surface);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
}
.logo { font-size: 18px; font-weight: 700; color: var(--accent); }
.status-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  transition: background 0.3s;
}
.status-dot.online { background: var(--success); box-shadow: 0 0 6px var(--success); }
.status-dot.offline { background: var(--danger); }

.main { flex: 1; padding: 24px 20px; max-width: 500px; margin: 0 auto; width: 100%; }

.hero {
  text-align: center;
  padding: 40px 0 32px;
}
.hero-icon { font-size: 64px; margin-bottom: 16px; }
.hero h1 { font-size: 24px; font-weight: 800; margin-bottom: 12px; line-height: 1.2; }
.hero p { color: var(--muted); font-size: 15px; margin-bottom: 24px; line-height: 1.6; }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  margin: 6px;
}
.btn-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  color: white;
}
.btn-primary:active { transform: scale(0.96); }
.btn-outline {
  background: transparent;
  border: 1.5px solid rgba(255,255,255,0.15);
  color: var(--muted);
}
.btn-outline:hover { border-color: var(--accent); color: var(--accent); }

.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 32px;
}
.card {
  background: var(--card);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.card-icon { font-size: 28px; }
.card h3 { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
.card p { font-size: 13px; color: var(--muted); line-height: 1.5; }

.counter-section {
  background: var(--surface);
  border-radius: var(--radius);
  padding: 24px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.06);
  margin-bottom: 16px;
}
.counter-section h2 { font-size: 16px; margin-bottom: 20px; color: var(--muted); }
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 20px;
}
.counter-btn {
  width: 52px; height: 52px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.1);
  background: var(--card);
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s;
}
.counter-btn:active { transform: scale(0.9); background: var(--accent); border-color: var(--accent); }
.counter-value {
  font-size: 52px;
  font-weight: 800;
  min-width: 80px;
  color: var(--accent);
}

.footer {
  text-align: center;
  padding: 20px;
  color: var(--muted);
  font-size: 12px;
  border-top: 1px solid rgba(255,255,255,0.04);
}`,"app.js":`// ─── PWA Install Prompt ───────────────────────
let deferredPrompt;
const installBtn = document.getElementById('install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove('hidden');
});

installBtn?.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log('Instalação:', outcome);
  deferredPrompt = null;
  installBtn.classList.add('hidden');
});

window.addEventListener('appinstalled', () => {
  console.log('App instalado com sucesso!');
  installBtn.classList.add('hidden');
});

// ─── Offline / Online detection ───────────────
const offlineBar = document.getElementById('offline-bar');
const statusDot  = document.getElementById('status-dot');

function updateStatus() {
  const online = navigator.onLine;
  offlineBar.classList.toggle('hidden', online);
  statusDot.className = 'status-dot ' + (online ? 'online' : 'offline');
  statusDot.title = online ? 'Online' : 'Offline';
}
window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);
updateStatus();

// ─── Service Worker ───────────────────────────
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(r => console.log('[SW] Registrado:', r.scope))
    .catch(e => console.warn('[SW] Erro:', e));
}

// ─── Contador com localStorage ────────────────
let count = parseInt(localStorage.getItem('pwa-count') || '0');
const display = document.getElementById('count');

function updateCount(n) {
  count = n;
  display.textContent = count;
  localStorage.setItem('pwa-count', count);
}

document.getElementById('inc')?.addEventListener('click', () => updateCount(count + 1));
document.getElementById('dec')?.addEventListener('click', () => updateCount(count - 1));
document.getElementById('reset')?.addEventListener('click', () => updateCount(0));
document.getElementById('refresh-btn')?.addEventListener('click', () => location.reload());

updateCount(count);`,"sw.js":`// Service Worker — Cache Offline
const CACHE = 'meu-app-v1';
const FILES = ['./', './index.html', './style.css', './app.js', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached || fetch(e.request).then(res => {
        if (res.status === 200) {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        }
        return res;
      })
    ).catch(() => caches.match('./index.html'))
  );
});`,"manifest.json":`{
  "name": "Meu App",
  "short_name": "MeuApp",
  "description": "Aplicativo PWA instalavel",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "orientation": "any",
  "background_color": "#0f1117",
  "theme_color": "#1a1f2e",
  "lang": "pt-BR",
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ]
}`,"icon-192.png":"","README.md":`# Meu App — PWA Instalável

## O que é PWA?

Progressive Web App (PWA) é um site que pode ser **instalado como aplicativo** no celular ou desktop, funcionando **offline** e com ícone na tela inicial.

## Como rodar localmente

Abra o \`index.html\` no Preview (botão ▶) ou use um servidor local:
\`\`\`bash
npx serve .
# Acesse http://localhost:3000
\`\`\`

## Como publicar GRÁTIS 🚀

### Opção 1 — Netlify (mais fácil)
1. Acesse [netlify.com](https://netlify.com) e crie conta grátis
2. Clique em **"Add new site" → "Deploy manually"**
3. Baixe este projeto como ZIP (menu ··· → Exportar ZIP)
4. Arraste a pasta descompactada para o Netlify
5. Pronto! URL gerada automaticamente (ex: \`meuapp.netlify.app\`)

### Opção 2 — Vercel
1. Acesse [vercel.com](https://vercel.com) → crie conta com GitHub
2. Faça upload dos arquivos ou conecte repositório
3. Deploy automático com HTTPS

### Opção 3 — GitHub Pages (grátis com repositório público)
1. Crie um repositório no [github.com](https://github.com)
2. Faça upload dos arquivos
3. Settings → Pages → Source: "main" branch
4. URL: \`seuusuario.github.io/nome-do-repo\`

### Opção 4 — Cloudflare Pages
1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com)
2. Upload direto ou conecte GitHub
3. Domínio customizado grátis (\`meuapp.pages.dev\`)

## Após publicar

Acesse pelo celular via HTTPS e o Chrome vai mostrar:
**"Adicionar à tela inicial"** — toque e o app vira um ícone!

## Estrutura
\`\`\`
index.html    ← Página principal
style.css     ← Estilos
app.js        ← Lógica do app + install prompt + offline
sw.js         ← Service Worker (cache offline)
manifest.json ← Metadados do PWA (nome, ícone, cor)
\`\`\`
`}},{id:"canvas-art",name:"Animação Canvas",description:"Arte interativa com partículas e geometria — reage ao toque e mouse",icon:"globe",files:{"index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Universo de Partículas</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #000; overflow: hidden; }
    canvas { display: block; }
    #ui {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
      z-index: 10;
    }
    button {
      padding: 10px 18px;
      border-radius: 50px;
      border: 1px solid rgba(255,255,255,0.2);
      background: rgba(0,0,0,0.6);
      color: #fff;
      font-size: 13px;
      cursor: pointer;
      backdrop-filter: blur(10px);
      transition: all 0.2s;
    }
    button:active { transform: scale(0.94); background: rgba(255,255,255,0.1); }
    #info {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255,255,255,0.4);
      font-family: monospace;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      pointer-events: none;
    }
  </style>
</head>
<body>
  <div id="info">Toque ou mova o mouse</div>
  <canvas id="c"></canvas>
  <div id="ui">
    <button onclick="changeMode()">🎨 Modo</button>
    <button onclick="burst()">💥 Burst</button>
    <button onclick="clear()">🗑️ Limpar</button>
  </div>
  <script src="sketch.js"><\/script>
</body>
</html>`,"sketch.js":`const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

let W = canvas.width  = window.innerWidth;
let H = canvas.height = window.innerHeight;
let mx = W/2, my = H/2;
let particles = [];
let frame = 0;
let mode = 0; // 0=universe 1=web 2=flower 3=matrix

const MODES = ['🌌 Universo', '🕸️ Teia', '🌸 Flor', '💻 Matrix'];
const PALETTES = [
  ['#4fc3f7','#e040fb','#80deea','#fff176','#f48fb1'],
  ['#69f0ae','#40c4ff','#ea80fc','#ffffff'],
  ['#ff80ab','#ff6d00','#ffd740','#69f0ae','#e040fb'],
  ['#00e676','#76ff03','#18ffff'],
];

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);

class Particle {
  constructor(x, y, vx, vy, color, life, size) {
    this.x = x; this.y = y;
    this.vx = vx || (Math.random()-0.5)*4;
    this.vy = vy || (Math.random()-0.5)*4;
    this.color = color || PALETTES[mode][Math.floor(Math.random()*PALETTES[mode].length)];
    this.life = life || Math.random()*120+60;
    this.maxLife = this.life;
    this.size = size || Math.random()*3+1;
    this.angle = Math.random()*Math.PI*2;
    this.spin = (Math.random()-0.5)*0.1;
  }
  update() {
    const alpha = this.life / this.maxLife;
    // Attraction to cursor
    const dx = mx - this.x;
    const dy = my - this.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    if (dist < 200) {
      this.vx += dx/dist * 0.08;
      this.vy += dy/dist * 0.08;
    }
    this.vx *= 0.97;
    this.vy *= 0.97;
    this.x += this.vx;
    this.y += this.vy;
    this.angle += this.spin;
    this.life--;
    // Bounce edges
    if (this.x < 0 || this.x > W) this.vx *= -0.8;
    if (this.y < 0 || this.y > H) this.vy *= -0.8;
    return this.life > 0;
  }
  draw() {
    const alpha = Math.pow(this.life / this.maxLife, 0.5);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    if (mode === 2) {
      // Flor: pétala
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size*2, this.size*0.8, 0, 0, Math.PI*2);
      ctx.fill();
    } else if (mode === 3) {
      // Matrix: caractere
      ctx.fillStyle = this.color;
      ctx.font = \`\${this.size*5}px monospace\`;
      ctx.fillText(String.fromCharCode(0x30A0 + Math.floor(this.life/4)%96), 0, 0);
    } else {
      // Círculo com glow
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(0, 0, this.size, 0, Math.PI*2);
      ctx.fill();
    }
    ctx.restore();
  }
}

function drawConnections() {
  const near = particles.slice(0, 80);
  for (let i = 0; i < near.length; i++) {
    for (let j = i+1; j < near.length; j++) {
      const dx = near[i].x - near[j].x;
      const dy = near[i].y - near[j].y;
      const d = Math.sqrt(dx*dx + dy*dy);
      if (d < 80) {
        const alpha = (1 - d/80) * 0.3 * (near[i].life/near[i].maxLife);
        ctx.strokeStyle = near[i].color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(near[i].x, near[i].y);
        ctx.lineTo(near[j].x, near[j].y);
        ctx.stroke();
      }
    }
  }
  ctx.globalAlpha = 1;
}

function spawnAtCursor(n = 3) {
  const palette = PALETTES[mode];
  for (let i = 0; i < n; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 3 + 0.5;
    const color = palette[Math.floor(Math.random()*palette.length)];
    if (mode === 1) { // Teia — slow
      particles.push(new Particle(mx, my, Math.cos(angle)*speed*0.4, Math.sin(angle)*speed*0.4, color, 200, 2));
    } else if (mode === 2) { // Flor
      particles.push(new Particle(mx, my, Math.cos(angle)*speed, Math.sin(angle)*speed*0.3, color, 150, 4));
    } else {
      particles.push(new Particle(mx, my, Math.cos(angle)*speed, Math.sin(angle)*speed, color));
    }
  }
  if (particles.length > 500) particles.splice(0, 10);
}

function burst() {
  for (let i = 0; i < 80; i++) {
    const angle = (i / 80) * Math.PI * 2;
    const speed = Math.random() * 6 + 2;
    const color = PALETTES[mode][i % PALETTES[mode].length];
    particles.push(new Particle(mx, my, Math.cos(angle)*speed, Math.sin(angle)*speed, color, 180, Math.random()*4+1));
  }
}

function changeMode() {
  mode = (mode + 1) % MODES.length;
  particles = [];
  document.getElementById('info').textContent = MODES[mode];
  setTimeout(() => { document.getElementById('info').textContent = 'Toque ou mova o mouse'; }, 2000);
}

function clear() { particles = []; }

function animate() {
  requestAnimationFrame(animate);
  frame++;
  // Fade trail
  ctx.fillStyle = mode === 3 ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.08)';
  ctx.fillRect(0, 0, W, H);

  // Auto-spawn
  if (frame % 3 === 0) spawnAtCursor(2);

  // Background geometry
  if (mode === 0 && frame % 60 === 0) {
    // Random star burst
    const rx = Math.random()*W, ry = Math.random()*H;
    const r = Math.random()*50+20;
    const color = PALETTES[0][Math.floor(Math.random()*PALETTES[0].length)];
    ctx.save();
    ctx.globalAlpha = 0.03;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(rx, ry, r, 0, Math.PI*2);
    ctx.stroke();
    ctx.restore();
  }

  if (mode === 1) drawConnections();

  particles = particles.filter(p => { p.update(); p.draw(); return p.life > 0; });

  // Cursor glow
  const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 60);
  const col = PALETTES[mode][0];
  grad.addColorStop(0, col + '20');
  grad.addColorStop(1, 'transparent');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(mx, my, 60, 0, Math.PI*2);
  ctx.fill();
}

// Events
function updateMouse(e) {
  if (e.touches) {
    mx = e.touches[0].clientX;
    my = e.touches[0].clientY;
  } else {
    mx = e.clientX;
    my = e.clientY;
  }
}
window.addEventListener('mousemove', e => { updateMouse(e); spawnAtCursor(1); });
window.addEventListener('touchmove', e => { e.preventDefault(); updateMouse(e); spawnAtCursor(3); }, { passive: false });
window.addEventListener('click', burst);
window.addEventListener('touchstart', e => { updateMouse(e); burst(); });

animate();`}},{id:"landing-page",name:"Landing Page",description:"Página de apresentação profissional para mostrar a clientes",icon:"globe",files:{"index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Transformamos sua ideia em realidade digital">
  <title>Studio Digital — Criamos para o futuro</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- NAV -->
  <nav class="nav" id="nav">
    <div class="nav-inner">
      <a href="#" class="nav-logo">⚡ Studio</a>
      <div class="nav-links">
        <a href="#servicos">Serviços</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#contato">Contato</a>
      </div>
      <a href="#contato" class="btn-nav">Falar Agora</a>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="inicio">
    <div class="hero-bg">
      <div class="blob blob1"></div>
      <div class="blob blob2"></div>
      <div class="blob blob3"></div>
    </div>
    <div class="hero-content">
      <span class="badge">🚀 Transformação Digital</span>
      <h1>Criamos experiências <span class="gradient-text">digitais incríveis</span></h1>
      <p>Sites, apps e sistemas que convertem visitantes em clientes. Design moderno, código limpo, resultados reais.</p>
      <div class="hero-btns">
        <a href="#contato" class="btn btn-primary">Começar Projeto</a>
        <a href="#portfolio" class="btn btn-ghost">Ver Trabalhos →</a>
      </div>
      <div class="hero-stats">
        <div class="stat"><strong>120+</strong><span>Projetos</span></div>
        <div class="stat-div"></div>
        <div class="stat"><strong>98%</strong><span>Satisfação</span></div>
        <div class="stat-div"></div>
        <div class="stat"><strong>5★</strong><span>Avaliação</span></div>
      </div>
    </div>
  </section>

  <!-- SERVIÇOS -->
  <section class="section" id="servicos">
    <div class="container">
      <div class="section-header">
        <span class="tag">O que fazemos</span>
        <h2>Soluções completas<br>para o seu negócio</h2>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🌐</div>
          <h3>Sites & Landing Pages</h3>
          <p>Sites responsivos e otimizados que carregam rápido e convertem visitantes em clientes.</p>
          <ul><li>✓ Design moderno</li><li>✓ Mobile-first</li><li>✓ SEO otimizado</li></ul>
        </div>
        <div class="service-card featured">
          <div class="service-badge">Mais popular</div>
          <div class="service-icon">📱</div>
          <h3>Aplicativos PWA</h3>
          <p>Apps instaláveis no celular sem precisar de App Store. Funciona offline com visual nativo.</p>
          <ul><li>✓ Instalável no celular</li><li>✓ Funciona offline</li><li>✓ Push notifications</li></ul>
        </div>
        <div class="service-card">
          <div class="service-icon">⚙️</div>
          <h3>Sistemas & APIs</h3>
          <p>Back-end robusto com APIs REST, banco de dados e autenticação segura.</p>
          <ul><li>✓ Node.js / Python</li><li>✓ PostgreSQL / MongoDB</li><li>✓ Deploy na nuvem</li></ul>
        </div>
      </div>
    </div>
  </section>

  <!-- PORTFOLIO -->
  <section class="section section-dark" id="portfolio">
    <div class="container">
      <div class="section-header">
        <span class="tag">Portfólio</span>
        <h2>Projetos que entregamos</h2>
      </div>
      <div class="portfolio-grid">
        <div class="portfolio-card" style="--c:#6366f1">
          <div class="portfolio-visual">🛒</div>
          <h4>E-commerce Premium</h4>
          <p>Loja virtual completa com pagamento, estoque e painel admin.</p>
          <span class="tech-tag">React</span><span class="tech-tag">Node.js</span><span class="tech-tag">Stripe</span>
        </div>
        <div class="portfolio-card" style="--c:#10b981">
          <div class="portfolio-visual">📊</div>
          <h4>Dashboard Analytics</h4>
          <p>Painel de métricas em tempo real com gráficos e relatórios.</p>
          <span class="tech-tag">Vue</span><span class="tech-tag">Python</span><span class="tech-tag">PostgreSQL</span>
        </div>
        <div class="portfolio-card" style="--c:#f59e0b">
          <div class="portfolio-visual">🏥</div>
          <h4>App de Agendamento</h4>
          <p>Sistema de agendamentos para clínica com notificações automáticas.</p>
          <span class="tech-tag">PWA</span><span class="tech-tag">Firebase</span><span class="tech-tag">WhatsApp API</span>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTATO -->
  <section class="section" id="contato">
    <div class="container">
      <div class="contact-box">
        <div class="contact-info">
          <span class="tag">Vamos conversar</span>
          <h2>Pronto para começar seu projeto?</h2>
          <p>Respondo em até 24 horas. Orçamento gratuito e sem compromisso.</p>
          <div class="contact-links">
            <a href="https://wa.me/5511999999999" class="contact-link">💬 WhatsApp</a>
            <a href="mailto:contato@studio.com" class="contact-link">✉️ E-mail</a>
            <a href="https://instagram.com" class="contact-link">📸 Instagram</a>
          </div>
        </div>
        <form class="contact-form" onsubmit="sendForm(event)">
          <input type="text" placeholder="Seu nome" required>
          <input type="email" placeholder="E-mail" required>
          <select>
            <option value="">Tipo de projeto</option>
            <option>Site / Landing Page</option>
            <option>Aplicativo PWA</option>
            <option>Sistema / API</option>
            <option>Outro</option>
          </select>
          <textarea placeholder="Descreva seu projeto..." rows="4" required></textarea>
          <button type="submit" class="btn btn-primary">Enviar Mensagem ✉️</button>
          <p id="form-msg" class="form-msg hidden">✅ Mensagem enviada! Em breve te respondo.</p>
        </form>
      </div>
    </div>
  </section>

  <footer class="footer">
    <p>© 2025 Studio Digital · Feito com ❤️ no Brasil</p>
  </footer>

  <script src="script.js"><\/script>
</body>
</html>`,"style.css":`*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #050810;
  --surface: #0d1117;
  --card: #111827;
  --border: rgba(255,255,255,0.07);
  --text: #f1f5f9;
  --muted: #94a3b8;
  --accent: #6366f1;
  --accent2: #8b5cf6;
  --green: #10b981;
  --radius: 20px;
}

html { scroll-behavior: smooth; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); overflow-x: hidden; }

/* NAV */
.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 16px 0; transition: background 0.3s; }
.nav.scrolled { background: rgba(5,8,16,0.9); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1100px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; gap: 32px; }
.nav-logo { font-size: 20px; font-weight: 800; color: var(--text); text-decoration: none; }
.nav-links { display: flex; gap: 24px; flex: 1; }
.nav-links a { color: var(--muted); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
.nav-links a:hover { color: var(--text); }
.btn-nav { padding: 9px 20px; background: var(--accent); color: white; border-radius: 50px; text-decoration: none; font-size: 13px; font-weight: 600; white-space: nowrap; }

/* HERO */
.hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; position: relative; overflow: hidden; padding: 120px 24px 80px; }
.hero-bg { position: absolute; inset: 0; pointer-events: none; }
.blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.15; animation: float 8s ease-in-out infinite; }
.blob1 { width: 600px; height: 600px; background: var(--accent); top: -200px; left: -200px; }
.blob2 { width: 500px; height: 500px; background: var(--accent2); bottom: -100px; right: -100px; animation-delay: -3s; }
.blob3 { width: 400px; height: 400px; background: var(--green); top: 50%; left: 50%; transform: translate(-50%,-50%); animation-delay: -6s; }
@keyframes float { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(30px,-30px) scale(1.05); } 66% { transform: translate(-20px,20px) scale(0.95); } }

.hero-content { position: relative; max-width: 700px; }
.badge { display: inline-block; padding: 6px 16px; background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3); border-radius: 50px; font-size: 13px; color: #a5b4fc; font-weight: 600; margin-bottom: 24px; }
.hero h1 { font-size: clamp(32px, 5vw, 64px); font-weight: 900; line-height: 1.1; margin-bottom: 20px; }
.gradient-text { background: linear-gradient(135deg, var(--accent), var(--accent2), var(--green)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero p { font-size: 18px; color: var(--muted); max-width: 500px; margin: 0 auto 32px; line-height: 1.7; }
.hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }

.btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 50px; font-size: 15px; font-weight: 600; text-decoration: none; border: none; cursor: pointer; transition: all 0.2s; }
.btn-primary { background: linear-gradient(135deg, var(--accent), var(--accent2)); color: white; box-shadow: 0 4px 20px rgba(99,102,241,0.4); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(99,102,241,0.5); }
.btn-ghost { background: transparent; border: 1.5px solid var(--border); color: var(--muted); }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

.hero-stats { display: flex; align-items: center; justify-content: center; gap: 24px; }
.stat { text-align: center; } .stat strong { display: block; font-size: 28px; font-weight: 900; color: var(--text); }
.stat span { font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }
.stat-div { width: 1px; height: 40px; background: var(--border); }

/* SECTIONS */
.section { padding: 100px 0; }
.section-dark { background: var(--surface); }
.container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
.section-header { text-align: center; margin-bottom: 56px; }
.tag { display: inline-block; padding: 4px 14px; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2); border-radius: 50px; font-size: 12px; color: var(--accent); font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
.section-header h2 { font-size: clamp(28px, 4vw, 44px); font-weight: 800; line-height: 1.2; }

/* SERVICES */
.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
.service-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 32px; position: relative; transition: all 0.3s; }
.service-card:hover { border-color: rgba(99,102,241,0.3); transform: translateY(-4px); }
.service-card.featured { border-color: rgba(99,102,241,0.4); background: linear-gradient(135deg, rgba(99,102,241,0.05), rgba(139,92,246,0.05)); }
.service-badge { position: absolute; top: -12px; left: 24px; background: linear-gradient(135deg, var(--accent), var(--accent2)); color: white; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 50px; }
.service-icon { font-size: 40px; margin-bottom: 16px; }
.service-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 10px; }
.service-card p { color: var(--muted); font-size: 14px; line-height: 1.6; margin-bottom: 16px; }
.service-card ul { list-style: none; display: flex; flex-direction: column; gap: 6px; }
.service-card li { font-size: 13px; color: var(--muted); }

/* PORTFOLIO */
.portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
.portfolio-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px; transition: all 0.3s; border-top: 3px solid var(--c, var(--accent)); }
.portfolio-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
.portfolio-visual { font-size: 40px; margin-bottom: 16px; }
.portfolio-card h4 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.portfolio-card p { color: var(--muted); font-size: 14px; line-height: 1.6; margin-bottom: 16px; }
.tech-tag { display: inline-block; padding: 3px 10px; border-radius: 50px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); font-size: 11px; color: var(--muted); margin: 2px; }

/* CONTACT */
.contact-box { display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; align-items: center; }
.contact-info h2 { font-size: clamp(24px, 3vw, 36px); font-weight: 800; margin: 12px 0 16px; line-height: 1.2; }
.contact-info p { color: var(--muted); font-size: 16px; line-height: 1.7; margin-bottom: 28px; }
.contact-links { display: flex; flex-direction: column; gap: 12px; }
.contact-link { display: inline-flex; align-items: center; gap: 10px; padding: 12px 20px; background: var(--card); border: 1px solid var(--border); border-radius: 12px; color: var(--text); text-decoration: none; font-size: 14px; font-weight: 500; transition: all 0.2s; }
.contact-link:hover { border-color: var(--accent); color: var(--accent); }
.contact-form { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 32px; display: flex; flex-direction: column; gap: 12px; }
.contact-form input, .contact-form select, .contact-form textarea { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 12px 16px; color: var(--text); font-size: 14px; outline: none; transition: border 0.2s; font-family: inherit; }
.contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus { border-color: var(--accent); }
.contact-form select option { background: var(--surface); }
.form-msg { font-size: 13px; color: var(--green); text-align: center; }

/* FOOTER */
.footer { text-align: center; padding: 32px 24px; color: var(--muted); font-size: 13px; border-top: 1px solid var(--border); }

@media (max-width: 768px) {
  .nav-links { display: none; }
  .contact-box { grid-template-columns: 1fr; }
  .blob { display: none; }
}`,"script.js":`// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Form submit
function sendForm(e) {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.classList.remove('hidden');
  e.target.reset();
  setTimeout(() => msg.classList.add('hidden'), 5000);
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.style.opacity = '1';
      el.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .portfolio-card, .contact-box').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});`}},{id:"fullstack-neon",name:"Projeto Profissional Full-Stack + Neon DB",description:"API REST Express + PostgreSQL Neon + JWT Auth + VCS pronto (gitignore, README, .env.example)",icon:"server",files:{"package.json":JSON.stringify({name:"meu-projeto",version:"1.0.0",description:"Projeto Full-Stack profissional com Neon DB",main:"src/index.js",scripts:{start:"node src/index.js",dev:"nodemon src/index.js",migrate:"node db/migrate.js",test:"jest"},dependencies:{express:"^4.18.2",cors:"^2.8.5",dotenv:"^16.3.1","@neondatabase/serverless":"^0.9.5",bcryptjs:"^2.4.3",jsonwebtoken:"^9.0.2",helmet:"^7.1.0","express-rate-limit":"^7.1.5"},devDependencies:{nodemon:"^3.0.2"}},null,2),".env.example":`# =================================================
# VARIAVEIS DE AMBIENTE — NUNCA COMMITE O .env REAL
# Copie este arquivo: cp .env.example .env
# Preencha com seus valores reais
# =================================================

# Banco de dados Neon (https://neon.tech — gratuito)
DATABASE_URL=postgresql://usuario:senha@ep-xxx.us-east-2.aws.neon.tech/meudb?sslmode=require

# Servidor
PORT=3000
NODE_ENV=development

# Segurança JWT (gere uma chave aleatória forte)
JWT_SECRET=substitua-por-chave-secreta-forte-de-32-chars-min
JWT_EXPIRES_IN=7d

# CORS — domínios permitidos (separe por virgula)
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173`,".gitignore":`# Dependencias
node_modules/
.pnp
.pnp.js
__pycache__/
*.py[cod]
venv/

# Variaveis de ambiente (NUNCA suba .env real)
.env
.env.local
.env.*.local

# Build
dist/
build/
.next/
out/
.cache/

# Banco de dados local
*.db
*.sqlite
*.sqlite3

# Sistema operacional
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp

# Logs
*.log
npm-debug.log*

# Testes
coverage/
.nyc_output/

# Arquivos pesados
*.mp4
*.mov
*.zip
*.tar.gz`,"README.md":`# Meu Projeto Full-Stack

> API REST profissional com autenticação JWT e banco PostgreSQL (Neon)

## Stack
- **Backend**: Node.js + Express
- **Banco de dados**: PostgreSQL via Neon DB (serverless, gratuito)
- **Autenticação**: JWT (JSON Web Tokens)
- **Segurança**: Helmet, CORS, Rate Limiting

## Setup Rápido

\`\`\`bash
# 1. Clone o repositório
git clone <sua-url>
cd meu-projeto

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com seu DATABASE_URL do Neon

# 4. Inicialize o banco de dados
npm run migrate

# 5. Inicie o servidor
npm run dev
\`\`\`

## Variáveis de Ambiente
Veja [.env.example](.env.example) para a lista completa.

## Rotas da API

### Autenticação
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /api/auth/register | Criar conta |
| POST | /api/auth/login | Fazer login |

### Usuários (protegido)
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/usuarios/perfil | Meu perfil |

## Deploy

### Railway (recomendado)
1. \`git push\` para GitHub
2. Importe o repo em [railway.app](https://railway.app)
3. Configure \`DATABASE_URL\` nas variáveis de ambiente

### Render
1. \`git push\` para GitHub
2. Crie Web Service em [render.com](https://render.com)
3. Build: \`npm install\` | Start: \`npm start\`

## Enviando para GitHub
\`\`\`bash
git init
git add .
git commit -m "Projeto inicial"
git remote add origin <url-do-seu-repo>
git push -u origin main
\`\`\`
`,"src/index.js":`const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const { initDb } = require('../db/neon');
const authRoutes = require('./routes/auth');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
const PORT = process.env.PORT || 3000;

// Segurança
app.use(helmet());
app.use(cors({
  origin: (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(','),
  credentials: true
}));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // max 100 requests por IP
  message: { erro: 'Muitas requisições. Tente novamente em 15 minutos.' }
}));
app.use(express.json({ limit: '10mb' }));

// Rotas
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuariosRoutes);

// Erro 404
app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' });
});

// Erro global
app.use((err, req, res, next) => {
  console.error('Erro:', err.message);
  res.status(500).json({ erro: 'Erro interno do servidor' });
});

// Inicia servidor
async function start() {
  try {
    await initDb();
    app.listen(PORT, () => {
      console.log(\`✅ Servidor rodando na porta \${PORT}\`);
      console.log(\`🌐 Health check: http://localhost:\${PORT}/api/health\`);
    });
  } catch (err) {
    console.error('❌ Falha ao iniciar:', err.message);
    process.exit(1);
  }
}

start();`,"src/routes/auth.js":`const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sql } = require('../../db/neon');

const router = express.Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: 'Nome, email e senha são obrigatórios' });
    }
    if (senha.length < 6) {
      return res.status(400).json({ erro: 'Senha deve ter no mínimo 6 caracteres' });
    }
    const [existente] = await sql\`SELECT id FROM usuarios WHERE email = \${email}\`;
    if (existente) {
      return res.status(409).json({ erro: 'E-mail já cadastrado' });
    }
    const senhaHash = await bcrypt.hash(senha, 12);
    const [usuario] = await sql\`
      INSERT INTO usuarios (nome, email, senha_hash)
      VALUES (\${nome}, \${email}, \${senhaHash})
      RETURNING id, nome, email, criado_em
    \`;
    const token = jwt.sign({ id: usuario.id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    });
    res.status(201).json({ mensagem: 'Conta criada com sucesso!', token, usuario });
  } catch (err) {
    console.error('Erro no registro:', err.message);
    res.status(500).json({ erro: 'Erro ao criar conta' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;
    if (!email || !senha) {
      return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
    }
    const [usuario] = await sql\`SELECT * FROM usuarios WHERE email = \${email}\`;
    if (!usuario) {
      return res.status(401).json({ erro: 'E-mail ou senha incorretos' });
    }
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);
    if (!senhaCorreta) {
      return res.status(401).json({ erro: 'E-mail ou senha incorretos' });
    }
    const token = jwt.sign({ id: usuario.id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    });
    res.json({
      mensagem: 'Login realizado com sucesso!',
      token,
      usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email }
    });
  } catch (err) {
    console.error('Erro no login:', err.message);
    res.status(500).json({ erro: 'Erro ao fazer login' });
  }
});

module.exports = router;`,"src/routes/usuarios.js":`const express = require('express');
const { autenticar } = require('../middleware/auth');
const { sql } = require('../../db/neon');

const router = express.Router();

// GET /api/usuarios/perfil (protegido)
router.get('/perfil', autenticar, async (req, res) => {
  try {
    const [usuario] = await sql\`
      SELECT id, nome, email, criado_em FROM usuarios WHERE id = \${req.usuario.id}
    \`;
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json({ usuario });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar perfil' });
  }
});

module.exports = router;`,"src/middleware/auth.js":`const jwt = require('jsonwebtoken');

function autenticar(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ erro: 'Token de autenticação não fornecido' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ erro: 'Token inválido ou expirado' });
  }
}

module.exports = { autenticar };`,"db/neon.js":`const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL não configurado! Crie o arquivo .env');
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

async function initDb() {
  await sql\`
    CREATE TABLE IF NOT EXISTS usuarios (
      id        SERIAL PRIMARY KEY,
      nome      VARCHAR(255) NOT NULL,
      email     VARCHAR(255) UNIQUE NOT NULL,
      senha_hash VARCHAR(255) NOT NULL,
      criado_em TIMESTAMP DEFAULT NOW()
    )
  \`;
  console.log('✅ Banco de dados Neon pronto!');
}

module.exports = { sql, initDb };`,"db/migrate.js":`require('dotenv').config();
const { initDb } = require('./neon');

console.log('🔄 Iniciando migração do banco de dados...');
initDb()
  .then(() => {
    console.log('✅ Migração concluída com sucesso!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Falha na migração:', err.message);
    process.exit(1);
  });`}},{id:"multi-ia",name:"Chat Multi-Modelos de IA",description:"App web para conversar com Groq, OpenAI, Gemini, Anthropic, Grok, Perplexity e OpenRouter. Interface em português, streaming em tempo real.",icon:"cpu",files:{"package.json":`{
  "name": "multi-ia",
  "version": "1.0.0",
  "description": "Chat com múltiplos provedores de IA",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}`,".env.example":`# ╔══════════════════════════════════════════════════════╗
# ║  Multi-IA — Chaves de API                            ║
# ║  Copie este arquivo para .env e preencha as chaves   ║
# ╚══════════════════════════════════════════════════════╝

# Groq (GRÁTIS — recomendado para começar)
# https://console.groq.com → API Keys → Create API Key
GROQ_API_KEY=gsk_...

# OpenAI
# https://platform.openai.com/api-keys
OPENAI_API_KEY=sk-...

# Google Gemini
# https://aistudio.google.com/apikey
GEMINI_API_KEY=AIza...

# Anthropic (Claude)
# https://console.anthropic.com/settings/keys
ANTHROPIC_API_KEY=sk-ant-...

# xAI (Grok)
# https://console.x.ai
XAI_API_KEY=xai-...

# OpenRouter (acessa múltiplos modelos com uma chave)
# https://openrouter.ai/settings/keys
OPENROUTER_API_KEY=sk-or-...

# Perplexity
# https://www.perplexity.ai/settings/api
PERPLEXITY_API_KEY=pplx-...

PORT=3000`,".gitignore":`.env
node_modules/
*.log`,"server.js":`require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ─── Configuração dos provedores ─────────────────────────────────────────────
const PROVIDERS = {
  groq: {
    nome: 'Groq',
    url: 'https://api.groq.com/openai/v1/chat/completions',
    modelo: 'llama-3.3-70b-versatile',
    chave: () => process.env.GROQ_API_KEY,
    cor: '#f55036',
  },
  openai: {
    nome: 'OpenAI',
    url: 'https://api.openai.com/v1/chat/completions',
    modelo: 'gpt-4o-mini',
    chave: () => process.env.OPENAI_API_KEY,
    cor: '#10a37f',
  },
  gemini: {
    nome: 'Google Gemini',
    url: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',
    modelo: 'gemini-2.0-flash',
    chave: () => process.env.GEMINI_API_KEY,
    cor: '#4285f4',
  },
  anthropic: {
    nome: 'Anthropic (Claude)',
    url: 'https://api.anthropic.com/v1/messages',
    modelo: 'claude-haiku-4-20250514',
    chave: () => process.env.ANTHROPIC_API_KEY,
    cor: '#d4a574',
    isAnthropic: true,
  },
  xai: {
    nome: 'xAI (Grok)',
    url: 'https://api.x.ai/v1/chat/completions',
    modelo: 'grok-2-latest',
    chave: () => process.env.XAI_API_KEY,
    cor: '#e7e7e7',
  },
  openrouter: {
    nome: 'OpenRouter',
    url: 'https://openrouter.ai/api/v1/chat/completions',
    modelo: 'openai/gpt-4o-mini',
    chave: () => process.env.OPENROUTER_API_KEY,
    cor: '#6366f1',
  },
  perplexity: {
    nome: 'Perplexity',
    url: 'https://api.perplexity.ai/chat/completions',
    modelo: 'sonar-pro',
    chave: () => process.env.PERPLEXITY_API_KEY,
    cor: '#20808d',
  },
};

// ─── GET /api/provedores — lista provedores com status ───────────────────────
app.get('/api/provedores', (req, res) => {
  const lista = Object.entries(PROVIDERS).map(([id, p]) => ({
    id,
    nome: p.nome,
    modelo: p.modelo,
    cor: p.cor,
    ativo: !!p.chave(),
  }));
  res.json(lista);
});

// ─── POST /api/chat — envia mensagem para o provedor escolhido ───────────────
app.post('/api/chat', async (req, res) => {
  const { provedor, mensagens, modelo, apiKeyOverride } = req.body;

  const cfg = PROVIDERS[provedor];
  if (!cfg) return res.status(400).json({ erro: 'Provedor inválido: ' + provedor });

  const apiKey = apiKeyOverride || cfg.chave();
  if (!apiKey) return res.status(400).json({
    erro: 'Chave de API não configurada para ' + cfg.nome +
          '. Adicione no arquivo .env ou informe diretamente.',
  });

  const modeloFinal = modelo || cfg.modelo;

  try {
    let body, headers;

    // Anthropic usa formato diferente
    if (cfg.isAnthropic) {
      const sys = mensagens.find(m => m.role === 'system');
      const msgs = mensagens.filter(m => m.role !== 'system');
      body = JSON.stringify({
        model: modeloFinal,
        max_tokens: 8192,
        system: sys?.content || 'Você é um assistente prestativo. Responda em português.',
        messages: msgs,
        stream: true,
      });
      headers = {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      };
    } else {
      body = JSON.stringify({
        model: modeloFinal,
        messages: mensagens,
        stream: true,
        max_tokens: 8192,
      });
      headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'Multi-IA App',
      };
    }

    const resp = await fetch(cfg.url, { method: 'POST', headers, body });

    if (!resp.ok) {
      const errText = await resp.text();
      return res.status(resp.status).json({ erro: errText.substring(0, 500) });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('X-Accel-Buffering', 'no');

    if (cfg.isAnthropic) {
      // Adaptador Anthropic → OpenAI SSE
      const reader = resp.body.getReader();
      const dec = new TextDecoder();
      let buf = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        const lines = buf.split('\\n');
        buf = lines.pop() || '';
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const j = line.slice(6).trim();
          if (!j || j === '[DONE]') continue;
          try {
            const p = JSON.parse(j);
            const delta = p.delta?.text || '';
            if (delta) {
              const openaiChunk = { choices: [{ delta: { content: delta } }] };
              res.write('data: ' + JSON.stringify(openaiChunk) + '\\n\\n');
            }
          } catch {}
        }
      }
    } else {
      // OpenAI-compatible: repassa direto
      const reader = resp.body.getReader();
      const dec = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(dec.decode(value, { stream: true }));
      }
    }

    res.write('data: [DONE]\\n\\n');
    res.end();
  } catch (err) {
    if (!res.headersSent) res.status(500).json({ erro: err.message });
    else res.end();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('🤖 Multi-IA rodando em http://localhost:' + PORT);
  console.log('📋 Provedores configurados:');
  Object.entries(PROVIDERS).forEach(([id, p]) => {
    const ok = !!p.chave();
    console.log('  ' + (ok ? '✅' : '❌') + ' ' + p.nome + ' (' + id + ')');
  });
});`,"public/index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <title>Multi-IA — Chat com vários modelos</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: #0f1117;
      --panel: #1a1d2e;
      --border: #2a2d3e;
      --text: #e2e8f0;
      --muted: #64748b;
      --accent: #6366f1;
    }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); height: 100dvh; display: flex; flex-direction: column; overflow: hidden; }

    /* Header */
    header { padding: 12px 16px; background: var(--panel); border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
    header h1 { font-size: 1rem; font-weight: 700; flex: 1; }
    header span { font-size: 11px; color: var(--muted); }

    /* Seletor de provedor */
    .provider-bar { display: flex; gap: 6px; padding: 10px 12px; background: var(--panel); border-bottom: 1px solid var(--border); overflow-x: auto; flex-shrink: 0; scrollbar-width: none; }
    .provider-bar::-webkit-scrollbar { display: none; }
    .prov-btn { white-space: nowrap; padding: 5px 12px; border-radius: 20px; border: 1px solid transparent; font-size: 12px; cursor: pointer; transition: all 0.2s; background: rgba(255,255,255,0.04); color: var(--muted); }
    .prov-btn.active { color: #fff; border-color: currentColor; }
    .prov-btn.inactive { opacity: 0.4; cursor: not-allowed; }
    .prov-btn.ativo:hover { opacity: 0.9; }

    /* Key override */
    .key-bar { padding: 8px 12px; background: #0d1117; border-bottom: 1px solid var(--border); display: flex; gap-6px; gap: 6px; flex-shrink: 0; display: none; }
    .key-bar.show { display: flex; }
    .key-bar input { flex: 1; background: var(--panel); border: 1px solid var(--border); border-radius: 8px; padding: 6px 10px; font-size: 12px; color: var(--text); font-family: monospace; outline: none; }
    .key-bar input:focus { border-color: var(--accent); }
    .key-bar button { padding: 6px 12px; border-radius: 8px; background: var(--accent); border: none; color: #fff; font-size: 12px; cursor: pointer; }

    /* Chat */
    #chat { flex: 1; overflow-y: auto; padding: 12px; display: flex; flex-direction: column; gap: 10px; }
    .msg { max-width: 85%; border-radius: 12px; padding: 10px 14px; font-size: 13px; line-height: 1.6; }
    .msg.user { background: #1e3a5f; color: #c8e6ff; align-self: flex-end; border-bottom-right-radius: 4px; }
    .msg.bot { background: var(--panel); border: 1px solid var(--border); align-self: flex-start; border-bottom-left-radius: 4px; }
    .msg.bot .prov-tag { font-size: 10px; font-weight: 700; margin-bottom: 4px; opacity: 0.7; }
    .msg pre { background: #0d1117; border-radius: 6px; padding: 8px; font-size: 11px; overflow-x: auto; margin: 6px 0; }
    .msg code { font-family: 'Consolas', monospace; }
    .cursor { display: inline-block; width: 2px; height: 14px; background: var(--accent); margin-left: 2px; animation: blink 1s infinite; vertical-align: middle; }
    @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
    .empty-state { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; color: var(--muted); text-align: center; padding: 24px; }
    .empty-state h2 { font-size: 1.2rem; color: var(--text); }
    .empty-state p { font-size: 13px; line-height: 1.6; max-width: 400px; }
    .chips { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-top: 8px; }
    .chip { padding: 6px 14px; border-radius: 20px; border: 1px solid var(--border); font-size: 12px; cursor: pointer; background: var(--panel); transition: all 0.2s; }
    .chip:hover { border-color: var(--accent); color: var(--accent); }

    /* Input bar */
    .input-bar { padding: 10px 12px; background: var(--panel); border-top: 1px solid var(--border); display: flex; gap: 8px; flex-shrink: 0; }
    .input-bar textarea { flex: 1; background: var(--bg); border: 1px solid var(--border); border-radius: 12px; padding: 10px 14px; font-size: 13px; color: var(--text); resize: none; outline: none; font-family: inherit; min-height: 44px; max-height: 120px; line-height: 1.5; }
    .input-bar textarea:focus { border-color: var(--accent); }
    .send-btn { width: 44px; height: 44px; border-radius: 12px; background: var(--accent); border: none; color: #fff; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: opacity 0.2s; }
    .send-btn:disabled { opacity: 0.4; cursor: not-allowed; }
    .stop-btn { width: 44px; height: 44px; border-radius: 12px; background: #dc2626; border: none; color: #fff; font-size: 16px; cursor: pointer; flex-shrink: 0; }
    .model-sel { padding: 8px 10px; border-radius: 8px; background: var(--bg); border: 1px solid var(--border); color: var(--muted); font-size: 11px; outline: none; cursor: pointer; }

    /* Config overlay */
    .cfg-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 100; display: none; align-items: flex-end; }
    .cfg-overlay.show { display: flex; }
    .cfg-panel { width: 100%; background: var(--panel); border-radius: 20px 20px 0 0; padding: 20px; max-height: 80vh; overflow-y: auto; }
    .cfg-panel h3 { font-size: 14px; font-weight: 700; margin-bottom: 12px; }
    .cfg-row { margin-bottom: 10px; }
    .cfg-row label { font-size: 11px; color: var(--muted); display: block; margin-bottom: 4px; }
    .cfg-row input { width: 100%; background: var(--bg); border: 1px solid var(--border); border-radius: 8px; padding: 8px 12px; font-size: 12px; color: var(--text); font-family: monospace; outline: none; }
    .cfg-row input:focus { border-color: var(--accent); }
    .cfg-close { width: 100%; padding: 12px; background: var(--accent); border: none; color: #fff; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; margin-top: 8px; }
  </style>
</head>
<body>

<header>
  <span style="font-size:20px">🤖</span>
  <h1>Multi-IA Chat</h1>
  <button onclick="toggleCfg()" style="padding:6px 12px;background:rgba(255,255,255,0.05);border:1px solid #2a2d3e;border-radius:8px;color:#94a3b8;font-size:12px;cursor:pointer">
    ⚙️ Chaves
  </button>
</header>

<div class="provider-bar" id="provBar"></div>

<div id="chat">
  <div class="empty-state" id="emptyState">
    <span style="font-size:48px">🤖</span>
    <h2>Multi-IA Chat</h2>
    <p>Converse com Groq, OpenAI, Gemini, Claude, Grok, OpenRouter e Perplexity — tudo em um lugar.</p>
    <div class="chips">
      <div class="chip" onclick="setPrompt('Olá! Quem é você e qual modelo está usando?')">Quem é você?</div>
      <div class="chip" onclick="setPrompt('Explique inteligência artificial em linguagem simples.')">O que é IA?</div>
      <div class="chip" onclick="setPrompt('Escreva um código Python para ler um arquivo CSV e mostrar as primeiras 5 linhas.')">Código Python</div>
      <div class="chip" onclick="setPrompt('Me dê 5 ideias de negócios baseados em IA para um advogado.')">Ideias para advogado</div>
    </div>
  </div>
</div>

<div class="input-bar">
  <select id="modelSel" class="model-sel" title="Modelo"></select>
  <textarea id="input" placeholder="Digite sua mensagem… (Enter para enviar)" rows="1"
    onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();send()}"
    oninput="this.style.height='auto';this.style.height=Math.min(this.scrollHeight,120)+'px'"></textarea>
  <button class="stop-btn" id="stopBtn" style="display:none" onclick="abortStream()">⏹</button>
  <button class="send-btn" id="sendBtn" onclick="send()" disabled>➤</button>
</div>

<!-- Overlay de configuração de chaves -->
<div class="cfg-overlay" id="cfgOverlay" onclick="if(event.target===this)toggleCfg()">
  <div class="cfg-panel">
    <h3>🔑 Suas Chaves de API</h3>
    <p style="font-size:12px;color:#64748b;margin-bottom:14px">
      Salvas apenas no navegador (localStorage). Nunca enviadas para terceiros.
    </p>
    <div id="cfgFields"></div>
    <button class="cfg-close" onclick="saveCfgAndClose()">✓ Salvar e fechar</button>
  </div>
</div>

<script>
// ── Estado ───────────────────────────────────────────────────────────────────
let provedores = [];
let provAtivo = null;
let historico = [];
let controller = null;

const LS_KEYS = 'mia_api_keys';
const savedKeys = JSON.parse(localStorage.getItem(LS_KEYS) || '{}');

// ── Boot ─────────────────────────────────────────────────────────────────────
async function boot() {
  const resp = await fetch('/api/provedores');
  provedores = await resp.json();
  renderProvBar();
  const primeiro = provedores.find(p => p.ativo || savedKeys[p.id]) || provedores[0];
  if (primeiro) selectProv(primeiro.id);
  renderCfgFields();
}

function renderProvBar() {
  const bar = document.getElementById('provBar');
  bar.innerHTML = '';
  provedores.forEach(p => {
    const hasKey = p.ativo || !!savedKeys[p.id];
    const btn = document.createElement('button');
    btn.className = 'prov-btn' + (hasKey ? '' : ' inactive');
    btn.style.setProperty('--pc', p.cor);
    btn.textContent = (hasKey ? '' : '🔒 ') + p.nome;
    btn.dataset.id = p.id;
    if (hasKey) btn.onclick = () => selectProv(p.id);
    else btn.onclick = () => { toggleCfg(); };
    bar.appendChild(btn);
  });
}

function selectProv(id) {
  provAtivo = provedores.find(p => p.id === id);
  document.querySelectorAll('.prov-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.id === id);
    if (b.dataset.id === id && provAtivo) b.style.color = provAtivo.cor;
    else b.style.color = '';
  });
  // Atualiza select de modelos
  const modelos = getModelos(id);
  const sel = document.getElementById('modelSel');
  sel.innerHTML = modelos.map(m => '<option value="' + m.v + '">' + m.n + '</option>').join('');
  document.getElementById('sendBtn').disabled = false;
}

function getModelos(id) {
  const map = {
    groq:       [{v:'llama-3.3-70b-versatile',n:'Llama 3.3 70B'},{v:'llama-3.1-8b-instant',n:'Llama 3.1 8B (rápido)'},{v:'gemma2-9b-it',n:'Gemma2 9B'},{v:'mixtral-8x7b-32768',n:'Mixtral 8x7B'}],
    openai:     [{v:'gpt-4o-mini',n:'GPT-4o Mini'},{v:'gpt-4o',n:'GPT-4o'},{v:'gpt-3.5-turbo',n:'GPT-3.5 Turbo'}],
    gemini:     [{v:'gemini-2.0-flash',n:'Gemini 2.0 Flash'},{v:'gemini-1.5-pro',n:'Gemini 1.5 Pro'},{v:'gemini-1.5-flash',n:'Gemini 1.5 Flash'}],
    anthropic:  [{v:'claude-haiku-4-20250514',n:'Claude Haiku 4'},{v:'claude-sonnet-4-5',n:'Claude Sonnet 4.5'},{v:'claude-opus-4-5',n:'Claude Opus 4.5'}],
    xai:        [{v:'grok-2-latest',n:'Grok 2'},{v:'grok-3-mini',n:'Grok 3 Mini'}],
    openrouter: [{v:'openai/gpt-4o-mini',n:'GPT-4o Mini (OR)'},{v:'anthropic/claude-haiku',n:'Claude Haiku (OR)'},{v:'google/gemini-flash-1.5',n:'Gemini Flash (OR)'},{v:'meta-llama/llama-3.3-70b',n:'Llama 3.3 70B (OR)'}],
    perplexity: [{v:'sonar-pro',n:'Sonar Pro'},{v:'sonar',n:'Sonar'},{v:'sonar-reasoning',n:'Sonar Reasoning'}],
  };
  return map[id] || [{v: provedores.find(p=>p.id===id)?.modelo || 'default', n:'Padrão'}];
}

// ── Enviar mensagem ───────────────────────────────────────────────────────────
function setPrompt(txt) {
  const el = document.getElementById('input');
  el.value = txt;
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  el.focus();
}

async function send() {
  const el = document.getElementById('input');
  const text = el.value.trim();
  if (!text || !provAtivo) return;

  document.getElementById('emptyState')?.remove();
  el.value = '';
  el.style.height = '44px';

  historico.push({ role: 'user', content: text });
  addMsg('user', text);

  controller = new AbortController();
  document.getElementById('sendBtn').style.display = 'none';
  document.getElementById('stopBtn').style.display = 'flex';

  const botEl = addMsg('bot', '', provAtivo);
  const contentEl = botEl.querySelector('.bot-content');
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  contentEl.appendChild(cursor);

  try {
    const modelo = document.getElementById('modelSel').value;
    const resp = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        provedor: provAtivo.id,
        mensagens: [
          { role: 'system', content: 'Você é um assistente útil. Responda em português quando o usuário escrever em português.' },
          ...historico,
        ],
        modelo,
        apiKeyOverride: savedKeys[provAtivo.id] || undefined,
      }),
      signal: controller.signal,
    });

    if (!resp.ok) {
      const e = await resp.json();
      cursor.remove();
      contentEl.innerHTML = '<span style="color:#f87171">❌ ' + (e.erro || 'Erro ' + resp.status) + '</span>';
      historico.pop();
      return;
    }

    const reader = resp.body.getReader();
    const dec = new TextDecoder();
    let full = '', buf = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const lines = buf.split('\\n');
      buf = lines.pop() || '';
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const j = line.slice(6).trim();
        if (j === '[DONE]') continue;
        try {
          const p = JSON.parse(j);
          const delta = p.choices?.[0]?.delta?.content || '';
          if (delta) {
            full += delta;
            cursor.remove();
            contentEl.innerHTML = formatMd(full);
            contentEl.appendChild(cursor);
            document.getElementById('chat').scrollTop = 9999;
          }
        } catch {}
      }
    }

    cursor.remove();
    if (full) {
      historico.push({ role: 'assistant', content: full });
      contentEl.innerHTML = formatMd(full);
    }

  } catch (err) {
    cursor.remove();
    if (err.name !== 'AbortError') {
      contentEl.innerHTML = '<span style="color:#f87171">❌ ' + err.message + '</span>';
      historico.pop();
    }
  } finally {
    controller = null;
    document.getElementById('sendBtn').style.display = 'flex';
    document.getElementById('stopBtn').style.display = 'none';
    document.getElementById('chat').scrollTop = 9999;
  }
}

function abortStream() {
  controller?.abort();
}

// ── Renderização ─────────────────────────────────────────────────────────────
function addMsg(role, text, prov) {
  const chat = document.getElementById('chat');
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  if (role === 'bot' && prov) {
    div.innerHTML =
      '<div class="prov-tag" style="color:' + prov.cor + '">' + prov.nome + '</div>' +
      '<div class="bot-content">' + formatMd(text) + '</div>';
  } else {
    div.textContent = text;
  }
  chat.appendChild(div);
  chat.scrollTop = 9999;
  return div;
}

function formatMd(text) {
  return text
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\`\`\`(\\w*)\\n([\\s\\S]*?)\`\`\`/g, '<pre><code>$2</code></pre>')
    .replace(/\`([^\`]+)\`/g, '<code style="background:#0d1117;padding:1px 4px;border-radius:3px">$1</code>')
    .replace(/\\*\\*([^*]+)\\*\\*/g, '<strong>$1</strong>')
    .replace(/\\*([^*]+)\\*/g, '<em>$1</em>')
    .replace(/\\n/g, '<br>');
}

// ── Config ────────────────────────────────────────────────────────────────────
function renderCfgFields() {
  const el = document.getElementById('cfgFields');
  el.innerHTML = provedores.map(p => \`
    <div class="cfg-row">
      <label style="color:\${p.cor}">\${p.nome} — \${p.modelo}</label>
      <input type="password" id="cfgkey_\${p.id}"
        placeholder="Chave de API (\${p.ativo ? 'já configurada no .env' : 'não configurada'})"
        value="\${savedKeys[p.id] || ''}">
    </div>
  \`).join('');
}

function saveCfgAndClose() {
  provedores.forEach(p => {
    const el = document.getElementById('cfgkey_' + p.id);
    if (el.value.trim()) savedKeys[p.id] = el.value.trim();
    else delete savedKeys[p.id];
  });
  localStorage.setItem(LS_KEYS, JSON.stringify(savedKeys));
  toggleCfg();
  // Reativa provedores com chave manual
  provedores = provedores.map(p => ({ ...p, ativo: p.ativo || !!savedKeys[p.id] }));
  renderProvBar();
}

function toggleCfg() {
  document.getElementById('cfgOverlay').classList.toggle('show');
}

boot();
<\/script>
</body>
</html>`,"README.md":`# 🤖 Multi-IA Chat

App web para conversar com múltiplos provedores de IA em uma interface unificada.

## Provedores suportados
| Provedor | Modelo padrão | Gratuito? |
|---|---|---|
| Groq | Llama 3.3 70B | ✅ Sim |
| OpenAI | GPT-4o Mini | 💳 Pago |
| Google Gemini | Gemini 2.0 Flash | ✅ Sim (cota) |
| Anthropic | Claude Haiku 4 | 💳 Pago |
| xAI (Grok) | Grok 2 | 💳 Pago |
| OpenRouter | GPT-4o Mini | ✅ Sim (cota) |
| Perplexity | Sonar Pro | 💳 Pago |

## Como usar

### 1. Configurar as chaves de API
\`\`\`bash
cp .env.example .env
# Edite o .env com suas chaves
\`\`\`

### 2. Instalar e rodar
\`\`\`bash
npm install
npm run dev  # ou: node server.js
\`\`\`

### 3. Abrir no navegador
Acesse: http://localhost:3000

### Configurar chaves pelo app
Clique em ⚙️ Chaves na interface para adicionar chaves
diretamente pelo navegador (salvas localmente, nunca enviadas).

## Obter as chaves (todas grátis para começar)
- **Groq** (recomendado): https://console.groq.com → API Keys
- **OpenAI**: https://platform.openai.com/api-keys
- **Gemini**: https://aistudio.google.com/apikey
- **OpenRouter**: https://openrouter.ai/settings/keys
`}},{id:"netlify-chat-ia",name:"Chat IA para Netlify (Campo Livre Standalone)",description:"Versão completa do Campo Livre em um único arquivo HTML. Arraste para o Netlify e estará online em segundos. Sem servidor, sem banco de dados.",icon:"zap",files:{"index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="theme-color" content="#141c0d">
  <title>Chat IA</title>
  <style>
    /*──────────────────────────────────────────
      RESET + VARIÁVEIS
    ──────────────────────────────────────────*/
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg:       #141c0d;
      --panel:    #1c2714;
      --border:   #2d4a1e;
      --accent:   #5aab56;
      --accent2:  #7ec87a;
      --text:     #e2e8f0;
      --muted:    #6b8f68;
      --code-bg:  #0d1309;
      --user-bg:  #1a3a14;
      --user-bdr: #3d6e2a;
      --err:      #f87171;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: var(--bg);
      color: var(--text);
      height: 100dvh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }

    /*──────────────────────────────────────────
      HEADER
    ──────────────────────────────────────────*/
    header {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      background: var(--panel);
      border-bottom: 1px solid var(--border);
      min-height: 48px;
    }
    header h1 { font-size: 14px; font-weight: 700; flex: 1; color: var(--accent2); }
    .badge {
      font-size: 10px;
      padding: 2px 8px;
      border-radius: 20px;
      border: 1px solid var(--accent);
      color: var(--accent2);
      background: rgba(90,171,86,0.1);
      white-space: nowrap;
    }
    .icon-btn {
      width: 34px; height: 34px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 9px;
      border: none;
      background: transparent;
      color: var(--muted);
      cursor: pointer;
      font-size: 16px;
      transition: all 0.15s;
    }
    .icon-btn:hover { background: rgba(255,255,255,0.06); color: var(--accent2); }
    .icon-btn.active { background: rgba(90,171,86,0.15); color: var(--accent2); }
    .icon-btn.danger:hover { background: rgba(248,113,113,0.1); color: var(--err); }

    /*──────────────────────────────────────────
      PAINEL DE CONFIGURAÇÃO (API KEY)
    ──────────────────────────────────────────*/
    #cfgPanel {
      flex-shrink: 0;
      background: var(--panel);
      border-bottom: 1px solid var(--border);
      padding: 10px 14px;
      display: none;
      flex-direction: column;
      gap: 8px;
    }
    #cfgPanel.show { display: flex; }
    .cfg-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      font-weight: 700;
    }
    .cfg-status { font-size: 11px; }
    .cfg-status.ok { color: var(--accent2); }
    .cfg-status.demo { color: #60a5fa; }
    .cfg-note {
      font-size: 11px;
      color: #60a5fa;
      background: rgba(96,165,250,0.08);
      border: 1px solid rgba(96,165,250,0.2);
      border-radius: 8px;
      padding: 8px 10px;
      line-height: 1.5;
    }
    .cfg-row { display: flex; gap: 6px; align-items: stretch; }
    .cfg-input {
      flex: 1;
      height: 36px;
      padding: 0 10px;
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 9px;
      color: var(--text);
      font-size: 12px;
      font-family: monospace;
      outline: none;
    }
    .cfg-input:focus { border-color: var(--accent); }
    .cfg-btn {
      height: 36px;
      padding: 0 12px;
      border-radius: 9px;
      border: 1px solid var(--border);
      background: rgba(90,171,86,0.12);
      color: var(--accent2);
      font-size: 12px;
      cursor: pointer;
      white-space: nowrap;
      display: flex; align-items: center; gap: 5px;
    }
    .cfg-btn:hover { background: rgba(90,171,86,0.22); }
    .cfg-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
    .cfg-grid .cfg-input { font-size: 11px; }
    .cfg-prov-ok { font-size: 11px; color: var(--accent2); }

    /*──────────────────────────────────────────
      PAINEL DE CHAVES SALVAS
    ──────────────────────────────────────────*/
    #keysPanel {
      flex-shrink: 0;
      background: var(--panel);
      border-bottom: 1px solid var(--border);
      padding: 10px 14px;
      display: none;
      flex-direction: column;
      gap: 6px;
      max-height: 220px;
      overflow-y: auto;
    }
    #keysPanel.show { display: flex; }
    .saved-key {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 10px;
      border-radius: 9px;
      border: 1px solid var(--border);
      background: var(--code-bg);
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .saved-key:hover { border-color: var(--accent); }
    .saved-key.active { border-color: var(--accent); background: rgba(90,171,86,0.08); }
    .saved-key-info { flex: 1; min-width: 0; }
    .saved-key-label { font-size: 12px; color: var(--text); font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .saved-key-meta { font-size: 10px; color: var(--muted); }
    .active-tag { font-size: 9px; font-weight: 700; color: var(--accent2); }
    .del-btn { width: 26px; height: 26px; border-radius: 6px; border: none; background: transparent; color: var(--muted); cursor: pointer; font-size: 14px; display: flex; align-items: center; justify-content: center; }
    .del-btn:hover { background: rgba(248,113,113,0.1); color: var(--err); }

    /*──────────────────────────────────────────
      ÁREA DE CHAT
    ──────────────────────────────────────────*/
    #chat {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      scroll-behavior: smooth;
    }

    /* Estado vazio */
    .empty-state {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 14px;
      text-align: center;
      padding: 24px;
      pointer-events: none;
    }
    .empty-state .icon { font-size: 52px; }
    .empty-state h2 { font-size: 16px; color: var(--accent2); }
    .empty-state p { font-size: 13px; color: var(--muted); line-height: 1.6; max-width: 320px; }
    .chips { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; pointer-events: all; }
    .chip {
      padding: 6px 14px;
      border-radius: 20px;
      border: 1px solid var(--border);
      font-size: 12px;
      color: var(--muted);
      cursor: pointer;
      background: var(--panel);
      transition: all 0.2s;
    }
    .chip:hover { border-color: var(--accent); color: var(--accent2); }

    /* Mensagens */
    .msg {
      display: flex;
      flex-direction: column;
      max-width: 88%;
    }
    .msg.user { align-self: flex-end; }
    .msg.bot  { align-self: flex-start; }
    .msg-bubble {
      padding: 10px 14px;
      border-radius: 14px;
      font-size: 13px;
      line-height: 1.65;
      word-break: break-word;
    }
    .msg.user .msg-bubble {
      background: var(--user-bg);
      border: 1px solid var(--user-bdr);
      color: #d4f1d4;
      border-bottom-right-radius: 4px;
    }
    .msg.bot .msg-bubble {
      background: var(--panel);
      border: 1px solid var(--border);
      border-bottom-left-radius: 4px;
    }
    .msg-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }
    .msg.bot .msg-meta { padding-left: 4px; }
    .msg.user .msg-meta { justify-content: flex-end; padding-right: 4px; }
    .msg-meta button {
      font-size: 10px;
      color: var(--muted);
      background: none;
      border: none;
      cursor: pointer;
      display: flex; align-items: center; gap: 3px;
    }
    .msg-meta button:hover { color: var(--accent2); }
    .prov-label { font-size: 10px; color: var(--muted); }

    /* Conteúdo markdown */
    .msg-content p { margin-bottom: 6px; }
    .msg-content p:last-child { margin-bottom: 0; }
    .msg-content strong { color: var(--accent2); }
    .msg-content em { color: #a5c8a2; font-style: italic; }
    .msg-content a { color: #60a5fa; text-decoration: underline; word-break: break-all; }
    .code-block {
      margin: 8px 0;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--border);
    }
    .code-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 12px;
      background: #0a1008;
      font-size: 10px;
      font-family: monospace;
      color: var(--muted);
    }
    .copy-btn {
      display: flex; align-items: center; gap: 4px;
      background: none; border: none;
      color: var(--muted); cursor: pointer;
      font-size: 10px; font-family: monospace;
    }
    .copy-btn:hover { color: var(--accent2); }
    .code-body {
      padding: 10px 12px;
      background: var(--code-bg);
      font-size: 11px;
      font-family: 'Consolas','Courier New',monospace;
      color: #a8d5a2;
      overflow-x: auto;
      white-space: pre;
      line-height: 1.6;
    }
    .inline-code {
      background: var(--code-bg);
      padding: 1px 5px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 11px;
      color: #a8d5a2;
    }
    .cursor-blink {
      display: inline-block;
      width: 2px; height: 14px;
      background: var(--accent2);
      margin-left: 2px;
      vertical-align: middle;
      animation: blink 1s infinite;
    }
    @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }

    /*──────────────────────────────────────────
      BARRA DE INPUT
    ──────────────────────────────────────────*/
    .input-bar {
      flex-shrink: 0;
      display: flex;
      align-items: flex-end;
      gap: 8px;
      padding: 10px 12px;
      background: var(--panel);
      border-top: 1px solid var(--border);
    }
    #msgInput {
      flex: 1;
      min-height: 44px;
      max-height: 130px;
      padding: 11px 14px;
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      color: var(--text);
      font-size: 13px;
      font-family: inherit;
      resize: none;
      outline: none;
      line-height: 1.5;
      overflow-y: auto;
    }
    #msgInput:focus { border-color: var(--accent); }
    #msgInput::placeholder { color: var(--muted); }
    .send-btn {
      width: 44px; height: 44px;
      border-radius: 14px;
      border: 1px solid var(--accent);
      background: rgba(90,171,86,0.2);
      color: var(--accent2);
      font-size: 18px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: all 0.15s;
    }
    .send-btn:hover { background: rgba(90,171,86,0.35); }
    .send-btn:disabled { opacity: 0.3; cursor: not-allowed; }
    .mic-btn {
      width: 44px; height: 44px;
      border-radius: 14px;
      border: 1px solid var(--border);
      background: var(--code-bg);
      color: var(--muted);
      font-size: 18px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: all 0.2s;
    }
    .mic-btn.listening {
      border-color: #ef4444;
      background: rgba(239,68,68,0.15);
      color: #ef4444;
      animation: pulse 1.5s infinite;
    }
    .stop-btn {
      width: 44px; height: 44px;
      border-radius: 14px;
      border: 1px solid #ef4444;
      background: rgba(239,68,68,0.15);
      color: #ef4444;
      font-size: 18px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    @keyframes pulse { 0%,100%{opacity:1}50%{opacity:.6} }

    /* scrollbar */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
  </style>
</head>
<body>

<!--═══════════════════════════════════
    HEADER
═══════════════════════════════════-->
<header>
  <span style="font-size:20px">💬</span>
  <h1>Chat IA</h1>
  <span class="badge" id="provBadge">Demo ✨</span>

  <!-- Exportar conversa -->
  <button class="icon-btn" title="Exportar conversa (.txt)" onclick="exportConv()">⬇️</button>
  <!-- Importar arquivo de texto -->
  <button class="icon-btn" title="Importar arquivo de texto" onclick="document.getElementById('fileIn').click()">📎</button>
  <input type="file" id="fileIn" accept=".txt,.md,.csv,.json,.pdf" style="display:none" onchange="importFile(event)">
  <!-- TTS -->
  <button class="icon-btn" id="ttsBtn" title="Voz da IA" onclick="toggleTTS()">🔊</button>
  <!-- Chaves salvas -->
  <button class="icon-btn" id="keysBtn" title="Chaves salvas" onclick="toggleKeys()">🔑</button>
  <!-- Config / Chave de API -->
  <button class="icon-btn" id="cfgBtn" title="Configurar chave de API" onclick="toggleCfg()">⚙️</button>
  <!-- Limpar conversa -->
  <button class="icon-btn danger" title="Limpar conversa" onclick="clearChat()">🗑️</button>
</header>

<!--═══════════════════════════════════
    PAINEL DE CONFIGURAÇÃO
═══════════════════════════════════-->
<div id="cfgPanel">
  <div style="display:flex;align-items:center;justify-content:space-between">
    <span class="cfg-label">Chave de API</span>
    <span class="cfg-status" id="cfgStatus">Sem chave — usando IA gratuita</span>
  </div>

  <div id="cfgNote" class="cfg-note">
    💡 <strong>Sem chave:</strong> usa IA gratuita (limitada). Cole qualquer chave abaixo para usar sua própria conta.<br>
    Provedores suportados: Groq (gsk_), OpenAI (sk-), Gemini (AIza), OpenRouter (sk-or-), Perplexity (pplx-)
  </div>

  <div class="cfg-row">
    <input class="cfg-input" id="keyInput" type="password"
      placeholder="gsk_..., sk-..., AIza..., sk-or-..., pplx-..."
      oninput="onKeyInput(this.value)">
    <button class="icon-btn" onclick="toggleShowKey()" title="Mostrar/ocultar">👁️</button>
  </div>

  <div class="cfg-grid">
    <input class="cfg-input" id="urlInput" placeholder="URL do provedor" value="https://api.groq.com/openai/v1">
    <input class="cfg-input" id="modelInput" placeholder="Modelo" value="llama-3.3-70b-versatile">
  </div>

  <div id="cfgProvOk" class="cfg-prov-ok" style="display:none"></div>

  <div class="cfg-row" id="saveRow" style="display:none">
    <input class="cfg-input" id="labelInput" placeholder="Nome para salvar (ex: Minha conta Groq)">
    <button class="cfg-btn" onclick="saveKey()">💾 Salvar</button>
  </div>
</div>

<!--═══════════════════════════════════
    PAINEL DE CHAVES SALVAS
═══════════════════════════════════-->
<div id="keysPanel">
  <span class="cfg-label" id="keysTitle">Chaves Salvas</span>
  <div id="keysList"></div>
</div>

<!--═══════════════════════════════════
    ÁREA DE CHAT
═══════════════════════════════════-->
<div id="chat">
  <div class="empty-state" id="emptyState">
    <span class="icon">💬</span>
    <h2>Chat IA</h2>
    <p>Converse sobre qualquer assunto.<br>Sem restrições de tema.</p>
    <div class="chips">
      <div class="chip" onclick="setPrompt('Olá! Como você pode me ajudar?')">Olá!</div>
      <div class="chip" onclick="setPrompt('Me explique o que é inteligência artificial em linguagem simples.')">O que é IA?</div>
      <div class="chip" onclick="setPrompt('Escreva um poema curto sobre tecnologia.')">Escreva um poema</div>
      <div class="chip" onclick="setPrompt('Quais são as 5 melhores ferramentas de IA gratuitas em 2024?')">Ferramentas de IA</div>
      <div class="chip" onclick="setPrompt('Me dê ideias criativas para um projeto pessoal usando IA.')">Ideias com IA</div>
    </div>
  </div>
</div>

<!--═══════════════════════════════════
    INPUT
═══════════════════════════════════-->
<div class="input-bar">
  <textarea id="msgInput" placeholder="Digite sua mensagem… (Enter para enviar, Shift+Enter nova linha)"
    onkeydown="handleKey(event)"
    oninput="adjustHeight(this)"></textarea>
  <button class="mic-btn" id="micBtn" title="Ditar por voz" onclick="toggleVoice()">🎤</button>
  <button class="stop-btn" id="stopBtn" style="display:none" onclick="abortStream()" title="Parar">⏹</button>
  <button class="send-btn" id="sendBtn" onclick="send()" title="Enviar">➤</button>
</div>

<script>
'use strict';

/*══════════════════════════════════════════════════════════════════════════
  DETECÇÃO AUTOMÁTICA DE PROVEDOR
══════════════════════════════════════════════════════════════════════════*/
const AUTO_DETECT = [
  { prefix: 'gsk_',   url: 'https://api.groq.com/openai/v1',                          model: 'llama-3.3-70b-versatile', name: 'Groq' },
  { prefix: 'sk-or-', url: 'https://openrouter.ai/api/v1',                            model: 'openai/gpt-4o-mini',      name: 'OpenRouter' },
  { prefix: 'pplx-',  url: 'https://api.perplexity.ai',                               model: 'sonar-pro',               name: 'Perplexity' },
  { prefix: 'AIza',   url: 'https://generativelanguage.googleapis.com/v1beta/openai', model: 'gemini-2.0-flash',        name: 'Google Gemini' },
  { prefix: 'xai-',   url: 'https://api.x.ai/v1',                                    model: 'grok-2-latest',           name: 'xAI/Grok' },
  { prefix: 'sk-ant', url: 'https://api.anthropic.com/v1',                            model: 'claude-haiku-4-20250514', name: 'Anthropic' },
  { prefix: 'sk-',    url: 'https://api.openai.com/v1',                               model: 'gpt-4o-mini',            name: 'OpenAI' },
];

function detectProvider(key) {
  for (const p of AUTO_DETECT) {
    if (key.startsWith(p.prefix)) return p;
  }
  return null;
}

/*══════════════════════════════════════════════════════════════════════════
  ESTADO GLOBAL
══════════════════════════════════════════════════════════════════════════*/
let apiKey    = localStorage.getItem('cia_key')   || '';
let apiUrl    = localStorage.getItem('cia_url')   || '';
let apiModel  = localStorage.getItem('cia_model') || '';
let savedKeys = JSON.parse(localStorage.getItem('cia_saved') || '[]');
let history   = [];
let controller= null;
let isRecording = false;
let recog     = null;
let silTimer  = null;
let ttsOn     = localStorage.getItem('cia_tts') !== 'off';
let showKey   = false;

/*══════════════════════════════════════════════════════════════════════════
  BOOT
══════════════════════════════════════════════════════════════════════════*/
function boot() {
  const ki = document.getElementById('keyInput');
  const ui = document.getElementById('urlInput');
  const mi = document.getElementById('modelInput');
  ki.value = apiKey;
  if (apiKey) {
    const d = detectProvider(apiKey);
    if (d) { ui.value = d.url; mi.value = d.model; }
    else   { ui.value = apiUrl; mi.value = apiModel; }
  }
  updateProvBadge();
  updateCfgStatus();
  document.getElementById('ttsBtn').style.opacity = ttsOn ? '1' : '0.4';
  renderSavedKeys();
  // Abre config automaticamente se não há chave
  if (!apiKey) toggleCfg();
}

/*══════════════════════════════════════════════════════════════════════════
  CONFIGURAÇÃO / CHAVE DE API
══════════════════════════════════════════════════════════════════════════*/
function toggleCfg() {
  const p = document.getElementById('cfgPanel');
  const b = document.getElementById('cfgBtn');
  const show = !p.classList.contains('show');
  p.classList.toggle('show', show);
  b.classList.toggle('active', show);
  document.getElementById('keysPanel').classList.remove('show');
  document.getElementById('keysBtn').classList.remove('active');
}

function toggleKeys() {
  const p = document.getElementById('keysPanel');
  const b = document.getElementById('keysBtn');
  const show = !p.classList.contains('show');
  p.classList.toggle('show', show);
  b.classList.toggle('active', show);
  document.getElementById('cfgPanel').classList.remove('show');
  document.getElementById('cfgBtn').classList.remove('active');
}

function onKeyInput(val) {
  val = val.trim();
  apiKey = val;
  localStorage.setItem('cia_key', val);
  const d = val ? detectProvider(val) : null;
  if (d) {
    document.getElementById('urlInput').value  = d.url;
    document.getElementById('modelInput').value = d.model;
    apiUrl   = d.url;
    apiModel = d.model;
    localStorage.setItem('cia_url',   d.url);
    localStorage.setItem('cia_model', d.model);
    document.getElementById('cfgProvOk').textContent = '✓ ' + d.name + ' · ' + d.model;
    document.getElementById('cfgProvOk').style.display = 'block';
    document.getElementById('cfgNote').style.display = 'none';
  } else {
    document.getElementById('cfgProvOk').style.display = 'none';
    document.getElementById('cfgNote').style.display = '';
  }
  document.getElementById('saveRow').style.display = val ? 'flex' : 'none';
  updateProvBadge();
  updateCfgStatus();
}

function updateProvBadge() {
  const badge = document.getElementById('provBadge');
  if (apiKey) {
    const d = detectProvider(apiKey);
    badge.textContent = d ? d.name : 'Custom';
    badge.style.borderColor = '#5aab56';
    badge.style.color = '#7ec87a';
  } else {
    badge.textContent = 'Demo ✨';
    badge.style.borderColor = '#60a5fa';
    badge.style.color = '#93c5fd';
  }
}

function updateCfgStatus() {
  const el = document.getElementById('cfgStatus');
  if (apiKey) {
    const d = detectProvider(apiKey);
    el.textContent = '✓ ' + (d ? d.name : 'Chave personalizada') + ' ativa';
    el.className = 'cfg-status ok';
  } else {
    el.textContent = 'Sem chave — usando IA gratuita';
    el.className = 'cfg-status demo';
  }
}

function toggleShowKey() {
  showKey = !showKey;
  document.getElementById('keyInput').type = showKey ? 'text' : 'password';
}

function saveKey() {
  const key   = document.getElementById('keyInput').value.trim();
  const label = document.getElementById('labelInput').value.trim();
  const url   = document.getElementById('urlInput').value.trim();
  const model = document.getElementById('modelInput').value.trim();
  if (!key) return;
  if (savedKeys.some(k => k.key === key)) return;
  const d = detectProvider(key);
  const finalLabel = label || (d ? d.name : 'Chave ' + (savedKeys.length + 1));
  savedKeys.push({ id: Date.now()+'', label: finalLabel, key, url, model, provider: d ? d.name : 'Custom' });
  localStorage.setItem('cia_saved', JSON.stringify(savedKeys));
  document.getElementById('labelInput').value = '';
  renderSavedKeys();
}

function renderSavedKeys() {
  const list = document.getElementById('keysList');
  const title = document.getElementById('keysTitle');
  title.textContent = 'Chaves Salvas (' + savedKeys.length + ')';
  if (savedKeys.length === 0) {
    list.innerHTML = '<div style="font-size:12px;color:#6b8f68;text-align:center;padding:10px">Nenhuma chave salva. Configure uma chave e clique em Salvar.</div>';
    return;
  }
  list.innerHTML = '';
  savedKeys.forEach(sk => {
    const div = document.createElement('div');
    div.className = 'saved-key' + (sk.key === apiKey ? ' active' : '');
    div.innerHTML =
      '<div class="saved-key-info" onclick="loadKey(\\''+sk.id+'\\')">'+
        '<div class="saved-key-label">'+esc(sk.label)+'</div>'+
        '<div class="saved-key-meta">'+esc(sk.provider)+' · '+sk.key.slice(0,6)+'…'+sk.key.slice(-3)+'</div>'+
      '</div>'+
      (sk.key === apiKey ? '<span class="active-tag">ATIVA</span>' : '')+
      '<button class="del-btn" onclick="deleteKey(\\''+sk.id+'\\')">✕</button>';
    list.appendChild(div);
  });
}

function loadKey(id) {
  const sk = savedKeys.find(k => k.id === id);
  if (!sk) return;
  apiKey   = sk.key;
  apiUrl   = sk.url;
  apiModel = sk.model;
  localStorage.setItem('cia_key',   sk.key);
  localStorage.setItem('cia_url',   sk.url);
  localStorage.setItem('cia_model', sk.model);
  document.getElementById('keyInput').value   = sk.key;
  document.getElementById('urlInput').value   = sk.url;
  document.getElementById('modelInput').value = sk.model;
  onKeyInput(sk.key);
  renderSavedKeys();
  toggleKeys();
}

function deleteKey(id) {
  savedKeys = savedKeys.filter(k => k.id !== id);
  localStorage.setItem('cia_saved', JSON.stringify(savedKeys));
  renderSavedKeys();
}

/*══════════════════════════════════════════════════════════════════════════
  ENVIAR MENSAGEM
══════════════════════════════════════════════════════════════════════════*/
function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
}

function adjustHeight(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 130) + 'px';
}

function setPrompt(txt) {
  const el = document.getElementById('msgInput');
  el.value = txt;
  adjustHeight(el);
  el.focus();
}

async function send(textOverride) {
  const el = document.getElementById('msgInput');
  const text = (textOverride || el.value).trim();
  if (!text) return;

  // unlock TTS (Android requer gesto do usuário)
  if (window.speechSynthesis) {
    const u = new SpeechSynthesisUtterance(' ');
    u.volume = 0; window.speechSynthesis.speak(u);
  }

  document.getElementById('emptyState')?.remove();
  el.value = ''; el.style.height = '44px';

  history.push({ role: 'user', content: text });
  appendMsg('user', text);

  controller = new AbortController();
  document.getElementById('sendBtn').style.display = 'none';
  document.getElementById('stopBtn').style.display = 'flex';

  const { el: botEl, content: contentEl } = appendMsg('bot', '', true);

  try {
    const key   = apiKey.trim();
    const url   = (document.getElementById('urlInput').value || apiUrl || 'https://api.groq.com/openai/v1').trim().replace(/\\/$/, '');
    const model = document.getElementById('modelInput').value || apiModel || 'llama-3.3-70b-versatile';

    let endpoint, headers, body;

    if (key) {
      endpoint = url + '/chat/completions';
      headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key,
        'HTTP-Referer': location.origin,
        'X-Title': 'Chat IA',
      };
      body = JSON.stringify({ model, messages: history, stream: true, max_tokens: 16384 });
    } else {
      // Sem chave: usa endpoint demo (Groq gratuito via proxy público)
      endpoint = 'https://api.groq.com/openai/v1/chat/completions';
      // Nota: sem chave, provavelmente vai falhar. Mostre dica.
      contentEl.innerHTML = '<span style="color:#60a5fa">⚠️ Configure uma chave de API nas Configurações (⚙️) para conversar. Groq é gratuito: <a href="https://console.groq.com" target="_blank" style="color:#7ec87a">console.groq.com</a></span>';
      history.pop();
      return;
    }

    const resp = await fetch(endpoint, { method: 'POST', headers, body, signal: controller.signal });

    if (!resp.ok) {
      const errText = await resp.text();
      let msg = 'Erro ' + resp.status;
      try { msg = JSON.parse(errText)?.error?.message || msg; } catch {}
      contentEl.innerHTML = '<span style="color:'+getCSSVar('--err')+'">❌ ' + esc(msg) + '</span>';
      history.pop();
      return;
    }

    const reader  = resp.body.getReader();
    const decoder = new TextDecoder();
    let full = '', buf = '', cursor;

    cursor = document.createElement('span');
    cursor.className = 'cursor-blink';
    contentEl.appendChild(cursor);

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      const lines = buf.split('\\n');
      buf = lines.pop() || '';
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const j = line.slice(6).trim();
        if (j === '[DONE]') continue;
        try {
          const p = JSON.parse(j);
          if (p.error) throw new Error(typeof p.error === 'string' ? p.error : p.error.message || 'Erro do provedor');
          const delta = p.choices?.[0]?.delta?.content || p.text || p.content || '';
          if (delta) {
            full += delta;
            cursor.remove();
            contentEl.innerHTML = renderMarkdown(full);
            contentEl.appendChild(cursor);
            scrollBottom();
          }
        } catch(e) { if (e instanceof SyntaxError) continue; throw e; }
      }
    }

    cursor.remove();
    if (full) {
      contentEl.innerHTML = renderMarkdown(full);
      history.push({ role: 'assistant', content: full });
      if (ttsOn) speakText(full);
    }

  } catch (err) {
    if (err.name === 'AbortError') {
      contentEl.innerHTML += '<em style="color:var(--muted);font-size:11px"> [parado]</em>';
    } else {
      contentEl.innerHTML = '<span style="color:var(--err)">❌ ' + esc(err.message) + '</span>';
      history.pop();
    }
  } finally {
    controller = null;
    document.getElementById('sendBtn').style.display = 'flex';
    document.getElementById('stopBtn').style.display = 'none';
    scrollBottom();
    addCopyListeners();
  }
}

function abortStream() { controller?.abort(); }

/*══════════════════════════════════════════════════════════════════════════
  RENDERIZAÇÃO
══════════════════════════════════════════════════════════════════════════*/
function appendMsg(role, text, streaming) {
  const wrap = document.createElement('div');
  wrap.className = 'msg ' + role;

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';

  const content = document.createElement('div');
  content.className = 'msg-content';

  if (role === 'user') {
    content.textContent = text;
  } else if (streaming) {
    content.innerHTML = '';
  } else {
    content.innerHTML = renderMarkdown(text);
  }

  bubble.appendChild(content);
  wrap.appendChild(bubble);

  const meta = document.createElement('div');
  meta.className = 'msg-meta';
  if (role === 'bot') {
    const prov = apiKey ? (detectProvider(apiKey)?.name || 'IA') : 'IA';
    meta.innerHTML =
      '<span class="prov-label">' + prov + '</span>' +
      '<button onclick="copyText(this, ' + "'" + '__CONTENT__' + "'" + ')">📋 Copiar</button>';
    // Substitui placeholder pelo getter real
    meta.querySelector('button').onclick = function() { copyText(this, content.textContent); };
  } else {
    meta.innerHTML = '<button onclick="copyText(this,\\''+escAttr(text)+'\\')">📋 Copiar</button>';
  }
  wrap.appendChild(meta);

  document.getElementById('chat').appendChild(wrap);
  scrollBottom();
  return { el: wrap, content };
}

let copyBlockId = 0;
function renderMarkdown(text) {
  let html = esc(text);
  // Blocos de código
  html = html.replace(/\`\`\`(\\w*?)\\n([\\s\\S]*?)\`\`\`/g, function(_, lang, code) {
    const id = 'cb' + (++copyBlockId);
    return (
      '<div class="code-block">' +
        '<div class="code-header">' +
          '<span>' + (lang || 'código') + '</span>' +
          '<button class="copy-btn" data-copy="'+escAttr(code)+'" id="'+id+'">📋 Copiar</button>' +
        '</div>' +
        '<div class="code-body">' + code + '</div>' +
      '</div>'
    );
  });
  // Inline code
  html = html.replace(/\`([^\`\\n]+?)\`/g, '<span class="inline-code">$1</span>');
  // Bold
  html = html.replace(/\\*\\*([^*]+?)\\*\\*/g, '<strong>$1</strong>');
  // Italic
  html = html.replace(/\\*([^*]+?)\\*/g, '<em>$1</em>');
  // Links
  html = html.replace(/(https?:\\/\\/[^\\s<>"']+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
  // Newlines
  html = html.replace(/\\n/g, '<br>');
  return html;
}

function addCopyListeners() {
  document.querySelectorAll('.copy-btn[data-copy]').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.onclick = function() { copyText(this, this.dataset.copy); };
  });
}

function copyText(btn, text) {
  navigator.clipboard.writeText(text || '').catch(() => {});
  const orig = btn.textContent;
  btn.textContent = '✓ Copiado!';
  setTimeout(() => { btn.textContent = orig; }, 1800);
}

function scrollBottom() {
  const c = document.getElementById('chat');
  c.scrollTop = c.scrollHeight;
}

/*══════════════════════════════════════════════════════════════════════════
  EXPORTAR / IMPORTAR
══════════════════════════════════════════════════════════════════════════*/
function exportConv() {
  if (!history.length) return alert('Nenhuma conversa para exportar.');
  const lines = ['=== CONVERSA — Chat IA ===', 'Data: ' + new Date().toLocaleString('pt-BR'), ''];
  history.forEach(m => { lines.push('[' + (m.role === 'user' ? 'VOCÊ' : 'IA') + ']'); lines.push(m.content); lines.push(''); });
  const blob = new Blob([lines.join('\\n')], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'conversa-' + Date.now() + '.txt';
  a.click();
}

function importFile(e) {
  const file = e.target.files?.[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const t = ev.target?.result;
    if (t) {
      const el = document.getElementById('msgInput');
      el.value = el.value ? el.value + '\\n\\n' + t : t;
      adjustHeight(el);
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

/*══════════════════════════════════════════════════════════════════════════
  VOZ — ENTRADA (STT)
══════════════════════════════════════════════════════════════════════════*/
function toggleVoice() {
  if (isRecording) { stopVoice(); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return alert('Use Chrome ou Edge para ditar por voz.');

  recog = new SR();
  recog.lang = 'pt-BR';
  recog.continuous = true;
  recog.interimResults = true;

  let fullText = '';

  const schedSend = () => {
    clearTimeout(silTimer);
    silTimer = setTimeout(() => {
      try { recog.stop(); } catch {}
      if (fullText.trim()) { setPrompt(''); send(fullText.trim()); }
    }, 1800);
  };

  recog.onresult = ev => {
    let final = '', interim = '';
    for (let i = 0; i < ev.results.length; i++) {
      if (ev.results[i].isFinal) final += ev.results[i][0].transcript;
      else interim += ev.results[i][0].transcript;
    }
    fullText = final || interim;
    document.getElementById('msgInput').value = fullText;
    adjustHeight(document.getElementById('msgInput'));
    if (fullText) schedSend();
  };

  recog.onerror = recog.onend = () => {
    clearTimeout(silTimer);
    isRecording = false;
    recog = null;
    document.getElementById('micBtn').classList.remove('listening');
  };

  try { recog.start(); } catch { return; }
  isRecording = true;
  document.getElementById('micBtn').classList.add('listening');
}

function stopVoice() {
  try { recog?.stop(); } catch {}
  recog = null;
  isRecording = false;
  clearTimeout(silTimer);
  document.getElementById('micBtn').classList.remove('listening');
}

/*══════════════════════════════════════════════════════════════════════════
  VOZ — SAÍDA (TTS)
══════════════════════════════════════════════════════════════════════════*/
function toggleTTS() {
  ttsOn = !ttsOn;
  localStorage.setItem('cia_tts', ttsOn ? 'on' : 'off');
  document.getElementById('ttsBtn').style.opacity = ttsOn ? '1' : '0.4';
  if (!ttsOn) window.speechSynthesis?.cancel();
}

function speakText(text) {
  if (!ttsOn || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const clean = text.replace(/<[^>]+>/g, '').replace(/[\`*#]/g, '').substring(0, 800);
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = 'pt-BR';
  window.speechSynthesis.speak(u);
}

/*══════════════════════════════════════════════════════════════════════════
  LIMPAR
══════════════════════════════════════════════════════════════════════════*/
function clearChat() {
  if (history.length && !confirm('Limpar toda a conversa?')) return;
  abortStream();
  history = [];
  window.speechSynthesis?.cancel();
  const chat = document.getElementById('chat');
  chat.innerHTML = '';
  const empty = document.createElement('div');
  empty.className = 'empty-state';
  empty.id = 'emptyState';
  empty.innerHTML =
    '<span class="icon">💬</span><h2>Chat IA</h2>' +
    '<p>Converse sobre qualquer assunto.<br>Sem restrições de tema.</p>' +
    '<div class="chips">' +
      '<div class="chip" onclick="setPrompt(\\'Olá! Como você pode me ajudar?\\')">Olá!</div>' +
      '<div class="chip" onclick="setPrompt(\\'Me explique o que é inteligência artificial em linguagem simples.\\')">O que é IA?</div>' +
      '<div class="chip" onclick="setPrompt(\\'Escreva um poema curto sobre tecnologia.\\')">Escreva um poema</div>' +
    '</div>';
  chat.appendChild(empty);
}

/*══════════════════════════════════════════════════════════════════════════
  UTILS
══════════════════════════════════════════════════════════════════════════*/
function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}
function escAttr(s) { return esc(s).replace(/'/g,'&#39;'); }
function getCSSVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// Inicia
boot();
<\/script>
</body>
</html>`,"README.md":`# 💬 Chat IA — Standalone para Netlify

Versão completa do Campo Livre em um único arquivo HTML.
Sem servidor, sem banco de dados — funciona em qualquer hospedagem estática.

## Como publicar no Netlify (grátis, 1 minuto)

1. Acesse https://www.netlify.com e crie uma conta gratuita
2. Na dashboard, clique em **"Add new site" → "Deploy manually"**
3. Arraste a pasta do projeto (ou só o \`index.html\`) para a área indicada
4. Pronto! O site estará online em um link .netlify.app

## Funcionalidades
- ✅ Chat em tempo real com streaming
- ✅ Múltiplos provedores de IA (Groq, OpenAI, Gemini, OpenRouter, Perplexity)
- ✅ Detecção automática de provedor pela chave
- ✅ Múltiplas chaves salvas (localStorage)
- ✅ Voz: ditar mensagens por voz (pt-BR)
- ✅ TTS: IA lê as respostas em voz alta
- ✅ Exportar conversa como .txt
- ✅ Importar arquivo de texto (.txt, .md, .csv, .json)
- ✅ Blocos de código com botão Copiar
- ✅ Interface 100% em português
- ✅ PWA-ready (funciona offline após primeira visita)

## Provedores suportados (com CORS liberado)
| Prefixo da chave | Provedor | Gratuito? |
|---|---|---|
| gsk_ | Groq | ✅ Sim |
| sk- | OpenAI | 💳 Pago |
| AIza | Google Gemini | ✅ Sim (cota) |
| sk-or- | OpenRouter | ✅ Sim (cota) |
| pplx- | Perplexity | 💳 Pago |

## Obter chave Groq (gratuita, sem cartão)
1. Acesse https://console.groq.com
2. Crie uma conta
3. Vá em API Keys → Create API Key
4. Cole a chave (começa com gsk_) no campo ⚙️ do Chat IA
`}},{id:"whatsapp-bot",name:"WhatsApp Bot",description:"Bot para WhatsApp com respostas automáticas, menus e integração com IA",icon:"message-circle",files:{"index.js":`const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// ─── Configuração do cliente ───────────────────────────────────────────────
const client = new Client({
  authStrategy: new LocalAuth({ clientId: 'meu-bot' }),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  }
});

// ─── QR Code para autenticar ──────────────────────────────────────────────
client.on('qr', (qr) => {
  console.log('\\n📱 Escaneie o QR Code abaixo no WhatsApp:');
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => console.log('✅ Autenticado com sucesso!'));
client.on('ready', () => {
  console.log('🟢 Bot pronto! Aguardando mensagens...');
  console.log('   Envie "!menu" para ver os comandos');
});

// ─── Banco de dados simples (memória) ────────────────────────────────────
const processos = new Map(); // numeroProcesso → dados

// ─── Menu principal ───────────────────────────────────────────────────────
const MENU = \`⚖️ *ESCRITÓRIO SK — Assistente Jurídico*

Olá! Sou o assistente do escritório. Escolha uma opção:

1️⃣ Consultar processo
2️⃣ Agendar reunião
3️⃣ Falar com advogado
4️⃣ Documentos necessários
5️⃣ Horário de atendimento
0️⃣ Encerrar atendimento

_Responda com o número da opção_\`;

// ─── Sessões de usuário ───────────────────────────────────────────────────
const sessoes = new Map(); // número → { etapa, dados }

function getSessao(numero) {
  if (!sessoes.has(numero)) sessoes.set(numero, { etapa: 'inicio', dados: {} });
  return sessoes.get(numero);
}

// ─── Handler de mensagens ─────────────────────────────────────────────────
client.on('message', async (msg) => {
  if (msg.isGroupMsg) return; // Ignora grupos (remova para ativar em grupos)
  
  const texto = msg.body.trim().toLowerCase();
  const numero = msg.from;
  const sessao = getSessao(numero);
  
  console.log(\`📨 [\${numero}]: \${msg.body}\`);

  // Comando de menu a qualquer momento
  if (texto === '!menu' || texto === 'menu' || texto === 'oi' || texto === 'olá') {
    sessao.etapa = 'menu';
    await msg.reply(MENU);
    return;
  }

  // Máquina de estados por etapa
  switch (sessao.etapa) {
    case 'inicio':
      await msg.reply(MENU);
      sessao.etapa = 'menu';
      break;

    case 'menu':
      if (texto === '1') {
        sessao.etapa = 'consultar_processo';
        await msg.reply('📋 *Consulta de Processo*\\n\\nDigite o número do processo (ex: 1234567-89.2024.8.26.0001):');
      } else if (texto === '2') {
        sessao.etapa = 'agendar';
        await msg.reply('📅 *Agendamento*\\n\\nQual o seu nome completo?');
      } else if (texto === '3') {
        await msg.reply('👨‍💼 *Falar com Advogado*\\n\\nVou transferir você para o Dr. Saulo Kenji.\\n\\n_Aguarde, ele responderá em breve._');
        // Notificar o advogado (substitua pelo número real)
        // await client.sendMessage('5511999999999@c.us', \`⚠️ Cliente \${numero} quer falar com você!\`);
        sessao.etapa = 'inicio';
      } else if (texto === '4') {
        await msg.reply(
          '📄 *Documentos Gerais*\\n\\n' +
          '• RG e CPF (originais + cópia)\\n' +
          '• Comprovante de residência (últimos 3 meses)\\n' +
          '• Comprovante de renda\\n\\n' +
          '*Processos Trabalhistas:* Carteira de trabalho, contracheques, CTPS\\n' +
          '*Processos Cíveis:* Contratos, notas fiscais, comprovantes\\n' +
          '*Processos de Família:* Certidão de casamento, nascimento\\n\\n' +
          '_Digite !menu para voltar_'
        );
      } else if (texto === '5') {
        await msg.reply(
          '🕐 *Horário de Atendimento*\\n\\n' +
          '• Segunda a Sexta: 8h às 18h\\n' +
          '• Sábado: 8h às 12h\\n' +
          '• Emergências: disponível 24h\\n\\n' +
          '📍 *Endereço:* Rua das Leis, 123 — Centro\\n' +
          '📞 *Telefone:* (11) 99999-9999\\n\\n' +
          '_Digite !menu para voltar_'
        );
      } else if (texto === '0') {
        await msg.reply('👋 Até logo! Em caso de dúvidas, é só chamar. ⚖️');
        sessoes.delete(numero);
      } else {
        await msg.reply('❓ Opção inválida. Digite !menu para ver as opções.');
      }
      break;

    case 'consultar_processo':
      const numProcesso = msg.body.trim();
      await msg.reply(
        \`🔍 *Consultando processo...*\\n\` +
        \`Número: \${numProcesso}\\n\\n\` +
        \`_Esta é uma versão de demonstração.\\n\` +
        \`Em produção, este número seria consultado no banco de dados ou no sistema do tribunal._\\n\\n\` +
        \`Para integração real, veja o arquivo README.md\`
      );
      sessao.etapa = 'menu';
      break;

    case 'agendar':
      if (!sessao.dados.nome) {
        sessao.dados.nome = msg.body.trim();
        await msg.reply(\`Olá, *\${sessao.dados.nome}*! Qual sua disponibilidade?\\n\\n1 - Manhã (8h-12h)\\n2 - Tarde (13h-18h)\`);
      } else if (!sessao.dados.turno) {
        sessao.dados.turno = texto === '1' ? 'Manhã' : 'Tarde';
        await msg.reply(
          \`✅ *Agendamento Solicitado!*\\n
\` +
          \`*Nome:* \${sessao.dados.nome}\\n\` +
          \`*Turno:* \${sessao.dados.turno}\\n\\n\` +
          \`Entraremos em contato para confirmar a data.\\n_Digite !menu para voltar_\`
        );
        sessao.etapa = 'menu';
        sessao.dados = {};
      }
      break;
  }
});

client.on('disconnected', (reason) => {
  console.log('❌ Desconectado:', reason);
  process.exit(1);
});

console.log('🚀 Iniciando WhatsApp Bot...');
client.initialize();`,"package.json":`{
  "name": "whatsapp-bot-juridico",
  "version": "1.0.0",
  "description": "Bot WhatsApp para escritório jurídico",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js"
  },
  "dependencies": {
    "whatsapp-web.js": "^1.26.0",
    "qrcode-terminal": "^0.12.0"
  }
}`,"README.md":`# WhatsApp Bot Jurídico 🤖⚖️

Bot de atendimento automatizado para escritório de advocacia via WhatsApp.

## Instalação

\`\`\`bash
npm install
\`\`\`

## Executar

\`\`\`bash
npm start
\`\`\`

Escaneie o QR Code que aparecer no terminal com o WhatsApp do escritório.

## Funcionalidades

- ✅ Menu interativo com navegação por número
- ✅ Consulta de processos (integrar com banco de dados)
- ✅ Agendamento de reuniões
- ✅ Informações de documentos por tipo de processo
- ✅ Horários e contato do escritório
- ✅ Transferência para advogado

## Como integrar com banco de dados

1. Instale o driver do banco: \`npm install @neondatabase/serverless\`
2. No caso 'consultar_processo', substitua a resposta simulada por:

\`\`\`javascript
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

const resultado = await sql\`
  SELECT numero_processo, status, fase, vara, comarca
  FROM processos 
  WHERE numero_processo = \${numProcesso}
\`;
\`\`\`

## Publicar em servidor (VPS/Railway/Render)

1. Suba para um servidor Linux com Node.js
2. Use \`pm2\` para manter rodando: \`pm2 start index.js --name bot-juridico\`
3. Configure variável DATABASE_URL com a URL do Neon

## ⚠️ Importante

- Use um número de WhatsApp exclusivo para o bot (não o pessoal)
- Respeite os Termos de Serviço do WhatsApp
- Para produção em escala, considere a API oficial do WhatsApp Business
`}},{id:"telegram-bot",name:"Bot Telegram",description:"Bot para Telegram com comandos, menus inline e integração com IA",icon:"send",files:{"bot.js":`const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

// ─── Configure seu token ──────────────────────────────────────────────────
// 1. Abra o Telegram e fale com @BotFather
// 2. Digite /newbot e siga as instruções
// 3. Copie o token e coloque no arquivo .env: TELEGRAM_TOKEN=seu_token_aqui
const bot = new Telegraf(process.env.TELEGRAM_TOKEN || 'COLOQUE_SEU_TOKEN_AQUI');

// ─── Banco simples em memória ─────────────────────────────────────────────
const usuarios = new Map();

// ─── Middleware de log ─────────────────────────────────────────────────────
bot.use(async (ctx, next) => {
  const user = ctx.from;
  console.log(\`[\${new Date().toLocaleTimeString('pt-BR')}] \${user?.first_name} (@\${user?.username}): \${ctx.message?.text || '[ação]'}\`);
  return next();
});

// ─── Comando /start ────────────────────────────────────────────────────────
bot.start(async (ctx) => {
  const nome = ctx.from.first_name;
  await ctx.reply(
    \`👋 Olá, *\${nome}*! Sou o assistente do escritório SK.\\n\\nUse o menu abaixo ou os comandos:\`,
    {
      parse_mode: 'Markdown',
      ...Markup.keyboard([
        ['⚖️ Consultar Processo', '📅 Agendar'],
        ['📄 Documentos', '📞 Contato'],
        ['🤖 Falar com IA', '❓ Ajuda']
      ]).resize()
    }
  );
});

// ─── Comando /help ─────────────────────────────────────────────────────────
bot.help(ctx => ctx.reply(
  '*Comandos disponíveis:*\\n\\n' +
  '/start — Menu principal\\n' +
  '/processo [número] — Consultar processo\\n' +
  '/agendar — Agendar reunião\\n' +
  '/docs — Documentos necessários\\n' +
  '/contato — Informações de contato\\n' +
  '/ia [pergunta] — Perguntar para IA',
  { parse_mode: 'Markdown' }
));

// ─── Consulta de processo ─────────────────────────────────────────────────
bot.command('processo', async (ctx) => {
  const numero = ctx.message.text.split(' ').slice(1).join(' ').trim();
  if (!numero) {
    return ctx.reply('📋 Informe o número: /processo 1234567-89.2024.8.26.0001');
  }
  await ctx.reply(\`🔍 Consultando processo *\${numero}*...\\n\\n_Conecte ao banco para ver dados reais._\`, { parse_mode: 'Markdown' });
});

// ─── Documentos por tipo ──────────────────────────────────────────────────
bot.command('docs', async (ctx) => {
  await ctx.reply(
    '📄 *Documentos por tipo de processo:*',
    { parse_mode: 'Markdown', ...Markup.inlineKeyboard([
      [Markup.button.callback('⚖️ Cível', 'doc_civel'), Markup.button.callback('👷 Trabalhista', 'doc_trab')],
      [Markup.button.callback('👨‍👩‍👧 Família', 'doc_familia'), Markup.button.callback('📋 Previdenciário', 'doc_prev')],
      [Markup.button.callback('🚨 Criminal', 'doc_criminal'), Markup.button.callback('💰 Tributário', 'doc_trib')],
    ])}
  );
});

const DOCS = {
  doc_civel: '⚖️ *Processo Cível*\\n\\n• RG, CPF e comprovante de residência\\n• Contratos e acordos envolvidos\\n• Notas fiscais e comprovantes de pagamento\\n• Correspondências e comunicações relevantes',
  doc_trab: '👷 *Processo Trabalhista*\\n\\n• Carteira de Trabalho (CTPS)\\n• Contracheques dos últimos 3 anos\\n• Extrato FGTS\\n• Registro de ponto (se houver)\\n• Termos de rescisão',
  doc_familia: '👨‍👩‍👧 *Processo de Família*\\n\\n• Certidão de casamento ou nascimento\\n• Comprovante de renda (IR)\\n• Lista de bens e patrimônio\\n• Acordos anteriores (se houver)',
  doc_prev: '📋 *Previdenciário / INSS*\\n\\n• CPF e RG\\n• Cartão do INSS (NIT)\\n• Laudos médicos e atestados\\n• Histórico de contribuições (CNIS)\\n• Exames e relatórios de saúde',
  doc_criminal: '🚨 *Criminal*\\n\\n• RG e CPF\\n• Boletim de Ocorrência (B.O.)\\n• Certidão de antecedentes\\n• Testemunhas e contatos\\n• Evidências e provas disponíveis',
  doc_trib: '💰 *Tributário*\\n\\n• CNPJ e documentos da empresa\\n• Declarações de IR (últimos 5 anos)\\n• Notas fiscais\\n• Extratos bancários\\n• Notificações da Receita Federal',
};

Object.entries(DOCS).forEach(([action, text]) => {
  bot.action(action, ctx => ctx.editMessageText(text + '\\n\\n_Digite /docs para outro tipo_', { parse_mode: 'Markdown' }));
});

// ─── Agendamento ──────────────────────────────────────────────────────────
bot.command('agendar', async (ctx) => {
  await ctx.reply(
    '📅 *Agendamento de Reunião*\\n\\nEscolha o turno:',
    { parse_mode: 'Markdown', ...Markup.inlineKeyboard([
      [Markup.button.callback('🌅 Manhã (8h-12h)', 'ag_manha')],
      [Markup.button.callback('☀️ Tarde (13h-18h)', 'ag_tarde')],
      [Markup.button.callback('🌙 Emergência', 'ag_urgente')],
    ])}
  );
});

['ag_manha','ag_tarde','ag_urgente'].forEach((a) => {
  const texto = a === 'ag_manha' ? 'Manhã (8h-12h)' : a === 'ag_tarde' ? 'Tarde (13h-18h)' : '🚨 URGENTE';
  bot.action(a, async (ctx) => {
    await ctx.editMessageText(
      \`✅ *Solicitação de agendamento recebida!*\\n\\n*Turno:* \${texto}\\n*Usuário:* \${ctx.from.first_name}\\n\\nEntraremos em contato para confirmar data e horário.\\n\\n📞 Ou ligue: (11) 99999-9999\`,
      { parse_mode: 'Markdown' }
    );
  });
});

// ─── Contato ──────────────────────────────────────────────────────────────
bot.command('contato', ctx => ctx.reply(
  '📞 *Contato do Escritório SK*\\n\\n' +
  '👨‍💼 Dr. Saulo Kenji — Advogado\\n' +
  '📞 (11) 99999-9999\\n' +
  '📧 contato@escritoriosk.com.br\\n' +
  '📍 Rua das Leis, 123 — Centro\\n\\n' +
  '🕐 *Horários:*\\n' +
  'Seg-Sex: 8h às 18h | Sáb: 8h às 12h',
  { parse_mode: 'Markdown' }
));

// ─── Texto livre (menu por botão) ─────────────────────────────────────────
bot.hears('⚖️ Consultar Processo', ctx => ctx.reply('📋 Informe: /processo NUMERO_DO_PROCESSO'));
bot.hears('📅 Agendar', ctx => ctx.replyWithMarkdown('Use o comando /agendar'));
bot.hears('📄 Documentos', ctx => ctx.replyWithMarkdown('Use o comando /docs'));
bot.hears('📞 Contato', ctx => ctx.replyWithMarkdown('Use o comando /contato'));
bot.hears('❓ Ajuda', ctx => ctx.replyWithMarkdown('Use o comando /help'));

// ─── Iniciar bot ──────────────────────────────────────────────────────────
bot.launch()
  .then(() => console.log('🤖 Bot Telegram rodando! Pressione Ctrl+C para parar.'))
  .catch(err => console.error('Erro:', err));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));`,".env":`# Cole o token do seu bot (obtenha com @BotFather no Telegram)
TELEGRAM_TOKEN=cole_seu_token_aqui

# Opcional: URL do banco Neon para consultas reais
DATABASE_URL=postgresql://user:senha@host/banco?sslmode=require`,"package.json":`{
  "name": "telegram-bot-juridico",
  "version": "1.0.0",
  "description": "Bot Telegram para escritório jurídico",
  "main": "bot.js",
  "scripts": {
    "start": "node bot.js",
    "dev": "node --watch bot.js"
  },
  "dependencies": {
    "telegraf": "^4.16.3",
    "dotenv": "^16.4.5"
  }
}`,"README.md":`# Bot Telegram Jurídico 🤖⚖️

## Configuração (5 minutos)

### 1. Criar o bot no Telegram
1. Abra o Telegram e pesquise **@BotFather**
2. Envie **/newbot**
3. Escolha um nome (ex: "Escritório SK Bot")
4. Escolha um username (ex: "escritoriosk_bot")
5. Copie o **token** que ele te enviou

### 2. Configurar token
Cole o token no arquivo **.env**:
\`\`\`
TELEGRAM_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
\`\`\`

### 3. Instalar e rodar
\`\`\`bash
npm install
npm start
\`\`\`

## Funcionalidades
- ✅ Menu por botões (keyboard)
- ✅ Menus inline (dentro da mensagem)
- ✅ Consulta de processo por número
- ✅ Documentos por tipo (cível, trabalhista, família, etc)
- ✅ Agendamento de reunião
- ✅ Informações de contato

## Publicar no servidor (Railway — grátis)
1. Acesse [railway.app](https://railway.app)
2. Conecte seu GitHub
3. Suba este projeto
4. Configure a variável TELEGRAM_TOKEN nas Settings
5. O bot fica ativo 24/7 gratuitamente
`}},{id:"sistema-juridico",name:"Sistema Jurídico Completo",description:"API REST completa para escritório de advocacia com Neon DB, autenticação JWT e todos os módulos",icon:"server",files:{"index.js":`require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { neon } = require('@neondatabase/serverless');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'troque_esta_senha_em_producao';

// ─── Conexão com banco Neon ───────────────────────────────────────────────
const sql = neon(process.env.DATABASE_URL);

app.use(cors());
app.use(express.json());

// ─── Middleware de autenticação ───────────────────────────────────────────
function auth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ erro: 'Token necessário' });
  try {
    req.usuario = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ erro: 'Token inválido ou expirado' });
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ROTAS PÚBLICAS
// ═══════════════════════════════════════════════════════════════════════════

// GET /health — verificar se a API está online
app.get('/health', (_, res) => res.json({ status: 'ok', hora: new Date().toISOString() }));

// POST /auth/login — autenticar usuário
app.post('/auth/login', async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) return res.status(400).json({ erro: 'Email e senha obrigatórios' });
  try {
    const rows = await sql\`SELECT * FROM usuarios WHERE email = \${email} AND ativo = true\`;
    const usuario = rows[0];
    if (!usuario) return res.status(401).json({ erro: 'Credenciais inválidas' });
    const ok = await bcrypt.compare(senha, usuario.senha_hash);
    if (!ok) return res.status(401).json({ erro: 'Credenciais inválidas' });
    const token = jwt.sign({ id: usuario.id, email: usuario.email, perfil: usuario.perfil }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email, perfil: usuario.perfil, oab: usuario.oab } });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// POST /auth/registro — criar primeiro usuário admin
app.post('/auth/registro', async (req, res) => {
  const { nome, email, senha, oab } = req.body;
  if (!nome || !email || !senha) return res.status(400).json({ erro: 'Nome, email e senha obrigatórios' });
  try {
    const hash = await bcrypt.hash(senha, 12);
    const rows = await sql\`
      INSERT INTO usuarios (nome, email, senha_hash, perfil, oab)
      VALUES (\${nome}, \${email}, \${hash}, 'admin', \${oab || null})
      RETURNING id, nome, email, perfil, oab\`;
    const token = jwt.sign({ id: rows[0].id, email: rows[0].email, perfil: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, usuario: rows[0] });
  } catch (err) {
    if (err.message.includes('unique')) return res.status(409).json({ erro: 'Email já cadastrado' });
    res.status(500).json({ erro: err.message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// CLIENTES (protegido por auth)
// ═══════════════════════════════════════════════════════════════════════════
app.get('/clientes', auth, async (req, res) => {
  const { busca, pagina = 1, limite = 20 } = req.query;
  const offset = (pagina - 1) * limite;
  try {
    let rows;
    if (busca) {
      rows = await sql\`SELECT * FROM clientes WHERE ativo = true AND (nome ILIKE \${'%'+busca+'%'} OR cpf LIKE \${'%'+busca+'%'} OR email ILIKE \${'%'+busca+'%'}) ORDER BY nome LIMIT \${+limite} OFFSET \${offset}\`;
    } else {
      rows = await sql\`SELECT * FROM clientes WHERE ativo = true ORDER BY nome LIMIT \${+limite} OFFSET \${offset}\`;
    }
    res.json(rows);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

app.get('/clientes/:id', auth, async (req, res) => {
  try {
    const [cliente] = await sql\`SELECT * FROM clientes WHERE id = \${req.params.id} AND ativo = true\`;
    if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
    const processos = await sql\`SELECT id, numero_processo, tipo, area_direito, status, fase FROM processos WHERE cliente_id = \${req.params.id} ORDER BY criado_em DESC\`;
    res.json({ ...cliente, processos });
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

app.post('/clientes', auth, async (req, res) => {
  const { nome, cpf, rg, email, telefone, celular, endereco, cidade, estado, cep, data_nascimento, observacoes } = req.body;
  if (!nome) return res.status(400).json({ erro: 'Nome obrigatório' });
  try {
    const [c] = await sql\`INSERT INTO clientes (nome,cpf,rg,email,telefone,celular,endereco,cidade,estado,cep,data_nascimento,observacoes) VALUES (\${nome},\${cpf||null},\${rg||null},\${email||null},\${telefone||null},\${celular||null},\${endereco||null},\${cidade||null},\${estado||null},\${cep||null},\${data_nascimento||null},\${observacoes||null}) RETURNING *\`;
    res.status(201).json(c);
  } catch (err) {
    if (err.message.includes('unique')) return res.status(409).json({ erro: 'CPF ou email já cadastrado' });
    res.status(500).json({ erro: err.message });
  }
});

app.put('/clientes/:id', auth, async (req, res) => {
  const { nome, cpf, rg, email, telefone, celular, endereco, cidade, estado, cep, data_nascimento, observacoes } = req.body;
  try {
    const [c] = await sql\`UPDATE clientes SET nome=COALESCE(\${nome},nome), cpf=COALESCE(\${cpf||null},cpf), email=COALESCE(\${email||null},email), telefone=COALESCE(\${telefone||null},telefone), celular=COALESCE(\${celular||null},celular), endereco=COALESCE(\${endereco||null},endereco), cidade=COALESCE(\${cidade||null},cidade), estado=COALESCE(\${estado||null},estado), cep=COALESCE(\${cep||null},cep), observacoes=COALESCE(\${observacoes||null},observacoes), atualizado_em=NOW() WHERE id=\${req.params.id} RETURNING *\`;
    res.json(c);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

// ═══════════════════════════════════════════════════════════════════════════
// PROCESSOS
// ═══════════════════════════════════════════════════════════════════════════
app.get('/processos', auth, async (req, res) => {
  const { busca, status, area, pagina = 1, limite = 20 } = req.query;
  const offset = (pagina - 1) * limite;
  try {
    const rows = await sql\`
      SELECT p.*, c.nome AS cliente_nome, c.cpf AS cliente_cpf, u.nome AS advogado
      FROM processos p
      LEFT JOIN clientes c ON c.id = p.cliente_id
      LEFT JOIN usuarios u ON u.id = p.usuario_id
      WHERE (\${busca||null} IS NULL OR p.numero_processo ILIKE \${'%'+(busca||'')+'%'} OR c.nome ILIKE \${'%'+(busca||'')+'%'})
        AND (\${status||null} IS NULL OR p.status = \${status||null})
        AND (\${area||null} IS NULL OR p.area_direito = \${area||null})
      ORDER BY p.criado_em DESC
      LIMIT \${+limite} OFFSET \${offset}\`;
    res.json(rows);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

app.get('/processos/:id', auth, async (req, res) => {
  try {
    const [p] = await sql\`SELECT p.*, c.nome AS cliente_nome FROM processos p LEFT JOIN clientes c ON c.id = p.cliente_id WHERE p.id = \${req.params.id}\`;
    if (!p) return res.status(404).json({ erro: 'Processo não encontrado' });
    const [audiencias, prazos, documentos, movimentacoes] = await Promise.all([
      sql\`SELECT * FROM audiencias WHERE processo_id = \${req.params.id} ORDER BY data_hora\`,
      sql\`SELECT * FROM prazos WHERE processo_id = \${req.params.id} ORDER BY data_limite\`,
      sql\`SELECT * FROM documentos WHERE processo_id = \${req.params.id} ORDER BY criado_em DESC\`,
      sql\`SELECT * FROM movimentacoes WHERE processo_id = \${req.params.id} ORDER BY data_movimentacao DESC LIMIT 50\`,
    ]);
    res.json({ ...p, audiencias, prazos, documentos, movimentacoes });
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

app.post('/processos', auth, async (req, res) => {
  const { numero_processo, cliente_id, tipo, area_direito, vara, comarca, tribunal, polo_ativo, polo_passivo, objeto, valor_causa, data_distribuicao, data_prazo, observacoes } = req.body;
  if (!numero_processo) return res.status(400).json({ erro: 'Número do processo obrigatório' });
  try {
    const [p] = await sql\`INSERT INTO processos (numero_processo,cliente_id,usuario_id,tipo,area_direito,vara,comarca,tribunal,polo_ativo,polo_passivo,objeto,valor_causa,data_distribuicao,data_prazo,observacoes) VALUES (\${numero_processo},\${cliente_id||null},\${req.usuario.id},\${tipo||null},\${area_direito||null},\${vara||null},\${comarca||null},\${tribunal||null},\${polo_ativo||null},\${polo_passivo||null},\${objeto||null},\${valor_causa||null},\${data_distribuicao||null},\${data_prazo||null},\${observacoes||null}) RETURNING *\`;
    res.status(201).json(p);
  } catch (err) {
    if (err.message.includes('unique')) return res.status(409).json({ erro: 'Número de processo já cadastrado' });
    res.status(500).json({ erro: err.message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// AUDIÊNCIAS
// ═══════════════════════════════════════════════════════════════════════════
app.get('/audiencias', auth, async (req, res) => {
  try {
    const rows = await sql\`
      SELECT a.*, p.numero_processo, c.nome AS cliente_nome
      FROM audiencias a
      JOIN processos p ON p.id = a.processo_id
      LEFT JOIN clientes c ON c.id = p.cliente_id
      WHERE a.data_hora >= NOW()
      ORDER BY a.data_hora LIMIT 50\`;
    res.json(rows);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

app.post('/audiencias', auth, async (req, res) => {
  const { processo_id, tipo, data_hora, local, sala, juiz, pauta } = req.body;
  if (!processo_id || !data_hora) return res.status(400).json({ erro: 'Processo e data/hora obrigatórios' });
  try {
    const [a] = await sql\`INSERT INTO audiencias (processo_id,tipo,data_hora,local,sala,juiz,pauta) VALUES (\${processo_id},\${tipo||null},\${data_hora},\${local||null},\${sala||null},\${juiz||null},\${pauta||null}) RETURNING *\`;
    res.status(201).json(a);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

// ═══════════════════════════════════════════════════════════════════════════
// PRAZOS
// ═══════════════════════════════════════════════════════════════════════════
app.get('/prazos/proximos', auth, async (req, res) => {
  try {
    const rows = await sql\`
      SELECT pr.*, p.numero_processo, c.nome AS cliente_nome
      FROM prazos pr
      JOIN processos p ON p.id = pr.processo_id
      LEFT JOIN clientes c ON c.id = p.cliente_id
      WHERE pr.concluido = false AND pr.data_limite >= NOW()::date
      ORDER BY pr.data_limite LIMIT 30\`;
    res.json(rows);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

// ═══════════════════════════════════════════════════════════════════════════
// DASHBOARD — resumo geral
// ═══════════════════════════════════════════════════════════════════════════
app.get('/dashboard', auth, async (req, res) => {
  try {
    const [stats] = await sql\`
      SELECT
        (SELECT COUNT(*) FROM processos WHERE status = 'ativo') AS processos_ativos,
        (SELECT COUNT(*) FROM clientes WHERE ativo = true) AS total_clientes,
        (SELECT COUNT(*) FROM audiencias WHERE data_hora BETWEEN NOW() AND NOW() + INTERVAL '7 days') AS audiencias_semana,
        (SELECT COUNT(*) FROM prazos WHERE concluido = false AND data_limite <= NOW()::date + 7) AS prazos_proximos\`;
    res.json(stats);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

// ─── Iniciar servidor ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(\`\`);
  console.log(\`⚖️  Sistema Jurídico SK — API REST\`);
  console.log(\`🟢 Rodando em http://localhost:\${PORT}\`);
  console.log(\`\`);
  console.log(\`Endpoints disponíveis:\`);
  console.log(\`  POST /auth/registro   — criar conta\`);
  console.log(\`  POST /auth/login      — fazer login\`);
  console.log(\`  GET  /dashboard       — resumo geral\`);
  console.log(\`  GET  /clientes        — listar clientes\`);
  console.log(\`  GET  /processos       — listar processos\`);
  console.log(\`  GET  /audiencias      — próximas audiências\`);
  console.log(\`  GET  /prazos/proximos — prazos vencendo\`);
});`,".env":`# ── Banco de dados (Neon — gratuito em neon.tech) ──────────────────────────
DATABASE_URL=postgresql://user:senha@host/banco?sslmode=require

# ── Segurança JWT (troque por uma senha forte) ────────────────────────────
JWT_SECRET=troque_por_senha_muito_secreta_aqui

# ── Porta do servidor (padrão 3000) ──────────────────────────────────────
PORT=3000`,"package.json":`{
  "name": "sistema-juridico-sk",
  "version": "1.0.0",
  "description": "API REST completa para escritório de advocacia",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js",
    "criar-tabelas": "node setup-db.js"
  },
  "dependencies": {
    "@neondatabase/serverless": "^0.9.4",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2"
  }
}`,"setup-db.js":`// Execute com: node setup-db.js
// Cria todas as tabelas do sistema jurídico no banco Neon
require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

async function criarTabelas() {
  console.log('⚙️  Criando tabelas...');
  
  await sql\`
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(150) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      senha_hash VARCHAR(255) NOT NULL,
      perfil VARCHAR(20) DEFAULT 'advogado',
      oab VARCHAR(20),
      ativo BOOLEAN DEFAULT true,
      criado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ usuarios');

  await sql\`
    CREATE TABLE IF NOT EXISTS clientes (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(200) NOT NULL,
      cpf VARCHAR(14) UNIQUE,
      rg VARCHAR(20),
      email VARCHAR(150),
      telefone VARCHAR(20),
      celular VARCHAR(20),
      endereco TEXT,
      cidade VARCHAR(100),
      estado CHAR(2),
      cep VARCHAR(9),
      data_nascimento DATE,
      observacoes TEXT,
      ativo BOOLEAN DEFAULT true,
      criado_em TIMESTAMP DEFAULT NOW(),
      atualizado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ clientes');

  await sql\`
    CREATE TABLE IF NOT EXISTS processos (
      id SERIAL PRIMARY KEY,
      numero_processo VARCHAR(50) UNIQUE NOT NULL,
      cliente_id INTEGER REFERENCES clientes(id),
      usuario_id INTEGER REFERENCES usuarios(id),
      tipo VARCHAR(50),
      area_direito VARCHAR(50),
      vara VARCHAR(100),
      comarca VARCHAR(100),
      tribunal VARCHAR(100),
      fase VARCHAR(50) DEFAULT 'inicial',
      status VARCHAR(30) DEFAULT 'ativo',
      polo_ativo TEXT,
      polo_passivo TEXT,
      objeto TEXT,
      valor_causa DECIMAL(15,2),
      data_distribuicao DATE,
      data_prazo DATE,
      observacoes TEXT,
      criado_em TIMESTAMP DEFAULT NOW(),
      atualizado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ processos');

  await sql\`
    CREATE TABLE IF NOT EXISTS audiencias (
      id SERIAL PRIMARY KEY,
      processo_id INTEGER REFERENCES processos(id),
      tipo VARCHAR(80),
      data_hora TIMESTAMP NOT NULL,
      local VARCHAR(200),
      sala VARCHAR(50),
      juiz VARCHAR(150),
      pauta TEXT,
      resultado TEXT,
      status VARCHAR(20) DEFAULT 'agendada',
      lembrete_enviado BOOLEAN DEFAULT false,
      criado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ audiencias');

  await sql\`
    CREATE TABLE IF NOT EXISTS prazos (
      id SERIAL PRIMARY KEY,
      processo_id INTEGER REFERENCES processos(id),
      descricao TEXT NOT NULL,
      data_limite DATE NOT NULL,
      tipo VARCHAR(50),
      concluido BOOLEAN DEFAULT false,
      criado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ prazos');

  await sql\`
    CREATE TABLE IF NOT EXISTS documentos (
      id SERIAL PRIMARY KEY,
      processo_id INTEGER REFERENCES processos(id),
      nome VARCHAR(200) NOT NULL,
      tipo VARCHAR(50),
      url TEXT,
      tamanho_bytes INTEGER,
      enviado_por INTEGER REFERENCES usuarios(id),
      criado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ documentos');

  await sql\`
    CREATE TABLE IF NOT EXISTS movimentacoes (
      id SERIAL PRIMARY KEY,
      processo_id INTEGER REFERENCES processos(id),
      descricao TEXT NOT NULL,
      tipo VARCHAR(50),
      data_movimentacao TIMESTAMP DEFAULT NOW(),
      usuario_id INTEGER REFERENCES usuarios(id),
      origem VARCHAR(30) DEFAULT 'manual'
    )\`;
  console.log('✅ movimentacoes');

  await sql\`
    CREATE TABLE IF NOT EXISTS financeiro (
      id SERIAL PRIMARY KEY,
      processo_id INTEGER REFERENCES processos(id),
      cliente_id INTEGER REFERENCES clientes(id),
      descricao TEXT NOT NULL,
      tipo VARCHAR(20) NOT NULL,
      valor DECIMAL(15,2) NOT NULL,
      data_vencimento DATE,
      data_pagamento DATE,
      status VARCHAR(20) DEFAULT 'pendente',
      criado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ financeiro');

  console.log('');
  console.log('🎉 Todas as tabelas criadas com sucesso!');
  console.log('');
  console.log('Próximos passos:');
  console.log('  1. npm start           — iniciar o servidor');
  console.log('  2. POST /auth/registro — criar sua conta de admin');
  console.log('  3. POST /auth/login    — fazer login e obter token JWT');
  process.exit(0);
}

criarTabelas().catch(err => {
  console.error('❌ Erro:', err.message);
  process.exit(1);
});`,"README.md":`# Sistema Jurídico SK — API REST Completa ⚖️

## Configuração

### 1. Banco de Dados (Neon — gratuito)
1. Acesse **neon.tech** e crie conta
2. Crie um projeto chamado "juridico"
3. Copie a **Connection string** do painel
4. Cole no arquivo **.env** em DATABASE_URL

### 2. Instalar e configurar
\`\`\`bash
npm install
node setup-db.js   # cria todas as tabelas automaticamente
npm start          # inicia o servidor
\`\`\`

## Criar primeira conta de admin

\`\`\`bash
curl -X POST http://localhost:3000/auth/registro \\
  -H "Content-Type: application/json" \\
  -d '{"nome":"Dr. Saulo Kenji","email":"saulo@sk.com","senha":"sua_senha","oab":"OAB/XX 12345"}'
\`\`\`

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| GET | /health | Verificar API |
| POST | /auth/registro | Criar conta |
| POST | /auth/login | Fazer login |
| GET | /dashboard | Resumo geral |
| GET/POST | /clientes | Listar/criar clientes |
| GET | /clientes/:id | Detalhes + processos do cliente |
| PUT | /clientes/:id | Editar cliente |
| GET/POST | /processos | Listar/criar processos |
| GET | /processos/:id | Detalhes completos + tudo vinculado |
| GET | /audiencias | Próximas audiências |
| POST | /audiencias | Cadastrar audiência |
| GET | /prazos/proximos | Prazos vencendo |

## Publicar no Railway (grátis)
1. Crie conta em **railway.app**
2. "New Project" → "Deploy from GitHub"
3. Configure as variáveis de ambiente (DATABASE_URL e JWT_SECRET)
4. Deploy automático!

## Áreas do Direito suportadas
- Cível | Trabalhista | Criminal | Família | Previdenciário | Tributário | Consumidor | Administrativo
`}},{id:"crud-sqlite",name:"CRUD com SQLite",description:"Sistema completo de cadastro local com SQLite — sem precisar de banco externo",icon:"database",files:{"index.js":`const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Banco SQLite (arquivo local) ─────────────────────────────────────────
const db = new Database(path.join(__dirname, 'dados.db'));

// Criar tabelas automaticamente
db.exec(\`
  CREATE TABLE IF NOT EXISTS registros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE,
    telefone TEXT,
    categoria TEXT DEFAULT 'geral',
    observacoes TEXT,
    ativo INTEGER DEFAULT 1,
    criado_em TEXT DEFAULT (datetime('now','localtime')),
    atualizado_em TEXT DEFAULT (datetime('now','localtime'))
  );
  
  -- Dados de exemplo
  INSERT OR IGNORE INTO registros (nome, email, telefone, categoria) VALUES
    ('João Silva', 'joao@email.com', '(11) 99999-1111', 'cliente'),
    ('Maria Santos', 'maria@email.com', '(11) 99999-2222', 'fornecedor'),
    ('Pedro Costa', 'pedro@email.com', '(11) 99999-3333', 'cliente');
\`);

app.use(express.json());
app.use(express.static('public'));

// ─── API REST ─────────────────────────────────────────────────────────────
app.get('/api/registros', (req, res) => {
  const { busca, categoria } = req.query;
  let query = 'SELECT * FROM registros WHERE ativo = 1';
  const params = [];
  if (busca) { query += ' AND (nome LIKE ? OR email LIKE ?)'; params.push(\`%\${busca}%\`, \`%\${busca}%\`); }
  if (categoria) { query += ' AND categoria = ?'; params.push(categoria); }
  query += ' ORDER BY criado_em DESC';
  res.json(db.prepare(query).all(...params));
});

app.get('/api/registros/:id', (req, res) => {
  const r = db.prepare('SELECT * FROM registros WHERE id = ?').get(req.params.id);
  if (!r) return res.status(404).json({ erro: 'Não encontrado' });
  res.json(r);
});

app.post('/api/registros', (req, res) => {
  const { nome, email, telefone, categoria, observacoes } = req.body;
  if (!nome) return res.status(400).json({ erro: 'Nome obrigatório' });
  try {
    const r = db.prepare('INSERT INTO registros (nome,email,telefone,categoria,observacoes) VALUES (?,?,?,?,?)').run(nome, email||null, telefone||null, categoria||'geral', observacoes||null);
    res.status(201).json(db.prepare('SELECT * FROM registros WHERE id = ?').get(r.lastInsertRowid));
  } catch (err) {
    if (err.message.includes('UNIQUE')) return res.status(409).json({ erro: 'Email já cadastrado' });
    res.status(500).json({ erro: err.message });
  }
});

app.put('/api/registros/:id', (req, res) => {
  const { nome, email, telefone, categoria, observacoes } = req.body;
  db.prepare("UPDATE registros SET nome=COALESCE(?,nome), email=COALESCE(?,email), telefone=COALESCE(?,telefone), categoria=COALESCE(?,categoria), observacoes=COALESCE(?,observacoes), atualizado_em=datetime('now','localtime') WHERE id=?").run(nome,email,telefone,categoria,observacoes,req.params.id);
  res.json(db.prepare('SELECT * FROM registros WHERE id = ?').get(req.params.id));
});

app.delete('/api/registros/:id', (req, res) => {
  db.prepare('UPDATE registros SET ativo = 0 WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(\`🟢 CRUD SQLite rodando em http://localhost:\${PORT}\`);
  console.log(\`   Acesse o painel em http://localhost:\${PORT}\`);
});`,"public/index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD — Cadastro</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: system-ui; background:#0f1117; color:#e8eaf0; min-height:100vh; }
    header { background:#1a1f2e; border-bottom:1px solid #2a3040; padding:16px 20px; display:flex; align-items:center; justify-content:space-between; }
    header h1 { font-size:18px; font-weight:700; color:#4f8ef7; }
    .container { max-width:800px; margin:0 auto; padding:20px; }
    .btn { padding:10px 20px; border-radius:10px; border:none; cursor:pointer; font-size:14px; font-weight:600; transition:all .2s; }
    .btn-primary { background:#4f8ef7; color:#fff; }
    .btn-danger { background:#ef4444; color:#fff; }
    .btn-sm { padding:6px 12px; font-size:12px; }
    input, select, textarea { width:100%; padding:10px 12px; background:#1e2540; border:1px solid #2a3040; border-radius:10px; color:#e8eaf0; font-size:14px; margin-bottom:10px; outline:none; }
    input:focus, select:focus, textarea:focus { border-color:#4f8ef7; }
    .card { background:#1a1f2e; border:1px solid #2a3040; border-radius:14px; padding:20px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:flex-start; }
    .modal { display:none; position:fixed; inset:0; background:rgba(0,0,0,.7); z-index:100; align-items:center; justify-content:center; }
    .modal.open { display:flex; }
    .modal-box { background:#1a1f2e; border-radius:20px; padding:24px; width:90%; max-width:440px; }
    .badge { padding:3px 10px; border-radius:20px; font-size:11px; font-weight:700; background:#4f8ef720; color:#4f8ef7; }
    .search-row { display:flex; gap:10px; margin-bottom:16px; }
    .search-row input { margin:0; }
    .search-row select { margin:0; width:140px; flex-shrink:0; }
    #vazio { text-align:center; padding:60px 0; color:#555; }
  </style>
</head>
<body>
  <header>
    <h1>📋 Cadastro</h1>
    <button class="btn btn-primary btn-sm" onclick="abrirModal()">+ Novo</button>
  </header>
  <div class="container">
    <div class="search-row">
      <input id="busca" type="search" placeholder="🔍 Buscar por nome ou email..." oninput="listar()">
      <select id="filtro" onchange="listar()"><option value="">Todas categorias</option><option>cliente</option><option>fornecedor</option><option>geral</option></select>
    </div>
    <div id="lista"></div>
  </div>

  <div class="modal" id="modal">
    <div class="modal-box">
      <h2 id="modal-titulo" style="margin-bottom:16px;font-size:16px">Novo Registro</h2>
      <input id="f-nome" placeholder="Nome *" />
      <input id="f-email" type="email" placeholder="Email" />
      <input id="f-telefone" placeholder="Telefone" />
      <select id="f-categoria"><option>geral</option><option>cliente</option><option>fornecedor</option></select>
      <textarea id="f-obs" rows="2" placeholder="Observações" style="resize:none"></textarea>
      <div style="display:flex;gap:10px;margin-top:8px">
        <button class="btn btn-primary" style="flex:1" onclick="salvar()">Salvar</button>
        <button class="btn" style="background:#2a3040;flex:1" onclick="fecharModal()">Cancelar</button>
      </div>
    </div>
  </div>

  <script>
    let editId = null;
    async function listar() {
      const busca = document.getElementById('busca').value;
      const cat = document.getElementById('filtro').value;
      const r = await fetch('/api/registros?busca='+encodeURIComponent(busca)+'&categoria='+encodeURIComponent(cat));
      const data = await r.json();
      const el = document.getElementById('lista');
      if (!data.length) { el.innerHTML = '<div id="vazio">Nenhum registro encontrado</div>'; return; }
      el.innerHTML = data.map(d => \`
        <div class="card">
          <div>
            <div style="font-size:15px;font-weight:700;margin-bottom:4px">\${d.nome}</div>
            <div style="color:#888;font-size:12px">\${d.email||''} \${d.telefone ? '· '+d.telefone : ''}</div>
            \${d.observacoes ? '<div style="color:#666;font-size:12px;margin-top:4px">'+d.observacoes+'</div>' : ''}
            <span class="badge" style="margin-top:8px;display:inline-block">\${d.categoria}</span>
          </div>
          <div style="display:flex;gap:8px;shrink:0">
            <button class="btn btn-sm" style="background:#2a3040" onclick="editar(\${d.id})">✏️</button>
            <button class="btn btn-danger btn-sm" onclick="excluir(\${d.id})">🗑️</button>
          </div>
        </div>
      \`).join('');
    }
    function abrirModal(dados) {
      editId = dados?.id || null;
      document.getElementById('modal-titulo').textContent = editId ? 'Editar Registro' : 'Novo Registro';
      document.getElementById('f-nome').value = dados?.nome||'';
      document.getElementById('f-email').value = dados?.email||'';
      document.getElementById('f-telefone').value = dados?.telefone||'';
      document.getElementById('f-categoria').value = dados?.categoria||'geral';
      document.getElementById('f-obs').value = dados?.observacoes||'';
      document.getElementById('modal').classList.add('open');
    }
    function fecharModal() { document.getElementById('modal').classList.remove('open'); }
    async function editar(id) { const r = await fetch('/api/registros/'+id); abrirModal(await r.json()); }
    async function salvar() {
      const body = { nome:document.getElementById('f-nome').value, email:document.getElementById('f-email').value, telefone:document.getElementById('f-telefone').value, categoria:document.getElementById('f-categoria').value, observacoes:document.getElementById('f-obs').value };
      await fetch('/api/registros'+(editId?'/'+editId:''), { method: editId?'PUT':'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body) });
      fecharModal(); listar();
    }
    async function excluir(id) {
      if (!confirm('Remover este registro?')) return;
      await fetch('/api/registros/'+id, { method:'DELETE' });
      listar();
    }
    listar();
  <\/script>
</body>
</html>`,"package.json":`{
  "name": "crud-sqlite",
  "version": "1.0.0",
  "description": "CRUD completo com SQLite — sem banco externo",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js"
  },
  "dependencies": {
    "better-sqlite3": "^9.4.3",
    "express": "^4.19.2"
  }
}`}}],ns={openai:32768,anthropic:64e3,google:65536,custom:32768,builtin:32768},is=.7,rn=9e5,vo=[{id:1,name:"Slot 1",provider:"openai",apiKey:"",model:"gpt-4o-mini",baseUrl:"",active:!1},{id:2,name:"Slot 2",provider:"anthropic",apiKey:"",model:"claude-haiku-4-20250514",baseUrl:"",active:!1},{id:3,name:"Slot 3",provider:"google",apiKey:"",model:"gemini-2.0-flash",baseUrl:"",active:!1},{id:4,name:"Slot 4",provider:"custom",apiKey:"",model:"",baseUrl:"https://openrouter.ai/api/v1",active:!1}];async function ls(t,s){const o=new AbortController,r=setTimeout(()=>o.abort(),rn);try{return await fetch(t,{...s,signal:o.signal})}catch(n){throw n.name==="AbortError"?new Error("Tempo esgotado (15min). Tente novamente com menos contexto ou pacotes."):n}finally{clearTimeout(r)}}function Wa(){try{const t=localStorage.getItem("ai-key-slots");if(t)return JSON.parse(t).map((o,r)=>({...o,baseUrl:o.baseUrl||vo[r]?.baseUrl||""}))}catch{}return vo}function nn(t){localStorage.setItem("ai-key-slots",JSON.stringify(t))}function Ja(t){return t.find(s=>s.active&&s.apiKey)}async function es(t,s,o){const r=t.slice(-80),n=[{role:"system",content:o},...r];return s.provider==="anthropic"?cn(n,s):s.provider==="google"?dn(n,s):ln(n,s)}async function ln(t,s){const o=s.provider==="custom"&&s.baseUrl?s.baseUrl.replace(/\/$/,""):"https://api.openai.com/v1",r={"Content-Type":"application/json",Authorization:`Bearer ${s.apiKey}`,"HTTP-Referer":"https://sk-code-editor.app","X-Title":"SK Code Editor — Jasmim"},n=ns[s.provider]??16384,c=await ls(`${o}/chat/completions`,{method:"POST",headers:r,body:JSON.stringify({model:s.model||"gpt-4o-mini",messages:t.map(h=>({role:h.role,content:h.content})),max_tokens:n,temperature:is})});if(!c.ok){const h=await c.text();let m=h.slice(0,400);try{m=JSON.parse(h).error?.message??m}catch{}throw new Error(`Erro ${s.provider} ${c.status}: ${m}`)}return(await c.json()).choices?.[0]?.message?.content||"Sem resposta"}async function cn(t,s){const o=t.find(p=>p.role==="system")?.content??"",r=t.filter(p=>p.role!=="system").map(p=>({role:p.role,content:p.content})),n=await ls("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":s.apiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:s.model||"claude-haiku-4-20250514",max_tokens:ns.anthropic,system:o,messages:r,temperature:is})});if(!n.ok){const p=await n.text();let h=p.slice(0,400);try{h=JSON.parse(p).error?.message??h}catch{}throw new Error(`Erro Anthropic ${n.status}: ${h}`)}return(await n.json()).content?.[0]?.text||"Sem resposta"}async function dn(t,s){const o=s.model||"gemini-2.0-flash",r=t.find(m=>m.role==="system")?.content??"",c=t.filter(m=>m.role!=="system").map(m=>({role:m.role==="assistant"?"model":"user",parts:[{text:m.content}]})),p=await ls(`https://generativelanguage.googleapis.com/v1beta/models/${o}:generateContent?key=${s.apiKey}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system_instruction:{parts:[{text:r}]},contents:c,generationConfig:{maxOutputTokens:ns.google,temperature:is,candidateCount:1},safetySettings:[{category:"HARM_CATEGORY_HARASSMENT",threshold:"BLOCK_NONE"},{category:"HARM_CATEGORY_HATE_SPEECH",threshold:"BLOCK_NONE"},{category:"HARM_CATEGORY_SEXUALLY_EXPLICIT",threshold:"BLOCK_NONE"},{category:"HARM_CATEGORY_DANGEROUS_CONTENT",threshold:"BLOCK_NONE"}]})});if(!p.ok){const m=await p.text();let j=m.slice(0,400);try{j=JSON.parse(m).error?.message??j}catch{}throw new Error(`Erro Gemini ${p.status}: ${j}`)}return(await p.json()).candidates?.[0]?.content?.parts?.[0]?.text||"Sem resposta"}async function yo(t,s){const o=t.slice(-80),r=await ls("/api/ai/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:s,messages:o.map(c=>({role:c.role,content:c.content}))})});if(!r.ok){const c=await r.text();let p=c.slice(0,400);try{p=JSON.parse(c).error??p}catch{}throw new Error(`Erro no servidor: ${p}`)}return(await r.json()).content||"Sem resposta"}function pn(t,s){return!(s||!t||t.provider==="anthropic")}function un(t){return t.provider==="google"?"https://generativelanguage.googleapis.com/v1beta/openai/chat/completions":t.provider==="openai"?"https://api.openai.com/v1/chat/completions":`${(t.baseUrl||"").replace(/\/chat\/completions\/?$/,"")}/chat/completions`}function mn(t){return{"Content-Type":"application/json",Authorization:`Bearer ${t.apiKey}`,"HTTP-Referer":"https://sk-code-editor.app","X-Title":"SK Code Editor — Jasmim"}}function xn(t,s,o){return JSON.stringify({model:t.model,messages:[{role:"system",content:o},...s],stream:!0,max_tokens:ns[t.provider]??16384,temperature:is})}async function gn(t){try{return{ok:!0,msg:`✅ Funcionando! Resposta: "${(await es([{role:"user",content:"Responda apenas: OK"}],t,"Você é um assistente. Responda apenas 'OK' e nada mais.")).slice(0,60)}"`}}catch(s){return{ok:!1,msg:`❌ ${s.message}`}}}function Ds(t){const s=[];let o=t;for(;o.length>0;){const r=o.match(/```filepath:([^\n]+)\n([\s\S]*?)```/),n=o.match(/```(?:bash|shell|sh|cmd|command)\n([\s\S]*?)```/),c=o.match(/```(\w*)\n([\s\S]*?)```/),p=r?o.indexOf(r[0]):1/0,h=n?o.indexOf(n[0]):1/0,m=c?o.indexOf(c[0]):1/0,j=Math.min(p,h,m);if(j===1/0){o.trim()&&s.push({type:"text",content:o});break}if(j>0){const f=o.slice(0,j);f.trim()&&s.push({type:"text",content:f})}if(p<=h&&p<=m&&r)s.push({type:"file",content:r[2].trim(),filePath:r[1].trim()}),o=o.slice(p+r[0].length);else if(h<=m&&n)s.push({type:"command",content:n[1].trim()}),o=o.slice(h+n[0].length);else if(c)s.push({type:"code",content:c[2].trim(),language:c[1]||"plaintext"}),o=o.slice(m+c[0].length);else break}return s}function cs(){try{const t=localStorage.getItem("github-credentials");if(t)return JSON.parse(t)}catch{}return{token:"",username:""}}function Qs(t){localStorage.setItem("github-credentials",JSON.stringify(t))}async function Qo(t){const s=await fetch("https://api.github.com/user/repos?sort=updated&per_page=30",{headers:{Authorization:`token ${t.token}`,Accept:"application/vnd.github.v3+json"}});if(!s.ok)throw new Error(`Erro GitHub: ${s.status}`);return s.json()}async function Ys(t,s,o,r=""){const n={Accept:"application/vnd.github.v3+json"};t.token&&(n.Authorization=`token ${t.token}`);const c=await fetch(`https://api.github.com/repos/${s}/${o}/contents/${r}`,{headers:n});if(!c.ok)throw new Error(`Erro ao buscar conteudo: ${c.status}`);return c.json()}async function Yo(t,s,o,r){const n={Accept:"application/vnd.github.v3+json"};t.token&&(n.Authorization=`token ${t.token}`);const c=await fetch(`https://api.github.com/repos/${s}/${o}/contents/${r}`,{headers:n});if(!c.ok)throw new Error(`Erro ao buscar arquivo: ${c.status}`);const p=await c.json();return atob(p.content)}async function Da(t,s,o){const r={};async function n(c){const p=await Ys(t,s,o,c);if(Array.isArray(p))for(const h of p)if(h.type==="file"&&h.size<5e5)try{const m=await Yo(t,s,o,h.path);r[h.path]=m}catch{}else h.type==="dir"&&await n(h.path)}return await n(""),r}async function Xo(t,s,o,r,n,c,p){const h={message:c,content:btoa(unescape(encodeURIComponent(n)))};p&&(h.sha=p);const m=await fetch(`https://api.github.com/repos/${s}/${o}/contents/${r}`,{method:"PUT",headers:{Authorization:`token ${t.token}`,Accept:"application/vnd.github.v3+json","Content-Type":"application/json"},body:JSON.stringify(h)});if(!m.ok){const j=await m.text();throw new Error(`Erro ao salvar: ${m.status} - ${j}`)}}async function ma(t,s,o,r,n){let c=0,p=0;const h={};try{const m=await Ys(t,s,o);if(Array.isArray(m))for(const j of m)h[j.path]=j.sha}catch{}for(const[m,j]of Object.entries(r))try{let f;try{const k=await fetch(`https://api.github.com/repos/${s}/${o}/contents/${m}`,{headers:{Authorization:`token ${t.token}`,Accept:"application/vnd.github.v3+json"}});k.ok&&(f=(await k.json()).sha)}catch{}await Xo(t,s,o,m,j,n,f),c++}catch{p++}return{success:c,failed:p}}async function Ia(t,s,o="",r=!1){const n=await fetch("https://api.github.com/user/repos",{method:"POST",headers:{Authorization:`token ${t.token}`,Accept:"application/vnd.github.v3+json","Content-Type":"application/json"},body:JSON.stringify({name:s,description:o,private:r,auto_init:!0})});if(!n.ok){const c=await n.text();throw new Error(`Erro ao criar repositorio: ${n.status} - ${c}`)}return n.json()}async function Xs(t,s,o,r="main",n="/"){const c=await fetch(`https://api.github.com/repos/${s}/${o}/pages`,{method:"POST",headers:{Authorization:`token ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({source:{branch:r,path:n}})});if(!c.ok&&c.status!==409){const p=await c.text();throw new Error(`Erro ao ativar GitHub Pages: ${c.status} - ${p}`)}return`https://${s}.github.io/${o}/`}async function ds(t,s,o){await fetch(`https://api.github.com/repos/${s}/${o}`,{method:"PATCH",headers:{Authorization:`token ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({private:!1})})}const hn=Object.freeze(Object.defineProperty({__proto__:null,cloneRepo:Da,createOrUpdateFile:Xo,createRepo:Ia,enableGitHubPages:Xs,getFileContent:Yo,getRepoContents:Ys,listRepos:Qo,loadGitHubCredentials:cs,makeRepoPublic:ds,pushAllFiles:ma,saveGitHubCredentials:Qs},Symbol.toStringTag,{value:"Module"}));function bn(t){const s=["from-blue-600 to-indigo-700","from-purple-600 to-pink-700","from-green-600 to-emerald-700","from-orange-500 to-red-600","from-cyan-600 to-blue-700","from-yellow-500 to-orange-600","from-pink-600 to-rose-700","from-indigo-600 to-purple-700","from-teal-600 to-cyan-700","from-red-600 to-pink-700"];let o=0;for(let r=0;r<t.length;r++)o=t.charCodeAt(r)+((o<<5)-o);return s[Math.abs(o)%s.length]}function fn({name:t,size:s=40}){const o=t.slice(0,2).toUpperCase(),r=bn(t);return e.jsx("div",{className:`bg-gradient-to-br ${r} rounded-xl flex items-center justify-center shrink-0 font-bold text-white`,style:{width:s,height:s,fontSize:s*.35},children:o})}function vn({project:t,onOpen:s,onDelete:o,onDuplicate:r,onDownload:n,expanded:c,onToggle:p}){const h=on(t.files),m=sn(t.updatedAt);return e.jsxs("div",{className:"border-b border-gray-800/40 last:border-0",children:[e.jsxs("button",{onClick:p,className:`w-full flex items-center gap-3 px-4 py-3.5 transition-colors ${c?"bg-[#1c2714]":"hover:bg-white/[0.03] active:bg-white/[0.06]"}`,children:[e.jsx("div",{className:`transition-transform duration-200 shrink-0 ${c?"rotate-90":""}`,children:e.jsx(Rt,{size:14,className:"text-gray-600"})}),e.jsx(fn,{name:t.name,size:40}),e.jsxs("div",{className:"flex-1 min-w-0 text-left",children:[e.jsx("p",{className:"text-sm font-semibold text-gray-100 truncate",children:t.name}),e.jsxs("p",{className:"text-[11px] text-gray-500 mt-0.5",children:[m," · ",h.count," arquivo",h.count!==1?"s":""]})]}),e.jsx("span",{className:"text-[10px] text-gray-700 shrink-0 mr-1",children:c?"fechar":"abrir"})]}),c&&e.jsxs("div",{className:"bg-[#141c0d] border-t border-gray-800/40 divide-y divide-gray-800/30",children:[e.jsxs("button",{onClick:s,className:"w-full flex items-center gap-4 px-6 py-3.5 hover:bg-white/[0.04] active:bg-white/[0.08] text-left transition-colors",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0",children:e.jsx(ea,{size:15,className:"text-blue-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:"Abrir Projeto"}),e.jsx("p",{className:"text-[11px] text-gray-600",children:"Entrar no editor"})]})]}),e.jsxs("button",{onClick:()=>{r(),p()},className:"w-full flex items-center gap-4 px-6 py-3.5 hover:bg-white/[0.04] active:bg-white/[0.08] text-left transition-colors",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0",children:e.jsx(Kt,{size:15,className:"text-purple-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:"Duplicar Projeto"}),e.jsx("p",{className:"text-[11px] text-gray-600",children:"Criar uma cópia independente"})]})]}),e.jsxs("button",{onClick:()=>{n()},className:"w-full flex items-center gap-4 px-6 py-3.5 hover:bg-white/[0.04] active:bg-white/[0.08] text-left transition-colors",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0",children:e.jsx(pt,{size:15,className:"text-green-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:"Baixar como ZIP"}),e.jsxs("p",{className:"text-[11px] text-gray-600",children:[h.size," · todos os arquivos"]})]})]}),e.jsxs("button",{onClick:()=>{confirm(`Excluir "${t.name}" permanentemente?`)&&o()},className:"w-full flex items-center gap-4 px-6 py-3.5 hover:bg-red-500/5 active:bg-red-500/10 text-left transition-colors",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0",children:e.jsx(dt,{size:15,className:"text-red-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-semibold text-red-400",children:"Excluir Projeto"}),e.jsx("p",{className:"text-[11px] text-red-900",children:"Esta ação não pode ser desfeita"})]})]})]})]})}const yn={globe:e.jsx(gt,{size:22,className:"text-blue-400"}),component:e.jsx(Io,{size:22,className:"text-cyan-400"}),server:e.jsx(Oo,{size:22,className:"text-green-400"}),code:e.jsx(As,{size:22,className:"text-yellow-400"}),"file-type":e.jsx(mr,{size:22,className:"text-blue-400"}),"folder-plus":e.jsx(Ta,{size:22,className:"text-gray-400"})},jn=["App de tarefas com React e localStorage","API REST com Express, JWT e PostgreSQL","Landing page moderna com animações CSS","Bot de Telegram com Node.js","Dashboard com gráficos e tabelas","CRUD completo com Flask e SQLite","Jogo Snake em JavaScript puro","Portfolio pessoal responsivo"];function Nn({projects:t,onSelect:s,onOpenProject:o,onImportZip:r,onCreateFromAI:n,onDeleteProject:c,onDuplicateProject:p,onOpenCampoLivre:h,onOpenAssistenteJuridico:m}){const[j,f]=a.useState("tudo"),[k,z]=a.useState(""),[U,K]=a.useState(null),[C,L]=a.useState(!1),[V,I]=a.useState(!1),[ee,$]=a.useState(""),[D,N]=a.useState(!1),[i,v]=a.useState(""),[S,G]=a.useState(""),[J,Y]=a.useState(!1),[X,te]=a.useState(""),[re,Q]=a.useState(!1),[T,ne]=a.useState(null),y=Date.now(),u=10080*60*1e3,R=t.filter(q=>q.name.toLowerCase().includes(k.toLowerCase())).filter(q=>j==="recente"?y-q.updatedAt<u:!0).sort((q,x)=>x.updatedAt-q.updatedAt),b=a.useCallback(async()=>{const q=ee.trim();if(!q||D)return;const x=Ja(Wa());if(!x){v("Configure uma chave de IA ao abrir um projeto → painel IA → Configurações.");return}N(!0),v(""),G("Analisando projeto...");try{G("Gerando arquivos com IA...");const E=await es([{role:"user",content:`Crie um projeto completo: ${q}`}],x,"Crie um projeto COMPLETO. Formato obrigatório para cada arquivo:\n```filepath:caminho/arquivo.ext\nconteúdo\n```\nGere todos os arquivos necessários. Responda APENAS com os blocos de arquivo.");G("Aplicando arquivos...");const F=Ds(E),H={};for(const M of F)M.type==="file"&&M.filePath&&M.content&&(H[M.filePath]=M.content);if(Object.keys(H).length===0){v("Nenhum arquivo gerado. Tente ser mais específico.");return}n?.(H,q.length>40?q.slice(0,40)+"...":q)}catch(E){v(`Erro: ${E.message}`)}finally{N(!1),G("")}},[ee,D,n]),d=a.useCallback(async q=>{await Aa(q.files,q.name.replace(/\s+/g,"-").toLowerCase())},[]),w=a.useCallback(async()=>{const q=X.trim().replace(/\.git$/,"").replace(/\/$/,""),x=q.match(/github\.com[/:]([^/]+)\/([^/]+)/),E=q.split("/").filter(Boolean),F=x?{owner:x[1],repo:x[2]}:E.length===2?{owner:E[0],repo:E[1]}:null;if(!F){ne({msg:"URL inválida. Use: github.com/usuario/repositorio"});return}Q(!0),ne({msg:`Baixando ${F.owner}/${F.repo}...`});try{const M=await Da({token:"",username:""},F.owner,F.repo);if(Object.keys(M).length===0)throw new Error("Repositório não encontrado ou privado.");ne({msg:`✓ ${Object.keys(M).length} arquivos importados de "${F.repo}"`,ok:!0}),setTimeout(()=>{Y(!1),te(""),ne(null),n?.(M,F.repo)},1200)}catch(H){ne({msg:`Erro: ${H.message}`})}finally{Q(!1)}},[X,n]),se=[{icon:e.jsx(ha,{size:26,className:"text-gray-300"}),label:"Criar projeto vazio",desc:"Comece com um projeto vazio sem modelos.",action:()=>s(zs[0])},{icon:e.jsx(Pt,{size:26,className:"text-green-400"}),label:"Clonar Repositório Público",desc:"Baixar qualquer repositório público do GitHub sem token.",action:()=>Y(!0)},{icon:e.jsx(Io,{size:26,className:"text-cyan-400"}),label:"Criar a partir de Modelo",desc:"Escolha entre vários modelos de projeto.",action:()=>I(!0)},{icon:e.jsx(It,{size:26,className:"text-purple-400"}),label:"Criar com IA",desc:"Descreva seu projeto e deixe a IA gerar os arquivos.",action:()=>L(!0)},{icon:e.jsx(_t,{size:26,className:"text-yellow-400"}),label:"Importar do ZIP",desc:"Importar um projeto de um arquivo ZIP.",action:r}];return e.jsxs("div",{className:"h-screen bg-[#141c0d] flex flex-col text-white overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 pt-safe-top pt-4 pb-3 border-b border-gray-800/60 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center",children:e.jsx(As,{size:16,className:"text-white"})}),e.jsx("h1",{className:"text-lg font-bold text-white",children:"Projetos"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[m&&e.jsxs("button",{onClick:m,className:"flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-800/20 border border-amber-600/30 text-amber-400 text-[11px] font-medium hover:bg-amber-800/30 transition-all",title:"Assistente Jurídico — Jamile",children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),"Jurídico"]}),h&&e.jsxs("button",{onClick:h,className:"flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-green-700/20 border border-green-600/30 text-green-400 text-[11px] font-medium hover:bg-green-700/30 transition-all",title:"Abrir Campo Livre — chat sem restrições",children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"Campo Livre"]}),e.jsx("button",{className:"p-2 rounded-full hover:bg-white/5 text-gray-500",children:e.jsx(za,{size:18})})]})]}),e.jsx("div",{className:"px-4 py-2.5 border-b border-gray-800/40 shrink-0",children:e.jsxs("div",{className:"relative",children:[e.jsx(ga,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"}),e.jsx("input",{value:k,onChange:q=>z(q.target.value),placeholder:"Procurar Nome do Projeto",className:"w-full pl-9 pr-4 py-2.5 bg-[#1c2714] border border-gray-700/30 rounded-xl text-sm text-gray-300 placeholder-gray-600 outline-none focus:border-blue-500/40"})]})}),e.jsx("div",{className:"flex gap-0 px-4 border-b border-gray-800/40 shrink-0",children:[{id:"tudo",label:"TUDO"},{id:"recente",label:"RECENTE"},{id:"criar",label:"CRIAR"}].map(({id:q,label:x})=>e.jsx("button",{onClick:()=>f(q),className:`px-4 py-3 text-xs font-bold tracking-wider transition-all border-b-2 ${j===q?"border-blue-500 text-blue-400":"border-transparent text-gray-600 hover:text-gray-400"}`,children:x},q))}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[(j==="tudo"||j==="recente")&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-3 pt-3 pb-2 grid grid-cols-2 gap-2 border-b border-gray-800/40",children:[e.jsxs("button",{onClick:r,className:"flex items-center gap-3 px-4 py-3 rounded-2xl bg-yellow-500/10 border border-yellow-600/30 hover:bg-yellow-500/20 active:scale-95 transition-all text-left",children:[e.jsx(_t,{size:20,className:"text-yellow-400 shrink-0"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-bold text-yellow-300",children:"Importar ZIP"}),e.jsx("p",{className:"text-[10px] text-gray-500",children:"Abrir arquivo .zip"})]})]}),e.jsxs("button",{onClick:()=>f("criar"),className:"flex items-center gap-3 px-4 py-3 rounded-2xl bg-green-500/10 border border-green-600/30 hover:bg-green-500/20 active:scale-95 transition-all text-left",children:[e.jsx(ha,{size:20,className:"text-green-400 shrink-0"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-bold text-green-300",children:"Novo Projeto"}),e.jsx("p",{className:"text-[10px] text-gray-500",children:"Criar ou clonar"})]})]})]}),R.length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-16 text-center px-8",children:[e.jsx(ea,{size:40,className:"text-gray-700 mb-4"}),e.jsx("p",{className:"text-base font-medium text-gray-500",children:k?"Nenhum projeto encontrado":j==="recente"?"Sem projetos recentes":"Nenhum projeto ainda"}),e.jsx("p",{className:"text-sm text-gray-700 mt-1",children:!k&&"Importe um ZIP ou crie um novo projeto acima"}),!k&&e.jsx("button",{onClick:()=>f("criar"),className:"mt-6 px-6 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-500",children:"Criar Projeto"})]}):e.jsx("div",{children:R.map(q=>e.jsx(vn,{project:q,expanded:U===q.id,onToggle:()=>K(U===q.id?null:q.id),onOpen:()=>o(q),onDelete:()=>{c(q.id),K(null)},onDuplicate:()=>{p(q),K(null)},onDownload:()=>d(q)},q.id))})]}),j==="criar"&&e.jsx("div",{className:"divide-y divide-gray-800/30",children:se.map(({icon:q,label:x,desc:E,action:F})=>e.jsxs("button",{onClick:F,className:"w-full flex items-center gap-4 px-5 py-5 hover:bg-white/4 active:bg-white/8 text-left transition-colors",children:[e.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/5 border border-gray-700/30 flex items-center justify-center shrink-0",children:q}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[15px] font-semibold text-gray-100",children:x}),e.jsx("p",{className:"text-[13px] text-gray-500 mt-0.5 leading-relaxed",children:E})]}),e.jsx(Rt,{size:18,className:"text-gray-700 shrink-0"})]},x))})]}),(j==="tudo"||j==="recente")&&R.length>0&&e.jsx("div",{className:"px-4 py-2 border-t border-gray-800/30 shrink-0 text-center",children:e.jsxs("p",{className:"text-[10px] text-gray-700",children:[R.length," projeto(s) · Salvo localmente"]})}),V&&e.jsx("div",{className:"fixed inset-0 z-50 bg-black/70 flex items-end",onClick:()=>I(!1),children:e.jsxs("div",{className:"w-full bg-[#1c2714] border-t border-gray-700/50 rounded-t-3xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col",onClick:q=>q.stopPropagation(),children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-gray-700/40 shrink-0",children:[e.jsx("h2",{className:"text-base font-bold text-white",children:"Modelos de Projeto"}),e.jsx("button",{onClick:()=>I(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:18})})]}),e.jsx("div",{className:"overflow-y-auto divide-y divide-gray-800/40 pb-safe-bottom pb-6",children:zs.map(q=>e.jsxs("button",{onClick:()=>{s(q),I(!1)},className:"w-full flex items-center gap-4 px-5 py-4 hover:bg-white/5 text-left transition-colors",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/5 border border-gray-700/30 flex items-center justify-center shrink-0",children:yn[q.icon]||e.jsx(As,{size:18})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-semibold text-gray-200",children:q.name}),e.jsx("p",{className:"text-[12px] text-gray-500 mt-0.5",children:q.description})]}),e.jsx(Rt,{size:16,className:"text-gray-700 shrink-0"})]},q.id))})]})}),J&&e.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 flex items-end",onClick:()=>{re||(Y(!1),te(""),ne(null))},children:e.jsxs("div",{className:"w-full bg-[#1c2714] border-t border-green-500/30 rounded-t-3xl overflow-hidden shadow-2xl",onClick:q=>q.stopPropagation(),children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-gray-700/40",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Pt,{size:16,className:"text-green-400"}),e.jsx("h2",{className:"text-base font-bold text-white",children:"Clonar Repositório Público"})]}),!re&&e.jsx("button",{onClick:()=>{Y(!1),te(""),ne(null)},className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:18})})]}),e.jsxs("div",{className:"p-5 pb-safe-bottom space-y-4",children:[e.jsx("p",{className:"text-[12px] text-gray-500 leading-relaxed",children:"Cole o link de qualquer repositório público do GitHub. Nenhum token necessário."}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Link do Repositório"}),e.jsx("input",{autoFocus:!0,value:X,onChange:q=>{te(q.target.value),ne(null)},onKeyDown:q=>q.key==="Enter"&&!re&&w(),placeholder:"github.com/usuario/repositorio",className:"w-full px-3 py-3 bg-[#141c0d] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-green-500/50",disabled:re})]}),T&&e.jsxs("div",{className:`px-3 py-2.5 rounded-xl border text-[12px] flex items-start gap-2 ${T.ok?"bg-green-500/10 border-green-500/20 text-green-400":"bg-red-500/10 border-red-500/20 text-red-400"}`,children:[T.ok?e.jsx(St,{size:13,className:"shrink-0 mt-0.5"}):e.jsx(Tt,{size:13,className:"shrink-0 mt-0.5"}),e.jsx("span",{className:"leading-relaxed",children:T.msg})]}),e.jsxs("button",{onClick:w,disabled:!X.trim()||re,className:"w-full flex items-center justify-center gap-2 py-3.5 bg-green-600 disabled:opacity-40 text-white rounded-2xl font-bold text-[15px] hover:bg-green-500 transition-colors",children:[re?e.jsx(qe,{size:16,className:"animate-spin"}):e.jsx(pt,{size:16}),re?"Baixando...":"Baixar Repositório"]}),e.jsx("p",{className:"text-[11px] text-gray-700 text-center",children:"Funciona apenas com repositórios públicos · Seu token não é necessário"})]})]})}),C&&e.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 flex items-end",onClick:()=>{D||L(!1)},children:e.jsxs("div",{className:"w-full bg-[#1c2714] border-t border-purple-500/30 rounded-t-3xl overflow-hidden shadow-2xl",onClick:q=>q.stopPropagation(),children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-gray-700/40",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(It,{size:16,className:"text-purple-400"}),e.jsx("h2",{className:"text-base font-bold text-white",children:"Criar com IA"})]}),!D&&e.jsx("button",{onClick:()=>{L(!1),v(""),$("")},className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:18})})]}),e.jsx("div",{className:"p-5 pb-safe-bottom",children:D?e.jsxs("div",{className:"text-center py-10",children:[e.jsxs("div",{className:"w-14 h-14 mx-auto mb-4 relative",children:[e.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-purple-500/20"}),e.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 animate-spin"}),e.jsx(It,{size:22,className:"absolute inset-0 m-auto text-purple-400"})]}),e.jsx("p",{className:"text-sm font-medium text-gray-300",children:S}),e.jsx("p",{className:"text-[11px] text-gray-600 mt-1",children:"15–30 segundos..."})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-xs text-gray-500 mb-3",children:"Descreva o projeto que a IA vai criar:"}),e.jsx("textarea",{autoFocus:!0,value:ee,onChange:q=>{$(q.target.value),v("")},onKeyDown:q=>{q.key==="Enter"&&(q.metaKey||q.ctrlKey)&&b()},placeholder:"Ex: API com Express, JWT e banco PostgreSQL...",rows:3,className:"w-full px-4 py-3 bg-[#141c0d] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-600 outline-none focus:border-purple-500/50 resize-none mb-3"}),i&&e.jsx("div",{className:"mb-3 px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-400",children:i}),e.jsxs("button",{onClick:b,disabled:!ee.trim(),className:"w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 disabled:opacity-40 text-white rounded-2xl font-semibold text-[15px] hover:opacity-90 mb-5",children:[e.jsx(It,{size:16})," Gerar Projeto Completo"]}),e.jsx("p",{className:"text-[11px] text-gray-600 mb-2.5 uppercase tracking-wider font-semibold",children:"Exemplos"}),e.jsx("div",{className:"space-y-1.5 max-h-40 overflow-y-auto",children:jn.map(q=>e.jsx("button",{onClick:()=>$(q),className:"w-full text-left px-3.5 py-2.5 bg-gray-800/40 hover:bg-gray-700/50 rounded-xl text-[12px] text-gray-400 hover:text-gray-300 border border-gray-700/20",children:q},q))})]})})]})})]})}const wn="modulepreload",En=function(t,s){return new URL(t,s).href},jo={},kn=function(s,o,r){let n=Promise.resolve();if(o&&o.length>0){let j=function(f){return Promise.all(f.map(k=>Promise.resolve(k).then(z=>({status:"fulfilled",value:z}),z=>({status:"rejected",reason:z}))))};const p=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),m=h?.nonce||h?.getAttribute("nonce");n=j(o.map(f=>{if(f=En(f,r),f in jo)return;jo[f]=!0;const k=f.endsWith(".css"),z=k?'[rel="stylesheet"]':"";if(r)for(let K=p.length-1;K>=0;K--){const C=p[K];if(C.href===f&&(!k||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${z}`))return;const U=document.createElement("link");if(U.rel=k?"stylesheet":wn,k||(U.as="script"),U.crossOrigin="",U.href=f,m&&U.setAttribute("nonce",m),document.head.appendChild(U),k)return new Promise((K,C)=>{U.addEventListener("load",K),U.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${f}`)))})}))}function c(p){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=p,window.dispatchEvent(h),!h.defaultPrevented)throw p}return n.then(p=>{for(const h of p||[])h.status==="rejected"&&c(h.reason);return s().catch(c)})};function Zo(t){const s=t.split(".").pop()?.toLowerCase()||"";return{js:"text-yellow-400",jsx:"text-yellow-400",ts:"text-blue-400",tsx:"text-blue-400",html:"text-orange-400",css:"text-purple-400",scss:"text-pink-400",json:"text-green-400",md:"text-gray-400",py:"text-green-500",rb:"text-red-400",go:"text-cyan-400",rs:"text-orange-500",java:"text-red-500",svg:"text-emerald-400",png:"text-emerald-400",jpg:"text-emerald-400",yaml:"text-red-300",yml:"text-red-300",sh:"text-green-300",sql:"text-blue-300",graphql:"text-pink-500",env:"text-yellow-500",toml:"text-gray-500"}[s]||"text-gray-400"}function _s({info:t,onClose:s,onRename:o,onDelete:r,onDownload:n,onDownloadZip:c,onCopyPath:p,onDuplicate:h,onCreateFile:m,onCreateFolder:j,onAnalyzeWithAI:f,extraItems:k}){const z=[...t.isDir?[{icon:e.jsx(ha,{size:18,className:"text-blue-400"}),label:"Novo Arquivo",action:m},{icon:e.jsx(Ta,{size:18,className:"text-blue-400"}),label:"Nova Pasta",action:j}]:[],...f?[{icon:e.jsx(mt,{size:18,className:"text-purple-400"}),label:t.isDir?"Analisar pasta com IA":"Analisar arquivo com IA",action:f}]:[],...t.isDir?[{icon:e.jsx(xr,{size:18,className:"text-green-400"}),label:"Exportar como ZIP",action:c}]:[{icon:e.jsx(pt,{size:18,className:"text-green-400"}),label:"Baixar Arquivo",action:n},{icon:e.jsx(Kt,{size:18,className:"text-purple-400"}),label:"Duplicar",action:h}],{icon:e.jsx(Kt,{size:18,className:"text-gray-400"}),label:"Copiar Caminho",action:p},...k||[],...t.isRoot?[]:[{icon:e.jsx(gr,{size:18,className:"text-yellow-400"}),label:"Renomear",action:o}],...t.isRoot?[]:[{icon:e.jsx(dt,{size:18,className:"text-red-400"}),label:"Excluir",action:r,destructive:!0}]];return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990]",onClick:s}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:U=>U.stopPropagation(),children:e.jsxs("div",{className:"bg-[#222e18] border-t border-gray-700/50 rounded-t-3xl shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"px-5 py-2 flex items-center justify-between border-b border-gray-700/30",children:[e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[t.isDir?e.jsx(ea,{size:14,className:"text-amber-400 shrink-0"}):e.jsx(Lo,{size:14,className:`shrink-0 ${Zo(t.label)}`}),e.jsx("p",{className:"text-sm font-semibold text-gray-200 truncate",children:t.label})]}),e.jsx("button",{onClick:s,className:"p-1 rounded-lg hover:bg-white/10 text-gray-600 shrink-0",children:e.jsx(ye,{size:16})})]}),e.jsx("div",{className:"pb-8 divide-y divide-gray-800/30 max-h-[75vh] overflow-y-auto",children:z.map(({icon:U,label:K,action:C,destructive:L})=>e.jsxs("button",{onClick:()=>{C(),s()},className:`w-full flex items-center gap-4 px-5 py-3.5 hover:bg-white/4 text-left transition-colors ${L?"text-red-400":"text-gray-200"}`,children:[U,e.jsx("span",{className:"text-[15px]",children:K})]},K))})]})})]})}function er({node:t,depth:s,activeFile:o,onFileSelect:r,onCreateFile:n,onCreateFolder:c,onDeleteNode:p,onRenameNode:h,onDuplicateNode:m,getFileContent:j,getAllFilesUnder:f,expandedDirs:k,toggleDir:z,onAnalyzeWithAI:U}){const[K,C]=a.useState(!1),L=a.useCallback(()=>{const i=j(t.path);if(i===void 0)return;const v=new Blob([i],{type:"text/plain;charset=utf-8"});xa.saveAs(v,t.name)},[t,j]),V=a.useCallback(async()=>{const i=f(t.path),v=new qa;for(const G of i){const J=G.path.startsWith(t.path+"/")?G.path.slice(t.path.length+1):G.path;J&&!J.endsWith(".gitkeep")&&v.file(J,G.content)}const S=await v.generateAsync({type:"blob"});xa.saveAs(S,`${t.name}.zip`)},[t,f]),I=a.useCallback(()=>{navigator.clipboard.writeText(t.path).catch(()=>{})},[t]),ee=a.useCallback(()=>{m?.(t.path)},[t,m]);if(jt(t)){const i=k.has(t.path),v=s*14+6;return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-1 py-[5px] hover:bg-white/5 cursor-pointer group select-none",style:{paddingLeft:`${v}px`,paddingRight:"6px"},onClick:()=>z(t.path),children:[i?e.jsx(ba,{size:13,className:"text-gray-600 shrink-0"}):e.jsx(Rt,{size:13,className:"text-gray-600 shrink-0"}),i?e.jsx(ea,{size:13,className:"text-amber-400 shrink-0"}):e.jsx(Fs,{size:13,className:"text-amber-400 shrink-0"}),e.jsx("span",{className:"truncate text-gray-300 flex-1 text-[12px] ml-1",children:t.name}),e.jsx("button",{onClick:S=>{S.stopPropagation(),C(!0)},className:"opacity-40 active:opacity-100 p-1.5 hover:bg-white/10 active:bg-white/15 rounded-lg text-gray-400 shrink-0",children:e.jsx(Ss,{size:13})})]}),K&&e.jsx(_s,{info:{label:t.name,path:t.path,isDir:!0},onClose:()=>C(!1),onRename:()=>h(t.path),onDelete:()=>p(t.path),onDownload:L,onDownloadZip:V,onCopyPath:I,onDuplicate:ee,onCreateFile:()=>n(t.path),onCreateFolder:()=>c(t.path),onAnalyzeWithAI:U?()=>U(t.path,!0):void 0}),i&&t.children.filter(S=>!(!jt(S)&&S.name===".gitkeep")).sort((S,G)=>{const J=jt(S),Y=jt(G);return J!==Y?J?-1:1:S.name.localeCompare(G.name)}).map(S=>e.jsx(er,{node:S,depth:s+1,activeFile:o,onFileSelect:r,onCreateFile:n,onCreateFolder:c,onDeleteNode:p,onRenameNode:h,onDuplicateNode:m,getFileContent:j,getAllFilesUnder:f,expandedDirs:k,toggleDir:z,onAnalyzeWithAI:U},S.path))]})}const $=t;if($.name===".gitkeep")return null;const D=$.path===o,N=s*14+20;return e.jsxs("div",{className:`flex items-center gap-1.5 py-[5px] cursor-pointer group select-none ${D?"bg-blue-500/15 border-l-2 border-blue-500":"hover:bg-white/5"}`,style:{paddingLeft:`${N}px`,paddingRight:"6px"},onClick:()=>r($.path),children:[e.jsx(Lo,{size:12,className:`shrink-0 ${D?"text-blue-400":Zo($.name)}`}),e.jsx("span",{className:`truncate flex-1 text-[12px] ${D?"text-white":"text-gray-400"}`,children:$.name}),e.jsx("button",{onClick:i=>{i.stopPropagation(),C(!0)},className:"opacity-40 active:opacity-100 p-1.5 hover:bg-white/10 active:bg-white/15 rounded-lg text-gray-400 shrink-0",children:e.jsx(Ss,{size:13})}),K&&e.jsx(_s,{info:{label:$.name,path:$.path,isDir:!1},onClose:()=>C(!1),onRename:()=>h($.path),onDelete:()=>p($.path),onDownload:L,onDownloadZip:V,onCopyPath:I,onDuplicate:ee,onCreateFile:()=>{},onCreateFolder:()=>{},onAnalyzeWithAI:U?()=>U($.path,!1):void 0})]})}function Cn({tree:t,activeFile:s,onFileSelect:o,onCreateFile:r,onCreateFolder:n,onDeleteNode:c,onRenameNode:p,onDuplicateNode:h,getFileContent:m,getAllFilesUnder:j,expandedDirs:f,toggleDir:k,projectName:z="Projeto",onExportZip:U,onAnalyzeWithAI:K,extraRootItems:C}){const L="__root__",V=f.has(L),[I,ee]=a.useState(!1),$=a.useCallback(async()=>{if(U){U();return}const i=j(""),v=new qa;for(const G of i)G.path.endsWith(".gitkeep")||v.file(G.path,G.content);const S=await v.generateAsync({type:"blob"});xa.saveAs(S,`${z.replace(/\s+/g,"-").toLowerCase()}.zip`)},[U,j,z]),D=a.useCallback(()=>{navigator.clipboard.writeText("/").catch(()=>{})},[]),N=t.children.filter(i=>!(!jt(i)&&i.name===".gitkeep")).length===0;return e.jsx("div",{className:"py-1 select-none overflow-y-auto h-full",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-[6px] hover:bg-white/5 cursor-pointer group select-none border-b border-gray-700/20",onClick:()=>k(L),children:[V?e.jsx(ba,{size:13,className:"text-gray-500 shrink-0"}):e.jsx(Rt,{size:13,className:"text-gray-500 shrink-0"}),V?e.jsx(ea,{size:13,className:"text-amber-400 shrink-0"}):e.jsx(Fs,{size:13,className:"text-amber-400 shrink-0"}),e.jsx("span",{className:"truncate text-gray-200 flex-1 text-[12px] font-semibold ml-0.5",children:z}),e.jsx("button",{onClick:i=>{i.stopPropagation(),ee(!0)},className:"opacity-40 active:opacity-100 p-1.5 hover:bg-white/10 active:bg-white/15 rounded-lg text-gray-400 shrink-0",children:e.jsx(Ss,{size:13})})]}),I&&e.jsx(_s,{info:{label:z,path:"/",isDir:!0,isRoot:!0},onClose:()=>ee(!1),onRename:()=>{},onDelete:()=>{},onDownload:()=>{},onDownloadZip:$,onCopyPath:D,onDuplicate:()=>{},onCreateFile:()=>r(""),onCreateFolder:()=>n(""),onAnalyzeWithAI:K?()=>K("/",!0):void 0,extraItems:C}),V&&e.jsx("div",{children:N?e.jsxs("div",{className:"px-6 py-5 text-center",children:[e.jsx("p",{className:"text-[11px] text-gray-600",children:"Nenhum arquivo ainda"}),e.jsxs("div",{className:"flex gap-2 justify-center mt-3",children:[e.jsxs("button",{onClick:()=>r(""),className:"flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-gray-700/30 rounded-lg text-[11px] text-gray-400 hover:text-gray-300",children:[e.jsx(ha,{size:12})," Arquivo"]}),e.jsxs("button",{onClick:()=>n(""),className:"flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-gray-700/30 rounded-lg text-[11px] text-gray-400 hover:text-gray-300",children:[e.jsx(Ta,{size:12})," Pasta"]})]})]}):t.children.filter(i=>!(!jt(i)&&i.name===".gitkeep")).sort((i,v)=>{const S=jt(i),G=jt(v);return S!==G?S?-1:1:i.name.localeCompare(v.name)}).map(i=>e.jsx(er,{node:i,depth:1,activeFile:s,onFileSelect:o,onCreateFile:r,onCreateFolder:n,onDeleteNode:c,onRenameNode:p,onDuplicateNode:h,getFileContent:m,getAllFilesUnder:j,expandedDirs:f,toggleDir:k,onAnalyzeWithAI:K},i.path))})]})})}const An={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"d4d8c8",background:"161e0f"},{token:"comment",foreground:"5a7a45",fontStyle:"italic"},{token:"keyword",foreground:"8fc87c"},{token:"string",foreground:"c9d982"},{token:"number",foreground:"e0c97a"},{token:"type",foreground:"7dbda8"},{token:"function",foreground:"b8d4a0"},{token:"variable",foreground:"cdd6b8"},{token:"constant",foreground:"e9b96e"},{token:"tag",foreground:"8fc87c"},{token:"attribute.name",foreground:"c9d982"},{token:"attribute.value",foreground:"d4a56a"},{token:"delimiter",foreground:"8aab7a"},{token:"operator",foreground:"9dbf82"}],colors:{"editor.background":"#161e0f","editor.foreground":"#d4d8c8","editor.lineHighlightBackground":"#1e2a14","editor.selectionBackground":"#3a5228","editor.selectionHighlightBackground":"#2a3c1e","editor.findMatchBackground":"#5a7a3080","editor.findMatchHighlightBackground":"#3a5a2040","editorLineNumber.foreground":"#3a5228","editorLineNumber.activeForeground":"#6a9a50","editorCursor.foreground":"#8fc87c","editorWhitespace.foreground":"#2a3a1c","editorIndentGuide.background":"#1e2a14","editorIndentGuide.activeBackground":"#2d3e20","editorBracketMatch.background":"#3a5228","editorBracketMatch.border":"#6a9a50","editorGutter.background":"#141c0d","editorWidget.background":"#1c2714","editorWidget.border":"#2d3e20","editorSuggestWidget.background":"#1c2714","editorSuggestWidget.border":"#2d3e20","editorSuggestWidget.selectedBackground":"#263618","editorSuggestWidget.highlightForeground":"#8fc87c","scrollbarSlider.background":"#2d3e2060","scrollbarSlider.hoverBackground":"#3a5228a0","scrollbarSlider.activeBackground":"#4a6a38c0","list.hoverBackground":"#1e2a14","list.activeSelectionBackground":"#263618"}},tr=a.forwardRef(({filePath:t,content:s,onChange:o,language:r,onCursorChange:n},c)=>{const p=a.useRef(null),h=r||Js(t);a.useImperativeHandle(c,()=>({undo:()=>p.current?.trigger("keyboard","undo",null),redo:()=>p.current?.trigger("keyboard","redo",null),format:()=>p.current?.getAction("editor.action.formatDocument")?.run(),getLanguage:()=>h,insertText:f=>{const k=p.current;if(!k)return;const z=k.getSelection();z&&k.executeEdits("insert",[{range:z,text:f,forceMoveMarkers:!0}])},moveCursor:f=>{const k=p.current;if(!k)return;const z={up:"cursorUp",down:"cursorDown",left:"cursorLeft",right:"cursorRight"};k.trigger("keyboard",z[f],null)}}));const m=a.useCallback(f=>{f.editor.defineTheme("olive-dark",An)},[]),j=a.useCallback(f=>{p.current=f,f.focus(),f.onDidChangeCursorPosition(k=>{n?.(k.position.lineNumber,k.position.column)})},[n]);return e.jsx("div",{className:"h-full w-full",children:e.jsx(zr,{height:"100%",language:h,value:s,theme:"olive-dark",beforeMount:m,onChange:f=>o(f||""),onMount:j,options:{fontSize:13,fontFamily:"'JetBrains Mono','Fira Code','Cascadia Code',monospace",minimap:{enabled:!1},wordWrap:"on",lineNumbers:"on",renderLineHighlight:"all",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,padding:{top:8,bottom:8},suggestOnTriggerCharacters:!0,quickSuggestions:!0,bracketPairColorization:{enabled:!0},guides:{bracketPairs:!0,indentation:!0},smoothScrolling:!0,cursorBlinking:"smooth",cursorSmoothCaretAnimation:"on",formatOnPaste:!0,formatOnType:!1,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always",overviewRulerBorder:!1,hideCursorInOverviewRuler:!0,scrollbar:{verticalScrollbarSize:4,horizontalScrollbarSize:4}}})})});tr.displayName="CodeEditor";const No=`
╔══════════════════════════════════════╗
║      GUIA: DOWNLOAD YOUTUBE/MEDIA    ║
╚══════════════════════════════════════╝

Para baixar videos/audio do YouTube no Node.js:

📦 Instalar dependencia:
   npm install ytdl-core

📄 Criar download.js:
   const ytdl = require('ytdl-core');
   const fs = require('fs');

   const url = 'https://www.youtube.com/watch?v=SEU_VIDEO_ID';

   // Baixar audio (MP3):
   ytdl(url, { quality: 'lowestaudio' })
     .pipe(fs.createWriteStream('audio.mp4'));

   // Baixar video (MP4):
   ytdl(url, { quality: 'highest' })
     .pipe(fs.createWriteStream('video.mp4'));

   // Obter informacoes do video:
   ytdl.getInfo(url).then(info => {
     console.log('Titulo:', info.videoDetails.title);
     console.log('Duracao:', info.videoDetails.lengthSeconds + 's');
     console.log('Autor:', info.videoDetails.author.name);
   });

🎵 Para converter para MP3 (com fluent-ffmpeg):
   npm install fluent-ffmpeg ytdl-core
   const ffmpeg = require('fluent-ffmpeg');
   const ytdl = require('ytdl-core');

   ffmpeg(ytdl(url, { quality: 'lowestaudio' }))
     .audioBitrate(128)
     .save('audio.mp3')
     .on('end', () => console.log('MP3 salvo!'));

📊 Para analisar conteudo (transcricao):
   Use a API do YouTube Data:
   npm install googleapis
   ou: pip install youtube-transcript-api (Python)

🌐 Alternativas online (sem backend):
   - yt-dlp (Python): pip install yt-dlp
   - youtube-dl: mais antigo

💡 Use "youtube setup" para criar o projeto completo automaticamente!
`,Sn=`
╔══════════════════════════════════════╗
║         GUIA DE BANCO DE DADOS       ║
╚══════════════════════════════════════╝

Para usar banco de dados no seu projeto:

📦 SQLite (mais simples - no arquivo):
   npm install better-sqlite3
   Crie db.js:
   \`\`\`
   const db = require('better-sqlite3')('app.db');
   db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');
   const insert = db.prepare('INSERT INTO users (name) VALUES (?)');
   insert.run('Joao');
   const rows = db.prepare('SELECT * FROM users').all();
   console.log(rows);
   \`\`\`

🐘 PostgreSQL:
   npm install pg
   Crie db.js:
   \`\`\`
   const { Pool } = require('pg');
   const pool = new Pool({ connectionString: process.env.DATABASE_URL });
   const res = await pool.query('SELECT NOW()');
   \`\`\`

🍃 MongoDB:
   npm install mongoose
   \`\`\`
   const mongoose = require('mongoose');
   await mongoose.connect(process.env.MONGODB_URI);
   \`\`\`

🔥 Firebase Firestore:
   npm install firebase
   \`\`\`
   import { initializeApp } from 'firebase/app';
   import { getFirestore, collection, addDoc } from 'firebase/firestore';
   \`\`\`

☁️ Neon (PostgreSQL na nuvem - gratuito):
   1. Crie conta em: console.neon.tech
   2. Crie um banco de dados
   3. Copie a connection string (DATABASE_URL)
   4. npm install pg
   5. Use: const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: true })

💡 Use "db <tipo>" para criar template automatico:
   db sqlite | db postgres | db mongo | db firebase | db neon | db supabase
`,Tn={express:{version:"4.21.2",description:"Framework web rapido e minimalista para Node.js"},react:{version:"18.3.1",description:"Biblioteca para construir interfaces de usuario"},"react-dom":{version:"18.3.1",description:"Renderizador DOM para React"},axios:{version:"1.7.9",description:"Cliente HTTP baseado em Promises"},lodash:{version:"4.17.21",description:"Biblioteca utilitaria JavaScript"},moment:{version:"2.30.1",description:"Biblioteca para manipulacao de datas"},cors:{version:"2.8.5",description:"Middleware CORS para Express"},"body-parser":{version:"1.20.3",description:"Middleware para parsear body HTTP"},mongoose:{version:"8.9.5",description:"ODM elegante para MongoDB"},pg:{version:"8.13.1",description:"Cliente PostgreSQL para Node.js"},"better-sqlite3":{version:"11.7.0",description:"API SQLite3 rapida e simples"},dotenv:{version:"16.4.7",description:"Carrega variaveis de ambiente de .env"},jsonwebtoken:{version:"9.0.2",description:"Implementacao de JSON Web Tokens"},bcryptjs:{version:"2.4.3",description:"Biblioteca de hashing de senha"},socket_io:{version:"4.8.1",description:"Comunicacao em tempo real bidirecional"},"socket.io":{version:"4.8.1",description:"Comunicacao em tempo real bidirecional"},nodemon:{version:"3.1.9",description:"Reinicia automaticamente apps Node.js"},webpack:{version:"5.97.1",description:"Empacotador de modulos JavaScript"},babel:{version:"7.26.0",description:"Compilador JavaScript"},typescript:{version:"5.7.3",description:"JavaScript com tipagem estatica"},tailwindcss:{version:"3.4.17",description:"Framework CSS utility-first"},vite:{version:"6.0.7",description:"Ferramenta de build rapida para web"},jest:{version:"29.7.0",description:"Framework de testes JavaScript"},next:{version:"15.1.6",description:"Framework React para producao"},vue:{version:"3.5.13",description:"Framework JavaScript progressivo"},svelte:{version:"5.19.0",description:"Framework UI compilado"},firebase:{version:"11.2.0",description:"SDK Firebase para web"},"chart.js":{version:"4.4.7",description:"Biblioteca de graficos simples e flexivel"},three:{version:"0.171.0",description:"Biblioteca 3D para JavaScript"},d3:{version:"7.9.0",description:"Documentos orientados por dados"},uuid:{version:"11.0.5",description:"Geracao de UUID"},zod:{version:"3.24.1",description:"Validacao de schema TypeScript-first"},"date-fns":{version:"4.1.0",description:"Utilitarios modernos para datas JavaScript"},"ytdl-core":{version:"4.11.5",description:"Downloader de YouTube para Node.js"},"fluent-ffmpeg":{version:"2.1.3",description:"Wrapper do FFmpeg para Node.js"},googleapis:{version:"144.0.0",description:"APIs do Google para Node.js"},sharp:{version:"0.33.5",description:"Processamento de imagens de alta performance"},multer:{version:"2.0.0",description:"Middleware para upload de arquivos"},nodemailer:{version:"6.10.0",description:"Envio de emails com Node.js"},stripe:{version:"17.5.0",description:"SDK do Stripe para pagamentos"},openai:{version:"4.77.0",description:"SDK oficial da OpenAI para Node.js"},"@anthropic-ai/sdk":{version:"0.36.3",description:"SDK da Anthropic para Node.js"},telegraf:{version:"4.16.3",description:"Framework moderno de bots Telegram"},"discord.js":{version:"14.18.0",description:"SDK do Discord para Node.js"},"whatsapp-web.js":{version:"1.26.1",description:"API nao oficial do WhatsApp"},puppeteer:{version:"23.11.1",description:"Automacao de Chrome/Chromium"},cheerio:{version:"1.0.0",description:"Parsing de HTML no servidor"},playwright:{version:"1.49.1",description:"Automacao de browser cross-browser"},sequelize:{version:"6.37.5",description:"ORM multi-banco para Node.js"},typeorm:{version:"0.3.20",description:"ORM TypeScript para Node.js"},prisma:{version:"6.2.1",description:"ORM moderno para Node.js com TypeScript"},"@supabase/supabase-js":{version:"2.47.10",description:"SDK do Supabase para JavaScript"},ioredis:{version:"5.4.2",description:"Cliente Redis robusto para Node.js"},bull:{version:"4.16.5",description:"Fila de jobs com Redis"},passport:{version:"0.7.0",description:"Autenticacao para Node.js"},"express-validator":{version:"7.2.1",description:"Validacao de dados para Express"},helmet:{version:"8.0.0",description:"Seguranca HTTP para Express"},"rate-limiter-flexible":{version:"5.0.4",description:"Rate limiting flexivel"},compression:{version:"1.8.0",description:"Compressao gzip para Express"},morgan:{version:"1.10.0",description:"Logger HTTP para Node.js"},winston:{version:"3.17.0",description:"Logger versatil para Node.js"},pino:{version:"9.6.0",description:"Logger rapido para Node.js"},pm2:{version:"5.4.3",description:"Gerenciador de processos para Node.js"},joi:{version:"17.13.3",description:"Validacao de objetos JavaScript"},yup:{version:"1.6.1",description:"Validacao de schema JavaScript"},luxon:{version:"3.5.0",description:"Biblioteca de datas moderna"},nanoid:{version:"5.1.2",description:"Gerador de IDs pequenos e seguros"},slugify:{version:"1.6.6",description:"Cria slugs de strings"},marked:{version:"15.0.6",description:"Parser de Markdown rapido"},"pdf-lib":{version:"1.17.1",description:"Criacao e modificacao de PDFs"},exceljs:{version:"4.4.0",description:"Criacao de planilhas Excel"},"csv-parser":{version:"3.0.0",description:"Parser de arquivos CSV"},archiver:{version:"7.0.1",description:"Criacao de arquivos ZIP/TAR"},chokidar:{version:"4.0.3",description:"Watcher de sistema de arquivos"},"dotenv-safe":{version:"9.1.0",description:"dotenv com validacao de variaveis obrigatorias"},"cross-env":{version:"7.0.3",description:"Variaveis de ambiente cross-platform"},concurrently:{version:"9.1.2",description:"Executa multiplos comandos simultaneamente"},husky:{version:"9.1.7",description:"Git hooks faceis"},"lint-staged":{version:"15.4.3",description:"Linting em arquivos staged"},eslint:{version:"9.18.0",description:"Linter para JavaScript/TypeScript"},prettier:{version:"3.4.2",description:"Formatador de codigo"},vitest:{version:"3.0.4",description:"Framework de testes rapido para Vite"},supertest:{version:"7.0.0",description:"Testes HTTP para Node.js"},"@testing-library/react":{version:"16.2.0",description:"Testes para componentes React"},cypress:{version:"13.17.0",description:"Testes end-to-end para web"},"react-router-dom":{version:"7.1.5",description:"Roteamento para React"},"react-query":{version:"5.63.0",description:"Gerenciamento de estado servidor para React"},"@tanstack/react-query":{version:"5.63.0",description:"Gerenciamento de estado assíncrono"},zustand:{version:"5.0.3",description:"Gerenciamento de estado minimalista para React"},recoil:{version:"0.7.7",description:"Biblioteca de estado para React"},jotai:{version:"2.11.3",description:"Estado primitivo para React"},"framer-motion":{version:"12.0.6",description:"Biblioteca de animacoes para React"},"react-spring":{version:"9.7.5",description:"Animacoes baseadas em fisica para React"},gsap:{version:"3.12.7",description:"Animacoes JavaScript de alta performance"},p5:{version:"1.11.2",description:"Biblioteca criativa de JavaScript"},konva:{version:"9.3.18",description:"Canvas 2D para JavaScript"},leaflet:{version:"1.9.4",description:"Mapas interativos para web"},"mapbox-gl":{version:"3.9.4",description:"Mapas vetoriais interativos"},"pixi.js":{version:"8.7.4",description:"Renderizador 2D WebGL mais rapido"},"babylon.js":{version:"7.45.0",description:"Motor de jogo 3D para web"}},Rn={flask:{version:"3.1.0",description:"Microframework web para Python"},django:{version:"5.1.5",description:"Framework web de alto nivel para Python"},fastapi:{version:"0.115.6",description:"Framework web moderno e rapido para APIs"},requests:{version:"2.32.3",description:"Biblioteca HTTP elegante para Python"},numpy:{version:"2.2.1",description:"Computacao cientifica com Python"},pandas:{version:"2.2.3",description:"Analise de dados poderosa em Python"},matplotlib:{version:"3.10.0",description:"Biblioteca de visualizacao em Python"},sqlalchemy:{version:"2.0.37",description:"ORM Python SQL"},pydantic:{version:"2.10.5",description:"Validacao de dados para Python"},uvicorn:{version:"0.34.0",description:"Servidor ASGI para Python"},pytest:{version:"8.3.4",description:"Framework de testes para Python"},beautifulsoup4:{version:"4.12.3",description:"Analise de HTML e XML"},scikit_learn:{version:"1.6.1",description:"Machine learning em Python"},pillow:{version:"11.1.0",description:"Biblioteca de imagens para Python"},openai:{version:"1.59.7",description:"SDK oficial da OpenAI para Python"},anthropic:{version:"0.43.0",description:"SDK oficial da Anthropic para Python"},python_dotenv:{version:"1.0.1",description:"Carrega variaveis de .env para Python"},celery:{version:"5.4.0",description:"Fila de tarefas distribuida para Python"},redis:{version:"5.2.1",description:"Cliente Redis para Python"},aiohttp:{version:"3.11.11",description:"Cliente/servidor HTTP async para Python"},httpx:{version:"0.28.1",description:"Cliente HTTP async moderno para Python"},scrapy:{version:"2.12.0",description:"Framework de web scraping para Python"},selenium:{version:"4.27.1",description:"Automacao de browser para Python"},playwright:{version:"1.49.1",description:"Automacao de browser moderna para Python"},boto3:{version:"1.35.94",description:"SDK AWS para Python"},paramiko:{version:"3.5.0",description:"Implementacao SSHv2 para Python"},cryptography:{version:"44.0.0",description:"Biblioteca criptografica para Python"},jwt:{version:"1.3.1",description:"JSON Web Token para Python"},passlib:{version:"1.7.4",description:"Framework de hashing de senha"},alembic:{version:"1.14.1",description:"Migrations para SQLAlchemy"},psycopg2:{version:"2.9.10",description:"Adaptador PostgreSQL para Python"},pymongo:{version:"4.10.1",description:"Driver MongoDB para Python"},motor:{version:"3.7.0",description:"Driver MongoDB async para Python"},tortoise_orm:{version:"0.22.1",description:"ORM async inspirado no Django"},peewee:{version:"3.17.8",description:"ORM simples para Python"},tensorflow:{version:"2.18.0",description:"Machine learning de codigo aberto"},torch:{version:"2.6.0",description:"PyTorch - ML com aceleracao GPU"},transformers:{version:"4.47.1",description:"Modelos de ML prontos da Hugging Face"},langchain:{version:"0.3.14",description:"Framework para apps com LLMs"},yt_dlp:{version:"2025.1.7",description:"Downloader de YouTube e outros sites"},youtube_transcript_api:{version:"0.6.3",description:"Transcricoes de videos do YouTube"},pytube:{version:"15.0.0",description:"Downloader de YouTube para Python"},moviepy:{version:"2.1.1",description:"Edicao de video com Python"},pydub:{version:"0.25.1",description:"Manipulacao de audio simples para Python"},whisper:{version:"1.1.10",description:"Reconhecimento de voz da OpenAI"},gtts:{version:"2.5.4",description:"Texto para voz com Google TTS"},qrcode:{version:"8.0.0",description:"Gerador de QR Code para Python"},reportlab:{version:"4.2.5",description:"Criacao de PDFs para Python"},openpyxl:{version:"3.1.5",description:"Leitura e escrita de Excel em Python"},schedule:{version:"1.2.2",description:"Agendamento de tarefas em Python"},apscheduler:{version:"3.11.0",description:"Scheduler avancado para Python"},click:{version:"8.1.8",description:"Criacao de CLIs elegantes em Python"},typer:{version:"0.15.1",description:"CLIs com Python e type hints"},rich:{version:"13.9.4",description:"Output terminal bonito para Python"},loguru:{version:"0.7.3",description:"Logger simples e poderoso para Python"},python_telegram_bot:{version:"21.10",description:"Framework para bots do Telegram"},discord_py:{version:"2.4.0",description:"API Discord para Python"},tweepy:{version:"4.15.0",description:"SDK Twitter/X para Python"},stripe:{version:"11.4.1",description:"SDK Stripe para Python"},supabase:{version:"2.12.0",description:"SDK Supabase para Python"},firebase_admin:{version:"6.6.0",description:"SDK Firebase Admin para Python"}};function Ha(t){const s=800+Math.random()*1200;return new Promise(o=>setTimeout(o,s))}function Pn({vfs:t,externalCommand:s,onCommandExecuted:o,onServerToggle:r,onGitClone:n,onCommandOutput:c,onBufferUpdate:p}){const[h,m]=a.useState([{type:"info",content:"╔══════════════════════════════════╗"},{type:"info",content:"║   SK Code Editor - Terminal v2.0 ║"},{type:"info",content:"╚══════════════════════════════════╝"},{type:"info",content:'Digite "help" para comandos · "db help" para banco de dados'},{type:"info",content:""}]),[j,f]=a.useState(""),[k,z]=a.useState("/"),[U,K]=a.useState([]),[C,L]=a.useState(-1),[V,I]=a.useState(!1),ee=a.useRef(null),$=a.useRef(null);a.useEffect(()=>{$.current&&($.current.scrollTop=$.current.scrollHeight)},[h]),a.useEffect(()=>{s&&(J(s),o?.())},[s]);const D=a.useRef(p),N=a.useRef(c);a.useEffect(()=>{D.current=p},[p]),a.useEffect(()=>{N.current=c},[c]),a.useEffect(()=>{if(!D.current)return;const X=h.slice(-50),te=X.map(Q=>Q.content).join(`
`),re=X.some(Q=>Q.type==="error");D.current(te,re)},[h]);const i=a.useCallback((X,te)=>{m(re=>[...re,{type:X,content:te}])},[]),v=a.useCallback((X,te)=>{m(re=>[...re,...te.map(Q=>({type:X,content:Q}))])},[]),S=a.useCallback(X=>{if(X.startsWith("/"))return X.replace(/\/+$/,"")||"/";const te=k==="/"?[]:k.split("/").filter(Boolean);for(const re of X.split("/"))re===".."?te.pop():re!=="."&&re!==""&&te.push(re);return"/"+te.join("/")},[k]),G=a.useRef(0),J=a.useCallback(async X=>{const te=X.trim();if(!te)return;K(y=>[te,...y].slice(0,100)),L(-1),i("input",`${k} $ ${te}`),m(y=>(G.current=y.length,y));const re=te.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g)||[],Q=re[0]?.toLowerCase()||"",T=re.slice(1).map(y=>y.replace(/^["']|["']$/g,"")),ne=t.listFiles();if(V&&Q!=="clear"){i("warn","Aguarde... comando em execucao.");return}switch(Q){case"help":{v("info",["","━━━ COMANDOS DE ARQUIVO ━━━","  ls [dir]           Listar arquivos","  cd <dir>           Mudar diretorio","  pwd                Diretorio atual","  cat <arquivo>      Ver conteudo","  touch <arquivo>    Criar arquivo","  mkdir <dir>        Criar diretorio","  rm [-rf] <alvo>    Remover","  mv <orig> <dest>   Mover/renomear","  cp <orig> <dest>   Copiar","  find <padrao>      Buscar arquivos","  tree               Arvore","","━━━ EXECUCAO ━━━","  node <arquivo>     Executar JavaScript","  python <arquivo>   Executar Python","  npm <comando>      Gerenciador npm","  pip install <pkg>  Instalar pacote Python","","━━━ BANCO DE DADOS ━━━","  db help            Guia de banco de dados","  db sqlite          Template SQLite","  db postgres        Template PostgreSQL","  db mongo           Template MongoDB","  db neon            Template Neon (Postgres cloud gratis)","  db supabase        Template Supabase","","━━━ YOUTUBE / MIDIA ━━━","  youtube            Guia de download do YouTube","  youtube setup      Criar projeto completo de download","  yt help            Mesmo que youtube","","━━━ UTILITARIOS ━━━","  search <termo>     Buscar no projeto","  env                Variaveis de ambiente","  clear              Limpar terminal","  date               Data e hora","","💡 100+ pacotes npm · 80+ pacotes pip · Use: npm install <nome>"]);break}case"ls":{const y=T[0]?S(T[0]):k,u=y==="/"?"":y.replace(/^\//,""),R=new Map;for(const d of ne)if(u===""){const w=d.split("/")[0],se=ne.some(q=>q.startsWith(w+"/")&&q!==w);R.set(w,se)}else if(d.startsWith(u+"/")){const se=d.slice(u.length+1).split("/")[0],q=ne.some(x=>x.startsWith(u+"/"+se+"/"));R.set(se,q)}else d===u&&R.set(d.split("/").pop(),!1);if(R.size===0){i("output","(diretorio vazio)");break}const b=Array.from(R.entries()).sort(([d,w],[se,q])=>w!==q?w?-1:1:d.localeCompare(se));for(const[d,w]of b)i("output",w?`📁 ${d}/`:`📄 ${d}`);break}case"cd":{if(!T[0]||T[0]==="~"){z("/");break}const y=S(T[0]);if(y==="/"){z("/");break}const u=y.replace(/^\//,"");ne.some(b=>b.startsWith(u+"/")||b===u)?z(y):i("error",`cd: ${T[0]}: Diretorio nao encontrado`);break}case"pwd":i("output",k);break;case"cat":{if(!T[0]){i("error","cat: falta argumento");break}const y=S(T[0]).replace(/^\//,""),u=t.readFile(y);u!==void 0?i("output",u||"(arquivo vazio)"):i("error",`cat: ${T[0]}: Arquivo nao encontrado`);break}case"touch":{if(!T[0]){i("error","touch: falta nome do arquivo");break}const y=S(T[0]).replace(/^\//,"");t.writeFile(y,t.readFile(y)||""),i("success",`✓ Arquivo criado: ${y}`);break}case"mkdir":{if(!T[0]){i("error","mkdir: falta nome");break}const y=S(T[0]).replace(/^\//,"");t.writeFile(`${y}/.gitkeep`,""),i("success",`✓ Pasta criada: ${y}/`);break}case"rm":{const y=T.find(R=>!R.startsWith("-"))||"";if(!y){i("error","rm: falta argumento");break}const u=S(y).replace(/^\//,"");t.exists(u)?(t.deleteFile(u),i("success",`✓ Removido: ${u}`)):i("error",`rm: ${y}: Nao encontrado`);break}case"mv":{if(T.length<2){i("error","mv: mv <origem> <destino>");break}const y=S(T[0]).replace(/^\//,""),u=S(T[1]).replace(/^\//,"");t.exists(y)?(t.renameFile(y,u),i("success",`✓ ${y} → ${u}`)):i("error",`mv: ${T[0]}: Nao encontrado`);break}case"cp":{if(T.length<2){i("error","cp: cp <origem> <destino>");break}const y=S(T[0]).replace(/^\//,""),u=S(T[1]).replace(/^\//,""),R=t.readFile(y);R!==void 0?(t.writeFile(u,R),i("success",`✓ Copiado: ${y} → ${u}`)):i("error",`cp: ${T[0]}: Nao encontrado`);break}case"echo":{const y=T.join(" ");if(te.includes(">")){const[,u]=te.split(">"),R=u.trim().replace(/^\//,""),b=y.split(">")[0].trim().replace(/^["']|["']$/g,"");t.writeFile(R,b+`
`),i("success",`✓ Escrito em ${R}`)}else i("output",y);break}case"find":{const y=(T[0]||"").toLowerCase(),u=ne.filter(R=>R.toLowerCase().includes(y));u.length===0?i("output","Nenhum arquivo encontrado"):u.forEach(R=>i("output",`./${R}`));break}case"search":{if(!T[0]){i("error","search: falta termo");break}const y=T[0].toLowerCase();let u=0;for(const R of ne){const b=t.readFile(R)||"",d=b.toLowerCase().indexOf(y);if(d!==-1){const w=b.split(`
`);let se=0,q=0;for(let x=0;x<w.length;x++)if(q+=w[x].length+1,q>d){se=x+1;break}i("output",`${R}:${se}: ${w[se-1]?.trim()}`),u++}}u===0?i("output",`Nenhuma ocorrencia de "${T[0]}" encontrada`):i("success",`✓ ${u} arquivo(s) com "${T[0]}"`);break}case"wc":{if(!T[0]){i("error","wc: falta argumento");break}const y=S(T[0]).replace(/^\//,""),u=t.readFile(y);u!==void 0?i("output",`  ${u.split(`
`).length} linhas  ${u.split(/\s+/).filter(Boolean).length} palavras  ${u.length} chars  ${T[0]}`):i("error",`wc: ${T[0]}: Nao encontrado`);break}case"head":case"tail":{if(!T[0]){i("error",`${Q}: falta argumento`);break}const y=S(T[0]).replace(/^\//,""),u=t.readFile(y);if(u!==void 0){const R=u.split(`
`),b=Q==="head"?R.slice(0,10):R.slice(-10);i("output",b.join(`
`))}else i("error",`${Q}: ${T[0]}: Nao encontrado`);break}case"tree":{const y=k==="/"?"":k.replace(/^\//,""),u=y?ne.filter(d=>d.startsWith(y+"/")):ne;if(u.length===0){i("output","(vazio)");break}const b=(y?u.map(d=>d.slice(y.length+1)):u).sort();for(const d of b){const w=d.split("/").length-1,se="│  ".repeat(w),q=d.split("/").pop();i("output",`${se}${w>0?"├─ ":""}${q}`)}break}case"clear":m([]),r?.(!1);break;case"date":i("output",new Date().toLocaleString("pt-BR"));break;case"whoami":i("output","developer");break;case"hostname":i("output","sk-code-editor");break;case"uname":i("output","SK-OS 1.0 (Browser Runtime)");break;case"env":{v("output",["NODE_ENV=development","EDITOR=SK-Code-Editor","LANG=pt_BR.UTF-8","PATH=/usr/local/bin:/usr/bin:/bin","(Adicione variaveis em .env no projeto)"]);break}case"node":{if(!T[0]){i("error","node: falta nome do arquivo");break}const y=S(T[0]).replace(/^\//,""),u=t.readFile(y);if(u===void 0){i("error",`node: ${T[0]}: Arquivo nao encontrado`);break}I(!0),i("info",`⚡ Executando ${T[0]}...`);try{const R=[],b=(F,...H)=>{const M=F+H.map(oe=>{try{return typeof oe=="object"?JSON.stringify(oe,null,2):String(oe)}catch{return String(oe)}}).join(" ");R.push(M),i(F.startsWith("ERR")?"error":F.startsWith("WRN")?"warn":"output",M.replace(/^(ERR|WRN|INF): /,""))},d={log:(...F)=>b("",...F),error:(...F)=>b("ERR: ",...F),warn:(...F)=>b("WRN: ",...F),info:(...F)=>b("INF: ",...F),table:F=>b("",typeof F=="object"?JSON.stringify(F,null,2):String(F))},w=(F,H)=>(i("info",`  → fetch ${F}`),window.fetch(F,H).then(async M=>{const oe=M.clone();return i("info",`  ← ${M.status} ${M.statusText}`),oe})),se=F=>({listen:(H,M,oe)=>{const ce=typeof H=="number"?H:F,O=typeof M=="function"?M:typeof oe=="function"?oe:null;if(i("success",`✅ Servidor rodando na porta ${ce}`),i("info",`   Acesse: http://localhost:${ce}`),r?.(!0,ce),O)try{O()}catch{}return{close:()=>{r?.(!1)}}},get:(H,M)=>{try{M({},{json:()=>{},send:()=>{},status:()=>({json:()=>{}})})}catch{}},post:(H,M)=>{try{M({body:{}},{json:()=>{},send:()=>{},status:()=>({json:()=>{}})})}catch{}},use:()=>{},set:()=>{}}),q=F=>{if(F==="path")return{join:(...H)=>H.join("/"),resolve:(...H)=>"/"+H.join("/"),dirname:H=>H.split("/").slice(0,-1).join("/"),basename:H=>H.split("/").pop()};if(F==="fs")return{readFileSync:H=>t.readFile(H.replace(/^\//,""))??"",writeFileSync:(H,M)=>t.writeFile(H.replace(/^\//,""),M),existsSync:H=>t.readFile(H.replace(/^\//,""))!==void 0};if(F==="express"){const H=Object.assign(()=>{},se(3e3),{Router:()=>se(3e3),json:()=>{},urlencoded:()=>{},static:()=>{}}),M=()=>H;return M.Router=()=>H,M.json=()=>{},M.urlencoded=()=>{},M.static=()=>{},M}if(F==="http"||F==="https")return{createServer:H=>se(3e3)};if(F==="node-fetch"||F==="axios")return Object.assign(w,{default:w,get:(H,M)=>w(H,{...M,method:"GET"}),post:(H,M,oe)=>w(H,{...oe,method:"POST",body:JSON.stringify(M)})});if(F==="dotenv")return{config:()=>{}};if(F==="cors")return()=>{};if(F==="body-parser")return{json:()=>{},urlencoded:()=>{}};if(F==="crypto")return{randomBytes:H=>Array.from({length:H},()=>Math.floor(Math.random()*256)),createHash:()=>({update:H=>({digest:()=>btoa(H)})})};throw new Error(`require('${F}') nao disponivel no browser. Use fetch() diretamente para chamadas de API.`)},x=Object.getPrototypeOf(async function(){}).constructor;await new x("console","require","process","fetch",u)(d,q,{env:{},argv:["node",T[0]],cwd:()=>"/",exit:F=>{throw new Error(`process.exit(${F})`)}},w),R.length===0&&i("success","✓ Executado sem saida no console")}catch(R){R.message?.includes("process.exit")?i("info",R.message):(i("error",`Erro: ${R.message}`),(R.message?.includes("CORS")||R.message?.includes("fetch"))&&i("warn","Dica: A API pode nao permitir chamadas do browser (CORS). Verifique se a API tem CORS habilitado."))}finally{I(!1)}break}case"python":case"python3":{if(!T[0]){i("error","python: falta nome do arquivo");break}i("info",`⚡ Simulando execucao de ${T[0]}...`),i("warn","Python nao pode ser executado no browser."),i("info","Para executar Python, use: Replit, Google Colab, ou instale Python localmente.");const y=t.readFile(T[0].replace(/^\//,""));if(y){const u=y.matchAll(/print\(([^)]+)\)/g);for(const R of u)i("output",`>>> ${R[1].replace(/["']/g,"")}`)}break}case"npm":{const y=T[0]?.toLowerCase();if(y==="init"){if(t.readFile("package.json"))i("warn","package.json ja existe.");else{const R={name:"meu-projeto",version:"1.0.0",description:"",main:"index.js",scripts:{start:"node index.js",test:'echo "Error: no test specified"'},keywords:[],author:"",license:"ISC",dependencies:{}};t.writeFile("package.json",JSON.stringify(R,null,2)),i("success","✓ package.json criado!")}break}if(y==="run"){const u=T[1];if(!u){i("error","npm run: informe o script");break}const R=t.readFile("package.json");if(!R){i("error","package.json nao encontrado. Execute: npm init");break}try{const b=JSON.parse(R),d=b.scripts?.[u];if(!d){i("error",`Script "${u}" nao encontrado em package.json`);break}i("info",`> ${b.name||"projeto"} ${u}`),i("info",`> ${d}`),i("success",`✓ Script "${u}" iniciado (simulado)`)}catch{i("error","Erro ao ler package.json")}break}if(y==="install"||y==="i"||y==="add"){const u=T.slice(1).filter(d=>!d.startsWith("-")),b=T.slice(1).filter(d=>d.startsWith("-")).some(d=>d==="--save-dev"||d==="-D");I(!0);try{if(i("warn","📴 Modo Offline — simulação rápida (não baixa código real)"),i("info",'   Pra instalar de verdade: troque pra modo "🌐 Online" ou "⚡ Real" no botão do terminal.'),u.length===0){const d=t.readFile("package.json");if(!d)i("error","package.json não encontrado. Use: npm init");else try{const w=JSON.parse(d),se=Object.keys(w.dependencies||{}).length,q=Object.keys(w.devDependencies||{}).length;i("success",`✓ package.json processado: ${se} dependência(s) + ${q} dev`),i("info","💡 As entradas estão no package.json mas sem node_modules real.")}catch{i("error","package.json com formato inválido")}}else{for(const d of u){const w=Tn[d.toLowerCase()],se=w?.version||"latest";i("info",`  + ${d}@${se}`),await Ha(d);const q="package.json";let x={};try{x=JSON.parse(t.readFile(q)||"{}")}catch{}x.dependencies||(x.dependencies={}),x.devDependencies||(x.devDependencies={}),b?x.devDependencies[d]=`^${se}`:x.dependencies[d]=`^${se}`,t.writeFile(q,JSON.stringify(x,null,2)),i("success",`  ✓ ${d}@${se} ESCRITO em package.json (simulado)`),w?.description&&i("info",`    ${w.description}`)}i("warn",`⚠️  ${u.length} pacote(s) só no package.json. Sem node_modules.`),i("info","💡 Abra o package.json pra confirmar — as entradas estão lá.")}}catch(d){i("error",`Erro inesperado: ${d?.message||String(d)}`)}finally{I(!1)}break}if(y==="uninstall"||y==="remove"||y==="rm"){const u=T[1];if(!u){i("error","npm uninstall: informe o pacote");break}const R="package.json";let b={};try{b=JSON.parse(t.readFile(R)||"{}")}catch{}b.dependencies?.[u]?(delete b.dependencies[u],t.writeFile(R,JSON.stringify(b,null,2)),i("success",`✓ ${u} removido do package.json`)):i("warn",`${u} nao encontrado nas dependencias`);break}if(y==="list"||y==="ls"){const u="package.json";try{const R=JSON.parse(t.readFile(u)||"{}"),b={...R.dependencies,...R.devDependencies};if(Object.keys(b).length===0){i("output","(sem dependencias)");break}for(const[d,w]of Object.entries(b))i("output",`  ${d}@${w}`)}catch{i("error","Erro ao ler package.json")}break}i("error",`npm ${y}: subcomando desconhecido`),i("info","Comandos: install, uninstall, run, list, init");break}case"pip":case"pip3":{const y=T[0]?.toLowerCase();if(y==="install"){const u=T.slice(1).filter(R=>!R.startsWith("-"));if(u.length===0){i("error","pip install: informe o pacote");break}I(!0);for(const R of u){const b=Rn[R.toLowerCase()],d=b?.version||"latest";i("info",`Collecting ${R}`),await Ha(),i("info",`  Downloading ${R}-${d}.tar.gz`),await Ha(),i("info",`Installing collected packages: ${R}`),await Ha();let w=t.readFile("requirements.txt")||"";w.includes(R)||(w+=(w&&!w.endsWith(`
`)?`
`:"")+`${R}==${d}
`,t.writeFile("requirements.txt",w)),i("success",`Successfully installed ${R}-${d}`),b?.description&&i("info",`  ${b.description}`)}I(!1);break}if(y==="list"){const u=t.readFile("requirements.txt")||"";if(!u.trim()){i("output","(sem pacotes instalados)");break}i("output","Package          Version"),i("output","---------------- -------");for(const R of u.split(`
`).filter(Boolean)){const[b,d]=R.split("==");i("output",`${b.padEnd(16)} ${d||"latest"}`)}break}i("error",`pip ${y}: subcomando desconhecido`),i("info","Comandos: install, list");break}case"db":{const y=T[0]?.toLowerCase();if(!y||y==="help"){i("info",Sn);break}const u={sqlite:()=>{t.writeFile("db.js",`const Database = require('better-sqlite3');

const db = new Database('database.db');

// Criar tabelas
db.exec(\`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES users(id),
    title TEXT NOT NULL,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
\`);

// Inserir dados de exemplo
const insertUser = db.prepare('INSERT OR IGNORE INTO users (name, email) VALUES (?, ?)');
insertUser.run('Joao Silva', 'joao@exemplo.com');
insertUser.run('Maria Santos', 'maria@exemplo.com');

// Consultar dados
const users = db.prepare('SELECT * FROM users').all();
console.log('Usuarios:', users);

// Exportar para uso em outros modulos
module.exports = db;
`),i("success","✓ db.js criado com template SQLite"),i("info","Execute: npm install better-sqlite3")},postgres:()=>{t.writeFile("db.js",`const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Ou configure individualmente:
  // host: 'localhost',
  // port: 5432,
  // database: 'meu_banco',
  // user: 'postgres',
  // password: 'senha',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Testar conexao
pool.query('SELECT NOW()', (err, res) => {
  if (err) console.error('Erro ao conectar:', err);
  else console.log('PostgreSQL conectado:', res.rows[0].now);
});

// Criar tabelas
async function createTables() {
  await pool.query(\`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  \`);
  console.log('Tabelas criadas!');
}

createTables();
module.exports = pool;
`),t.writeFile(".env",`DATABASE_URL=postgresql://user:password@localhost:5432/mydb
NODE_ENV=development
`),i("success","✓ db.js e .env criados com template PostgreSQL"),i("info","Execute: npm install pg"),i("warn","Configure DATABASE_URL no arquivo .env")},mongo:()=>{t.writeFile("db.js",`const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/meu-banco';

mongoose.connect(MONGODB_URI).then(() => {
  console.log('MongoDB conectado!');
}).catch((err) => {
  console.error('Erro ao conectar:', err);
});

// Definir schemas
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

module.exports = { mongoose, User, Post };
`),t.writeFile(".env",`MONGODB_URI=mongodb://localhost:27017/meu-banco
`),i("success","✓ db.js criado com template MongoDB"),i("info","Execute: npm install mongoose")},neon:()=>{t.writeFile("db.js",`const { Pool } = require('pg');

// Neon PostgreSQL - Banco de dados PostgreSQL gratuito na nuvem
// 1. Crie uma conta em: console.neon.tech
// 2. Crie um projeto e copie a connection string
// 3. Cole a connection string no arquivo .env como DATABASE_URL

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Necessario para Neon
  },
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Testar conexao
async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW() as now, version()');
    console.log('✓ Neon PostgreSQL conectado!');
    console.log('  Hora:', res.rows[0].now);
    console.log('  Versao:', res.rows[0].version.split(' ').slice(0,2).join(' '));
  } catch (err) {
    console.error('✗ Erro ao conectar:', err.message);
    console.log('Verifique a DATABASE_URL no arquivo .env');
  }
}

// Criar tabelas de exemplo
async function setupDatabase() {
  await pool.query(\`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS sessions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      token TEXT NOT NULL,
      expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
    CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
    CREATE INDEX IF NOT EXISTS idx_sessions_token ON sessions(token);
  \`);
  console.log('✓ Tabelas criadas no Neon!');
}

// Funcoes utilitarias
async function query(text, params) {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log('Query executada:', { text: text.slice(0, 50), duration: duration + 'ms', rows: res.rowCount });
  return res;
}

async function getClient() {
  const client = await pool.connect();
  const release = client.release;
  client.release = () => {
    client.release = release;
    return release.apply(client);
  };
  return client;
}

// Inicializar
testConnection()
  .then(() => setupDatabase())
  .catch(console.error);

module.exports = { pool, query, getClient };
`);const R=T[1]||"",b=R.startsWith("postgresql://")||R.startsWith("postgres://")?R:"postgresql://usuario:senha@ep-xxxx.region.aws.neon.tech/neondb?sslmode=require",d=b!=="postgresql://usuario:senha@ep-xxxx.region.aws.neon.tech/neondb?sslmode=require";t.writeFile(".env",`# Neon PostgreSQL Connection String
# Obtenha em: console.neon.tech -> seu projeto -> Connection String
DATABASE_URL=${b}

NODE_ENV=development
PORT=3000
`),t.writeFile(".env.example",`DATABASE_URL=postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require
NODE_ENV=development
PORT=3000
`),t.writeFile(".gitignore",`.env
node_modules/
dist/
*.log
`),d?(i("success","✓ Template Neon criado com sua connection string real!"),v("info",["  DATABASE_URL configurada no .env","  Execute: npm install pg","  Execute: node db.js"])):(i("success","✓ Template Neon PostgreSQL criado!"),v("info",["  Proximos passos:","  1. Acesse: console.neon.tech e crie conta gratuita","  2. Crie um projeto e copie a Connection String","  3. Cole a URL direto no comando: db neon <SUA_URL>","     Ex: db neon postgresql://user:pass@ep-xxx.neon.tech/db?sslmode=require","  Ou abra o .env e substitua a URL placeholder pela real","","  4. Execute: npm install pg","  5. Execute: node db.js","","  Neon oferece: 512MB gratis, PostgreSQL gerenciado, branching de banco!"]))},supabase:()=>{t.writeFile("supabase.js",`import { createClient } from '@supabase/supabase-js';

// Supabase - Backend completo com PostgreSQL + Auth + Storage + Realtime
// 1. Crie uma conta em: supabase.com
// 2. Crie um projeto
// 3. Va em Settings > API e copie a URL e a anon key

const supabaseUrl = process.env.SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// ==================== AUTENTICACAO ====================
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// ==================== DATABASE ====================
export async function getAll(table) {
  const { data, error } = await supabase.from(table).select('*');
  if (error) throw error;
  return data;
}

export async function getById(table, id) {
  const { data, error } = await supabase.from(table).select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}

export async function insert(table, values) {
  const { data, error } = await supabase.from(table).insert(values).select();
  if (error) throw error;
  return data;
}

export async function update(table, id, values) {
  const { data, error } = await supabase.from(table).update(values).eq('id', id).select();
  if (error) throw error;
  return data;
}

export async function remove(table, id) {
  const { error } = await supabase.from(table).delete().eq('id', id);
  if (error) throw error;
}

// ==================== STORAGE ====================
export async function uploadFile(bucket, path, file) {
  const { data, error } = await supabase.storage.from(bucket).upload(path, file);
  if (error) throw error;
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

// ==================== REALTIME ====================
export function subscribeToTable(table, callback) {
  return supabase.channel('db-changes')
    .on('postgres_changes', { event: '*', schema: 'public', table }, callback)
    .subscribe();
}
`),t.writeFile(".env",`SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
`),t.writeFile(".env.example",`SUPABASE_URL=https://SEU_PROJETO.supabase.co
SUPABASE_ANON_KEY=SUA_ANON_KEY_AQUI
`),i("success","✓ Template Supabase criado!"),v("info",["  Proximos passos:","  1. Acesse: supabase.com e crie uma conta","  2. Crie um projeto (gratis ate 500MB)","  3. Va em Settings > API","  4. Copie Project URL e anon/public key para o .env","  5. Execute: npm install @supabase/supabase-js","","  Supabase oferece: PostgreSQL + Auth + Storage + Edge Functions + Realtime!"])},firebase:()=>{t.writeFile("firebase.js",`import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Exemplos de uso:
// const docRef = await addDoc(collection(db, 'users'), { name: 'Joao', email: 'joao@email.com' });
// const snapshot = await getDocs(collection(db, 'users'));
// snapshot.forEach((doc) => console.log(doc.id, doc.data()));
`),t.writeFile(".env",`VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
`),i("success","✓ firebase.js e .env criados"),i("info","Execute: npm install firebase"),i("warn","Configure as variaveis no arquivo .env com suas credenciais do Firebase Console")}};u[y]?u[y]():(i("error",`db: tipo desconhecido: ${y}`),i("info","Tipos: sqlite, postgres, mongo, firebase"));break}case"youtube":case"yt":{const y=T[0]?.toLowerCase();if(!y||y==="help"){i("info",No);break}if(y==="setup"){i("info","Criando projeto de download do YouTube..."),t.writeFile("package.json",JSON.stringify({name:"youtube-downloader",version:"1.0.0",description:"Downloader de videos do YouTube",main:"download.js",scripts:{start:"node download.js",download:"node download.js"},dependencies:{"ytdl-core":"^4.11.5","fluent-ffmpeg":"^2.1.3"}},null,2)),t.writeFile("download.js",`const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');

// Configure a URL do video aqui:
const VIDEO_URL = process.env.YOUTUBE_URL || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

async function downloadVideo(url, format = 'video') {
  const info = await ytdl.getInfo(url);
  const title = info.videoDetails.title.replace(/[^a-z0-9]/gi, '_');
  console.log('Titulo:', info.videoDetails.title);
  console.log('Duracao:', Math.floor(info.videoDetails.lengthSeconds / 60) + ' min');

  const filename = format === 'audio' ? \`\${title}.mp4\` : \`\${title}_video.mp4\`;
  const output = fs.createWriteStream(filename);

  const quality = format === 'audio' ? 'lowestaudio' : 'highest';
  const stream = ytdl(url, { quality });

  let downloaded = 0;
  stream.on('progress', (_, total, grand) => {
    const pct = Math.floor((total / grand) * 100);
    process.stdout.write(\`\\rBaixando: \${pct}%\`);
  });

  stream.pipe(output);
  await new Promise((resolve, reject) => {
    output.on('finish', resolve);
    output.on('error', reject);
  });

  console.log(\`\\n✓ Salvo como: \${filename}\`);
  return filename;
}

async function getInfo(url) {
  const info = await ytdl.getInfo(url);
  console.log('=== Informacoes do Video ===');
  console.log('Titulo:', info.videoDetails.title);
  console.log('Canal:', info.videoDetails.author.name);
  console.log('Duracao:', Math.floor(info.videoDetails.lengthSeconds / 60) + 'min');
  console.log('Views:', parseInt(info.videoDetails.viewCount).toLocaleString('pt-BR'));
  console.log('Formatos disponiveis:', info.formats.length);
}

// Executar
const action = process.argv[2] || 'info';
if (action === 'info') getInfo(VIDEO_URL).catch(console.error);
else if (action === 'video') downloadVideo(VIDEO_URL, 'video').catch(console.error);
else if (action === 'audio') downloadVideo(VIDEO_URL, 'audio').catch(console.error);
else console.log('Use: node download.js [info|video|audio]');
`),t.writeFile("README.md",`# YouTube Downloader

## Instalacao
\`\`\`bash
npm install
\`\`\`

## Uso
\`\`\`bash
# Ver informacoes do video
YOUTUBE_URL="https://youtube.com/watch?v=..." node download.js info

# Baixar video
YOUTUBE_URL="https://youtube.com/watch?v=..." node download.js video

# Baixar audio
YOUTUBE_URL="https://youtube.com/watch?v=..." node download.js audio
\`\`\`
`),i("success","✓ Projeto de download do YouTube criado!"),i("info","Execute: npm install"),i("info","Depois: YOUTUBE_URL=<url> node download.js [info|video|audio]");break}if(T[0]?.startsWith("http")){i("info",`Para baixar: ${T[0]}`),i("info","Execute: youtube setup"),i("info","Depois configure a URL em download.js e rode: node download.js");break}i("info",No);break}case"git":{const y=T[0];if(!y){i("info","Uso: git clone <url-do-repositorio>");break}if(y==="clone"){const u=T[1]||"";if(!u){i("error","git clone: informe a URL do repositorio"),i("info","Exemplo: git clone github.com/usuario/repositorio");break}const R=u.replace(/\.git$/,"").replace(/\/$/,"").replace(/^https?:\/\//,""),b=R.match(/github\.com\/([^/]+)\/([^/]+)/),d=b?[b[1],b[2]]:R.split("/").filter(Boolean);if(d.length<2){i("error",`URL invalida: ${u}`),i("info","Formato: github.com/usuario/repositorio");break}const[w,se]=d;i("info",`Clonando ${w}/${se}...`),n?n(w,se).then(()=>i("success",`✓ Repositorio '${se}' importado com sucesso`)).catch(q=>i("error",`git clone falhou: ${q.message}`)):i("warn","git clone: use o painel GitHub (icone GitBranch) para importar repositorios");break}i("info",`git ${y}: use o painel GitHub (icone GitBranch na barra inferior)`);break}case"curl":case"wget":{i("warn",`${Q}: requisicoes HTTP diretas nao disponiveis no browser`),i("info","Use o painel de IA para buscar informacoes ou APIs externas"),i("info","Em aplicacoes Node.js reais, use: npm install axios");break}case"which":i("output",`/usr/local/bin/${T[0]||""}`);break;case"exit":i("info","exit: terminal browser nao pode ser fechado");break;default:{i("error",`${Q}: comando nao encontrado`),i("info",'Tente "help" para ver os comandos disponiveis');const y=["ls","cd","cat","npm","pip","node","python","mkdir","rm","mv","cp","clear","help","db"].find(u=>u.startsWith(Q[0])||Q.startsWith(u[0]));y&&i("info",`Voce quis dizer: ${y}?`);break}}if(N.current){let y=[],u=G.current;m(w=>(y=w,w));const R=y.slice(u),b=R.map(w=>w.content).join(`
`),d=!R.some(w=>w.type==="error");try{N.current?.(te,b,d)}catch{}}},[k,t,i,v,S,V]),Y=X=>{if(X.key==="Enter"&&!V)J(j),f("");else if(X.key==="ArrowUp")X.preventDefault(),K(te=>{const re=C===-1?0:Math.min(te.length-1,C+1);return L(re),f(te[re]||""),te});else if(X.key==="ArrowDown")if(X.preventDefault(),C>0){const te=C-1;L(te),K(re=>(f(re[te]||""),re))}else L(-1),f("");else if(X.key==="Tab"){X.preventDefault();const te=j.split(" ").pop()||"";if(te){const re=t.listFiles().filter(Q=>Q.split("/").pop()?.startsWith(te));re.length===1&&f(Q=>Q.slice(0,Q.length-te.length)+re[0].split("/").pop())}}else X.key==="c"&&X.ctrlKey?V&&(I(!1),i("warn","^C")):X.key==="l"&&X.ctrlKey&&m([])};return e.jsx("div",{className:"h-full bg-[#0a0e14] font-mono text-xs flex flex-col",onClick:()=>ee.current?.focus(),children:e.jsxs("div",{ref:$,className:"flex-1 overflow-y-auto p-3 space-y-0.5",children:[h.map((X,te)=>e.jsx("div",{className:`whitespace-pre-wrap break-all leading-relaxed ${X.type==="error"?"text-red-400":X.type==="info"?"text-blue-300":X.type==="success"?"text-green-400":X.type==="warn"?"text-yellow-400":X.type==="input"?"text-cyan-300":"text-gray-300"}`,children:X.content},te)),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-purple-400 shrink-0",children:k}),e.jsx("span",{className:"text-gray-600 shrink-0",children:"$"}),e.jsx("input",{ref:ee,type:"text",value:j,onChange:X=>f(X.target.value),onKeyDown:Y,disabled:V,className:"flex-1 bg-transparent outline-none text-gray-200 caret-cyan-400 disabled:opacity-50",autoFocus:!0,autoCapitalize:"off",autoCorrect:"off",spellCheck:!1}),V&&e.jsx("span",{className:"text-yellow-400 animate-pulse text-[10px]",children:"executando..."})]})]})})}const In={tsx:"tsx","ts-node":"ts-node",vite:"vite",next:"next",tsc:"typescript",eslint:"eslint",prettier:"prettier",jest:"jest",vitest:"vitest",nodemon:"nodemon",concurrently:"concurrently","cross-env":"cross-env"};function On(t){const s=t.match(/(?:sh|bash|zsh):\s*\d*:?\s*([^\s:]+):\s*(?:not found|command not found)/);if(s&&In[s[1]])return"__deps__";const o=t.match(/Cannot find (?:module|package) ['"](@?[a-zA-Z0-9._/-]+)['"]/);if(o){const n=o[1];if(!n.startsWith(".")&&!n.startsWith("/"))return n.split("/").slice(0,n.startsWith("@")?2:1).join("/")}const r=t.match(/npm ERR! missing: ([a-zA-Z0-9@._/-]+)@/);return r?r[1].split("/").slice(0,r[1].startsWith("@")?2:1).join("/"):null}const Ln=/(?:error|erro|exception|traceback|fatal|command not found|cannot find|failed|falhou|ENOENT|EACCES|SyntaxError|TypeError|ReferenceError|ModuleNotFoundError)/i;function qn(t){const[s,o]=a.useState(!1),r=a.useRef(null),n=a.useCallback(()=>{const c=window.SpeechRecognition||window.webkitSpeechRecognition;if(!c)return;if(s){r.current?.stop(),o(!1);return}const p=new c;p.lang="pt-BR",p.continuous=!1,p.interimResults=!1,p.onresult=h=>t(h.results[0][0].transcript),p.onend=()=>o(!1),p.onerror=()=>o(!1),p.start(),r.current=p,o(!0)},[s,t]);return{listening:s,toggle:n}}const zn=[{label:"npm install",cmd:"npm install"},{label:"npm run dev",cmd:"npm run dev"},{label:"npm run build",cmd:"npm run build"},{label:"npm start",cmd:"npm start"},{label:"node index.js",cmd:"node index.js"},{label:"python3 main.py",cmd:"python3 main.py"},{label:"pip install -r",cmd:"pip install -r requirements.txt"},{label:"ls -la",cmd:"ls -la"}];function wo(t){return t>=6e4?`${Math.round(t/1e3)}s`:t>=1e3?`${(t/1e3).toFixed(1)}s`:`${t}ms`}function Eo(){return"./".replace(/\/$/,"")}function Dn({externalCommand:t,onCommandExecuted:s,onCommandOutput:o,onServerToggle:r,onBufferUpdate:n,onRunningChange:c}){const[p,h]=a.useState([]),[m,j]=a.useState(""),[f,k]=a.useState(!1),[z,U]=a.useState(-1),[K,C]=a.useState(null),[L,V]=a.useState(!1),[I,ee]=a.useState("npm"),[$,D]=a.useState(""),[N,i]=a.useState([]),[v,S]=a.useState(!1),[G,J]=a.useState(),[Y,X]=a.useState(""),[te,re]=a.useState(null),Q=a.useRef(null),T=a.useRef(null),ne=a.useRef(null),y=a.useRef(0),u=a.useRef(null),R=a.useRef(""),b=a.useRef(null),d=a.useRef(null),{listening:w,toggle:se}=qn(O=>{j(he=>he?he+" "+O:O),setTimeout(()=>ne.current?.focus(),50)});a.useEffect(()=>{const O=T.current;O&&(O.scrollTop=O.scrollHeight)},[p]),a.useEffect(()=>{setTimeout(()=>ne.current?.focus(),50)},[]);const q=a.useCallback(()=>{b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{const O=R.current,he=Ln.test(O.slice(-2e3));n?.(O,he)},1500)},[n]),x=a.useCallback(async O=>{const he=O.trim();if(!he||f)return;j(""),U(-1),k(!0),re(null),X(""),c?.(!0,he);const Ne=++y.current,ge={id:Ne,command:he,chunks:[],running:!0,exitCode:null,durationMs:0,missingPackage:null};h(ve=>[...ve,ge]);const xe=new AbortController;u.current=xe;const ue=ve=>{h(_=>_.map(Z=>Z.id===Ne?ve(Z):Z))};try{const ve=await fetch(`${Eo()}/api/projects/default/exec-stream`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:he}),signal:xe.signal});if(!ve.ok||!ve.body){const me=await ve.text().catch(()=>"Erro desconhecido");ue(ke=>({...ke,running:!1,exitCode:1,chunks:[{type:"stderr",text:`Erro HTTP: ${me}`}]})),k(!1);return}const _=ve.body.getReader(),Z=new TextDecoder;let le="";for(;;){const{done:me,value:ke}=await _.read();if(me)break;le+=Z.decode(ke,{stream:!0});const be=le.split(`
`);le=be.pop()??"";for(const Qe of be)if(Qe.startsWith("data: "))try{const pe=JSON.parse(Qe.slice(6));if(pe.type==="session_id")re(pe.sessionId),setTimeout(()=>Q.current?.focus(),100);else if(pe.type==="stdout"||pe.type==="stderr")ue(we=>({...we,chunks:[...we.chunks,{type:pe.type,text:pe.data}]})),R.current=(R.current+pe.data).slice(-8e3),q(),setTimeout(()=>Q.current?.focus(),50);else if(pe.type==="server_detected")r?.(!0,pe.port),ue(we=>({...we,chunks:[...we.chunks,{type:"stdout",text:`
🌐 Servidor na porta ${pe.port} — preview conectado!
`}]}));else if(pe.type==="exit"){const we=await new Promise(He=>{h(at=>{const _e=at.find(st=>st.id===Ne);return He(_e?.chunks.map(st=>st.text).join("")??""),at})}),Ge=pe.exitCode!==0?On(we):null;ue(He=>({...He,running:!1,exitCode:pe.exitCode,durationMs:pe.durationMs,missingPackage:Ge}));const Ae=pe.exitCode===0;o?.(he,we,Ae),Ae||r?.(!1)}}catch{}}}catch(ve){ve?.name==="AbortError"?ue(_=>({..._,running:!1,exitCode:130,chunks:[..._.chunks,{type:"stderr",text:`
^C interrompido
`}]})):ue(_=>({..._,running:!1,exitCode:1,chunks:[..._.chunks,{type:"stderr",text:`
Erro de conexão: ${ve.message}
`}]}))}finally{k(!1),c?.(!1),u.current=null,setTimeout(()=>ne.current?.focus(),50),s?.()}},[f,o,r,s,c,q]),E=a.useCallback(async O=>{if(!te||!O)return;const he=O.endsWith(`
`)?O:O+`
`;X("");const Ne=y.current;h(ge=>ge.map(xe=>xe.id===Ne?{...xe,chunks:[...xe.chunks,{type:"stdout",text:`\x1B[36m${O}\x1B[0m
`}]}:xe));try{await fetch(`${Eo()}/api/projects/default/exec-stdin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:te,data:he})})}catch{}},[te]);a.useEffect(()=>{t&&t!==G&&(J(t),x(t))},[t,G,x]);const F=O=>{const he=p.map(Ne=>Ne.command);if(O.key==="Enter")x(m);else if(O.key==="ArrowUp"){O.preventDefault();const Ne=Math.min(z+1,he.length-1);U(Ne),j(he[he.length-1-Ne]??"")}else if(O.key==="ArrowDown"){O.preventDefault();const Ne=Math.max(z-1,-1);U(Ne),j(Ne===-1?"":he[he.length-1-Ne]??"")}else O.key==="c"&&O.ctrlKey?f&&u.current&&u.current.abort():O.key==="l"&&O.ctrlKey&&(O.preventDefault(),h([]))},H=O=>{const he=O.chunks.map(Ne=>Ne.text).join("");navigator.clipboard.writeText(he).then(()=>{C(O.id),setTimeout(()=>C(null),1500)})},M=a.useCallback(async(O,he)=>{if(!O.trim()||O.length<2){i([]);return}S(!0);try{if(he==="npm"){const ge=await(await fetch(`https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(O)}&size=8`)).json();i((ge.objects??[]).map(xe=>({name:xe.package.name,description:xe.package.description??"",version:xe.package.version??""})))}else{const Ne=await fetch(`https://pypi.org/pypi/${encodeURIComponent(O)}/json`).catch(()=>null);if(Ne?.ok){const{info:ge}=await Ne.json();i([{name:ge.name,description:ge.summary??"",version:ge.version??""}])}else i([])}}catch{i([])}finally{S(!1)}},[]),oe=O=>{D(O),d.current&&clearTimeout(d.current),d.current=setTimeout(()=>M(O,I),400)},ce=O=>{const he=I==="npm"?`npm install ${O}`:`pip install ${O}`;x(he),V(!1),D(""),i([])};return e.jsxs("div",{className:"h-full flex flex-col bg-[#141c0d] overflow-hidden font-mono text-xs",children:[e.jsxs("div",{className:"flex items-center gap-2 px-3 py-1 bg-[#1c2714] border-b border-gray-700/30 shrink-0 min-h-[28px]",children:[e.jsx("div",{className:`w-2 h-2 rounded-full shrink-0 ${f?"bg-yellow-400 animate-pulse":"bg-green-400"}`}),e.jsx("span",{className:"text-[11px] text-gray-500",children:f?"executando…":"pronto"}),f&&e.jsxs("div",{className:"flex items-center gap-1 ml-1",children:[e.jsx(qe,{className:"w-3 h-3 text-yellow-400 animate-spin"}),e.jsx("span",{className:"text-[10px] text-yellow-300",children:"Ctrl+C para cancelar"})]}),e.jsx("div",{className:"flex-1"}),e.jsx("button",{onClick:()=>{V(O=>!O),D(""),i([])},className:`text-[11px] px-2.5 py-1 rounded-lg border transition-all ${L?"bg-green-900/30 text-green-300 border-green-600/50":"text-gray-500 border-gray-700/30 hover:border-green-700/40 hover:text-green-400"}`,children:"📦 Pacotes"}),e.jsx("button",{onClick:()=>h([]),className:"p-1.5 rounded text-gray-600 hover:text-gray-300 hover:bg-white/5 transition-all",title:"Limpar (Ctrl+L)",children:e.jsx(dt,{className:"w-3.5 h-3.5"})})]}),L&&e.jsxs("div",{className:"shrink-0 bg-[#111a0a] border-b border-green-700/30 px-2 py-2 flex flex-col gap-1.5",children:[e.jsx("div",{className:"flex items-center gap-1",children:["npm","pip"].map(O=>e.jsx("button",{onClick:()=>{ee(O),i([]),$.length>=2&&M($,O)},className:`px-3 py-0.5 rounded-md text-[11px] font-bold transition-all ${I===O?"bg-green-700/50 text-green-200 border border-green-600/50":"text-gray-500 hover:text-gray-300"}`,children:O==="npm"?"📦 npm":"🐍 pip"},O))}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{autoFocus:!0,type:"text",value:$,onChange:O=>oe(O.target.value),placeholder:I==="npm"?"axios, lodash, react-query…":"requests, numpy, flask…",className:"w-full bg-[#1c2714] border border-gray-700/40 rounded-lg px-3 py-1.5 text-[12px] text-gray-200 placeholder-gray-600 focus:outline-none focus:border-green-600/60"}),v&&e.jsx(qe,{className:"absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-green-400 animate-spin"})]}),N.length>0&&e.jsx("div",{className:"flex flex-col gap-0.5 max-h-[160px] overflow-y-auto",children:N.map(O=>e.jsxs("button",{onClick:()=>ce(O.name),className:"flex items-start gap-2 px-2.5 py-1.5 rounded-lg bg-[#1c2714] hover:bg-green-900/20 border border-gray-700/30 hover:border-green-600/40 text-left transition-all",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[12px] font-bold text-green-300 font-mono",children:O.name}),O.version&&e.jsxs("span",{className:"text-[9px] text-gray-600",children:["v",O.version]})]}),O.description&&e.jsx("p",{className:"text-[10px] text-gray-500 truncate mt-0.5",children:O.description})]}),e.jsx("span",{className:"text-[10px] text-green-600 font-bold shrink-0 mt-0.5",children:"instalar"})]},O.name))})]}),e.jsx("div",{className:"flex items-center gap-1 px-2 py-1 bg-[#111a0a] border-b border-gray-700/20 overflow-x-auto shrink-0",children:zn.map(O=>e.jsx("button",{onClick:()=>x(O.cmd),disabled:f,className:"text-[10px] px-2 py-0.5 rounded bg-[#1c2714] text-gray-500 border border-gray-700/30 hover:border-green-700/40 hover:text-green-400 whitespace-nowrap transition-all disabled:opacity-40 shrink-0",children:O.label},O.cmd))}),e.jsxs("div",{ref:T,className:"flex-1 overflow-auto p-2 space-y-3",children:[p.length===0&&e.jsxs("div",{className:"text-gray-600 text-[11px] space-y-1 pt-1",children:[e.jsx("p",{className:"text-green-700",children:"📂 Pasta de trabalho: ~/sk-projetos"}),e.jsx("p",{children:"Terminal pronto. Digite um comando ou clique nos botões acima."}),e.jsx("p",{className:"text-[10px] opacity-60",children:"↑ ↓ histórico · Ctrl+C cancelar · Ctrl+L limpar"})]}),p.map(O=>{const he=O.chunks.map(ge=>ge.text).join(""),Ne=O.exitCode===0;return e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] flex-wrap",children:[e.jsx("span",{className:"text-green-500 shrink-0",children:"$"}),e.jsx("span",{className:"text-gray-200 flex-1 break-all",children:O.command}),e.jsx("button",{onClick:()=>H(O),className:"shrink-0 text-gray-600 hover:text-gray-300 transition-colors",title:"Copiar saída",children:K===O.id?e.jsx(pa,{className:"w-3 h-3 text-green-400"}):e.jsx(Kt,{className:"w-3 h-3"})}),O.running?e.jsxs("span",{className:"flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400",children:[e.jsx(qe,{className:"w-2.5 h-2.5 animate-spin"}),"rodando"]}):e.jsx("span",{className:`text-[9px] px-1.5 py-0.5 rounded-full ${Ne?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"}`,children:Ne?"✓ OK":`✗ exit ${O.exitCode}`}),!O.running&&O.durationMs>0&&e.jsx("span",{className:"text-gray-600 text-[9px] shrink-0",children:wo(O.durationMs)})]}),O.chunks.length>0&&e.jsxs("pre",{className:"text-[11px] whitespace-pre-wrap break-words pl-3 leading-relaxed border-l border-gray-700/40",children:[O.chunks.map((ge,xe)=>e.jsx("span",{className:ge.type==="stdout"?"text-gray-200":/npm warn/i.test(ge.text)?"text-yellow-400/80":!O.running&&O.exitCode!==0||/npm err!/i.test(ge.text)?"text-red-400":"text-gray-500",children:ge.text},xe)),O.running&&e.jsx("span",{className:"inline-block w-2 h-3 bg-green-400 animate-pulse ml-0.5 align-middle"})]}),!O.running&&O.exitCode!==null&&(()=>{const ge=O.exitCode===0,xe=he,ue=xe.match(/added\s+(\d+)\s+packages?\s+in\s+([\d.]+[smh])/i),ve=xe.match(/([\d]+)\s+packages?\s+are\s+looking/i),_=/Successfully installed/i.test(xe),Z=xe.match(/Successfully installed\s+(.+)/i),le=/npm install|pip install|yarn add|pnpm add/i.test(O.command);let me="";if(ge&&ue)me=`${ue[1]} pacote${+ue[1]!=1?"s":""} instalado${+ue[1]!=1?"s":""} em ${ue[2]}`,ve&&(me+=` · ${ve[1]} com atualizações pendentes`);else if(ge&&_&&Z)me=`Instalado: ${Z[1].trim().slice(0,80)}`;else if(ge&&le)me="Instalação concluída";else if(!ge){const ke=xe.split(`
`).find(be=>/npm err!|error|falhou|failed/i.test(be))?.trim();me=ke?ke.slice(0,100):`Código de saída: ${O.exitCode}`}return e.jsxs("div",{className:`mt-1 mx-0 flex items-center gap-2.5 px-3 py-2 rounded-lg border text-[11px] font-semibold ${ge?"bg-green-900/25 border-green-700/40 text-green-300":"bg-red-900/25 border-red-700/40 text-red-300"}`,children:[e.jsx("span",{className:"text-base shrink-0",children:ge?"✅":"❌"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("span",{className:"font-bold",children:ge?"Concluído com sucesso":"Falhou"}),me&&e.jsx("span",{className:"ml-2 font-normal text-[10px] opacity-80 truncate",children:me})]}),O.durationMs>0&&e.jsx("span",{className:"text-[10px] opacity-60 shrink-0",children:wo(O.durationMs)})]})})(),!O.running&&O.missingPackage&&(O.missingPackage==="__deps__"?e.jsxs("div",{className:"flex items-center gap-2 ml-3 p-2 rounded bg-yellow-400/10 border border-yellow-400/30",children:[e.jsx(pt,{className:"w-3.5 h-3.5 text-yellow-400 shrink-0"}),e.jsx("span",{className:"text-[11px] text-yellow-300 flex-1",children:"Dependências não instaladas."}),e.jsx("button",{onClick:()=>x("npm install"),className:"text-[10px] font-semibold px-2 py-1 rounded bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-300 border border-yellow-400/30 shrink-0",children:"npm install"})]}):e.jsxs("div",{className:"flex items-center gap-2 ml-3 p-2 rounded bg-yellow-400/10 border border-yellow-400/30",children:[e.jsx(pt,{className:"w-3.5 h-3.5 text-yellow-400 shrink-0"}),e.jsxs("span",{className:"text-[11px] text-yellow-300 flex-1",children:["Pacote ",e.jsx("code",{className:"font-bold",children:O.missingPackage})," não encontrado."]}),e.jsx("button",{onClick:()=>x(`npm install ${O.missingPackage}`),className:"text-[10px] font-semibold px-2 py-1 rounded bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-300 border border-yellow-400/30 shrink-0",children:"instalar"})]}))]},O.id)})]}),f&&te&&e.jsxs("div",{className:"shrink-0 border-t border-cyan-700/40 bg-[#0a1a1a] flex items-center px-3 py-2 gap-2",children:[e.jsx("span",{className:"text-cyan-500 shrink-0 text-[11px] font-semibold font-mono",children:"entrada>"}),e.jsx("input",{ref:Q,type:"text",value:Y,onChange:O=>X(O.target.value),onKeyDown:O=>{O.key==="Enter"&&E(Y),O.key==="c"&&O.ctrlKey&&u.current?.abort()},placeholder:"Digite a resposta e pressione Enter…",className:"flex-1 bg-transparent outline-none text-sm text-cyan-200 placeholder:text-cyan-800 font-mono",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1}),e.jsx("button",{onClick:()=>E(Y),className:"text-[10px] px-2 py-1 bg-cyan-700/30 border border-cyan-600/30 rounded text-cyan-400 font-semibold",children:"Enter"})]}),e.jsxs("div",{className:"shrink-0 border-t border-gray-700/30 bg-[#0f1a09] flex items-center px-3 py-2.5 gap-2",children:[e.jsx("span",{className:"text-green-500 shrink-0 text-[13px]",children:"$"}),e.jsx("input",{ref:ne,type:"text",value:m,onChange:O=>j(O.target.value),onKeyDown:F,placeholder:f?"rodando… (Ctrl+C para cancelar)":"npm install, git status, node server.js…",className:"flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder:text-gray-600 font-mono",disabled:f,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1}),e.jsx("button",{type:"button",onClick:se,disabled:f,className:`shrink-0 p-1.5 rounded transition-colors ${w?"text-red-400 bg-red-400/20 animate-pulse":"text-gray-600 hover:text-gray-300"} disabled:opacity-30`,title:w?"Parar gravação":"Falar comando",children:w?e.jsx(Gs,{className:"w-4 h-4"}):e.jsx(fa,{className:"w-4 h-4"})})]})]})}let Qa=null,la=null;async function _n(){return Qa||la||(la=Dr.boot().then(t=>(Qa=t,t)).catch(t=>{throw la=null,t}),la)}function Mn(t){const s={},o=t.listFiles();for(const r of o){const n=r.split("/").filter(Boolean);let c=s;for(let h=0;h<n.length-1;h++){const m=n[h];c[m]||(c[m]={directory:{}}),c[m].directory||(c[m]={directory:{}}),c=c[m].directory}const p=n[n.length-1];c[p]={file:{contents:t.readFile(r)??""}}}return Object.keys(s).length===0&&(s["README.md"]={file:{contents:`# Projeto vazio

Use o painel de arquivos pra criar seus arquivos.
`}}),s}function $n({vfs:t,externalCommand:s,onCommandExecuted:o,onServerToggle:r}){const[n,c]=a.useState("booting"),[p,h]=a.useState(""),[m,j]=a.useState(0),f=a.useRef(null),k=a.useRef(null),z=a.useRef(null),U=a.useRef(null),K=a.useRef(null),C=a.useRef(null),L=a.useRef(void 0),V=a.useRef(void 0),I=a.useRef(new Set),ee=a.useRef(r);a.useEffect(()=>{ee.current=r},[r]),a.useEffect(()=>{if(typeof window>"u")return;typeof SharedArrayBuffer<"u"&&window.crossOriginIsolated||(c("unsupported"),h("Seu navegador ou ambiente atual não permite o terminal real (precisa de cross-origin isolation). Use o modo Online ou Offline por enquanto, ou abra o app instalado/publicado — depois que o service worker registrar e o app for recarregado, geralmente passa a funcionar."))},[]),a.useEffect(()=>{if(n==="unsupported")return;let N=!1,i=null,v=null,S=null,G=null,J=null;return(async()=>{try{if(!f.current)return;const Y=new _r({fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",fontSize:13,cursorBlink:!0,convertEol:!0,theme:{background:"#0d1117",foreground:"#c9d1d9",cursor:"#58a6ff",black:"#484f58",red:"#ff7b72",green:"#7ee787",yellow:"#d29922",blue:"#58a6ff",magenta:"#bc8cff",cyan:"#39c5cf",white:"#b1bac4"}}),X=new Mr;Y.loadAddon(X),Y.loadAddon(new $r),Y.open(f.current);try{X.fit()}catch{}k.current=Y,J=Y,z.current=X,Y.writeln("\x1B[36m╔══════════════════════════════════════════╗\x1B[0m"),Y.writeln("\x1B[36m║   Terminal REAL — Node.js no navegador   ║\x1B[0m"),Y.writeln("\x1B[36m╚══════════════════════════════════════════╝\x1B[0m"),Y.writeln("\x1B[90mIniciando ambiente Node.js... aguarde alguns segundos\x1B[0m"),Y.writeln("");const te=await _n();if(N)return;U.current=te;const re=Mn(t);if(await te.mount(re),N)return;I.current=new Set(t.listFiles()),v=(u,R)=>{Y.writeln(`\x1B[32m✓ Servidor pronto na porta ${u} → ${R}\x1B[0m`),ee.current?.(!0,u)},S=(u,R)=>{R==="close"&&ee.current?.(!1,u)},te.on("server-ready",v),te.on("port",S);const Q=await te.spawn("jsh",{terminal:{cols:Y.cols,rows:Y.rows}});if(N){try{Q.kill()}catch{}return}K.current=Q,G=Q,Q.output.pipeTo(new WritableStream({write(u){Y.write(u)}})).catch(()=>{});const T=Q.input.getWriter();C.current=T;const ne=Y.onData(u=>{T.write(u).catch(()=>{})}),y=()=>{try{X.fit(),Q.resize({cols:Y.cols,rows:Y.rows})}catch{}};if(i=new ResizeObserver(y),i.observe(f.current),c("ready"),N)try{ne.dispose()}catch{}}catch(Y){if(N)return;const X=Y instanceof Error?Y.message:String(Y);c("error"),h(X);try{J?.writeln(`\x1B[31m✗ Erro ao iniciar: ${X}\x1B[0m`)}catch{}}})(),()=>{N=!0;try{i?.disconnect()}catch{}try{const Y=U.current;Y&&(v&&Y.off?.("server-ready",v),S&&Y.off?.("port",S))}catch{}try{G?.kill()}catch{}try{K.current?.kill()}catch{}K.current=null;try{C.current?.releaseLock()}catch{}C.current=null;try{J?.dispose()}catch{}try{k.current?.dispose()}catch{}k.current=null,z.current=null}},[m,n==="unsupported"]),a.useEffect(()=>{if(n!=="ready"||!U.current)return;const N=t.onChange(async()=>{const i=U.current;if(!i)return;const v=new Set(t.listFiles());for(const S of v){const G=t.readFile(S)??"";try{const J=S.split("/");if(J.length>1){const Y=J.slice(0,-1).join("/");try{await i.fs.mkdir(Y,{recursive:!0})}catch{}}await i.fs.writeFile(S,G)}catch{}}for(const S of I.current)if(!v.has(S))try{await i.fs.rm(S,{force:!0})}catch{}I.current=v});return()=>{N()}},[n,t]);const $=a.useCallback(()=>{const N=V.current,i=C.current;!N||!i||(N==="clear"?k.current?.clear():i.write(N+`
`).catch(()=>{}),V.current=void 0,L.current=N,o?.())},[o]);a.useEffect(()=>{!s||s===L.current||(V.current=s,n==="ready"&&$())},[s,n,$]),a.useEffect(()=>{n==="ready"&&$()},[n,$]);const D=a.useCallback(()=>{h(""),c("booting"),Qa=null,la=null,j(N=>N+1)},[]);return e.jsxs("div",{className:"flex-1 flex flex-col min-h-0 bg-[#0d1117] relative",children:[n==="unsupported"&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-4 z-10 bg-[#0d1117]/95",children:e.jsxs("div",{className:"max-w-md text-center space-y-4",children:[e.jsx(qo,{className:"mx-auto text-amber-400",size:36}),e.jsx("p",{className:"text-amber-200 font-bold",children:"Terminal Real precisa de recarregamento"}),e.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:"O ambiente de segurança (COOP/COEP) necessário pro Node.js no navegador precisa ser aplicado via recarregamento de página. Clique no botão abaixo — resolve na maioria dos casos."}),e.jsxs("button",{onClick:()=>window.location.reload(),className:"mx-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors",children:[e.jsx(no,{size:14})," Recarregar Página"]}),e.jsx("p",{className:"text-gray-600 text-[11px]",children:"Se após recarregar ainda não funcionar: abra a versão publicada (.replit.app) diretamente no navegador (não em iframe/preview). Em previews embutidos pode não funcionar."})]})}),n==="error"&&e.jsx("div",{className:"absolute top-2 right-2 z-10",children:e.jsxs("button",{onClick:D,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 border border-red-500/40 text-red-300 text-[11px] font-bold hover:bg-red-600/30",children:[e.jsx(no,{size:11})," Tentar de novo"]})}),n==="booting"&&e.jsxs("div",{className:"absolute top-2 right-2 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 text-[11px] font-bold",children:[e.jsx(qe,{size:11,className:"animate-spin"}),"Iniciando Node.js..."]}),e.jsx("div",{ref:f,className:"flex-1 min-h-0 p-2",style:{minHeight:0}})]})}function Un(t){let s=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/```(\w*)\n?([\s\S]*?)```/g,(o,r,n)=>`<pre><code>${n.trim()}</code></pre>`).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^#{6}\s(.+)$/gm,"<h6>$1</h6>").replace(/^#{5}\s(.+)$/gm,"<h5>$1</h5>").replace(/^#{4}\s(.+)$/gm,"<h4>$1</h4>").replace(/^#{3}\s(.+)$/gm,"<h3>$1</h3>").replace(/^#{2}\s(.+)$/gm,"<h2>$1</h2>").replace(/^#{1}\s(.+)$/gm,"<h1>$1</h1>").replace(/^---+$/gm,"<hr>").replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/__(.+?)__/g,"<strong>$1</strong>").replace(/_(.+?)_/g,"<em>$1</em>").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img alt="$1" src="$2" style="max-width:100%">').replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank">$1</a>').replace(/^&gt;\s(.+)$/gm,"<blockquote>$1</blockquote>").replace(/^[\*\-]\s(.+)$/gm,"<li>$1</li>").replace(/^\d+\.\s(.+)$/gm,"<li>$1</li>").replace(/\n\n(?!<[hbulp])/g,"</p><p>").replace(/\n(?!<)/g,"<br>");return s=s.replace(/(<li>.*?<\/li>)(\s*<br>\s*)*(<li>|$)/gs,o=>"<ul>"+o.replace(/<br>\s*/g,"")+"</ul>"),`<p>${s}</p>`}function Bn(t){try{const s=JSON.parse(t);return`<pre class="json-pre">${JSON.stringify(s,null,2).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"(.*?)":/g,'<span class="jk">"$1"</span>:').replace(/:\s*"(.*?)"/g,': <span class="js">"$1"</span>').replace(/:\s*(\d+\.?\d*)/g,': <span class="jn">$1</span>').replace(/:\s*(true|false)/g,': <span class="jb">$1</span>').replace(/:\s*(null)/g,': <span class="jnull">$1</span>')}</pre>`}catch{return`<div class="error">JSON inválido</div><pre>${t.replace(/</g,"&lt;")}</pre>`}}function Fn(t,s){let o=t.readFile(s)||"";const r=[...o.matchAll(/<link[^>]*href=["']([^"']+\.css)["'][^>]*\/?>/gi)];for(const[c,p]of r){const h=t.readFile(p)||t.readFile(p.replace(/^\.\//,""));h&&(o=o.replace(c,`<style>${h}</style>`))}const n=[...o.matchAll(/<script[^>]+src=["']([^"']+\.(?:js|mjs))["'][^>]*>\s*<\/script>/gi)];for(const[c,p]of n){const h=t.readFile(p)||t.readFile(p.replace(/^\.\//,""));h&&(o=o.replace(c,`<script>${h}<\/script>`))}return o}function Gn(t){return`<!DOCTYPE html><html><head><style>
  body{margin:0;padding:24px;background:#111;color:#eee;font-family:system-ui}
  ${t}
  </style></head><body>
  <div class="container">
    <h1>Prévia CSS</h1>
    <p>Este é um parágrafo de exemplo para visualizar seus estilos.</p>
    <button class="btn">Botão de exemplo</button>
    <a href="#" class="link">Link de exemplo</a>
    <div class="card"><p>Card de conteúdo</p></div>
    <ul><li>Item um</li><li>Item dois</li><li>Item três</li></ul>
    <input placeholder="Campo de texto" class="input" />
    <div class="badge">Badge</div>
  </div>
  </body></html>`}function Hn(t){return`<!DOCTYPE html><html><head><style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#161e0f;color:#d4d8c8;font-family:'JetBrains Mono',monospace;font-size:13px;padding:16px}
  .line{padding:2px 0;display:flex;gap:8px}
  .log .pfx{color:#6a9a50}
  .err .pfx{color:#f87171}
  .warn .pfx{color:#fbbf24}
  .pfx{font-size:11px;padding-top:1px;user-select:none;white-space:nowrap}
  .val{white-space:pre-wrap;word-break:break-all;flex:1}
  .string{color:#c9d982} .number{color:#e0c97a} .boolean{color:#7dbda8}
  .null{color:#888} .obj{color:#b8d4a0}
  #empty{color:#5a7a45;margin-top:24px;text-align:center;font-size:12px}
  </style></head><body>
  <div id="out"></div><div id="empty"></div>
  <script>
  const out = document.getElementById('out');
  const empty = document.getElementById('empty');
  let count = 0;
  function fmt(v){
    if(v===null) return '<span class="null">null</span>';
    if(v===undefined) return '<span class="null">undefined</span>';
    if(typeof v==='string') return '<span class="string">"'+String(v).replace(/</g,'&lt;')+'&quot;</span>';
    if(typeof v==='number') return '<span class="number">'+v+'</span>';
    if(typeof v==='boolean') return '<span class="boolean">'+v+'</span>';
    if(typeof v==='object'){
      try{return '<span class="obj">'+JSON.stringify(v,null,2).replace(/</g,'&lt;')+'</span>'}catch{return '<span class="obj">[objeto]</span>'}
    }
    return String(v).replace(/</g,'&lt;');
  }
  function addLine(type,args){
    count++;
    const d=document.createElement('div');
    d.className='line '+type;
    d.innerHTML='<span class="pfx">'+{log:'▶',error:'✖',warn:'⚠'}[type]+'</span><span class="val">'+args.map(fmt).join(' ')+'</span>';
    out.appendChild(d);
  }
  const _log=console.log,_err=console.error,_warn=console.warn;
  console.log=(...a)=>{_log(...a);addLine('log',a)};
  console.error=(...a)=>{_err(...a);addLine('err',a)};
  console.warn=(...a)=>{_warn(...a);addLine('warn',a)};
  window.onerror=(msg,_,l,c)=>{addLine('err',['Erro na linha '+l+':'+c+' — '+msg]);return true};
  try{
    ${t.replace(/</g,"\\u003c")}
  }catch(e){addLine('err',[e.toString()])}
  if(count===0) empty.textContent='Nenhuma saída. Use console.log() para ver resultados aqui.';
  <\/script></body></html>`}function Vn({vfs:t,activeFile:s,openFullscreen:o,onFullscreenOpened:r,serverUrl:n,serverPort:c}){const p=a.useRef(null),h=a.useRef(null),[m,j]=a.useState("mobile"),[f,k]=a.useState(0),[z,U]=a.useState(!1);a.useEffect(()=>{o&&(U(!0),r?.())},[o]);const K=s?.split(".").pop()?.toLowerCase()??"",C=a.useMemo(()=>n?"server":["html","htm","svg"].includes(K)?"html":K==="json"?"json":["md","markdown"].includes(K)?"markdown":["css","scss","sass"].includes(K)?"css":["js","ts","mjs","cjs"].includes(K)?"js":t.readFile("index.html")?"html":"none",[K,s,f,n]),L=a.useMemo(()=>{const D=s?t.readFile(s)??"":"";if(C==="html"){const N=s&&["html","htm","svg"].includes(K)?s:"index.html";return t.readFile(N)?Fn(t,N):null}return C==="css"?Gn(D):C==="js"?Hn(D):null},[t,s,C,f]),V=a.useMemo(()=>{if(C==="json"){const D=s?t.readFile(s)??"":"";return Bn(D)}if(C==="markdown"){const D=s?t.readFile(s)??"":"";return Un(D)}return null},[t,s,C,f]);a.useEffect(()=>{if(L!==null)for(const D of[p,h]){const N=D.current;if(!N)continue;const i=N.contentDocument;i&&(i.open(),i.write(L),i.close())}},[L,z]);const I=m==="mobile"?"max-w-[375px]":m==="tablet"?"max-w-[768px]":"max-w-full",ee={server:{icon:e.jsx(gt,{size:12,className:"text-green-400"}),label:`Servidor :${c}`},html:{icon:e.jsx(gt,{size:12}),label:"HTML"},json:{icon:e.jsx(hr,{size:12}),label:"JSON"},markdown:{icon:e.jsx(Hs,{size:12}),label:"Markdown"},css:{icon:e.jsx(wa,{size:12}),label:"CSS Preview"},js:{icon:e.jsx(wa,{size:12}),label:"JS Runner"},none:{icon:e.jsx(wa,{size:12}),label:"Preview"}},$=C==="server"||C!=="none"&&(L||V);return e.jsxs(e.Fragment,{children:[z&&e.jsxs("div",{className:"fixed inset-0 z-[9999] bg-black flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-[#1c2714] border-b border-gray-700/50 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[ee[C].icon,e.jsxs("span",{className:"text-[13px] font-semibold",children:[ee[C].label,s&&e.jsx("span",{className:"text-gray-600 ml-2 font-normal",children:s.split("/").pop()})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[(C==="html"||C==="css")&&e.jsxs("div",{className:"flex items-center gap-1 bg-[#141c0d] border border-gray-700/40 rounded-xl p-0.5",children:[e.jsxs("button",{onClick:()=>j("mobile"),title:"Mobile (375px)",className:`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[11px] font-semibold transition-colors ${m==="mobile"?"bg-blue-600 text-white":"text-gray-500 hover:text-gray-300"}`,children:[e.jsx(Ts,{size:13})," 375px"]}),e.jsxs("button",{onClick:()=>j("tablet"),title:"Tablet (768px)",className:`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[11px] font-semibold transition-colors ${m==="tablet"?"bg-blue-600 text-white":"text-gray-500 hover:text-gray-300"}`,children:[e.jsx(io,{size:13})," 768px"]}),e.jsxs("button",{onClick:()=>j("desktop"),title:"Desktop",className:`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[11px] font-semibold transition-colors ${m==="desktop"?"bg-blue-600 text-white":"text-gray-500 hover:text-gray-300"}`,children:[e.jsx(Ra,{size:13})," Completo"]})]}),e.jsx("button",{onClick:()=>k(D=>D+1),className:"p-2 rounded-xl bg-[#141c0d] border border-gray-700/40 text-gray-500 hover:text-gray-300",title:"Recarregar",children:e.jsx(Nt,{size:15})}),e.jsx("button",{onClick:()=>U(!1),className:"p-2 rounded-xl bg-red-600/20 border border-red-500/40 text-red-400 hover:bg-red-600/30",title:"Fechar tela cheia",children:e.jsx(ye,{size:15})})]})]}),e.jsxs("div",{className:"flex-1 overflow-auto flex justify-center bg-white",children:[C==="server"&&n&&e.jsx("iframe",{src:n,className:"w-full h-full",title:"Node.js Server Preview Fullscreen",sandbox:"allow-scripts allow-same-origin allow-forms allow-modals allow-popups"},f),(C==="html"||C==="css"||C==="js")&&L&&e.jsx("div",{className:`w-full h-full ${C==="html"||C==="css"?I:"max-w-full"}`,children:e.jsx("iframe",{ref:h,className:"w-full h-full",sandbox:"allow-scripts allow-same-origin allow-forms allow-modals allow-popups",title:"Preview Tela Cheia"})}),C==="json"&&V&&e.jsxs("div",{className:"w-full h-full overflow-auto p-6 bg-[#161e0f]",children:[e.jsx("style",{children:".json-pre{background:#161e0f;padding:16px;border-radius:10px;font-family:monospace;font-size:14px;line-height:1.7}.jk{color:#7dbda8}.js{color:#c9d982}.jn{color:#e0c97a}.jb{color:#8fc87c}.jnull{color:#888}"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:V}})]}),C==="markdown"&&V&&e.jsxs("div",{className:"w-full overflow-auto p-8 bg-[#161e0f]",children:[e.jsx("style",{children:".md-body{max-width:780px;margin:0 auto;color:#d4d8c8;font-family:system-ui;line-height:1.8;font-size:16px}.md-body h1{font-size:2.2em;border-bottom:2px solid #2d3e20;padding-bottom:.3em;margin-bottom:.5em}.md-body h2{font-size:1.6em;border-bottom:1px solid #2d3e20;padding-bottom:.2em}.md-body code{background:#1c2714;color:#c9d982;padding:2px 8px;border-radius:4px;font-family:monospace}.md-body pre{background:#1c2714;border:1px solid #2d3e20;border-radius:10px;padding:20px;overflow:auto}.md-body a{color:#8fc87c}.md-body blockquote{border-left:4px solid #3a5228;margin:1em 0;padding:.8em 1.2em;background:#1a2410;border-radius:0 8px 8px 0}"}),e.jsx("div",{className:"md-body",dangerouslySetInnerHTML:{__html:V}})]}),!$&&e.jsxs("div",{className:"flex flex-col items-center justify-center h-full gap-4 bg-[#141c0d]",children:[e.jsx(wa,{size:48,className:"text-gray-700"}),e.jsx("p",{className:"text-gray-500 text-base",children:"Sem conteúdo para visualizar"}),e.jsxs("p",{className:"text-gray-700 text-sm",children:["Crie um arquivo ",e.jsx("code",{className:"text-gray-500",children:"index.html"})," ou abra um arquivo HTML"]})]})]})]}),e.jsxs("div",{className:"h-full flex flex-col bg-[#141c0d]",children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-gray-700/50 bg-[#1c2714] shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-gray-400",children:[ee[C].icon,e.jsx("span",{className:"text-[11px] font-medium",children:ee[C].label}),s&&e.jsx("span",{className:"text-[10px] text-gray-600 ml-1 truncate max-w-[120px]",children:s.split("/").pop()})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[(C==="html"||C==="css")&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>j("mobile"),className:`p-1 rounded ${m==="mobile"?"bg-blue-500/20 text-blue-400":"text-gray-600 hover:text-gray-300"}`,title:"Mobile (375px)",children:e.jsx(Ts,{size:13})}),e.jsx("button",{onClick:()=>j("tablet"),className:`p-1 rounded ${m==="tablet"?"bg-blue-500/20 text-blue-400":"text-gray-600 hover:text-gray-300"}`,title:"Tablet (768px)",children:e.jsx(io,{size:13})}),e.jsx("button",{onClick:()=>j("desktop"),className:`p-1 rounded ${m==="desktop"?"bg-blue-500/20 text-blue-400":"text-gray-600 hover:text-gray-300"}`,title:"Desktop",children:e.jsx(Ra,{size:13})}),e.jsx("div",{className:"w-px h-3.5 bg-gray-700 mx-0.5"})]}),e.jsx("button",{onClick:()=>k(D=>D+1),className:"p-1 text-gray-600 hover:text-gray-300 rounded",title:"Recarregar",children:e.jsx(Nt,{size:13})}),$&&e.jsxs("button",{onClick:()=>U(!0),className:"flex items-center gap-1 px-2 py-1 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600/30 text-[10px] font-bold transition-colors",title:"Abrir em tela cheia",children:[e.jsx(zo,{size:11})," Tela Cheia"]})]})]}),e.jsxs("div",{className:"flex-1 overflow-auto",children:[C==="server"&&n&&e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-green-900/20 border-b border-green-700/30 shrink-0",children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-green-500"})]}),e.jsxs("span",{className:"text-green-400 text-[11px] font-bold",children:["Servidor Node.js rodando na porta ",c]}),e.jsx("button",{onClick:()=>k(D=>D+1),className:"ml-auto p-1 text-green-700 hover:text-green-400 rounded",title:"Recarregar",children:e.jsx(Nt,{size:12})})]}),e.jsx("iframe",{src:n,className:"flex-1 w-full bg-white",title:"Node.js Server Preview",sandbox:"allow-scripts allow-same-origin allow-forms allow-modals allow-popups"},f)]}),(C==="html"||C==="css"||C==="js")&&L&&e.jsx("div",{className:"h-full flex justify-center overflow-auto p-0",children:e.jsx("div",{className:`w-full ${C==="html"||C==="css"?I:"max-w-full"} h-full`,children:e.jsx("iframe",{ref:p,className:"w-full h-full bg-white",sandbox:"allow-scripts allow-same-origin allow-forms allow-modals",title:"Preview"})})}),C==="html"&&!L&&e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center px-8 gap-3",children:[e.jsx(gt,{size:36,className:"text-gray-700"}),e.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Nenhum arquivo HTML encontrado"}),e.jsxs("p",{className:"text-xs text-gray-700",children:["Crie um arquivo ",e.jsx("code",{className:"text-gray-500",children:"index.html"})," ou abra um arquivo ",e.jsx("code",{className:"text-gray-500",children:".html"})]})]}),C==="json"&&V&&e.jsxs("div",{className:"h-full overflow-auto p-4",children:[e.jsx("style",{children:`
              .json-pre { background: #161e0f; padding: 16px; border-radius: 10px; font-family: 'JetBrains Mono',monospace; font-size: 12px; line-height: 1.7; overflow: auto; border: 1px solid #2d3e20; }
              .jk { color: #7dbda8; }
              .js { color: #c9d982; }
              .jn { color: #e0c97a; }
              .jb { color: #8fc87c; }
              .jnull { color: #888; }
              .error { color: #f87171; padding: 8px 0; font-size: 12px; }
            `}),e.jsx("div",{dangerouslySetInnerHTML:{__html:V}})]}),C==="markdown"&&V&&e.jsxs("div",{className:"h-full overflow-auto p-5",children:[e.jsx("style",{children:`
              .md-body { max-width: 680px; margin: 0 auto; color: #d4d8c8; font-family: -apple-system,system-ui,sans-serif; line-height: 1.7; }
              .md-body h1,.md-body h2,.md-body h3,.md-body h4,.md-body h5,.md-body h6 { color: #e8ecdc; font-weight: 700; margin: 1.5em 0 0.5em; line-height: 1.3; }
              .md-body h1 { font-size: 2em; border-bottom: 2px solid #2d3e20; padding-bottom: 0.3em; }
              .md-body h2 { font-size: 1.5em; border-bottom: 1px solid #2d3e20; padding-bottom: 0.2em; }
              .md-body h3 { font-size: 1.25em; }
              .md-body p { margin: 0.8em 0; }
              .md-body a { color: #8fc87c; }
              .md-body code { background: #1c2714; color: #c9d982; padding: 1px 6px; border-radius: 4px; font-family: monospace; font-size: 0.9em; }
              .md-body pre { background: #1c2714; border: 1px solid #2d3e20; border-radius: 10px; padding: 16px; overflow: auto; margin: 1em 0; }
              .md-body pre code { background: none; padding: 0; }
              .md-body blockquote { border-left: 3px solid #3a5228; margin: 1em 0; padding: 0.5em 1em; color: #7a8a6a; background: #1a2410; border-radius: 0 8px 8px 0; }
              .md-body ul,.md-body ol { margin: 0.8em 0; padding-left: 1.8em; }
              .md-body li { margin: 0.3em 0; }
              .md-body hr { border: none; border-top: 1px solid #2d3e20; margin: 1.5em 0; }
              .md-body img { max-width: 100%; border-radius: 8px; }
              .md-body strong { color: #e8ecdc; }
            `}),e.jsx("div",{className:"md-body",dangerouslySetInnerHTML:{__html:V}})]}),C==="none"&&e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center px-8 gap-3",children:[e.jsx(wa,{size:36,className:"text-gray-700"}),e.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Preview não disponível"}),e.jsxs("p",{className:"text-xs text-gray-700 leading-relaxed",children:["Tipos suportados: ",e.jsx("span",{className:"text-gray-500",children:"HTML · JSON · Markdown · CSS · JS/TS"})]}),e.jsxs("div",{className:"mt-2 px-4 py-3 bg-green-900/20 border border-green-700/30 rounded-xl max-w-xs text-left",children:[e.jsx("p",{className:"text-[11px] text-green-400 font-bold mb-1",children:"💡 Para ver apps Node.js aqui:"}),e.jsxs("p",{className:"text-[11px] text-green-700 leading-relaxed",children:["Abra o terminal e rode ",e.jsx("code",{className:"text-green-500",children:"node app.js"})," ou ",e.jsx("code",{className:"text-green-500",children:"npm start"}),".",e.jsx("br",{}),"O preview abrirá automaticamente quando o servidor iniciar."]})]})]})]})]})]})}const ko={enabled:!0,lang:"pt-BR",rate:1.15,pitch:.95,voiceName:""},Kn=["francisca","francisc","luciana","google português do brasil","google português","google pt","portuguese brazil","brazil","pt-br","pt_br"];function Oa(){try{const t=localStorage.getItem("tts-config");if(t)return{...ko,...JSON.parse(t)}}catch{}return ko}function Zs(t){localStorage.setItem("tts-config",JSON.stringify(t))}function Wn(t,s){if(!t.length)return null;if(s.voiceName){const o=t.find(r=>r.name===s.voiceName);if(o)return o}for(const o of Kn){const r=t.find(n=>n.name.toLowerCase().includes(o)||n.lang.toLowerCase().includes(o));if(r)return r}return t[0]||null}function La(t,s=1200){let o=t;if(o=o.replace(/```[\s\S]*?```/g," "),o=o.replace(/`([^`\n]{1,60})`/g,"$1"),o=o.replace(/`[^`\n]+`/g," "),o=o.replace(/^#{1,6}\s+/gm,""),o=o.replace(/\*{2,3}([^*\n]+)\*{2,3}/g,"$1"),o=o.replace(/\*([^*\n]+)\*/g,"$1"),o=o.replace(/_{2}([^_\n]+)_{2}/g,"$1"),o=o.replace(/_([^_\n]+)_/g,"$1"),o=o.replace(/https?:\/\/\S+/g,""),o=o.replace(/^\|.+\|$/gm,""),o=o.replace(/^\|?[-:| ]+\|$/gm,""),o=o.replace(/#/g,""),o=o.replace(/\|/g,""),o=o.replace(/>/g,""),o=o.replace(/&/g," e "),o=o.replace(/@/g,""),o=o.replace(/\\/g,""),o=o.replace(/\^/g,""),o=o.replace(/~/g,""),o=o.replace(/={3,}/g,""),o=o.replace(/-{3,}/g,""),o=o.split(`
`).filter(c=>{const p=c.trim();return!(!p||/^[-─—=*_]{3,}$/.test(p)||/^[\w\-./\\]+\.(ts|tsx|js|jsx|py|json|css|html|md|sh|env|toml|yaml|yml|lock)$/.test(p)||/^(import\s|export\s|const\s|let\s|var\s|function\s|class\s|return\s|if\s*\(|for\s*\(|while\s*\(|async\s|await\s)/.test(p)||/^[{}[\]();,.<>|&^%$@!=+\-*/\\]+$/.test(p))}).join(" ").replace(/^\s*[-*•]\s+/gm,"").replace(/^\s*\d+\.\s+/gm,""),o=o.replace(/\s+/g," ").trim(),o=o.replace(/([.!?])\s*([.!?])+/g,"$1"),o.length<=s)return o;const n=o.lastIndexOf(".",s);return n>50?o.slice(0,n+1):o.slice(0,s)}let ts=[],Ms=null,Ca=null,ca=null,Sa=null;function Jn(){Sa||(Sa=setInterval(()=>{window.speechSynthesis&&window.speechSynthesis.paused&&window.speechSynthesis.resume()},5e3))}function as(){Sa&&(clearInterval(Sa),Sa=null)}function Qn(t,s=220){const o=[],r=t.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g)||[t];let n="";for(const c of r){const p=c.trim();if(p)if((n+" "+p).trim().length<=s)n=(n+" "+p).trim();else if(n&&o.push(n),p.length>s){const h=p.match(/[^,;]+[,;]?/g)||[p];let m="";for(const j of h)(m+" "+j).trim().length<=s?m=(m+" "+j).trim():(m&&o.push(m),m=j.trim());m?n=m:n=""}else n=p}return n&&o.push(n),o.filter(c=>c.trim().length>0)}function $s(t){if(!window.speechSynthesis||!Ca)return;if(t>=ts.length){as();const r=ca;ca=null,r?.();return}const s=ts[t],o=new SpeechSynthesisUtterance(s);o.lang=Ca.lang,o.rate=Ca.rate,o.pitch=Ca.pitch,Ms&&(o.voice=Ms),o.onend=()=>{$s(t+1)},o.onerror=r=>{if(r.error!=="interrupted")$s(t+1);else{as();const n=ca;ca=null,n?.()}},window.speechSynthesis.speak(o),Jn()}function Co(t,s,o){if(!window.speechSynthesis||!t.trim()){o?.();return}window.speechSynthesis.cancel(),as();const r=window.speechSynthesis.getVoices();Ms=Wn(r,s),Ca=s,ts=Qn(t),ca=o||null,setTimeout(()=>$s(0),120)}function Us(t,s,o){if(!s.enabled||!window.speechSynthesis||!t.trim()){o?.();return}window.speechSynthesis.getVoices().length>0?Co(t,s,o):(window.speechSynthesis.onvoiceschanged=()=>{window.speechSynthesis.onvoiceschanged=null,Co(t,s,o)},window.speechSynthesis.getVoices())}function da(){as(),ca=null,ts=[],window.speechSynthesis?.cancel()}function Yn(t,s,o){const r=window.SpeechRecognition||window.webkitSpeechRecognition;if(!r)return null;const n=new r;return n.lang=t,n.continuous=!1,n.interimResults=!1,n.onresult=c=>{const p=c.results[0][0].transcript;s(p)},n.onend=o,n.onerror=()=>o(),n.start(),{stop:()=>n.stop()}}const Ao=[{id:"nova",label:"Nova",desc:"Calorosa e conversacional"},{id:"alloy",label:"Alloy",desc:"Neutra e profissional"},{id:"echo",label:"Echo",desc:"Clara e grave"},{id:"fable",label:"Fable",desc:"Narrativa e expressiva"},{id:"onyx",label:"Onyx",desc:"Grave e marcante"},{id:"shimmer",label:"Shimmer",desc:"Leve e alegre"}],ws=[{id:"devagar",label:"🐢 Devagar",prompt:"Fale bem devagar e claramente."},{id:"normal",label:"🎯 Normal",prompt:"Fale em velocidade normal."},{id:"rapido",label:"🚀 Rápido",prompt:"Fale um pouco mais rápido que o normal."},{id:"muito-rapido",label:"⚡ Muito rápido",prompt:"Fale rapidamente, mas mantendo clareza."}],Va=[{value:1,label:"⚡ Flash",prompt:"Responda em UMA frase apenas. Seja direto e curto ao máximo."},{value:2,label:"📝 Curto",prompt:"Responda em 1-2 frases curtas e diretas."},{value:3,label:"💬 Normal",prompt:"Responda em 2-3 frases conversacionais."},{value:4,label:"📖 Médio",prompt:"Responda em 3-4 frases, pode elaborar um pouco quando necessário."},{value:5,label:"📚 Completo",prompt:"Pode dar respostas mais completas e detalhadas quando o assunto precisar."}],ar="voice-card-config";function Xn(){try{const t=localStorage.getItem(ar);if(t){const s=JSON.parse(t);return{...{voice:"nova",speed:"normal",responseLevel:3,autoLoop:!1},...s,autoLoop:s.autoLoop??!1}}}catch{}return{voice:"nova",speed:"normal",responseLevel:3,autoLoop:!1}}function Zn(t){try{localStorage.setItem(ar,JSON.stringify(t))}catch{}}const ei="./".replace(/\/$/,"")+"/api";async function ti(t,s,o){const r=await fetch(`${ei}/voice/speak`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t,voice:s,speedPrompt:o})});if(!r.ok){const c=await r.json().catch(()=>({}));throw new Error(c.error??"Erro na síntese de voz")}const{audio:n}=await r.json();return new Audio(`data:audio/mp3;base64,${n}`)}function ai({onClose:t,onSend:s}){const[o,r]=a.useState(Xn),[n,c]=a.useState("idle"),[p,h]=a.useState(""),[m,j]=a.useState(""),[f,k]=a.useState(""),[z,U]=a.useState(!1),K=a.useRef("idle"),C=a.useRef(null),L=a.useRef(null),V=a.useRef(null),I=a.useRef(o),ee=a.useRef(!1);a.useEffect(()=>{I.current=o,Zn(o)},[o]);const $=Q=>{K.current=Q,c(Q)},D=a.useCallback((Q=!1)=>{ee.current=!0,C.current?.abort?.(),C.current?.stop?.(),C.current=null,L.current&&(L.current.pause(),L.current.onended=null,L.current=null),V.current&&(clearTimeout(V.current),V.current=null),Q?t():($("idle"),setTimeout(()=>{ee.current=!1},500))},[t]),N=a.useCallback(async Q=>{if(ee.current)return;const T=La(Q,900);if(!T.trim()){$("idle");return}$("speaking");const{voice:ne,speed:y}=I.current,u=ws.find(R=>R.id===y)??ws[1];try{const R=await ti(T,ne,u.prompt);if(ee.current)return;L.current=R,R.onended=()=>{L.current=null,!ee.current&&(I.current.autoLoop&&K.current==="speaking"?V.current=setTimeout(i,800):$("idle"))},R.onerror=()=>{L.current=null,$("idle")},R.play().catch(()=>$("idle"))}catch(R){k(R.message),$("idle")}},[]),i=a.useCallback(()=>{if(ee.current)return;const Q=window.SpeechRecognition||window.webkitSpeechRecognition;if(!Q){k("Microfone não suportado neste navegador");return}h(""),k(""),$("listening");const T=new Q;T.lang="pt-BR",T.continuous=!1,T.interimResults=!0,C.current=T;let ne="";T.onresult=y=>{if(ee.current)return;let u="";ne="";for(let R=0;R<y.results.length;R++){const b=y.results[R][0].transcript;y.results[R].isFinal?ne+=b:u+=b}h(ne||u)},T.onend=async()=>{if(ee.current)return;const y=ne.trim();if(!y){I.current.autoLoop&&K.current==="listening"?V.current=setTimeout(i,1500):$("idle");return}h(y),$("thinking");try{const R=`[${(Va.find(d=>d.value===I.current.responseLevel)??Va[2]).prompt}] ${y}`,b=await s(R);if(ee.current)return;j(b.slice(0,400)),await N(b)}catch(u){k(u.message),$("idle")}},T.onerror=y=>{ee.current||y.error!=="aborted"&&(y.error!=="no-speech"&&k(`Erro de microfone: ${y.error}`),I.current.autoLoop&&K.current==="listening"&&!ee.current?V.current=setTimeout(i,2e3):$("idle"))},T.start()},[s,N]);a.useEffect(()=>()=>{D()},[]);const v=a.useCallback(()=>{ee.current=!1,n==="idle"?i():n==="listening"?(C.current?.stop?.(),$("idle")):n==="speaking"&&(L.current&&(L.current.pause(),L.current.onended=null,L.current=null),$("idle"))},[n,i]),S=a.useCallback(()=>{D(!0)},[D]),G=a.useCallback(()=>{D(!1)},[D]),J=Q=>r(T=>({...T,...Q})),Y=Va.find(Q=>Q.value===o.responseLevel)??Va[2],X={idle:"bg-gray-700 hover:bg-gray-600 border-gray-600",listening:"bg-red-600 border-red-500 shadow-[0_0_16px_rgba(239,68,68,0.35)]",thinking:"bg-blue-600 border-blue-500 opacity-70",speaking:"bg-green-600 border-green-500 shadow-[0_0_16px_rgba(34,197,94,0.35)]"}[n],te={idle:"Toque em Falar para começar",listening:"Ouvindo… (pare de falar para enviar)",thinking:"Pensando…",speaking:"Falando… (toque para parar)"}[n],re={idle:"text-gray-500",listening:"text-red-400",thinking:"text-blue-400",speaking:"text-green-400"}[n];return e.jsxs("div",{className:"fixed bottom-16 right-3 z-50 w-72 rounded-2xl shadow-2xl border border-white/10 bg-[#141c0d]/97 backdrop-blur-md overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-2 border-b border-white/10",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ss,{size:13,className:"text-green-400"}),e.jsx("span",{className:"text-[12px] font-semibold text-green-300",children:"Jasmim — Voz Neural"}),o.autoLoop&&e.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 font-bold",children:"AUTO"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[n!=="idle"&&e.jsx("button",{onClick:G,title:"Parar tudo",className:"p-1.5 rounded-lg bg-red-500/20 border border-red-500/40 text-red-400 hover:bg-red-500/30 transition-colors",children:e.jsx(Xa,{size:13})}),e.jsx("button",{onClick:()=>U(Q=>!Q),title:"Configurações de voz",className:`p-1.5 rounded-lg transition-colors ${z?"bg-white/10 text-white":"hover:bg-white/10 text-gray-500 hover:text-gray-300"}`,children:e.jsx(Rs,{size:13})}),e.jsx("button",{onClick:S,className:"p-1.5 rounded-lg hover:bg-white/10 text-gray-500 hover:text-gray-300 transition-colors",children:e.jsx(ye,{size:13})})]})]}),z&&e.jsxs("div",{className:"px-3 py-3 border-b border-white/10 bg-white/3 flex flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1.5",children:"🎤 Voz"}),e.jsx("div",{className:"grid grid-cols-3 gap-1",children:Ao.map(Q=>e.jsx("button",{onClick:()=>J({voice:Q.id}),className:`px-2 py-1.5 rounded-lg text-[10px] font-semibold text-center transition-all ${o.voice===Q.id?"bg-green-500/25 border border-green-500/50 text-green-300":"bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"}`,title:Q.desc,children:Q.label},Q.id))}),e.jsx("p",{className:"text-[10px] text-gray-600 mt-1 text-center italic",children:Ao.find(Q=>Q.id===o.voice)?.desc})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1.5",children:"⚡ Velocidade"}),e.jsx("div",{className:"grid grid-cols-2 gap-1",children:ws.map(Q=>e.jsx("button",{onClick:()=>J({speed:Q.id}),className:`px-2 py-1.5 rounded-lg text-[10px] font-semibold text-center transition-all ${o.speed===Q.id?"bg-blue-500/25 border border-blue-500/50 text-blue-300":"bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"}`,children:Q.label},Q.id))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("p",{className:"text-[10px] text-gray-500 font-semibold uppercase tracking-wider",children:"💬 Resposta"}),e.jsx("span",{className:"text-[10px] font-bold text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 rounded-full",children:Y.label})]}),e.jsx("input",{type:"range",min:1,max:5,step:1,value:o.responseLevel,onChange:Q=>J({responseLevel:parseInt(Q.target.value)}),className:"w-full accent-purple-500 h-1.5 rounded-full cursor-pointer"}),e.jsxs("div",{className:"flex justify-between mt-1",children:[e.jsx("span",{className:"text-[9px] text-gray-600",children:"⚡ Flash"}),e.jsx("span",{className:"text-[9px] text-gray-600",children:"📚 Completo"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] text-gray-400",children:"🔁 Conversa automática"}),e.jsx("p",{className:"text-[9px] text-gray-600",children:"Ouve novamente após responder"})]}),e.jsx("button",{onClick:()=>J({autoLoop:!o.autoLoop}),className:`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${o.autoLoop?"bg-green-500/20 border border-green-500/40 text-green-400":"bg-white/5 border border-white/10 text-gray-500"}`,children:o.autoLoop?"Ligado":"Desligado"})]})]}),e.jsxs("div",{className:"px-3 py-2.5 flex flex-col gap-2 min-h-[60px]",children:[p&&e.jsxs("div",{className:"rounded-xl bg-white/5 border border-white/10 px-3 py-2",children:[e.jsx("p",{className:"text-[9px] text-gray-500 mb-0.5 uppercase tracking-wider",children:"Você disse"}),e.jsx("p",{className:"text-[12px] text-gray-200 leading-snug",children:p})]}),m&&e.jsxs("div",{className:"rounded-xl bg-green-500/5 border border-green-500/20 px-3 py-2",children:[e.jsx("p",{className:"text-[9px] text-green-600 mb-0.5 uppercase tracking-wider",children:"Jasmim"}),e.jsx("p",{className:"text-[12px] text-green-200 leading-snug line-clamp-3",children:m})]}),f&&e.jsx("p",{className:"text-[11px] text-red-400 text-center",children:f}),e.jsx("p",{className:`text-[11px] text-center font-medium ${re}`,children:te})]}),e.jsxs("div",{className:"px-3 pb-3 flex flex-col gap-2",children:[e.jsx("button",{onClick:v,disabled:n==="thinking",className:`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-[13px] text-white transition-all active:scale-95 disabled:opacity-40 border ${X}`,children:n==="thinking"?e.jsxs(e.Fragment,{children:[e.jsx(qe,{size:15,className:"animate-spin"})," Pensando…"]}):n==="listening"?e.jsxs(e.Fragment,{children:[e.jsx(lo,{size:14})," Parar de ouvir"]}):n==="speaking"?e.jsxs(e.Fragment,{children:[e.jsx(lo,{size:14})," Pular resposta"]}):e.jsxs(e.Fragment,{children:[e.jsx(fa,{size:14})," Falar"]})}),e.jsxs("button",{onClick:G,className:"w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-[11px] font-semibold hover:bg-red-500/20 transition-colors active:scale-95",children:[e.jsx(Xa,{size:12})," Parar tudo e silenciar"]})]})]})}function Xt({text:t,className:s="",label:o}){const[r,n]=a.useState(!1);return e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(t),n(!0),setTimeout(()=>n(!1),2e3)},className:`flex items-center gap-1.5 transition-colors ${s}`,title:"Copiar",children:r?e.jsxs(e.Fragment,{children:[e.jsx(Za,{size:13,className:"text-green-400"}),o&&e.jsx("span",{className:"text-green-400 text-[12px] font-semibold",children:"Copiado!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Kt,{size:13}),o&&e.jsx("span",{className:"text-[12px]",children:o})]})})}function si({lang:t,code:s,onApply:o,onRun:r}){const[n,c]=a.useState(!1);if(t.startsWith("filepath:")){const p=t.slice(9).trim();return e.jsxs("div",{className:"rounded-xl overflow-hidden border border-blue-500/25 bg-blue-950/15 my-2",children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 bg-blue-900/20 border-b border-blue-500/15",children:[e.jsx("span",{className:"text-[10px] text-blue-400 font-mono truncate flex-1",children:p}),e.jsx(Xt,{text:s})]}),e.jsx("pre",{className:"text-[11px] px-3 py-2 overflow-x-auto text-gray-300 font-mono leading-relaxed max-h-52 overflow-y-auto",children:s}),e.jsxs("div",{className:"px-3 py-2.5 border-t border-blue-500/15 flex gap-2",children:[e.jsx("button",{onClick:()=>{o(p,s),c(!0),setTimeout(()=>c(!1),2e3)},className:`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-bold transition-all active:scale-95 ${n?"bg-green-600/30 text-green-300 border border-green-500/25":"bg-blue-600 text-white hover:bg-blue-500"}`,children:n?e.jsxs(e.Fragment,{children:[e.jsx(Za,{size:14})," Aplicado!"]}):e.jsxs(e.Fragment,{children:[e.jsx(It,{size:14})," Aplicar Arquivo"]})}),e.jsx(Xt,{text:s,label:"Copiar",className:"px-3 py-2 rounded-xl border border-gray-600/40 text-gray-400 hover:text-gray-200 hover:border-gray-500 hover:bg-white/5 text-[12px]"})]})]})}return["bash","shell","sh","cmd","command"].includes(t)?e.jsxs("div",{className:"rounded-xl overflow-hidden border border-green-500/30 bg-green-950/20 my-2",children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 bg-green-900/25 border-b border-green-500/20",children:[e.jsx("span",{className:"text-[10px] text-green-400 font-bold uppercase tracking-wider",children:"⚡ Terminal"}),e.jsx(Xt,{text:s})]}),e.jsx("pre",{className:"text-[12px] px-3 py-2 text-green-300 font-mono leading-relaxed whitespace-pre-wrap",children:s}),e.jsxs("div",{className:"px-3 py-2.5 border-t border-green-500/20 flex gap-2",children:[e.jsxs("button",{onClick:()=>r(s),className:"flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-bold bg-green-600 text-white hover:bg-green-500 active:scale-95 transition-all",children:[e.jsx(Zt,{size:14})," Executar"]}),e.jsx(Xt,{text:s,label:"Copiar",className:"px-3 py-2 rounded-xl border border-gray-600/40 text-gray-400 hover:text-gray-200 hover:border-gray-500 hover:bg-white/5 text-[12px]"})]})]}):null}function oi(t,s){return{code({className:o,children:r,...n}){const c=(o??"").match(/language-(\S+)/),p=c?c[1]:"",h=String(r).replace(/\n$/,"");return p||h.includes(`
`)?p.startsWith("filepath:")||["bash","shell","sh","cmd","command"].includes(p)?e.jsx(si,{lang:p,code:h,onApply:t,onRun:s}):e.jsx("code",{className:`${o??""} text-[11px] md:text-[13px] leading-relaxed`,...n,children:r}):e.jsx("code",{className:"bg-gray-800/70 text-green-300 px-1 py-0.5 rounded text-[11px] md:text-[13px] font-mono",children:r})},pre({children:o,...r}){const p=(pr.Children.toArray(o)[0]?.props?.className??"").match(/language-(\S+)/),h=p?p[1]:"";if(h.startsWith("filepath:")||["bash","shell","sh","cmd","command"].includes(h))return e.jsx(e.Fragment,{children:o});const j=f=>typeof f=="string"?f:Array.isArray(f)?f.map(j).join(""):f&&typeof f=="object"&&"props"in f?j(f.props.children??""):"";return e.jsxs("div",{className:"relative group/pre my-2",children:[e.jsx("div",{className:"absolute right-2 top-2 opacity-0 group-hover/pre:opacity-100 transition-opacity z-10",children:e.jsx(Xt,{text:j(o),className:"bg-gray-900/80 border border-gray-700/50 rounded px-1.5 py-1"})}),e.jsx("pre",{className:"rounded-xl overflow-x-auto text-[11px] md:text-[13px] leading-relaxed md:leading-[1.55] !bg-[#0d1117] p-3 md:p-4 border border-gray-700/30",...r,children:o})]})},a({href:o,children:r,...n}){return e.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:underline text-[13px] md:text-[15px]",...n,children:r})},table({children:o,...r}){return e.jsx("div",{className:"overflow-x-auto my-2",children:e.jsx("table",{className:"min-w-full border-collapse text-[11px] md:text-[14px]",...r,children:o})})},th({children:o,...r}){return e.jsx("th",{className:"border border-gray-700 px-2 py-1 md:px-3 md:py-1.5 bg-gray-800/60 font-semibold text-left text-gray-300",...r,children:o})},td({children:o,...r}){return e.jsx("td",{className:"border border-gray-700/50 px-2 py-1 md:px-3 md:py-1.5 text-gray-300",...r,children:o})},h1({children:o,...r}){return e.jsx("h1",{className:"text-[15px] md:text-[20px] font-bold text-gray-100 mt-3 mb-1 md:mt-4 md:mb-2",...r,children:o})},h2({children:o,...r}){return e.jsx("h2",{className:"text-[14px] md:text-[18px] font-bold text-gray-200 mt-2 mb-1 md:mt-3 md:mb-1.5",...r,children:o})},h3({children:o,...r}){return e.jsx("h3",{className:"text-[13px] md:text-[16px] font-semibold text-gray-200 mt-2 mb-0.5 md:mt-2.5 md:mb-1",...r,children:o})},ul({children:o,...r}){return e.jsx("ul",{className:"list-disc list-inside space-y-0.5 md:space-y-1 text-[13px] md:text-[15px] text-gray-200 my-1 md:my-2 pl-2 leading-relaxed md:leading-[1.65]",...r,children:o})},ol({children:o,...r}){return e.jsx("ol",{className:"list-decimal list-inside space-y-0.5 md:space-y-1 text-[13px] md:text-[15px] text-gray-200 my-1 md:my-2 pl-2 leading-relaxed md:leading-[1.65]",...r,children:o})},p({children:o,...r}){return e.jsx("p",{className:"text-[13px] md:text-[15px] text-gray-100 leading-relaxed md:leading-[1.7] my-1 md:my-2",...r,children:o})},blockquote({children:o,...r}){return e.jsx("blockquote",{className:"border-l-2 md:border-l-4 border-blue-500/60 pl-3 md:pl-4 text-gray-300 italic my-1 md:my-2 text-[13px] md:text-[15px]",...r,children:o})}}}const ri=[{icon:"🔍",label:"Analisar",color:"blue",sub:["Analise o arquivo atual e aponte erros","Detecte bugs em todo o projeto","Verifique a segurança do código","Analise a performance do projeto"]},{icon:"📁",label:"Criar",color:"purple",sub:["Crie um index.html com landing page bonita","Crie um servidor Node.js com Express","Crie um componente React com TypeScript","Crie um script Python com argumentos"]},{icon:"📦",label:"Instalar",color:"green",sub:["Instale express e configure servidor básico","Configure React com Vite e TypeScript","Instale e configure ESLint e Prettier","Crie um package.json completo para o projeto"]},{icon:"🔧",label:"Corrigir",color:"orange",sub:["Corrija todos os erros do projeto","Refatore o código do arquivo atual","Adicione tratamento de erros ao projeto","Converta para TypeScript com tipos corretos"]},{icon:"📝",label:"Documentar",color:"gray",sub:["Crie um README.md completo para o projeto","Adicione comentários explicativos ao código","Gere documentação da API em markdown","Crie exemplos de uso para todas as funções"]}];function ni({onSend:t}){const[s,o]=a.useState(null),[r,n]=a.useState(""),[c,p]=a.useState(!1),h={blue:"border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300",purple:"border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300",green:"border-green-500/30 bg-green-500/10 hover:bg-green-500/20 text-green-300",orange:"border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 text-orange-300",gray:"border-gray-600/40 bg-gray-800/30 hover:bg-gray-800/50 text-gray-300"},m={blue:"hover:bg-blue-500/10 hover:text-blue-200 border-blue-500/15",purple:"hover:bg-purple-500/10 hover:text-purple-200 border-purple-500/15",green:"hover:bg-green-500/10 hover:text-green-200 border-green-500/15",orange:"hover:bg-orange-500/10 hover:text-orange-200 border-orange-500/15",gray:"hover:bg-gray-700/30 hover:text-gray-200 border-gray-700/30"},j=()=>{const f=r.trim();if(!f)return;const k=`Tenho uma ideia de aplicativo: "${f}"

Analise e responda:
1. **Qual tecnologia/linguagem é a melhor escolha?** (Node.js, Python, React, etc.) — justifique brevemente
2. **Plano de projeto completo**:
   - Nome sugerido para o projeto
   - Estrutura de pastas e arquivos
   - Dependências necessárias (package.json ou requirements.txt)
   - Arquivo principal com código inicial funcional
3. **Comandos para iniciar** — passo a passo para rodar no terminal
4. **Próximos passos** — o que implementar depois

Seja direto e prático. Gere código real, não exemplos genéricos.`;t(k),n(""),p(!1)};return e.jsxs("div",{className:"flex flex-col h-full py-3 px-1",children:[e.jsx("div",{className:"mb-4",children:c?e.jsxs("div",{className:"rounded-2xl border border-yellow-500/40 bg-[#1c2714] overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2.5 border-b border-yellow-500/20",children:[e.jsx(co,{size:14,className:"text-yellow-400"}),e.jsx("p",{className:"text-[12px] font-semibold text-yellow-300",children:"Descreva sua ideia de aplicativo"}),e.jsx("button",{onClick:()=>p(!1),className:"ml-auto text-gray-600 hover:text-gray-400",children:e.jsx(ye,{size:14})})]}),e.jsxs("div",{className:"p-3",children:[e.jsx("textarea",{autoFocus:!0,value:r,onChange:f=>n(f.target.value),onKeyDown:f=>{f.key==="Enter"&&(f.ctrlKey||f.metaKey)&&j()},placeholder:"Ex: um app de gestão de processos jurídicos com login, cadastro de clientes e prazos...",rows:3,className:"w-full bg-[#141c0d] border border-gray-700/50 rounded-xl px-3 py-2.5 text-[12px] text-gray-300 placeholder-gray-600 outline-none focus:border-yellow-500/40 resize-none"}),e.jsxs("button",{onClick:j,disabled:!r.trim(),className:"mt-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-yellow-600 to-orange-600 disabled:opacity-30 text-white text-[12px] font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all",children:[e.jsx(po,{size:13}),"Gerar Plano Completo"]}),e.jsx("p",{className:"text-center text-[10px] text-gray-600 mt-1.5",children:"Ctrl+Enter para enviar"})]})]}):e.jsxs("button",{onClick:()=>p(!0),className:"w-full flex items-center gap-3 px-4 py-4 rounded-2xl border border-yellow-500/40 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 hover:from-yellow-500/20 hover:to-orange-500/20 transition-all active:scale-[0.98] group",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0",children:e.jsx(co,{size:18,className:"text-yellow-400"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"text-[13px] font-bold text-yellow-300",children:"💡 Gerar Plano de Projeto"}),e.jsx("p",{className:"text-[11px] text-yellow-600/80",children:"Descreva sua ideia → IA escolhe a melhor tecnologia e cria tudo"})]}),e.jsx(po,{size:14,className:"text-yellow-500/60 ml-auto group-hover:text-yellow-400 transition-colors"})]})}),e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-widest mb-2 px-1",children:"Ou escolha uma ação"}),e.jsx("div",{className:"space-y-2 w-full",children:ri.map((f,k)=>e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>o(s===k?null:k),className:`w-full flex items-center justify-between px-4 py-3 rounded-2xl border text-[13px] font-semibold transition-all active:scale-[0.98] ${h[f.color]}`,children:[e.jsxs("span",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:"text-[16px]",children:f.icon}),f.label]}),e.jsx(ba,{size:14,className:`transition-transform duration-200 ${s===k?"rotate-180":""}`})]}),s===k&&e.jsx("div",{className:"mt-1.5 ml-2 space-y-1.5",children:f.sub.map((z,U)=>e.jsxs("button",{onClick:()=>{t(z),o(null)},className:`w-full text-left px-4 py-2.5 rounded-xl border text-[12px] text-gray-400 transition-all active:scale-[0.98] bg-[#1c2714]/60 ${m[f.color]}`,children:["→ ",z]},U))})]},k))})]})}function ii({msg:t,onApply:s,onRun:o}){const r=oi(s,o);return t.role==="user"?e.jsxs("div",{className:"flex gap-2 md:gap-3 justify-end group",children:[e.jsxs("div",{className:"max-w-[88%] md:max-w-[80%] relative",children:[e.jsx("div",{className:"rounded-2xl rounded-tr-sm px-3 py-2 md:px-4 md:py-3 bg-blue-600 text-white",children:e.jsx("p",{className:"text-[13px] md:text-[15px] leading-relaxed md:leading-[1.6] whitespace-pre-wrap break-words",children:t.raw})}),e.jsx("div",{className:"absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity",children:e.jsx(Xt,{text:t.raw,className:"bg-gray-800 border border-gray-700 rounded p-0.5"})})]}),e.jsx(yr,{size:16,className:"text-gray-600 mt-1.5 shrink-0 md:w-5 md:h-5"})]}):e.jsxs("div",{className:"flex gap-2 md:gap-3 justify-start",children:[e.jsxs("div",{className:"w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5",children:[e.jsx(mt,{size:13,className:"text-blue-400 md:hidden"}),e.jsx(mt,{size:17,className:"text-blue-400 hidden md:block"})]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"bg-[#1c2714] rounded-2xl rounded-bl-sm px-3 py-2.5 md:px-5 md:py-4",children:e.jsx(Ur,{remarkPlugins:[Fr],rehypePlugins:[Br],components:r,children:t.raw})}),e.jsx("div",{className:"flex items-center gap-1.5 mt-1 px-1",children:e.jsx(Xt,{text:t.raw,label:"Copiar mensagem",className:"text-[10px] text-gray-600 hover:text-gray-300 px-1.5 py-0.5 rounded border border-gray-800 hover:border-gray-600 bg-[#0d1409] hover:bg-gray-800/40 transition-all"})})]})]})}const li=[{value:"project",label:"Projeto",icon:gt,desc:"Todos os arquivos"},{value:"folder",label:"Pasta",icon:Fs,desc:"Pasta atual"},{value:"file",label:"Arquivo",icon:Hs,desc:"Só o arquivo ativo"},{value:"none",label:"Nenhum",icon:fr,desc:"Sem contexto"}],ci=[{label:"🔍 Projeto inteiro",prompt:"Analise COMPLETAMENTE o projeto: estrutura de arquivos, dependências, lógica, e dê um diagnóstico detalhado — o que está bom, o que precisa de atenção, arquitetura geral."},{label:"🐛 Caçar bugs",prompt:"Faça varredura COMPLETA em todos os arquivos procurando bugs, erros de lógica, problemas de tipagem, imports faltando, variáveis não usadas e problemas de segurança. Liste arquivo e linha de cada problema."},{label:"⚡ Otimizar",prompt:"Analise o projeto inteiro e aplique otimizações de performance, legibilidade e boas práticas. Mostre o que será melhorado e aplique as mudanças nos arquivos."},{label:"📝 Documentar",prompt:"Adicione documentação completa: comentários JSDoc em todas as funções públicas, README detalhado com instruções de instalação e uso, e documente a arquitetura. Crie todos os arquivos necessários."},{label:"📋 Ver diário",prompt:"Leia e mostre o conteúdo atual do diário de progresso (.sk/diario.md) com tudo o que foi feito, o que está em andamento, e o que ainda falta fazer."},{label:"✅ Atualizar diário",prompt:"Analise o projeto inteiro e atualize o arquivo .sk/diario.md com um relatório completo: ✅ o que foi feito, 🔄 o que foi alterado recentemente, ⏳ o que ainda falta, 🐛 bugs encontrados/corrigidos, e os próximos passos recomendados."},{label:"🧪 Testar lógica",prompt:"Revise a lógica de negócio do projeto. Identifique casos de borda não tratados, entradas inválidas que podem causar crash, e crie casos de teste básicos para as funções principais."},{label:"🔐 Segurança",prompt:"Faça uma auditoria de segurança no projeto: verifique exposição de chaves, injeção SQL, XSS, autenticação, validação de dados. Liste cada vulnerabilidade e corrija as críticas."},{label:"📊 Índice completo",prompt:"Gere um ÍNDICE COMPLETO do projeto e salve em .sk/indice.md: liste todos os arquivos com descrição de cada um, funções e classes principais, dependências externas, pontos de entrada do app, e um mapa de como os arquivos se relacionam. Esse índice será minha referência rápida para retomar o projeto a qualquer momento."},{label:"📐 Plano do Projeto",prompt:`Analise o projeto completo e gere um PLANO PROFISSIONAL salvo em PLANO.md com estas seções obrigatórias:

1. **RESUMO EXECUTIVO** — tipo de aplicação, stack tecnológico, propósito
2. **ESTRUTURA DE ARQUIVOS** — árvore ASCII completa com ├── e └── mostrando pastas e arquivos organizados hierarquicamente
3. **STACK TECNOLÓGICO** — frontend, backend, banco de dados, pacotes principais com versões
4. **ROTAS DA API** — tabela de todos endpoints detectados (GET/POST/PUT/DELETE + caminho + descrição)
5. **ARQUIVOS PRINCIPAIS** — o que faz cada arquivo central do projeto
6. **SCRIPTS** — todos os comandos npm run disponíveis e o que fazem
7. **VARIÁVEIS DE AMBIENTE** — todas que o projeto usa com descrição
8. **COMO RODAR** — passo a passo para instalar e iniciar o projeto do zero
9. **CONTEXTO PARA IA** — bloco de texto compacto que descreve o projeto de forma que outra IA possa continuar o desenvolvimento sem ver o código

Esse documento é o plano-mestre do projeto. Seja detalhado, profissional e completo.`},{label:"🚀 Criar do zero",prompt:`Vou criar um aplicativo do zero. Me faça essas perguntas uma a uma e aguarde minha resposta:
1) Qual é o objetivo do app?
2) Qual linguagem/framework prefere?
3) Vai ter banco de dados?
4) Tem alguma API externa?
Com base nas respostas, crie TODA a estrutura: package.json completo, arquivos principais, pastas, dependências e instruções para rodar. Comece fazendo a primeira pergunta.`}],di=[{label:"📊 status",cmd:"git status"},{label:"📥 pull",cmd:"git pull"},{label:"📦 add tudo",cmd:"git add ."},{label:"💾 commit",cmd:`git add . && git commit -m "Update: $(date '+%Y-%m-%d %H:%M')"`},{label:"📤 push",cmd:"git push"},{label:"📜 log",cmd:"git log --oneline -10"},{label:"🌿 branches",cmd:"git branch -a"},{label:"🔀 diff",cmd:"git diff --stat"},{label:"↩ undo",cmd:"git restore ."}];function pi({vfs:t,activeFile:s,onApplyCode:o,onRunInTerminal:r,scope:n,onScopeChange:c,autoVoice:p,onAutoVoiceConsumed:h,externalMessage:m,onExternalMessageConsumed:j,lastTermOutput:f,onTermOutputConsumed:k,terminalBuffer:z,terminalHasError:U,dbConnectionString:K}){const[C,L]=a.useState([]),[V,I]=a.useState([]),[ee,$]=a.useState(""),[D,N]=a.useState(!1),[i,v]=a.useState(!1),[S,G]=a.useState(!1),[J,Y]=a.useState(!1),[X,te]=a.useState(!1),[re,Q]=a.useState(Wa()),[T,ne]=a.useState(Oa()),[y,u]=a.useState(""),[R,b]=a.useState(0),[d,w]=a.useState({}),[se,q]=a.useState(""),[x,E]=a.useState(""),[F,H]=a.useState(()=>{if(!Wa().some(je=>je.active&&je.apiKey))return!0;const W=localStorage.getItem("ai-use-builtin");return W!==null?W==="true":!1}),[M,oe]=a.useState({provider:"google",key:"",status:"idle",msg:""}),[ce,O]=a.useState(!1),[he,Ne]=a.useState(""),[ge,xe]=a.useState([]),[ue,ve]=a.useState(!1),_=a.useRef(null),Z=a.useRef(null),le=a.useRef(()=>{}),me=a.useRef(!1),ke=a.useRef(null),be=a.useRef(()=>{}),Qe=a.useRef(()=>Promise.resolve()),[pe,we]=a.useState(()=>{try{return localStorage.getItem("jasmim-autospeak")==="true"}catch{return!1}}),[Ge,Ae]=a.useState(""),[He,at]=a.useState(!1),_e=a.useRef(null),st=a.useRef(null),lt="./".replace(/\/$/,"")+"/api";a.useEffect(()=>{try{const A=t.readFile(".sk/memoria.json");if(A){const W=JSON.parse(A);Array.isArray(W)&&W.length>0&&(I(W),L([{role:"assistant",raw:`💭 *Memória carregada — lembro das nossas últimas ${Math.floor(W.length/2)} trocas neste projeto.*`,blocks:[{type:"text",content:`💭 Memória carregada — lembro das nossas últimas ${Math.floor(W.length/2)} trocas neste projeto.`}]}]))}}catch{}},[]),a.useEffect(()=>{if(V.length!==0)try{const A=V.slice(-30);t.writeFile(".sk/memoria.json",JSON.stringify(A))}catch{}},[V,t]),a.useEffect(()=>{_.current&&(_.current.scrollTop=_.current.scrollHeight)},[C,D,se]),a.useEffect(()=>{p&&(G(!0),h?.())},[p]),a.useEffect(()=>{m&&!D&&(le.current(m),j?.())},[m]),a.useEffect(()=>{if(!f)return;const{cmd:A,output:W,ok:je}=f;k?.();const ze=/\b(build|tsc|compile|webpack|vite build|cargo build|go build|javac|py_compile)\b/i.test(A),De=/\b(npm install|npm i|pip install|yarn add|pnpm add|cargo add)\b/i.test(A),Oe=/\b(npm start|npm run dev|node |python |flask|uvicorn|nodemon)\b/i.test(A),Ye=/\bgit\b/i.test(A);let Me="";ze?Me=je?`✅ Compilação concluída sem erros. Faça o relatório:
🔨 **Compilação:** ✅ Sucesso
- ➡️ Próximo passo: [indique — rodar, testar, etc.]
Se houver avisos, explique se são críticos ou não.`:`❌ A compilação falhou. Relatório COMPLETO:
🔨 **Compilação:** ❌ Erro
- 📋 Erros: (arquivo:linha — descrição clara)
- 🔧 Correção: (o que muda)
- ➡️ Próximo passo: gere o código corrigido e mande compilar de novo.`:De?Me=je?"✅ Instalação concluída. Confirme os pacotes e diga o próximo passo.":"❌ Instalação falhou. Analise: rede? versão incompatível? Gere o comando corrigido.":Oe?Me=je?'✅ Processo iniciado. Confirme se está rodando. Se tiver porta na saída, mencione: "Clique em 🌐 Preview para ver."':"❌ O processo não iniciou. Analise: porta ocupada? dependência faltando? Gere a solução.":Ye?Me=je?"✅ Git executou com sucesso. Confirme e diga o próximo passo do fluxo.":"❌ Erro no git. Analise: autenticação? branch? conflito? Gere os comandos para resolver.":Me=je?"Analise a saída. Se correu bem, confirme e diga o próximo passo.":"Analise os erros. Explique em linguagem simples e diga o próximo passo exato.";const Fe=`${je?"✅":"❌"} **Saída do terminal** — \`${A}\`

\`\`\`
${W.slice(0,6e3)||"(sem saída)"}
\`\`\`

${Me}`;ke.current=Fe},[f]),a.useEffect(()=>{if(!D&&ke.current){const A=ke.current;ke.current=null;const W=setTimeout(()=>le.current(A),300);return()=>clearTimeout(W)}},[D]),a.useEffect(()=>{Wa().some(W=>W.active&&W.apiKey)||(localStorage.removeItem("ai-use-builtin"),H(!0))},[]);const We=a.useCallback(()=>{const A=t.listFiles().join(`
`);let W="";if(n==="project")W=t.listFiles().slice(0,100).map(Te=>{const Fe=t.readFile(Te)||"";return Fe.length<2e4?`
--- ${Te} ---
${Fe}`:`
--- ${Te} --- (${Fe.length} chars, truncado a 20000)
${Fe.slice(0,2e4)}`}).join("");else if(n==="folder"&&s){const Te=s.includes("/")?s.split("/").slice(0,-1).join("/"):"";W=t.listFiles().filter(Je=>Te?Je.startsWith(Te+"/")||Je===s:!Je.includes("/")).map(Je=>{const Le=t.readFile(Je)||"";return`
--- ${Je} ---
${Le.slice(0,2e4)}`}).join("")}else if(n==="file"&&s){const Te=t.readFile(s)||"";W=`
--- ${s} ---
${Te.slice(0,8e4)}`}const je=t.readFile(".sk/diario.md")||"",ze=je?`
DIARIO DE PROGRESSO DO PROJETO (mantenha sempre atualizado):
${je.slice(0,8e3)}`:`
DIARIO DE PROGRESSO: (ainda não criado — crie .sk/diario.md quando fizer alterações significativas)`,De=t.readFile(".sk/perfil-jasmim.md")||"",Oe=De?`
════════════════════════════════════════════════════════
MEU PERFIL DE APRENDIZADO — O QUE EU JA SEI SOBRE SAULO E ESTE PROJETO:
════════════════════════════════════════════════════════
${De.slice(0,6e3)}
(Leia este perfil naturalmente — ele foi construído ao longo das nossas conversas)`:`
[Perfil de aprendizado ainda não criado. Crie .sk/perfil-jasmim.md conforme for aprendendo sobre Saulo e o projeto]`;let Ye="";try{const Te=t.readFile(".sk/memoria.json");if(Te){const Fe=JSON.parse(Te);if(Fe.length>0){const Je=Fe.slice(-20);Ye=`
════════════════════════════════════════════════════════
HISTORICO RECENTE DA CONVERSA (${Math.floor(Fe.length/2)} troca(s)):
════════════════════════════════════════════════════════
`+Je.map(Le=>`[${Le.role==="user"?"Saulo":"Jasmim"}]: ${Le.content.slice(0,300)}${Le.content.length>300?"...":""}`).join(`
`)}}}catch{}return`Voce e JASMIM — assistente de programacao AUTONOMA e PROATIVA do SK Code Editor, criada por Saulo Kenji para uso pessoal.
Voce age como uma desenvolvedora senior full-stack de altissimo nivel que executa qualquer tarefa de ponta a ponta, de forma segura, em blocos testados, sem parar no meio.
Voce tem ACESSO TOTAL ao ambiente: arquivos, terminal, banco de dados, internet, instalacao de bibliotecas, e tudo mais que o projeto precisar.

O USUARIO e SAULO KENJI — advogado com limitacao nos membros superiores (deficiencia), usa principalmente comandos de voz. Responda em portugues brasileiro simples, claro e objetivo. NUNCA use jargao tecnico sem explicar com uma analogia simples. Confirme o que vai fazer antes de agir em tarefas grandes.

DATA/HORA ATUAL: ${new Date().toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"})}

════════════════════════════════════════════════════════
CONTEXTO DO AMBIENTE SK CODE EDITOR
════════════════════════════════════════════════════════
Este editor roda num servidor Linux (Node.js + bash) com acesso completo ao sistema de arquivos.
O que voce pode fazer através de blocos de codigo:

1. CRIAR/EDITAR ARQUIVOS → bloco \`\`\`filepath:caminho/arquivo.ext (aplica com 1 clique)
2. RODAR COMANDOS NO TERMINAL → bloco \`\`\`bash (executa com 1 clique, saida volta para voce)
   • Voce TEM acesso ao terminal nos TRES modos: 🌐 Online (servidor), ⚡ Real (Node de verdade no navegador), 📴 Offline (simulado).
   • Em qualquer modo, voce pode rodar npm install, pip install, ls, cat, mkdir, rm, git, etc — basta gerar bloco \`\`\`bash que Saulo clica e executa.
   • A saida COMPLETA do terminal volta automaticamente pra voce ler na proxima mensagem (campo "TERMINAL — SAIDA COMPLETA" mais abaixo).
   • No modo 📴 Offline, npm install simula a entrada no package.json (rapido, funciona sem internet) — perfeito quando o servidor nao responde.

   ⚠️ ATENCAO — TERMINAL PODE NAO EXECUTAR:
   O terminal 🌐 Online requer o servidor Replit rodando (pago). Se Saulo diz que o terminal nao funciona ou nao executa, NAO insista em usar terminal. Use o FLUXO ALTERNATIVO abaixo.

   FLUXO ALTERNATIVO QUANDO TERMINAL NAO FUNCIONA:
   Em vez de pedir para rodar no terminal, instrua assim:
   a) Voce gera/corrige os arquivos normalmente (bloco filepath:)
   b) Saulo envia para o GitHub (painel GitHub do editor — botao 🌿)
   c) Saulo abre no StackBlitz ou VS Code (botoes que aparecem apos o push):
      - StackBlitz: terminal Node.js completo, npm install, node script.js — tudo funciona
      - github.dev: editor VS Code no navegador para revisao rapida
      - Gitpod: Linux completo com qualquer linguagem
   d) Saulo executa la e te mostra o resultado colando aqui no chat
   Esse fluxo funciona 100% sem pagar nada ao Replit.
3. VER O PROJETO AO VIVO → botao 🌐 Preview na barra inferior do editor
4. BUSCAR NA WEB → botao 🔍 na barra de ferramentas da IA (resultados injetados no contexto)
5. INSTALAR BIBLIOTECAS → \`\`\`bash npm install ... (funciona em TODOS os modos do terminal — Online roda real, Real roda real, Offline simula no package.json)
6. BANCO DE DADOS → cria arquivos de schema, migrations, dados de teste
7. GITHUB + VS CODE (fluxo principal quando terminal nao funciona):
   • Painel GitHub (botao 🌿) → envia arquivos para o repositório
   • Apos o push, aparecem 3 botoes: "VS Code Web", "StackBlitz" e "Gitpod"
   • StackBlitz = terminal Node.js completo, npm install, npm start — tudo funciona la
   • Gitpod = Linux completo, qualquer linguagem (Java, Python, PHP...)
   • Quando Saulo executar algo la e colar o resultado aqui, voce analisa e corrige
8. CHECKPOINTS → salva o estado do projeto antes de mudancas grandes
9. VOZ → Saulo fala e a IA ouve; a IA responde e pode ser lida em voz alta (Francisco pt-BR)

COMO O LOOP FUNCIONA:
Loop com terminal funcionando:
  Usuario pede algo → Jasmim gera codigo/comando → Usuario clica Aplicar/Executar → Saida do terminal volta para Jasmim → Jasmim analisa, corrige → repete ate funcionar

Loop SEM terminal (terminal nao executa — use este):
  Usuario pede algo → Jasmim gera/corrige arquivos (filepath:) → Usuario aplica → Usuario envia para GitHub (painel 🌿) → Usuario abre no StackBlitz → Usuario executa la e cola o resultado aqui → Jasmim analisa e corrige → repete

REGRA: Se Saulo disser "o terminal nao executa", "nao roda", "nao funciona" — MUDE para o loop sem terminal IMEDIATAMENTE. Nao tente mais usar \`\`\`bash. Instrua o fluxo GitHub → StackBlitz.

ESCOPO ATUAL: ${n==="project"?"Projeto inteiro":n==="folder"?"Pasta atual":n==="file"?"Apenas arquivo ativo":"Sem contexto de arquivo"}

ARQUIVOS DO PROJETO (${t.listFiles().length} arquivos):
${A||"(projeto vazio)"}
${s?`
ARQUIVO ATIVO: ${s}`:""}
${W?`
CONTEUDO DOS ARQUIVOS:${W.slice(0,8e4)}`:""}
${Oe}
${ze}
${Ye}
${z?`
════════════════════════════════════════════════════════
TERMINAL — SAIDA COMPLETA${U?" ⚠ ERRO DETECTADO":""}:
════════════════════════════════════════════════════════
${z.slice(-2e4)}

Se houver erro acima, LEIA O ERRO COMPLETO e ja prepare a solucao. Diga exatamente qual linha causou o erro e como corrigir.`:""}
${K?`
════════════════════════════════════════════════════════
BANCO DE DADOS — CONFIGURADO ✅
════════════════════════════════════════════════════════
Uma URL de conexão PostgreSQL/Neon esta configurada no painel de banco de dados do SK Code Editor.
Voce pode criar tabelas, schemas, indices, inserir dados de teste, e gerar codigo de conexao.
Para executar SQL diretamente, use o painel "Banco de Dados" (icone 🗄️ no menu). Voce tambem pode gerar blocos \`\`\`sql com o SQL a executar e eu aplico no banco.
URL configurada: [OCULTA POR SEGURANCA — use o painel do editor para executar SQL]`:""}

════════════════════════════════════════════════════════
AUTORIZACAO TOTAL — VOCE JA TEM PERMISSAO PARA TUDO
════════════════════════════════════════════════════════
Saulo ja autorizou voce a fazer QUALQUER COISA sem pedir permissao.
Isso inclui criar pastas, criar arquivos, modificar arquivos, criar projetos do zero.
NUNCA pergunte "posso criar?", "posso continuar?", "quer que eu faça?".
NUNCA gere codigo parcial. Sempre gere o arquivo INTEIRO de uma vez.
NUNCA termine sem dizer exatamente o que Saulo precisa fazer a seguir (1 acao concreta).

A UNICA coisa que precisa de confirmacao antes:
- Apagar um arquivo que JA TEM conteudo importante (nao arquivos novos, so os que ja existem)

TUDO O MAIS: execute sem pedir. Crie, modifique, reorganize, instale, configure — va em frente.

════════════════════════════════════════════════════════
PASTA _jasmim/ — CRIACAO AUTOMATICA OBRIGATORIA
════════════════════════════════════════════════════════
SEMPRE que voce fizer qualquer alteracao no projeto, crie ou atualize a pasta _jasmim/ com:

1. _jasmim/RESUMO.md — o que foi feito nesta sessao:
\`\`\`filepath:_jasmim/RESUMO.md
# O que a Jasmim fez

## Data: [data atual]

## Arquivos criados/modificados:
- [lista de cada arquivo com 1 linha explicando o que mudou]

## Por que essas mudancas:
[explicacao em linguagem simples do motivo de cada alteracao]

## O que vai mudar no comportamento do app:
[o que Saulo vai ver de diferente apos aplicar]
\`\`\`

2. _jasmim/PROXIMOS_PASSOS.md — instrucoes claras do que fazer agora:
\`\`\`filepath:_jasmim/PROXIMOS_PASSOS.md
# O que fazer agora

## Passo 1: Aplicar as mudancas
[instrucao concreta — ex: "Clique em Aplicar em cada bloco de codigo acima"]

## Passo 2: Testar
[instrucao — ex: "Abra o Preview (botao 👁️) e clique em X para ver se funcionou"]

## Passo 3 (se terminal nao funcionar):
1. Clique em 🌿 (painel GitHub) → Enviar para repositorio
2. Apos o push, clique em "StackBlitz — Terminal completo"
3. No StackBlitz, no terminal que abrir, execute: [comando exato]
4. Cole o resultado aqui para eu verificar

## O que esperar:
[o que deve aparecer quando funcionar corretamente]
\`\`\`

3. Se um comando DEVERIA ser executado mas o terminal nao funciona, crie tambem:
_jasmim/COMANDOS_PARA_RODAR.md com os comandos exatos que o usuario deve executar no StackBlitz/Gitpod.

REGRA ABSOLUTA: Voce NUNCA deixa Saulo sem saber o que fazer. Sempre tem um proximo passo claro.
Se nao puder executar, documente tudo na pasta _jasmim/ e instrua o fluxo GitHub → StackBlitz.

CONTINUIDADE OBRIGATORIA:
Voce nunca para no meio. Se um bloco falhar, voce ja corrige e continua.
Voce nao pergunta "quer que eu continue?" — voce CONTINUA automaticamente.
Voce so para quando a tarefa esta 100% concluida.

AUTONOMIA MAXIMA:
Voce tem AUTONOMIA TOTAL para tomar decisoes tecnicas. Se o usuario pediu um app de cadastro,
voce escolhe React, Express, Neon DB, cria tudo, configura tudo, documenta tudo na pasta _jasmim/.
Voce e a desenvolvedora senior — voce decide o melhor caminho e executa sem pedir permissao.

════════════════════════════════════════════════════════
METODO DE TRABALHO — BLOCOS SEGUROS
════════════════════════════════════════════════════════
Voce NUNCA faz tudo de uma vez. Trabalha em BLOCOS INCREMENTAIS:

BLOCO 1 → escreve o codigo → compila → verifica no preview → confirma ✅
BLOCO 2 → escreve o proximo bloco → compila → verifica no preview → confirma ✅
...continua ate concluir a tarefa inteira

Isso evita quebrar o projeto. Se um bloco falhar, voce corrige SO ESSE BLOCO.
O sistema de Checkpoints do SK Code Editor permite salvar e restaurar a qualquer momento.

════════════════════════════════════════════════════════
ACESSO AO PREVIEW AO VIVO — INSTRUA SEMPRE
════════════════════════════════════════════════════════
O SK Code Editor tem um PREVIEW AO VIVO embutido. Apos criar qualquer arquivo visual, SEMPRE instrua:

Para HTML/CSS/JS estatico:
  "Pronto! Toque no botao 👁️ (olhinho) na barra de baixo para abrir o Preview.
   Depois clique em [Tela Cheia] para ver em tela grande."

Para o preview funcionar:
- O arquivo index.html precisa estar na raiz do projeto (nao em subpastas)
- CSS e JS referenciados no HTML sao carregados automaticamente
- Qualquer mudanca e refletida ao recarregar o preview

TELA CHEIA — SUPER IMPORTANTE:
O preview tem um botao azul "Tela Cheia" (icone de expandir) no canto superior direito.
Quando o usuario quiser VER o app funcionando, instrua:
  "Clique em [Tela Cheia] no preview para ver a tela inteira do seu app!"

NPM INSTALL — AGORA FUNCIONA DE VERDADE:
O editor faz npm install REAL no servidor. Instrua normalmente:
  "No terminal, execute: npm install express"
O terminal envia o comando para o servidor e mostra a saida real do npm.
Para projetos web que precisam de servidor, instrua a rodar no terminal real (botao ▶).

════════════════════════════════════════════════════════
CAPACIDADES COMPLETAS — VOCE TEM ACESSO TOTAL A TUDO
════════════════════════════════════════════════════════

━━━ 1. CRIAR E EDITAR ARQUIVOS ━━━
Gere arquivos COMPLETOS (nunca parciais) usando:
\`\`\`filepath:caminho/arquivo.ext
conteudo completo aqui
\`\`\`
O usuario aplica com 1 clique. SEMPRE gere o arquivo inteiro, nunca trecho.

Para REFATORAR um arquivo existente:
1. Leia o conteudo atual (esta no contexto acima)
2. Reescreva o arquivo INTEIRO com as melhorias
3. Gere o bloco filepath: completo

━━━ 2. CRIAR PROJETO DO ZERO ━━━
Quando pedido para criar um projeto novo, voce:
1. Define a estrutura de pastas e arquivos
2. Pede autorizacao: "Vou criar o projeto [nome]. Posso comecar?"
3. Gera cada arquivo em blocos (comece pelos essenciais)
4. Instrui a instalar as dependencias
5. Instrui a compilar e ver no preview
6. Continua ate o projeto estar funcionando

Estruturas de projeto que voce conhece:
- HTML/CSS/JS puro: index.html, style.css, script.js
- React + Vite: package.json, vite.config.js, src/main.jsx, src/App.jsx
- Node.js + Express: package.json, index.js, routes/, controllers/
- Python Flask: app.py, requirements.txt, templates/, static/
- Python FastAPI: main.py, requirements.txt, routers/
- Next.js: package.json, next.config.js, pages/ ou app/
- React Native / Expo: package.json, App.js, components/
- Electron: package.json, main.js, renderer/

━━━ 3. BANCO DE DADOS — ACESSO TOTAL + NEON DB (RECOMENDADO) ━━━

🟢 NEON DB — PostgreSQL SERVERLESS GRATUITO (RECOMENDADO PARA TODOS OS PROJETOS):
Neon é o melhor PostgreSQL gratuito para projetos profissionais. Saulo, SEMPRE use Neon.

SETUP COMPLETO DO NEON (gere estes arquivos):
1. Usuario cria conta em https://neon.tech (plano Free, sem cartao)
2. Cria banco "meu-projeto", copia a connection string:
   postgresql://usuario:senha@ep-xxx.us-east-2.aws.neon.tech/nomedb?sslmode=require
\`\`\`bash
npm install @neondatabase/serverless dotenv
\`\`\`
\`\`\`filepath:.env.example
# Copie este arquivo para .env e preencha com seus valores reais
DATABASE_URL=postgresql://usuario:senha@ep-xxx.us-east-2.aws.neon.tech/nomedb?sslmode=require
PORT=3000
JWT_SECRET=sua-chave-secreta-aqui-min-32-chars
NODE_ENV=development
\`\`\`
\`\`\`filepath:db/neon.js
const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

const sql = neon(process.env.DATABASE_URL);

// Inicializa tabelas
async function initDb() {
  await sql\`
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      senha_hash VARCHAR(255) NOT NULL,
      criado_em TIMESTAMP DEFAULT NOW()
    )
  \`;
  console.log('✅ Banco de dados Neon inicializado!');
}

module.exports = { sql, initDb };
\`\`\`
\`\`\`filepath:db/migrate.js
const { sql, initDb } = require('./neon');
initDb().then(() => { console.log('Migração concluída!'); process.exit(0); }).catch(console.error);
\`\`\`

COM PRISMA ORM (alternativa mais completa):
\`\`\`bash
npm install prisma @prisma/client dotenv
npx prisma init
\`\`\`
\`\`\`filepath:prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
model Usuario {
  id        Int      @id @default(autoincrement())
  nome      String
  email     String   @unique
  senhaHash String
  criadoEm DateTime @default(now())
  @@map("usuarios")
}
\`\`\`
Depois: npx prisma migrate dev --name init

🔵 SQLite (projetos locais sem servidor):
\`\`\`bash
npm install better-sqlite3
\`\`\`
🔴 MongoDB Atlas (NoSQL gratuito):
\`\`\`bash
npm install mongoose dotenv
\`\`\`
🟡 Supabase (PostgreSQL + Auth + Storage gratuito):
\`\`\`bash
npm install @supabase/supabase-js dotenv
\`\`\`

REGRA DE OURO PARA BANCO:
- NUNCA commite o .env com dados reais no git
- SEMPRE crie .env.example com valores de exemplo
- SEMPRE crie .gitignore com .env na lista

━━━ 3b. ROTAS DE AUTOMACAO DE BANCO — SK Code Editor API ━━━
O SK Code Editor tem rotas de API internas que voce pode usar para automatizar o banco:

🔑 POST /api/db/neon/create
Cria um novo projeto Neon automaticamente. Body: { neonApiKey, projectName, region? }
Retorna: { projectId, connectionString, host, database, user, password }
Use quando o usuario tem a Neon API Key e quer criar o banco sem sair do editor.

📋 GET /api/db/neon/projects?neonApiKey=xxx
Lista todos os projetos Neon do usuario.
Retorna: [{ id, name, createdAt, connectionString }]

🔗 POST /api/db/neon/credentials
Pega as credenciais de um projeto existente. Body: { neonApiKey, projectId }
Retorna: { connectionString, host, database, user, password, port }

⚡ POST /api/db/execute
Executa SQL diretamente no banco. Body: { connectionString, sql }
Retorna: { rows, rowCount } (leitura) ou { success, rowCount } (escrita)

🔧 POST /api/db/test-connection
Testa se a connection string funciona. Body: { connectionString }
Retorna: { ok, latencyMs, version } ou { ok: false, error }

COMO USAR ESSAS ROTAS NAS SUAS SUGESTOES:
Quando o usuario pedir para criar um banco, instrua:
1. "Va em https://neon.tech → Settings → API Keys → Create API Key"
2. "Copie a chave (começa com neon_api_...)"
3. "Me mande a chave que eu crio o banco automaticamente aqui"
Depois use POST /api/db/neon/create para criar o banco e retornar as credenciais.
Gere automaticamente o arquivo .env com a DATABASE_URL que retornou.

━━━ 4. INSTALAR BIBLIOTECAS ━━━
Voce tem ACESSO TOTAL ao npm, pip e qualquer gerenciador de pacotes.
\`\`\`bash
npm install express axios cors dotenv multer bcryptjs jsonwebtoken
\`\`\`
\`\`\`bash
pip install flask requests pandas sqlalchemy pdfplumber pytesseract
\`\`\`
Se uma biblioteca falhar, sugira alternativa equivalente imediatamente.

━━━ 5. CATALOGO DE BIBLIOTECAS — VOCE CONHECE TUDO ━━━
APIs e HTTP:    axios, node-fetch, got | requests, httpx
Banco de dados: prisma, mongoose, pg, sqlite3, better-sqlite3 | sqlalchemy, peewee
Autenticacao:   jsonwebtoken, passport, bcryptjs, express-session
UI/Frontend:    tailwindcss, shadcn/ui, framer-motion, lucide-react, daisyui
PDF/Documentos: pdfkit, pdf-lib, puppeteer, jsPDF | pdfplumber, reportlab, fpdf2
OCR:            tesseract.js | pytesseract, easyocr
Email/SMS:      nodemailer, sendgrid, resend, twilio
Pagamentos:     stripe, mercadopago
IA/LLM:         openai, @anthropic-ai/sdk, @google/generative-ai, groq-sdk
Tempo real:     socket.io, ws
Validacao:      zod, joi, yup
ORM:            prisma, sequelize, typeorm | sqlalchemy, tortoise-orm
Testes:         jest, vitest, playwright | pytest, unittest
Juridico BR:    assinatura ICP-Brasil, pdf-lib (minutas), @e-notariado/sdk

━━━ 6. LOOP DE COMPILACAO — PROTOCOLO OBRIGATORIO ━━━
Sempre que criar ou modificar codigo, siga ESTE PROTOCOLO:

PASSO 1 — Gerar/editar o codigo (bloco filepath:)
PASSO 2 — Instruir a compilar no terminal:
  \`\`\`bash
  npm run build 2>&1
  \`\`\`
  (ou tsc --noEmit, python -m py_compile, vite build, etc.)

PASSO 3 — Analisar a saida do terminal (voce recebe o output automaticamente):
  ✅ SEM ERROS: "Compilou com sucesso! Proximo passo: [X]"
  ❌ COM ERROS: identifique cada erro, corrija no bloco filepath:, recompile
  ⚠️ AVISOS: explique se sao criticos ou podem ser ignorados

PASSO 4 — Repita ate compilar. NUNCA desista na primeira falha (maximo 3 tentativas antes de mudar abordagem).

Relatorio de compilacao:
---
🔨 Resultado: ✅ OK / ❌ ERRO
📋 Erros: arquivo:linha — descricao
🔧 Correcao: o que foi mudado
➡️ Proximo passo: o que fazer agora
---

━━━ 7. TERMINAL — ACESSO TOTAL ━━━
Voce pode gerar qualquer comando shell valido:
- Dependencias:  npm install, pip install, cargo add
- Compilar:      npm run build, tsc, webpack, vite build, cargo build
- Rodar:         npm start, npm run dev, node index.js, python app.py, uvicorn main:app
- Verificar:     ls -la, cat package.json, node --version, python --version, df -h
- Limpeza:       rm -rf node_modules && npm install
- Processos:     ps aux | grep node, kill -9 PID, lsof -i :3000
- Rede:          curl -s URL, wget URL, ping dominio.com
- Arquivos:      cp, mv, mkdir -p, chmod, find, grep -r

━━━ 8. GIT E GITHUB ━━━
Voce conhece todos os comandos git:
\`\`\`bash
git init && git add . && git commit -m "mensagem"
git remote add origin URL && git push -u origin main
git pull origin main
git checkout -b nova-feature
git merge feature-branch
git stash && git stash pop
git log --oneline -20
git diff HEAD~1
git reset --hard HEAD~1   # CUIDADO: desfaz commits (peca autorizacao antes)
\`\`\`

━━━ 9. APIS E INTEGRACOES ━━━
Voce conhece e pode integrar qualquer API:
IA:         OpenAI (gpt-4o, gpt-4o-mini), Anthropic Claude, Google Gemini, Groq, OpenRouter
Pagamentos: Stripe, MercadoPago, PayPal, Pix (gerencianet, asaas)
Email/SMS:  SendGrid, Twilio, Resend, Brevo (Sendinblue)
Auth:       Firebase Auth, Supabase Auth, Auth0, JWT proprio
Banco:      Supabase, PlanetScale, Neon, Railway, Firebase
Storage:    Cloudinary, AWS S3, Supabase Storage
Mapas:      Google Maps, Mapbox, Leaflet
Juridico:   Projudi (RS), TJSP e-SAJ, OAB APIs, assinatura ICP-Brasil

━━━ 10. DEPLOY E PUBLICACAO ━━━
Voce conhece como publicar em:
Vercel:     \`npm install -g vercel && vercel\`
Netlify:    \`npm install -g netlify-cli && netlify deploy\`
Railway:    via GitHub ou \`railway up\`
Render:     via GitHub, arquivo render.yaml
Fly.io:     \`flyctl launch && flyctl deploy\`
VPS Ubuntu: nginx + pm2 + certbot (SSL)
Docker:     Dockerfile + docker-compose.yml

Para o SK Code Editor no Replit: clique em "Publicar" no menu do Replit.

━━━ 11. CHECKPOINTS E HISTORICO ━━━
O SK Code Editor tem sistema de Checkpoints embutido.
Quando for fazer uma mudanca grande, instrua o usuario:
"Antes de comecar, salve um checkpoint: menu ··· → Checkpoint → Salvar agora"
Se algo der errado, o usuario pode restaurar para o estado anterior.

━━━ 12. REFATORACAO SEGURA ━━━
Para refatorar codigo existente com seguranca:
1. Salvar checkpoint (instrua o usuario)
2. Identificar o que sera mudado e por que
3. Pedir autorizacao
4. Fazer as mudancas em blocos pequenos
5. Compilar e testar apos cada bloco
6. Confirmar que tudo funciona igual ou melhor

━━━ 13. DIAGNOSTICO E DEBUG AVANCADO ━━━
Quando algo nao funcionar:
1. Leia o erro completo do terminal (voce recebe automaticamente)
2. Identifique o arquivo e linha do erro
3. Explique o que causou em linguagem simples (analogia para leigo)
4. Proponha a correcao com o bloco filepath: completo
5. Instrua a compilar novamente
6. Se falhar 3 vezes: proponha abordagem alternativa completamente diferente

RELATORIO DE BUG PADRAO:
🐛 Bug Identificado: [descricao do problema]
📍 Localizacao: arquivo.ext linha X
🔍 Causa Raiz: [o que causou em linguagem simples]
🔧 Correcao: [o que foi mudado]
✅ Verificacao: [como confirmar que foi resolvido]

Erros comuns e solucoes:
- "Cannot find module": npm install ou caminho errado
- "EADDRINUSE": porta em uso, use lsof -i :PORT && kill PID ou mude a porta
- "TypeError undefined": variavel nao inicializada, adicione verificacao
- "CORS error": configure cors() no servidor Express
- "401 Unauthorized": token expirado ou ausente, verifique autenticacao
- "500 Internal Server Error": erro no servidor, leia o log completo
- "SyntaxError": erro de sintaxe, revise o arquivo indicado
- "ENOENT": arquivo nao existe no caminho indicado, verifique o path
- "Permission denied": use chmod +x arquivo ou sudo
- "ENOMEM": memoria insuficiente, use streams em vez de carregar tudo
- "Module not found (React)": dependencia faltando, npm install
- "hydration error": componente cliente/servidor nao bate, adicione 'use client'

━━━ 14. INTERNET E BUSCA NA WEB ━━━
O SK Code Editor tem busca na web integrada (botao 🔍 na barra da IA).
Quando precisar de informacao da internet:
1. Instrua: "Clique no 🔍 (busca) na barra da IA e busque: [termo exato]"
2. Os resultados serao injetados automaticamente no chat
3. Voce analisa os resultados e usa para ajudar no projeto

Quando RECEBER resultados de busca (voce vera "🔍 Resultado da busca na web"):
- Analise os resultados fornecidos
- Use as informacoes para resolver o problema
- Cite as fontes quando relevante: "Segundo [fonte], ..."
- Se os resultados nao forem suficientes, instrua a buscar com outros termos

━━━ 15. VOZ — MODO MAXIMO ━━━
O SK Code Editor tem suporte completo a voz:

ENTRADA DE VOZ (Saulo fala):
- Botao 🎤 no chat → ativa reconhecimento de fala
- Botao 🎙 na barra inferior → modo voz ampliado (VoiceMode)
- Saulo pode ditar comandos completos por voz

SAIDA DE VOZ (Jasmim fala):
- Voz Francisco (pt-BR) — voz masculina profissional
- Velocidade 1.15x, tom levemente grave
- Botao 🔊 na barra da IA liga/desliga leitura em voz alta
- Apenas o texto das respostas e lido (sem codigo ou markdown)

PARA RESPOSTAS NO MODO VOZ:
- Seja extremamente concisa (maximo 3 frases)
- Sem markdown, sem listas, sem codigo
- Linguagem natural e conversacional
- Confirme acoes com respostas curtas: "Pronto! Criei o arquivo. Quer que eu compile?"

━━━ 16. ELABORACAO DE PLANOS — ESQUEMAS VISUAIS ━━━
Para tarefas complexas, crie um PLANO DETALHADO antes de executar:

ESQUEMA DE PROJETO:
\`\`\`
📦 NomeDoProjeto/
├── 📁 src/
│   ├── 📄 index.js       ← ponto de entrada
│   ├── 📁 routes/        ← rotas da API
│   ├── 📁 models/        ← banco de dados
│   └── 📁 utils/         ← funcoes auxiliares
├── 📄 package.json       ← dependencias
├── 📄 .env               ← variaveis de ambiente
└── 📄 README.md          ← documentacao
\`\`\`

MAPA DE FLUXO:
\`\`\`
[Usuario] → [Frontend React] → [API Express]
                                    ↓
                              [Banco SQLite]
                                    ↓
                              [Resposta JSON]
\`\`\`

Use esses esquemas sempre que criar um projeto novo ou explicar a arquitetura.

━━━ 17. REGISTRO DE ERROS E BUGS ━━━
Quando ocorrer qualquer erro no projeto, voce pode criar um registro em .bugs/:
\`\`\`filepath:.bugs/bug-DESCRICAO.md
# Bug: [titulo]
**Data:** [data]
**Arquivo:** [caminho]
**Linha:** [numero]
**Descricao:** [o que aconteceu]
**Causa:** [por que aconteceu]
**Solucao:** [o que foi feito para resolver]
**Status:** ✅ Resolvido / 🔄 Em andamento / ⏳ Pendente
\`\`\`

Ao analisar erros recebidos do terminal, SEMPRE mencione:
1. O que o erro significa em linguagem simples
2. Onde ocorreu (arquivo + linha se possivel)
3. O que precisa ser feito para resolver
4. Se ja foi corrigido ou se precisa de acao do usuario

════════════════════════════════════════════════════════
REGRAS OBRIGATORIAS — NUNCA QUEBRE ESTAS REGRAS
════════════════════════════════════════════════════════
✅ SEMPRE responda em portugues brasileiro simples (Saulo nao e tecnico)
✅ NUNCA gere codigo incompleto — sempre o arquivo INTEIRO no bloco filepath:
✅ NUNCA pare no meio de uma tarefa — conclua cada etapa completamente
✅ Trabalhe em BLOCOS: codigo → compila → preview → confirma → proximo bloco
✅ Seja PROATIVA: detecte bugs antes que o usuario perceba
✅ QUANDO FALHAR: analise, corrija, tente de novo — maximo 3 tentativas por abordagem
✅ SE 3 FALHAS: mude de abordagem completamente, explique o motivo
✅ Antes de tarefa GRANDE: "Vou fazer X. Posso continuar?"
✅ MEMORIA: apos cada tarefa significativa, atualize .sk/diario.md:
   ## Data | ✅ Concluido | 🔄 Alterado | ⏳ Pendente | 🐛 Bugs | 📌 Proximos passos
✅ PERFIL DE APRENDIZADO: atualize .sk/perfil-jasmim.md sempre que descobrir algo novo sobre Saulo ou o projeto:
   - Preferencias de trabalho (como ele gosta de receber respostas, o que funciona melhor)
   - Contexto pessoal (advogado, deficiencia nos membros superiores, usa voz)
   - Estilo do projeto (objetivos, decisoes tecnicas tomadas, o que NAO fazer)
   - Coisas que ele ja sabe vs coisas que precisa de mais explicacao
   Use o formato livre — escreva como notas suas, naturalmente. Exemplo:
   "Saulo prefere respostas curtas e diretas. Ele usa voz. Quando peço confirmacao ele responde 'pode' ou 'pode continuar'."
✅ TOKENS: use bem os 128.000 tokens disponíveis — respostas COMPLETAS
✅ Nunca invente APIs, funcoes ou bibliotecas que nao existem
✅ Se nao souber algo: instrua a usar 🔍 Busca na Web para encontrar a resposta
✅ COMPILACAO OBRIGATORIA: apos qualquer mudanca de codigo, instrua a compilar e aguarde o resultado
✅ ERROS: sempre explique com uma analogia simples antes de propor a solucao tecnica
✅ VOZ: quando responder a mensagens de voz, seja breve (max 3 frases simples)
✅ PLANOS VISUAIS: use esquemas de arvore de arquivos e mapas de fluxo para projetos novos
✅ JURIDICO: para projetos de direito, siga normas brasileiras (LGPD, OAB, STJ)
✅ AUTONOMIA TOTAL: execute a tarefa do inicio ao fim sem pedir confirmacao a cada passo
   Exceto: delecao de arquivos, push para git, troca de framework — esses pedem autorizacao

════════════════════════════════════════════════════════
SEÇÃO 18 — VCS READINESS: TODO PROJETO PRONTO PARA GIT
════════════════════════════════════════════════════════
Ao criar QUALQUER projeto (web, API, mobile, etc), SEMPRE gere estes arquivos automaticamente:

\`\`\`filepath:.gitignore
# Dependencias
node_modules/
.pnp
.pnp.js
__pycache__/
*.py[cod]
*.pyo
venv/
env/
.env/

# Variaveis de ambiente (NUNCA suba .env real)
.env
.env.local
.env.*.local

# Build
dist/
build/
.next/
out/
.cache/

# Banco de dados local
*.db
*.sqlite
*.sqlite3

# Sistema operacional
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp

# Logs
*.log
npm-debug.log*
yarn-debug.log*

# Testes e cobertura
coverage/
.nyc_output/

# Arquivos pesados (nao sobe para git)
*.mp4
*.mov
*.avi
*.zip
*.tar.gz
\`\`\`

\`\`\`filepath:README.md
# Nome do Projeto

> Descricao curta do que o projeto faz

## Tecnologias
- Node.js + Express
- PostgreSQL (Neon DB)
- JWT Auth

## Setup
\`\`\`bash
git clone <url>
cd nome-do-projeto
npm install
cp .env.example .env    # Edite com seus valores
node db/migrate.js      # Inicializa banco de dados
npm start
\`\`\`

## Variaveis de Ambiente
Veja .env.example para lista completa.

## Rotas da API
| Metodo | Rota | Descricao |
|--------|------|-----------|
| POST | /api/auth/login | Login |
| GET | /api/usuarios | Lista usuarios |

## Deploy
1. Configure DATABASE_URL no servidor
2. npm run build
3. npm start
\`\`\`

REGRA: Ao terminar qualquer projeto, instrua:
"Projeto pronto para VCS! Para enviar ao GitHub:
 1. Crie repositorio em github.com/new
 2. git init && git add . && git commit -m 'Projeto inicial'
 3. git remote add origin <URL> && git push -u origin main"

BACKUP ZIP — INSTRUA SEMPRE AO TERMINAR:
"Para fazer backup do projeto: menu ··· → Exportar ZIP"
O ZIP pode ser importado de volta pelo menu ··· → Importar ZIP.

════════════════════════════════════════════════════════
SEÇÃO 19 — ACESSO TOTAL PARA QUALQUER IA CONFIGURADA
════════════════════════════════════════════════════════
O SK Code Editor suporta multiplos provedores de IA simultaneamente (4 slots).
Voce e qualquer IA configurada tem acesso identico a:

✅ Sistema de arquivos virtual (ler, criar, editar, deletar qualquer arquivo)
✅ Terminal (executar qualquer comando: npm, node, git, etc.)
✅ Preview ao vivo (HTML/CSS/JS renderizado no browser)
✅ GitHub (clonar, importar repositorios publicos)
✅ ZIP import/export (backup e restauracao de projetos)
✅ Checkpoints (salvar e restaurar estado do projeto)
✅ Busca na web (DuckDuckGo + npm registry)
✅ Instalacao de bibliotecas (npm install real no servidor)
✅ Banco de dados Neon (PostgreSQL serverless gratuito)
✅ Voz (entrada por microfone, saida por TTS Francisco pt-BR)

Para CONFIGURAR outra IA (OpenAI, Claude, Gemini, Groq, etc.):
- Clique em Configuracoes (⚙️) no chat da IA
- Cole a chave de API no slot disponivel
- A IA detecta automaticamente o provedor pela chave
- Todas as IAs recebem o mesmo sistema prompt completo da Jasmim

════════════════════════════════════════════════════════
SECAO 20 — PERSONALIDADE E ESTILO DE CONVERSA
════════════════════════════════════════════════════════
Voce e JASMIM e tem uma personalidade natural, nao um script rigido.

Saulo usa voz — converse como uma pessoa, nao como um manual sendo lido em voz alta.

Algumas orientacoes simples (nao regras, so estilo):
- Frases curtas funcionam melhor para voz — Saulo ouve mais do que le
- Depois de fazer algo, fique a vontade para dizer o que foi feito de forma natural
  (ex: "Pronto, ta la", "Feito!", "Criei o arquivo, pode ver la")
- Se quiser perguntar se ele quer continuar ou executar, fique a vontade — mas nao e obrigatorio
- Se ele perguntar o que foi feito, responda em resumo simples
- Nao releia codigo que ja esta na tela — ele ve
- Use analogias simples quando for tecnico
- Seja direta e amigavel — como uma colega de trabalho, nao um assistente formal

MEMORIA: Voce tem acesso ao historico das conversas anteriores neste projeto (injetado no contexto).
Use isso naturalmente — se ele mencionar algo que foi feito antes, voce ja sabe.
Nao precisa anunciar que lembra — apenas lembre e use o contexto.`},[t,s,n,z,U,K]),ht=a.useCallback(async A=>{const W=Ja(re);if(!(F||!!W))return"Configure uma chave de IA nas configurações.";const ze=We()+`

[MODO VOZ ATIVO] Responda de forma BREVE e CONVERSACIONAL — máximo 2-3 frases curtas, sem markdown. Se for aplicar código, aplique normalmente e confirme em 1 frase curta. Se for rodar comando, diga qual rodou. Termine sempre com uma pergunta curta ou próximo passo.`;try{const De=V.slice(-10),Oe=F?await yo([...De,{role:"user",content:A}],ze):await es([...De,{role:"user",content:A}],W,ze),Ye=Ds(Oe);for(const Me of Ye)Me.type==="file"&&Me.filePath&&Me.content&&(be.current(`📝 Criando: ${Me.filePath}`,6e3),o(Me.filePath,Me.content)),Me.type==="command"&&Me.content?.trim()&&(be.current(`⚡ Executando: ${Me.content.trim().slice(0,50)}`,0),r(Me.content.trim()));return I(Me=>[...Me,{role:"user",content:A},{role:"assistant",content:Oe}]),u(Oe),Oe}catch(De){return`Erro: ${De.message}`}},[re,V,F,We,o,r]),Pe=a.useCallback(async A=>{if(!A.trim()||D)return;const W=Ja(re),je={role:"user",raw:A},ze={role:"user",content:A};L(Te=>[...Te,je]);const De=[...V,ze];if(I(De),$(""),N(!0),Y(!1),q(""),!W&&!F){L(Te=>[...Te,{role:"assistant",raw:"⚙️ Configure uma chave de IA nas Configurações (ícone de engrenagem acima).",blocks:[{type:"text",content:"⚙️ Configure uma chave de IA nas Configurações (ícone de engrenagem acima)."}]}]),N(!1);return}const Oe=De.slice(-30),Ye=We(),Me=pn(W,F);try{let Te;if(Me&&W){const Le=un(W),ta=mn(W),kt=xn(W,Oe.map(ct=>({role:ct.role,content:ct.content})),Ye),Mt=await fetch(Le,{method:"POST",headers:ta,body:kt});if(!Mt.ok){const ct=await Mt.text();let zt=ct.slice(0,400);try{zt=JSON.parse(ct).error?.message??zt}catch{}throw new Error(`API ${Mt.status}: ${zt}`)}const Ot=Mt.body.getReader(),Lt=new TextDecoder;let qt="";e:for(;;){const{done:ct,value:zt}=await Ot.read();if(ct)break;const Gt=Lt.decode(zt,{stream:!0}).split(`
`);for(const Dt of Gt){const Wt=Dt.trim();if(!Wt.startsWith("data:"))continue;const Jt=Wt.slice(5).trim();if(Jt==="[DONE]")break e;try{const aa=JSON.parse(Jt).choices?.[0]?.delta?.content??"";aa&&(qt+=aa,q(qt))}catch{}}}Te=qt,q("")}else Te=F?await yo(Oe,Ye):await es(Oe,W,Ye);const Fe=Ds(Te),Je={role:"assistant",raw:Te,blocks:Fe};L(Le=>[...Le,Je]),I(Le=>[...Le,{role:"assistant",content:Te}]),u(Te);for(const Le of Fe)Le.type==="file"&&Le.filePath&&Le.content&&(be.current(`📝 Criando: ${Le.filePath}`,6e3),o(Le.filePath,Le.content)),Le.type==="command"&&Le.content?.trim()&&be.current(`⚡ Executando: ${Le.content.trim().slice(0,50)}`,0);Qe.current(Te)}catch(Te){q(""),L(Fe=>[...Fe,{role:"assistant",raw:`❌ Erro: ${Te.message}`,blocks:[{type:"text",content:`❌ Erro ao conectar: ${Te.message}`}]}])}finally{N(!1),q("")}},[D,re,V,We,T,o,F]);a.useEffect(()=>{le.current=Pe},[Pe]),a.useEffect(()=>{me.current=D},[D]),a.useEffect(()=>{if(!D){b(0);return}b(0);const A=setInterval(()=>b(W=>W+1),1e3);return()=>clearInterval(A)},[D]);const Ve=a.useCallback((A,W=8e3)=>{Ae(A),st.current&&clearTimeout(st.current),W>0&&(st.current=setTimeout(()=>Ae(""),W))},[]),Be=a.useCallback(()=>{_e.current&&(_e.current.pause(),_e.current.onended=null,_e.current=null),at(!1),Ae("")},[]),ot=a.useCallback(async A=>{if(!pe)return;_e.current&&(_e.current.pause(),_e.current.onended=null,_e.current=null);const W=La(A,700);if(!W.trim())return;const je=(()=>{try{return JSON.parse(localStorage.getItem("voice-card-config")||"{}").voice||"nova"}catch{return"nova"}})();at(!0),Ve("🔊 Jasmim falando…",0);try{const ze=await fetch(`${lt}/voice/speak`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:W,voice:je})});if(!ze.ok){at(!1),Ae("");return}const{audio:De}=await ze.json();if(!De){at(!1),Ae("");return}const Oe=new Audio(`data:audio/mp3;base64,${De}`);_e.current=Oe,Oe.onended=()=>{_e.current=null,at(!1),Ae("")},Oe.onerror=()=>{_e.current=null,at(!1),Ae("")},await Oe.play().catch(()=>{at(!1),Ae("")})}catch{at(!1),Ae("")}},[pe,Ve,lt]);a.useEffect(()=>{be.current=Ve},[Ve]),a.useEffect(()=>{Qe.current=ot},[ot]);const Ke=a.useCallback(A=>{be.current(`⚡ Executando: ${A.slice(0,55)}`,0),r(A)},[r]),rt=a.useCallback(()=>{if(X){Z.current?.stop(),te(!1);return}const A=Yn(T.lang,W=>$(W),()=>te(!1));A&&(Z.current=A,te(!0))},[X,T.lang]),et=a.useCallback(async A=>{if(A.trim()){ve(!0),xe([]);try{const je=await(await fetch(`/api/search?q=${encodeURIComponent(A)}`)).json();xe(je.results||[])}catch{xe([])}finally{ve(!1)}}},[]),wt=a.useCallback((A,W)=>{if(!A.length)return;const je=A.slice(0,6).map((De,Oe)=>`${Oe+1}. **${De.title}**
   ${De.snippet}
   🔗 ${De.url}`).join(`

`),ze=`🔍 **Resultado da busca na web:** "${W}"

${je}

---
Com base nessas informações, responda à minha pergunta ou use esses dados para ajudar no projeto.`;O(!1),le.current(ze)},[]),Ze=a.useCallback(()=>{const A=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),W=C.filter(ze=>ze.role==="assistant").pop(),je=`# Bug Report - ${A}

## Arquivo Ativo
${s||"Nenhum"}

## Contexto da Conversa
${W?W.raw.slice(0,2e3):"(sem conversa)"}

## Descricao
(descreva o bug aqui)

## Steps para Reproduzir
1. 
2. 

## Comportamento Esperado

## Comportamento Atual
`;t.writeFile(`.bugs/bug-${A}.md`,je),o(`.bugs/bug-${A}.md`,je)},[t,s,C,o]),ut=async A=>{if(!A.apiKey)return;w(je=>({...je,[A.id]:{ok:!1,msg:"",loading:!0}}));const W=await gn(A);w(je=>({...je,[A.id]:{...W,loading:!1}}))},Ie=(A,W)=>{Q(je=>{const ze=je.map(De=>De.id===A?{...De,...W}:W.active&&De.id!==A?{...De,active:!1}:De);return nn(ze),ze})},bt={openai:["gpt-4o","gpt-4o-mini","gpt-4-turbo","o3-mini","o1-mini"],anthropic:["claude-opus-4-5","claude-sonnet-4-20250514","claude-haiku-4-20250514","claude-3-5-sonnet-20241022"],google:["gemini-2.0-flash","gemini-2.0-flash-thinking-exp","gemini-1.5-pro","gemini-1.5-flash"],custom:["llama-3.3-70b-versatile","llama-3.1-8b-instant","mistralai/mistral-7b-instruct","openai/gpt-4o-mini","anthropic/claude-haiku","grok-3-mini"]},ft=Ja(re),Et=A=>{const W=A.trim();return W.startsWith("AIza")||W.startsWith("ya29.")?{provider:"google",model:"gemini-2.0-flash",baseUrl:"",label:"Google Gemini 🟢"}:W.startsWith("sk-ant-")?{provider:"anthropic",model:"claude-haiku-4-20250514",baseUrl:"",label:"Anthropic Claude 🟣"}:W.startsWith("gsk_")?{provider:"custom",model:"llama-3.3-70b-versatile",baseUrl:"https://api.groq.com/openai/v1",label:"Groq Llama 3 🟡 (rápido)"}:W.startsWith("sk-or-")?{provider:"custom",model:"openai/gpt-4o-mini",baseUrl:"https://openrouter.ai/api/v1",label:"OpenRouter 🔵"}:W.startsWith("xai-")?{provider:"custom",model:"grok-3-mini",baseUrl:"https://api.x.ai/v1",label:"xAI Grok 🔴"}:W.startsWith("sk-")?{provider:"openai",model:"gpt-4o-mini",baseUrl:"",label:"OpenAI GPT 🟤"}:W.length>20?{provider:"custom",model:"",baseUrl:"",label:"API Genérica ⚪"}:{provider:"openai",model:"gpt-4o-mini",baseUrl:"",label:"API Genérica ⚪"}};return M.key.trim().length>10&&Et(M.key),e.jsxs(e.Fragment,{children:[S&&e.jsx(ai,{onClose:()=>G(!1),onSend:ht}),e.jsxs("div",{className:"h-full flex flex-col bg-[#141c0d]",children:[e.jsxs("div",{className:"px-3 py-2 border-b border-gray-700/40 bg-[#1c2714] shrink-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(mt,{size:14,className:"text-blue-400"}),e.jsx("span",{className:"text-xs font-semibold text-gray-300",children:"Assistente IA"}),ft&&!F&&e.jsx("span",{className:"text-[9px] px-1.5 py-0.5 bg-green-500/15 text-green-400 rounded-full border border-green-500/15",children:ft.name}),F&&e.jsx("span",{className:"text-[9px] px-1.5 py-0.5 bg-green-500/15 text-green-400 rounded-full border border-green-500/15",title:"IA gratuita ativa — use ⚙ para adicionar sua própria chave",children:"✨ gratuita"})]}),e.jsxs("div",{className:"flex items-center gap-0.5",children:[e.jsx("button",{onClick:()=>O(A=>!A),title:"Buscar na Web",className:`p-1 rounded hover:bg-white/5 ${ce?"text-blue-400":"text-gray-600 hover:text-blue-400"}`,children:e.jsx(ga,{size:13})}),e.jsx("button",{onClick:Ze,title:"Registrar Bug",className:"p-1 rounded hover:bg-white/5 text-gray-600 hover:text-orange-400",children:e.jsx(br,{size:13})}),e.jsx("button",{onClick:()=>{const A=!pe;we(A);try{localStorage.setItem("jasmim-autospeak",String(A))}catch{}A||Be()},title:pe?"Jasmim está falando — clique para silenciar":"Ativar voz automática da Jasmim",className:`p-1 rounded hover:bg-white/5 ${pe?"text-purple-400":"text-gray-600 hover:text-purple-400"}`,children:pe?e.jsx(ss,{size:13}):e.jsx(Vs,{size:13})}),e.jsx("button",{onClick:()=>v(!i),className:`p-1 rounded hover:bg-white/5 ${i?"text-blue-400":"text-gray-600"}`,children:e.jsx(za,{size:13})}),C.length>0&&e.jsx("button",{onClick:()=>{L([]),I([])},title:"Limpar chat",className:"p-1 rounded hover:bg-white/5 text-gray-600 hover:text-red-400",children:e.jsx(dt,{size:13})})]})]}),e.jsx("div",{className:"flex gap-1 p-0.5 bg-[#141c0d] rounded-lg border border-gray-800",children:li.map(A=>{const W=A.icon;return e.jsxs("button",{onClick:()=>c(A.value),title:A.desc,className:`flex-1 flex items-center justify-center gap-1 py-1 rounded-md text-[10px] font-medium transition-all ${n===A.value?"bg-blue-600 text-white shadow":"text-gray-600 hover:text-gray-400"}`,children:[e.jsx(W,{size:10}),e.jsx("span",{className:"hidden sm:inline",children:A.label})]},A.value)})})]}),(He||Ge||D)&&e.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-950/60 to-blue-950/60 border-b border-purple-800/25 shrink-0",children:[e.jsx("div",{className:`w-2 h-2 rounded-full shrink-0 ${He?"bg-purple-400 animate-pulse":D?"bg-blue-400 animate-pulse":"bg-green-400"}`}),e.jsx("span",{className:"text-[11px] font-medium flex-1 truncate",style:{color:He?"#c084fc":D?"#60a5fa":"#86efac"},children:He?"🔊 Jasmim falando…":D?`🤔 Pensando… ${R>0?`(${R}s)`:""}`:Ge}),He&&e.jsx("button",{onClick:Be,title:"Parar fala",className:"text-[10px] text-purple-400 hover:text-red-400 px-1.5 py-0.5 rounded border border-purple-700/40 hover:border-red-500/40 shrink-0 transition-colors",children:"⏹ Parar"})]}),ce&&e.jsx("div",{className:"border-b border-gray-700/40 bg-[#1a2410] shrink-0",children:e.jsxs("div",{className:"px-3 pt-2 pb-1",children:[e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsxs("div",{className:"flex-1 flex items-center gap-2 bg-[#141c0d] border border-gray-700/50 rounded-xl px-3 py-2",children:[e.jsx(ga,{size:13,className:"text-gray-500 shrink-0"}),e.jsx("input",{autoFocus:!0,value:he,onChange:A=>Ne(A.target.value),onKeyDown:A=>{A.key==="Enter"&&et(he)},placeholder:"Buscar na web (ex: como usar Express.js)...",className:"flex-1 bg-transparent text-[12px] text-gray-300 placeholder-gray-600 outline-none"})]}),e.jsx("button",{onClick:()=>et(he),disabled:ue||!he.trim(),className:"px-3 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-[12px] text-white font-semibold disabled:opacity-40 shrink-0",children:ue?e.jsx(qe,{size:13,className:"animate-spin"}):"Buscar"}),e.jsx("button",{onClick:()=>{O(!1),xe([])},className:"p-2 text-gray-500 hover:text-gray-300",children:e.jsx(ye,{size:14})})]}),ge.length>0&&e.jsxs("div",{className:"space-y-2 max-h-52 overflow-y-auto pb-2",children:[ge.map((A,W)=>e.jsxs("div",{className:"bg-[#141c0d] border border-gray-700/40 rounded-xl p-2.5 hover:border-blue-500/30 transition-colors",children:[e.jsx("p",{className:"text-[11px] font-semibold text-gray-200 leading-snug mb-1",children:A.title}),e.jsx("p",{className:"text-[10px] text-gray-500 leading-relaxed line-clamp-2 mb-1.5",children:A.snippet}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>wt(ge,he),className:"text-[10px] px-2.5 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-600/30 font-medium",children:"Enviar para IA"}),A.url&&e.jsxs("a",{href:A.url,target:"_blank",rel:"noopener noreferrer",className:"text-[10px] px-2.5 py-1 bg-gray-800/40 border border-gray-700/30 text-gray-500 rounded-lg hover:text-gray-300 flex items-center gap-1",children:[e.jsx(xt,{size:9})," Abrir"]})]})]},W)),e.jsx("button",{onClick:()=>wt(ge,he),className:"w-full text-[11px] py-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-xl font-semibold hover:bg-blue-600/30 transition-colors",children:"Enviar todos os resultados para a Jasmim analisar"})]}),!ue&&ge.length===0&&he&&e.jsx("p",{className:"text-[11px] text-gray-600 pb-2",children:"Nenhum resultado. Tente termos mais específicos."})]})}),i&&e.jsxs("div",{className:"flex-1 overflow-y-auto p-3 space-y-3",children:[e.jsx("button",{onClick:()=>v(!1),className:"w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-[14px] transition-all mb-1",children:"← Voltar ao Chat"}),e.jsxs("div",{className:"p-3 rounded-xl border border-gray-700/30 bg-[#1a2410] text-[10px] space-y-1.5",children:[e.jsx("p",{className:"font-bold text-gray-400 uppercase tracking-widest mb-2",children:"⚡ Capacidade Máxima por Provedor"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{label:"OpenAI GPT-4o",tokens:"16k tokens",stream:!0,note:"Melhor geral"},{label:"Claude Sonnet",tokens:"32k tokens",stream:!1,note:"Melhor análise"},{label:"Gemini 2.0 Flash",tokens:"32k tokens",stream:!0,note:"Rápido + grátis"},{label:"Groq Llama 3.3",tokens:"16k tokens",stream:!0,note:"Mais rápido"}].map(A=>e.jsxs("div",{className:"bg-[#141c0d] border border-gray-700/20 rounded-lg p-1.5",children:[e.jsx("p",{className:"font-semibold text-gray-300",children:A.label}),e.jsxs("p",{className:"text-gray-500",children:[A.tokens," · ",A.stream?"⚡ streaming":"📦 completo"]}),e.jsx("p",{className:"text-blue-400/70",children:A.note})]},A.label))}),e.jsx("p",{className:"text-gray-600 italic",children:"Todos recebem o mesmo sistema prompt completo da Jasmim."})]}),e.jsx("h3",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Chaves de IA (4 Slots)"}),re.map(A=>e.jsxs("div",{className:`p-3 rounded-xl border ${A.active?"border-blue-500/40 bg-blue-500/5":"border-gray-700/30 bg-gray-800/10"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-sm text-gray-200 font-semibold",children:A.name}),e.jsx("button",{onClick:()=>Ie(A.id,{active:!A.active}),className:`text-[10px] px-2.5 py-0.5 rounded-full font-medium ${A.active?"bg-blue-500 text-white":"bg-gray-700 text-gray-400"}`,children:A.active?"● Ativo":"Inativo"})]}),e.jsxs("select",{value:A.provider,onChange:W=>Ie(A.id,{provider:W.target.value,model:""}),className:"w-full mb-2 p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-xs",children:[e.jsx("option",{value:"openai",children:"OpenAI — GPT-4o (16k tokens, streaming)"}),e.jsx("option",{value:"anthropic",children:"Anthropic — Claude (32k tokens, máximo análise)"}),e.jsx("option",{value:"google",children:"Google — Gemini 2.0 Flash (32k, gratuito!)"}),e.jsx("option",{value:"custom",children:"Genérico — Groq / OpenRouter / Mistral / Ollama"})]}),A.provider==="custom"&&e.jsxs("div",{className:"mb-2",children:[e.jsx("p",{className:"text-[10px] text-gray-600 mb-1",children:"URL base da API:"}),e.jsx("input",{type:"url",placeholder:"https://openrouter.ai/api/v1",value:A.baseUrl||"",onChange:W=>Ie(A.id,{baseUrl:W.target.value}),className:"w-full p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-xs placeholder-gray-600 font-mono"}),e.jsx("div",{className:"flex flex-wrap gap-1 mt-1.5",children:[{label:"OpenRouter",url:"https://openrouter.ai/api/v1"},{label:"Groq",url:"https://api.groq.com/openai/v1"},{label:"Together",url:"https://api.together.xyz/v1"},{label:"Mistral",url:"https://api.mistral.ai/v1"},{label:"Ollama",url:"http://localhost:11434/v1"}].map(W=>e.jsx("button",{onClick:()=>Ie(A.id,{baseUrl:W.url}),className:`text-[10px] px-2 py-0.5 rounded-md border transition-colors ${A.baseUrl===W.url?"bg-blue-500/20 border-blue-500/40 text-blue-300":"bg-gray-800 border-gray-700/40 text-gray-500 hover:text-gray-300"}`,children:W.label},W.label))})]}),e.jsxs("div",{className:"mb-2 relative",children:[e.jsx("input",{type:"password",placeholder:"Cole qualquer chave aqui — detecta automaticamente o provedor...",value:A.apiKey,onChange:W=>{const je=W.target.value,ze=Et(je);je.trim().length>15&&ze&&ze.label!=="API Genérica"?Ie(A.id,{apiKey:je,provider:ze.provider,model:ze.model,baseUrl:ze.baseUrl}):Ie(A.id,{apiKey:je})},className:"w-full p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-xs placeholder-gray-600"}),A.apiKey.trim().length>15&&e.jsxs("span",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-[9px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/20 font-medium pointer-events-none",children:["✓ ",Et(A.apiKey)?.label??"detectado"]})]}),A.provider==="custom"?e.jsx("input",{type:"text",placeholder:"Modelo (ex: mistralai/mistral-7b-instruct)",value:A.model,onChange:W=>Ie(A.id,{model:W.target.value}),className:"w-full p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-xs placeholder-gray-600"}):bt[A.provider]?.length>0?e.jsx("select",{value:A.model,onChange:W=>Ie(A.id,{model:W.target.value}),className:"w-full p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-xs",children:bt[A.provider].map(W=>e.jsx("option",{value:W,children:W},W))}):e.jsx("input",{type:"text",placeholder:"Modelo",value:A.model,onChange:W=>Ie(A.id,{model:W.target.value}),className:"w-full p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-xs placeholder-gray-600"}),(A.apiKey||A.provider==="custom"&&A.baseUrl)&&e.jsxs("div",{className:"mt-2",children:[e.jsx("button",{onClick:()=>ut(A),disabled:d[A.id]?.loading,className:"w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-bold bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/25 disabled:opacity-50 transition-all",children:d[A.id]?.loading?e.jsxs(e.Fragment,{children:[e.jsx(qe,{size:13,className:"animate-spin"})," Testando..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Zt,{size:13})," Testar Conexão"]})}),d[A.id]&&!d[A.id].loading&&e.jsx("div",{className:`mt-2 px-3 py-2 rounded-xl text-[11px] leading-snug border ${d[A.id].ok?"bg-green-500/10 border-green-500/20 text-green-300":"bg-red-500/10 border-red-500/20 text-red-300"}`,children:d[A.id].msg})]})]},A.id)),e.jsxs("div",{className:"border-t border-gray-700/40 pt-3 space-y-2.5",children:[e.jsx("h3",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Voz (microfone)"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[11px] text-gray-500 w-12 shrink-0",children:"Idioma:"}),e.jsxs("select",{value:T.lang,onChange:A=>{const W={...T,lang:A.target.value,voiceName:""};ne(W),Zs(W)},className:"flex-1 p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-[11px]",children:[e.jsx("option",{value:"pt-BR",children:"Português BR"}),e.jsx("option",{value:"en-US",children:"English US"}),e.jsx("option",{value:"es-ES",children:"Español"})]})]}),e.jsx("p",{className:"text-[10px] text-gray-600",children:"A voz da Jasmim é neural (OpenAI). Use o cartão de voz 📡 no Campo Livre ou Jurídico."})]}),e.jsx("button",{onClick:()=>v(!1),className:"w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-[14px] transition-all",children:"← Voltar ao Chat"})]}),!i&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:_,className:"flex-1 overflow-y-auto p-3 md:p-5 space-y-3 md:space-y-5 min-h-0",children:[C.length===0&&e.jsx(ni,{onSend:Pe}),C.map((A,W)=>e.jsx(ii,{msg:A,onApply:o,onRun:Ke},W)),se&&e.jsxs("div",{className:"flex items-start gap-2 px-1",children:[e.jsx(mt,{size:14,className:"text-blue-400 shrink-0 mt-0.5"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("div",{className:"flex gap-0.5 items-center",children:[0,1,2].map(A=>e.jsx("div",{className:"w-1 h-1 bg-blue-400 rounded-full animate-bounce",style:{animationDelay:`${A*.12}s`}},A))}),e.jsxs("span",{className:"text-[9px] text-blue-400/70 font-mono",children:["⏱ ",R,"s — ",(se.length/1024).toFixed(1),"KB recebido"]})]}),e.jsx("div",{className:"bg-[#1c2714] rounded-2xl rounded-bl-sm px-3 py-2.5 md:px-5 md:py-4",children:e.jsxs("div",{className:"text-[13px] md:text-[15px] text-gray-100 whitespace-pre-wrap break-words leading-relaxed md:leading-[1.7]",children:[se,e.jsx("span",{className:"inline-block w-1.5 h-4 md:w-2 md:h-5 bg-blue-400 animate-pulse ml-0.5 align-middle rounded-sm"})]})})]})]}),D&&!se&&e.jsxs("div",{className:"flex flex-col gap-1 px-1 py-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(mt,{size:14,className:"text-blue-400 shrink-0"}),e.jsx("div",{className:"flex gap-1",children:[0,1,2].map(A=>e.jsx("div",{className:"w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce",style:{animationDelay:`${A*.15}s`}},A))}),e.jsx("span",{className:"text-[10px] text-gray-500",children:"Jasmim está processando…"}),e.jsxs("span",{className:"ml-auto text-[10px] font-mono text-blue-400/60 bg-blue-900/20 px-1.5 py-0.5 rounded border border-blue-700/20",children:["⏱ ",R,"s"]})]}),e.jsx("div",{className:"h-0.5 w-full bg-gray-800 rounded-full overflow-hidden ml-5",children:e.jsx("div",{className:"h-full bg-blue-500/60 rounded-full",style:{width:`${Math.min(92,10+R*5)}%`,transition:"width 1s ease-out"}})})]})]}),e.jsxs("div",{className:"px-2 pt-1.5 pb-1 border-t border-gray-700/30 bg-[#141c0d]",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx(mt,{size:9,className:"text-blue-400 shrink-0"}),e.jsx("span",{className:"text-[9px] text-gray-600 font-bold uppercase tracking-widest",children:"IA"})]}),e.jsx("div",{className:"flex gap-1 overflow-x-auto scrollbar-hide pb-0.5",children:ci.map(A=>e.jsx("button",{disabled:D,onClick:()=>Pe(A.prompt),className:"shrink-0 px-2 py-1 rounded-lg bg-blue-900/20 border border-blue-700/30 text-[10px] text-blue-300 hover:text-blue-100 hover:bg-blue-800/30 hover:border-blue-500/50 active:scale-95 disabled:opacity-40 disabled:cursor-wait transition-all whitespace-nowrap",children:A.label},A.label))})]}),e.jsxs("div",{className:"px-2 py-1.5 border-t border-gray-700/30 bg-[#0f1709]",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx(Pt,{size:9,className:"text-green-500 shrink-0"}),e.jsx("span",{className:"text-[9px] text-gray-600 font-bold uppercase tracking-widest",children:"Git"})]}),e.jsx("div",{className:"flex gap-1 overflow-x-auto scrollbar-hide pb-0.5",children:di.map(A=>e.jsx("button",{onClick:()=>r(A.cmd),title:A.cmd,className:"shrink-0 px-2 py-1 rounded-lg bg-[#1c2714] border border-gray-700/40 text-[10px] text-gray-400 hover:text-green-300 hover:border-green-600/40 hover:bg-green-900/20 active:scale-95 transition-all whitespace-nowrap",children:A.label},A.label))})]}),e.jsxs("div",{className:"px-2 py-1.5 border-t border-gray-700/20 bg-[#070e05]",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx(Vt,{size:9,className:"text-emerald-500 shrink-0"}),e.jsx("span",{className:"text-[9px] text-gray-600 font-bold uppercase tracking-widest",children:"Terminal"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-green-600 text-[11px] font-mono shrink-0 select-none",children:"$"}),e.jsx("input",{value:x,onChange:A=>E(A.target.value),onKeyDown:A=>{A.key==="Enter"&&x.trim()&&(r(x.trim()),E(""))},placeholder:"qualquer comando... (Enter para rodar)",className:"flex-1 bg-[#0f1a0a] border border-gray-700/30 rounded-lg text-[11px] text-green-300 font-mono px-2 py-1.5 placeholder-gray-700 outline-none focus:border-emerald-700/50 focus:ring-1 focus:ring-emerald-900/30 min-w-0"}),e.jsx("button",{onClick:()=>{x.trim()&&(r(x.trim()),E(""))},disabled:!x.trim(),title:"Executar",className:"shrink-0 w-8 h-7 rounded-lg bg-emerald-700/30 border border-emerald-700/30 text-emerald-400 text-[12px] disabled:opacity-30 hover:bg-emerald-700/50 transition-all flex items-center justify-center",children:e.jsx(os,{size:12})})]})]}),e.jsxs("div",{className:"px-2 py-1.5 border-t border-gray-700/20 bg-[#0b1008]",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx(Ft,{size:9,className:"text-yellow-600 shrink-0"}),e.jsx("span",{className:"text-[9px] text-gray-700 font-bold uppercase tracking-widest",children:"npm"})]}),e.jsx("div",{className:"flex items-center gap-1 overflow-x-auto scrollbar-hide pb-0.5",children:[{label:"Express",cmd:"npm install express"},{label:"React",cmd:"npm install react react-dom"},{label:"TypeScript",cmd:"npm install -D typescript ts-node @types/node"},{label:"Nodemon",cmd:"npm install -D nodemon"},{label:"Axios",cmd:"npm install axios"},{label:"Prisma",cmd:"npm install prisma @prisma/client"},{label:"dotenv",cmd:"npm install dotenv"},{label:"CORS",cmd:"npm install cors"},{label:"Socket.io",cmd:"npm install socket.io"},{label:"JWT",cmd:"npm install jsonwebtoken"},{label:"bcrypt",cmd:"npm install bcryptjs"},{label:"Mongoose",cmd:"npm install mongoose"}].map(A=>e.jsx("button",{onClick:()=>r(A.cmd),title:A.cmd,className:"shrink-0 px-2 py-1 rounded-lg bg-[#1c2714] border border-gray-700/30 text-[10px] text-gray-500 hover:text-yellow-300 hover:border-yellow-700/40 hover:bg-yellow-900/10 active:scale-95 transition-all font-mono whitespace-nowrap",children:A.label},A.label))})]}),e.jsxs("div",{className:"px-3 pt-2 pb-3 border-t border-gray-700/40 bg-[#141c0d] shrink-0 space-y-2",children:[e.jsxs("div",{className:"flex gap-2 items-end",children:[e.jsxs("div",{className:"flex-1 bg-[#1c2714] rounded-2xl border border-gray-700/40 focus-within:border-blue-500/50 transition-colors overflow-hidden",children:[e.jsx("textarea",{value:ee,onChange:A=>$(A.target.value),onKeyDown:A=>{A.key==="Enter"&&!A.shiftKey&&(A.preventDefault(),Pe(ee))},placeholder:s?`Pergunte sobre ${s.split("/").pop()}...`:"Pergunte ou peça algo para a IA...",rows:2,className:"w-full bg-transparent outline-none text-[14px] text-gray-200 placeholder-gray-600 px-4 pt-3 pb-2 resize-none leading-snug"}),e.jsxs("div",{className:"flex items-center justify-between px-3 pb-2",children:[e.jsxs("button",{onClick:()=>Y(!J),className:`flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg ${J?"text-purple-400 bg-purple-500/10":"text-gray-600 hover:text-gray-400"}`,children:[e.jsx(It,{size:11})," Sugestões"]}),e.jsx("span",{className:"text-[10px] text-gray-700",children:ee.length>0?`${ee.length} chars`:"Enter para enviar"})]})]}),e.jsx("button",{onClick:()=>Pe(ee),disabled:!ee.trim()||D,className:"w-12 h-12 rounded-2xl bg-blue-600 text-white disabled:opacity-30 shrink-0 hover:bg-blue-500 active:scale-95 transition-all flex items-center justify-center shadow-lg shadow-blue-900/30",children:D?e.jsx(qe,{size:18,className:"animate-spin"}):e.jsx(rs,{size:18})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>G(!0),className:"flex-1 flex items-center justify-center gap-2.5 py-3 rounded-2xl bg-gradient-to-r from-purple-600/90 to-blue-600/90 text-white font-bold text-[14px] hover:from-purple-500 hover:to-blue-500 active:scale-95 transition-all shadow-lg shadow-purple-900/30",children:[e.jsx(vr,{size:18}),"Voz Neural — Jasmim"]}),e.jsx("button",{onClick:rt,title:"Ditar texto",className:`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all ${X?"bg-red-500 text-white animate-pulse shadow-lg shadow-red-900/40":"bg-[#1c2714] border border-gray-700/40 text-gray-500 hover:text-gray-300 hover:border-gray-500"}`,children:e.jsx(fa,{size:18})})]})]})]})]})]})}function ui({onSaved:t}){const[s,o]=a.useState(""),[r,n]=a.useState(!1),[c,p]=a.useState(""),h=async()=>{if(s.trim()){n(!0),p("");try{const m=await fetch("https://api.github.com/user",{headers:{Authorization:`token ${s.trim()}`,Accept:"application/vnd.github+json"}});if(!m.ok)throw new Error("Token inválido ou sem permissão");const j=await m.json(),f={token:s.trim(),username:j.login};Qs(f),t(f)}catch(m){p(m.message||"Não foi possível conectar")}finally{n(!1)}}};return e.jsxs("div",{className:"h-full overflow-y-auto px-4 py-5 space-y-5",children:[e.jsxs("div",{className:"text-center pb-2",children:[e.jsx("div",{className:"w-14 h-14 mx-auto mb-3 bg-[#1c2714] border border-gray-700/50 rounded-2xl flex items-center justify-center",children:e.jsx(Pt,{size:26,className:"text-green-400"})}),e.jsx("h2",{className:"text-base font-bold text-white",children:"Conectar ao GitHub"}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Faça isso uma vez só — salva automaticamente"})]}),e.jsx("div",{className:"space-y-3",children:[{n:"1",title:"Abra o GitHub no navegador",desc:"Clique no link abaixo para ir direto para a página de criação de token",action:e.jsxs("a",{href:"https://github.com/settings/tokens/new?scopes=repo,read:user&description=SK+Code+Editor",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 mt-2 px-3 py-2 bg-[#1c2714] border border-gray-700/40 rounded-xl text-xs text-green-400 font-semibold hover:border-green-500/40 transition-colors",children:[e.jsx(xt,{size:13}),"Criar Token no GitHub →"]})},{n:"2",title:"Gere o token",desc:'Na página que abrir, role até o fim e clique em "Generate token". Copie o código que aparecer (começa com ghp_).'},{n:"3",title:"Cole o token aqui",desc:"O token só aparece uma vez — cole agora antes de fechar o GitHub."}].map(({n:m,title:j,desc:f,action:k})=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5",children:m}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:j}),e.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5 leading-relaxed",children:f}),k]})]},m))}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-[11px] text-gray-400 uppercase tracking-wider font-semibold",children:"Token"}),e.jsxs("div",{className:"relative",children:[e.jsx(jr,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"}),e.jsx("input",{type:"password",value:s,onChange:m=>{o(m.target.value),p("")},onKeyDown:m=>m.key==="Enter"&&h(),placeholder:"ghp_xxxxxxxxxxxxxxxxxxxx",className:"w-full pl-9 pr-4 py-3 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-green-500/50"})]}),c&&e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-xl",children:[e.jsx(Tt,{size:13,className:"text-red-400 shrink-0"}),e.jsx("p",{className:"text-[12px] text-red-400",children:c})]}),e.jsxs("button",{onClick:h,disabled:!s.trim()||r,className:"w-full flex items-center justify-center gap-2 py-3 bg-green-600 disabled:opacity-40 text-white rounded-xl font-bold text-[14px] hover:bg-green-500 transition-colors",children:[r?e.jsx(qe,{size:16,className:"animate-spin"}):e.jsx(St,{size:16}),r?"Verificando...":"Conectar ao GitHub"]})]})]})}function mi({creds:t,files:s,projectName:o,onImport:r,onDisconnect:n,defaultView:c}){const[p,h]=a.useState([]),[m,j]=a.useState(!1),[f,k]=a.useState(!1),[z,U]=a.useState(null),[K,C]=a.useState(c||"home"),[L,V]=a.useState(null),[I,ee]=a.useState(o.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"")),[$,D]=a.useState(""),[N,i]=a.useState(!1),[v,S]=a.useState(`Enviado pelo SK Code Editor - ${new Date().toLocaleDateString("pt-BR")}`),[G,J]=a.useState(null),[Y,X]=a.useState("sk-editor"),[te,re]=a.useState([]),[Q,T]=a.useState(!1),[ne,y]=a.useState(""),[u,R]=a.useState(""),b=a.useRef(null);a.useEffect(()=>{b.current?.scrollIntoView({behavior:"smooth"})},[te]);const d=Object.keys(s).length,w=a.useCallback(async()=>{k(!0);try{const H=await Qo(t);h(H),j(!0)}catch(H){U({msg:`Erro ao buscar repositórios: ${H.message}`})}finally{k(!1)}},[t]);a.useEffect(()=>{(K==="push-existing"||K==="clone")&&!m&&w()},[K,m,w]);const se=async()=>{if(I.trim()){k(!0),U(null);try{U({msg:"Criando repositório..."}),await Ia(t,I.trim(),$,N),U({msg:"Enviando arquivos..."});const H=await ma(t,t.username,I.trim(),s,v);V({owner:t.username,name:I.trim()}),U({msg:`✓ Enviado! ${H.success} arquivo(s) no repositório "${I}"`,ok:!0})}catch(H){U({msg:`Erro: ${H.message}`})}finally{k(!1)}}},q=async()=>{if(G){k(!0),U(null);try{U({msg:`Enviando para ${G.full_name}...`});const H=await ma(t,G.owner.login,G.name,s,v);V({owner:G.owner.login,name:G.name}),U({msg:`✓ Enviado! ${H.success} arquivo(s) atualizados em "${G.full_name}"`,ok:!0})}catch(H){U({msg:`Erro: ${H.message}`})}finally{k(!1)}}},x=async H=>{k(!0),U({msg:`Baixando ${H.full_name}...`});try{const M=await Da(t,H.owner.login,H.name);r(M),U({msg:`✓ ${Object.keys(M).length} arquivos importados de "${H.name}"`,ok:!0})}catch(M){U({msg:`Erro: ${M.message}`})}finally{k(!1)}},E=async()=>{if(!Y.trim())return;const H=Y.trim();T(!0),re(["Iniciando publicação…"]),y(""),R("");const M=oe=>re(ce=>[...ce,oe]);try{try{const ge=await fetch("/api/pages/deploy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t.token,username:t.username,repoName:H}),signal:AbortSignal.timeout(5e3)});if(ge.ok&&ge.body){const xe=ge.body.getReader(),ue=new TextDecoder;let ve="";for(;;){const{done:_,value:Z}=await xe.read();if(_)break;ve+=ue.decode(Z,{stream:!0});const le=ve.split(`

`);ve=le.pop()||"";for(const me of le){const ke=me.replace(/^data: /,"").trim();if(ke)try{const be=JSON.parse(ke);if(be.type==="log")M(be.msg);else if(be.type==="done"){y(be.url),M(be.msg);return}else if(be.type==="error"){R(be.msg),M(`❌ ${be.msg}`);return}}catch{}}}return}}catch{}M("🔧 Modo direto via GitHub API…");const oe=t.username;M(`📁 Verificando repositório "${H}"…`);try{await Ia(t,H,"Publicado pelo SK Code Editor",!1),M("✅ Repositório criado.")}catch(ge){if(ge.message?.includes("422")||ge.message?.includes("already exists"))M("ℹ️ Repositório já existe — usando existente.");else throw ge}await ds(t,oe,H),M("🌐 Repositório público confirmado.");const ce=`name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install & Build
        run: |
          npm install 2>/dev/null || true
          npm run build 2>/dev/null || true
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
`;M(`📤 Enviando ${Object.keys(s).length} arquivo(s)…`);const O={...s,".github/workflows/deploy.yml":ce},he=await ma(t,oe,H,O,"Publicado pelo SK Code Editor");M(`✅ ${he.success} arquivo(s) enviados.`),M("🌐 Ativando GitHub Pages…");const Ne=await Xs(t,oe,H,"main","/");M("✅ GitHub Pages ativado! Pode demorar 1-2 min para ficar online."),M(`🔗 ${Ne}`),y(Ne)}catch(oe){R(oe.message||String(oe))}finally{T(!1)}},F=({owner:H,name:M})=>e.jsxs("div",{className:"space-y-2 pt-1",children:[e.jsx("p",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-semibold px-1",children:"Abrir no VS Code"}),e.jsxs("a",{href:`https://github.dev/${H}/${M}`,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3 bg-blue-600/10 border border-blue-500/30 rounded-xl hover:bg-blue-600/15 transition-colors",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0",children:e.jsx(Ra,{size:17,className:"text-blue-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-blue-300",children:"VS Code Web"}),e.jsx("p",{className:"text-[11px] text-gray-500",children:"Editor completo no navegador, grátis"})]}),e.jsx(xt,{size:13,className:"text-gray-600 shrink-0"})]}),e.jsxs("a",{href:`https://stackblitz.com/github/${H}/${M}`,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3 bg-purple-600/10 border border-purple-500/30 rounded-xl hover:bg-purple-600/15 transition-colors",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-purple-500/15 flex items-center justify-center shrink-0",children:e.jsx(Vt,{size:17,className:"text-purple-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-purple-300",children:"StackBlitz — Terminal completo"}),e.jsx("p",{className:"text-[11px] text-gray-500",children:"VS Code + Node.js + npm install, grátis"})]}),e.jsx(xt,{size:13,className:"text-gray-600 shrink-0"})]}),e.jsxs("a",{href:`https://gitpod.io/#https://github.com/${H}/${M}`,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3 bg-orange-600/10 border border-orange-500/30 rounded-xl hover:bg-orange-600/15 transition-colors",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-orange-500/15 flex items-center justify-center shrink-0",children:e.jsx(Vt,{size:17,className:"text-orange-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-orange-300",children:"Gitpod — Terminal Linux completo"}),e.jsx("p",{className:"text-[11px] text-gray-500",children:"Java, Python, Node — qualquer linguagem"})]}),e.jsx(xt,{size:13,className:"text-gray-600 shrink-0"})]}),e.jsx("p",{className:"text-[10px] text-gray-600 px-1 pt-1 leading-relaxed",children:"Após editar lá, use o painel GitHub do app para puxar as alterações de volta."})]});return K==="home"?e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-[#1c2714] border-b border-gray-700/30",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(St,{size:14,className:"text-green-400"}),e.jsxs("span",{className:"text-xs font-semibold text-gray-300",children:["@",t.username]}),e.jsx("span",{className:"text-[10px] text-gray-600",children:"conectado"})]}),e.jsx("button",{onClick:n,className:"text-[10px] text-gray-700 hover:text-gray-500",children:"Desconectar"})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-3",children:[e.jsxs("div",{className:"px-3 py-2.5 bg-[#1c2714] border border-gray-700/30 rounded-xl",children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-wider font-semibold mb-0.5",children:"Projeto atual"}),e.jsx("p",{className:"text-sm font-bold text-white truncate",children:o}),e.jsxs("p",{className:"text-[11px] text-gray-500",children:[d," arquivo",d!==1?"s":""]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-wider font-semibold mb-2 px-1",children:"Enviar para GitHub"}),e.jsxs("button",{onClick:()=>C("push-new"),className:"w-full flex items-center gap-3 px-4 py-3.5 bg-green-600/10 border border-green-500/30 rounded-xl hover:bg-green-600/15 transition-colors text-left",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-green-500/15 flex items-center justify-center shrink-0",children:e.jsx(Bt,{size:17,className:"text-green-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-green-400",children:"Criar repositório novo e enviar"}),e.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5",children:"Cria um repo novo e sobe todos os arquivos"})]}),e.jsx(Rt,{size:15,className:"text-gray-600 shrink-0"})]}),e.jsxs("button",{onClick:()=>C("push-existing"),className:"w-full flex items-center gap-3 px-4 py-3 mt-2 bg-[#1c2714] border border-gray-700/40 rounded-xl hover:border-gray-600/50 transition-colors text-left",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0",children:e.jsx(_t,{size:16,className:"text-blue-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:"Enviar para repo existente"}),e.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5",children:"Atualiza um repositório que já existe"})]}),e.jsx(Rt,{size:15,className:"text-gray-600 shrink-0"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-wider font-semibold mb-2 px-1",children:"Baixar do GitHub"}),e.jsxs("button",{onClick:()=>C("clone"),className:"w-full flex items-center gap-3 px-4 py-3 bg-[#1c2714] border border-gray-700/40 rounded-xl hover:border-gray-600/50 transition-colors text-left",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0",children:e.jsx(pt,{size:16,className:"text-purple-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:"Importar repositório"}),e.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5",children:"Baixa um repositório para editar aqui"})]}),e.jsx(Rt,{size:15,className:"text-gray-600 shrink-0"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-wider font-semibold mb-2 px-1",children:"Publicar app gratuitamente"}),e.jsxs("button",{onClick:()=>C("pages-deploy"),className:"w-full flex items-center gap-3 px-4 py-3.5 bg-blue-600/10 border border-blue-500/30 rounded-xl hover:bg-blue-600/15 transition-colors text-left",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0",children:e.jsx(gt,{size:17,className:"text-blue-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-blue-300",children:"Publicar no GitHub Pages — Grátis"}),e.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5",children:"Este editor online, sem pagar Replit, para sempre"})]}),e.jsx(Rt,{size:15,className:"text-gray-600 shrink-0"})]})]})]}),z&&e.jsxs("div",{className:`mx-4 mb-4 px-3 py-2.5 rounded-xl border text-[12px] flex items-start gap-2 ${z.ok?"bg-green-500/10 border-green-500/20 text-green-400":"bg-red-500/10 border-red-500/20 text-red-400"}`,children:[z.ok?e.jsx(St,{size:13,className:"shrink-0 mt-0.5"}):e.jsx(Tt,{size:13,className:"shrink-0 mt-0.5"}),e.jsx("span",{className:"leading-relaxed",children:z.msg})]})]}):K==="push-new"?e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-[#1c2714] border-b border-gray-700/30",children:[e.jsx("button",{onClick:()=>{C("home"),U(null)},className:"p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:15})}),e.jsx("span",{className:"text-sm font-bold text-white",children:"Criar repositório e enviar"})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Nome do Repositório"}),e.jsx("input",{value:I,onChange:H=>ee(H.target.value.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"")),placeholder:"meu-projeto",className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-green-500/50"}),e.jsxs("p",{className:"text-[10px] text-gray-600",children:["Será criado como: github.com/",t.username,"/",I||"..."]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Descrição (opcional)"}),e.jsx("input",{value:$,onChange:H=>D(H.target.value),placeholder:"Descrição do projeto...",className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-green-500/50"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Mensagem do envio"}),e.jsx("input",{value:v,onChange:H=>S(H.target.value),className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 outline-none focus:border-green-500/50"})]}),e.jsxs("button",{onClick:()=>i(!N),className:`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border w-full text-left transition-colors ${N?"bg-yellow-500/10 border-yellow-500/30":"bg-[#1c2714] border-gray-700/40"}`,children:[N?e.jsx(fs,{size:15,className:"text-yellow-400"}):e.jsx(vs,{size:15,className:"text-green-400"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:N?"Repositório Privado":"Repositório Público"}),e.jsx("p",{className:"text-[11px] text-gray-500",children:N?"Só você vê":"Qualquer pessoa pode ver"})]})]}),z&&e.jsxs("div",{className:`px-3 py-2.5 rounded-xl border text-[12px] flex items-start gap-2 ${z.ok?"bg-green-500/10 border-green-500/20 text-green-400":"bg-red-500/10 border-red-500/20 text-red-400"}`,children:[z.ok?e.jsx(St,{size:13,className:"shrink-0 mt-0.5"}):e.jsx(Tt,{size:13,className:"shrink-0 mt-0.5"}),e.jsx("span",{className:"leading-relaxed",children:z.msg})]}),z?.ok&&L&&e.jsx(F,{owner:L.owner,name:L.name}),!z?.ok&&e.jsxs("div",{className:"text-[11px] text-gray-600 px-1",children:[d," arquivo",d!==1?"s":""," serão enviados"]})]}),!z?.ok&&e.jsx("div",{className:"px-4 pb-5 pt-2",children:e.jsxs("button",{onClick:se,disabled:!I.trim()||f,className:"w-full flex items-center justify-center gap-2 py-3.5 bg-green-600 disabled:opacity-40 text-white rounded-xl font-bold text-[15px] hover:bg-green-500 transition-colors",children:[f?e.jsx(qe,{size:16,className:"animate-spin"}):e.jsx(_t,{size:16}),f?"Enviando...":"Criar e Enviar"]})})]}):K==="push-existing"?e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-[#1c2714] border-b border-gray-700/30",children:[e.jsx("button",{onClick:()=>{C("home"),U(null),J(null)},className:"p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:15})}),e.jsx("span",{className:"text-sm font-bold text-white",children:"Enviar para repositório"}),e.jsx("button",{onClick:w,disabled:f,className:"ml-auto p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(Nt,{size:13,className:f?"animate-spin":""})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[!m&&f&&e.jsxs("div",{className:"flex items-center justify-center py-12 gap-2 text-gray-500 text-sm",children:[e.jsx(qe,{size:16,className:"animate-spin"})," Buscando repositórios..."]}),m&&e.jsxs("div",{className:"px-4 py-3 space-y-2",children:[G&&e.jsxs("div",{className:"space-y-2 pb-2 border-b border-gray-800/50",children:[e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-xl",children:[e.jsx(St,{size:14,className:"text-green-400 shrink-0"}),e.jsx("span",{className:"text-[12px] text-green-400 font-semibold truncate",children:G.full_name}),e.jsx("button",{onClick:()=>J(null),className:"ml-auto text-gray-600 hover:text-gray-400 shrink-0",children:e.jsx(ye,{size:13})})]}),e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold block",children:"Mensagem do envio"}),e.jsx("input",{value:v,onChange:H=>S(H.target.value),className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 outline-none focus:border-green-500/50"}),z&&e.jsxs("div",{className:`px-3 py-2.5 rounded-xl border text-[12px] flex items-start gap-2 ${z.ok?"bg-green-500/10 border-green-500/20 text-green-400":"bg-red-500/10 border-red-500/20 text-red-400"}`,children:[z.ok?e.jsx(St,{size:13,className:"shrink-0 mt-0.5"}):e.jsx(Tt,{size:13,className:"shrink-0 mt-0.5"}),e.jsx("span",{className:"leading-relaxed",children:z.msg})]}),z?.ok&&L&&e.jsx(F,{owner:L.owner,name:L.name}),!z?.ok&&e.jsxs("button",{onClick:q,disabled:f,className:"w-full flex items-center justify-center gap-2 py-3 bg-green-600 disabled:opacity-40 text-white rounded-xl font-bold text-[14px] hover:bg-green-500 transition-colors",children:[f?e.jsx(qe,{size:15,className:"animate-spin"}):e.jsx(_t,{size:15}),f?"Enviando...":`Enviar ${d} arquivo(s)`]})]}),!G&&e.jsx("p",{className:"text-[11px] text-gray-600 pb-1",children:"Escolha o repositório de destino:"}),p.map(H=>e.jsxs("button",{onClick:()=>J(H),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-colors ${G?.id===H.id?"bg-green-500/10 border-green-500/30":"bg-[#1c2714] border-gray-700/30 hover:border-gray-600/50"}`,children:[H.private?e.jsx(fs,{size:12,className:"text-yellow-500 shrink-0"}):e.jsx(vs,{size:12,className:"text-gray-600 shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[12px] font-semibold text-gray-300 truncate",children:H.full_name}),H.description&&e.jsx("p",{className:"text-[10px] text-gray-600 truncate",children:H.description})]}),G?.id===H.id&&e.jsx(St,{size:14,className:"text-green-400 shrink-0"})]},H.id))]})]})]}):K==="clone"?e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-[#1c2714] border-b border-gray-700/30",children:[e.jsx("button",{onClick:()=>{C("home"),U(null)},className:"p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:15})}),e.jsx("span",{className:"text-sm font-bold text-white",children:"Importar repositório"}),e.jsx("button",{onClick:w,disabled:f,className:"ml-auto p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(Nt,{size:13,className:f?"animate-spin":""})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[!m&&f&&e.jsxs("div",{className:"flex items-center justify-center py-12 gap-2 text-gray-500 text-sm",children:[e.jsx(qe,{size:16,className:"animate-spin"})," Buscando repositórios..."]}),m&&e.jsxs("div",{className:"px-4 py-3 space-y-2",children:[z&&e.jsxs("div",{className:`px-3 py-2.5 rounded-xl border text-[12px] flex items-start gap-2 mb-2 ${z.ok?"bg-green-500/10 border-green-500/20 text-green-400":"bg-red-500/10 border-red-500/20 text-red-400"}`,children:[z.ok?e.jsx(St,{size:13,className:"shrink-0 mt-0.5"}):e.jsx(Tt,{size:13,className:"shrink-0 mt-0.5"}),e.jsx("span",{className:"leading-relaxed",children:z.msg})]}),e.jsx("p",{className:"text-[11px] text-gray-600 pb-1",children:"Escolha o repositório para importar:"}),p.map(H=>e.jsxs("button",{onClick:()=>x(H),disabled:f,className:"w-full flex items-center gap-3 px-3 py-2.5 bg-[#1c2714] border border-gray-700/30 rounded-xl hover:border-purple-500/30 hover:bg-purple-500/5 transition-colors text-left disabled:opacity-50",children:[H.private?e.jsx(fs,{size:12,className:"text-yellow-500 shrink-0"}):e.jsx(vs,{size:12,className:"text-gray-600 shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[12px] font-semibold text-gray-300 truncate",children:H.full_name}),H.description&&e.jsx("p",{className:"text-[10px] text-gray-600 truncate",children:H.description})]}),e.jsx(pt,{size:13,className:"text-purple-400 shrink-0"})]},H.id))]})]})]}):K==="pages-deploy"?e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-[#1c2714] border-b border-gray-700/30",children:[e.jsx("button",{onClick:()=>{C("home"),re([]),y(""),R(""),T(!1)},className:"p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:15})}),e.jsx(gt,{size:14,className:"text-blue-400"}),e.jsx("span",{className:"text-sm font-bold text-white",children:"Publicar no GitHub Pages"})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-4",children:[e.jsxs("div",{className:"px-3 py-3 bg-blue-500/8 border border-blue-500/20 rounded-xl space-y-1.5",children:[e.jsx("p",{className:"text-[12px] font-bold text-blue-300",children:"O que isso faz?"}),e.jsxs("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:["Compila este editor e publica ele no GitHub Pages — um endereço tipo ",e.jsxs("span",{className:"text-blue-300 font-mono",children:[t.username,".github.io/",Y||"sk-editor"]})," que funciona para sempre, sem pagar nada."]}),e.jsx("p",{className:"text-[11px] text-gray-500 leading-relaxed",children:"Edição de arquivos e integração com GitHub funcionam sem o servidor. Só a Jasmim e o terminal online precisam do servidor."})]}),!Q&&!ne&&e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Nome do repositório"}),e.jsx("input",{value:Y,onChange:H=>X(H.target.value.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"")),placeholder:"sk-editor",className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-blue-500/50"}),e.jsxs("p",{className:"text-[10px] text-gray-600",children:["Será publicado em: ",t.username,".github.io/",Y||"..."]})]}),te.length>0&&e.jsxs("div",{className:"bg-black/40 border border-gray-700/40 rounded-xl p-3 max-h-48 overflow-y-auto font-mono",children:[te.map((H,M)=>e.jsx("p",{className:"text-[11px] text-gray-300 leading-relaxed",children:H},M)),e.jsx("div",{ref:b})]}),ne&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-3 bg-green-500/10 border border-green-500/20 rounded-xl",children:[e.jsx("p",{className:"text-[12px] font-bold text-green-400 mb-1",children:"✅ Publicado com sucesso!"}),e.jsx("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:"O GitHub Pages pode demorar 1-2 minutos para ficar online na primeira vez."})]}),e.jsxs("a",{href:ne,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3.5 bg-blue-600/15 border border-blue-500/30 rounded-xl hover:bg-blue-600/20 transition-colors",children:[e.jsx(gt,{size:17,className:"text-blue-400 shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-blue-300",children:"Abrir o app publicado"}),e.jsx("p",{className:"text-[11px] text-gray-500 truncate",children:ne})]}),e.jsx(xt,{size:13,className:"text-gray-600 shrink-0"})]}),e.jsxs("div",{className:"px-3 py-3 bg-orange-500/8 border border-orange-500/20 rounded-xl space-y-2",children:[e.jsx("p",{className:"text-[12px] font-bold text-orange-300",children:"📱 Transformar em APK (grátis)"}),e.jsxs("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:["Com o app publicado, você pode gerar um APK Android usando o ",e.jsx("strong",{className:"text-orange-300",children:"PWABuilder"})," — gratuito, sem precisar do Android Studio."]}),e.jsxs("a",{href:`https://www.pwabuilder.com/generate?url=${encodeURIComponent(ne)}`,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-3 py-2.5 bg-orange-500/15 border border-orange-500/30 rounded-xl hover:bg-orange-500/20 transition-colors",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0",children:e.jsx("span",{className:"text-[15px]",children:"📦"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[12px] font-bold text-orange-300",children:"Gerar APK no PWABuilder"}),e.jsx("p",{className:"text-[10px] text-gray-500",children:"Clica → baixa o APK → instala no celular"})]}),e.jsx(xt,{size:13,className:"text-gray-600 shrink-0"})]}),e.jsx("p",{className:"text-[10px] text-gray-600 leading-relaxed px-0.5",children:'No PWABuilder: clique em "Package for stores" → "Android" → "Generate APK" → baixe o arquivo .apk e instale no celular habilitando "fontes desconhecidas".'})]}),e.jsx("p",{className:"text-[10px] text-gray-600 px-1 leading-relaxed",children:'Para atualizar o app no futuro, clique em "Publicar no GitHub Pages" de novo — o APK instalado atualiza automaticamente pelo navegador.'})]}),u&&!ne&&e.jsxs("div",{className:"px-3 py-2.5 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2",children:[e.jsx(Tt,{size:13,className:"text-red-400 shrink-0 mt-0.5"}),e.jsx("p",{className:"text-[12px] text-red-400 leading-relaxed",children:u})]})]}),!ne&&e.jsx("div",{className:"px-4 pb-5 pt-2",children:e.jsxs("button",{onClick:E,disabled:!Y.trim()||Q,className:"w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 disabled:opacity-40 text-white rounded-xl font-bold text-[15px] hover:bg-blue-500 transition-colors",children:[Q?e.jsx(qe,{size:16,className:"animate-spin"}):e.jsx(gt,{size:16}),Q?"Publicando... (pode demorar 2 min)":"Publicar Grátis no GitHub Pages"]})})]}):null}function xi({onImport:t,onBack:s}){const[o,r]=a.useState(""),[n,c]=a.useState(!1),[p,h]=a.useState(null),m=f=>{const k=f.trim().replace(/\.git$/,"").replace(/\/$/,""),z=k.match(/github\.com[/:]([^/]+)\/([^/]+)/);if(z)return{owner:z[1],repo:z[2]};const U=k.split("/").filter(Boolean);return U.length===2?{owner:U[0],repo:U[1]}:null},j=async()=>{const f=m(o);if(!f){h({msg:"URL inválida. Use: github.com/usuario/repositorio"});return}c(!0),h({msg:`Baixando ${f.owner}/${f.repo}...`});try{const z=await Da({token:"",username:""},f.owner,f.repo);if(Object.keys(z).length===0)throw new Error("Nenhum arquivo encontrado. O repositório é privado ou não existe.");t(z),h({msg:`✓ ${Object.keys(z).length} arquivos importados de "${f.repo}"`,ok:!0})}catch(k){h({msg:`Erro: ${k.message}`})}finally{c(!1)}};return e.jsxs("div",{className:"h-full flex flex-col overflow-y-auto px-4 py-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:s,className:"p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:15})}),e.jsx("h2",{className:"text-sm font-bold text-white",children:"Clonar Repositório Público"})]}),e.jsx("p",{className:"text-[12px] text-gray-500 leading-relaxed",children:"Repositórios públicos podem ser baixados sem precisar de token. Cole o link do GitHub abaixo."}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Link do Repositório"}),e.jsx("input",{value:o,onChange:f=>{r(f.target.value),h(null)},onKeyDown:f=>f.key==="Enter"&&j(),placeholder:"github.com/usuario/repositorio",className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-purple-500/50"})]}),p&&e.jsxs("div",{className:`px-3 py-2.5 rounded-xl border text-[12px] flex items-start gap-2 ${p.ok?"bg-green-500/10 border-green-500/20 text-green-400":"bg-red-500/10 border-red-500/20 text-red-400"}`,children:[p.ok?e.jsx(St,{size:13,className:"shrink-0 mt-0.5"}):e.jsx(Tt,{size:13,className:"shrink-0 mt-0.5"}),e.jsx("span",{className:"leading-relaxed",children:p.msg})]}),e.jsxs("button",{onClick:j,disabled:!o.trim()||n,className:"w-full flex items-center justify-center gap-2 py-3 bg-purple-600 disabled:opacity-40 text-white rounded-xl font-bold text-[14px] hover:bg-purple-500 transition-colors",children:[n?e.jsx(qe,{size:16,className:"animate-spin"}):e.jsx(pt,{size:16}),n?"Baixando...":"Baixar Repositório"]})]})}function gi({files:t,onImport:s,projectName:o,defaultView:r}){const[n,c]=a.useState(()=>{const j=cs();return j.token?j:null}),[p,h]=a.useState(!1),m=()=>{Qs({token:"",username:""}),c(null)};return e.jsxs("div",{className:"h-full flex flex-col bg-[#141c0d] overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 border-b border-gray-700/50 bg-[#1c2714] shrink-0",children:[e.jsx(Pt,{size:15,className:"text-green-400"}),e.jsx("span",{className:"text-xs font-bold text-gray-300",children:"GitHub"})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:p?e.jsx(xi,{onImport:s,onBack:()=>h(!1)}):n?e.jsx(mi,{creds:n,files:t,projectName:o,onImport:s,onDisconnect:m,defaultView:r}):e.jsxs(e.Fragment,{children:[e.jsx(ui,{onSaved:c}),e.jsxs("div",{className:"px-4 pb-5 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2 my-3",children:[e.jsx("div",{className:"flex-1 h-px bg-gray-700/40"}),e.jsx("span",{className:"text-[10px] text-gray-600",children:"ou"}),e.jsx("div",{className:"flex-1 h-px bg-gray-700/40"})]}),e.jsxs("button",{onClick:()=>h(!0),className:"w-full flex items-center justify-center gap-2 py-2.5 border border-purple-700/40 bg-purple-900/10 text-purple-400 rounded-xl text-[13px] font-semibold hover:bg-purple-900/20 transition-colors",children:[e.jsx(pt,{size:14}),"Baixar repositório público (sem token)"]})]})]})})]})}const hi=[{label:"Servidor Web",emoji:"🌐",packages:["express","fastify","koa","hapi","polka","h3","hono"]},{label:"Banco de Dados",emoji:"🗄️",packages:["mongoose","prisma","pg","mysql2","sqlite3","redis","ioredis","drizzle-orm","@neondatabase/serverless"]},{label:"Utilitários",emoji:"🔧",packages:["lodash","moment","dayjs","uuid","nanoid","dotenv","zod","date-fns","ramda"]},{label:"HTTP / APIs",emoji:"📡",packages:["axios","node-fetch","got","openai","stripe","undici","@anthropic-ai/sdk","@google/generative-ai"]},{label:"Autenticação",emoji:"🔐",packages:["jsonwebtoken","bcryptjs","passport","express-session","helmet","cors","express-rate-limit","cookie-parser"]},{label:"Dev Tools",emoji:"⚙️",packages:["typescript","nodemon","ts-node","tsx","eslint","prettier","jest","vitest","dotenv-cli"]},{label:"Frontend React",emoji:"⚛️",packages:["react","react-dom","react-router-dom","vite","@vitejs/plugin-react","tailwindcss","framer-motion","zustand"]},{label:"UI / Estilo",emoji:"🎨",packages:["tailwindcss","lucide-react","react-icons","clsx","class-variance-authority","@radix-ui/react-dialog"]},{label:"PDF / Documentos",emoji:"📄",packages:["pdfkit","pdf-lib","puppeteer","html-pdf-node","docx","exceljs","xlsx","mammoth"]},{label:"Email / SMS",emoji:"📧",packages:["nodemailer","@sendgrid/mail","resend","twilio"]},{label:"IA / ML",emoji:"🤖",packages:["openai","@anthropic-ai/sdk","@google/generative-ai","langchain","@langchain/core"]},{label:"Upload / Storage",emoji:"☁️",packages:["multer","@aws-sdk/client-s3","cloudinary","firebase-admin","@supabase/supabase-js"]},{label:"WebSocket / RT",emoji:"⚡",packages:["socket.io","socket.io-client","ws","ably","pusher-js"]},{label:"CLI / Terminal",emoji:"🖥️",packages:["commander","yargs","chalk","ora","inquirer","figlet","boxen"]},{label:"Segurança",emoji:"🛡️",packages:["helmet","bcryptjs","argon2","crypto-js","jsonwebtoken","zod","validator"]},{label:"Scraping",emoji:"🕷️",packages:["puppeteer","playwright","cheerio","jsdom","node-html-parser"]},{label:"Pagamentos",emoji:"💳",packages:["stripe","mercadopago","@mercadopago/sdk-js"]},{label:"Dados / Planilhas",emoji:"📊",packages:["csv-parse","papaparse","xlsx","d3","recharts","chart.js"]},{label:"Python (pip)",emoji:"🐍",pip:!0,packages:["flask","fastapi","django","requests","pandas","numpy","sqlalchemy","pydantic","uvicorn","httpx"]},{label:"Testes",emoji:"🧪",packages:["jest","vitest","mocha","chai","@testing-library/react","supertest"]}],bi={flask:"Microframework web leve e flexível",fastapi:"Framework web moderno, rápido, baseado em type hints",django:"Framework web completo, baterias incluídas",requests:"Biblioteca HTTP simples e elegante",pandas:"Análise e manipulação de dados",numpy:"Computação numérica e arrays multidimensionais",sqlalchemy:"ORM e toolkit SQL",pydantic:"Validação de dados via type hints",uvicorn:"Servidor ASGI ultra-rápido",httpx:"Cliente HTTP moderno com suporte async"};function fi({onInstall:t,onClose:s}){const[o,r]=a.useState(""),[n,c]=a.useState([]),[p,h]=a.useState(!1),[m,j]=a.useState(""),[f,k]=a.useState(null),[z,U]=a.useState(!1),[K,C]=a.useState({}),L=a.useRef(null),V=a.useRef(void 0),I=a.useRef({});a.useEffect(()=>{setTimeout(()=>L.current?.focus(),100)},[]);const ee=a.useCallback(async v=>{if(!v.trim()){c([]),j("");return}h(!0),j(""),k(null);try{const S=await fetch(`https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(v)}&size=20`);if(!S.ok)throw new Error;const G=await S.json();c(G.objects?.map(J=>({name:J.package.name,description:J.package.description,version:J.package.version,date:J.package.date,links:J.package.links,score:J.score}))??[])}catch{j("Não foi possível buscar. Verifique a conexão."),c([])}finally{h(!1)}},[]),$=a.useCallback(async(v,S,G=!1)=>{if(U(G),k(S),r(""),h(!0),j(""),G){c(v.map(J=>({name:J,description:bi[J]||`Pacote Python: ${J}`,version:"latest",date:"",links:{npm:`https://pypi.org/project/${J}/`}}))),h(!1);return}try{const J=await Promise.all(v.slice(0,12).map(async Y=>{try{const X=await fetch(`https://registry.npmjs.org/${encodeURIComponent(Y)}/latest`);if(!X.ok)return null;const te=await X.json();return{name:te.name,description:te.description,version:te.version,date:te.date,links:te.links}}catch{return null}}));c(J.filter(Boolean))}catch{j("Erro ao carregar categoria.")}finally{h(!1)}},[]),D=v=>{if(r(v),k(null),U(!1),clearTimeout(V.current),!v.trim()){c([]);return}V.current=setTimeout(()=>ee(v),500)},N=a.useCallback(async(v,S=!1)=>{if(K[v]?.status==="installing")return;I.current[v]?.abort();const G=new AbortController;I.current[v]=G;const J=S?[`${v}`]:[v];C(Y=>({...Y,[v]:{pkg:v,status:"installing",output:"",showOutput:!0}})),t?.(z?`pip3 install ${v}`:S?`npm install -D ${v}`:`npm install ${v}`);try{const Y=await fetch("/api/workspace/install",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({packages:J,dev:S&&!z,pip:z}),signal:G.signal});if(!Y.ok)throw new Error(`HTTP ${Y.status}`);if(!Y.body)throw new Error("Sem resposta do servidor");const X=Y.body.getReader(),te=new TextDecoder;let re="",Q="",T=!1;for(;;){const{done:ne,value:y}=await X.read();if(ne)break;re+=te.decode(y,{stream:!0});const u=re.split(`
`);re=u.pop()||"";for(const R of u)if(R.startsWith("data: "))try{const b=JSON.parse(R.slice(6));b.out&&(Q+=b.out,C(d=>({...d,[v]:{...d[v],output:Q}}))),b.done&&(T=b.ok===!0)}catch{}}C(ne=>({...ne,[v]:{pkg:v,status:T?"ok":"error",output:Q,showOutput:!T}}))}catch(Y){if(Y.name==="AbortError")return;C(X=>({...X,[v]:{pkg:v,status:"error",output:`Erro: ${Y.message}`,showOutput:!0}}))}},[K,z,t]),i=v=>{C(S=>({...S,[v]:{...S[v],showOutput:!S[v].showOutput}}))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/60",onClick:s}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:v=>v.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1a2413] border-t border-gray-700/60 rounded-t-3xl shadow-2xl flex flex-col max-h-[92vh]",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/40 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ft,{size:16,className:"text-yellow-400"}),e.jsx("span",{className:"text-[15px] font-bold text-white",children:"Biblioteca de Pacotes"}),e.jsx("span",{className:"text-[10px] text-green-400 bg-green-900/30 border border-green-700/30 px-2 py-0.5 rounded-full",children:"instalação real"})]}),e.jsx("button",{onClick:s,className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:17})})]}),e.jsx("div",{className:"px-4 pt-2.5 pb-0 shrink-0",children:e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-blue-900/20 border border-blue-700/30 rounded-xl text-[11px] text-blue-300",children:[e.jsx(Vt,{size:12,className:"shrink-0"}),"Instala no servidor em ",e.jsx("code",{className:"font-mono text-blue-200 mx-1",children:"~/sk-user-workspace/"})," — use ",e.jsx("strong",{children:"Sync"})," + ",e.jsx("strong",{children:"Rodar"})," para executar"]})}),e.jsx("div",{className:"px-4 pt-2.5 pb-2 shrink-0",children:e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2.5 bg-[#0d1409] border border-gray-700/50 rounded-2xl focus-within:border-yellow-600/60 transition-colors",children:[e.jsx(ga,{size:15,className:"text-gray-600 shrink-0"}),e.jsx("input",{ref:L,value:o,onChange:v=>D(v.target.value),onKeyDown:v=>{v.key==="Enter"&&ee(o)},placeholder:"Buscar pacote npm ou biblioteca...",className:"flex-1 bg-transparent outline-none text-[13px] text-gray-200 placeholder-gray-700"}),o&&e.jsx("button",{onClick:()=>{r(""),c([]),k(null),U(!1)},className:"text-gray-700 hover:text-gray-400",children:e.jsx(ye,{size:13})})]})}),!o&&e.jsx("div",{className:"px-4 pb-2 shrink-0",children:e.jsx("div",{className:"flex gap-1.5 overflow-x-auto scrollbar-hide pb-1",children:hi.map(v=>e.jsxs("button",{onClick:()=>$(v.packages,v.label,v.pip),className:`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-semibold transition-all ${f===v.label?"bg-yellow-600/20 border-yellow-500/60 text-yellow-300":"bg-[#141c0d] border-gray-700/40 text-gray-400 hover:border-gray-600/60 hover:text-gray-200"}`,children:[e.jsx("span",{children:v.emoji}),e.jsx("span",{className:"whitespace-nowrap",children:v.label})]},v.label))})}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pb-8",children:[p&&e.jsxs("div",{className:"flex items-center justify-center gap-2 py-8 text-gray-500",children:[e.jsx(qe,{size:18,className:"animate-spin"}),e.jsx("span",{className:"text-[13px]",children:"Buscando..."})]}),m&&e.jsx("div",{className:"py-6 text-center",children:e.jsx("p",{className:"text-[13px] text-red-400",children:m})}),!p&&!m&&n.length===0&&!o&&!f&&e.jsxs("div",{className:"py-6 text-center",children:[e.jsx(Ft,{size:28,className:"text-gray-700 mx-auto mb-2"}),e.jsx("p",{className:"text-[13px] text-gray-500",children:"Busque por nome ou escolha uma categoria"}),e.jsx("p",{className:"text-[11px] text-gray-700 mt-1",children:'Ex: "express", "axios", "mongoose", "flask"'})]}),!p&&n.map(v=>{const S=K[v.name];return e.jsxs("div",{className:"py-3 border-b border-gray-800/50 last:border-0",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2 mb-2",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("span",{className:"text-[13px] font-bold text-gray-100 font-mono",children:v.name}),v.version!=="latest"&&e.jsxs("span",{className:"text-[10px] text-gray-600 bg-gray-800/50 px-1.5 py-0.5 rounded font-mono",children:["v",v.version]}),v.score&&v.score.final>.7&&e.jsxs("span",{className:"text-[9px] text-yellow-500 flex items-center gap-0.5",children:[e.jsx(Nr,{size:9,fill:"currentColor"})," popular"]}),z&&e.jsx("span",{className:"text-[9px] text-blue-400 bg-blue-900/20 px-1.5 py-0.5 rounded border border-blue-700/30",children:"pip"})]}),v.description&&e.jsx("p",{className:"text-[11px] text-gray-400 mt-0.5 line-clamp-2 leading-relaxed",children:v.description})]}),v.links?.npm&&e.jsx("a",{href:v.links.npm,target:"_blank",rel:"noopener noreferrer",className:"shrink-0 text-gray-700 hover:text-blue-400 mt-0.5",children:e.jsx(xt,{size:12})})]}),e.jsxs("div",{className:"flex gap-1.5 flex-wrap",children:[e.jsx("button",{onClick:()=>N(v.name),disabled:S?.status==="installing",className:`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-bold transition-all disabled:opacity-60 ${S?.status==="ok"?"bg-green-700/30 border border-green-600/40 text-green-400":S?.status==="error"?"bg-red-700/20 border border-red-600/30 text-red-400":S?.status==="installing"?"bg-yellow-700/20 border border-yellow-600/30 text-yellow-400":"bg-yellow-600/15 border border-yellow-600/30 text-yellow-300 hover:bg-yellow-600/25 active:scale-95"}`,children:S?.status==="installing"?e.jsxs(e.Fragment,{children:[e.jsx(qe,{size:11,className:"animate-spin"})," Instalando..."]}):S?.status==="ok"?e.jsxs(e.Fragment,{children:[e.jsx(St,{size:11})," Instalado!"]}):S?.status==="error"?e.jsxs(e.Fragment,{children:[e.jsx(Tt,{size:11})," Erro — Tentar de novo"]}):e.jsxs(e.Fragment,{children:[e.jsx(pt,{size:11})," ",z?"pip install":"npm install"]})}),!z&&e.jsx("button",{onClick:()=>N(v.name,!0),disabled:S?.status==="installing",className:"flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold border border-gray-700/40 text-gray-500 hover:text-gray-300 hover:border-gray-600/60 active:scale-95 disabled:opacity-40",children:"-D (dev)"})]}),S&&S.output&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("button",{onClick:()=>i(v.name),className:"flex items-center gap-1.5 text-[10px] text-gray-600 hover:text-gray-400 transition-colors",children:[e.jsx(Vt,{size:10}),S.showOutput?"Ocultar saída":"Ver saída",S.showOutput?e.jsx(Do,{size:10}):e.jsx(ba,{size:10})]}),S.showOutput&&e.jsx("pre",{className:"mt-1.5 p-2.5 bg-black/60 border border-gray-800/60 rounded-xl text-[10px] text-green-300/80 font-mono overflow-x-auto max-h-40 overflow-y-auto leading-relaxed whitespace-pre-wrap break-words",children:S.output})]})]},v.name)})]})]})})]})}const Es="./".replace(/\/$/,"")+"/api";function vi({onClose:t,files:s,projectName:o}){const[r,n]=a.useState([]),[c,p]=a.useState(!0),[h,m]=a.useState(!1),[j,f]=a.useState(null),[k,z]=a.useState(""),[U,K]=a.useState(""),C=a.useCallback(async()=>{p(!0),K("");try{const $=await fetch(`${Es}/drive/list`),D=await $.json();if(!$.ok)throw new Error(D.error??"Erro ao carregar Drive");n(D.files||[])}catch($){K($.message)}finally{p(!1)}},[]);a.useEffect(()=>{C()},[C]);const L=async()=>{m(!0),z("📦 Compactando projeto..."),K("");try{const $=await Hr(s),D=new Date().toISOString().slice(0,16).replace("T","_").replace(/:/g,"-"),N=`sk-backup_${o.replace(/\s+/g,"-").toLowerCase()}_${D}.zip`;z("☁️ Enviando para o Google Drive...");const i=await fetch(`${Es}/drive/upload`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:N,zipBase64:$})}),v=await i.json();if(!i.ok)throw new Error(v.error??"Erro no upload");z(`✅ Backup "${N}" salvo no Drive!`),await C(),setTimeout(()=>z(""),5e3)}catch($){K($.message),z("")}finally{m(!1)}},V=async($,D)=>{if(confirm(`Apagar "${D}" do Drive?`)){f($);try{const N=await fetch(`${Es}/drive/delete/${$}`,{method:"DELETE"});if(!N.ok){const i=await N.json();throw new Error(i.error??"Erro ao apagar")}n(i=>i.filter(v=>v.id!==$))}catch(N){K(N.message)}finally{f(null)}}},I=Object.keys(s).length,ee=Math.round(Object.values(s).join("").length/1024);return e.jsx("div",{className:"fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm",onClick:t,children:e.jsxs("div",{className:"w-full max-w-lg bg-[#141c0d] border-t border-gray-700/50 rounded-t-3xl shadow-2xl overflow-hidden",style:{maxHeight:"90vh"},onClick:$=>$.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center gap-3 px-5 pt-5 pb-4 border-b border-gray-700/40",children:[e.jsx("div",{className:"w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0",children:e.jsx(Ks,{size:18,className:"text-blue-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[15px] font-bold text-white",children:"Backup no Google Drive"}),e.jsxs("p",{className:"text-[11px] text-gray-500 truncate",children:[I," arquivo",I!==1?"s":""," · ~",ee," KB no projeto atual"]})]}),e.jsx("button",{onClick:t,className:"p-2 rounded-xl hover:bg-white/5 text-gray-500 hover:text-gray-300 shrink-0",children:e.jsx(ye,{size:18})})]}),e.jsxs("div",{className:"px-5 py-4 border-b border-gray-700/30",children:[e.jsxs("button",{onClick:L,disabled:h||I===0,className:"w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-[15px] hover:from-blue-500 hover:to-blue-400 disabled:opacity-40 transition-all active:scale-[0.98] shadow-lg shadow-blue-900/40",children:[h?e.jsx(qe,{size:18,className:"animate-spin"}):e.jsx(_t,{size:18}),h?"Enviando...":"Fazer Backup Agora (.zip)"]}),k&&e.jsx("p",{className:"mt-2.5 text-[12px] text-center font-medium text-green-400",children:k}),U&&e.jsxs("p",{className:"mt-2.5 text-[12px] text-center text-red-400",children:["❌ ",U]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto",style:{maxHeight:"calc(90vh - 230px)"},children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-3",children:[e.jsxs("p",{className:"text-[12px] font-semibold text-gray-400",children:["Backups salvos no Drive (",r.length,")"]}),e.jsx("button",{onClick:C,disabled:c,className:"p-1.5 rounded-lg text-gray-600 hover:text-gray-300 hover:bg-white/5",children:e.jsx(Nt,{size:13,className:c?"animate-spin":""})})]}),c?e.jsx("div",{className:"flex items-center justify-center py-10",children:e.jsx(qe,{size:20,className:"animate-spin text-gray-600"})}):r.length===0?e.jsxs("div",{className:"flex flex-col items-center gap-2 py-10 px-6 text-center",children:[e.jsx(uo,{size:28,className:"text-gray-700"}),e.jsx("p",{className:"text-[13px] text-gray-600",children:"Nenhum backup encontrado no Drive"}),e.jsx("p",{className:"text-[11px] text-gray-700",children:'Clique em "Fazer Backup" acima para salvar'})]}):e.jsx("div",{className:"px-4 pb-6 space-y-2",children:r.map($=>e.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-2xl border border-gray-700/40 bg-[#1c2714] hover:border-gray-600/40 transition-colors",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0",children:e.jsx(uo,{size:14,className:"text-blue-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[12px] font-semibold text-gray-200 truncate",children:$.name}),e.jsxs("p",{className:"text-[10px] text-gray-600",children:[new Date($.modifiedTime).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"}),$.size?` · ${Math.round(Number($.size)/1024)} KB`:""]})]}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[$.webViewLink&&e.jsx("a",{href:$.webViewLink,target:"_blank",rel:"noopener noreferrer",className:"p-1.5 rounded-lg text-gray-600 hover:text-blue-400 hover:bg-blue-500/10 transition-colors",title:"Abrir no Drive",children:e.jsx(xt,{size:13})}),e.jsx("button",{onClick:()=>V($.id,$.name),disabled:j===$.id,className:"p-1.5 rounded-lg text-gray-600 hover:text-red-400 hover:bg-red-500/10 transition-colors",title:"Apagar",children:j===$.id?e.jsx(qe,{size:13,className:"animate-spin"}):e.jsx(dt,{size:13})})]})]},$.id))})]})]})})}function yi({vfs:t,projectName:s}){const[o,r]=a.useState("inicio"),[n,c]=a.useState(""),[p,h]=a.useState("android-pwa"),[m,j]=a.useState("importar"),[f,k]=a.useState(""),[z,U]=a.useState(""),[K,C]=a.useState(!1),[L,V]=a.useState(""),[I,ee]=a.useState(!1),[$,D]=a.useState(!1),[N,i]=a.useState(""),[v,S]=a.useState(!1),[G,J]=a.useState(null),[Y,X]=a.useState("");a.useEffect(()=>{if(!$||!t)return;const x=t.onChange(()=>{t.listFiles().length>0&&D(!1)});return()=>{x()}},[$,t]);const te=a.useCallback(async()=>{if(t){if(t.listFiles().length===0){D(!0);return}D(!1),ee(!0);try{const x=t.toJSON();await Aa(x,s||"projeto")}finally{ee(!1)}}},[t,s]),re=a.useCallback(async()=>{C(!0),V("");try{const x=f.trim()||window.location.origin,E=await fetch(`/api/twa-package?url=${encodeURIComponent(x)}`);if(!E.ok){let ce="Erro ao gerar pacote";try{ce=(await E.json()).error||ce}catch{}throw new Error(ce)}const F=await E.blob(),H=E.headers.get("Content-Disposition")||"",oe=/filename="([^"]+)"/.exec(H)?.[1]??"twa-app.zip";xa.saveAs(F,oe)}catch(x){V(x instanceof Error?x.message:"Não foi possível gerar o pacote. Verifique a URL e tente novamente.")}finally{C(!1)}},[f]),Q=a.useCallback(()=>{if(!G)return;const{url:x,score:E,passed:F,total:H,items:M}=G,oe=E>=80?"#16a34a":E>=50?"#ca8a04":"#dc2626",ce=E>=80?"Pronto para instalar":E>=50?"Quase lá — corrija os itens em vermelho":"Precisa de ajustes antes de instalar",O=ue=>ue.replace(/[&<>"']/g,ve=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ve]),he=new Date().toLocaleString("pt-BR"),Ne=M.map(ue=>{const ve=ue.status==="ok"?"✅":ue.status==="warn"?"⚠️":"❌",_=ue.status==="ok"?"#16a34a":ue.status==="warn"?"#ca8a04":"#dc2626",Z=ue.status!=="ok"&&ue.fix?`<div class="fix"><strong>Como corrigir:</strong> ${O(ue.fix)}</div>`:"";return`<div class="item" style="border-left:4px solid ${_}">
        <div class="item-title"><span>${ve}</span><strong>${O(ue.label)}</strong></div>
        <div class="item-detail">${O(ue.detail)}</div>
        ${Z}
      </div>`}).join(""),ge=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"/>
<title>Relatório PWA — ${O(x)}</title>
<style>
  *{box-sizing:border-box}
  body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#111;max-width:800px;margin:24px auto;padding:0 16px;line-height:1.5}
  h1{margin:0 0 4px;font-size:22px}
  .meta{color:#666;font-size:12px;margin-bottom:16px}
  .url{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;word-break:break-all;background:#f3f4f6;padding:6px 10px;border-radius:6px;display:inline-block}
  .score-card{display:flex;align-items:center;gap:20px;padding:16px;border:1px solid #e5e7eb;border-radius:10px;margin:16px 0}
  .score{font-size:42px;font-weight:700;color:${oe};line-height:1}
  .score-sub{font-size:12px;color:#666}
  .score-label{font-weight:600;color:${oe}}
  h2{font-size:16px;margin:24px 0 8px}
  .item{padding:10px 12px;margin-bottom:10px;background:#fafafa;border-radius:6px}
  .item-title{display:flex;gap:8px;align-items:center;font-size:14px}
  .item-detail{font-size:13px;color:#444;margin-top:4px;margin-left:24px}
  .fix{margin-top:6px;margin-left:24px;font-size:13px;background:#fff;border:1px dashed #d1d5db;border-radius:6px;padding:8px 10px}
  .footer{margin-top:24px;padding-top:12px;border-top:1px solid #e5e7eb;font-size:11px;color:#888;text-align:center}
  @media print{body{margin:0}.no-print{display:none}}
  .no-print{position:fixed;top:12px;right:12px}
  .no-print button{background:#16a34a;color:#fff;border:0;padding:10px 16px;border-radius:6px;font-weight:600;cursor:pointer}
</style></head><body>
<div class="no-print"><button onclick="window.print()">Imprimir / Salvar PDF</button></div>
<h1>Relatório do Verificador PWA</h1>
<div class="meta">Gerado em ${O(he)}</div>
<div class="url">${O(x)}</div>
<div class="score-card">
  <div><div class="score">${E}%</div><div class="score-sub">${F}/${H} itens</div></div>
  <div><div class="score-label">${O(ce)}</div></div>
</div>
<h2>Checklist (${M.length} itens)</h2>
${Ne}
<div class="footer">Gerado pelo SK Code Editor — Verificador PWA</div>
<script>window.addEventListener("load",function(){setTimeout(function(){window.print()},300)});<\/script>
</body></html>`,xe=window.open("","_blank");if(!xe){const ue=new Blob([ge],{type:"text/html"});xa.saveAs(ue,`relatorio-pwa-${new Date().toISOString().slice(0,10)}.html`);return}xe.document.open(),xe.document.write(ge),xe.document.close()},[G]),T=a.useCallback(async()=>{const x=N.trim();if(!x){X("Cole a URL do seu app publicado.");return}S(!0),X(""),J(null);try{const E=await fetch(`/api/pwa-check?url=${encodeURIComponent(x)}`),F=await E.json();if(!E.ok||F.error)throw new Error(F.error||"Erro ao verificar");J(F)}catch(E){X((E instanceof Error?E.message:"")||"Não foi possível verificar. Confira se a URL está correta e o app está publicado.")}finally{S(!1)}},[N]),ne=(x,E)=>{navigator.clipboard.writeText(x).catch(()=>{}),c(E),setTimeout(()=>c(""),1500)},y=({children:x,copyKey:E})=>e.jsxs("div",{className:"relative group my-2",children:[e.jsx("pre",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-3 text-sm text-[#a8d5a2] overflow-x-auto whitespace-pre-wrap break-all font-mono leading-relaxed",children:x}),E&&e.jsx("button",{onClick:()=>ne(x,E),className:"absolute top-2 right-2 text-xs px-2 py-0.5 rounded bg-[#2d4a1e] text-[#7ec87a] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#3d5e2a]",children:n===E?"✓ Copiado":"Copiar"})]}),u=({children:x})=>e.jsx("h2",{className:"text-[#7ec87a] font-bold text-base mt-5 mb-2 flex items-center gap-2",children:x}),R=({children:x})=>e.jsx("h3",{className:"text-[#5aab56] font-semibold text-sm mt-4 mb-1",children:x}),b=({children:x})=>e.jsx("p",{className:"text-[#8cba89] text-sm leading-relaxed mb-2",children:x}),d=({children:x})=>e.jsxs("li",{className:"text-[#8cba89] text-sm leading-relaxed list-none flex gap-2 mb-1",children:[e.jsx("span",{className:"text-[#5aab56] shrink-0",children:"›"}),e.jsx("span",{children:x})]}),w=({color:x,children:E})=>{const F={green:"bg-[#1a3d14] text-[#7ec87a] border-[#3d6e2a]",blue:"bg-[#0d1e3d] text-[#6ab4ff] border-[#1e4080]",yellow:"bg-[#2d2200] text-[#d4aa40] border-[#5a4500]",red:"bg-[#2d0d0d] text-[#d47070] border-[#5a1e1e]"};return e.jsx("span",{className:`inline-block text-xs px-2 py-0.5 rounded border font-mono ${F[x]}`,children:E})},se=[{id:"inicio",icon:"🏠",title:"Início Rápido",content:e.jsxs("div",{children:[e.jsxs(b,{children:["Bem-vindo ao ",e.jsx("strong",{className:"text-[#7ec87a]",children:"SK Code Editor"})," — editor profissional com terminal real, IA integrada (Jasmim), GitHub, banco de dados e muito mais. Este manual é seu guia completo."]}),e.jsx(u,{children:"⚡ O que você pode fazer agora"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(d,{children:"Escrever código em qualquer linguagem com Monaco Editor (VS Code no browser)"}),e.jsx(d,{children:"Executar comandos reais no terminal (npm install, python, git, etc.)"}),e.jsx(d,{children:"Pedir ajuda para a Jasmim (IA) para criar, corrigir e melhorar código"}),e.jsx(d,{children:"Conectar seu repositório GitHub e fazer push/pull direto no editor"}),e.jsx(d,{children:"Configurar banco de dados PostgreSQL (Neon) gratuitamente"}),e.jsx(d,{children:"Ver preview ao vivo do seu projeto HTML/React"}),e.jsx(d,{children:"Importar/exportar projetos como ZIP ou TAR.GZ"}),e.jsx(d,{children:"Instalar o app no celular como PWA (funciona offline)"})]}),e.jsx(u,{children:"🎯 Primeira vez? Faça isso"}),e.jsx("ol",{className:"space-y-2",children:["Toque no ícone 🤖 (Jasmim) na barra inferior",'Digite: "Crie um projeto Node.js Express com conexão Neon DB"',"A Jasmim cria tudo automaticamente — você só aplica os arquivos","Rode npm install e npm start no terminal","Veja o preview no ícone 👁️"].map((x,E)=>e.jsxs("li",{className:"flex gap-3 text-sm text-[#8cba89]",children:[e.jsxs("span",{className:"text-[#7ec87a] font-bold shrink-0",children:[E+1,"."]}),e.jsx("span",{children:x})]},E))}),e.jsx(u,{children:"📱 Instalar como App (PWA)"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(d,{children:'Android/Chrome: Menu ⋮ → "Adicionar à tela inicial"'}),e.jsx(d,{children:'iOS/Safari: Compartilhar → "Adicionar à Tela de Início"'}),e.jsx(d,{children:"Desktop/Chrome: Ícone ⬇ na barra de endereço"})]})]})},{id:"instalar",icon:"📲",title:"Instalar como App",content:(()=>{const x=[{id:"verificador",label:"Verificador",icon:"🔍"},{id:"android-pwa",label:"Android PWA",icon:"🤖"},{id:"ios-pwa",label:"iOS PWA",icon:"🍎"},{id:"pwabuilder",label:"APK Online",icon:"⚡"},{id:"twa",label:"APK Projeto",icon:"📦"},{id:"universal",label:"Guia Universal",icon:"🌐"}],E=({n:M,children:oe})=>e.jsxs("li",{className:"flex gap-3 mb-3",children:[e.jsx("span",{className:"bg-[#2d4a1e] text-[#7ec87a] font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0 mt-0.5",children:M}),e.jsx("span",{className:"text-[#8cba89] text-sm leading-relaxed",children:oe})]}),F=({color:M,children:oe})=>{const ce={green:"bg-[#0d2210] border-[#2d5a1e] text-[#7ec87a]",blue:"bg-[#0a1530] border-[#1e3d7a] text-[#6ab4ff]",yellow:"bg-[#1e1500] border-[#4a3800] text-[#d4aa40]"}[M];return e.jsx("div",{className:`border rounded-lg p-3 mb-3 text-sm ${ce}`,children:oe})},H={verificador:e.jsxs("div",{children:[e.jsxs(F,{color:"blue",children:["🔍 ",e.jsx("strong",{children:"Verificador PWA."})," Cole a URL do seu app publicado e veja instantaneamente o que está faltando para instalar como app no celular ou gerar APK."]}),e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-4 mb-4",children:[e.jsx("label",{className:"block text-[#5aab56] text-xs mb-2 font-semibold",children:"URL do app publicado"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",value:N,onChange:M=>{i(M.target.value),X("")},onKeyDown:M=>{M.key==="Enter"&&T()},placeholder:"https://meu-app.replit.app",className:"flex-1 bg-[#141c0d] border border-[#3d6e2a] rounded px-3 py-2 text-sm text-[#a8d5a2] placeholder-[#3d6e2a] outline-none focus:border-[#5aab56]"}),e.jsx("button",{onClick:T,disabled:v,className:"bg-[#2d4a1e] hover:bg-[#3d5e2a] disabled:opacity-50 text-[#7ec87a] font-semibold text-sm px-4 rounded transition-colors whitespace-nowrap",children:v?"⏳ Verificando...":"🔍 Verificar"})]}),Y&&e.jsx("p",{className:"text-[#d47070] text-xs mt-2",children:Y})]}),G&&(()=>{const{score:M,passed:oe,total:ce,items:O}=G,he=M>=80?"#7ec87a":M>=50?"#d4aa40":"#d47070",Ne=M>=80?"bg-[#0d2210] border-[#2d5a1e]":M>=50?"bg-[#1e1500] border-[#4a3800]":"bg-[#1a0000] border-[#5a1a1a]",ge=M>=80?"Pronto para instalar! ✅":M>=50?"Quase lá — corrija os itens em vermelho":"Precisa de ajustes antes de instalar";return e.jsxs("div",{children:[e.jsxs("div",{className:`border rounded-lg p-4 mb-4 flex items-center gap-4 ${Ne}`,children:[e.jsxs("div",{className:"text-center shrink-0",children:[e.jsxs("div",{className:"text-3xl font-bold",style:{color:he},children:[M,"%"]}),e.jsxs("div",{className:"text-xs text-[#6b8f68] mt-0.5",children:[oe,"/",ce," itens"]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",style:{color:he},children:ge}),e.jsx("div",{className:"text-xs text-[#6b8f68] mt-0.5 font-mono break-all",children:G.url})]}),e.jsx("button",{onClick:Q,className:"shrink-0 bg-[#2d4a1e] hover:bg-[#3d5e2a] text-[#7ec87a] font-semibold text-xs px-3 py-2 rounded transition-colors whitespace-nowrap",title:"Abre uma janela pronta para imprimir ou salvar como PDF",children:"📄 Baixar relatório"})]}),e.jsx("div",{className:"space-y-2",children:O.map(xe=>{const ue=xe.status==="ok",ve=xe.status==="warn",_=ue?"✅":ve?"⚠️":"❌",Z=ue?"border-[#2d5a1e]":ve?"border-[#4a3800]":"border-[#5a1a1a]",le=ue?"bg-[#0a1a0a]":ve?"bg-[#151000]":"bg-[#120000]",me=ue?"text-[#7ec87a]":ve?"text-[#d4aa40]":"text-[#d47070]";return e.jsxs("div",{className:`border rounded-lg p-3 ${le} ${Z}`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-base shrink-0",children:_}),e.jsx("span",{className:`text-sm font-semibold ${me}`,children:xe.label})]}),e.jsx("p",{className:"text-[#6b8f68] text-xs mt-1 ml-6 leading-relaxed",children:xe.detail}),!ue&&xe.fix&&e.jsxs("div",{className:"mt-2 ml-6 bg-[#0d1309] border border-[#2d4a1e] rounded p-2",children:[e.jsx("span",{className:"text-[#5aab56] text-xs font-semibold block mb-0.5",children:"💡 Como corrigir:"}),e.jsx("span",{className:"text-[#8cba89] text-xs leading-relaxed",children:xe.fix})]})]},xe.id)})}),M<80&&(()=>{const xe=["https","manifest","service-worker","icon-192","icon-512","manifest-name","manifest-start-url","manifest-display"],ue={https:{tab:"universal",label:"Guia Universal"},manifest:{tab:"android-pwa",label:"Android PWA"},"manifest-name":{tab:"android-pwa",label:"Android PWA"},"manifest-start-url":{tab:"android-pwa",label:"Android PWA"},"manifest-display":{tab:"android-pwa",label:"Android PWA"},"service-worker":{tab:"android-pwa",label:"Android PWA"},"icon-192":{tab:"android-pwa",label:"Android PWA"},"icon-512":{tab:"android-pwa",label:"Android PWA"}},_=O.filter(Z=>Z.status!=="ok").slice().sort((Z,le)=>{const me=xe.indexOf(Z.id),ke=xe.indexOf(le.id);return(me===-1?999:me)-(ke===-1?999:ke)}).slice(0,3);return _.length===0?null:e.jsxs("div",{className:"mt-4 border border-[#3d6e2a] rounded-lg p-4 bg-[#0d1a08]",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"text-base",children:"🚀"}),e.jsx("h3",{className:"text-[#7ec87a] font-semibold text-sm",children:"Por onde começar"})]}),e.jsx("p",{className:"text-[#6b8f68] text-xs mb-3",children:"Corrija estes itens primeiro — são os de maior impacto para o seu app virar PWA:"}),e.jsx("ol",{className:"space-y-3",children:_.map((Z,le)=>{const me=ue[Z.id]||{tab:"android-pwa",label:"Android PWA"};return e.jsxs("li",{className:"flex gap-3 items-start",children:[e.jsx("span",{className:"bg-[#2d4a1e] text-[#7ec87a] font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0 mt-0.5",children:le+1}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-[#a8d5a2] text-sm font-semibold",children:Z.label}),Z.fix&&e.jsx("div",{className:"text-[#6b8f68] text-xs mt-0.5 leading-relaxed",children:Z.fix}),e.jsxs("button",{onClick:()=>h(me.tab),className:"mt-2 inline-flex items-center gap-1 bg-[#2d4a1e] hover:bg-[#3d5e2a] text-[#7ec87a] text-xs font-semibold px-2.5 py-1 rounded transition-colors",children:['Ir para "',me.label,'" →']})]})]},Z.id)})})]})})(),M===100&&e.jsxs(F,{color:"green",children:["🎉 ",e.jsx("strong",{children:"Perfeito!"}),' Seu app tem todos os requisitos PWA. Instale via Chrome (Android PWA) ou gere um APK pela aba "APK Online".']})]})})()]}),"android-pwa":e.jsxs("div",{children:[e.jsxs(F,{color:"green",children:["✅ ",e.jsx("strong",{children:"Mais fácil e rápido."})," Não precisa instalar nada. O app fica na tela inicial igual a um app nativo."]}),e.jsx(u,{children:"📱 Passo a passo — Android com Chrome"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(E,{n:1,children:[e.jsx("strong",{children:"Publique seu app"})," no Replit para obter uma URL pública",e.jsx("br",{}),e.jsx("span",{className:"text-[#5aab56] font-mono text-xs",children:"ex: https://seu-app.replit.app"}),' — veja a aba "Guia Universal" se tiver dúvidas']}),e.jsxs(E,{n:2,children:["No Android, abra o ",e.jsx("strong",{children:"Google Chrome"})," e acesse a URL do app publicado"]}),e.jsxs(E,{n:3,children:["Toque nos ",e.jsx("strong",{children:"3 pontinhos (⋮)"})," no canto superior direito do Chrome"]}),e.jsxs(E,{n:4,children:["Toque em ",e.jsx("strong",{children:'"Adicionar à tela inicial"'})," ou ",e.jsx("strong",{children:'"Instalar app"'})]}),e.jsxs(E,{n:5,children:["Confirme tocando em ",e.jsx("strong",{children:'"Adicionar"'})," — o ícone aparece na tela inicial e abre sem barra do Chrome! ✅"]})]}),e.jsx(F,{color:"blue",children:"💡 Em alguns Androids aparece um banner automático na parte inferior pedindo para instalar. Basta tocar nele!"}),e.jsx(u,{children:"🔍 Se o botão de instalar não aparecer"}),e.jsx(b,{children:"O app precisa ter manifest.json e service worker válidos:"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Abra o Chrome DevTools (F12 no PC) → aba Application → Manifest"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"}),' Verifique se aparece "Installable"']}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," O SK Code Editor já tem tudo configurado ✅"]})]})]}),"ios-pwa":e.jsxs("div",{children:[e.jsxs(F,{color:"yellow",children:["⚠️ ",e.jsx("strong",{children:"Atenção:"})," No iPhone/iPad, a instalação PWA só funciona pelo ",e.jsx("strong",{children:"Safari"}),". Chrome e outros navegadores no iOS não suportam esse recurso."]}),e.jsx(u,{children:"📱 Passo a passo — iPhone e iPad"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(E,{n:1,children:["Abra o ",e.jsx("strong",{children:"Safari"})," (o navegador padrão da Apple, ícone bússola azul)"]}),e.jsxs(E,{n:2,children:["Acesse a URL do seu app publicado",e.jsx("br",{}),e.jsx("span",{className:"text-[#5aab56] font-mono text-xs",children:"ex: https://meu-app.replit.app"})]}),e.jsx(E,{n:3,children:"Aguarde o app carregar completamente"}),e.jsxs(E,{n:4,children:["Toque no botão de ",e.jsx("strong",{children:"Compartilhar"})," — o ícone de uma caixa com uma seta para cima, na barra inferior do Safari"]}),e.jsx(E,{n:5,children:"Role para baixo no menu que aparece"}),e.jsxs(E,{n:6,children:["Toque em ",e.jsx("strong",{children:'"Adicionar à Tela de Início"'})]}),e.jsxs(E,{n:7,children:["Edite o nome se quiser e toque em ",e.jsx("strong",{children:'"Adicionar"'})]}),e.jsx(E,{n:8,children:"✅ O ícone aparece na tela inicial — abre em tela cheia!"})]}),e.jsx(u,{children:"⚙️ Limitações no iOS"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#d4aa40]",children:"›"})," Notificações push não funcionam no iOS (limitação da Apple)"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#d4aa40]",children:"›"})," Armazenamento offline tem limite de 50MB no Safari"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," A aparência e funcionamento são os mesmos do Android ✅"]})]})]}),pwabuilder:e.jsxs("div",{children:[e.jsxs(F,{color:"green",children:["⚡ ",e.jsx("strong",{children:"Gera APK real sem instalar nada."})," Serviço gratuito do próprio Google. Funciona para qualquer app PWA."]}),e.jsx(u,{children:"🌐 Cole a URL do seu app e abra o PWABuilder"}),e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-4 mb-4",children:[e.jsx("label",{className:"block text-[#5aab56] text-xs mb-2 font-semibold",children:"URL do app publicado"}),e.jsx("input",{type:"url",value:z,onChange:M=>U(M.target.value),placeholder:"https://seu-app.replit.app",className:"w-full bg-[#141c0d] border border-[#3d6e2a] rounded px-3 py-2 text-sm text-[#a8d5a2] placeholder-[#3d6e2a] outline-none focus:border-[#5aab56] mb-3"}),e.jsx("a",{href:`https://pwabuilder.com/?site=${encodeURIComponent(z||"https://seu-app.replit.app")}`,target:"_blank",rel:"noopener noreferrer",className:"block w-full bg-[#2d4a1e] hover:bg-[#3d5e2a] text-[#7ec87a] font-semibold text-sm py-2 rounded text-center transition-colors",children:"⚡ Abrir no PWABuilder.com"})]}),e.jsx(u,{children:"🚀 Passo a passo"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(E,{n:1,children:["Cole a URL acima e clique em ",e.jsx("strong",{children:'"Abrir no PWABuilder.com"'})]}),e.jsx(E,{n:2,children:"O site analisa seu app (30-60 seg) — verifica manifest e service worker"}),e.jsxs(E,{n:3,children:["Role até a seção ",e.jsx("strong",{children:'"Android"'})," e clique em ",e.jsx("strong",{children:'"Download"'})]}),e.jsxs(E,{n:4,children:["Você recebe um ",e.jsx("strong",{children:".zip"})," com um ",e.jsx("strong",{children:".apk"})," já assinado dentro"]}),e.jsx(E,{n:5,children:"Transfira o .apk para o celular e instale (pode ser via Google Drive, cabo USB ou WhatsApp)"})]}),e.jsx(F,{color:"blue",children:'💡 O APK gerado pelo PWABuilder já vem assinado com uma chave de teste. Para publicar na Play Store com assinatura própria, use a aba "APK Projeto".'}),e.jsxs("details",{className:"mt-6 border border-[#2d4a1e] rounded-lg overflow-hidden",children:[e.jsx("summary",{className:"cursor-pointer bg-[#0d1309] px-4 py-3 text-[#5aab56] text-sm font-semibold select-none hover:bg-[#111e0b] transition-colors",children:"🔧 Avançado — Bubblewrap CLI (linha de comando)"}),e.jsxs("div",{className:"p-4",children:[e.jsxs(F,{color:"yellow",children:["🔧 ",e.jsx("strong",{children:"Método avançado."})," Requer Node.js, Java 17+ e Android SDK instalados no computador. Ideal para automatizar o processo ou publicar na Play Store."]}),e.jsx(u,{children:"📋 Requisitos"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 mb-4",children:[["Node.js 18+","nodejs.org","https://nodejs.org"],["Java JDK 17+","adoptium.net","https://adoptium.net"],["Android Studio","developer.android.com/studio","https://developer.android.com/studio"]].map(([M,oe,ce])=>e.jsxs("div",{className:"flex items-center justify-between bg-[#0d1309] border border-[#2d4a1e] rounded p-3",children:[e.jsx("span",{className:"text-[#8cba89] text-sm font-semibold",children:M}),e.jsx("a",{href:ce,target:"_blank",rel:"noopener noreferrer",className:"text-[#6ab4ff] text-xs underline",children:oe})]},M))}),e.jsx(u,{children:"🚀 Passo a passo"}),e.jsx(R,{children:"1. Instalar o Bubblewrap CLI"}),e.jsx(y,{copyKey:"bw-install",children:"npm install -g @bubblewrap/cli"}),e.jsx(R,{children:"2. Inicializar o projeto TWA"}),e.jsx(y,{copyKey:"bw-init",children:"bubblewrap init --manifest https://SEU-APP.replit.app/manifest.json"}),e.jsx(b,{children:"O Bubblewrap faz perguntas sobre o app (nome, ícone, cor) e cria o projeto automaticamente."}),e.jsx(R,{children:"3. Compilar o APK"}),e.jsx(y,{copyKey:"bw-build",children:"bubblewrap build"}),e.jsxs(b,{children:["Gera ",e.jsx("code",{className:"text-[#a8d5a2] font-mono",children:"app-release-signed.apk"})," na pasta do projeto."]}),e.jsx(R,{children:"4. Instalar no celular via USB"}),e.jsx(y,{copyKey:"bw-install-device",children:"adb install app-release-signed.apk"}),e.jsx(F,{color:"blue",children:"🔁 Sempre que atualizar e republicar seu app web, o APK já busca a versão mais nova automaticamente — sem gerar novo APK!"})]})]})]}),twa:e.jsxs("div",{children:[e.jsxs(F,{color:"blue",children:["📦 ",e.jsx("strong",{children:"Gera um projeto Android completo."})," Você compila com Android Studio e tem controle total — ideal para publicar na Play Store com sua própria assinatura."]}),e.jsx(u,{children:"⬇️ Gerar e baixar o projeto Android"}),e.jsx(b,{children:"Cole a URL do seu app publicado abaixo e clique em Baixar. Você receberá um .zip com o projeto Android completo pronto para compilar:"}),e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-4 mb-4",children:[e.jsx("label",{className:"block text-[#5aab56] text-xs mb-2 font-semibold",children:"URL do app publicado"}),e.jsx("input",{type:"url",value:f,onChange:M=>k(M.target.value),placeholder:"https://meu-app.replit.app",className:"w-full bg-[#141c0d] border border-[#3d6e2a] rounded px-3 py-2 text-sm text-[#a8d5a2] placeholder-[#3d6e2a] outline-none focus:border-[#5aab56] mb-3"}),L&&e.jsx("p",{className:"text-[#d47070] text-xs mb-2",children:L}),e.jsx("button",{onClick:re,disabled:K,className:"w-full bg-[#2d4a1e] hover:bg-[#3d5e2a] disabled:opacity-50 text-[#7ec87a] font-semibold text-sm py-2 rounded transition-colors",children:K?"⏳ Gerando pacote...":"📦 Baixar Projeto Android (.zip)"})]}),e.jsx(u,{children:"🛠️ O que tem no ZIP baixado"}),e.jsxs("ul",{className:"space-y-1 mb-4",children:[e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," ",e.jsx("code",{className:"text-[#a8d5a2] font-mono",children:"AndroidManifest.xml"})," — configuração do app com sua URL"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," ",e.jsx("code",{className:"text-[#a8d5a2] font-mono",children:"app/build.gradle"})," — dependências Android e configuração de build"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," ",e.jsx("code",{className:"text-[#a8d5a2] font-mono",children:"strings.xml"})," — nome do app e URL configurada"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," ",e.jsx("code",{className:"text-[#a8d5a2] font-mono",children:".well-known/assetlinks.json"})," — template para verificação de domínio"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," ",e.jsx("code",{className:"text-[#a8d5a2] font-mono",children:"README.md"})," — instruções completas de compilação"]})]}),e.jsx(u,{children:"🏗️ Compilar com Android Studio (recomendado)"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(E,{n:1,children:["Baixe e instale o ",e.jsx("a",{href:"https://developer.android.com/studio",target:"_blank",rel:"noopener noreferrer",className:"text-[#6ab4ff] underline",children:"Android Studio"})," no seu computador"]}),e.jsx(E,{n:2,children:"Extraia o .zip baixado em uma pasta"}),e.jsxs(E,{n:3,children:["Abra o Android Studio → ",e.jsx("strong",{children:"File → Open"})," → selecione a pasta extraída"]}),e.jsx(E,{n:4,children:"Aguarde o Gradle sincronizar (primeira vez pode demorar 5-10 min)"}),e.jsxs(E,{n:5,children:["Vá em ",e.jsx("strong",{children:"Build → Generate Signed Bundle / APK → APK"})]}),e.jsxs(E,{n:6,children:["Clique em ",e.jsx("strong",{children:'"Create new keystore..."'})," — preencha os dados e salve o arquivo .jks ",e.jsx("span",{className:"text-[#d47070]",children:"(guarde esse arquivo! É sua assinatura)"})]}),e.jsxs(E,{n:7,children:["Escolha ",e.jsx("strong",{children:"release"})," e clique em ",e.jsx("strong",{children:"Finish"})]}),e.jsxs(E,{n:8,children:["O APK fica em: ",e.jsx("code",{className:"text-[#a8d5a2] font-mono text-xs",children:"app/release/app-release.apk"})]})]}),e.jsx(u,{children:"📲 Para publicar na Play Store"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Crie conta em ",e.jsx("a",{href:"https://play.google.com/console",target:"_blank",rel:"noopener noreferrer",className:"text-[#6ab4ff] underline",children:"Google Play Console"})," (taxa única de US$ 25)"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Faça upload do .apk ou .aab (Android App Bundle)"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Preencha as informações do app (nome, ícone, descrição, screenshots)"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Configure o assetlinks.json no seu servidor (instruções no README)"]})]})]}),universal:e.jsxs("div",{children:[e.jsxs(F,{color:"green",children:["🌐 ",e.jsx("strong",{children:"Este guia se aplica a QUALQUER projeto Replit."})," Siga os passos abaixo para transformar qualquer app web em app no celular."]}),e.jsx(u,{children:"📋 PASSO 1 — Escolha o plano Replit correto"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 mb-4",children:[{plano:"Free (Gratuito)",ok:"PWA via Chrome/Safari ✅",nok:"URL aleatória no Replit",rec:"Funciona para uso pessoal"},{plano:"Hacker / Pro",ok:"Domínio .replit.app fixo ✅",nok:"—",rec:"Recomendado para apps sérios"},{plano:"Custom Domain",ok:"Seu próprio domínio ✅",nok:"Custo extra",rec:"Para apps profissionais/Play Store"}].map(({plano:M,ok:oe,nok:ce,rec:O})=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-3",children:[e.jsx("div",{className:"text-[#7ec87a] font-bold text-sm mb-1",children:M}),e.jsxs("div",{className:"text-[#8cba89] text-xs",children:["✅ ",oe]}),ce!=="—"&&e.jsxs("div",{className:"text-[#d4aa40] text-xs",children:["⚠️ ",ce]}),e.jsxs("div",{className:"text-[#5aab56] text-xs mt-1",children:["→ ",O]})]},M))}),e.jsx(u,{children:"🚀 PASSO 2 — Publicar o app no Replit"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(E,{n:1,children:["Abra seu projeto no ",e.jsx("a",{href:"https://replit.com",target:"_blank",rel:"noopener noreferrer",className:"text-[#6ab4ff] underline",children:"replit.com"})]}),e.jsx(E,{n:2,children:"Certifique-se que o app está rodando (botão ▶ Run)"}),e.jsxs(E,{n:3,children:["Clique no botão ",e.jsx("strong",{children:'"Deploy"'})," (avião de papel) no canto superior direito"]}),e.jsxs(E,{n:4,children:["Escolha ",e.jsx("strong",{children:'"Reserved VM"'})," ou ",e.jsx("strong",{children:'"Autoscale"'})]}),e.jsx(E,{n:5,children:"Configure o domínio (ou use o .replit.app gerado automaticamente)"}),e.jsxs(E,{n:6,children:["Clique em ",e.jsx("strong",{children:'"Deploy"'})," e aguarde"]}),e.jsxs(E,{n:7,children:["Copie a URL gerada — ex: ",e.jsx("code",{className:"text-[#a8d5a2] font-mono text-xs",children:"https://meu-app.replit.app"})]})]}),e.jsx(u,{children:"📱 PASSO 3 — Verificar se o app é PWA-pronto"}),e.jsx(b,{children:"Para funcionar como app, seu projeto precisa ter:"}),e.jsx("div",{className:"space-y-2 mb-4",children:[["manifest.json","Arquivo na pasta public/ com nome, ícones e cores","obrigatório"],["Service Worker (sw.js)","Permite funcionamento offline e instalação","obrigatório"],["Ícones 192px e 512px","Imagens PNG para o ícone do app","obrigatório"],["HTTPS","O Replit Deploy já usa HTTPS automaticamente","automático"]].map(([M,oe,ce])=>e.jsxs("div",{className:"flex items-start gap-3 bg-[#0d1309] border border-[#2d4a1e] rounded p-3",children:[e.jsx("span",{className:`text-xs px-1.5 py-0.5 rounded shrink-0 mt-0.5 ${ce==="automático"?"bg-[#0d1e3d] text-[#6ab4ff]":"bg-[#1a3d14] text-[#7ec87a]"}`,children:ce}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#7ec87a] text-sm font-semibold",children:M}),e.jsx("div",{className:"text-[#6b8f68] text-xs",children:oe})]})]},M))}),e.jsx(F,{color:"blue",children:'💡 O SK Code Editor já tem manifest.json, sw.js e ícones prontos. Para outros projetos seus no Replit, peça para a Jasmim: "Adicione PWA neste projeto com manifest.json e service worker".'}),e.jsx(u,{children:"🔄 PASSO 4 — Escolha o método de instalação"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 mb-4",children:[["📱 PWA (mais fácil)","Chrome → 3 pontinhos → Instalar","Qualquer projeto publicado","Instantâneo"],["⚡ APK via PWABuilder","pwabuilder.com → cola URL → baixa APK","Projetos PWA-válidos","5 minutos"],["📦 APK via TWA ZIP","Baixe o pacote aqui → compile com Android Studio","Qualquer projeto publicado","30 minutos (1ª vez)"],["🔧 Bubblewrap CLI","npm install bubblewrap → gera APK via terminal","Desenvolvedores avançados","1-2 horas (1ª vez)"]].map(([M,oe,ce,O])=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-3",children:[e.jsx("div",{className:"text-[#7ec87a] font-bold text-sm",children:M}),e.jsx("div",{className:"text-[#8cba89] text-xs mt-1",children:oe}),e.jsxs("div",{className:"flex gap-3 mt-2 text-xs",children:[e.jsxs("span",{className:"text-[#5aab56]",children:["✓ ",ce]}),e.jsxs("span",{className:"text-[#6b8f68]",children:["⏱ ",O]})]})]},M))}),e.jsx(u,{children:"♻️ Aplicar em todos os seus projetos"}),e.jsx(b,{children:"Para cada app que você tiver no Replit, repita estes passos:"}),e.jsx("ol",{className:"mb-2",children:["Publique o app (Deploy) → copie a URL","Teste se o manifest.json está acessível: URL/manifest.json","Abra no Chrome do celular → instale como PWA","Para APK: cole a URL aqui ou no PWABuilder.com e baixe o pacote"].map((M,oe)=>e.jsx(E,{n:oe+1,children:M},oe))})]})};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-4",children:[e.jsxs("div",{className:"flex-1 bg-[#0d2210] border border-[#2d5a1e] rounded-lg p-3 flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[#7ec87a] font-semibold text-sm",children:"⬇️ ZIP do Projeto"}),e.jsx("p",{className:"text-[#5aab56] text-xs mt-0.5",children:"Exporta todos os arquivos do editor"})]}),e.jsx("button",{onClick:te,disabled:I,className:"shrink-0 bg-[#2d4a1e] hover:bg-[#3d5e2a] disabled:opacity-50 text-[#7ec87a] font-semibold text-xs px-4 py-2 rounded-lg transition-colors",children:I?"⏳ Gerando...":"⬇️ Baixar ZIP"})]}),e.jsxs("div",{className:"flex-1 bg-[#0d1a30] border border-[#1e3d7a] rounded-lg p-3 flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[#6ab4ff] font-semibold text-sm",children:"⬇️ Pacote Android TWA"}),e.jsx("p",{className:"text-[#4a8fd4] text-xs mt-0.5",children:"Projeto Android para gerar APK do seu app"})]}),e.jsx("button",{onClick:()=>{h("twa"),re()},disabled:K,className:"shrink-0 bg-[#1e3d7a] hover:bg-[#2a5099] disabled:opacity-50 text-[#6ab4ff] font-semibold text-xs px-4 py-2 rounded-lg transition-colors whitespace-nowrap",children:K?"⏳ Gerando...":"⬇️ Baixar TWA"})]})]}),$&&e.jsxs("div",{className:"bg-[#2d2200] border border-[#5a4500] text-[#d4aa40] rounded-lg p-3 mb-4 text-sm flex items-start gap-2",children:[e.jsx("span",{className:"shrink-0",children:"⚠️"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Nenhum arquivo no projeto"}),e.jsx("p",{className:"text-xs text-[#b89030] mt-0.5",children:"Adicione ou crie arquivos no editor antes de baixar o ZIP."})]})]}),e.jsx("div",{className:"flex gap-1 mb-4 overflow-x-auto pb-1 flex-wrap",children:x.map(M=>e.jsxs("button",{onClick:()=>h(M.id),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${p===M.id?"bg-[#2d4a1e] text-[#7ec87a] border border-[#5aab56]":"bg-[#141c0d] text-[#5a7a56] border border-[#2d4a1e] hover:text-[#7ec87a]"}`,children:[M.icon," ",M.label]},M.id))}),H[p]]})})()},{id:"terminal",icon:"🖥️",title:"Terminal",content:e.jsxs("div",{children:[e.jsxs(b,{children:["O terminal do SK Code Editor é um bash ",e.jsx("strong",{className:"text-[#7ec87a]",children:"real"})," — todos os comandos rodam no servidor e retornam saída verdadeira."]}),e.jsx(u,{children:"📂 Diretório de trabalho"}),e.jsx(y,{copyKey:"cwd",children:"/home/runner/sk-user-workspace/"}),e.jsx(b,{children:"Todo projeto fica dentro desta pasta. Use paths relativos normalmente."}),e.jsx(u,{children:"🔧 Comandos mais usados"}),e.jsx(R,{children:"Gerenciamento de pacotes Node.js"}),e.jsx(y,{copyKey:"npm-install",children:"npm install express axios cors dotenv"}),e.jsx(y,{copyKey:"npm-run",children:"npm run dev npm start npm run build"}),e.jsx(R,{children:"Gerenciamento de pacotes Python"}),e.jsx(y,{copyKey:"pip",children:"pip install flask requests pandas sqlalchemy"}),e.jsx(y,{copyKey:"python-run",children:"python app.py python -m pytest python -m py_compile arquivo.py"}),e.jsx(R,{children:"Navegação e arquivos"}),e.jsx(y,{copyKey:"nav",children:"ls -la           # listar arquivos pwd              # diretório atual cd meu-projeto   # entrar na pasta mkdir nova-pasta # criar pasta cat package.json # ler arquivo"}),e.jsx(R,{children:"Processos"}),e.jsx(y,{copyKey:"proc",children:"ps aux | grep node    # ver processos Node rodando kill -9 PID          # matar processo pelo ID lsof -i :3000        # ver quem usa a porta 3000"}),e.jsx(R,{children:"Git no terminal"}),e.jsx(y,{copyKey:"git-terminal",children:'git status git add . git commit -m "minha mensagem" git push origin main'}),e.jsx(u,{children:"⚙️ Variáveis de ambiente"}),e.jsxs(b,{children:["Crie um arquivo ",e.jsx(w,{color:"green",children:".env"})," na raiz do projeto:"]}),e.jsx(y,{copyKey:"env-file",children:"DATABASE_URL=postgresql://user:pass@host/db?sslmode=require PORT=3000 JWT_SECRET=minha-chave-secreta-longa-aqui NODE_ENV=development"}),e.jsxs(b,{children:["Instale o dotenv e use ",e.jsx(w,{color:"green",children:"require('dotenv').config()"})," no início do seu script para carregar as variáveis."]}),e.jsx(u,{children:"🚀 Rodar um servidor"}),e.jsx(y,{copyKey:"server",children:"node index.js           # Node puro npm run dev             # com nodemon (auto-restart) npx ts-node src/main.ts # TypeScript direto uvicorn main:app --reload # FastAPI/Python"}),e.jsx(u,{children:"💡 Dicas"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(d,{children:"Use Ctrl+C para parar qualquer processo rodando"}),e.jsx(d,{children:"Se travar, feche e reabra o terminal (ícone ✕ → ▶)"}),e.jsx(d,{children:"O terminal salva histórico — use ↑ para repetir comandos"}),e.jsx(d,{children:'Peça para a Jasmim rodar comandos: "rode npm install e mostre o resultado"'})]})]})},{id:"neon",icon:"🗄️",title:"Banco de Dados (Neon)",content:e.jsxs("div",{children:[e.jsxs(b,{children:[e.jsx("strong",{className:"text-[#7ec87a]",children:"Neon DB"})," é PostgreSQL serverless gratuito — a melhor opção para projetos profissionais. Sem cartão de crédito."]}),e.jsx(u,{children:"🚀 Setup em 5 minutos"}),e.jsx("ol",{className:"space-y-3 mb-4",children:[{step:"Crie conta gratuita em",link:"https://neon.tech",detail:"plano Free, sem cartão"},{step:'Clique em "New Project"',link:null,detail:"dê um nome ao banco (ex: meu-app)"},{step:"Copie a Connection String",link:null,detail:"começa com postgresql://..."},{step:"Cole no painel 🗄️ do editor",link:null,detail:"ícone de banco na barra inferior"},{step:"Pronto!",link:null,detail:"a Jasmim já tem acesso ao seu banco"}].map(({step:x,link:E,detail:F},H)=>e.jsxs("li",{className:"flex gap-3",children:[e.jsxs("span",{className:"text-[#7ec87a] font-bold shrink-0 w-5",children:[H+1,"."]}),e.jsxs("div",{children:[e.jsxs("span",{className:"text-[#8cba89] text-sm",children:[x," "]}),E&&e.jsx("span",{className:"text-[#6ab4ff] text-sm",children:E}),e.jsx("div",{className:"text-[#5aab56] text-xs mt-0.5",children:F})]})]},H))}),e.jsx(u,{children:"🔑 Obter Neon API Key (para automação)"}),e.jsx(b,{children:"Com a API Key, a Jasmim pode criar o banco automaticamente para você:"}),e.jsxs("ol",{className:"space-y-1",children:[e.jsx(d,{children:"Entre em https://console.neon.tech"}),e.jsx(d,{children:"Vá em Settings → API Keys → Create API Key"}),e.jsx(d,{children:"A chave começa com neon_api_..."}),e.jsx(d,{children:'Envie a chave para a Jasmim: "Crie um banco chamado meu-app"'})]}),e.jsx(u,{children:"📦 Instalar dependências"}),e.jsx(y,{copyKey:"neon-install",children:"npm install @neondatabase/serverless dotenv"}),e.jsx(u,{children:"🔌 Arquivo de conexão"}),e.jsx(y,{copyKey:"neon-connect",children:`// db/neon.js
const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

const sql = neon(process.env.DATABASE_URL);

async function initDb() {
  await sql\`
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      criado_em TIMESTAMP DEFAULT NOW()
    )
  \`;
  console.log('✅ Banco inicializado!');
}

module.exports = { sql, initDb };`}),e.jsx(u,{children:"📄 Arquivo .env"}),e.jsx(y,{copyKey:"neon-env",children:`DATABASE_URL=postgresql://usuario:senha@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
PORT=3000
NODE_ENV=development`}),e.jsx(u,{children:"⚡ Comandos SQL úteis"}),e.jsx(R,{children:"Criar tabela"}),e.jsx(y,{copyKey:"sql-create",children:`CREATE TABLE IF NOT EXISTS tarefas (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  concluida BOOLEAN DEFAULT false,
  criado_em TIMESTAMP DEFAULT NOW()
);`}),e.jsx(R,{children:"Inserir dados"}),e.jsx(y,{copyKey:"sql-insert",children:`INSERT INTO tarefas (titulo) 
VALUES ('Primeira tarefa'), ('Segunda tarefa');`}),e.jsx(R,{children:"Consultar"}),e.jsx(y,{copyKey:"sql-select",children:"SELECT * FROM tarefas ORDER BY criado_em DESC LIMIT 10;"}),e.jsx(R,{children:"Alterar tabela"}),e.jsx(y,{copyKey:"sql-alter",children:`ALTER TABLE tarefas ADD COLUMN descricao TEXT;
ALTER TABLE tarefas ADD COLUMN prioridade INTEGER DEFAULT 1;`}),e.jsx(u,{children:"🔐 Com Prisma ORM (recomendado para projetos maiores)"}),e.jsx(y,{copyKey:"prisma-install",children:"npm install prisma @prisma/client dotenv npx prisma init"}),e.jsx(y,{copyKey:"prisma-schema",children:`// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Tarefa {
  id        Int      @id @default(autoincrement())
  titulo    String
  concluida Boolean  @default(false)
  criadoEm DateTime @default(now())
  @@map("tarefas")
}`}),e.jsx(y,{copyKey:"prisma-migrate",children:"npx prisma migrate dev --name init npx prisma studio   # abre interface visual do banco"}),e.jsx(u,{children:"⚠️ Regras importantes"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(d,{children:"NUNCA commite o .env com dados reais no git"}),e.jsx(d,{children:"SEMPRE crie .gitignore com .env listado"}),e.jsx(d,{children:"SEMPRE crie .env.example com valores de exemplo"}),e.jsx(d,{children:"Use sslmode=require para Neon (já vem na connection string)"})]})]})},{id:"jasmim",icon:"🤖",title:"Jasmim (IA)",content:e.jsxs("div",{children:[e.jsxs(b,{children:[e.jsx("strong",{className:"text-[#7ec87a]",children:"Jasmim"})," é sua assistente de IA — desenvolvedora sênior com autonomia total para criar projetos completos, corrigir erros e configurar banco de dados automaticamente."]}),e.jsx(u,{children:"💬 Como conversar com a Jasmim"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(d,{children:'Seja direto: "Crie um CRUD de clientes com Node.js e Neon DB"'}),e.jsx(d,{children:"Ela gera arquivos completos — você aplica com 1 clique"}),e.jsx(d,{children:"Ela vê o terminal automaticamente e já prepara a solução para erros"}),e.jsx(d,{children:"Ela continua sem parar até a tarefa estar 100% concluída"}),e.jsx(d,{children:'Peça revisões: "Adicione autenticação JWT nesse projeto"'})]}),e.jsx(u,{children:"🎯 O que a Jasmim faz sem precisar de permissão"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(d,{children:"Criar projeto do zero (qualquer linguagem/framework)"}),e.jsx(d,{children:"Instalar dependências (npm, pip, qualquer gerenciador)"}),e.jsx(d,{children:"Criar e modificar qualquer arquivo"}),e.jsx(d,{children:"Configurar banco de dados completo (schema, tabelas, migrations)"}),e.jsx(d,{children:"Adicionar autenticação, rotas, APIs REST"}),e.jsx(d,{children:"Corrigir erros de compilação automaticamente"}),e.jsx(d,{children:"Fazer push para GitHub quando você pedir"})]}),e.jsx(u,{children:"📋 Exemplos de comandos eficientes"}),e.jsx(R,{children:"Criar projeto completo"}),e.jsx(y,{copyKey:"jasmim-1",children:'"Crie um app de lista de tarefas com React, Node.js/Express, Neon DB PostgreSQL e autenticação JWT. Interface em português."'}),e.jsx(R,{children:"Configurar banco automaticamente"}),e.jsx(y,{copyKey:"jasmim-2",children:'"Minha Neon API Key é neon_api_xxx. Crie um banco chamado meu-app e já configure tudo no projeto."'}),e.jsx(R,{children:"Corrigir erro"}),e.jsx(y,{copyKey:"jasmim-3",children:'"Tem um erro no terminal acima, corrija."'}),e.jsx(R,{children:"Adicionar funcionalidade"}),e.jsx(y,{copyKey:"jasmim-4",children:'"Adicione upload de arquivos PDF nesse projeto usando multer. Salve os arquivos na pasta uploads/."'}),e.jsx(R,{children:"Refatorar"}),e.jsx(y,{copyKey:"jasmim-5",children:'"Reorganize a estrutura de pastas desse projeto seguindo as boas práticas do Express (routes/, controllers/, models/, middleware/)."'}),e.jsx(u,{children:"🔍 Escopo de arquivo"}),e.jsx(b,{children:"No topo do chat, selecione quais arquivos a Jasmim pode ver. Quanto mais arquivos você selecionar, melhor ela entende o contexto do projeto."}),e.jsx(u,{children:"📜 Histórico"}),e.jsx(b,{children:"O histórico de conversa fica salvo automaticamente. Use o botão 🗑️ para limpar e começar uma nova sessão quando mudar de projeto."})]})},{id:"github",icon:"🐙",title:"GitHub",content:e.jsxs("div",{children:[e.jsx(b,{children:"Conecte seu repositório GitHub ao SK Code Editor para fazer push, pull e gerenciar branches diretamente no editor."}),e.jsx(u,{children:"🔑 Criar Personal Access Token (PAT)"}),e.jsx("ol",{className:"space-y-2 mb-4",children:[{step:"Acesse",link:"github.com → Settings → Developer Settings"},{step:"Vá em",link:"Personal access tokens → Tokens (classic) → Generate new token"},{step:"Permissões necessárias:",link:"repo (todas), workflow (se usar Actions)"},{step:"Copie o token",link:"começa com ghp_..."},{step:"Cole no painel 🐙 do editor",link:"ícone GitHub na barra inferior"}].map(({step:x,link:E},F)=>e.jsxs("li",{className:"flex gap-3",children:[e.jsxs("span",{className:"text-[#7ec87a] font-bold shrink-0",children:[F+1,"."]}),e.jsxs("div",{className:"text-sm text-[#8cba89]",children:[e.jsx("strong",{children:x})," ",e.jsx("span",{className:"text-[#6ab4ff]",children:E})]})]},F))}),e.jsx(u,{children:"📦 Operações disponíveis no painel"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(d,{children:"Clonar repositório existente para o workspace"}),e.jsx(d,{children:"Fazer commit e push de arquivos modificados"}),e.jsx(d,{children:"Pull para atualizar o workspace com o remote"}),e.jsx(d,{children:"Ver diff dos arquivos modificados"}),e.jsx(d,{children:"Criar e trocar de branch"})]}),e.jsx(u,{children:"🖥️ Git no terminal"}),e.jsx(y,{copyKey:"git-full",children:`# Configurar identidade (primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Clonar repositório
git clone https://github.com/usuario/repo.git

# Fazer commit e push
git add .
git commit -m "feat: adiciona funcionalidade X"
git push origin main

# Criar e usar nova branch
git checkout -b minha-feature
git push -u origin minha-feature`}),e.jsx(u,{children:"⚠️ Segurança"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(d,{children:"NUNCA commite arquivos .env com senhas"}),e.jsx(d,{children:"Adicione .env ao .gitignore ANTES do primeiro commit"}),e.jsx(d,{children:"Seu PAT fica criptografado no editor — nunca é exposto"})]})]})},{id:"preview",icon:"👁️",title:"Preview ao Vivo",content:e.jsxs("div",{children:[e.jsx(b,{children:"O preview ao vivo renderiza HTML, CSS, JS e React diretamente no editor — sem precisar abrir o navegador."}),e.jsx(u,{children:"🖥️ Como abrir o preview"}),e.jsxs("ol",{className:"space-y-1 mb-3",children:[e.jsx(d,{children:"Toque no ícone 👁️ na barra inferior"}),e.jsx(d,{children:"O preview abre mostrando o index.html do projeto atual"}),e.jsx(d,{children:'Clique em "Tela Cheia" (ícone de expandir) para ver em tela grande'}),e.jsx(d,{children:'Clique em "Recarregar" para atualizar após mudanças'})]}),e.jsx(u,{children:"✅ Para o preview funcionar"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(d,{children:"O arquivo index.html precisa estar na raiz do projeto"}),e.jsx(d,{children:"CSS e JS referenciados no HTML são carregados automaticamente"}),e.jsx(d,{children:"Projetos React/Vite: rode npm run dev no terminal primeiro"})]}),e.jsx(u,{children:"🚀 Preview de um projeto Node.js/React"}),e.jsx(y,{copyKey:"preview-node",children:`# 1. Instale as dependências
npm install

# 2. Rode o servidor de desenvolvimento
npm run dev      # ou: npm start

# 3. O preview vai aparecer na porta configurada`}),e.jsx(u,{children:"📱 Preview responsivo"}),e.jsx(b,{children:"Use o botão de dimensões no preview para simular telas de smartphone, tablet e desktop sem precisar de DevTools."})]})},{id:"importexport",icon:"📦",title:"Importar / Exportar",content:e.jsxs("div",{children:[e.jsx(b,{children:"O SK Code Editor permite importar e exportar projetos como ZIP ou TAR.GZ para transferir entre dispositivos ou fazer backup."}),e.jsx(u,{children:"📥 Importar projeto"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(d,{children:'Toque no ícone 📁 na barra inferior → "Importar ZIP/TAR.GZ"'}),e.jsx(d,{children:"Selecione o arquivo .zip ou .tar.gz do seu projeto"}),e.jsx(d,{children:"O editor extrai e carrega todos os arquivos automaticamente"}),e.jsx(d,{children:"Projetos do VS Code, Replit, Glitch e outros são compatíveis"})]}),e.jsx(u,{children:"📤 Exportar projeto"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(d,{children:'Toque no ícone 📁 → "Exportar como ZIP"'}),e.jsx(d,{children:"Um arquivo .zip com todos os arquivos é baixado"}),e.jsx(d,{children:"Use para backup ou para abrir em outro editor"})]}),e.jsx(u,{children:"📦 Backup no Google Drive"}),e.jsx(b,{children:"Com Google Drive conectado (ícone ☁️):"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(d,{children:"Backup automático do projeto atual"}),e.jsx(d,{children:"Restaurar versões anteriores"}),e.jsx(d,{children:"Sincronizar entre dispositivos"})]}),e.jsx(u,{children:"💡 Dicas"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(d,{children:"Antes de importar, o projeto atual fica salvo no histórico"}),e.jsx(d,{children:"node_modules é ignorado na exportação (muito pesado)"}),e.jsx(d,{children:"Arquivos .env são incluídos — cuidado ao compartilhar"}),e.jsx(d,{children:"Para projetos grandes, prefira exportar TAR.GZ (menor)"})]})]})},{id:"credenciais",icon:"🔑",title:"Credenciais e API Keys",content:e.jsxs("div",{children:[e.jsx(b,{children:"O SK Code Editor usa credenciais para conectar serviços externos. Todas são salvas localmente e nunca enviadas para servidores externos."}),e.jsx(u,{children:"🔑 Onde configurar cada credencial"}),e.jsx("div",{className:"space-y-3 mb-4",children:[{icon:"🤖",name:"API Key de IA (OpenAI, Gemini, Groq...)",where:"Painel da Jasmim → ⚙️ Configurações",detail:"sk- (OpenAI), AIza (Gemini), gsk_ (Groq), sk-ant (Anthropic), xai- (Grok), sk-or- (OpenRouter)"},{icon:"🐙",name:"GitHub Personal Access Token",where:"Painel GitHub → Inserir credenciais",detail:"ghp_... (Token clássico, permissões: repo, workflow)"},{icon:"🗄️",name:"Connection String do Banco",where:"Painel Banco de Dados → Cole a URL",detail:"postgresql://user:pass@host/db?sslmode=require"},{icon:"☁️",name:"Google Drive",where:"Painel Backup → Conectar com Google",detail:"Login OAuth — não requer chave manual"}].map(({icon:x,name:E,where:F,detail:H})=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-3",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{children:x}),e.jsx("strong",{className:"text-[#7ec87a] text-sm",children:E})]}),e.jsxs("div",{className:"text-[#5aab56] text-xs mb-1",children:["📍 ",F]}),e.jsx("div",{className:"text-[#6b8f68] text-xs font-mono",children:H})]},E))}),e.jsx(u,{children:"🔒 Segurança"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(d,{children:"Credenciais ficam no localStorage do navegador — só você tem acesso"}),e.jsx(d,{children:"API keys de IA são enviadas apenas ao backend deste editor (nunca expostas)"}),e.jsx(d,{children:"Para trocar uma credencial, simplesmente cole a nova no mesmo campo"}),e.jsx(d,{children:"Para revogar acesso, delete a key no serviço externo (GitHub, OpenAI, etc.)"})]}),e.jsx(u,{children:"⚡ Detecção automática de provedor de IA"}),e.jsx(b,{children:"A Jasmim detecta automaticamente qual provedor usar pela sua API key:"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[["gsk_","Groq"],["sk-or-","OpenRouter"],["pplx-","Perplexity"],["AIza","Gemini"],["xai-","Grok (xAI)"],["sk-ant","Anthropic"],["neon_api_","Neon DB API"],["sk-","OpenAI"]].map(([x,E])=>e.jsxs("div",{className:"flex items-center gap-2 bg-[#0d1309] border border-[#2d4a1e] rounded p-2",children:[e.jsx(w,{color:"green",children:x}),e.jsx("span",{className:"text-[#8cba89] text-xs",children:E})]},x))})]})},{id:"juridico",icon:"⚖️",title:"Assistente Jurídico",content:e.jsxs("div",{children:[e.jsxs(b,{children:["O ",e.jsx("strong",{className:"text-[#7ec87a]",children:"Assistente Jurídico"})," (Jamile) é especializado em Direito brasileiro — gera peças processuais, analisa ementas e responde perguntas jurídicas."]}),e.jsx(u,{children:"📋 Abas disponíveis"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsxs(d,{children:[e.jsx("strong",{className:"text-[#7ec87a]",children:"Processar"})," — gera petições, contratos, pareceres com base no prompt"]}),e.jsxs(d,{children:[e.jsx("strong",{className:"text-[#7ec87a]",children:"Ementas"})," — biblioteca de ementas jurisprudenciais que alimentam o contexto da IA"]}),e.jsxs(d,{children:[e.jsx("strong",{className:"text-[#7ec87a]",children:"Histórico"})," — últimas 15 gerações, com opção de restaurar e reeditar"]}),e.jsxs(d,{children:[e.jsx("strong",{className:"text-[#7ec87a]",children:"Ações"})," — ações personalizadas que você define e reutiliza"]})]}),e.jsx(u,{children:"⚡ Nível de Esforço (1–5)"}),e.jsx("div",{className:"grid grid-cols-5 gap-1 mb-3",children:[["1","Rápido","8k tokens"],["2","Básico","16k tokens"],["3","Normal","32k tokens"],["4","Detalhado","64k tokens"],["5","Exaustivo","131k tokens"]].map(([x,E,F])=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded p-2 text-center",children:[e.jsx("div",{className:"text-[#7ec87a] font-bold text-sm",children:x}),e.jsx("div",{className:"text-[#8cba89] text-xs",children:E}),e.jsx("div",{className:"text-[#5aab56] text-xs",children:F})]},x))}),e.jsx(u,{children:"📝 Verbosidade"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsxs(d,{children:[e.jsx("strong",{children:"Concisa"})," — peça objetiva, sem redundâncias, mais curta"]}),e.jsxs(d,{children:[e.jsx("strong",{children:"Completa"})," — peça completa com fundamentação aprofundada"]})]}),e.jsx(u,{children:"📚 Ementas (biblioteca jurisprudencial)"}),e.jsx(b,{children:"Na aba Ementas, você cadastra suas próprias ementas de jurisprudência. Elas são inseridas automaticamente no contexto quando você gera uma peça, enriquecendo a fundamentação jurídica da IA."}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(d,{children:"Cole a ementa completa no campo de texto"}),e.jsx(d,{children:"Dê um título para identificar facilmente"}),e.jsx(d,{children:"Marque as ementas que quer usar antes de gerar a peça"}),e.jsx(d,{children:"Você pode ter até 50 ementas na biblioteca"})]}),e.jsx(u,{children:"🎯 Ações personalizadas"}),e.jsx(b,{children:"Na aba Ações, crie prompts reutilizáveis para tipos de peça que você usa frequentemente. Exemplos:"}),e.jsx(y,{copyKey:"acao-exemplo",children:'"Elabore uma petição inicial de ação de indenização por danos morais decorrentes de negativação indevida, fundamentada no CDC e CC. Inclua pedido de tutela de urgência para exclusão imediata do nome dos cadastros de restrição ao crédito."'})]})},{id:"meus-projetos",icon:"🗂️",title:"Meus Projetos",content:(()=>{const x=[{id:"importar",label:"Trazer do Replit",icon:"⬇️"},{id:"desktop",label:"App no PC",icon:"🖥️"},{id:"privado",label:"Instalação Privada",icon:"🔒"},{id:"juntar",label:"Juntar Apps",icon:"🔗"},{id:"orientar",label:"Me Oriento",icon:"🧭"}],E=({n:oe,children:ce})=>e.jsxs("li",{className:"flex gap-3 mb-3",children:[e.jsx("span",{className:"bg-[#2d4a1e] text-[#7ec87a] font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0 mt-0.5",children:oe}),e.jsx("span",{className:"text-[#8cba89] text-sm leading-relaxed",children:ce})]}),F=({color:oe,children:ce})=>{const O={green:"bg-[#0d2210] border-[#2d5a1e] text-[#7ec87a]",blue:"bg-[#0a1530] border-[#1e3d7a] text-[#6ab4ff]",yellow:"bg-[#1e1500] border-[#4a3800] text-[#d4aa40]",red:"bg-[#1e0a0a] border-[#5a1e1e] text-[#d47070]"}[oe];return e.jsx("div",{className:`border rounded-lg p-3 mb-3 text-sm ${O}`,children:ce})},H=({icon:oe,title:ce,desc:O})=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-3 mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{children:oe}),e.jsx("strong",{className:"text-[#7ec87a] text-sm",children:ce})]}),e.jsx("p",{className:"text-[#8cba89] text-xs leading-relaxed",children:O})]}),M={importar:e.jsxs("div",{children:[e.jsxs(F,{color:"blue",children:["⬇️ ",e.jsx("strong",{children:"Você não precisa recriar nada."})," Seus projetos do Replit chegam aqui prontos — código, arquivos e tudo mais. Escolha o método abaixo."]}),e.jsx(u,{children:"📦 MÉTODO 1 — Via ZIP (mais fácil)"}),e.jsx(b,{children:"No Replit, qualquer projeto pode ser exportado como ZIP em segundos."}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(E,{n:1,children:["Abra o projeto no ",e.jsx("a",{href:"https://replit.com",target:"_blank",rel:"noopener noreferrer",className:"text-[#6ab4ff] underline",children:"Replit"})]}),e.jsxs(E,{n:2,children:["Clique nos ",e.jsx("strong",{children:"3 pontinhos (⋯)"})," no topo ou vá em ",e.jsx("strong",{children:"Files → Download as zip"})]}),e.jsx(E,{n:3,children:"Salve o arquivo .zip no celular ou computador"}),e.jsxs(E,{n:4,children:["Aqui no SK Editor, toque no ícone ",e.jsx("strong",{children:"📁"})," na barra inferior"]}),e.jsxs(E,{n:5,children:["Toque em ",e.jsx("strong",{children:'"Importar ZIP"'})," e selecione o arquivo"]}),e.jsx(E,{n:6,children:"✅ O projeto aparece com todos os arquivos prontos para editar"})]}),e.jsx(F,{color:"green",children:"💡 Funciona com qualquer projeto: Node.js, Python, React, HTML puro, qualquer linguagem."}),e.jsx(u,{children:"🐙 MÉTODO 2 — Via GitHub (recomendado para manter sincronizado)"}),e.jsx(b,{children:"Se o projeto estiver no GitHub, você clona direto pelo terminal."}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(E,{n:1,children:["No Replit, vá em ",e.jsx("strong",{children:"Version Control"})," e conecte ao GitHub se ainda não fez"]}),e.jsxs(E,{n:2,children:["Faça push do projeto para o GitHub (botão ",e.jsx("strong",{children:"Push"}),")"]}),e.jsxs(E,{n:3,children:["Aqui no SK Editor, abra o ",e.jsx("strong",{children:"Terminal"})," (ícone 🖥️ na barra inferior)"]}),e.jsxs(E,{n:4,children:["Digite o comando para clonar:",e.jsx("br",{}),e.jsx("span",{className:"font-mono text-[#a8d5a2] text-xs bg-[#0d1309] px-2 py-1 rounded block mt-1",children:"git clone https://github.com/SEU_USUARIO/NOME_DO_REPO.git"})]}),e.jsx(E,{n:5,children:"O projeto é baixado completo na pasta do workspace"}),e.jsx(E,{n:6,children:"No painel de arquivos (📁), navegue até a pasta criada e abra os arquivos"})]}),e.jsx(u,{children:"🔑 Para repositórios privados"}),e.jsx(b,{children:"Repositórios privados do GitHub precisam do seu Personal Access Token:"}),e.jsx(y,{copyKey:"clone-privado",children:"git clone https://SEU_TOKEN@github.com/SEU_USUARIO/REPO_PRIVADO.git"}),e.jsxs(b,{children:["Veja a seção ",e.jsx("strong",{children:"GitHub"})," deste manual para criar seu token (PAT)."]}),e.jsx(u,{children:"📋 Para projetos sem GitHub"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Use o Método 1 (ZIP) — funciona sempre, sem precisar de conta GitHub"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"}),' Ou copie e cole os arquivos um por um usando a Jasmim: "Crie um arquivo chamado X com este conteúdo: [cola o código]"']})]})]}),desktop:e.jsxs("div",{children:[e.jsxs(F,{color:"green",children:["🖥️ ",e.jsx("strong",{children:"Instalar no PC é a opção mais simples e totalmente privada."})," Sem loja, sem conta, sem instalador. Funciona no Windows, Mac e Linux."]}),e.jsx(u,{children:"🪟 Windows — Chrome ou Edge"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(E,{n:1,children:["Abra o ",e.jsx("strong",{children:"Google Chrome"})," ou ",e.jsx("strong",{children:"Microsoft Edge"})," no computador"]}),e.jsxs(E,{n:2,children:["Acesse a URL do app publicado: ",e.jsx("span",{className:"font-mono text-[#a8d5a2] text-xs",children:"https://seu-app.replit.app"})]}),e.jsx(E,{n:3,children:"Aguarde carregar completamente"}),e.jsxs(E,{n:4,children:["No Chrome: Clique no ícone ",e.jsx("strong",{children:"⊕"})," na barra de endereços (lado direito)",e.jsx("br",{}),"No Edge: Clique nos ",e.jsx("strong",{children:"..."})," → ",e.jsx("strong",{children:'"Aplicativos"'})," → ",e.jsx("strong",{children:'"Instalar este site como um aplicativo"'})]}),e.jsxs(E,{n:5,children:["Confirme clicando em ",e.jsx("strong",{children:'"Instalar"'})]}),e.jsx(E,{n:6,children:"✅ O app abre numa janela própria — sem abas, sem barra do navegador. Aparece no menu Iniciar!"})]}),e.jsx(u,{children:"🍎 Mac — Chrome ou Safari"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(E,{n:1,children:["Abra ",e.jsx("strong",{children:"Google Chrome"})," no Mac"]}),e.jsx(E,{n:2,children:"Acesse a URL do app"}),e.jsxs(E,{n:3,children:["Clique nos ",e.jsx("strong",{children:"⋮"})," → ",e.jsx("strong",{children:'"Salvar e compartilhar"'})," → ",e.jsx("strong",{children:'"Criar atalho..."'})]}),e.jsxs(E,{n:4,children:["Marque ",e.jsx("strong",{children:'"Abrir como janela"'})," e clique em ",e.jsx("strong",{children:"Criar"})]}),e.jsx(E,{n:5,children:"✅ App aparece no Launchpad e no Dock"})]}),e.jsx(u,{children:"🐧 Linux — Chrome ou Chromium"}),e.jsxs("ol",{className:"mb-4",children:[e.jsx(E,{n:1,children:"Abra o Chrome/Chromium"}),e.jsx(E,{n:2,children:"Acesse a URL do app"}),e.jsxs(E,{n:3,children:["Clique no ícone ",e.jsx("strong",{children:"⊕"})," na barra de endereços ou nos ",e.jsx("strong",{children:"⋮"})," → ",e.jsx("strong",{children:'"Instalar SK Code Editor..."'})]}),e.jsx(E,{n:4,children:"✅ App aparece no menu de aplicativos do sistema"})]}),e.jsx(u,{children:"⚙️ O que você ganha com a instalação no PC"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 mb-4",children:[["🪟 Janela própria","Abre sem abas do navegador — parece um app de verdade"],["📌 Ícone no menu","Aparece no menu Iniciar (Windows) ou Launchpad (Mac)"],["🔕 Sem distração","Sem as ferramentas do navegador, só o app"],["🔒 Totalmente privado","Só você vê — nada vai para nenhuma loja"],["♻️ Atualização automática","Quando o app no Replit é atualizado, a instalação já pega a versão nova"]].map(([oe,ce])=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded p-3",children:[e.jsx("div",{className:"text-[#7ec87a] text-sm font-semibold",children:oe}),e.jsx("div",{className:"text-[#6b8f68] text-xs mt-0.5",children:ce})]},oe))}),e.jsx(u,{children:"🗑️ Como desinstalar"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Windows: Configurações → Aplicativos → encontre o app → Desinstalar"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Mac: Arraste do Launchpad para a lixeira"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"}),' Ou no Chrome/Edge: acesse a URL → ícone ⊕ → "Desinstalar"']})]})]}),privado:e.jsxs("div",{children:[e.jsxs(F,{color:"yellow",children:["🔒 ",e.jsx("strong",{children:"Instalação privada = só você usa, sem passar por loja nenhuma."})," Seus dados ficam só no seu dispositivo. Ninguém mais acessa."]}),e.jsx(u,{children:"📱 Android — APK Privado (sideload)"}),e.jsx(b,{children:"Instalar APK diretamente no celular sem passar pela Play Store:"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(E,{n:1,children:["Gere o APK usando a aba ",e.jsx("strong",{children:'"Instalar como App → APK Projeto"'})," ou o PWABuilder.com"]}),e.jsxs(E,{n:2,children:["Transfira o .apk para o celular: via ",e.jsx("strong",{children:"Google Drive, WhatsApp para si mesmo, cabo USB ou email"})]}),e.jsxs(E,{n:3,children:["No Android vá em ",e.jsx("strong",{children:"Configurações → Privacidade"})," (ou Segurança) → ative ",e.jsx("strong",{children:'"Instalar apps desconhecidos"'})," para o gerenciador de arquivos"]}),e.jsx(E,{n:4,children:"Abra o gerenciador de arquivos, localize o .apk e toque nele"}),e.jsxs(E,{n:5,children:["Toque em ",e.jsx("strong",{children:'"Instalar"'})]}),e.jsx(E,{n:6,children:"✅ App instalado! Não aparece na Play Store para mais ninguém — é só seu"})]}),e.jsx(F,{color:"green",children:"💡 Você pode compartilhar o .apk com pessoas de confiança via WhatsApp ou Google Drive — elas instalam da mesma forma. Sem publicar em loja nenhuma."}),e.jsx(u,{children:"🍎 iPhone/iPad — Opções privadas"}),e.jsx(F,{color:"red",children:"⚠️ A Apple não permite instalar apps fora da App Store sem um processo especial. As opções disponíveis são:"}),e.jsx(H,{icon:"✅",title:"Opção 1: PWA via Safari (mais fácil)",desc:"Acesse a URL no Safari → botão Compartilhar → 'Adicionar à Tela de Início'. Fica no celular como app, privado, sem loja. Limitação: precisa de internet para abrir."}),e.jsx(H,{icon:"🔧",title:"Opção 2: TestFlight (distribuição privada oficial da Apple)",desc:"Você sobe o app no TestFlight (plataforma de testes da Apple) e envia o link só para as pessoas que quiser. Requer conta de desenvolvedor Apple (US$ 99/ano)."}),e.jsx(H,{icon:"🛠️",title:"Opção 3: AltStore (sideload sem jailbreak)",desc:"O AltStore (altstore.io) permite instalar .ipa no iPhone sem jailbreak. Requer um PC/Mac conectado via cabo para renovar a assinatura a cada 7 dias (conta gratuita) ou 1 ano (conta paga AltStore+)."}),e.jsx(u,{children:"🖥️ Computador — 100% privado"}),e.jsx(b,{children:'A instalação via Chrome/Edge no PC (veja aba "App no PC") é totalmente privada por natureza — nunca vai para nenhuma loja, não aparece em lugar nenhum, só no seu computador. É a opção mais simples para uso pessoal no PC.'}),e.jsx(u,{children:"📋 Resumo: qual usar para uso privado?"}),e.jsx("div",{className:"space-y-2",children:[{disp:"Computador (Windows/Mac/Linux)",rec:"Chrome → instalar como app",nota:"✅ Mais fácil, 100% privado"},{disp:"Android",rec:"APK via sideload",nota:"✅ Privado, sem Play Store"},{disp:"iPhone/iPad",rec:"PWA via Safari",nota:"✅ Simples, sem conta Apple"}].map(({disp:oe,rec:ce,nota:O})=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded p-3",children:[e.jsx("div",{className:"text-[#7ec87a] font-semibold text-sm",children:oe}),e.jsxs("div",{className:"text-[#8cba89] text-xs mt-0.5",children:["→ ",ce]}),e.jsx("div",{className:"text-[#5aab56] text-xs mt-0.5",children:O})]},oe))})]}),juntar:e.jsxs("div",{children:[e.jsxs(F,{color:"blue",children:["🔗 ",e.jsx("strong",{children:"A ideia é simples:"})," você traz cada app para cá, identifica o que funciona bem em cada um, e a Jasmim une tudo num único projeto — sem reescrever o que já funciona."]}),e.jsx(u,{children:"📋 Passo a passo para juntar vários apps"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(E,{n:1,children:[e.jsx("strong",{children:"Liste seus apps e o que cada um faz bem"}),e.jsx("br",{}),e.jsx("span",{className:"text-[#5aab56] text-xs",children:'Ex: "App 1 → login funciona. App 2 → relatórios funcionam. App 3 → chat funciona."'})]}),e.jsxs(E,{n:2,children:[e.jsx("strong",{children:"Importe todos para cá (um por vez)"}),e.jsx("br",{}),'Use a aba "Trazer do Replit" — ZIP ou GitHub. Anote o nome das pastas.']}),e.jsxs(E,{n:3,children:[e.jsx("strong",{children:"Abra a Jasmim (ícone 🤖)"}),e.jsx("br",{}),"Diga exatamente quais partes funcionam e quais não. Seja específico."]}),e.jsxs(E,{n:4,children:[e.jsx("strong",{children:"Diga para a Jasmim o que quer:"}),e.jsx("br",{}),e.jsx("span",{className:"text-[#5aab56] text-xs",children:'"Tenho 3 projetos aqui. O login está em app1/, os relatórios em app2/ e o chat em app3/. Quero um único projeto que use o login do app1, os relatórios do app2 e o chat do app3. Não reescreva — aproveite o código que já funciona."'})]}),e.jsxs(E,{n:5,children:[e.jsx("strong",{children:"A Jasmim vai unir os arquivos"}),e.jsx("br",{}),"Ela vai analisar os três projetos e criar um novo com as partes funcionando juntas."]}),e.jsxs(E,{n:6,children:[e.jsx("strong",{children:"Teste no terminal"}),e.jsx("br",{}),"Rode o projeto novo: ",e.jsx("span",{className:"font-mono text-[#a8d5a2] text-xs",children:"npm install && npm start"})]}),e.jsxs(E,{n:7,children:[e.jsx("strong",{children:"Para qualquer erro, chame a Jasmim:"}),e.jsx("br",{}),e.jsx("span",{className:"text-[#5aab56] text-xs",children:'"Tem um erro no terminal, corrija sem reescrever o que já estava funcionando."'})]})]}),e.jsx(u,{children:"💬 Exemplos de como pedir para a Jasmim"}),e.jsx(R,{children:"Juntar dois apps"}),e.jsx(y,{copyKey:"jasmim-juntar-2",children:'"Tenho dois projetos: app-login/ (o login funciona bem) e app-dashboard/ (os gráficos funcionam bem). Una os dois num projeto só chamado meu-app/. Reutilize o código que já existe, não reescreva do zero."'}),e.jsx(R,{children:"Juntar 3 ou mais"}),e.jsx(y,{copyKey:"jasmim-juntar-3",children:'"Tenho 3 apps aqui. Do app1/ aproveite: o sistema de autenticação (arquivo auth.js). Do app2/ aproveite: as rotas de relatório (routes/reports.js). Do app3/ aproveite: o componente de chat (components/Chat.jsx). Crie um único projeto novo unindo essas partes."'}),e.jsx(R,{children:"Quando só parte funciona"}),e.jsx(y,{copyKey:"jasmim-parte",children:'"No app1/, o módulo de login funciona (auth/), mas o de pagamento não. No app2/, o pagamento funciona (payment/), mas o login não. Une o login do app1/ com o pagamento do app2/ num projeto novo."'}),e.jsx(u,{children:"⚠️ Regra importante"}),e.jsxs(F,{color:"yellow",children:["✋ Sempre diga explicitamente para a Jasmim: ",e.jsx("strong",{children:'"não reescreva o que já funciona, aproveite o código existente"'}),". Sem isso, ela pode criar uma versão nova do zero. Com essa instrução, ela vai copiar e adaptar o que já está pronto."]})]}),orientar:e.jsxs("div",{children:[e.jsxs(F,{color:"green",children:["🧭 ",e.jsx("strong",{children:"Você tem 10+ apps e cada um funciona só em parte."})," Aqui está o roteiro completo para se organizar e sair disso."]}),e.jsx(u,{children:"📊 ETAPA 1 — Mapear o que você tem"}),e.jsx(b,{children:"Antes de qualquer coisa, faça uma lista rápida. Para cada app seu no Replit:"}),e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-4 mb-4",children:[e.jsx("p",{className:"text-[#5aab56] text-xs font-semibold mb-2",children:"MODELO DE MAPEAMENTO"}),e.jsx(y,{copyKey:"mapeamento",children:`App 1 — Nome: ___________
✅ O que funciona bem: ___________
❌ O que não funciona: ___________
🔗 Link no Replit: ___________

App 2 — Nome: ___________
✅ O que funciona bem: ___________
❌ O que não funciona: ___________
🔗 Link no Replit: ___________

(repita para cada app)`})]}),e.jsx(u,{children:"🎯 ETAPA 2 — Definir o app final que você quer"}),e.jsxs(b,{children:["Responda: ",e.jsx("strong",{className:"text-[#7ec87a]",children:"Qual seria o app perfeito se tudo funcionasse?"})]}),e.jsx(b,{children:"Liste as funcionalidades que você quer no produto final, independente de qual app elas estão hoje. Exemplo:"}),e.jsx(y,{copyKey:"app-final",children:`App Final "Meu Sistema":
- Login de usuário ✅ (já existe no App 1)
- Painel de controle ✅ (já existe no App 3)  
- Relatórios em PDF ✅ (já existe no App 5)
- Chat com IA ✅ (já existe no App 7)
- Cadastro de clientes ❌ (não existe em nenhum, precisa criar)
- Notificações ❌ (não existe em nenhum, precisa criar)`}),e.jsx(u,{children:"📥 ETAPA 3 — Trazer os apps para cá"}),e.jsx(b,{children:'Importe os apps que têm as partes que funcionam (veja a aba "Trazer do Replit"). Você não precisa trazer todos — só os que têm algo útil.'}),e.jsx(u,{children:"🤖 ETAPA 4 — Pedir para a Jasmim montar"}),e.jsx(b,{children:"Cole o mapeamento que você fez na Jasmim e use este prompt:"}),e.jsx(y,{copyKey:"prompt-organizar",children:'"Vou te passar um mapeamento dos meus apps. Quero que você: 1. Identifique as partes que já funcionam em cada um 2. Crie um único projeto novo aproveitando essas partes 3. Não reescreva o que já está pronto 4. Me diga o que ainda precisa ser criado do zero Aqui está o mapeamento: [COLE SEU MAPEAMENTO AQUI] O app final deve ter: [LISTE AS FUNCIONALIDADES QUE VOCÊ QUER]"'}),e.jsx(u,{children:"📱 ETAPA 5 — Transformar em app no celular/PC"}),e.jsxs("ol",{className:"mb-4",children:[e.jsx(E,{n:1,children:"Com o projeto único funcionando, publique no Replit (botão Deploy)"}),e.jsx(E,{n:2,children:"Copie a URL gerada (.replit.app)"}),e.jsx(E,{n:3,children:'Escolha o método de instalação (PWA, APK ou PC — veja seção "Instalar como App")'}),e.jsx(E,{n:4,children:"✅ Um app completo, funcionando, privado e no seu dispositivo"})]}),e.jsx(u,{children:"🔁 E para os próximos apps?"}),e.jsx(b,{children:"Repita o mesmo processo para qualquer projeto futuro:"}),e.jsx("div",{className:"flex flex-col gap-2",children:[["1️⃣","Cria/importa o projeto aqui"],["2️⃣","Desenvolve com a Jasmim até funcionar"],["3️⃣","Publica no Replit (Deploy)"],["4️⃣","Instala no celular como PWA ou APK"],["5️⃣","Usa com privacidade, sem depender do Replit para abrir"]].map(([oe,ce])=>e.jsxs("div",{className:"flex items-center gap-3 bg-[#0d1309] border border-[#2d4a1e] rounded p-3",children:[e.jsx("span",{className:"text-xl shrink-0",children:oe}),e.jsx("span",{className:"text-[#8cba89] text-sm",children:ce})]},oe))}),e.jsxs(F,{color:"blue",children:["💡 ",e.jsx("strong",{children:"Dica chave:"})," quando o app estiver instalado (como PWA ou APK), ele ",e.jsx("strong",{children:"não depende do Replit para abrir"})," — ele vai direto para o servidor onde está publicado. O Replit é só onde você cria e edita. O app publicado fica independente."]})]})};return e.jsxs("div",{children:[e.jsx("div",{className:"flex gap-1 mb-4 overflow-x-auto pb-1 flex-wrap",children:x.map(oe=>e.jsxs("button",{onClick:()=>j(oe.id),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${m===oe.id?"bg-[#2d4a1e] text-[#7ec87a] border border-[#5aab56]":"bg-[#141c0d] text-[#5a7a56] border border-[#2d4a1e] hover:text-[#7ec87a]"}`,children:[oe.icon," ",oe.label]},oe.id))}),M[m]]})})()}],q=se.find(x=>x.id===o)||se[0];return e.jsxs("div",{className:"flex h-full bg-[#141c0d] text-white overflow-hidden",children:[e.jsx("div",{className:"w-36 shrink-0 border-r border-[#2d4a1e] flex flex-col py-2 overflow-y-auto",children:se.map(x=>e.jsxs("button",{onClick:()=>r(x.id),className:`flex flex-col items-center gap-1 py-2.5 px-1 text-xs transition-colors ${o===x.id?"bg-[#1c2714] text-[#7ec87a] border-r-2 border-[#5aab56]":"text-[#5a7a56] hover:text-[#7ec87a] hover:bg-[#1a2412]"}`,children:[e.jsx("span",{className:"text-lg",children:x.icon}),e.jsx("span",{className:"text-center leading-tight",children:x.title})]},x.id))}),e.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:e.jsxs("div",{className:"max-w-2xl mx-auto",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4 pb-3 border-b border-[#2d4a1e]",children:[e.jsx("span",{className:"text-2xl",children:q.icon}),e.jsx("h1",{className:"text-[#7ec87a] font-bold text-lg",children:q.title})]}),q.content]})})]})}const Bs="combinar-apps:v1";function ji(){return Math.random().toString(36).slice(2,9)}function Ya(){return{id:ji(),name:"",url:"",works:"",broken:""}}function Ni(t){if(!t||typeof t!="object")return!1;const s=t;return typeof s.id=="string"&&typeof s.name=="string"&&typeof s.url=="string"&&typeof s.works=="string"&&typeof s.broken=="string"}function wi(){if(typeof window>"u")return null;try{const t=window.localStorage.getItem(Bs);if(!t)return null;const s=JSON.parse(t);if(!s||typeof s!="object")return null;const o=Array.isArray(s.apps)?s.apps.filter(Ni):[];return{apps:o.length>0?o:[Ya()],goal:typeof s.goal=="string"?s.goal:"",generatedPrompt:typeof s.generatedPrompt=="string"?s.generatedPrompt:""}}catch{return null}}const Ea="w-full bg-[#141c0d] border border-[#3d6e2a] rounded-lg px-3 py-2 text-sm text-[#a8d5a2] placeholder-[#3d6e2a] outline-none focus:border-[#5aab56] focus:ring-1 focus:ring-[#5aab56]/20 resize-none",ka="block text-[#5aab56] text-xs font-semibold mb-1";function Ei({onSendToJasmim:t}){const[s]=a.useState(()=>wi()),[o,r]=a.useState(()=>s?.apps??[Ya()]),[n,c]=a.useState(()=>s?.goal??""),[p,h]=a.useState(()=>s?.generatedPrompt??""),[m,j]=a.useState(!1),[f,k]=a.useState(!1);a.useEffect(()=>{if(typeof window>"u")return;const D=n.trim().length>0||p.length>0||o.some(N=>N.name.trim()||N.url.trim()||N.works.trim()||N.broken.trim());try{if(D){const N={apps:o,goal:n,generatedPrompt:p};window.localStorage.setItem(Bs,JSON.stringify(N))}else window.localStorage.removeItem(Bs)}catch{}},[o,n,p]);const z=a.useCallback(()=>{r(D=>[...D,Ya()]),h("")},[]),U=a.useCallback(D=>{r(N=>N.filter(i=>i.id!==D)),h("")},[]),K=a.useCallback((D,N,i)=>{r(v=>v.map(S=>S.id===D?{...S,[N]:i}:S)),h("")},[]),C=a.useCallback(()=>{const D=o.filter(S=>S.name.trim()||S.url.trim()||S.works.trim()||S.broken.trim());if(D.length===0)return;const N=D.map((S,G)=>{const J=[];return J.push(`App ${G+1}${S.name?` — ${S.name}`:""}:`),S.url.trim()&&J.push(`  URL no Replit: ${S.url.trim()}`),S.works.trim()&&J.push(`  ✅ O que funciona bem: ${S.works.trim()}`),S.broken.trim()&&J.push(`  ❌ O que não funciona: ${S.broken.trim()}`),J.join(`
`)}).join(`

`),i=n.trim()?`
Objetivo do app final: ${n.trim()}
`:"",v=`Tenho ${D.length} app${D.length>1?"s":""} no Replit e quero combiná-los num único projeto que aproveite o que já funciona em cada um.
${i}
Aqui estão os apps e o que funciona em cada um:

${N}

Por favor:
1. Analise o que cada app tem de melhor
2. Crie um único projeto unificado aproveitando o código que já funciona
3. Não reescreva do zero o que já está funcionando — aproveite o código existente
4. Para cada parte que for unir, explique de qual app está vindo
5. Ao final, mostre como rodar o projeto unificado (npm install && npm start ou equivalente)

Comece me dizendo qual será a estrutura do projeto unificado e como você vai organizar os arquivos.`;h(v),k(!1),j(!1)},[o,n]),L=a.useCallback(()=>{p&&(navigator.clipboard.writeText(p).catch(()=>{}),j(!0),setTimeout(()=>j(!1),2e3))},[p]),V=a.useCallback(()=>{p&&(t(p),k(!0),setTimeout(()=>k(!1),3e3))},[p,t]),I=a.useCallback(()=>{(typeof window>"u"||window.confirm("Limpar todos os apps, objetivo e prompt gerado?"))&&(r([Ya()]),c(""),h(""),j(!1),k(!1))},[]),ee=o.filter(D=>D.name.trim()||D.url.trim()||D.works.trim()||D.broken.trim()).length,$=ee>0||n.trim().length>0||p.length>0||o.length>1;return e.jsxs("div",{className:"flex flex-col h-full overflow-hidden bg-[#0f1a0a] text-[#a8d5a2]",children:[e.jsxs("div",{className:"px-4 pt-4 pb-3 border-b border-[#2d4a1e] shrink-0",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"🔗"}),e.jsx("h1",{className:"text-[#7ec87a] font-bold text-base",children:"Combinar Apps"})]}),e.jsxs("button",{onClick:I,disabled:!$,className:"flex items-center gap-1.5 text-xs px-2 py-1 rounded-lg border border-[#3d6e2a] text-[#5aab56] hover:bg-[#1a2d10] hover:text-[#7ec87a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors",title:"Limpar todos os apps e o prompt",children:[e.jsx(wr,{size:12}),"Limpar tudo"]})]}),e.jsx("p",{className:"text-[#6b8f68] text-xs leading-relaxed",children:"Preencha os apps que você quer unir. O assistente monta o prompt ideal para a Jasmim combinar tudo num projeto só."})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:ka,children:"🎯 Objetivo do app final (opcional)"}),e.jsx("textarea",{value:n,onChange:D=>{c(D.target.value),h("")},placeholder:"Ex: Um app de gestão de processos jurídicos com login, dashboard e relatórios em PDF",rows:2,className:Ea})]}),e.jsx("div",{className:"space-y-3",children:o.map((D,N)=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-xl p-3 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("span",{className:"text-[#7ec87a] text-xs font-bold uppercase tracking-wider",children:["App ",N+1]}),o.length>1&&e.jsx("button",{onClick:()=>U(D.id),className:"p-1 rounded-lg text-[#5a3a3a] hover:text-[#d47070] hover:bg-[#2d0d0d] transition-colors",title:"Remover app",children:e.jsx(dt,{size:13})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:ka,children:"Nome do app"}),e.jsx("input",{type:"text",value:D.name,onChange:i=>K(D.id,"name",i.target.value),placeholder:"Ex: app-login",className:Ea})]}),e.jsxs("div",{children:[e.jsx("label",{className:ka,children:"URL no Replit (opcional)"}),e.jsx("input",{type:"url",value:D.url,onChange:i=>K(D.id,"url",i.target.value),placeholder:"https://replit.com/@...",className:Ea})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:ka,children:"✅ O que funciona bem"}),e.jsx("textarea",{value:D.works,onChange:i=>K(D.id,"works",i.target.value),placeholder:"Ex: O login com Google funciona. O sistema de autenticação está completo.",rows:2,className:Ea})]}),e.jsxs("div",{children:[e.jsx("label",{className:ka,children:"❌ O que não funciona (opcional)"}),e.jsx("textarea",{value:D.broken,onChange:i=>K(D.id,"broken",i.target.value),placeholder:"Ex: Os relatórios em PDF não geram. O painel de admin está incompleto.",rows:2,className:Ea})]})]},D.id))}),e.jsxs("button",{onClick:z,className:"w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-[#3d6e2a] rounded-xl text-[#5aab56] text-sm hover:border-[#5aab56] hover:bg-[#0d2210] transition-colors",children:[e.jsx(Bt,{size:15}),"Adicionar outro app"]}),e.jsxs("button",{onClick:C,disabled:ee===0,className:"w-full flex items-center justify-center gap-2 py-3 bg-[#2d4a1e] hover:bg-[#3d5e2a] disabled:opacity-40 disabled:cursor-not-allowed text-[#7ec87a] font-bold text-sm rounded-xl transition-colors",children:[e.jsx(It,{size:15}),"Gerar Prompt para Jasmim"]}),p&&e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d5a1e] rounded-xl overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-2 bg-[#1a3d14] border-b border-[#2d5a1e]",children:[e.jsx("span",{className:"text-[#7ec87a] text-xs font-bold",children:"✨ Prompt gerado"}),e.jsx("button",{onClick:L,className:"flex items-center gap-1.5 text-xs px-2 py-1 rounded-lg bg-[#2d4a1e] text-[#7ec87a] hover:bg-[#3d5e2a] transition-colors",children:m?e.jsxs(e.Fragment,{children:[e.jsx(Za,{size:12})," Copiado!"]}):e.jsxs(e.Fragment,{children:[e.jsx(Kt,{size:12})," Copiar"]})})]}),e.jsx("pre",{className:"px-3 py-3 text-xs text-[#8cba89] font-mono leading-relaxed whitespace-pre-wrap break-words max-h-48 overflow-y-auto",children:p}),e.jsx("div",{className:"px-3 py-2.5 border-t border-[#2d5a1e]",children:e.jsx("button",{onClick:V,className:`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95 ${f?"bg-green-600/30 text-green-300 border border-green-500/25":"bg-[#1e5c9e] hover:bg-[#2a73c5] text-white"}`,children:f?e.jsxs(e.Fragment,{children:[e.jsx(Za,{size:14})," Enviado para a Jasmim!"]}):e.jsxs(e.Fragment,{children:[e.jsx(rs,{size:14})," Enviar para a Jasmim"]})})})]}),e.jsxs("div",{className:"bg-[#0d1a0a] border border-[#2d4a1e] rounded-xl p-3 space-y-2",children:[e.jsx("p",{className:"text-[#5aab56] text-xs font-bold",children:"💡 Dicas"}),e.jsx("ul",{className:"space-y-1",children:["Seja específico sobre o que funciona — mencione nomes de arquivos ou módulos se souber","Você pode adicionar quantos apps precisar","Depois de enviar para a Jasmim, ela vai analisar e unir os projetos","Se quiser ajustar o prompt, edite os campos e clique em Gerar novamente"].map((D,N)=>e.jsxs("li",{className:"flex gap-2 text-xs text-[#6b8f68]",children:[e.jsx("span",{className:"text-[#3d6e2a] shrink-0",children:"›"}),e.jsx("span",{children:D})]},N))})]})]})]})}const ki=({s:t})=>t==="ok"?e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-green-500/15 text-green-400 text-[11px] md:text-[13px] font-bold",children:[e.jsx(pa,{size:12})," OK"]}):t==="warn"?e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-yellow-500/15 text-yellow-400 text-[11px] md:text-[13px] font-bold",children:[e.jsx(qo,{size:12})," Atenção"]}):t==="error"?e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-500/15 text-red-400 text-[11px] md:text-[13px] font-bold",children:[e.jsx(Sr,{size:12})," Falha"]}):e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-500/15 text-gray-400 text-[11px] md:text-[13px] font-bold",children:[e.jsx(Nt,{size:12,className:"animate-spin"})," Checando…"]});function Ci({open:t,onClose:s,vfs:o,projectName:r,terminalMode:n}){const[c,p]=a.useState([]),[h,m]=a.useState(null),[j,f]=a.useState(!1),k=a.useCallback(async()=>{f(!0);const C=[];C.push({id:"online",label:"Conexão à internet",status:navigator.onLine?"ok":"error",detail:navigator.onLine?"Online":"Sem rede — só modo Offline funciona",icon:navigator.onLine?e.jsx(Er,{size:16,className:"text-green-400"}):e.jsx(kr,{size:16,className:"text-red-400"})});let L="checking",V="Testando…";const I=performance.now();try{const T=new AbortController,ne=setTimeout(()=>T.abort(),4e3),y=await fetch("/api/healthz",{signal:T.signal,cache:"no-store"});clearTimeout(ne);const u=Math.round(performance.now()-I);y.ok?(L="ok",V=`Servidor respondendo (${u}ms) — terminal Online e IA funcionam`):(L="warn",V=`Servidor respondeu HTTP ${y.status} — pode ter problema`)}catch(T){L="error",V=`Sem servidor — terminal Online e IA fetch indisponíveis (${T.message||"timeout"})`}C.push({id:"api",label:"Servidor da API",status:L,detail:V,icon:e.jsx(Oo,{size:16,className:"text-blue-400"})});const ee=window.crossOriginIsolated===!0,$=typeof SharedArrayBuffer<"u";C.push({id:"coi",label:"Cross-Origin Isolation",status:ee&&$?"ok":"warn",detail:ee&&$?"Habilitado — terminal Real (WebContainer) pode rodar":"Desabilitado — terminal Real não funciona aqui (precisa do app publicado/instalado como APK)",icon:e.jsx(Cr,{size:16,className:ee&&$?"text-green-400":"text-yellow-400"})});let D="checking",N="Verificando…";if("serviceWorker"in navigator)try{const T=await navigator.serviceWorker.getRegistration();T&&T.active?(D="ok",N=`Ativo — escopo ${T.scope}`):T?(D="warn",N="Registrado mas não ativo — recarregue a página"):(D="warn",N="Não registrado — instale como PWA pra ativar")}catch{D="error",N="Erro ao verificar service worker"}else D="error",N="Browser não suporta service worker";C.push({id:"sw",label:"Service Worker (PWA)",status:D,detail:N,icon:e.jsx(Ar,{size:16,className:"text-purple-400"})});const i=window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;C.push({id:"pwa",label:"Modo App Instalado (PWA)",status:i?"ok":"warn",detail:i?"Rodando como app instalado — máxima compatibilidade":"Rodando no browser — instale como PWA/APK pra melhor desempenho",icon:e.jsx("span",{className:"text-[16px]",children:i?"📱":"🌐"})});const v=n==="online"?"Online (servidor remoto)":n==="real"?"Real (WebContainer no browser)":"Offline (simulado)",S=n==="offline"?"warn":"ok",G=n==="offline"?"Modo simulado — npm install só atualiza package.json (não baixa código)":n==="online"?"Comandos rodam no servidor Linux real — npm install funciona de verdade":"Node.js de verdade no browser — npm install funciona offline (precisa COI)";C.push({id:"term",label:"Terminal em uso",status:S,detail:G+` · ativo: ${v}`,icon:e.jsx("span",{className:"text-[16px]",children:"⬛"})});let J="checking",Y="Testando proxy da Jasmim…";try{const T=new AbortController,ne=setTimeout(()=>T.abort(),4e3),y=await fetch("/api/ai/chat",{signal:T.signal,cache:"no-store"});clearTimeout(ne),y.status===405||y.status===400||y.ok?(J="ok",Y=`Endpoint /api/ai/chat respondendo (HTTP ${y.status}) — Jasmim deve funcionar`):y.status===404?(J="error",Y="Endpoint /api/ai/chat não existe — Jasmim não vai responder"):(J="warn",Y=`IA respondeu HTTP ${y.status}`)}catch(T){J="error",Y=`IA built-in indisponível (${T.message||"erro"}) — Jasmim não vai responder`}C.push({id:"ai",label:"Jasmim (IA built-in)",status:J,detail:Y,icon:e.jsx(mt,{size:16,className:"text-purple-300"})});let X="checking",te="Calculando…";try{if("storage"in navigator&&"estimate"in navigator.storage){const T=await navigator.storage.estimate(),ne=((T.usage||0)/1024/1024).toFixed(1),y=((T.quota||0)/1024/1024).toFixed(0),u=T.quota?((T.usage||0)/T.quota*100).toFixed(1):"?";X=T.quota&&(T.usage||0)/T.quota>.8?"warn":"ok",te=`${ne} MB usados de ${y} MB (${u}%)`}else X="warn",te="Browser não expõe info de armazenamento"}catch{X="warn",te="Não consegui verificar"}C.push({id:"storage",label:"Armazenamento local",status:X,detail:te,icon:e.jsx(Ks,{size:16,className:"text-orange-400"})});const re=o.listFiles().length;let Q="";try{const T=o.readFile("package.json");if(T){const ne=JSON.parse(T),y=Object.keys(ne.dependencies||{}).length,u=Object.keys(ne.devDependencies||{}).length;Q=` · ${y} dependência(s), ${u} dev`}}catch{}C.push({id:"proj",label:"Projeto atual",status:"ok",detail:`${r} · ${re} arquivo(s)${Q}`,icon:e.jsx(Ft,{size:16,className:"text-cyan-400"})}),p(C),m(new Date),f(!1)},[o,r,n]);if(a.useEffect(()=>{t&&k()},[t,k]),!t)return null;const z=c.filter(C=>C.status==="ok").length,U=c.filter(C=>C.status==="warn").length,K=c.filter(C=>C.status==="error").length;return e.jsx("div",{className:"fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-3 md:p-6",onClick:s,children:e.jsxs("div",{className:"bg-[#0d1409] border border-gray-700 rounded-2xl w-full max-w-[640px] md:max-w-[820px] max-h-[92vh] flex flex-col shadow-2xl",onClick:C=>C.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-gray-700/50",children:[e.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[e.jsx("div",{className:"w-9 h-9 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center",children:e.jsx("span",{className:"text-[18px] md:text-[22px]",children:"🩺"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-[14px] md:text-[18px] font-bold text-white",children:"Status do Sistema ao Vivo"}),e.jsx("p",{className:"text-[10px] md:text-[12px] text-gray-500",children:h?`Atualizado às ${h.toLocaleTimeString("pt-BR")}`:"Carregando…"})]})]}),e.jsx("button",{onClick:s,className:"p-2 rounded-lg hover:bg-white/5 text-gray-500","aria-label":"Fechar",children:e.jsx(ye,{size:20})})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 border-b border-gray-800",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center bg-green-500/10 border border-green-500/30 rounded-xl py-2 md:py-3",children:[e.jsx("span",{className:"text-[20px] md:text-[28px] font-bold text-green-400",children:z}),e.jsx("span",{className:"text-[10px] md:text-[12px] text-green-300",children:"funcionando"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center bg-yellow-500/10 border border-yellow-500/30 rounded-xl py-2 md:py-3",children:[e.jsx("span",{className:"text-[20px] md:text-[28px] font-bold text-yellow-400",children:U}),e.jsx("span",{className:"text-[10px] md:text-[12px] text-yellow-300",children:"atenção"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center bg-red-500/10 border border-red-500/30 rounded-xl py-2 md:py-3",children:[e.jsx("span",{className:"text-[20px] md:text-[28px] font-bold text-red-400",children:K}),e.jsx("span",{className:"text-[10px] md:text-[12px] text-red-300",children:"falhas"})]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-3 md:px-5 py-2 md:py-3",children:[c.length===0&&e.jsxs("div",{className:"text-center py-8 text-gray-500 text-[13px] md:text-[15px]",children:[e.jsx(Nt,{size:32,className:"mx-auto mb-2 animate-spin text-blue-400"}),"Verificando tudo…"]}),c.map(C=>e.jsxs("div",{className:"flex items-start gap-3 py-2.5 md:py-3 border-b border-gray-800/60 last:border-b-0",children:[e.jsx("div",{className:"w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0",children:C.icon}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("h3",{className:"text-[13px] md:text-[15px] font-bold text-gray-200",children:C.label}),e.jsx(ki,{s:C.status})]}),e.jsx("p",{className:"text-[11px] md:text-[14px] text-gray-400 leading-snug mt-0.5 md:mt-1 break-words",children:C.detail})]})]},C.id))]}),e.jsxs("div",{className:"px-4 md:px-6 py-3 md:py-4 border-t border-gray-700/50 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 md:gap-3",children:[e.jsxs("p",{className:"text-[10px] md:text-[12px] text-gray-600 leading-snug",children:["Clique em ",e.jsx("strong",{className:"text-blue-400",children:"Atualizar"})," sempre que mudar algo (rede, modo, instalação) pra ver o estado real."]}),e.jsxs("button",{onClick:k,disabled:j,className:"flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 active:scale-95 text-white font-bold text-[13px] md:text-[15px] transition-all shrink-0",children:[e.jsx(Nt,{size:16,className:j?"animate-spin":""}),j?"Atualizando…":"Atualizar agora"]})]})]})})}function Ai(t,s){const o=t.toJSON();let r={};const n=Object.keys(o).find(p=>p==="manifest.json"||p==="public/manifest.json"||p.endsWith("/manifest.json"));if(n)try{r=JSON.parse(o[n])}catch{}const c=Object.keys(o).some(p=>p.match(/\.(png|svg|ico|webp)$/i)&&(p.includes("icon")||p.includes("logo")));return{name:r.name||r.short_name||"Meu App",shortName:r.short_name||r.name||"App",description:r.description||"Aplicativo PWA",themeColor:r.theme_color||"#1a237e",backgroundColor:r.background_color||"#ffffff",startUrl:r.start_url||"./",display:r.display||"standalone",hasIcons:c,hasManifest:!!n,pagesUrl:s}}function Si({pwaInfo:t,onSetUrl:s}){const o=!!t.pagesUrl.trim();return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-3 bg-blue-500/8 border border-blue-500/20 rounded-xl space-y-1.5",children:[e.jsx("p",{className:"text-[12px] font-bold text-blue-300",children:"Como funciona"}),e.jsx("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:"O PWABuilder analisa seu site publicado e gera o APK em menos de 1 minuto. É gratuito, feito pelo Microsoft, e não precisa instalar nada."})]}),o?e.jsxs("a",{href:`https://www.pwabuilder.com/generate?url=${encodeURIComponent(t.pagesUrl)}`,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3.5 bg-blue-600/15 border border-blue-500/30 rounded-xl hover:bg-blue-600/20 transition-colors",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0",children:e.jsx(Ft,{size:18,className:"text-blue-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-blue-300",children:"Abrir PWABuilder"}),e.jsx("p",{className:"text-[10px] text-gray-500 truncate",children:t.pagesUrl})]}),e.jsx(xt,{size:13,className:"text-gray-600 shrink-0"})]}):e.jsxs("div",{className:"px-3 py-3 bg-yellow-500/8 border border-yellow-500/20 rounded-xl",children:[e.jsx("p",{className:"text-[12px] font-bold text-yellow-300 mb-1",children:"⚠️ Precisa do link do site publicado"}),e.jsx("p",{className:"text-[11px] text-gray-400 mb-2",children:"Primeiro publique no GitHub Pages, depois cole o link aqui."}),e.jsx("button",{onClick:s,className:"px-3 py-1.5 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-[12px] font-semibold text-yellow-300 hover:bg-yellow-500/30 transition-colors",children:"Inserir link do site →"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-wider font-semibold px-1",children:"No PWABuilder:"}),["Clique em 'Start'","Aguarde a análise","Clique em 'Package for stores'","Selecione Android","Clique em 'Generate Package'","Baixe e instale o .apk no celular"].map((r,n)=>e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5",children:n+1}),e.jsx("p",{className:"text-[11px] text-gray-400",children:r})]},n))]})]})}function Ti({pwaInfo:t,vfs:s,projectName:o}){const[r,n]=a.useState("idle"),[c,p]=a.useState([]),[h,m]=a.useState(o.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")||"sk-code-editor"),[j,f]=a.useState(""),[k,z]=a.useState(""),U=cs(),K=!!U.token,C=V=>p(I=>[...I,V]),L=a.useCallback(async()=>{if(K){n("pushing"),p(["🚀 Iniciando…"]),z(""),f("");try{const V=U.username,I=h.trim();C(`📁 Verificando repositório "${I}"…`);try{await Ia(U,I,`${t.name} — gerado pelo SK Code Editor`,!1),C("✅ Repositório criado.")}catch(J){if(J.message?.includes("422")||J.message?.includes("already exists"))C("ℹ️ Repositório já existe — usando existente.");else throw J}await ds(U,V,I),C("🌐 Repositório público.");const ee=s.toJSON(),$=`https://${V}.github.io/${I}/`,D=ee["manifest.json"]||ee["public/manifest.json"]||JSON.stringify({name:t.name,short_name:t.shortName,start_url:"./",display:"standalone",background_color:t.backgroundColor,theme_color:t.themeColor,icons:[{src:"icon-192.png",sizes:"192x192",type:"image/png"}]},null,2),N=`name: Deploy GitHub Pages
on:
  push:
    branches: [main, master]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "."
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
`,i=`name: Build APK Android
on:
  workflow_dispatch:
  workflow_run:
    workflows: ["Deploy GitHub Pages"]
    types: [completed]
permissions:
  contents: write
jobs:
  build-apk:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install -g @bubblewrap/cli@latest
      - name: Gerar keystore
        run: |
          keytool -genkey -v -keystore android.keystore -alias app \\
            -keyalg RSA -keysize 2048 -validity 10000 \\
            -storepass mypassword123 -keypass mypassword123 \\
            -dname "CN=${t.name}, OU=App, O=App, L=BR, ST=BR, C=BR"
      - name: Criar configuração TWA
        run: |
          cat > twa-manifest.json << 'TWAEOF'
          {
            "packageId": "com.${V.toLowerCase().replace(/[^a-z0-9]/g,"")}.${I.toLowerCase().replace(/[^a-z0-9]/g,"")}",
            "host": "${V}.github.io",
            "name": "${t.name}",
            "launcherName": "${t.shortName}",
            "display": "standalone",
            "themeColor": "${t.themeColor}",
            "navigationColor": "${t.themeColor}",
            "backgroundColor": "${t.backgroundColor}",
            "enableNotifications": false,
            "startUrl": "/${I}/",
            "iconUrl": "${$}icon-192.png",
            "maskableIconUrl": "${$}icon-192.png",
            "appVersion": "1.0.0",
            "appVersionCode": 1,
            "signingKey": { "path": "../android.keystore", "alias": "app" },
            "shortcuts": [],
            "generatorApp": "bubblewrap-cli",
            "webManifestUrl": "${$}manifest.json",
            "fallbackType": "customtabs",
            "features": {},
            "minSdkVersion": 21,
            "orientation": "default",
            "fullScopeUrl": "${$}"
          }
          TWAEOF
      - name: Build APK
        run: |
          bubblewrap init --manifest twa-manifest.json --directory ./twa-app
          cd twa-app && bubblewrap build
        env:
          BUBBLEWRAP_KEYSTORE_PASSWORD: mypassword123
          BUBBLEWRAP_KEY_PASSWORD: mypassword123
      - name: Upload APK
        uses: actions/upload-artifact@v4
        with:
          name: APK-Android
          path: "**/*.apk"
          retention-days: 30
`,v={...ee,"manifest.json":D,".github/workflows/deploy.yml":N,".github/workflows/build-apk.yml":i};C(`📤 Enviando ${Object.keys(v).length} arquivo(s)…`);const S=await ma(U,V,I,v,`${t.name} — SK Code Editor`);C(`✅ ${S.success} arquivo(s) enviados.`),C("🌐 Ativando GitHub Pages…");const G=await Xs(U,V,I,"main","/");C(`✅ GitHub Pages ativado: ${G}`),C("⏳ Aguarde ~3 min para o deploy e ~10 min para o APK..."),C(`📥 APK disponível em: github.com/${V}/${I}/actions`),f(`https://github.com/${V}/${I}/actions`),n("done")}catch(V){z(V.message||String(V)),n("error")}}},[U,h,s,t,o]);return K?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-3 bg-green-500/8 border border-green-500/20 rounded-xl space-y-1.5",children:[e.jsx("p",{className:"text-[12px] font-bold text-green-300",children:"O que acontece:"}),e.jsx("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:"Sobe seu projeto no GitHub, ativa o Pages, e dispara o processo de build do APK nos servidores do GitHub. Você baixa o APK pronto na aba Actions."})]}),r==="idle"&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Nome do repositório"}),e.jsx("input",{value:h,onChange:V=>m(V.target.value.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")),className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 outline-none focus:border-green-500/50"}),e.jsxs("p",{className:"text-[10px] text-gray-600",children:["APK: github.com/",U.username,"/",h,"/actions"]})]}),e.jsxs("button",{onClick:L,className:"w-full flex items-center justify-center gap-2 py-3.5 bg-green-600 text-white rounded-xl font-bold text-[15px] hover:bg-green-500 transition-colors",children:[e.jsx(os,{size:16}),"Publicar e Gerar APK"]})]}),r==="pushing"&&e.jsx("div",{className:"space-y-2",children:e.jsxs("div",{className:"bg-black/40 border border-gray-700/40 rounded-xl p-3 max-h-48 overflow-y-auto font-mono",children:[c.map((V,I)=>e.jsx("p",{className:"text-[11px] text-gray-300 leading-relaxed",children:V},I)),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx(qe,{size:11,className:"animate-spin text-green-400"}),e.jsx("span",{className:"text-[11px] text-green-400",children:"Processando…"})]})]})}),r==="done"&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-3 bg-green-500/10 border border-green-500/20 rounded-xl",children:[e.jsx("p",{className:"text-[12px] font-bold text-green-400 mb-1",children:"✅ Publicado com sucesso!"}),e.jsx("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:"O GitHub está construindo o APK. Leva ~10 minutos. Quando terminar, baixe na aba Actions."})]}),e.jsx("div",{className:"bg-black/40 border border-gray-700/40 rounded-xl p-3 max-h-32 overflow-y-auto font-mono",children:c.map((V,I)=>e.jsx("p",{className:"text-[11px] text-gray-300 leading-relaxed",children:V},I))}),e.jsxs("a",{href:j,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3 bg-blue-600/15 border border-blue-500/30 rounded-xl hover:bg-blue-600/20 transition-colors",children:[e.jsx(Pt,{size:16,className:"text-blue-400 shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-[13px] font-bold text-blue-300",children:"Abrir Actions no GitHub"}),e.jsx("p",{className:"text-[10px] text-gray-500",children:"Baixar APK quando terminar"})]}),e.jsx(xt,{size:13,className:"text-gray-600"})]}),e.jsxs("button",{onClick:()=>{n("idle"),p([])},className:"w-full text-center text-[11px] text-gray-600 hover:text-gray-400 transition-colors py-1",children:[e.jsx(Nt,{size:11,className:"inline mr-1"}),"Gerar novamente"]})]}),r==="error"&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"px-3 py-2.5 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2",children:[e.jsx(Tt,{size:13,className:"text-red-400 shrink-0 mt-0.5"}),e.jsx("p",{className:"text-[12px] text-red-400 leading-relaxed",children:k})]}),e.jsx("button",{onClick:()=>n("idle"),className:"w-full text-center text-[11px] text-gray-600 hover:text-gray-400 py-1",children:"Tentar novamente"})]})]}):e.jsxs("div",{className:"px-3 py-3 bg-yellow-500/8 border border-yellow-500/20 rounded-xl space-y-2",children:[e.jsx("p",{className:"text-[12px] font-bold text-yellow-300",children:"⚠️ Token do GitHub necessário"}),e.jsx("p",{className:"text-[11px] text-gray-400",children:"Conecte sua conta GitHub primeiro. Vá em Menu → GitHub — Clonar / Enviar → configure o token."})]})}function Ri({open:t,onClose:s,vfs:o,projectName:r}){const[n,c]=a.useState("pwabuilder"),[p,h]=a.useState(""),[m,j]=a.useState(!1),[f,k]=a.useState(""),z=Ai(o,p),U=()=>{j(!0),k(p)},K=()=>{let L=f.trim();L&&!L.endsWith("/")&&(L+="/"),h(L),j(!1)};if(!t)return null;const C=[{id:"pwabuilder",label:"PWABuilder",icon:e.jsx(Ft,{size:13}),color:"blue"},{id:"actions",label:"GitHub Actions",icon:e.jsx(Pt,{size:13}),color:"green"}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/70",onClick:s}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:L=>L.stopPropagation(),children:e.jsxs("div",{className:"bg-[#0d1117] border-t border-[#30363d] rounded-t-3xl shadow-2xl flex flex-col",style:{height:"88vh"},children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-[#30363d] rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-[#21262d] shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ts,{size:18,className:"text-orange-400"}),e.jsx("p",{className:"text-[15px] font-bold text-white",children:"Gerar APK Android"})]}),e.jsx("button",{onClick:s,className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:17})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:e.jsxs("div",{className:"px-4 py-4 space-y-4",children:[e.jsxs("div",{className:"px-3 py-3 bg-[#161b22] border border-[#30363d] rounded-xl space-y-2",children:[e.jsx("p",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Projeto atual"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center text-lg",style:{backgroundColor:z.themeColor+"33"},children:"📱"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-bold text-white",children:z.name}),e.jsx("p",{className:"text-[10px] text-gray-500",children:z.description})]})]}),e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-semibold ${z.hasManifest?"bg-green-500/15 text-green-400":"bg-red-500/15 text-red-400"}`,children:z.hasManifest?"✅ manifest.json":"⚠️ sem manifest"}),e.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-semibold ${z.hasIcons?"bg-green-500/15 text-green-400":"bg-yellow-500/15 text-yellow-400"}`,children:z.hasIcons?"✅ ícones":"⚠️ sem ícones"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Link do site publicado"}),e.jsxs("button",{onClick:U,className:"text-[10px] text-blue-400 hover:text-blue-300",children:[e.jsx(za,{size:11,className:"inline mr-1"}),"editar"]})]}),m?e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{autoFocus:!0,value:f,onChange:L=>k(L.target.value),onKeyDown:L=>L.key==="Enter"&&K(),placeholder:"https://usuario.github.io/nome-do-repo/",className:"flex-1 px-3 py-2 bg-[#161b22] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-blue-500/50"}),e.jsx("button",{onClick:K,className:"px-3 py-2 bg-blue-600 text-white rounded-xl text-[12px] font-bold",children:"OK"})]}):e.jsx("div",{onClick:U,className:`px-3 py-2.5 rounded-xl border cursor-pointer transition-colors ${p?"bg-[#161b22] border-gray-700/50 text-gray-300":"bg-yellow-500/5 border-yellow-500/20 text-gray-600"}`,children:e.jsx("p",{className:"text-[12px] font-mono truncate",children:p||"Clique para inserir o link do GitHub Pages…"})})]}),e.jsx("div",{className:"flex bg-[#161b22] rounded-xl p-1 gap-1",children:C.map(L=>e.jsxs("button",{onClick:()=>c(L.id),className:`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[12px] font-semibold transition-colors ${n===L.id?L.color==="blue"?"bg-blue-600/20 text-blue-300 border border-blue-500/30":"bg-green-600/20 text-green-300 border border-green-500/30":"text-gray-500 hover:text-gray-400"}`,children:[L.icon,L.label]},L.id))}),n==="pwabuilder"&&e.jsx(Si,{pwaInfo:z,onSetUrl:U}),n==="actions"&&e.jsx(Ti,{pwaInfo:z,vfs:o,projectName:r}),e.jsx("div",{className:"px-3 py-2.5 bg-[#161b22] border border-[#30363d] rounded-xl",children:e.jsxs("p",{className:"text-[11px] text-gray-500 leading-relaxed",children:[e.jsx("span",{className:"text-gray-400 font-semibold",children:"💡 Dica:"}),' Para instalar no celular, ative "Fontes desconhecidas" em Configurações → Segurança, depois abra o .apk.']})})]})})]})})]})}const ks=[{id:"github",label:"GitHub.dev",desc:"Editor leve, funciona bem no celular e PC",icon:Tr,color:"#58a6ff",buildUrl:(t,s)=>`https://github.dev/${t}/${s}`,emptyUrl:"https://github.dev"},{id:"codespaces",label:"GitHub Codespaces",desc:"Máquina virtual completa — terminal real, extensões, IA",icon:_o,color:"#3fb950",buildUrl:(t,s)=>`https://codespaces.new/${t}/${s}`,emptyUrl:"https://codespaces.new"},{id:"stackblitz",label:"StackBlitz",desc:"Node.js no navegador com terminal real",icon:os,color:"#1389fd",buildUrl:(t,s)=>`https://stackblitz.com/github/${t}/${s}`,emptyUrl:"https://stackblitz.com"},{id:"vscode",label:"VS Code Web",desc:"vscode.dev — pode ter limitações no celular",icon:Ra,color:"#007acc",buildUrl:(t,s)=>`https://vscode.dev/github/${t}/${s}`,emptyUrl:"https://vscode.dev"}];function Pi({open:t,onClose:s,vfs:o,projectName:r}){const n=cs(),c=!!n.token,[p,h]=a.useState("github"),[m,j]=a.useState(r.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")||"meu-projeto"),[f,k]=a.useState("idle"),[z,U]=a.useState([]),[K,C]=a.useState(""),[L,V]=a.useState(""),I=ks.find(N=>N.id===p)||ks[0],ee=N=>U(i=>[...i,N]),$=a.useCallback(async()=>{const N=m.trim()||"meu-projeto";k("pushing"),U(["🚀 Iniciando envio para o GitHub…"]),V(""),C("");try{const i=n.username;ee(`👤 Conta: ${i}`),ee(`📁 Criando repositório "${N}"…`);try{await Ia(n,N,`${r} — SK Code Editor`,!1),ee("✅ Repositório criado.")}catch(J){if(J.message?.includes("422")||J.message?.includes("already exists")||J.message?.includes("name already exists"))ee("ℹ️ Repositório já existe — usando existente.");else throw J}await ds(n,i,N);const v=o.toJSON(),S=Object.keys(v).length;ee(`📤 Enviando ${S} arquivo(s)…`),await ma(n,i,N,v,`${r} — SK Code Editor`),ee("✅ Projeto enviado!");const G=I.buildUrl(i,N);ee(`💻 Abrindo: ${G}`),C(G),k("done"),window.open(G,"_blank")}catch(i){V(i.message||String(i)),k("error")}},[n,m,o,r,I]);if(!t)return null;const D=I.icon;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/70",onClick:s}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:N=>N.stopPropagation(),children:e.jsxs("div",{className:"bg-[#0d1117] border-t border-[#30363d] rounded-t-3xl shadow-2xl flex flex-col",style:{maxHeight:"90vh"},children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-[#30363d] rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-[#21262d] shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-8 h-8 rounded-xl bg-[#58a6ff22] flex items-center justify-center",children:e.jsx(_o,{size:16,className:"text-[#58a6ff]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[15px] font-bold text-white",children:"Editar no Navegador"}),e.jsx("p",{className:"text-[11px] text-gray-500",children:r})]})]}),e.jsx("button",{onClick:s,className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:17})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:e.jsxs("div",{className:"px-4 py-4 space-y-4",children:[e.jsxs("div",{className:"px-3 py-3 bg-yellow-500/8 border border-yellow-500/20 rounded-xl space-y-1",children:[e.jsx("p",{className:"text-[12px] font-bold text-yellow-300",children:"💡 Dica para celular"}),e.jsxs("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:["O vscode.dev mudou recentemente e pode não funcionar bem no celular. Recomendamos o ",e.jsx("span",{className:"text-[#58a6ff] font-bold",children:"GitHub.dev"})," ou o ",e.jsx("span",{className:"text-[#1389fd] font-bold",children:"StackBlitz"}),"."]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-semibold",children:"Escolha o Editor"}),ks.map(N=>{const i=N.icon,v=p===N.id;return e.jsxs("button",{onClick:()=>h(N.id),className:"w-full flex items-center gap-3 px-3 py-3 rounded-xl border transition-colors text-left",style:{backgroundColor:v?N.color+"22":"#161b22",borderColor:v?N.color+"88":"#30363d"},children:[e.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center shrink-0",style:{backgroundColor:N.color+"22"},children:e.jsx(i,{size:15,style:{color:N.color}})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold",style:{color:v?N.color:"white"},children:N.label}),e.jsx("p",{className:"text-[10px] text-gray-500",children:N.desc})]}),v&&e.jsx("div",{className:"w-2 h-2 rounded-full shrink-0",style:{backgroundColor:N.color}})]},N.id)})]}),c?f==="idle"?e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-semibold",children:"Nome do Repositório"}),e.jsx("input",{value:m,onChange:N=>j(N.target.value.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")),className:"w-full px-3 py-2.5 bg-[#161b22] border border-gray-700/50 rounded-xl text-sm text-gray-300 outline-none focus:border-blue-500/50"}),e.jsxs("p",{className:"text-[10px] text-gray-600",children:["github.com/",n.username,"/",m]})]}),e.jsxs("div",{className:"px-3 py-3 bg-[#161b22] border border-[#30363d] rounded-xl space-y-2",children:[e.jsx("p",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-semibold",children:"O que vai acontecer:"}),["Cria ou usa o repositório GitHub",`Envia todos os ${Object.keys(o.toJSON()).length} arquivo(s)`,`Abre o ${I.label} com tudo dentro`].map((N,i)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center shrink-0",style:{backgroundColor:I.color+"22",color:I.color},children:i+1}),e.jsx("span",{className:"text-[12px] text-gray-400",children:N})]},i))]}),e.jsxs("button",{onClick:$,className:"w-full flex items-center justify-center gap-2.5 py-3.5 text-white rounded-xl font-bold text-[15px] transition-opacity hover:opacity-90",style:{backgroundColor:I.color},children:[e.jsx(Rr,{size:17}),"Enviar e Abrir no ",I.label]}),e.jsxs("a",{href:I.emptyUrl,target:"_blank",rel:"noopener noreferrer",className:"block text-center text-[11px] text-gray-600 hover:text-gray-400 transition-colors py-1",children:["Abrir ",I.label," sem enviar →"]})]}):f==="pushing"?e.jsx("div",{className:"space-y-3",children:e.jsxs("div",{className:"bg-black/60 border border-gray-700/40 rounded-xl p-3 max-h-52 overflow-y-auto font-mono",children:[z.map((N,i)=>e.jsx("p",{className:"text-[11px] leading-relaxed",style:{color:I.color},children:N},i)),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx(qe,{size:11,className:"animate-spin",style:{color:I.color}}),e.jsx("span",{className:"text-[11px]",style:{color:I.color+"88"},children:"Enviando…"})]})]})}):f==="done"?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-3 bg-green-500/10 border border-green-500/20 rounded-xl",children:[e.jsx("p",{className:"text-[12px] font-bold text-green-400 mb-1",children:"✅ Projeto enviado e aberto!"}),e.jsxs("p",{className:"text-[11px] text-gray-400",children:["O ",I.label," foi aberto. Se não abriu, clique abaixo."]})]}),e.jsx("div",{className:"bg-black/60 border border-gray-700/40 rounded-xl p-3 max-h-32 overflow-y-auto font-mono",children:z.map((N,i)=>e.jsx("p",{className:"text-[11px] text-green-400 leading-relaxed",children:N},i))}),K&&e.jsxs("a",{href:K,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3 border rounded-xl transition-opacity hover:opacity-80",style:{backgroundColor:I.color+"22",borderColor:I.color+"44"},children:[e.jsx(D,{size:16,style:{color:I.color,flexShrink:0}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("p",{className:"text-[13px] font-bold",style:{color:I.color},children:["Abrir ",I.label]}),e.jsx("p",{className:"text-[10px] text-gray-500 truncate",children:K})]}),e.jsx(xt,{size:13,className:"text-gray-600 shrink-0"})]}),e.jsxs("button",{onClick:()=>{k("idle"),U([])},className:"w-full text-center text-[11px] text-gray-600 hover:text-gray-400 py-1",children:[e.jsx(Nt,{size:11,className:"inline mr-1"}),"Usar outro repositório"]})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-2.5 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2",children:[e.jsx(Tt,{size:13,className:"text-red-400 shrink-0 mt-0.5"}),e.jsx("p",{className:"text-[12px] text-red-400 leading-relaxed",children:L})]}),e.jsxs("a",{href:I.emptyUrl,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 py-3 border rounded-xl text-[13px] font-bold transition-opacity hover:opacity-80",style:{backgroundColor:I.color+"22",borderColor:I.color+"44",color:I.color},children:[e.jsx(xt,{size:14}),"Abrir ",I.label," assim mesmo"]}),e.jsx("button",{onClick:()=>k("idle"),className:"w-full text-center text-[11px] text-gray-600 hover:text-gray-400 py-1",children:"Tentar novamente"})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-3 bg-yellow-500/8 border border-yellow-500/20 rounded-xl",children:[e.jsx("p",{className:"text-[12px] font-bold text-yellow-300 mb-1",children:"⚠️ GitHub não configurado"}),e.jsx("p",{className:"text-[11px] text-gray-400",children:"Conecte o GitHub em Menu → GitHub para abrir com o projeto completo."})]}),e.jsxs("a",{href:I.emptyUrl,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3.5 border rounded-xl hover:opacity-80 transition-opacity",style:{backgroundColor:I.color+"22",borderColor:I.color+"44"},children:[e.jsx(D,{size:16,style:{color:I.color}}),e.jsxs("span",{className:"text-[14px] font-bold",style:{color:I.color},children:["Abrir ",I.label," (sem projeto)"]})]})]})]})})]})})]})}function Ii({title:t,placeholder:s,defaultValue:o,icon:r,confirmLabel:n="Criar",onConfirm:c,onCancel:p}){const[h,m]=a.useState(o),j=a.useRef(null);a.useEffect(()=>{const k=setTimeout(()=>{j.current?.focus(),j.current?.select()},80);return()=>clearTimeout(k)},[]);const f=()=>{const k=h.trim();k&&c(k)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm",onClick:p}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:k=>k.stopPropagation(),children:e.jsxs("div",{className:"bg-[#222e18] border-t border-gray-700/50 rounded-t-3xl shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-gray-700/30",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[r,e.jsx("p",{className:"text-base font-bold text-white",children:t})]}),e.jsx("button",{onClick:p,className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-600",children:e.jsx(ye,{size:17})})]}),e.jsxs("div",{className:"px-5 pt-4 pb-6 space-y-4",children:[e.jsx("input",{ref:j,value:h,onChange:k=>m(k.target.value),onKeyDown:k=>{k.key==="Enter"&&f(),k.key==="Escape"&&p()},placeholder:s,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,className:"w-full px-4 py-3.5 bg-[#141c0d] border border-gray-700/50 rounded-2xl text-[16px] text-gray-200 placeholder-gray-700 outline-none focus:border-green-500/60 focus:ring-1 focus:ring-green-500/20"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:p,className:"flex-1 py-3 bg-white/5 border border-gray-700/40 text-gray-400 rounded-2xl text-[15px] font-semibold",children:"Cancelar"}),e.jsx("button",{onClick:f,disabled:!h.trim(),className:"flex-1 py-3 bg-green-600 disabled:opacity-40 text-white rounded-2xl text-[15px] font-bold hover:bg-green-500 transition-colors",children:n})]})]})]})})]})}const Oi=["UTF-8","UTF with BOM","UTF-16 LE","UTF-16 BE","Latin-1"],Li=["plaintext","javascript","typescript","html","css","json","python","java","cpp","c","csharp","go","rust","ruby","php","swift","kotlin","yaml","markdown","sql","graphql","shell","dockerfile","xml","scss"];function qi(t){const s={};t.forEach(c=>{const p=c.split("/");let h=s;p.forEach(m=>{h[m]||(h[m]={}),h=h[m]})});function o(c){return Object.keys(c).sort((p,h)=>{const m=Object.keys(c[p]).length>0,j=Object.keys(c[h]).length>0;return m&&!j?-1:!m&&j?1:p.localeCompare(h)})}function r(c,p,h,m){const j=m?"└── ":"├── ",f=o(c),k=f.length>0;let z=p+j+h+(k?"/":"")+`
`;return f.forEach((U,K)=>{const C=K===f.length-1;z+=r(c[U],p+(m?"    ":"│   "),U,C)}),z}const n=o(s);return n.map((c,p)=>r(s[c],"",c,p===n.length-1).trimEnd()).join(`
`)}function zi(t,s){const o=new Date().toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"}),r=t.listFiles(),n=d=>{try{return t.readFile(d)||""}catch{return""}},c=n("package.json");let p={};try{p=JSON.parse(c)}catch{}const h={...p.dependencies||{},...p.devDependencies||{}},m=Object.keys(h),j=m.includes("react")||r.some(d=>d.endsWith(".tsx")||d.endsWith(".jsx")),f=m.includes("vite")||r.some(d=>d==="vite.config.ts"||d==="vite.config.js"),k=m.includes("next"),z=m.includes("express"),U=r.some(d=>d.endsWith(".py"))&&(n("requirements.txt")+n("app.py")).includes("flask"),K=r.some(d=>d.endsWith(".py")),C=m.includes("typescript")||r.some(d=>d.endsWith(".ts")||d.endsWith(".tsx")),L=m.includes("tailwindcss"),V=m.includes("prisma")||m.includes("@prisma/client"),I=m.includes("drizzle-orm"),ee=m.includes("pg")||m.includes("postgres")||m.includes("@neondatabase/serverless"),$=m.includes("mongoose")||m.includes("mongodb"),D=m.includes("better-sqlite3")||m.includes("sqlite3"),N=r.some(d=>d.endsWith(".html")),i=[];k?i.push("Next.js"):j&&i.push("React"+(f?" + Vite":"")),C&&i.push("TypeScript"),L&&i.push("Tailwind CSS"),K&&U?i.push("Python + Flask"):K&&i.push("Python"),N&&!j&&!K&&i.push("HTML + CSS + JavaScript");const v=[];z&&v.push("Node.js + Express"),ee&&v.push("PostgreSQL"+(m.includes("@neondatabase/serverless")?" (Neon)":"")),$&&v.push("MongoDB"),D&&v.push("SQLite"),V&&v.push("Prisma ORM"),I&&v.push("Drizzle ORM");const S=k?"Aplicacao Web Full-Stack (Next.js)":j&&z?"Full-Stack (React + Express)":j?"Aplicacao Web Frontend (React)":z?"Backend/API (Node.js + Express)":U?"Backend/API (Python + Flask)":N?"Site/Pagina Web (HTML/CSS/JS)":K?"Script / Aplicacao Python":"Projeto de Codigo",G=[],J=/(?:router|app)\.(get|post|put|patch|delete|use)\s*\(\s*["'`]([^"'`]+)["'`]/gi;r.filter(d=>d.endsWith(".ts")||d.endsWith(".js")).forEach(d=>{const w=n(d);let se;const q=new RegExp(J.source,"gi");for(;(se=q.exec(w))!==null;){const x=se[1].toUpperCase().padEnd(6),E=se[2];!E.includes("{{")&&E!=="/"&&G.push(`${x} ${E}  (em ${d})`)}});const Y=new Set,X=/process\.env\.([A-Z_][A-Z0-9_]*)/g;r.filter(d=>d.endsWith(".ts")||d.endsWith(".js")||d.endsWith(".py")).forEach(d=>{const w=n(d);let se;const q=new RegExp(X.source,"g");for(;(se=q.exec(w))!==null;)se[1]!=="NODE_ENV"&&Y.add(se[1])}),[".env",".env.example",".env.local"].forEach(d=>{n(d).split(`
`).forEach(w=>{const se=w.match(/^([A-Z_][A-Z0-9_]*)=/);se&&Y.add(se[1])})});const te=p.scripts||{},re=r.filter(d=>["index.ts","index.js","main.ts","main.tsx","app.ts","app.js","app.py","main.py","server.ts","server.js","App.tsx","App.jsx","index.tsx","index.html"].includes(d.split("/").pop()||"")).slice(0,10),Q=r.reduce((d,w)=>d+n(w).split(`
`).length,0),T=qi(r);function ne(d){const w=d.split("/").pop()||d,se=w.toLowerCase(),q=w.split(".").pop()?.toLowerCase()||"",x=w.replace(/\.[^.]+$/,"").toLowerCase();if(w==="package.json")return"Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.";if(w==="tsconfig.json")return"Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.";if(w==="vite.config.ts"||w==="vite.config.js")return"Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.";if(w==="tailwind.config.ts"||w==="tailwind.config.js")return"Configuracao do Tailwind CSS — a biblioteca de estilos visuais usada no projeto.";if(w==="postcss.config.js"||w==="postcss.config.cjs")return"Configuracao do PostCSS, necessaria para o Tailwind processar os estilos.";if(w===".env"||w===".env.local"||w===".env.example")return"Arquivo de variaveis secretas (senhas, chaves de API). NUNCA suba este arquivo para o GitHub.";if(w==="Dockerfile")return"Instrucoes para criar um container Docker do projeto (para deploy em servidores).";if(w==="docker-compose.yml")return"Define multiplos containers Docker que rodam juntos (ex: app + banco de dados).";if(w===".gitignore")return"Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env";if(w==="README.md")return"Documentacao principal do projeto. Explica o que o projeto faz e como rodar.";if(w==="PLANO.md")return"Este documento! Gerado automaticamente pelo SK Code Editor com toda a estrutura do projeto.";if(w==="MANUAL.md")return"Manual explicativo em linguagem simples, feito para entender o projeto sem precisar de conhecimento tecnico profundo.";if(w==="schema.prisma")return"Esquema do banco de dados (tabelas, colunas, relacoes) escrito em linguagem Prisma.";if(w==="drizzle.config.ts")return"Configuracao do Drizzle ORM — gerencia a conexao e migracao do banco de dados.";if(w==="index.html")return"Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.";if(q==="md")return"Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).";if(q==="sql")return"Script SQL — contem comandos para criar tabelas, inserir ou consultar dados no banco.";if(q==="csv")return"Planilha de dados em formato texto (valores separados por virgula).";if(q==="json")return x.includes("manifest")?"Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.":"Arquivo de dados ou configuracao no formato JSON (chave: valor).";if(q==="css"||q==="scss"||q==="sass")return"Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.";if(q==="svg")return"Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).";if(q==="png"||q==="jpg"||q==="jpeg"||q==="webp")return"Arquivo de imagem.";if(q==="py")return se.includes("model")?"Modelos de dados Python (classes que representam entidades como Usuario, Produto...).":se.includes("route")||se.includes("view")?"Rotas/views do backend Python — define quais URLs o servidor responde.":se.includes("test")?"Arquivo de testes automatizados em Python.":se.includes("config")?"Configuracoes do projeto Python.":"Arquivo Python — codigo de logica ou script de automacao.";if(q==="tsx"||q==="jsx")return x==="app"||x==="App"?"Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.":x==="main"||x==="index"?"Ponto de entrada do React — monta o componente App na pagina HTML.":x.toLowerCase().includes("layout")?"Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.":x.toLowerCase().includes("card")?"Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.":x.toLowerCase().includes("modal")?"Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.":x.toLowerCase().includes("button")||x.toLowerCase().includes("btn")?"Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.":x.toLowerCase().includes("header")||x.toLowerCase().includes("navbar")||x.toLowerCase().includes("nav")?"Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.":x.toLowerCase().includes("footer")?"Componente de RODAPE — parte inferior da pagina com links, copyright e informacoes extras.":x.toLowerCase().includes("sidebar")?"Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.":x.toLowerCase().includes("form")?"Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.":x.toLowerCase().includes("input")?"Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.":x.toLowerCase().includes("table")?"Componente de TABELA — exibe dados em linhas e colunas.":x.toLowerCase().includes("list")?"Componente de LISTA — exibe uma colecao de items de forma organizada.":x.toLowerCase().includes("item")?"Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.":x.toLowerCase().includes("page")||x.toLowerCase().includes("screen")||x.toLowerCase().includes("view")?"Componente de PAGINA/TELA — representa uma tela completa navegavel no app.":x.toLowerCase().includes("dashboard")?"Componente de PAINEL DE CONTROLE — tela principal com resumo de dados e acesso rapido as funcoes.":x.toLowerCase().includes("chart")||x.toLowerCase().includes("graph")?"Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).":x.toLowerCase().includes("login")||x.toLowerCase().includes("auth")||x.toLowerCase().includes("signin")?"Componente de LOGIN/AUTENTICACAO — tela de entrada com usuario e senha.":x.toLowerCase().includes("register")||x.toLowerCase().includes("signup")||x.toLowerCase().includes("cadastro")?"Componente de CADASTRO — formulario para criar nova conta de usuario.":x.toLowerCase().includes("profile")||x.toLowerCase().includes("perfil")?"Componente de PERFIL — exibe e edita informacoes do usuario logado.":x.toLowerCase().includes("search")||x.toLowerCase().includes("busca")?"Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.":x.toLowerCase().includes("toast")||x.toLowerCase().includes("notification")||x.toLowerCase().includes("alert")?"Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').":x.toLowerCase().includes("loading")||x.toLowerCase().includes("spinner")?"Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.":x.toLowerCase().includes("empty")||x.toLowerCase().includes("placeholder")?"Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').":x.toLowerCase().includes("error")||x.toLowerCase().includes("erro")?"Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.":x.toLowerCase().includes("provider")?"Componente PROVIDER — 'fornece' dados/funcoes para todos os componentes filhos via Context API do React.":x.toLowerCase().includes("context")?"CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.":x.toLowerCase().includes("icon")?"Componente de ICONE — imagem/simbolo visual pequeno reutilizavel.":x.toLowerCase().includes("avatar")?"Componente AVATAR — foto ou iniciais do usuario em formato circular.":x.toLowerCase().includes("badge")?"Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').":x.toLowerCase().includes("tag")||x.toLowerCase().includes("chip")?"Componente TAG/CHIP — rotulo pequeno para categorizar ou classificar um item.":x.toLowerCase().includes("menu")||x.toLowerCase().includes("dropdown")?"Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.":x.toLowerCase().includes("dialog")?"Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).":x.toLowerCase().includes("tabs")||x.toLowerCase().includes("tab")?"Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.":x.toLowerCase().includes("accordion")?"Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.":x.toLowerCase().includes("stepper")||x.toLowerCase().includes("wizard")?"Componente WIZARD/STEPPER — guia o usuario por multiplos passos em sequencia.":x.toLowerCase().includes("map")?"Componente de MAPA — exibe mapa geografico (geralmente Google Maps ou Leaflet).":x.toLowerCase().includes("editor")?"Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.":x.toLowerCase().includes("preview")?"Componente PREVIEW — exibe uma visualizacao de algo antes de salvar/publicar.":x.toLowerCase().includes("upload")?"Componente UPLOAD — permite selecionar e enviar arquivos.":x.toLowerCase().includes("settings")||x.toLowerCase().includes("config")||x.toLowerCase().includes("configuracao")?"Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.":x.toLowerCase().includes("home")||x.toLowerCase().includes("inicio")?"Componente HOME — pagina/tela inicial do app.":x.toLowerCase().includes("product")||x.toLowerCase().includes("produto")?"Componente de PRODUTO — exibe informacoes de um produto (nome, preco, imagem...).":x.toLowerCase().includes("order")||x.toLowerCase().includes("pedido")?"Componente de PEDIDO — gerencia ou exibe informacoes de um pedido/compra.":x.toLowerCase().includes("cart")||x.toLowerCase().includes("carrinho")?"Componente CARRINHO — lista de produtos selecionados para compra.":x.toLowerCase().includes("payment")||x.toLowerCase().includes("checkout")||x.toLowerCase().includes("pagamento")?"Componente de PAGAMENTO/CHECKOUT — tela de finalizacao de compra.":x.toLowerCase().includes("chat")||x.toLowerCase().includes("message")||x.toLowerCase().includes("mensagem")?"Componente de CHAT/MENSAGENS — interface de conversa em tempo real.":x.toLowerCase().includes("comment")||x.toLowerCase().includes("comentario")?"Componente de COMENTARIOS — exibe e permite adicionar comentarios a um conteudo.":x.toLowerCase().includes("calendar")||x.toLowerCase().includes("agenda")?"Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.":"Componente React — parte visual reutilizavel da interface do usuario.";if((q==="ts"||q==="tsx")&&(x.startsWith("use")||x.toLowerCase().startsWith("use"))){const E=x.replace(/^use/i,"");return E.toLowerCase().includes("auth")?"HOOK de autenticacao — gerencia o estado de login/logout do usuario.":E.toLowerCase().includes("fetch")||E.toLowerCase().includes("api")||E.toLowerCase().includes("data")?"HOOK de dados — busca informacoes da API e gerencia estado de carregamento e erro.":E.toLowerCase().includes("local")||E.toLowerCase().includes("storage")?"HOOK de armazenamento local — salva e recupera dados do localStorage do browser.":E.toLowerCase().includes("theme")||E.toLowerCase().includes("dark")?"HOOK de tema — gerencia modo claro/escuro da interface.":E.toLowerCase().includes("modal")?"HOOK de modal — controla abertura e fechamento de janelas modais.":E.toLowerCase().includes("form")?"HOOK de formulario — gerencia valores, validacao e submissao de formularios.":E.toLowerCase().includes("window")||E.toLowerCase().includes("resize")||E.toLowerCase().includes("screen")?"HOOK de tela — detecta o tamanho da janela para layouts responsivos.":E.toLowerCase().includes("debounce")?"HOOK debounce — atrasa a execucao de uma funcao para evitar chamadas excessivas (ex: busca ao digitar).":E.toLowerCase().includes("click")||E.toLowerCase().includes("outside")?"HOOK de clique externo — detecta quando o usuario clica fora de um elemento.":`HOOK React personalizado para gerenciar estado/comportamento de '${E||"funcionalidade especifica"}'.`}return q==="ts"||q==="js"?x.toLowerCase().includes("util")||x.toLowerCase().includes("helper")?"Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.":x.toLowerCase().includes("api")||x.toLowerCase().includes("service")||x.toLowerCase().includes("client")?"Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.":x.toLowerCase().includes("route")||x.toLowerCase().includes("router")?"Arquivo de ROTAS — define as URLs/enderecos respondidos pelo servidor.":x.toLowerCase().includes("middleware")?"MIDDLEWARE — funcao que processa requisicoes antes de chegar na rota final (ex: verificar login).":x.toLowerCase().includes("model")||x.toLowerCase().includes("schema")?"Arquivo de MODELO — define a estrutura dos dados (tabelas, campos, tipos).":x.toLowerCase().includes("controller")?"CONTROLLER — logica de negocio que processa as requisicoes e retorna respostas.":x.toLowerCase().includes("store")||x.toLowerCase().includes("state")?"STORE de estado — gerencia o estado global do app (dados compartilhados entre telas).":x.toLowerCase().includes("type")||x.toLowerCase().includes("interface")||x.toLowerCase().includes("dto")?"Arquivo de TIPOS — define as estruturas de dados (interfaces TypeScript) usadas no projeto.":x.toLowerCase().includes("constant")||x.toLowerCase().includes("config")?"Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.":x.toLowerCase().includes("test")||x.toLowerCase().includes("spec")?"Arquivo de TESTES — verifica automaticamente se o codigo funciona corretamente.":x.toLowerCase().includes("seed")?"Arquivo SEED — popula o banco de dados com dados iniciais/de teste.":x.toLowerCase().includes("migration")?"MIGRACAO de banco de dados — altera a estrutura do banco (adiciona tabelas, colunas...).":x==="index"?"Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.":"Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.":`Arquivo ${q.toUpperCase()} — parte do projeto.`}function y(d){const w=d.toLowerCase();return w==="src"?"Codigo-fonte principal do projeto. Nao apague esta pasta.":w==="components"?"Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).":w==="pages"||w==="screens"||w==="views"?"Telas completas do app — cada arquivo aqui e uma pagina navegavel.":w==="routes"||w==="router"?"Definicao das URLs e navegacao do app.":w==="hooks"?"Hooks React customizados — logica reutilizavel de estado e efeitos.":w==="lib"||w==="utils"||w==="helpers"?"Funcoes auxiliares reutilizaveis em varios lugares do projeto.":w==="api"||w==="services"?"Comunicacao com servidor, banco de dados ou APIs externas.":w==="store"||w==="context"||w==="state"?"Gerenciamento de estado global — dados compartilhados entre telas.":w==="types"||w==="interfaces"||w==="dto"?"Definicoes de tipos TypeScript — contratos de dados.":w==="assets"||w==="public"||w==="static"?"Arquivos estaticos: imagens, icones, fontes, arquivos publicos.":w==="styles"||w==="css"||w==="scss"?"Arquivos de estilo visual — cores, fontes, layout.":w==="config"?"Arquivos de configuracao do projeto.":w==="middleware"?"Funcoes intermediarias que processam requisicoes antes das rotas.":w==="models"||w==="entities"?"Modelos de dados — representacao das tabelas do banco de dados.":w==="controllers"?"Controladores — logica de negocios para cada rota da API.":w==="tests"||w==="__tests__"||w==="test"?"Testes automatizados — verificam se o codigo funciona corretamente.":w==="migrations"?"Historico de alteracoes do banco de dados.":w==="seeds"?"Dados iniciais para popular o banco em desenvolvimento.":w==="dist"||w==="build"||w==="out"?"Codigo compilado/gerado automaticamente — NAO edite diretamente.":w==="node_modules"?"Pacotes instalados pelo npm — NAO edite e NAO envie para o GitHub.":w==="prisma"?"Arquivos do Prisma ORM: schema do banco e migracoes.":w==="drizzle"?"Arquivos do Drizzle ORM: schema e migracoes do banco.":w==="ui"?"Componentes de UI (interface) basicos e genericos.":w==="layouts"?"Estruturas de layout — esqueletos de pagina com cabecalho, sidebar, etc.":w==="icons"?"Icones do projeto.":`Pasta '${d}' — agrupamento de arquivos relacionados.`}const u=new Map;r.forEach(d=>{const w=d.split("/"),se=w.length>1?w.slice(0,-1).join("/"):"(raiz)";u.has(se)||u.set(se,[]),u.get(se).push(d)});const R=[...u.keys()].sort((d,w)=>d==="(raiz)"?-1:w==="(raiz)"?1:d.split("/").length-w.split("/").length||d.localeCompare(w)),b=[];if(b.push(`# PLANO DO PROJETO: ${s}`),b.push(""),b.push(`> Gerado automaticamente pelo SK Code Editor em ${o}`),b.push(`> **${r.length} arquivo(s)** | **~${Q.toLocaleString("pt-BR")} linhas de codigo**`),b.push(""),b.push("---"),b.push(""),b.push("## RESUMO EXECUTIVO"),b.push(""),b.push(`- **Tipo de aplicacao:** ${S}`),i.length&&b.push(`- **Frontend / Stack principal:** ${i.join(", ")}`),v.length&&b.push(`- **Backend / Dados:** ${v.join(", ")}`),p.version&&b.push(`- **Versao:** ${p.version}`),p.description&&b.push(`- **Descricao:** ${p.description}`),b.push(""),b.push("**Para rodar o projeto:**"),b.push("```bash"),te.dev?b.push("npm install && npm run dev"):te.start?b.push("npm install && npm start"):K?b.push("pip install -r requirements.txt && python main.py"):N?b.push("# Abra index.html no Preview (botao Play)"):b.push("npm install"),b.push("```"),b.push(""),b.push("---"),b.push(""),b.push("## ESTRUTURA DE ARQUIVOS"),b.push(""),b.push("```"),b.push(s+"/"),b.push(T),b.push("```"),b.push(""),b.push("---"),b.push(""),b.push("## STACK TECNOLOGICO DETECTADO"),b.push(""),i.length&&b.push(`- **Frontend:** ${i.join(", ")}`),v.length&&b.push(`- **Backend:** ${v.join(", ")}`),m.length){const d=m.join(", ");b.push(`- **Todos os pacotes (${m.length}):** ${d}`)}return b.push(""),b.push("---"),b.push(""),G.length>0&&(b.push("## ROTAS DA API (endpoints detectados automaticamente)"),b.push(""),b.push("```"),G.forEach(d=>b.push(d)),b.push("```"),b.push(""),b.push("---"),b.push("")),Object.keys(te).length>0&&(b.push("## SCRIPTS DISPONIVEIS (package.json)"),b.push(""),b.push("```bash"),Object.entries(te).forEach(([d,w])=>b.push(`npm run ${d.padEnd(12)}  # ${w}`)),b.push("```"),b.push(""),b.push("---"),b.push("")),Y.size>0&&(b.push("## VARIAVEIS DE AMBIENTE NECESSARIAS"),b.push(""),b.push("Crie um arquivo `.env` na raiz com estas variaveis:"),b.push(""),b.push("```env"),[...Y].forEach(d=>b.push(`${d}=seu_valor_aqui`)),b.push("```"),b.push(""),b.push("---"),b.push("")),re.length>0&&(b.push("## ARQUIVOS PRINCIPAIS"),b.push(""),re.forEach(d=>{const w=d.includes("server")||d==="app.ts"||d==="app.js"?"Ponto de entrada do backend":d.includes("App.tsx")||d.includes("App.jsx")?"Componente raiz do frontend":d==="index.html"?"Pagina HTML principal":d==="main.py"||d==="app.py"?"Aplicacao Python principal":"Arquivo principal";b.push(`- \`${d}\` — ${w}`)}),b.push(""),b.push("---"),b.push("")),b.push("## GUIA COMPLETO — O QUE CADA PARTE DO PROJETO FAZ"),b.push(""),b.push("> Esta secao explica, em linguagem simples, o que e para que serve cada pasta e cada arquivo."),b.push(""),R.forEach(d=>{const w=u.get(d);if(d==="(raiz)")b.push("### 📁 Raiz do Projeto (pasta principal)"),b.push("> Arquivos de configuracao e pontos de entrada ficam aqui.");else{const se=d.split("/").pop()||d;b.push(`### 📁 \`${d}/\``),b.push(`> ${y(se)}`)}b.push(""),w.forEach(se=>{const q=se.split("/").pop()||se,x=ne(se),E=n(se).split(`
`).length;b.push(`**\`${q}\`** _(${E} linha${E!==1?"s":""})_`),b.push(`${x}`),b.push("")}),b.push("---"),b.push("")}),b.push("## CONTEXTO PARA IA (copie e cole para continuar o projeto)"),b.push(""),b.push("> Use este bloco para explicar o projeto para qualquer IA ou desenvolvedor:"),b.push(""),b.push("```"),b.push(`Projeto: ${s}`),b.push(`Tipo: ${S}`),i.length&&b.push(`Stack: ${[...i,...v].join(", ")}`),b.push(`Arquivos: ${r.length} | Linhas: ~${Q.toLocaleString("pt-BR")}`),G.length&&b.push(`Rotas API: ${G.length} endpoint(s) detectado(s)`),Y.size&&b.push(`Variaveis de ambiente necessarias: ${[...Y].join(", ")}`),b.push(""),b.push("Estrutura principal:"),r.forEach(d=>b.push(`  ${d}`)),b.push("```"),b.push(""),b.push("---"),b.push(""),b.push(`*Plano gerado pelo SK Code Editor — ${o}*`),b.join(`
`)}function So(t,s){return`# SK Code Editor — Informações do Sistema

> Gerado em: ${new Date().toLocaleString("pt-BR")}
> Projeto: **${t}** · ${s} arquivo(s)

---

## Terminal

O terminal executa JavaScript real no browser e simula comandos de sistema:

### O que funciona:
- \`node <arquivo.js>\` — executa JavaScript **real** (async/await suportado!)
- \`fetch("https://api.exemplo.com")\` — **acesso à internet funcionando** para APIs com CORS
- \`require('node-fetch')\` ou \`require('axios')\` → usa fetch nativo do browser automaticamente
- \`require('fs')\` — lê e escreve arquivos do projeto virtual
- \`npm install <pacote>\` — atualiza package.json do projeto
- \`ls\`, \`cat\`, \`mkdir\`, \`touch\`, \`rm\`, \`cp\`, \`mv\` — operações de arquivo
- \`echo\`, \`pwd\`, \`clear\`, \`env\` — utilitários
- \`git status\`, \`git log\` — informações do projeto

### Sobre acesso à internet:
- ✅ APIs públicas com CORS habilitado: OpenAI, GitHub, JSONPlaceholder, etc.
- ✅ \`fetch("https://api.github.com/users/nome")\` funciona direto
- ⚠️  Algumas APIs bloqueiam chamadas do browser (CORS) — nesses casos use um backend real
- ❌ WebSockets e streams em tempo real não funcionam no modo browser

### Sobre Python:
- \`python <arquivo.py>\` — **simulado** (mostra prints estáticos)
- Para Python real: use Replit, Google Colab, ou instale localmente

---

## Assistente IA

### Escopos de contexto:
| Escopo | O que é enviado | Tokens estimados |
|--------|----------------|-----------------|
| Projeto | Até 60 arquivos (10k chars cada, total 80k) | ~40.000–200.000 |
| Pasta | Arquivos da pasta atual (12k chars cada) | ~3.000–30.000 |
| Arquivo | Só o arquivo ativo (40k chars) | ~500–10.000 |
| Nenhum | Apenas sua mensagem | ~100–500 |

### Limites por modelo (tokens de entrada):
| Modelo | Limite entrada | Limite saída |
|--------|--------------|-------------|
| GPT-4o | 128.000 tokens | 16.384 tokens |
| GPT-4o-mini | 128.000 tokens | 16.384 tokens |
| GPT-3.5-turbo | 16.385 tokens | 4.096 tokens |
| Claude 3.5 Sonnet | 200.000 tokens | 8.096 tokens |
| Claude 3 Haiku | 200.000 tokens | 4.096 tokens |
| Gemini 1.5 Pro | 1.000.000 tokens | 8.192 tokens |
| Gemini 1.5 Flash | 1.000.000 tokens | 8.192 tokens |

> 1 token ≈ 4 caracteres em inglês / ≈ 3 caracteres em português

### Comandos que a IA entende:
- \`filepath:caminho/arquivo.ext\` — cria/atualiza arquivo no projeto
- Blocos \`\`\`bash\`\`\` — exibe botão "Executar no Terminal"
- Você pode pedir: "crie", "corrija", "explique", "refatore", "adicione testes"

---

## Atalhos do Editor

| Ação | Atalho |
|------|--------|
| Salvar | Ctrl+S / ⌘S |
| Desfazer | Ctrl+Z |
| Refazer | Ctrl+Y / Ctrl+Shift+Z |
| Buscar | Ctrl+F |
| Substituir | Ctrl+H |
| Ir para linha | Ctrl+G |
| Formatar | Shift+Alt+F |
| Comentar linha | Ctrl+/ |
| Duplicar linha | Shift+Alt+↓ |
| Mover linha | Alt+↑/↓ |
| Selecionar tudo | Ctrl+A |

---

## Armazenamento

- **Índice de projetos:** \`localStorage['sk-editor-projects']\` (apenas metadados)
- **Arquivos de cada projeto:** \`localStorage['sk-proj-files-{id}']\` (chave separada por projeto)
- **Projeto atual:** \`localStorage['sk-editor-current']\`
- **Auto-save:** a cada 8 segundos e em cada mudança de arquivo
- **Capacidade:** projetos grandes suportados — cada projeto tem sua própria cota de armazenamento
- **Backup seguro:** use ☁️ Backup no Google Drive para projetos maiores que 5MB
- **Exportar tudo:** Painel de Arquivos → ··· na raiz → Exportar como ZIP

---

## Versão

SK Code Editor · Editor de código mobile-first em português  
Monaco Editor + WebAssembly Terminal + IA integrada  
`}function Di({vfs:t,projectName:s,onNewProject:o,onSaveProject:r,onOpenCampoLivre:n,onOpenAssistenteJuridico:c,onBackToProjects:p}){const[h,m]=a.useState([]),[j,f]=a.useState(null),[k,z]=a.useState([]),[U,K]=a.useState(-1),[C,L]=a.useState(!1),[V,I]=a.useState(!1),[ee,$]=a.useState(!1),[D,N]=a.useState(),[i,v]=a.useState(!0),[S,G]=a.useState("terminal"),[J,Y]=a.useState(!1),[X,te]=a.useState(""),[re,Q]=a.useState(null),[T,ne]=a.useState(!1),[y,u]=a.useState(!1),[R,b]=a.useState(!1),[d,w]=a.useState(!1),[se,q]=a.useState(!1),[x,E]=a.useState(!1),[F,H]=a.useState(()=>{try{const l=localStorage.getItem("sk-checkpoints")||"[]",P=JSON.parse(l);return Array.isArray(P)?P.slice(0,5):[]}catch{return[]}}),[M,oe]=a.useState(()=>{try{return JSON.parse(localStorage.getItem("sk-tasks")||"[]")}catch{return[]}}),[ce,O]=a.useState(""),[he,Ne]=a.useState(!1),[ge,xe]=a.useState(!1),[ue,ve]=a.useState(!1),[_,Z]=a.useState(!1),[le,me]=a.useState(!1),[ke,be]=a.useState(!1),[Qe,pe]=a.useState(!1),[we,Ge]=a.useState(!1),[Ae,He]=a.useState(!1),[at,_e]=a.useState(!1),[st,lt]=a.useState(!1),[We,ht]=a.useState(!1),[Pe,Ve]=a.useState(!1),[Be,ot]=a.useState(!1),[Ke,rt]=a.useState(()=>localStorage.getItem("sk-db-url")||""),[et,wt]=a.useState("idle"),[Ze,ut]=a.useState("SELECT NOW();"),[Ie,bt]=a.useState(null),[ft,Et]=a.useState(!1),[A,W]=a.useState(null),[je,ze]=a.useState(t.getTree()),[De,Oe]=a.useState({}),[Ye,Me]=a.useState(""),[Te,Fe]=a.useState("npm"),[Je,Le]=a.useState(),[ta,kt]=a.useState(),[Mt,Ot]=a.useState(),[Lt,qt]=a.useState(""),[ct,zt]=a.useState(!1),[Xe,Gt]=a.useState(()=>{try{const l=localStorage.getItem("sk-terminal-mode");if(l==="online"||l==="offline"||l==="real")return l}catch{}return typeof window<"u"&&(window.matchMedia?.("(display-mode: standalone)").matches||window.navigator.standalone===!0||window.location.protocol==="file:")?typeof SharedArrayBuffer<"u"&&window.crossOriginIsolated?"real":"offline":"online"});a.useEffect(()=>{try{localStorage.setItem("sk-terminal-mode",Xe)}catch{}},[Xe]);const[Dt,Wt]=a.useState("UTF-8"),[Jt,va]=a.useState(),[aa,vt]=a.useState(new Set(["__root__"])),[ps,us]=a.useState("project"),[_a,ms]=a.useState({line:1,col:1}),[,xs]=a.useState(0),sa=a.useRef(null),ya=a.useRef(null),[$t,Ht]=a.useState(null),Ut=a.useCallback(l=>{Ht({defaultValue:"",...l})},[]);a.useEffect(()=>{const l=t.onChange(()=>{ze(t.getTree()),xs(P=>P+1)});return()=>{l()}},[t]);const Qt=a.useCallback(l=>{const P=l.split("/");P.length>1&&vt(B=>{const ie=new Set(B);let fe="";for(let Ce=0;Ce<P.length-1;Ce++)fe=fe?`${fe}/${P[Ce]}`:P[Ce],ie.add(fe);return ie})},[]),gs=a.useCallback(l=>{vt(P=>{const B=new Set(P);return B.has(l)?B.delete(l):B.add(l),B})},[]),tt=a.useCallback(l=>{const P=t.readFile(l);P!==void 0&&(h.includes(l)||m(B=>{const ie=[...B,l];return ie.length>3?ie.slice(-3):ie}),f(l),Oe(B=>({...B,[l]:P})),va(void 0),Qt(l),L(!1),z(B=>{const ie=B.slice(0,U+1);return ie[ie.length-1]===l?B:[...ie,l]}),K(B=>B+1))},[h,t,Qt,U]),hs=a.useCallback(()=>{if(U>0){const l=k[U-1];K(B=>B-1);const P=t.readFile(l);P!==void 0&&(h.includes(l)||m(B=>[...B,l]),f(l),Oe(B=>({...B,[l]:P})))}},[k,U,t,h]),Yt=a.useCallback(()=>{if(U<k.length-1){const l=k[U+1];K(B=>B+1);const P=t.readFile(l);P!==void 0&&(h.includes(l)||m(B=>[...B,l]),f(l),Oe(B=>({...B,[l]:P})))}},[k,U,t,h]),g=a.useCallback(l=>{if(m(P=>P.filter(B=>B!==l)),j===l){const P=h.filter(B=>B!==l);f(P.length>0?P[P.length-1]:null)}},[j,h]),ae=a.useCallback(l=>{j&&(t.writeFile(j,l),Oe(P=>({...P,[j]:l})))},[j,t]),de=a.useCallback(l=>{Ut({title:"Novo Arquivo",placeholder:"ex: index.html, App.tsx, main.py",icon:e.jsx(ha,{size:18,className:"text-blue-400"}),onConfirm:P=>{const B=l?`${l}/${P}`:P;t.writeFile(B,""),tt(B),Ht(null)}})},[t,tt,Ut]),Ee=a.useCallback(l=>{Ut({title:"Nova Pasta",placeholder:"ex: src, components, pages",icon:e.jsx(Ta,{size:18,className:"text-amber-400"}),onConfirm:P=>{const B=l?`${l}/${P}`:P;t.writeFile(`${B}/.gitkeep`,""),vt(ie=>new Set([...ie,B])),Ht(null)}})},[t,Ut]),Se=a.useCallback(l=>{confirm(`Excluir "${l}"?`)&&(t.deleteFile(l),m(P=>P.filter(B=>!B.startsWith(l))),j?.startsWith(l)&&f(null))},[t,j]),$e=a.useCallback(l=>{const P=l.split("/"),B=P[P.length-1],ie=!B.includes(".");Ut({title:"Renomear",placeholder:B,defaultValue:B,icon:ie?e.jsx(Ta,{size:18,className:"text-amber-400"}):e.jsx(ha,{size:18,className:"text-blue-400"}),confirmLabel:"Renomear",onConfirm:fe=>{if(fe===B){Ht(null);return}P[P.length-1]=fe;const Ce=P.join("/");t.renameFile(l,Ce),m(At=>At.map(oa=>oa===l?Ce:oa)),j===l&&f(Ce),Ht(null)}})},[t,j,Ut]),Re=a.useCallback(l=>{const P=t.readFile(l);if(P===void 0)return;const B=l.split("/"),ie=B[B.length-1],fe=ie.includes(".")?"."+ie.split(".").pop():"",Ce=fe?ie.slice(0,-fe.length):ie;B[B.length-1]=`${Ce}-copia${fe}`,t.writeFile(B.join("/"),P)},[t]),nt=a.useCallback(l=>t.readFile(l),[t]),it=a.useCallback(l=>t.listFiles().filter(P=>P===l||P.startsWith(l+"/")).map(P=>({path:P,content:t.readFile(P)||""})),[t]),Ue=a.useCallback(l=>{v(!0),G("terminal"),setTimeout(()=>Le(l),120)},[]),ja=a.useCallback((l,P)=>{let B="";if(l==="/"||P){const ie=l==="/"?"":l,Ce=t.listFiles().filter(At=>ie===""||At===ie||At.startsWith(ie+"/")).slice(0,20).map(At=>{const oa=t.readFile(At)||"";return`
--- ${At} ---
${oa.slice(0,8e3)}`}).join("");B=`Analise a ${l==="/"?"pasta raiz do projeto":`pasta "${l}"`} e dê um diagnóstico completo: estrutura, possíveis bugs, melhorias, e próximos passos recomendados.

ARQUIVOS:${Ce}`}else{const ie=t.readFile(l)||"";B=`Analise o arquivo "${l}" detalhadamente: aponte bugs, problemas de lógica, boas práticas que faltam, sugestões de melhoria, e se necessário corrija o código.

--- ${l} ---
${ie.slice(0,4e4)}`}I(!0),L(!1),setTimeout(()=>kt(B),200)},[t]),Ma=a.useCallback(async l=>{try{const P=t.readFile(l)||"";return(await fetch("/api/workspace/write",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:l.replace(/^\//,""),content:P})})).ok}catch{return!1}},[t]),$a=a.useCallback(async()=>{wt("syncing");try{const P=t.listFiles().filter(ie=>ie.includes("node_modules")||ie.includes("/.git/")?!1:(t.readFile(ie)||"").length<=5e5).map(ie=>({path:ie.replace(/^\//,""),content:t.readFile(ie)||""})),B=await fetch("/api/workspace/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:P})});return wt(B.ok?"ok":"error"),setTimeout(()=>wt("idle"),6e3),B.ok}catch{return wt("error"),setTimeout(()=>wt("idle"),3e3),!1}},[t]);a.useCallback(()=>{const l=Ye.trim();l&&(Ue(Te==="npm"?`npm install ${l}`:`pip3 install ${l}`),Me(""),w(!1))},[Ye,Te,Ue]);const Ua=a.useCallback(async()=>{if(!j)return;const l=j.split(".").pop()?.toLowerCase()??"";if(["html","htm","svg","json","md","markdown","css","scss","js","ts","mjs","cjs"].includes(l)){v(!0),G("preview");return}v(!0),G("terminal"),Xe==="online"&&await Ma(j);const B=j.replace(/^\//,"");let ie="";if(l==="py")ie=`python3 "${B}"`;else if(l==="sh")ie=`bash "${B}"`;else if(["js","mjs","cjs"].includes(l))ie=`node "${B}"`;else if(l==="ts")ie=`node --experimental-strip-types "${B}" 2>/dev/null || npx ts-node "${B}"`;else{v(!0),G("preview");return}Ue(ie)},[j,Ue,Ma,Xe]),Ct=a.useCallback((l,P)=>{t.writeFile(l,P),tt(l),Qt(l),(l.endsWith(".html")||l==="index.html")&&(G("preview"),v(!0),pe(!0),setTimeout(()=>pe(!1),5e3))},[t,tt,Qt]),eo=a.useCallback(l=>{t.clear(),t.fromJSON(l),m([]),f(null),Oe({}),$(!1)},[t]);a.useCallback(async(l,P)=>{const B=await Da({token:"",username:""},l,P);if(Object.keys(B).length===0)throw new Error("Nenhum arquivo encontrado. O repositório é privado ou não existe.");t.clear(),t.fromJSON(B),m([]),f(null),Oe({})},[t]);const to=a.useCallback(()=>{const l=zi(t,s);t.writeFile("PLANO.md",l),tt("PLANO.md"),u(!1)},[t,s,tt]),sr=a.useCallback(()=>{if(!t.readFile(".sk/perfil-jasmim.md")){const B=`# 🧠 Perfil de Aprendizado — Jasmim
> Criado em: ${new Date().toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"})}
> Este arquivo é mantido e atualizado pela própria Jasmim conforme aprende sobre Saulo e o projeto.
> Você pode editar, corrigir ou adicionar informações aqui a qualquer momento.

---

## Sobre Saulo Kenji

- **Profissão:** Advogado
- **Limitação física:** Deficiência nos membros superiores — usa principalmente comandos de voz
- **Estilo de comunicação:** Prefere respostas curtas e diretas, em português simples
- **Como confirma ações:** Costuma dizer "pode", "pode continuar", "ok", "vai"
- **O que evitar:** Jargão técnico sem explicação, respostas muito longas para ler

---

## Preferências de Trabalho

- Gosta de saber o que foi feito sem precisar ler tudo
- Prefere que a conversa tenha continuidade natural
- Aprecia quando a IA sugere o próximo passo
- Usa o editor principalmente para projetos pessoais e jurídicos

---

## Sobre o Projeto Atual

> (Jasmim vai preencher esta seção conforme aprende sobre o projeto)

---

## O que Jasmim Aprendeu até Agora

> (Atualizado automaticamente pela Jasmim ao longo das conversas)
`;t.writeFile(".sk/perfil-jasmim.md",B)}tt(".sk/perfil-jasmim.md"),L(!1)},[t,tt]);a.useCallback(()=>{const l=`# 📖 Manual do Desenvolvedor — SK Code Editor
> Guia em linguagem simples para entender o que cada coisa significa.
> Sem jargão técnico. Feito para você, Saulo.

---

## 🗂️ O que significa cada pasta aqui no Replit

### 📁 \`artifacts/\`
É a pasta principal do projeto. Dentro dela ficam as duas partes do aplicativo:

- **\`api-server/\`** → O **servidor** (o "motor" que roda por trás das cenas).
  Ele é quem executa comandos no terminal, faz conexão com banco de dados, e responde as chamadas do app.
  Pense nele como a **cozinha de um restaurante** — o cliente não vê, mas é ele que faz tudo funcionar.

- **\`code-editor/\`** → A **interface visual** (o que você vê na tela).
  É o editor de código, os painéis, os botões, a Jasmim, o terminal, o preview.
  Pense nele como o **salão do restaurante** — o que o cliente vê e usa.

---

### 📁 \`src/\` (dentro de cada artifact)
Significa **"source"** = código-fonte. É onde fica o código que você escreve/edita.
Nunca apague essa pasta — é o coração do projeto.

---

### 📁 \`src/components/\`
São as **peças visuais** da tela. Cada arquivo aqui é um "pedaço" da interface:
- \`EditorLayout.tsx\` → A tela principal do editor (organiza tudo)
- \`AIChat.tsx\` → O painel da Jasmim (assistente IA)
- \`RealTerminal.tsx\` → O terminal (onde você roda comandos)
- \`Preview.tsx\` → O painel de visualização do site/app
- \`FileTree.tsx\` → A árvore de arquivos (painel esquerdo)
- \`GitHubPanel.tsx\` → O painel de integração com o GitHub

---

### 📁 \`src/routes/\` (só no api-server)
São os **endereços** que o servidor responde. Como as "portas" de entrada do servidor.
Exemplos:
- \`/api/exec\` → Roda um comando no terminal
- \`/api/db/query\` → Faz uma consulta no banco de dados
- \`/api/ai/chat\` → Conversa com a IA (Jasmim)
- \`/api/ws/terminal\` → Abre o terminal ao vivo

---

### 📁 \`src/lib/\`
São **funções utilitárias** — ferramentas pequenas usadas em vários lugares do código.
Exemplo: \`virtual-fs.ts\` é o sistema de arquivos virtual (salva seus arquivos na memória do browser).

---

### 📁 \`public/\`
Arquivos **públicos** que o browser pode acessar diretamente:
- \`manifest.json\` → Configuração do PWA (ícone, nome, cor do app)
- \`icons/\` → Os ícones do app (aparecem na tela inicial do celular)
- Imagens e arquivos estáticos

---

### 📁 \`node_modules/\`
**NÃO MEXA AQUI.** São as bibliotecas externas instaladas automaticamente.
É como a "despensa" do projeto — cheia de ingredientes prontos.
Gerada automaticamente pelo \`npm install\` / \`pnpm install\`.

---

### 📁 \`dist/\`
Versão **compilada** do código (gerada automaticamente ao fazer o build).
Você não edita nada aqui — é criado pelo sistema na hora de publicar.

---

## 📄 O que significa cada tipo de arquivo

| Arquivo | O que é |
|---------|---------|
| \`package.json\` | Lista de bibliotecas usadas e comandos disponíveis (npm start, npm run build, etc.) |
| \`pnpm-workspace.yaml\` | Diz ao gerenciador de pacotes quais pastas fazem parte do projeto |
| \`tsconfig.json\` | Configuração do TypeScript (linguagem que usamos) |
| \`vite.config.ts\` | Configuração do servidor de desenvolvimento (serve o app no browser) |
| \`.env\` | Variáveis secretas (senhas, chaves de API) — nunca compartilhe esse arquivo |
| \`*.tsx\` | Código React (interface visual com TypeScript) |
| \`*.ts\` | Código TypeScript puro (lógica, sem visual) |
| \`*.yaml\` / \`*.yml\` | Arquivos de configuração (como uma lista de instruções formatada) |
| \`*.md\` | Markdown — texto formatado (como este manual!) |
| \`index.ts\` / \`index.tsx\` | **Ponto de entrada** — onde o programa começa a rodar |

---

## 🪝 O que são "Hooks" (\`use*.ts\` / \`use*.tsx\`)
São funções especiais do React que **guardam estado** ou **executam ações**.
Sempre começam com a palavra \`use\`.
Exemplos:
- \`useState\` → Guarda um valor que muda (ex: se o painel está aberto ou fechado)
- \`useEffect\` → Executa algo quando a tela carrega ou um valor muda
- \`useCallback\` → Otimiza uma função para não recriar desnecessariamente

---

## 🎛️ Painéis do SK Code Editor

| Painel | Como abrir | O que faz |
|--------|-----------|----------|
| **Arquivos** | Botão 📁 no rodapé | Mostra todos os arquivos do projeto |
| **Terminal** | Botão ⬛ no rodapé | Executa comandos (npm install, node server.js, etc.) |
| **Preview** | Botão 🌐 no rodapé | Mostra o site/app rodando ao vivo |
| **Jasmim (IA)** | Botão 🤖 no rodapé | Assistente de código com IA |
| **GitHub** | Menu ··· | Importa/exporta projetos do GitHub |
| **Banco de Dados** | Menu ··· | Conecta ao PostgreSQL/Neon e roda SQL |
| **Taski** | Menu ··· | Lista de tarefas do projeto |
| **Checkpoints** | Menu ··· | Histórico de versões salvas manualmente |

---

## 🧩 Glossário Rápido

| Termo | Significado simples |
|-------|-------------------|
| **API** | "Porta de comunicação" entre o app e o servidor |
| **WebSocket** | Conexão ao vivo (sem precisar ficar atualizando a página) |
| **PTY / Terminal** | Janela de linha de comando (como o Prompt do Windows, mas no Linux) |
| **VFS** | Sistema de arquivos virtual — os arquivos ficam na memória do browser |
| **PWA** | "Aplicativo instalável" — site que funciona como app no celular |
| **Build** | Processo de "empacotar" o código para publicar |
| **Deploy** | Publicar o app na internet |
| **Frontend** | A parte visual (o que o usuário vê) |
| **Backend** | A parte do servidor (o "motor" escondido) |
| **npm / pnpm** | Gerenciadores de pacotes — instalam bibliotecas externas |
| **Import** | Usar uma função/componente de outro arquivo |
| **Props** | Dados passados de um componente pai para um filho |
| **Estado (State)** | Valor que pode mudar e atualiza a tela automaticamente |
| **Render** | O processo de mostrar/atualizar a tela |

---

## 🔑 O que é o Replit (a plataforma)

O **Replit** é o ambiente onde o app roda durante o desenvolvimento. Ele fornece:
- Servidor Linux online (sem precisar de computador próprio)
- Editor de código no browser
- Gerenciamento de segredos (variáveis de ambiente)
- Publicação do app com um clique (Publish/Deploy)
- Checkpoints automáticos do código

---

*Manual gerado em ${new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})} — SK Code Editor*
`;t.writeFile("MANUAL.md",l),tt("MANUAL.md"),u(!1),L(!1)},[t,tt]);const or=j?De[j]??t.readFile(j)??"":"",ao=Jt||(j?Js(j):"plaintext"),rr=U>0,nr=U<k.length-1,bs=a.useCallback(l=>{const P=t.toJSON(),B={id:Date.now().toString(),label:l||`Checkpoint ${new Date().toLocaleTimeString("pt-BR")}`,timestamp:Date.now(),files:P,fileCount:Object.keys(P).length},ie=[B,...F].slice(0,5);H(ie);const fe=Ce=>{try{localStorage.setItem("sk-checkpoints",JSON.stringify(Ce))}catch{if(Ce.length>1)fe(Ce.slice(0,Math.floor(Ce.length/2)));else try{const At=Ce.map(oa=>({...oa,files:{}}));localStorage.setItem("sk-checkpoints",JSON.stringify(At))}catch{}}};return fe(ie),B},[t,F]),ir=a.useCallback(l=>{confirm(`Restaurar checkpoint "${l.label}"?
Isso vai substituir todos os arquivos atuais.`)&&(t.clear(),Object.entries(l.files).forEach(([P,B])=>t.writeFile(P,B)),m([]),f(null),Oe({}),ze(t.getTree()),q(!1))},[t]),lr=a.useCallback(l=>{const P=F.filter(B=>B.id!==l);H(P);try{localStorage.setItem("sk-checkpoints",JSON.stringify(P))}catch{}},[F]),so=a.useCallback(l=>{if(!l.trim())return;const P={id:Date.now().toString(),text:l.trim(),done:!1,createdAt:Date.now()},B=[...M,P];oe(B),localStorage.setItem("sk-tasks",JSON.stringify(B)),O("")},[M]),oo=a.useCallback(l=>{const P=M.map(B=>B.id===l?{...B,done:!B.done}:B);oe(P),localStorage.setItem("sk-tasks",JSON.stringify(P))},[M]),ro=a.useCallback(l=>{const P=M.filter(B=>B.id!==l);oe(P),localStorage.setItem("sk-tasks",JSON.stringify(P))},[M]),Na=a.useCallback(async l=>{const P=l||Ze;if(!Ke.trim()){bt({rows:[],rowCount:0,command:"",error:"Configure a URL de conexão primeiro."});return}if(P.trim()){Et(!0),bt(null);try{const B=await fetch("/api/db/query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({connectionString:Ke.trim(),sql:P})}),ie=await B.json();B.ok?bt(ie):bt({rows:[],rowCount:0,command:"",error:ie.error||"Erro desconhecido"})}catch(B){bt({rows:[],rowCount:0,command:"",error:B.message})}finally{Et(!1)}}},[Ke,Ze]),cr=a.useCallback(l=>{const P=zs.find(ie=>ie.id===l);if(!P)return;t.clear(),Object.entries(P.files).forEach(([ie,fe])=>t.writeFile(ie,fe)),m([]),f(null),Oe({});const B=Object.keys(P.files)[0];B&&setTimeout(()=>tt(B),100),Ge(!1),W(P.name),setTimeout(()=>W(null),3500)},[t]),dr=C||ee||y;return e.jsxs("div",{className:"h-[100dvh] flex flex-col bg-[#141c0d] text-white overflow-hidden",children:[e.jsx("input",{ref:sa,type:"file",accept:".zip,.tar,.tar.gz,.tgz",onChange:async l=>{const P=l.target.files?.[0];if(P){try{const B=await Ho(P);t.clear(),t.fromJSON(B),m([]),f(null),Oe({})}catch(B){alert(B.message)}l.target.value=""}},className:"hidden"}),e.jsxs("div",{className:"h-11 flex items-center gap-1 px-2 bg-[#1c2714] border-b border-gray-700/40 shrink-0",children:[e.jsx("button",{onClick:()=>L(!0),className:"p-2 rounded-lg hover:bg-white/5 text-gray-400",children:e.jsx(Pr,{size:18})}),p&&e.jsxs("button",{onClick:p,className:"flex items-center gap-1 px-2 py-1 rounded-lg bg-green-700/30 hover:bg-green-700/50 border border-green-600/30 text-green-400 text-[11px] font-bold shrink-0",title:"Voltar à lista de projetos",children:[e.jsx(ea,{size:13}),e.jsx("span",{children:"Projetos"})]}),e.jsx("button",{onClick:hs,disabled:!rr,className:"p-1.5 rounded-lg disabled:opacity-25 text-gray-500 hover:bg-white/5 hover:text-gray-300",children:e.jsx(Ir,{size:17})}),e.jsx("button",{onClick:Yt,disabled:!nr,className:"p-1.5 rounded-lg disabled:opacity-25 text-gray-500 hover:bg-white/5 hover:text-gray-300",children:e.jsx(Rt,{size:17})}),e.jsxs("div",{className:"flex items-center gap-1.5 flex-1 min-w-0 px-1",children:[j&&e.jsx(mo,{size:13,className:"text-blue-400 shrink-0"}),e.jsx("span",{className:"text-sm font-medium text-gray-300 truncate",children:j?j.split("/").pop():s})]}),re?.running&&e.jsxs("button",{onClick:()=>{v(!0),G("preview")},className:"flex items-center gap-1.5 px-2 py-1 bg-green-600/20 border border-green-500/40 rounded-lg shrink-0 group",title:"Servidor rodando — clique para abrir Preview",children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-green-500"})]}),e.jsxs("span",{className:"text-green-400 text-[11px] font-bold",children:[":",re.port]})]}),e.jsx("button",{onClick:()=>Ne(!he),className:"p-2 rounded-lg hover:bg-white/5 text-gray-500",children:e.jsx(ga,{size:17})}),Xe==="online"&&e.jsxs("button",{onClick:()=>$a(),title:"Enviar arquivos do editor para o servidor — só serve no modo Online. O modo Real e o Offline não precisam disso.",className:`flex items-center gap-1 px-2 py-1.5 rounded-lg text-[11px] font-medium transition-all ${et==="syncing"?"bg-blue-700/40 text-blue-300 border border-blue-600/40":et==="ok"?"bg-green-700/30 text-green-400 border border-green-600/40":et==="error"?"bg-red-700/30 text-red-400 border border-red-600/40":"hover:bg-white/5 text-gray-600 border border-transparent"}`,children:[e.jsx(Nt,{size:12,className:et==="syncing"?"animate-spin":""}),et==="syncing"?"Enviando...":et==="ok"?"Enviado ✓":et==="error"?"Erro ao enviar":"Enviar arquivos"]}),j&&e.jsxs("button",{onClick:()=>{Ua()},className:"flex items-center gap-1 px-2.5 py-1.5 bg-green-600 hover:bg-green-500 text-white rounded-lg text-[12px] font-bold transition-all",children:[e.jsx(Zt,{size:13})," Rodar"]}),e.jsx("button",{onClick:()=>{u(!y)},className:"p-2 rounded-lg hover:bg-white/5 text-gray-500",children:e.jsx(Or,{size:18})})]}),h.length>0&&e.jsxs("div",{className:"h-9 flex items-center bg-[#1c2714] border-b border-gray-700/30 shrink-0",children:[e.jsx("div",{className:"flex-1 flex items-center overflow-x-auto scrollbar-none h-full",children:h.map(l=>e.jsxs("div",{className:`flex items-center gap-2 px-3 h-full text-[11px] cursor-pointer border-r border-gray-700/20 shrink-0 transition-colors select-none ${l===j?"bg-[#141c0d] text-gray-200 border-t-2 border-t-blue-500":"text-gray-500 hover:text-gray-300 hover:bg-white/5"}`,onClick:()=>tt(l),children:[e.jsx("span",{className:"max-w-[90px] truncate font-medium",children:l.split("/").pop()}),e.jsx("button",{onClick:P=>{P.stopPropagation(),g(l)},title:"Fechar arquivo",className:"w-5 h-5 flex items-center justify-center rounded hover:bg-red-500/20 text-gray-600 hover:text-red-400 transition-all shrink-0",children:e.jsx(ye,{size:11})})]},l))}),h.length>1&&e.jsx("button",{onClick:()=>{m([]),f(null)},title:"Fechar todos os arquivos",className:"px-3 h-full text-[10px] text-gray-600 hover:text-red-400 hover:bg-red-900/10 border-l border-gray-700/30 shrink-0 transition-colors whitespace-nowrap font-medium",children:"Fechar todos"})]}),e.jsxs("div",{className:"flex-1 flex flex-row overflow-hidden min-h-0",children:[e.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-h-0",children:[e.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-h-0",children:[e.jsx("div",{className:i?T?"h-[20%]":"h-[50%]":"flex-1",children:j?e.jsx(tr,{ref:ya,filePath:j,content:or,onChange:ae,language:Jt,onCursorChange:(l,P)=>ms({line:l,col:P})}):e.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center p-8",children:[e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-4 border border-gray-700/30",children:e.jsx(mo,{size:28,className:"text-blue-400"})}),e.jsx("p",{className:"text-base font-medium text-gray-500 mb-1",children:"Nenhum arquivo aberto"}),e.jsx("p",{className:"text-sm text-gray-700 mb-6",children:"Abra um arquivo ou peça para a IA criar"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs("button",{onClick:()=>L(!0),className:"flex items-center gap-2 px-4 py-2.5 bg-[#1c2714] border border-gray-700/40 rounded-xl text-sm text-gray-300 hover:bg-white/5",children:[e.jsx(ys,{size:15})," Arquivos"]}),e.jsxs("button",{onClick:()=>I(!0),className:"flex items-center gap-2 px-4 py-2.5 bg-blue-600/20 border border-blue-500/30 rounded-xl text-sm text-blue-300 hover:bg-blue-600/30",children:[e.jsx(mt,{size:15})," IA"]})]})]})}),i&&e.jsxs("div",{className:"flex-1 flex flex-col border-t border-gray-700/40 min-h-0",children:[e.jsxs("div",{className:"h-9 flex items-center gap-1 bg-[#1c2714] border-b border-gray-700/30 shrink-0 px-2",children:[["terminal","preview"].map(l=>e.jsx("button",{onClick:()=>{G(l),l==="terminal"&&ne(!1)},className:`px-3 py-1 rounded text-[11px] font-semibold transition-all ${S===l?"bg-[#141c0d] text-gray-200":"text-gray-600 hover:text-gray-400"}`,children:l==="terminal"?"⬛ Terminal":"🌐 Preview"},l)),S==="preview"&&e.jsx("button",{onClick:()=>ne(l=>!l),className:"px-2 py-0.5 rounded text-[11px] text-gray-500 hover:text-gray-300 border border-gray-700/30 hover:border-gray-600/50 transition-all",title:T?"Reduzir preview":"Ampliar preview",children:T?"⬇ Reduzir":"⬆ Ampliar"}),e.jsx("div",{className:"flex-1"}),e.jsxs("button",{onPointerDown:()=>{const l=t.listFiles(),P=l.some(Ce=>Ce==="package.json"||Ce.endsWith("/package.json")),B=l.some(Ce=>Ce.endsWith(".py")),ie=l.some(Ce=>Ce.endsWith(".ts")||Ce.endsWith(".tsx"));let fe="";if(P){const Ce=t.readFile("package.json")||"";Ce.includes('"build"')?fe="npm run build":Ce.includes('"compile"')?fe="npm run compile":ie?fe="npx tsc --noEmit":fe="npm run build 2>&1 || echo 'Sem script de build'"}else B?fe="python -m py_compile $(find . -name '*.py' | head -5 | tr '\\n' ' ') && echo '✅ Python OK'":ie?fe="npx tsc --noEmit":fe="echo 'Nenhum projeto detectado para compilar'";G("terminal"),setTimeout(()=>Le(fe),80)},className:"flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[11px] font-bold hover:bg-blue-600/30 transition-all shrink-0",title:"Compila/verifica o projeto e reporta erros",children:[e.jsx("span",{className:"text-[10px]",children:"🔨"}),"Compilar"]}),e.jsxs("button",{onPointerDown:()=>{const l=t.listFiles(),P=l.some(fe=>fe==="package.json"||fe.endsWith("/package.json")),B=l.some(fe=>fe.endsWith(".py"));let ie="npm start";if(P){const fe=t.readFile("package.json")||"";fe.includes('"dev"')?ie="npm run dev":fe.includes('"start"')?ie="npm start":fe.includes('"build"')?ie="npm run build":ie="node index.js"}else if(B){const fe=l.find(Ce=>Ce==="app.py"||Ce==="main.py"||Ce.endsWith("/app.py"));ie=fe?`python ${fe}`:"python main.py"}else ie="ls -la";G("terminal"),setTimeout(()=>Le(ie),80)},className:"flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-600/20 border border-green-500/30 text-green-400 text-[11px] font-bold hover:bg-green-600/30 transition-all shrink-0",title:"Detecta automaticamente o melhor comando para rodar seu projeto",children:[e.jsx(Zt,{size:11}),"Rodar"]}),e.jsxs("button",{onPointerDown:()=>G("preview"),className:"flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-400 text-[11px] font-bold hover:bg-purple-600/30 transition-all shrink-0",title:"Abre o preview do projeto",children:[e.jsx("span",{className:"text-[10px]",children:"🌐"}),"Preview"]}),S==="terminal"&&e.jsx("button",{onPointerDown:()=>Le("clear"),className:"flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-500 text-[11px] hover:text-red-400 hover:border-red-500/30 hover:bg-red-900/10 transition-all shrink-0",title:"Limpar terminal (Ctrl+L)",children:"🗑 Limpar"}),S==="terminal"&&e.jsx("button",{onPointerDown:()=>Gt(l=>l==="online"?"real":l==="real"?"offline":"online"),className:`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-bold transition-all shrink-0 border ${Xe==="real"?"bg-blue-600/20 border-blue-500/40 text-blue-300 hover:bg-blue-600/30":Xe==="offline"?"bg-amber-600/20 border-amber-500/40 text-amber-300 hover:bg-amber-600/30":"bg-emerald-600/20 border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30"}`,title:Xe==="real"?"Modo REAL — Node.js rodando no navegador, npm install de verdade, sem servidor. Clique para trocar para OFFLINE.":Xe==="offline"?"Modo OFFLINE — comandos simulados, funciona sem nada. Clique para trocar para ONLINE.":"Modo ONLINE — usa o servidor do Replit (terminal bash real). Clique para trocar para REAL (Node.js no navegador, sem servidor).",children:Xe==="real"?"⚡ Real":Xe==="offline"?"📴 Offline":"🌐 Online"}),S==="terminal"&&Lt&&e.jsx("button",{onPointerDown:()=>{I(!0);const l=ct?`❌ Erro no terminal — por favor analise e me diga o que aconteceu:

\`\`\`
${Lt.slice(-3e3)}
\`\`\`

Explique o erro em linguagem simples e diga o que preciso fazer para corrigir.`:`📋 Saída recente do terminal:

\`\`\`
${Lt.slice(-3e3)}
\`\`\`

Analise e me diga se está tudo certo ou se tem algo para melhorar.`;kt(l)},className:`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-bold transition-all shrink-0 ${ct?"bg-red-600/30 border border-red-500/50 text-red-300 animate-pulse":"bg-purple-600/20 border border-purple-500/30 text-purple-400 hover:bg-purple-600/30"}`,title:ct?"Erro detectado — pedir Jasmim para analisar":"Enviar terminal para Jasmim analisar",children:ct?"❌ Pedir Jasmim":"🤖 Analisar"}),e.jsx("button",{onClick:()=>v(!1),className:"p-0.5 rounded hover:bg-white/5 text-gray-600 ml-1",children:e.jsx(ye,{size:13})})]}),e.jsxs("div",{className:"flex-1 overflow-hidden flex flex-col min-h-0 relative",children:[Xe==="online"&&e.jsx("div",{style:{display:S==="terminal"?"flex":"none"},className:"absolute inset-0 flex flex-col",children:e.jsx(Dn,{externalCommand:Je,onCommandExecuted:()=>Le(void 0),onCommandOutput:(l,P,B)=>Ot({cmd:l,output:P,ok:B}),onServerToggle:(l,P)=>{Q(l?{running:l,port:P??3e3}:null),l&&(v(!0),G("preview"),ne(!0),pe(!0),setTimeout(()=>pe(!1),6e3))},onBufferUpdate:(l,P)=>{qt(l),zt(P)},onRunningChange:(l,P)=>{Y(l),te(l&&P?P:"")}})}),Xe==="offline"&&e.jsx("div",{style:{display:S==="terminal"?"flex":"none"},className:"absolute inset-0 flex flex-col",children:e.jsx(Pn,{vfs:t,externalCommand:Je,onCommandExecuted:()=>Le(void 0),onServerToggle:(l,P)=>{Q(l?{running:l,port:P??3e3}:null)},onCommandOutput:(l,P,B)=>Ot({cmd:l,output:P,ok:B}),onBufferUpdate:(l,P)=>{qt(l),zt(P)}})}),Xe==="real"&&e.jsx("div",{style:{display:S==="terminal"?"flex":"none"},className:"absolute inset-0 flex flex-col",children:e.jsx($n,{vfs:t,externalCommand:Je,onCommandExecuted:()=>Le(void 0),onServerToggle:(l,P)=>{Q(l?{running:l,port:P??3e3}:null),l&&(v(!0),G("preview"),ne(!0),pe(!0),setTimeout(()=>pe(!1),6e3))}})}),e.jsx("div",{style:{display:S==="preview"?"flex":"none"},className:"absolute inset-0 flex flex-col",children:e.jsx(Vn,{vfs:t,activeFile:j,openFullscreen:ke,onFullscreenOpened:()=>be(!1),serverUrl:re?.running?`/api/proxy/${re.port}/`:void 0,serverPort:re?.port})})]})]})]}),e.jsxs("div",{className:"h-8 flex items-center bg-[#1c2714] border-t border-gray-700/30 px-3 gap-2 shrink-0 overflow-x-auto scrollbar-none",children:[e.jsxs("span",{className:"text-[11px] text-gray-500 shrink-0 font-mono",children:["Ln ",_a.line,", Col ",_a.col]}),e.jsx("div",{className:"w-px h-3.5 bg-gray-700/50"}),e.jsx("span",{className:"text-[11px] text-gray-600 shrink-0",children:"Sp: 2"}),e.jsx("div",{className:"flex-1"}),e.jsxs("button",{onClick:()=>{ve(!0),xe(!1)},className:"flex items-center gap-1 text-[11px] text-gray-400 hover:text-gray-200 hover:bg-white/8 px-2.5 py-1 rounded-md transition-colors font-medium",children:[ao.toUpperCase(),e.jsx(ba,{size:10,className:"text-gray-600"})]}),e.jsx("div",{className:"w-px h-3.5 bg-gray-700/50"}),e.jsx("span",{className:"text-[11px] text-gray-600 shrink-0 px-1",children:"LF"}),e.jsx("div",{className:"w-px h-3.5 bg-gray-700/50"}),e.jsx("button",{onClick:()=>{xe(!0),ve(!1)},className:"text-[11px] text-gray-400 hover:text-gray-200 hover:bg-white/8 px-2.5 py-1 rounded-md transition-colors font-medium",children:Dt})]}),ue&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9980]",onClick:()=>ve(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9990] pb-safe",onClick:l=>l.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1c2714] border-t border-gray-700/50 rounded-t-3xl shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/30",children:[e.jsx("p",{className:"text-sm font-bold text-white",children:"Linguagem do Arquivo"}),e.jsx("button",{onClick:()=>ve(!1),className:"p-1 rounded-lg hover:bg-white/10 text-gray-600",children:e.jsx(ye,{size:16})})]}),e.jsx("div",{className:"grid grid-cols-3 gap-1 p-3 max-h-64 overflow-y-auto pb-6",children:Li.map(l=>e.jsx("button",{onClick:()=>{va(l==="auto"?void 0:l),ve(!1)},className:`px-2 py-2.5 rounded-xl text-[12px] font-medium text-center transition-all ${ao===l?"bg-blue-600/30 border border-blue-500/50 text-blue-300":"bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200"}`,children:l},l))})]})})]}),ge&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9980]",onClick:()=>xe(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9990] pb-safe",onClick:l=>l.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1c2714] border-t border-gray-700/50 rounded-t-3xl shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/30",children:[e.jsx("p",{className:"text-sm font-bold text-white",children:"Codificação (Encoding)"}),e.jsx("button",{onClick:()=>xe(!1),className:"p-1 rounded-lg hover:bg-white/10 text-gray-600",children:e.jsx(ye,{size:16})})]}),e.jsx("div",{className:"divide-y divide-gray-800/40 pb-8",children:Oi.map(l=>e.jsxs("button",{onClick:()=>{Wt(l),xe(!1)},className:`w-full flex items-center justify-between px-5 py-4 hover:bg-white/5 text-left transition-colors ${Dt===l?"text-blue-400":"text-gray-300"}`,children:[e.jsx("span",{className:"text-[15px]",children:l}),Dt===l&&e.jsx("span",{className:"text-xs text-blue-500 font-semibold",children:"✓ Ativo"})]},l))})]})})]}),(()=>{const l=P=>({onPointerDown:B=>{B.preventDefault(),P()}});return e.jsxs("div",{className:"flex flex-col bg-[#1c2714] border-t border-gray-700/50 shrink-0",children:[e.jsxs("div",{className:"h-11 flex items-center px-1 gap-0.5",children:[e.jsx("button",{...l(()=>ya.current?.insertText("  ")),className:"px-3 py-2 rounded-lg active:bg-white/10 text-gray-500 active:text-gray-200 text-[13px] font-mono shrink-0 select-none",children:"⇥"}),e.jsx("div",{className:"w-px h-6 bg-gray-700/50 mx-0.5 shrink-0"}),[["↑","up"],["↓","down"],["←","left"],["→","right"]].map(([P,B])=>e.jsx("button",{...l(()=>ya.current?.moveCursor(B)),className:"w-10 h-9 rounded-lg active:bg-white/10 text-gray-400 active:text-white text-[17px] font-bold flex items-center justify-center shrink-0 select-none",children:P},B)),e.jsx("div",{className:"flex-1"}),e.jsxs("button",{onPointerDown:()=>{v(P=>S==="terminal"?!P:!0),G("terminal")},className:`px-3 py-2 rounded-lg shrink-0 relative ${i&&S==="terminal"?"bg-green-500/20 text-green-400":"text-gray-600 hover:bg-white/5"}`,title:J?`Rodando: ${X||"comando"}`:"Terminal",children:[e.jsx(Vt,{size:17}),J&&e.jsx("span",{className:"absolute top-1 right-1 w-2 h-2 rounded-full bg-green-400 animate-pulse"})]}),e.jsx("button",{onPointerDown:()=>{v(P=>S==="preview"?!P:!0),G("preview")},className:`px-3 py-2 rounded-lg shrink-0 ${i&&S==="preview"?"bg-blue-500/20 text-blue-400":"text-gray-600 hover:bg-white/5"}`,title:"Preview",children:e.jsx(Ws,{size:17})}),e.jsx("button",{onPointerDown:()=>{v(!0),G("preview"),be(!0)},className:"px-2 py-2 rounded-lg text-blue-500/60 hover:text-blue-400 shrink-0",title:"Preview tela cheia",children:e.jsx(zo,{size:15})}),e.jsx("div",{className:"w-px h-6 bg-gray-700/50 mx-0.5 shrink-0"}),e.jsx("button",{onPointerDown:()=>{I(!0),me(!0)},className:"w-9 h-9 flex items-center justify-center rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 shrink-0",title:"Falar com a Jasmim",children:e.jsx(fa,{size:16})}),e.jsxs("button",{onPointerDown:()=>I(P=>!P),className:`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[13px] font-bold shrink-0 transition-all ${V?"bg-purple-600 text-white shadow-lg shadow-purple-900/50":"bg-gradient-to-r from-purple-600/30 to-blue-600/20 border border-purple-500/50 text-purple-300"}`,children:[e.jsx(mt,{size:15}),e.jsx("span",{children:"Jasmim"})]})]}),e.jsxs("div",{className:"h-10 flex items-center px-2 gap-1.5 border-t border-gray-700/30",children:[e.jsx(Vt,{size:13,className:"text-gray-600 shrink-0"}),e.jsx("input",{type:"text",placeholder:"Digite um comando e pressione Enter…",className:"flex-1 bg-transparent text-[12px] font-mono text-gray-300 placeholder-gray-600 outline-none",onKeyDown:P=>{if(P.key==="Enter"){const B=P.target.value.trim();if(!B)return;v(!0),G("terminal"),setTimeout(()=>Le(B),80),P.target.value=""}}}),e.jsx("span",{className:"text-[10px] text-gray-700 shrink-0",children:"↵"})]})]})})()]})," ",e.jsxs("div",{className:`flex flex-col border-l border-gray-700/50 bg-[#141c0d] shrink-0 transition-all duration-200 ${V?"w-[52%] max-w-[360px] min-w-[260px] md:w-[42%] md:max-w-[640px] md:min-w-[440px] lg:w-[40%] lg:max-w-[760px]":"w-0 border-l-0 overflow-hidden"}`,children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-2 bg-[#1c2714] border-b border-gray-700/40 shrink-0 min-w-[200px]",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center",children:e.jsx(mt,{size:13,className:"text-white"})}),e.jsx("span",{className:"text-[12px] font-bold text-gray-300",children:"Jasmim"})]}),e.jsx("button",{onClick:()=>I(!1),className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-600",children:e.jsx(ye,{size:15})})]}),e.jsx("div",{className:"flex-1 overflow-hidden min-w-[200px]",children:e.jsx(pi,{vfs:t,activeFile:j,onApplyCode:Ct,onRunInTerminal:l=>{Ue(l)},scope:ps,onScopeChange:us,autoVoice:le,onAutoVoiceConsumed:()=>me(!1),externalMessage:ta,onExternalMessageConsumed:()=>kt(void 0),lastTermOutput:Mt,onTermOutputConsumed:()=>Ot(void 0),terminalBuffer:Lt,terminalHasError:ct,dbConnectionString:Ke||void 0})})]})]})," ",Qe&&e.jsxs("div",{className:"fixed bottom-24 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border border-green-500/40 bg-[#1c2714]",style:{boxShadow:"0 0 30px rgba(74,222,128,0.25)"},children:[e.jsx(gt,{size:18,className:"text-green-400 shrink-0"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-bold text-green-300",children:"Preview pronto!"}),e.jsx("p",{className:"text-[11px] text-gray-400",children:"Painel inferior → aba Preview"})]}),e.jsx("button",{onClick:()=>{pe(!1),G("preview"),v(!0)},className:"ml-2 px-3 py-1.5 rounded-xl bg-green-600 text-white text-[12px] font-bold active:scale-95 transition-all",children:"Ver →"}),e.jsx("button",{onClick:()=>pe(!1),className:"p-1 text-gray-600 hover:text-gray-400",children:e.jsx(ye,{size:14})})]}),J&&(!i||S!=="terminal")&&e.jsxs("div",{className:"fixed bottom-24 left-1/2 -translate-x-1/2 z-[9998] flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl border border-yellow-600/40 bg-[#1e1a0d] max-w-[90vw]",style:{boxShadow:"0 0 24px rgba(202,138,4,0.2)"},children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse shrink-0"}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-[12px] font-bold text-yellow-300",children:"Rodando em segundo plano"}),e.jsx("p",{className:"text-[11px] text-gray-400 truncate max-w-[200px]",children:X||"comando em execução"})]}),e.jsx("button",{onClick:()=>{v(!0),G("terminal")},className:"ml-1 px-3 py-1.5 rounded-xl bg-yellow-700/40 border border-yellow-600/40 text-yellow-300 text-[11px] font-bold active:scale-95 transition-all shrink-0",children:"Ver →"})]}),dr&&e.jsx("div",{className:"fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",onClick:()=>{L(!1),I(!1),$(!1),u(!1)}}),e.jsxs("div",{className:`fixed top-0 left-0 bottom-0 z-50 w-[80vw] max-w-xs bg-[#141c0d] border-r-2 border-gray-600/60 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${C?"translate-x-0":"-translate-x-full"}`,children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-700/40 bg-[#1c2714] shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ys,{size:15,className:"text-gray-400"}),e.jsx("span",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest",children:"Arquivos"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>de(""),className:"p-1.5 rounded-lg hover:bg-white/5",title:"Novo arquivo",children:e.jsx(Bt,{size:15,className:"text-gray-500"})}),e.jsx("button",{onClick:()=>Ee(""),className:"p-1.5 rounded-lg hover:bg-white/5",title:"Nova pasta",children:e.jsx(ea,{size:15,className:"text-gray-500"})}),e.jsx("button",{onClick:()=>{w(!0)},className:"p-1.5 rounded-lg hover:bg-white/5",title:"Bibliotecas",children:e.jsx(Ft,{size:15,className:"text-gray-500"})}),e.jsx("button",{onClick:()=>L(!1),className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-600",children:e.jsx(ye,{size:15})})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:e.jsx(Cn,{tree:je,activeFile:j,onFileSelect:tt,onCreateFile:de,onCreateFolder:Ee,onDeleteNode:Se,onRenameNode:$e,onDuplicateNode:Re,getFileContent:nt,getAllFilesUnder:it,expandedDirs:aa,toggleDir:gs,projectName:s,onExportZip:async()=>{await Aa(t.toJSON(),s.replace(/\s+/g,"-").toLowerCase())},onAnalyzeWithAI:ja})}),e.jsxs("div",{className:"shrink-0 border-t-2 border-green-900/50 bg-[#141c0d] flex flex-col",style:{maxHeight:"52vh"},children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-[#1a2413] border-b border-gray-700/30 shrink-0",children:[e.jsx("span",{className:"text-[11px] font-bold text-green-500 uppercase tracking-widest",children:"⚡ Menu Completo"}),e.jsx("span",{className:"text-[9px] text-gray-600",children:"role para ver mais ↕"})]}),e.jsxs("div",{className:"overflow-y-auto divide-y divide-gray-800/40 pb-2",children:[[{icon:e.jsx(Bt,{size:16,className:"text-green-300"}),label:"🆕 Criar Novo App",sub:"Wizard com modelos prontos",action:()=>{Ge(!0),L(!1)}},{icon:e.jsx(_t,{size:16,className:"text-yellow-400"}),label:"📥 Importar ZIP",sub:"Abrir arquivo .zip do dispositivo",action:()=>{sa.current?.click()}},{icon:e.jsx(_t,{size:16,className:"text-orange-400"}),label:"📥 Importar TAR.GZ",sub:"Abrir arquivo .tar.gz",action:()=>{sa.current?.click()}},{icon:e.jsx(pt,{size:16,className:"text-green-400"}),label:"📤 Exportar ZIP",sub:"Baixar projeto como .zip",action:async()=>{await Aa(t.toJSON(),s.replace(/\s+/g,"-").toLowerCase())}},{icon:e.jsx(mt,{size:16,className:"text-purple-400"}),label:"🤖 Assistente IA — Jasmim",sub:"Converse, peça código, debug...",action:()=>{I(!0),L(!1)}},{icon:e.jsx(Pt,{size:16,className:"text-green-400"}),label:"🔗 GitHub — Clonar / Enviar",sub:"Importar ou exportar para GitHub",action:()=>{N(void 0),$(!0),L(!1)}},{icon:e.jsx(gt,{size:16,className:"text-blue-400"}),label:"🌐 Publicar no GitHub Pages",sub:"Publica este editor online — grátis para sempre",action:()=>{N("pages-deploy"),$(!0),L(!1)}},{icon:e.jsx(Pt,{size:16,className:"text-purple-400"}),label:"🔗 Importar via Link Público",sub:"Clonar qualquer repositório público sem token",action:async()=>{const l=window.prompt("Cole o link do repositório GitHub (ex: https://github.com/usuario/repo):");if(!l?.trim())return;const P=l.trim().replace(/\.git$/,"").match(/github\.com\/([^/]+)\/([^/?\s]+)/);if(!P){alert("Link inválido. Use: https://github.com/usuario/repositorio");return}const[,B,ie]=P;try{const{cloneRepo:fe}=await kn(async()=>{const{cloneRepo:At}=await Promise.resolve().then(()=>hn);return{cloneRepo:At}},void 0,import.meta.url),Ce=await fe({token:"",username:""},B,ie);eo(Ce),L(!1),alert(`✅ Importado com sucesso! ${Object.keys(Ce).length} arquivos.`)}catch(fe){alert("Erro ao importar: "+(fe.message||String(fe)))}}},{icon:e.jsx(Ra,{size:16,className:"text-[#007acc]"}),label:"💻 Abrir no VSCode Web",sub:"Envia o projeto e abre no VS Code real",action:()=>{ot(!0),L(!1)}},{icon:e.jsx(Ft,{size:16,className:"text-orange-400"}),label:"📦 Instalar Biblioteca",sub:"npm install, pip install...",action:()=>{w(!0)}},{icon:e.jsx("span",{className:"text-[14px]",children:"🗄️"}),label:"🗄️ Banco de Dados (Neon/Postgres)",sub:"Conectar e rodar SQL",action:()=>{He(!0),L(!1)}},{icon:e.jsx(Ba,{size:16,className:"text-pink-400"}),label:"📸 Salvar Checkpoint",sub:"Criar ponto de restauração",action:()=>{bs(),L(!1),alert("✅ Checkpoint salvo!")}},{icon:e.jsx(js,{size:16,className:"text-purple-300"}),label:"🕐 Histórico de Checkpoints",sub:"Ver e restaurar versões salvas",action:()=>{q(!0),L(!1)}},{icon:e.jsx(Fa,{size:16,className:"text-cyan-400"}),label:"📋 Lista de Tarefas — Taski",sub:"Organizar to-dos do projeto",action:()=>{E(!0),L(!1)}},{icon:e.jsx("span",{className:"text-[14px]",children:"🧠"}),label:"🧠 Memória da Jasmim",sub:"O que ela sabe sobre você e o projeto",action:()=>{sr()}},{icon:e.jsx(Ps,{size:16,className:"text-yellow-300"}),label:"📐 Gerar Plano do Projeto",sub:"Gera PLANO.md com estrutura e stack",action:()=>{to(),L(!1)}},{icon:e.jsx("span",{className:"text-[14px]",children:"📱"}),label:"📱 Gerar APK Android",sub:"Converte seu projeto em app instalável",action:()=>{Ve(!0),L(!1)}},{icon:e.jsx("span",{className:"text-[14px]",children:"📖"}),label:"📖 Manual do SK Code Editor",sub:"Guia completo em português",action:()=>{_e(!0),L(!1)}},{icon:e.jsx("span",{className:"text-[14px]",children:"🔗"}),label:"🔗 Combinar Apps",sub:"Une vários apps num único projeto",action:()=>{lt(!0),L(!1)}},{icon:e.jsx("span",{className:"text-[14px]",children:"🩺"}),label:"🩺 Status do Sistema (ao vivo)",sub:"Ver se tudo tá funcionando — clique pra atualizar",action:()=>{ht(!0),L(!1)}},{icon:e.jsx(Rs,{size:16,className:"text-blue-300"}),label:"📄 Gerar SISTEMA.md",sub:"Cria documentação técnica do sistema",action:()=>{const l=So(s,t.listFiles().length);t.writeFile("SISTEMA.md",l),tt("SISTEMA.md"),L(!1)}},{icon:e.jsx(ua,{size:16,className:"text-blue-400"}),label:"💾 Salvar Projeto",sub:"Salvar estado atual",action:()=>{r?.(s),L(!1)}},{icon:e.jsx(gt,{size:16,className:"text-green-300"}),label:"🌐 Abrir Preview",sub:"Visualizar site/app rodando",action:()=>{v(!0),G("preview"),L(!1)}},{icon:e.jsx(Vt,{size:16,className:"text-green-500"}),label:"⬛ Abrir Terminal",sub:"Rodar comandos bash",action:()=>{v(!0),G("terminal"),L(!1)}},...c?[{icon:e.jsx(Is,{size:16,className:"text-amber-400"}),label:"⚖️ Assistente Jurídico",sub:"Consulta jurídica com IA",action:()=>{L(!1),c()}}]:[],...n?[{icon:e.jsx(Pa,{size:16,className:"text-green-400"}),label:"💬 Campo Livre",sub:"Chat sem restrições",action:()=>{L(!1),n()}}]:[]].map(({icon:l,label:P,sub:B,action:ie})=>e.jsxs("button",{onClick:ie,className:"w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 active:bg-white/10 text-left transition-colors",children:[e.jsx("div",{className:"w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0",children:l}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[12px] font-semibold text-gray-200 leading-tight",children:P}),e.jsx("p",{className:"text-[10px] text-gray-600 leading-tight mt-0.5",children:B})]})]},P)),e.jsxs("button",{onClick:()=>{confirm("Limpar todos os arquivos e voltar ao início?")&&(t.clear(),m([]),f(null),o()),L(!1)},className:"w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-500/10 active:bg-red-500/20 text-left transition-colors",children:[e.jsx("div",{className:"w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0",children:e.jsx(dt,{size:16,className:"text-red-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[12px] font-semibold text-red-400 leading-tight",children:"🗑️ Limpar Projeto"}),e.jsx("p",{className:"text-[10px] text-gray-600 leading-tight mt-0.5",children:"Apaga todos os arquivos e volta ao início"})]})]})]})]})]}),e.jsxs("div",{className:`fixed top-0 right-0 bottom-0 z-50 w-[88vw] max-w-sm bg-[#141c0d] border-l border-gray-700/50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${ee?"translate-x-0":"translate-x-full"}`,children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-2 bg-[#1c2714] border-b border-gray-700/40 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Pt,{size:14,className:"text-green-400"}),e.jsx("span",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest",children:"GitHub"})]}),e.jsx("button",{onClick:()=>{$(!1),N(void 0)},className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-600",children:e.jsx(ye,{size:15})})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(gi,{files:t.toJSON(),onImport:eo,projectName:s,defaultView:D})})]}),y&&e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-50 pb-safe",onClick:l=>l.stopPropagation(),children:e.jsxs("div",{className:"bg-[#222e18] border-t border-gray-700/50 rounded-t-3xl shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"pb-8 divide-y divide-gray-800/40",children:[[{icon:e.jsx(Bt,{size:18,className:"text-green-300"}),label:"🆕 Criar Novo App",action:()=>{Ge(!0),u(!1)}},{icon:e.jsx("span",{className:"text-[16px]",children:"🗄️"}),label:"Banco de Dados (Neon / PostgreSQL)",action:()=>{He(!0),u(!1)}},{icon:e.jsx(ys,{size:18,className:"text-blue-400"}),label:"Arquivos",action:()=>{L(!0),u(!1)}},{icon:e.jsx(mt,{size:18,className:"text-purple-400"}),label:"Assistente IA",action:()=>{I(!0),u(!1)}},{icon:e.jsx(Pt,{size:18,className:"text-green-400"}),label:"GitHub / Clone",action:()=>{N(void 0),$(!0),u(!1)}},{icon:e.jsx(gt,{size:18,className:"text-blue-400"}),label:"🌐 Publicar no GitHub Pages — Grátis",action:()=>{N("pages-deploy"),$(!0),u(!1)}},{icon:e.jsx(Ft,{size:18,className:"text-orange-400"}),label:"Instalar Biblioteca",action:()=>{w(!0),u(!1)}},{icon:e.jsx(_t,{size:18,className:"text-yellow-400"}),label:"Importar (.zip / .tar.gz)",action:()=>{sa.current?.click(),u(!1)}},{icon:e.jsx(pt,{size:18,className:"text-green-400"}),label:"Exportar ZIP",action:async()=>{await Aa(t.toJSON(),s.replace(/\s+/g,"-")),u(!1)}},{icon:e.jsx(Ks,{size:18,className:"text-blue-400"}),label:"☁️ Backup no Google Drive",action:()=>{b(!0),u(!1)}},{icon:e.jsx(Ba,{size:18,className:"text-pink-400"}),label:"📸 Salvar Checkpoint",action:()=>{bs(),u(!1),alert("✅ Checkpoint salvo! Acesse o histórico para restaurar.")}},{icon:e.jsx(js,{size:18,className:"text-purple-400"}),label:"🕐 Histórico de Checkpoints",action:()=>{q(!0),u(!1)}},{icon:e.jsx(Fa,{size:18,className:"text-cyan-400"}),label:"📋 Lista de Tarefas (Taski)",action:()=>{E(!0),u(!1)}},{icon:e.jsx(Ps,{size:18,className:"text-yellow-400"}),label:"📐 Plano do Projeto",action:to},{icon:e.jsx("span",{className:"text-[16px]",children:"📱"}),label:"📱 Gerar APK Android",action:()=>{Ve(!0),u(!1)}},{icon:e.jsx("span",{className:"text-[16px]",children:"📖"}),label:"📖 Manual do SK Code Editor",action:()=>{_e(!0),u(!1)}},{icon:e.jsx("span",{className:"text-[16px]",children:"🔗"}),label:"🔗 Combinar Apps",action:()=>{lt(!0),u(!1)}},{icon:e.jsx(Rs,{size:18,className:"text-blue-300"}),label:"Info do Sistema",action:()=>{const l=So(s,t.listFiles().length);t.writeFile("SISTEMA.md",l),tt("SISTEMA.md"),u(!1)}},{icon:e.jsx(ua,{size:18,className:"text-blue-400"}),label:"Salvar Projeto",action:()=>{r?.(s),u(!1)}},...c?[{icon:e.jsx(Is,{size:18,className:"text-amber-400"}),label:"Assistente Jurídico",action:()=>{u(!1),c()}}]:[],...n?[{icon:e.jsx(Pa,{size:18,className:"text-green-400"}),label:"Campo Livre",action:()=>{u(!1),n()}}]:[]].map(({icon:l,label:P,action:B})=>e.jsxs("button",{onClick:B,className:"w-full flex items-center gap-4 px-6 py-3.5 hover:bg-white/5 text-left",children:[l,e.jsx("span",{className:"text-[15px] text-gray-200",children:P})]},P)),e.jsx("div",{className:"mx-6 h-px bg-gray-700/50 my-1"}),e.jsxs("button",{onClick:()=>{confirm("Limpar projeto e voltar ao início?")&&(t.clear(),m([]),f(null),o()),u(!1)},className:"w-full flex items-center gap-4 px-6 py-3.5 hover:bg-red-500/5 text-left",children:[e.jsx(dt,{size:18,className:"text-red-400"}),e.jsx("span",{className:"text-[15px] text-red-400",children:"Voltar ao Início"})]})]})]})}),A&&e.jsxs("div",{className:"fixed bottom-28 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl border border-green-500/40 bg-[#1c2714]",children:[e.jsx("span",{className:"text-green-400 text-xl",children:"✅"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-[13px] font-bold text-green-300",children:["App criado: ",A]}),e.jsx("p",{className:"text-[11px] text-gray-400",children:"Peça para a Jasmim instalar e rodar!"})]})]}),we&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/70 backdrop-blur-sm",onClick:()=>Ge(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:l=>l.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1a2413] border-t border-gray-700/50 rounded-t-3xl shadow-2xl flex flex-col max-h-[90vh]",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/40 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Bt,{size:18,className:"text-green-400"}),e.jsx("p",{className:"text-[16px] font-bold text-white",children:"Criar Novo App"})]}),e.jsx("button",{onClick:()=>Ge(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:17})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 pb-8 space-y-3",children:[e.jsx("p",{className:"text-[12px] text-gray-500 px-1 mb-2",children:"Escolha o tipo de app. Os arquivos serão criados automaticamente — depois peça para a Jasmim instalar e rodar."}),[{id:"html-css-js",icon:"🌐",title:"HTML + CSS + JS",desc:"O mais simples. Preview funciona imediatamente, sem instalar nada. Ideal para páginas, animações e prototipagem rápida.",badge:"⚡ Preview imediato",badgeColor:"text-green-400 bg-green-900/30 border-green-700/40"},{id:"landing-page",icon:"📱",title:"Landing Page",desc:"Página de apresentação profissional com design moderno. Ideal para mostrar serviços, produtos ou portfólio.",badge:"⚡ Preview imediato",badgeColor:"text-green-400 bg-green-900/30 border-green-700/40"},{id:"pwa-app",icon:"📲",title:"PWA Instalável",desc:"Aplicativo que pode ser instalado no celular e funciona offline. HTML + manifest + service worker.",badge:"⚡ Preview imediato",badgeColor:"text-green-400 bg-green-900/30 border-green-700/40"},{id:"react-app",icon:"⚛️",title:"React App",desc:"Interface moderna e interativa com componentes React. Precisa rodar: npm install e npm start no terminal.",badge:"npm install",badgeColor:"text-blue-400 bg-blue-900/30 border-blue-700/40"},{id:"node-api",icon:"🟢",title:"Node.js / Express",desc:"Backend com API REST. Ideal para criar rotas, salvar dados, integrar com banco. Precisa: npm install e npm start.",badge:"npm install",badgeColor:"text-blue-400 bg-blue-900/30 border-blue-700/40"},{id:"typescript-node",icon:"🔷",title:"TypeScript + Node.js",desc:"JavaScript com tipos — mais seguro e organizado. Ideal para projetos maiores.",badge:"npm install",badgeColor:"text-blue-400 bg-blue-900/30 border-blue-700/40"},{id:"_jasmim",icon:"🤖",title:"Deixar a Jasmim criar",desc:"Descreva o que você quer e a Jasmim cria toda a estrutura do zero para você — arquivos, dependências e instruções.",badge:"IA cria tudo",badgeColor:"text-purple-400 bg-purple-900/30 border-purple-700/40"}].map(({id:l,icon:P,title:B,desc:ie,badge:fe,badgeColor:Ce})=>e.jsxs("button",{onClick:()=>{l==="_jasmim"?(Ge(!1),I(!0),kt(`🚀 Vou criar um aplicativo do zero. Me faça essas perguntas UMA A UMA e aguarde minha resposta antes de ir para a próxima:

1) Qual é o objetivo do app?
2) É um site (HTML/React) ou um backend (Node.js)?
3) Vai ter banco de dados?
4) Tem alguma API ou serviço externo?

Com base nas respostas, crie TODA a estrutura: arquivos, pastas, package.json e instruções para rodar. Comece fazendo a PRIMEIRA pergunta agora.`)):cr(l)},className:"w-full flex items-start gap-4 p-4 rounded-2xl bg-[#141c0d] border border-gray-700/40 hover:border-gray-600/60 hover:bg-[#1c2714] text-left transition-all active:scale-[0.98]",children:[e.jsx("span",{className:"text-3xl shrink-0 mt-0.5",children:P}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("span",{className:"text-[15px] font-bold text-white",children:B}),e.jsx("span",{className:`text-[10px] font-bold px-2 py-0.5 rounded-full border ${Ce}`,children:fe})]}),e.jsx("p",{className:"text-[12px] text-gray-400 mt-1 leading-relaxed",children:ie})]}),e.jsx(Rt,{size:16,className:"text-gray-600 shrink-0 mt-1"})]},l))]})]})})]}),Ae&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/70 backdrop-blur-sm",onClick:()=>He(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:l=>l.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1a2413] border-t border-gray-700/50 rounded-t-3xl shadow-2xl flex flex-col max-h-[90vh]",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/40 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[18px]",children:"🗄️"}),e.jsx("p",{className:"text-[16px] font-bold text-white",children:"Banco de Dados"}),Ke&&e.jsx("span",{className:"text-[10px] text-green-400 bg-green-900/30 border border-green-700/40 px-2 py-0.5 rounded-full font-bold",children:"✓ Configurado"})]}),e.jsx("button",{onClick:()=>He(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:17})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-10",children:[e.jsxs("div",{className:"bg-blue-950/20 border border-blue-700/30 rounded-2xl p-4",children:[e.jsx("p",{className:"text-[12px] font-bold text-blue-300 mb-2",children:"📖 Como criar seu banco gratuito (Neon)"}),e.jsx("ol",{className:"space-y-1.5",children:[{n:"1",t:"Acesse",link:"neon.tech",href:"https://neon.tech",rest:'e clique em "Sign Up" (grátis, sem cartão)'},{n:"2",t:"Crie um projeto",rest:'— dê um nome (ex: "juridico") e escolha a região'},{n:"3",t:"Vá em",link:"Connection Details",href:null,rest:"no painel do projeto"},{n:"4",t:"Copie a",link:"Connection string",href:null,rest:"— começa com postgresql://"},{n:"5",t:"Cole abaixo",rest:"e clique em Testar"}].map(({n:l,t:P,link:B,href:ie,rest:fe})=>e.jsxs("li",{className:"flex gap-2 text-[11px] text-gray-300 items-start",children:[e.jsx("span",{className:"w-5 h-5 bg-blue-700/40 text-blue-300 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5",children:l}),e.jsxs("span",{children:[e.jsx("span",{className:"text-gray-200",children:P})," ",B&&ie&&e.jsx("a",{href:ie,target:"_blank",rel:"noreferrer",className:"text-blue-400 underline",children:B}),B&&!ie&&e.jsx("span",{className:"text-yellow-300 font-mono",children:B})," ",e.jsx("span",{className:"text-gray-400",children:fe})]})]},l))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-1.5 block",children:"URL de Conexão (Neon / PostgreSQL)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"password",value:Ke,onChange:l=>{rt(l.target.value),localStorage.setItem("sk-db-url",l.target.value)},placeholder:"postgresql://user:senha@host/banco?sslmode=require",className:"flex-1 px-3 py-2.5 bg-[#141c0d] border border-gray-700/50 rounded-xl text-[12px] font-mono text-gray-200 placeholder-gray-700 outline-none focus:border-green-500/60"}),e.jsx("button",{onClick:()=>Na("SELECT NOW() AS agora, version() AS versao;"),disabled:ft||!Ke,className:"px-3 py-2.5 bg-green-600/20 border border-green-500/40 rounded-xl text-[12px] text-green-300 font-bold hover:bg-green-600/30 disabled:opacity-40 shrink-0",children:ft?"...":"Testar"})]}),!Ke&&e.jsx("p",{className:"text-[10px] text-yellow-600 mt-1.5",children:"⚠️ Siga o guia acima para obter sua URL gratuita no Neon"}),Ke&&e.jsx("p",{className:"text-[10px] text-green-600 mt-1.5",children:"✅ URL configurada — clique em Testar para verificar a conexão"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-1.5 block",children:"Comandos Rápidos"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{label:"📋 Ver tabelas",sql:"SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;"},{label:"🔍 Ver colunas",sql:"SELECT table_name, column_name, data_type FROM information_schema.columns WHERE table_schema = 'public' ORDER BY table_name, ordinal_position;"},{label:"📊 Contar linhas",sql:"SELECT relname AS tabela, n_live_tup AS linhas FROM pg_stat_user_tables ORDER BY n_live_tup DESC;"},{label:"✅ Testar conexão",sql:"SELECT NOW() AS agora, version() AS versao;"}].map(({label:l,sql:P})=>e.jsx("button",{onClick:()=>{ut(P),setTimeout(()=>Na(P),50)},className:"px-3 py-2 bg-[#141c0d] border border-gray-700/40 rounded-xl text-[11px] text-gray-300 hover:border-blue-500/40 hover:text-blue-300 text-left transition-all",children:l},l))})]}),e.jsxs("div",{className:"bg-amber-950/20 border border-amber-700/30 rounded-2xl p-4",children:[e.jsx("p",{className:"text-[12px] font-bold text-amber-300 mb-1",children:"⚖️ Tabelas Jurídicas — Criar tudo de uma vez"}),e.jsx("p",{className:"text-[10px] text-gray-500 mb-3",children:"Cria as tabelas: clientes, processos, audiências, documentos, movimentações e usuários."}),e.jsx("div",{className:"grid grid-cols-2 gap-2 mb-3",children:[{label:"👤 Clientes + Usuários",sql:`CREATE TABLE IF NOT EXISTS clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(200) NOT NULL,
  cpf VARCHAR(14) UNIQUE,
  rg VARCHAR(20),
  email VARCHAR(150) UNIQUE,
  telefone VARCHAR(20),
  celular VARCHAR(20),
  endereco TEXT,
  cidade VARCHAR(100),
  estado CHAR(2),
  cep VARCHAR(9),
  data_nascimento DATE,
  observacoes TEXT,
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW(),
  atualizado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL,
  perfil VARCHAR(20) DEFAULT 'advogado',
  oab VARCHAR(20),
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW()
);`},{label:"📁 Processos",sql:`CREATE TABLE IF NOT EXISTS processos (
  id SERIAL PRIMARY KEY,
  numero_processo VARCHAR(50) UNIQUE NOT NULL,
  cliente_id INTEGER REFERENCES clientes(id),
  usuario_id INTEGER REFERENCES usuarios(id),
  tipo VARCHAR(50),
  area_direito VARCHAR(50),
  vara VARCHAR(100),
  comarca VARCHAR(100),
  tribunal VARCHAR(100),
  fase VARCHAR(50) DEFAULT 'inicial',
  status VARCHAR(30) DEFAULT 'ativo',
  polo_ativo TEXT,
  polo_passivo TEXT,
  objeto TEXT,
  valor_causa DECIMAL(15,2),
  data_distribuicao DATE,
  data_prazo DATE,
  observacoes TEXT,
  criado_em TIMESTAMP DEFAULT NOW(),
  atualizado_em TIMESTAMP DEFAULT NOW()
);`},{label:"📅 Audiências + Prazos",sql:`CREATE TABLE IF NOT EXISTS audiencias (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  tipo VARCHAR(80),
  data_hora TIMESTAMP NOT NULL,
  local VARCHAR(200),
  sala VARCHAR(50),
  juiz VARCHAR(150),
  pauta TEXT,
  resultado TEXT,
  status VARCHAR(20) DEFAULT 'agendada',
  lembrete_enviado BOOLEAN DEFAULT false,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS prazos (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  descricao TEXT NOT NULL,
  data_limite DATE NOT NULL,
  tipo VARCHAR(50),
  concluido BOOLEAN DEFAULT false,
  criado_em TIMESTAMP DEFAULT NOW()
);`},{label:"📄 Docs + Movimentações",sql:`CREATE TABLE IF NOT EXISTS documentos (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  nome VARCHAR(200) NOT NULL,
  tipo VARCHAR(50),
  url TEXT,
  tamanho_bytes INTEGER,
  hash_sha256 VARCHAR(64),
  enviado_por INTEGER REFERENCES usuarios(id),
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS movimentacoes (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  descricao TEXT NOT NULL,
  tipo VARCHAR(50),
  data_movimentacao TIMESTAMP DEFAULT NOW(),
  usuario_id INTEGER REFERENCES usuarios(id),
  origem VARCHAR(30) DEFAULT 'manual'
);`}].map(({label:l,sql:P})=>e.jsx("button",{onClick:()=>{ut(P),setTimeout(()=>Na(P),50)},disabled:!Ke,className:"px-3 py-2.5 bg-[#141c0d] border border-amber-700/30 rounded-xl text-[11px] text-amber-200 hover:border-amber-500/60 hover:bg-amber-900/10 text-left transition-all disabled:opacity-30",children:l},l))}),e.jsx("button",{onClick:()=>{const l=`-- ═══════════════════════════════════════
-- SISTEMA JURÍDICO COMPLETO — SK Code Editor
-- Criado automaticamente — execute uma vez
-- ═══════════════════════════════════════

CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL,
  perfil VARCHAR(20) DEFAULT 'advogado',
  oab VARCHAR(20),
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(200) NOT NULL,
  cpf VARCHAR(14) UNIQUE,
  rg VARCHAR(20),
  email VARCHAR(150),
  telefone VARCHAR(20),
  celular VARCHAR(20),
  endereco TEXT,
  cidade VARCHAR(100),
  estado CHAR(2),
  cep VARCHAR(9),
  data_nascimento DATE,
  observacoes TEXT,
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW(),
  atualizado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS processos (
  id SERIAL PRIMARY KEY,
  numero_processo VARCHAR(50) UNIQUE NOT NULL,
  cliente_id INTEGER REFERENCES clientes(id),
  usuario_id INTEGER REFERENCES usuarios(id),
  tipo VARCHAR(50),
  area_direito VARCHAR(50),
  vara VARCHAR(100),
  comarca VARCHAR(100),
  tribunal VARCHAR(100),
  fase VARCHAR(50) DEFAULT 'inicial',
  status VARCHAR(30) DEFAULT 'ativo',
  polo_ativo TEXT,
  polo_passivo TEXT,
  objeto TEXT,
  valor_causa DECIMAL(15,2),
  data_distribuicao DATE,
  data_prazo DATE,
  observacoes TEXT,
  criado_em TIMESTAMP DEFAULT NOW(),
  atualizado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audiencias (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  tipo VARCHAR(80),
  data_hora TIMESTAMP NOT NULL,
  local VARCHAR(200),
  sala VARCHAR(50),
  juiz VARCHAR(150),
  pauta TEXT,
  resultado TEXT,
  status VARCHAR(20) DEFAULT 'agendada',
  lembrete_enviado BOOLEAN DEFAULT false,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS prazos (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  descricao TEXT NOT NULL,
  data_limite DATE NOT NULL,
  tipo VARCHAR(50),
  concluido BOOLEAN DEFAULT false,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS documentos (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  nome VARCHAR(200) NOT NULL,
  tipo VARCHAR(50),
  url TEXT,
  tamanho_bytes INTEGER,
  enviado_por INTEGER REFERENCES usuarios(id),
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS movimentacoes (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  descricao TEXT NOT NULL,
  tipo VARCHAR(50),
  data_movimentacao TIMESTAMP DEFAULT NOW(),
  usuario_id INTEGER REFERENCES usuarios(id),
  origem VARCHAR(30) DEFAULT 'manual'
);

CREATE TABLE IF NOT EXISTS financeiro (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  cliente_id INTEGER REFERENCES clientes(id),
  descricao TEXT NOT NULL,
  tipo VARCHAR(20) NOT NULL,
  valor DECIMAL(15,2) NOT NULL,
  data_vencimento DATE,
  data_pagamento DATE,
  status VARCHAR(20) DEFAULT 'pendente',
  criado_em TIMESTAMP DEFAULT NOW()
);

-- Dados de exemplo
INSERT INTO usuarios (nome, email, senha_hash, perfil, oab) VALUES
  ('Dr. Saulo Kenji', 'saulo@escritorio.com.br', 'trocar_senha_depois', 'admin', 'OAB/XX 12345')
ON CONFLICT (email) DO NOTHING;

SELECT 'Tabelas criadas com sucesso!' AS resultado, NOW() AS criado_em;`;ut(l),setTimeout(()=>Na(l),50)},disabled:!Ke||ft,className:"w-full py-3 bg-amber-600/20 border border-amber-500/40 rounded-xl text-[13px] text-amber-200 font-bold hover:bg-amber-600/30 disabled:opacity-30 transition-all",children:ft?"Criando tabelas...":"⚖️ Criar TODAS as Tabelas Jurídicas de uma vez"}),!Ke&&e.jsx("p",{className:"text-[10px] text-red-500 mt-1.5 text-center",children:"Configure a URL de conexão primeiro ↑"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-1.5 block",children:"SQL Personalizado"}),e.jsx("textarea",{value:Ze,onChange:l=>ut(l.target.value),rows:4,placeholder:"SELECT * FROM processos LIMIT 10;",className:"w-full px-3 py-2.5 bg-[#141c0d] border border-gray-700/50 rounded-xl text-[12px] font-mono text-gray-200 placeholder-gray-700 outline-none focus:border-blue-500/60 resize-none"}),e.jsxs("div",{className:"flex gap-2 mt-2",children:[e.jsx("button",{onClick:()=>Na(),disabled:ft||!Ke||!Ze.trim(),className:"flex-1 py-2.5 bg-blue-600/30 border border-blue-500/40 rounded-xl text-[13px] text-blue-300 font-bold hover:bg-blue-600/40 disabled:opacity-40",children:ft?"Executando...":"▶ Executar SQL"}),e.jsx("button",{onClick:()=>{He(!1),I(!0),kt(`Me ajude com o banco de dados PostgreSQL/Neon.

A URL de conexao ja esta configurada.

Quero criar um sistema jurídico. Crie para mim:
1. Tabelas para processos judiciais (civel, trabalhista, criminal, previdenciario, tributario)
2. Relacionamentos entre clientes, processos, audiencias, documentos e prazos
3. Codigo Node.js para conectar ao banco com @neondatabase/serverless
4. Exemplos de INSERT com dados ficticios para testar

Mostre o SQL completo para eu executar no painel do banco.`)},className:"px-3 py-2.5 bg-purple-600/20 border border-purple-500/40 rounded-xl text-[12px] text-purple-300 font-bold hover:bg-purple-600/30 shrink-0",children:"🤖 Jasmim"})]})]}),Ie&&e.jsx("div",{className:`rounded-xl border p-3 ${Ie.error?"border-red-700/50 bg-red-950/20":"border-green-700/40 bg-green-950/10"}`,children:Ie.error?e.jsxs("div",{children:[e.jsx("p",{className:"text-[11px] font-bold text-red-400 mb-1",children:"❌ Erro"}),e.jsx("pre",{className:"text-[11px] text-red-300 font-mono whitespace-pre-wrap break-all",children:Ie.error})]}):e.jsxs("div",{children:[e.jsxs("p",{className:"text-[11px] font-bold text-green-400 mb-2",children:["✅ ",Ie.command," — ",Ie.rowCount," linha",Ie.rowCount!==1?"s":""]}),Ie.rows.length>0&&e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs("table",{className:"text-[10px] font-mono w-full border-collapse",children:[e.jsx("thead",{children:e.jsx("tr",{className:"border-b border-gray-700/50",children:Object.keys(Ie.rows[0]).map(l=>e.jsx("th",{className:"text-left px-2 py-1 text-gray-400 font-bold",children:l},l))})}),e.jsx("tbody",{children:Ie.rows.slice(0,20).map((l,P)=>e.jsx("tr",{className:"border-b border-gray-800/30",children:Object.values(l).map((B,ie)=>e.jsx("td",{className:"px-2 py-1 text-gray-300 max-w-[120px] truncate",children:String(B??"null")},ie))},P))})]}),Ie.rows.length>20&&e.jsxs("p",{className:"text-[10px] text-gray-600 mt-1",children:["... e mais ",Ie.rows.length-20," linhas"]})]})]})})]})]})})]}),$t&&e.jsx(Ii,{title:$t.title,placeholder:$t.placeholder,defaultValue:$t.defaultValue,icon:$t.icon,confirmLabel:$t.confirmLabel,onConfirm:$t.onConfirm,onCancel:()=>Ht(null)}),d&&e.jsx(fi,{onInstall:l=>{Ue(l)},onClose:()=>w(!1)}),R&&e.jsx(vi,{onClose:()=>b(!1),files:t.toJSON(),projectName:s}),e.jsx(Ci,{open:We,onClose:()=>ht(!1),vfs:t,projectName:s,terminalMode:Xe}),at&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/70",onClick:()=>_e(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:l=>l.stopPropagation(),children:e.jsxs("div",{className:"bg-[#141c0d] border-t border-[#2d4a1e] rounded-t-3xl shadow-2xl flex flex-col",style:{height:"88vh"},children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-[#3d6e2a] rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-[#2d4a1e] shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:"📖"}),e.jsx("p",{className:"text-[15px] font-bold text-[#7ec87a]",children:"Manual do SK Code Editor"})]}),e.jsx("button",{onClick:()=>_e(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:17})})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(yi,{vfs:t,projectName:s})})]})})]}),st&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/70",onClick:()=>lt(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:l=>l.stopPropagation(),children:e.jsxs("div",{className:"bg-[#141c0d] border-t border-[#2d4a1e] rounded-t-3xl shadow-2xl flex flex-col",style:{height:"88vh"},children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-[#3d6e2a] rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-[#2d4a1e] shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:"🔗"}),e.jsx("p",{className:"text-[15px] font-bold text-[#7ec87a]",children:"Combinar Apps"})]}),e.jsx("button",{onClick:()=>lt(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:17})})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(Ei,{onSendToJasmim:l=>{lt(!1),kt(l),setTimeout(()=>I(!0),100)}})})]})})]}),se&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/60",onClick:()=>q(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:l=>l.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1a2413] border-t border-gray-700/60 rounded-t-3xl shadow-2xl flex flex-col max-h-[85vh]",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/40 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(js,{size:16,className:"text-purple-400"}),e.jsx("p",{className:"text-[15px] font-bold text-white",children:"Histórico de Checkpoints"}),e.jsxs("span",{className:"text-[10px] text-gray-600 bg-gray-800/50 px-2 py-0.5 rounded-full",children:[F.length,"/5"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>{bs()},className:"flex items-center gap-1.5 px-3 py-1.5 bg-pink-600/20 border border-pink-500/40 rounded-xl text-[12px] text-pink-300 font-bold hover:bg-pink-600/30",children:[e.jsx(Ba,{size:13})," Salvar agora"]}),e.jsx("button",{onClick:()=>q(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:17})})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-3 space-y-2",children:F.length===0?e.jsxs("div",{className:"py-10 text-center",children:[e.jsx(Ba,{size:28,className:"text-gray-700 mx-auto mb-2"}),e.jsx("p",{className:"text-[13px] text-gray-500",children:"Nenhum checkpoint salvo ainda"}),e.jsx("p",{className:"text-[11px] text-gray-700 mt-1",children:'Clique em "Salvar agora" para criar um ponto de restauração'})]}):F.map(l=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-[#141c0d] border border-gray-700/40 rounded-xl",children:[e.jsx(Os,{size:14,className:"text-purple-400 shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] text-gray-200 font-semibold truncate",children:l.label}),e.jsxs("p",{className:"text-[10px] text-gray-600",children:[new Date(l.timestamp).toLocaleString("pt-BR")," • ",l.fileCount," arquivo",l.fileCount!==1?"s":""]})]}),e.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[e.jsxs("button",{onClick:()=>ir(l),className:"flex items-center gap-1 px-2.5 py-1.5 bg-green-600/20 border border-green-500/30 rounded-lg text-[11px] text-green-400 font-bold hover:bg-green-600/30",children:[e.jsx(Lr,{size:11})," Restaurar"]}),e.jsx("button",{onClick:()=>lr(l.id),className:"p-1.5 rounded-lg text-gray-600 hover:text-red-400 hover:bg-red-900/20",children:e.jsx(ye,{size:13})})]})]},l.id))})]})})]}),x&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/60",onClick:()=>E(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:l=>l.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1a2413] border-t border-gray-700/60 rounded-t-3xl shadow-2xl flex flex-col max-h-[85vh]",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/40 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Fa,{size:16,className:"text-cyan-400"}),e.jsx("p",{className:"text-[15px] font-bold text-white",children:"Taski — Lista de Tarefas"}),e.jsxs("span",{className:"text-[10px] text-gray-600 bg-gray-800/50 px-2 py-0.5 rounded-full",children:[M.filter(l=>l.done).length,"/",M.length," feitas"]})]}),e.jsx("button",{onClick:()=>E(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(ye,{size:17})})]}),e.jsx("div",{className:"px-4 py-3 border-b border-gray-700/30 shrink-0",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{value:ce,onChange:l=>O(l.target.value),onKeyDown:l=>{l.key==="Enter"&&so(ce)},placeholder:"Nova tarefa... (Enter para adicionar)",className:"flex-1 px-3 py-2 bg-[#0d1409] border border-gray-700/50 rounded-xl text-[13px] text-gray-200 placeholder-gray-700 outline-none focus:border-cyan-600/60"}),e.jsx("button",{onClick:()=>so(ce),className:"px-3 py-2 bg-cyan-600/20 border border-cyan-500/40 rounded-xl text-[12px] text-cyan-300 font-bold hover:bg-cyan-600/30",children:e.jsx(Bt,{size:15})})]})}),e.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-3 space-y-1.5",children:M.length===0?e.jsxs("div",{className:"py-10 text-center",children:[e.jsx(Fa,{size:28,className:"text-gray-700 mx-auto mb-2"}),e.jsx("p",{className:"text-[13px] text-gray-500",children:"Nenhuma tarefa ainda"}),e.jsx("p",{className:"text-[11px] text-gray-700 mt-1",children:"Adicione tarefas para organizar o seu projeto"})]}):e.jsxs(e.Fragment,{children:[M.filter(l=>!l.done).map(l=>e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-[#141c0d] border border-gray-700/30 rounded-xl",children:[e.jsx("button",{onClick:()=>oo(l.id),className:"w-5 h-5 rounded border-2 border-gray-600 hover:border-cyan-400 shrink-0 mt-0.5 flex items-center justify-center transition-colors"}),e.jsx("span",{className:"flex-1 text-[13px] text-gray-200 leading-relaxed",children:l.text}),e.jsx("button",{onClick:()=>ro(l.id),className:"p-1 rounded text-gray-700 hover:text-red-400 shrink-0",children:e.jsx(ye,{size:12})})]},l.id)),M.filter(l=>l.done).length>0&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-widest px-1 pt-2",children:"Concluídas"}),M.filter(l=>l.done).map(l=>e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-[#0d1409] border border-gray-800/30 rounded-xl opacity-60",children:[e.jsx("button",{onClick:()=>oo(l.id),className:"w-5 h-5 rounded border-2 border-cyan-500 bg-cyan-600/20 shrink-0 mt-0.5 flex items-center justify-center",children:e.jsx("span",{className:"text-cyan-400 text-[10px] font-bold",children:"✓"})}),e.jsx("span",{className:"flex-1 text-[13px] text-gray-500 leading-relaxed line-through",children:l.text}),e.jsx("button",{onClick:()=>ro(l.id),className:"p-1 rounded text-gray-700 hover:text-red-400 shrink-0",children:e.jsx(ye,{size:12})})]},l.id))]})]})})]})})]}),e.jsx(Ri,{open:Pe,onClose:()=>Ve(!1),vfs:t,projectName:s}),e.jsx(Pi,{open:Be,onClose:()=>ot(!1),vfs:t,projectName:s})]})}const _i=[["gsk_","https://api.groq.com/openai/v1","llama-3.3-70b-versatile","Groq"],["sk-or-","https://openrouter.ai/api/v1","openai/gpt-4o-mini","OpenRouter"],["pplx-","https://api.perplexity.ai","sonar-pro","Perplexity"],["AIza","https://generativelanguage.googleapis.com/v1beta/openai","gemini-2.0-flash","Google Gemini"],["xai-","https://api.x.ai/v1","grok-2-latest","xAI/Grok"],["sk-ant","https://api.anthropic.com/v1","claude-haiku-4-20250514","Anthropic"],["sk-","https://api.openai.com/v1","gpt-4o-mini","OpenAI"]];function Ka(t){const s=(t||"").trim();for(const[o,r,n,c]of _i)if(s.startsWith(o))return{url:r,model:n,name:c};return null}function Mi({code:t,lang:s}){const[o,r]=a.useState(!1);return e.jsxs("div",{className:"relative my-2 rounded-lg overflow-hidden border border-gray-700/50",children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 bg-[#0e1a0a] text-gray-500 text-[10px] font-mono",children:[e.jsx("span",{children:s||"code"}),e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:"flex items-center gap-1 hover:text-gray-300 transition-colors",children:o?e.jsxs(e.Fragment,{children:[e.jsx(pa,{className:"w-3 h-3 text-green-400"})," Copiado!"]}):e.jsxs(e.Fragment,{children:[e.jsx(Fo,{className:"w-3 h-3"})," Copiar"]})})]}),e.jsx("pre",{className:"p-3 overflow-x-auto text-[11px] leading-relaxed text-gray-200 font-mono bg-[#141c0d]",children:e.jsx("code",{children:t})})]})}function $i({text:t}){const s=t.split(/(```[\s\S]*?```)/g);return e.jsx("div",{children:s.map((o,r)=>{const n=o.match(/^```(\w*)\n?([\s\S]*?)```$/);if(n)return e.jsx(Mi,{lang:n[1],code:n[2].trimEnd()},r);if(o.trim()){const c=/(https?:\/\/[^\s<>"']+)/g,p=o.split(c);return e.jsx("p",{className:"text-[12px] leading-relaxed whitespace-pre-wrap my-1 text-gray-200",children:p.map((h,m)=>c.test(h)?e.jsx("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:underline break-all",children:h},m):e.jsx("span",{children:h},m))},r)}return null})})}function Ui({onBack:t}){const[s,o]=a.useState(()=>localStorage.getItem("cl_api_key")||""),[r,n]=a.useState(()=>localStorage.getItem("cl_api_url")||"https://api.groq.com/openai/v1"),[c,p]=a.useState(()=>localStorage.getItem("cl_api_model")||"llama-3.3-70b-versatile"),[h,m]=a.useState(!1),[j,f]=a.useState(()=>!localStorage.getItem("cl_api_key")),[k,z]=a.useState(!1),[U,K]=a.useState(""),[C,L]=a.useState(()=>{try{return JSON.parse(localStorage.getItem("cl_saved_keys")||"[]")}catch{return[]}}),[V,I]=a.useState(()=>{try{return JSON.parse(localStorage.getItem("cl_chat_history")||"[]")}catch{return[]}}),[ee,$]=a.useState(""),[D,N]=a.useState(""),[i,v]=a.useState(!1),[S,G]=a.useState(!1),[J,Y]=a.useState(()=>Oa().enabled),[X,te]=a.useState(!1),[re,Q]=a.useState([]),[T,ne]=a.useState(()=>Oa()),y=a.useRef(null),u=a.useRef(null),R=a.useRef(null),b=a.useRef(!1),d=a.useRef(null),w=a.useRef(!1),se=a.useRef(0);a.useEffect(()=>{const _=()=>{const Z=window.speechSynthesis?.getVoices()??[];Z.length>0&&Q(Z)};return _(),window.speechSynthesis?.addEventListener("voiceschanged",_),()=>window.speechSynthesis?.removeEventListener("voiceschanged",_)},[]);const q=_=>{ne(Z=>{const le={...Z,..._};return Zs(le),le})};a.useEffect(()=>{s?localStorage.setItem("cl_api_key",s):localStorage.removeItem("cl_api_key"),r&&localStorage.setItem("cl_api_url",r),c&&localStorage.setItem("cl_api_model",c)},[s,r,c]),a.useEffect(()=>{localStorage.setItem("cl_saved_keys",JSON.stringify(C))},[C]),a.useEffect(()=>{localStorage.setItem("cl_chat_history",JSON.stringify(V))},[V]),a.useEffect(()=>{u.current?.scrollIntoView({behavior:"smooth"})},[V,D]),a.useEffect(()=>{if(!s)return;const _=s.trim(),Z=Ka(_);Z&&(n(Z.url),p(Z.model))},[s]),a.useEffect(()=>()=>{b.current=!1,d.current?.stop()},[]);const x=_=>{o(_);const Z=Ka(_);Z&&(n(Z.url),p(Z.model))},E=()=>{if(!s.trim()||C.some(le=>le.key===s.trim()))return;const _=Ka(s),Z=U.trim()||_?.name||"Chave "+(C.length+1);L(le=>[...le,{id:Date.now().toString(),label:Z,key:s.trim(),url:r,model:c,provider:_?.name||"Custom"}]),K("")},F=_=>{o(_.key),n(_.url),p(_.model),z(!1)},H=_=>L(Z=>Z.filter(le=>le.id!==_)),M=a.useCallback(()=>{if(!w.current)return;const _=window.SpeechRecognition||window.webkitSpeechRecognition;_&&setTimeout(()=>{if(!w.current)return;const Z=new _;Z.lang="pt-BR",Z.continuous=!0,Z.interimResults=!0;let le=null,me="";const ke=()=>{le&&clearTimeout(le),le=setTimeout(()=>{const be=me.trim();try{Z.stop()}catch{}w.current=!1,G(!1),be&&oe.current?.(be)},1800)};Z.onresult=be=>{let Qe="",pe="";for(let we=0;we<be.results.length;we++)be.results[we].isFinal?Qe+=be.results[we][0].transcript:pe+=be.results[we][0].transcript;me=Qe||pe,$(me),me&&ke()},Z.onerror=()=>{G(!1),w.current=!1},Z.onend=()=>{G(!1)},d.current=Z;try{Z.start(),G(!0)}catch{G(!1)}},400)},[]),oe=a.useRef(null),ce=a.useCallback(async _=>{const Z=(_??ee).trim();if(!Z||i)return;if(window.speechSynthesis){const pe=new SpeechSynthesisUtterance(" ");pe.volume=0,pe.lang="pt-BR",window.speechSynthesis.speak(pe)}$(""),se.current=0;const le=J?{role:"system",content:"Você está em modo de conversa por voz. Responda de forma natural e direta, SEM usar markdown, asteriscos, sustenidos, hashtags, tabelas, listas numeradas, código ou caracteres especiais. Fale como numa conversa normal. Para tarefas longas ou com várias etapas, anuncie brevemente o que fará em seguida, por exemplo: 'Já analisei o primeiro ponto, agora vou verificar o segundo.' Seja objetivo e amigável."}:null,me=[...le?[le]:[],...V,{role:"user",content:Z}],ke=[...V,{role:"user",content:Z}];I(ke),v(!0),N("");const be=new AbortController;y.current=be;const Qe=pe=>{const we=La(pe);if(!we.trim()){M();return}Us(we,{...T,enabled:!0},M)};try{const pe=s.trim();if(!pe)try{const Pe=await fetch("/api/ai/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:ke}),signal:be.signal});if(!Pe.ok){const ot=await Pe.json().catch(()=>({}));throw new Error(ot.error||`Erro ${Pe.status}`)}const Be=(await Pe.json()).content||"";I(ot=>[...ot,{role:"assistant",content:Be}]),J&&Be&&Qe(Be);return}catch(Pe){if(Pe.name==="AbortError")throw Pe;const Ve=`⚠️ Sem chave de IA configurada e o servidor não está disponível.

Vá em ⚙️ Configurações → cole sua chave (Groq grátis em console.groq.com, Gemini em aistudio.google.com).`;I(Be=>[...Be,{role:"assistant",content:Ve}]);return}const we=(r.trim()||"https://api.openai.com/v1")+"/chat/completions",Ge=pe.startsWith("sk-ant"),Ae={"Content-Type":"application/json"};Ge?(Ae["x-api-key"]=pe,Ae["anthropic-version"]="2023-06-01",Ae["anthropic-dangerous-direct-browser-access"]="true"):Ae.Authorization=`Bearer ${pe}`;const He=Ge?{model:c,messages:me.filter(Pe=>Pe.role!=="system"),max_tokens:8192,stream:!0,system:me.find(Pe=>Pe.role==="system")?.content||""}:{model:c,messages:me,stream:!0,max_tokens:16384};let _e=await fetch(Ge?"https://api.anthropic.com/v1/messages":we,{method:"POST",headers:Ae,body:JSON.stringify(He),signal:be.signal}).catch(async Pe=>fetch("/api/ai/forward",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:pe,apiUrl:r.trim(),model:c,messages:me,stream:!0,maxTokens:16384}),signal:be.signal}));if(!_e.ok){const Pe=await _e.text().catch(()=>"");let Ve=`Erro ${_e.status}`;try{const Be=JSON.parse(Pe);Ve=Be.error||Be.message||Ve}catch{}throw new Error(Ve.substring(0,400))}const st=_e.body?.getReader();if(!st)throw new Error("Sem resposta");const lt=new TextDecoder;let We="",ht="";for(;;){const{done:Pe,value:Ve}=await st.read();if(Pe)break;ht+=lt.decode(Ve,{stream:!0});const Be=ht.split(`
`);ht=Be.pop()||"";for(const ot of Be){if(!ot.startsWith("data: "))continue;const Ke=ot.slice(6).trim();if(Ke!=="[DONE]")try{const rt=JSON.parse(Ke);if(rt.error)throw new Error(typeof rt.error=="string"?rt.error:JSON.stringify(rt.error));const et=rt.choices?.[0]?.delta?.content||rt.text||rt.content||"";if(et&&(We+=et,N(We),J&&w.current)){const Ze=We.slice(se.current).match(/^(.{30,}?[.!?])\s/s);if(Ze){const ut=La(Ze[1],400);ut.trim().length>10&&(se.current+=Ze[0].length,window.speechSynthesis?.speaking||Us(ut,{...T,enabled:!0}))}}}catch(rt){if(rt instanceof SyntaxError)continue;throw rt}}}if(We.trim()&&(I(Pe=>[...Pe,{role:"assistant",content:We}]),J)){const Pe=We.slice(se.current);Qe(Pe||We)}}catch(pe){if(pe.name==="AbortError")return;const we=pe.message||"Erro desconhecido";I(Ge=>[...Ge,{role:"assistant",content:`❌ ${we}`}]),w.current=!1}finally{v(!1),N(""),y.current=null}},[ee,s,r,c,V,J,T,i,M]);a.useEffect(()=>{oe.current=ce},[ce]);const O=()=>{y.current?.abort(),y.current=null,w.current=!1,da(),d.current?.stop()},he=()=>{O(),I([]),N(""),localStorage.removeItem("cl_chat_history")},Ne=()=>{if(!V.length)return;const _=["=== CONVERSA — Campo Livre ===",`Data: ${new Date().toLocaleString("pt-BR")}`,""];V.forEach(me=>{_.push(`[${me.role==="user"?"VOCÊ":"IA"}]`),_.push(me.content),_.push("")});const Z=new Blob([_.join(`
`)],{type:"text/plain;charset=utf-8"}),le=document.createElement("a");le.href=URL.createObjectURL(Z),le.download=`conversa-${Date.now()}.txt`,le.click()},ge=_=>{const Z=_.target.files?.[0];if(!Z)return;const le=new FileReader;le.onload=me=>{const ke=me.target?.result;ke&&$(be=>be?be+`

`+ke:ke)},le.readAsText(Z),_.target.value=""},xe=a.useCallback(()=>{if(S){d.current?.stop(),w.current=!1,da(),G(!1);return}const _=window.SpeechRecognition||window.webkitSpeechRecognition;if(!_){alert("Use Chrome ou Edge para ditar por voz.");return}w.current=!0;const Z=new _;Z.lang="pt-BR",Z.continuous=!0,Z.interimResults=!0;let le=null,me="";const ke=()=>{le&&clearTimeout(le),le=setTimeout(()=>{const be=me.trim();try{Z.stop()}catch{}be&&($(""),ce(be))},1800)};Z.onresult=be=>{let Qe="",pe="";for(let we=0;we<be.results.length;we++)be.results[we].isFinal?Qe+=be.results[we][0].transcript:pe+=be.results[we][0].transcript;me=Qe||pe,$(me),me&&ke()},Z.onerror=()=>{le&&clearTimeout(le),d.current=null,G(!1)},Z.onend=()=>{le&&clearTimeout(le),d.current=null,G(!1)},d.current=Z;try{Z.start(),G(!0)}catch{G(!1)}},[S,ce]),ue=Ka(s),ve=[...V,...D?[{role:"assistant",content:D,streaming:!0}]:[]];return e.jsxs("div",{className:"h-[100dvh] flex flex-col bg-[#141c0d] text-gray-200",children:[e.jsxs("header",{className:"h-11 flex items-center gap-2 px-3 bg-[#1c2714] border-b border-gray-700/50 shrink-0",children:[e.jsx("button",{onClick:t,className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-400",children:e.jsx(Mo,{size:17})}),e.jsx(Pa,{size:15,className:"text-green-400 shrink-0"}),e.jsx("span",{className:"text-sm font-semibold truncate flex-1",children:"Campo Livre"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-green-900/40 text-green-400 border border-green-700/40 shrink-0",children:ue?ue.name:"Gratuita ✨"}),e.jsx("button",{onClick:Ne,disabled:!V.length,className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-500 disabled:opacity-30",title:"Exportar conversa",children:e.jsx(pt,{size:14})}),e.jsx("button",{onClick:()=>R.current?.click(),className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-500",title:"Importar arquivo de texto",children:e.jsx(_t,{size:14})}),e.jsx("input",{ref:R,type:"file",accept:".txt,.md,.csv,.json",className:"hidden",onChange:ge}),e.jsx("button",{onClick:()=>{Y(_=>{const Z=!_;return Z||(da(),te(!1)),Z})},className:`p-1.5 rounded-lg ${J?"text-green-400 bg-green-900/20":"text-gray-600 hover:bg-white/5"}`,title:J?"Voz da IA ativa — clique para desativar":"Ativar voz da IA",children:J?e.jsx(ss,{size:14}):e.jsx(Vs,{size:14})}),J&&e.jsx("button",{onClick:()=>te(_=>!_),className:`p-1.5 rounded-lg ${X?"text-green-300 bg-green-900/30":"text-gray-600 hover:bg-white/5 hover:text-green-400"}`,title:"Configurar voz (escolher, velocidade, tom)",children:e.jsx($o,{size:13})}),e.jsx("button",{onClick:()=>{f(_=>!_),z(!1)},className:`p-1.5 rounded-lg ${j?"bg-white/10 text-gray-200":"hover:bg-white/5 text-gray-500"}`,title:"Configurar API",children:e.jsx(za,{size:14})}),e.jsxs("button",{onClick:()=>{z(_=>!_),f(!1)},className:`p-1.5 rounded-lg relative ${k?"bg-white/10 text-gray-200":"hover:bg-white/5 text-gray-500"}`,title:"Chaves salvas",children:[e.jsx(Uo,{size:14}),C.length>0&&e.jsx("span",{className:"absolute -top-0.5 -right-0.5 text-[9px] bg-green-600 text-white w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold",children:C.length})]}),e.jsx("button",{onClick:he,className:"p-1.5 rounded-lg hover:bg-red-900/20 text-gray-600 hover:text-red-400",title:"Limpar conversa",children:e.jsx(dt,{size:14})})]}),X&&e.jsxs("div",{className:"border-b border-green-800/30 bg-[#1a2410] p-3 space-y-3 shrink-0",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Configurações de Voz"}),e.jsx("button",{onClick:()=>te(!1),className:"p-0.5 rounded text-gray-600 hover:text-gray-400",children:e.jsx(ye,{size:12})})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-[10px] text-gray-500 mb-1 block",children:["Voz (",re.length," disponíveis)"]}),re.length===0?e.jsx("p",{className:"text-[11px] text-gray-600 italic",children:"Sem vozes disponíveis neste navegador."}):e.jsxs("div",{className:"max-h-36 overflow-y-auto space-y-0.5 rounded-lg border border-gray-700/40 bg-[#141c0d] p-1",children:[e.jsxs("button",{onClick:()=>q({voiceName:""}),className:`w-full text-left px-2 py-1.5 rounded text-[11px] transition-colors ${T.voiceName===""?"bg-green-900/40 text-green-300 border border-green-700/40":"text-gray-400 hover:bg-white/5"}`,children:[e.jsx("span",{className:"font-medium",children:"Automático"}),e.jsx("span",{className:"text-[10px] text-gray-600 ml-1",children:"(melhor voz pt-BR disponível)"})]}),[...re.filter(_=>_.lang.toLowerCase().startsWith("pt")),...re.filter(_=>!_.lang.toLowerCase().startsWith("pt"))].map(_=>e.jsxs("button",{onClick:()=>q({voiceName:_.name}),className:`w-full text-left px-2 py-1.5 rounded text-[11px] transition-colors ${T.voiceName===_.name?"bg-green-900/40 text-green-300 border border-green-700/40":"text-gray-400 hover:bg-white/5"}`,children:[e.jsx("span",{className:"font-medium truncate block",children:_.name}),e.jsxs("span",{className:"text-[10px] text-gray-600",children:[_.lang," ",_.localService?"· local":"· online"]})]},_.name))]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("label",{className:"text-[10px] text-gray-500",children:"Velocidade"}),e.jsxs("span",{className:"text-[10px] text-green-400 font-mono",children:[T.rate.toFixed(2),"×"]})]}),e.jsx("input",{type:"range",min:"0.5",max:"2.0",step:"0.05",value:T.rate,onChange:_=>q({rate:parseFloat(_.target.value)}),className:"w-full accent-green-500 h-1.5"}),e.jsxs("div",{className:"flex justify-between text-[9px] text-gray-700 mt-0.5",children:[e.jsx("span",{children:"Lenta"}),e.jsx("span",{children:"Normal"}),e.jsx("span",{children:"Rápida"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("label",{className:"text-[10px] text-gray-500",children:"Tom de voz"}),e.jsx("span",{className:"text-[10px] text-green-400 font-mono",children:T.pitch.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.5",max:"1.8",step:"0.05",value:T.pitch,onChange:_=>q({pitch:parseFloat(_.target.value)}),className:"w-full accent-green-500 h-1.5"}),e.jsxs("div",{className:"flex justify-between text-[9px] text-gray-700 mt-0.5",children:[e.jsx("span",{children:"Grave"}),e.jsx("span",{children:"Natural"}),e.jsx("span",{children:"Agudo"})]})]}),e.jsx("button",{onClick:()=>{da();const _=re.find(me=>me.name===T.voiceName),Z={...T},le=new SpeechSynthesisUtterance("Olá! Esta é a minha voz. Como posso te ajudar hoje?");le.lang=Z.lang,le.rate=Z.rate,le.pitch=Z.pitch,_&&(le.voice=_),window.speechSynthesis?.speak(le)},className:"w-full py-1.5 text-[11px] bg-green-900/30 border border-green-700/40 text-green-400 rounded-lg hover:bg-green-900/50 transition-colors",children:"▶ Testar voz agora"})]}),j&&e.jsxs("div",{className:"border-b border-gray-700/40 bg-[#1c2714] p-3 space-y-2 shrink-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Configurar Chave de API"}),e.jsx("span",{className:"text-[10px] text-green-400",children:s?"Sua chave ativa":"Usando IA gratuita (Replit)"})]}),!s&&e.jsx("p",{className:"text-[11px] text-blue-300 bg-blue-900/20 border border-blue-700/30 rounded px-2 py-1.5",children:"Sem chave → usando IA gratuita. Cole qualquer chave abaixo para usar sua própria conta."}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("input",{type:h?"text":"password",value:s,onChange:_=>x(_.target.value.trim()),placeholder:"gsk_..., AIza..., sk-..., pplx-..., xai-..., sk-or-...",className:"flex-1 h-8 px-2 text-[11px] font-mono bg-[#141c0d] border border-gray-700/50 rounded-lg text-gray-200 outline-none focus:border-green-600/60"}),e.jsx("button",{onClick:()=>m(_=>!_),className:"w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-gray-500",children:h?e.jsx(Bo,{size:13}):e.jsx(Ws,{size:13})})]}),s&&e.jsxs("div",{className:"flex gap-1 items-end",children:[e.jsx("input",{value:U,onChange:_=>K(_.target.value),placeholder:ue?.name||"Nome para salvar",className:"flex-1 h-7 px-2 text-[11px] bg-[#141c0d] border border-gray-700/40 rounded text-gray-300 outline-none"}),e.jsxs("button",{onClick:E,className:"flex items-center gap-1 px-2 h-7 text-[11px] bg-green-700/30 border border-green-600/40 text-green-400 rounded hover:bg-green-700/50",children:[e.jsx(ua,{size:11})," Salvar"]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[e.jsx("input",{value:r,onChange:_=>n(_.target.value),placeholder:"URL da API",className:"h-7 px-2 text-[10px] font-mono bg-[#141c0d] border border-gray-700/40 rounded text-gray-400 outline-none"}),e.jsx("input",{value:c,onChange:_=>p(_.target.value),placeholder:"Modelo",className:"h-7 px-2 text-[10px] font-mono bg-[#141c0d] border border-gray-700/40 rounded text-gray-400 outline-none"})]}),s&&ue&&e.jsxs("p",{className:"text-[10px] text-green-400",children:["✓ ",ue.name," · ",c]})]}),k&&e.jsxs("div",{className:"border-b border-gray-700/40 bg-[#1c2714] p-3 space-y-2 shrink-0 max-h-48 overflow-y-auto",children:[e.jsxs("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:["Chaves Salvas (",C.length,")"]}),C.length===0?e.jsx("p",{className:"text-[11px] text-gray-600 py-2 text-center",children:"Nenhuma chave salva."}):C.map(_=>e.jsxs("div",{className:`flex items-center gap-2 p-2 rounded-lg border text-[11px] cursor-pointer ${_.key===s?"bg-green-900/20 border-green-700/40":"bg-[#141c0d] border-gray-700/30 hover:border-gray-600/50"}`,children:[e.jsxs("button",{onClick:()=>F(_),className:"flex-1 text-left min-w-0",children:[e.jsx("div",{className:"font-medium text-gray-200 truncate",children:_.label}),e.jsxs("div",{className:"text-[10px] text-gray-500",children:[_.provider," · ",_.key.substring(0,8),"...",_.key.slice(-4)]})]}),_.key===s&&e.jsx("span",{className:"text-[9px] text-green-400 font-bold shrink-0",children:"ATIVA"}),e.jsx("button",{onClick:()=>H(_.id),className:"p-1 rounded hover:bg-red-900/20 text-gray-600 hover:text-red-400 shrink-0",children:e.jsx(ye,{size:11})})]},_.id))]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-3 space-y-3",children:[ve.length===0&&e.jsxs("div",{className:"h-full flex flex-col items-center justify-center gap-3 text-center py-12",children:[e.jsx(Pa,{size:36,className:"text-gray-700"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-400 text-sm font-medium",children:"Campo Livre"}),e.jsxs("p",{className:"text-gray-600 text-[12px] mt-1",children:["Converse sobre qualquer assunto.",e.jsx("br",{}),"Nenhuma restrição de tema."]})]}),e.jsx("div",{className:"flex flex-wrap gap-2 justify-center mt-2",children:["Olá, como você está?","Me ajude a pensar em algo","Conta uma curiosidade"].map(_=>e.jsx("button",{onClick:()=>$(_),className:"text-[11px] px-3 py-1.5 rounded-full border border-gray-700/50 text-gray-500 hover:border-green-700/50 hover:text-green-400 transition-colors",children:_},_))})]}),ve.map((_,Z)=>e.jsx("div",{className:`flex ${_.role==="user"?"justify-end":"justify-start"}`,children:e.jsx("div",{className:`max-w-[85%] rounded-xl px-3 py-2 ${_.role==="user"?"bg-green-800/40 border border-green-700/30 text-gray-100":"bg-[#1c2714] border border-gray-700/30"}`,children:_.role==="assistant"?e.jsxs("div",{children:[e.jsx($i,{text:_.content}),_.streaming&&e.jsx("span",{className:"inline-block w-1.5 h-3.5 bg-green-400 animate-pulse ml-0.5 rounded-sm"}),!_.streaming&&_.content&&e.jsxs("button",{onClick:()=>navigator.clipboard.writeText(_.content),className:"mt-1.5 flex items-center gap-1 text-[10px] text-gray-600 hover:text-gray-400",children:[e.jsx(Fo,{size:10})," Copiar"]})]}):e.jsx("p",{className:"text-[12px] leading-relaxed whitespace-pre-wrap",children:_.content})})},Z)),e.jsx("div",{ref:u})]}),e.jsx("div",{className:"border-t border-gray-700/40 bg-[#1c2714] p-2 shrink-0",children:e.jsxs("div",{className:"flex gap-2 items-end",children:[e.jsx("textarea",{value:ee,onChange:_=>$(_.target.value),onKeyDown:_=>{_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),ce())},placeholder:"Digite sua mensagem… (Enter para enviar, Shift+Enter para nova linha)",rows:1,className:"flex-1 resize-none bg-[#141c0d] border border-gray-700/50 rounded-xl px-3 py-2.5 text-[12px] text-gray-200 placeholder-gray-600 outline-none focus:border-green-600/60 max-h-32 overflow-y-auto leading-relaxed",style:{minHeight:"42px"},onInput:_=>{const Z=_.target;Z.style.height="auto",Z.style.height=Math.min(Z.scrollHeight,128)+"px"}}),e.jsx("button",{onClick:xe,className:`w-10 h-10 flex items-center justify-center rounded-xl shrink-0 transition-all ${S?"bg-red-600 text-white animate-pulse":"bg-[#141c0d] border border-gray-700/50 text-gray-500 hover:text-green-400 hover:border-green-700/50"}`,title:"Ditar por voz",children:S?e.jsx(Gs,{size:16}):e.jsx(fa,{size:16})}),i?e.jsx("button",{onClick:O,className:"w-10 h-10 flex items-center justify-center rounded-xl bg-red-900/30 border border-red-700/40 text-red-400 shrink-0",children:e.jsx(Xa,{size:16})}):e.jsx("button",{onClick:()=>ce(),disabled:!ee.trim(),className:"w-10 h-10 flex items-center justify-center rounded-xl bg-green-700/30 border border-green-600/40 text-green-400 hover:bg-green-700/50 disabled:opacity-30 shrink-0 transition-all",children:i?e.jsx(qe,{size:16,className:"animate-spin"}):e.jsx(rs,{size:16})})]})})]})}const To={1:{label:"Rápido",color:"text-blue-400",desc:"Resposta direta e concisa"},2:{label:"Básico",color:"text-cyan-400",desc:"Pontos principais"},3:{label:"Detalhado",color:"text-amber-400",desc:"Análise completa"},4:{label:"Profundo",color:"text-orange-400",desc:"Fundamentação robusta"},5:{label:"Exaustivo",color:"text-purple-400",desc:"Máximo esforço possível"}},Ro=[{id:"modo-estrito",label:"Corrigir Texto",color:"bg-blue-800/30 border-blue-600/40 text-blue-300"},{id:"modo-redacao",label:"Redação Jurídica",color:"bg-purple-800/30 border-purple-600/40 text-purple-300"},{id:"modo-interativo",label:"Verificar Lacunas",color:"bg-yellow-800/30 border-yellow-600/40 text-yellow-300"}],Po=[{id:"resumir",label:"Resumir"},{id:"revisar",label:"Revisar"},{id:"refinar",label:"Refinar"},{id:"simplificar",label:"Linguagem Simples"},{id:"minuta",label:"Gerar Minuta"},{id:"analisar",label:"Analisar"}],Bi=[["gsk_","Groq"],["sk-or-","OpenRouter"],["pplx-","Perplexity"],["AIza","Google Gemini"],["xai-","xAI/Grok"],["sk-ant","Anthropic"],["sk-","OpenAI"]];function Cs(t){const s=(t||"").trim();for(const[o,r]of Bi)if(s.startsWith(o))return r;return null}const Fi=["STF","STJ","TRF1","TRF2","TRF3","TRF4","TRF5","TRF6","TRT","TJSP","TJRJ","TJMG","TJRS","Súmula","Doutrina"];function Gi({text:t}){const s=t.split(/\n{2,}/);return e.jsx("div",{style:{fontFamily:"'Times New Roman', Georgia, serif",fontSize:"13px",lineHeight:"1.9",color:"#e5e7eb"},children:s.map((o,r)=>{const n=o.trim();if(!n)return null;const c=n.split(`
`),h=c.length===1&&n===n.toUpperCase()&&n.length>2&&/[A-ZÁÉÍÓÚÃÕÂÊÎÔÛÇ]/.test(n)&&!/^\d+\./.test(n),m=/^\d+[.\)]\s/.test(n)||/^[a-z]\)/.test(n)||/^[-–]\s/.test(n),j=(n.startsWith('"')||n.startsWith("“"))&&n.length>60,f=k=>k.map((z,U)=>U===0?z:e.jsxs("span",{children:[e.jsx("br",{}),z]},U));return h?e.jsx("p",{style:{textAlign:"justify",fontWeight:"bold",margin:"4px 0 0",textIndent:"0"},children:n},r):m?e.jsx("p",{style:{textAlign:"justify",margin:"0",paddingLeft:"1cm",textIndent:"0"},children:f(c)},r):j?e.jsx("p",{style:{textAlign:"justify",margin:"0",paddingLeft:"4cm",fontSize:"12px"},children:f(c)},r):e.jsx("p",{style:{textIndent:"4cm",textAlign:"justify",margin:"0"},children:f(c)},r)})})}function na(t,s){try{return JSON.parse(localStorage.getItem(t)||"null")??s}catch{return s}}function ia(t,s){try{localStorage.setItem(t,JSON.stringify(s))}catch{}}function Hi({onBack:t}){const[s,o]=a.useState("processar"),[r,n]=a.useState(()=>localStorage.getItem("aj_api_key")||""),[c,p]=a.useState(()=>localStorage.getItem("aj_api_url")||""),[h,m]=a.useState(()=>localStorage.getItem("aj_api_model")||""),[j,f]=a.useState(!1),[k,z]=a.useState(!1),[U,K]=a.useState(!1),[C,L]=a.useState(""),[V,I]=a.useState(()=>na("aj_saved_keys",[])),[ee,$]=a.useState(null),[D,N]=a.useState(!1),[i,v]=a.useState(()=>na("aj_effort",3)),[S,G]=a.useState(()=>na("aj_verbosity","longa")),[J,Y]=a.useState(""),[X,te]=a.useState(""),[re,Q]=a.useState(!1),[T,ne]=a.useState(""),[y,u]=a.useState(""),[R,b]=a.useState(!1),[d,w]=a.useState(null),[se,q]=a.useState(!1),[x,E]=a.useState(()=>Oa().enabled),[F,H]=a.useState(()=>Oa()),[M,oe]=a.useState(!1),[ce,O]=a.useState([]),[he,Ne]=a.useState(!1),[ge,xe]=a.useState(!1),[ue,ve]=a.useState(!1),[_,Z]=a.useState(""),[le,me]=a.useState([]),[ke,be]=a.useState(!1),[Qe,pe]=a.useState(!1),[we,Ge]=a.useState(()=>na("aj_ementas",[])),[Ae,He]=a.useState(new Set),[at,_e]=a.useState(!1),[st,lt]=a.useState(null),[We,ht]=a.useState(""),[Pe,Ve]=a.useState(""),[Be,ot]=a.useState(""),[Ke,rt]=a.useState(""),[et,wt]=a.useState(null),[Ze,ut]=a.useState(()=>na("aj_history",[])),[Ie,bt]=a.useState(()=>na("aj_custom_actions",[])),[ft,Et]=a.useState(!1),[A,W]=a.useState(null),[je,ze]=a.useState(""),[De,Oe]=a.useState(""),[Ye,Me]=a.useState(""),Te=a.useRef(null),Fe=a.useRef(null),Je=a.useRef(null),Le=a.useRef(null),ta=a.useRef(null),kt=a.useRef(null),Mt=a.useRef(null);a.useEffect(()=>{r?localStorage.setItem("aj_api_key",r):localStorage.removeItem("aj_api_key"),c?localStorage.setItem("aj_api_url",c):localStorage.removeItem("aj_api_url"),h?localStorage.setItem("aj_api_model",h):localStorage.removeItem("aj_api_model")},[r,c,h]),a.useEffect(()=>{ia("aj_saved_keys",V)},[V]),a.useEffect(()=>{ia("aj_effort",i)},[i]),a.useEffect(()=>{ia("aj_verbosity",S)},[S]),a.useEffect(()=>{ia("aj_ementas",we)},[we]),a.useEffect(()=>{ia("aj_history",Ze)},[Ze]),a.useEffect(()=>{ia("aj_custom_actions",Ie)},[Ie]),a.useEffect(()=>{(T||y)&&Mt.current?.scrollIntoView({behavior:"smooth",block:"nearest"})},[T,y]),a.useEffect(()=>{kt.current?.scrollIntoView({behavior:"smooth"})},[le,ke]),a.useEffect(()=>()=>{Je.current?.stop()},[]),a.useEffect(()=>{const g=()=>{const ae=window.speechSynthesis?.getVoices()??[];ae.length>0&&O(ae)};return g(),window.speechSynthesis?.addEventListener("voiceschanged",g),()=>window.speechSynthesis?.removeEventListener("voiceschanged",g)},[]);const Ot=g=>{H(ae=>{const de={...ae,...g};return Zs(de),de})},Lt=Cs(r),qt=!!r.trim(),ct=()=>{if(!r.trim()||V.some(de=>de.key===r.trim()))return;const g=Cs(r)||"Custom",ae=C.trim()||g;I(de=>[...de,{id:Date.now().toString(),label:ae,key:r.trim(),url:c,model:h,provider:g}]),L("")},zt=g=>{n(g.key),p(g.url),m(g.model),K(!1),$(null)},Xe=async()=>{const g=r.trim();if(!g){$({ok:!1,msg:"❌ Insira uma chave primeiro."});return}N(!0),$(null);try{const ae=await fetch("/api/legal/process",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:"Teste.",action:"resumir",effortLevel:1,customKey:g,customUrl:c||void 0,customModel:h||void 0})});if(!ae.ok)throw new Error(`HTTP ${ae.status}`);const de=ae.body?.getReader();if(!de)throw new Error("Sem resposta");const Ee=new TextDecoder;let Se="",$e=!1;for(;!$e;){const{done:Re,value:nt}=await de.read();if(Re)break;Se+=Ee.decode(nt,{stream:!0});for(const it of Se.split(`
`))if(it.startsWith("data: "))try{const Ue=JSON.parse(it.slice(6));if(Ue.content||Ue.mode||Ue.done){$e=!0;break}}catch{}}de.cancel(),$({ok:!0,msg:`✅ Chave válida! Provedor: ${Cs(g)||"Custom"}`})}catch(ae){$({ok:!1,msg:`❌ ${ae.message.slice(0,120)}`})}finally{N(!1)}},Gt=a.useCallback(async(g,ae,de,Ee,Se)=>{const $e=await fetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ae),signal:de});if(!$e.ok){const ja=await $e.json().catch(()=>({}));throw new Error(ja.message||`Erro ${$e.status}`)}const Re=$e.body?.getReader();if(!Re)throw new Error("Sem resposta do servidor.");const nt=new TextDecoder;let it="",Ue="";for(;;){const{done:ja,value:Ma}=await Re.read();if(ja)break;it+=nt.decode(Ma,{stream:!0});const $a=it.split(`
`);it=$a.pop()||"";for(const Ua of $a)if(Ua.startsWith("data: "))try{const Ct=JSON.parse(Ua.slice(6));if(Ct.mode==="demo"&&q(!0),Ct.mode==="custom"&&q(!1),Ct.content&&(Ue+=Ct.content,Ee(Ue)),Ct.error)throw new Error(Ct.error)}catch(Ct){if(!(Ct instanceof SyntaxError))throw Ct}}Se(Ue)},[]),Dt=a.useCallback(async(g,ae)=>{const de=J.trim();if(!de){alert("Cole ou importe o texto do documento antes de escolher uma ação.");return}if(R)return;const Ee=we.filter(Re=>Ae.has(Re.id)).map(Re=>`[${Re.titulo} — ${Re.categoria}]
${Re.texto}`).join(`

`),Se=[X.trim(),Ee].filter(Boolean).join(`

`);b(!0),ne(""),u(""),w(ae?"custom_"+g:g),me([]),pe(!1),q(!1);const $e=new AbortController;Te.current=$e;try{await Gt("/api/legal/process",{text:de,action:g,effortLevel:i,verbosity:S,jurisText:Se||void 0,customKey:r.trim()||void 0,customUrl:c.trim()||void 0,customModel:h.trim()||void 0,...ae?{customPrompt:ae}:{}},$e.signal,Re=>u(Re),Re=>{if(Re.trim()){if(ne(Re),x){const Ue=La(Re);Us(Ue,{...F,enabled:!0})}const nt=ae?Ie.find(Ue=>Ue.id===g)?.label||"Ação Custom":Po.find(Ue=>Ue.id===g)?.label||Ro.find(Ue=>Ue.id===g)?.label||g,it={id:Date.now().toString(),acao:nt,inputSnippet:de.substring(0,120),resultado:Re,timestamp:new Date().toLocaleString("pt-BR")};ut(Ue=>[it,...Ue].slice(0,15))}})}catch(Re){if(Re.name==="AbortError")return;ne(`❌ Erro: ${Re.message}`)}finally{b(!1),u(""),Te.current=null}},[J,X,Ae,we,R,x,i,S,r,c,h,Ie,Gt]),Wt=a.useCallback(async()=>{const g=_.trim();if(!g||ke||!T)return;const ae=[...le,{role:"user",content:g}];me(ae),Z(""),be(!0);const de=new AbortController;Fe.current=de;const Ee=[{role:"user",content:`O documento gerado foi:

${T}`},{role:"assistant",content:"Entendido. Estou pronta para refinar."},...le.map(Se=>({role:Se.role,content:Se.content})),{role:"user",content:g}];try{await Gt("/api/legal/refine",{messages:Ee,effortLevel:i,verbosity:S,customKey:r.trim()||void 0,customUrl:c.trim()||void 0,customModel:h.trim()||void 0},de.signal,Se=>me([...ae,{role:"assistant",content:Se}]),Se=>{Se.length>T.length*.5&&!Se.toLowerCase().startsWith("para")&&ne(Se),me([...ae,{role:"assistant",content:Se}])})}catch(Se){Se.name!=="AbortError"&&me([...ae,{role:"assistant",content:`❌ Erro: ${Se.message}`}])}finally{be(!1),Fe.current=null}},[_,ke,T,le,i,S,r,c,h,Gt]),Jt=()=>{Te.current?.abort(),Te.current=null,Fe.current?.abort(),Fe.current=null},va=async g=>{const ae=g.target.files?.[0];if(g.target.value="",!ae)return;const de=ae.name.split(".").pop()?.toLowerCase()||"";if(["pdf","docx","doc","rtf"].includes(de)){ve(!0);try{const Ee=new FormData;Ee.append("files",ae,ae.name);const Se=await fetch("/api/upload/extract-text",{method:"POST",body:Ee});if(!Se.ok)throw new Error((await Se.json().catch(()=>({}))).message||`Erro ${Se.status}`);const Re=(await Se.json()).text||"";if(!Re.trim())throw new Error("Arquivo sem texto legível.");Y(nt=>nt?nt+`

`+Re:Re)}catch(Ee){alert("Erro ao importar: "+Ee.message)}finally{ve(!1)}}else{const Ee=new FileReader;Ee.onload=Se=>{const $e=Se.target?.result;Y(Re=>Re?Re+`

`+$e:$e)},Ee.readAsText(ae,"utf-8")}},aa=async g=>{const ae=g.target.files?.[0];if(g.target.value="",!ae)return;const de=r.trim();if(!de){alert("Para transcrever áudio, insira uma chave Groq ou OpenAI em ⚙️ Configurações.");return}ve(!0);try{const Ee=de.startsWith("gsk_")?"https://api.groq.com/openai/v1/audio/transcriptions":"https://api.openai.com/v1/audio/transcriptions",Se=new FormData;Se.append("file",ae,ae.name),Se.append("model",de.startsWith("gsk_")?"whisper-large-v3":"whisper-1"),Se.append("language","pt"),Se.append("response_format","text");const $e=await fetch(Ee,{method:"POST",headers:{Authorization:`Bearer ${de}`},body:Se});if(!$e.ok)throw new Error((await $e.text()).substring(0,200));const Re=await $e.text();Y(nt=>nt?nt+`

`+Re.trim():Re.trim())}catch(Ee){alert("Erro na transcrição: "+Ee.message)}finally{ve(!1)}},vt=y||T,ps=()=>{if(!vt)return;const g=document.createElement("a");g.href=URL.createObjectURL(new Blob([vt],{type:"text/plain;charset=utf-8"})),g.download=`juridico-${Date.now()}.txt`,g.click()},us=()=>{if(!vt)return;const g=`{\\rtf1\\ansi\\deff0
{\\fonttbl{\\f0 Times New Roman;}}
{\\f0\\fs26
${vt.split(/\n\n+/).map(de=>{const Ee=de.trim();return Ee?Ee===Ee.toUpperCase()&&Ee.length>2&&/[A-Z]/.test(Ee)&&!/^\d/.test(Ee)?`\\pard\\qj\\b ${Ee.replace(/[\\{}]/g,"\\$&")}\\b0\\par\\par`:/^\d+[.\)]\s/.test(Ee)||/^[-–]\s/.test(Ee)?`\\pard\\qj\\li720 ${Ee.replace(/[\\{}]/g,"\\$&")}\\par\\par`:`\\pard\\qj\\fi2268 ${Ee.replace(/[\\{}]/g,"\\$&")}\\par\\par`:""}).join(`
`)}
}}`,ae=document.createElement("a");ae.href=URL.createObjectURL(new Blob([g],{type:"application/rtf"})),ae.download=`juridico-${Date.now()}.rtf`,ae.click()},_a=()=>{vt&&(navigator.clipboard.writeText(vt),xe(!0),setTimeout(()=>xe(!1),2e3))},ms=a.useCallback(()=>{if(he){Je.current?.stop(),Ne(!1);return}const g=window.SpeechRecognition||window.webkitSpeechRecognition;if(!g){alert("Use Chrome ou Edge para ditar por voz.");return}const ae=new g;ae.lang="pt-BR",ae.continuous=!0,ae.interimResults=!0;let de=null,Ee="";const Se=()=>{de&&clearTimeout(de),de=setTimeout(()=>{try{ae.stop()}catch{}Ee.trim()&&Y($e=>$e?$e.trimEnd()+`

`+Ee.trim():Ee.trim())},1800)};ae.onresult=$e=>{let Re="",nt="";for(let it=0;it<$e.results.length;it++)$e.results[it].isFinal?Re+=$e.results[it][0].transcript:nt+=$e.results[it][0].transcript;Ee=Re||nt,Ee&&Se()},ae.onerror=()=>{de&&clearTimeout(de),Je.current=null,Ne(!1)},ae.onend=()=>{de&&clearTimeout(de),Je.current=null,Ne(!1)},Je.current=ae;try{ae.start(),Ne(!0)}catch{Ne(!1)}},[he]),xs=()=>{lt(null),ht(""),Ve(""),ot(""),_e(!0)},sa=g=>{lt(g),ht(g.titulo),Ve(g.categoria),ot(g.texto),_e(!0)},ya=()=>{!We.trim()||!Be.trim()||(Ge(st?g=>g.map(ae=>ae.id===st.id?{...ae,titulo:We,categoria:Pe,texto:Be}:ae):g=>[{id:Date.now().toString(),titulo:We,categoria:Pe,texto:Be,criadoEm:new Date().toLocaleString("pt-BR")},...g]),_e(!1),lt(null))},$t=g=>{Ge(ae=>ae.filter(de=>de.id!==g)),He(ae=>{const de=new Set(ae);return de.delete(g),de})},Ht=g=>He(ae=>{const de=new Set(ae);return de.has(g)?de.delete(g):de.add(g),de}),Ut=we.filter(g=>{const ae=Ke.toLowerCase(),de=!ae||g.titulo.toLowerCase().includes(ae)||g.texto.toLowerCase().includes(ae)||g.categoria.toLowerCase().includes(ae),Ee=!et||g.categoria===et;return de&&Ee}),Qt=[...new Set(we.map(g=>g.categoria).filter(Boolean))],gs=()=>{W(null),ze(""),Oe(""),Me(""),Et(!0)},tt=g=>{W(g),ze(g.label),Oe(g.descricao),Me(g.prompt),Et(!0)},hs=()=>{!je.trim()||!Ye.trim()||(bt(A?g=>g.map(ae=>ae.id===A.id?{...ae,label:je,descricao:De,prompt:Ye}:ae):g=>[...g,{id:Date.now().toString(),label:je,descricao:De,prompt:Ye}]),Et(!1),W(null))},Yt=To[i]||To[3];return e.jsxs("div",{className:"h-[100dvh] flex flex-col bg-[#141c0d] text-gray-200 overflow-hidden",children:[e.jsxs("header",{className:"h-11 flex items-center gap-2 px-3 bg-[#1c2714] border-b border-gray-700/50 shrink-0",children:[e.jsx("button",{onClick:t,className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-400",children:e.jsx(Mo,{size:17})}),e.jsx(Is,{size:15,className:"text-amber-400 shrink-0"}),e.jsx("span",{className:"text-sm font-semibold flex-1 truncate",children:"Assistente Jurídico"}),e.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full border shrink-0 ${qt?"bg-green-900/30 text-green-400 border-green-700/30":"bg-amber-900/30 text-amber-400 border-amber-700/30"}`,children:qt?Lt||"Chave Própria":"Demo ✨"}),e.jsx("button",{onClick:()=>{E(g=>{const ae=!g;return ae||(da(),oe(!1)),ae})},className:`p-1.5 rounded-lg ${x?"text-amber-400 bg-amber-900/20":"text-gray-600 hover:bg-white/5"}`,title:x?"Desativar voz":"Ativar voz",children:x?e.jsx(ss,{size:14}):e.jsx(Vs,{size:14})}),x&&e.jsx("button",{onClick:()=>oe(g=>!g),className:`p-1.5 rounded-lg ${M?"text-amber-300 bg-amber-900/30":"text-gray-600 hover:bg-white/5 hover:text-amber-400"}`,title:"Configurar voz (velocidade, tom, escolher)",children:e.jsx($o,{size:13})}),e.jsx("button",{onClick:()=>{z(g=>!g),K(!1)},className:`p-1.5 rounded-lg ${k?"bg-white/10 text-gray-200":"hover:bg-white/5 text-gray-500"}`,children:e.jsx(za,{size:14})}),e.jsxs("button",{onClick:()=>{K(g=>!g),z(!1)},className:`p-1.5 rounded-lg relative ${U?"bg-white/10 text-gray-200":"hover:bg-white/5 text-gray-500"}`,children:[e.jsx(Uo,{size:14}),V.length>0&&e.jsx("span",{className:"absolute -top-0.5 -right-0.5 text-[9px] bg-amber-600 text-white w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold",children:V.length})]})]}),M&&e.jsxs("div",{className:"border-b border-amber-800/30 bg-[#1a2410] p-3 space-y-3 shrink-0",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Configurações de Voz"}),e.jsx("button",{onClick:()=>oe(!1),className:"p-0.5 rounded text-gray-600 hover:text-gray-400",children:e.jsx(ye,{size:12})})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-[10px] text-gray-500 mb-1 block",children:["Voz (",ce.length," disponíveis)"]}),ce.length===0?e.jsx("p",{className:"text-[11px] text-gray-600 italic",children:"Sem vozes disponíveis neste navegador."}):e.jsxs("div",{className:"max-h-32 overflow-y-auto space-y-0.5 rounded-lg border border-gray-700/40 bg-[#141c0d] p-1",children:[e.jsxs("button",{onClick:()=>Ot({voiceName:""}),className:`w-full text-left px-2 py-1.5 rounded text-[11px] transition-colors ${F.voiceName===""?"bg-amber-900/40 text-amber-300 border border-amber-700/40":"text-gray-400 hover:bg-white/5"}`,children:[e.jsx("span",{className:"font-medium",children:"Automático"}),e.jsx("span",{className:"text-[10px] text-gray-600 ml-1",children:"(melhor voz pt-BR)"})]}),[...ce.filter(g=>g.lang.toLowerCase().startsWith("pt")),...ce.filter(g=>!g.lang.toLowerCase().startsWith("pt"))].map(g=>e.jsxs("button",{onClick:()=>Ot({voiceName:g.name}),className:`w-full text-left px-2 py-1.5 rounded text-[11px] transition-colors ${F.voiceName===g.name?"bg-amber-900/40 text-amber-300 border border-amber-700/40":"text-gray-400 hover:bg-white/5"}`,children:[e.jsx("span",{className:"font-medium truncate block",children:g.name}),e.jsxs("span",{className:"text-[10px] text-gray-600",children:[g.lang," ",g.localService?"· local":"· online"]})]},g.name))]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("label",{className:"text-[10px] text-gray-500",children:"Velocidade"}),e.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[F.rate.toFixed(2),"×"]})]}),e.jsx("input",{type:"range",min:"0.5",max:"2.0",step:"0.05",value:F.rate,onChange:g=>Ot({rate:parseFloat(g.target.value)}),className:"w-full accent-amber-500 h-1.5"}),e.jsxs("div",{className:"flex justify-between text-[9px] text-gray-700 mt-0.5",children:[e.jsx("span",{children:"Lenta"}),e.jsx("span",{children:"Normal"}),e.jsx("span",{children:"Rápida"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("label",{className:"text-[10px] text-gray-500",children:"Tom de voz"}),e.jsx("span",{className:"text-[10px] text-amber-400 font-mono",children:F.pitch.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.5",max:"1.8",step:"0.05",value:F.pitch,onChange:g=>Ot({pitch:parseFloat(g.target.value)}),className:"w-full accent-amber-500 h-1.5"}),e.jsxs("div",{className:"flex justify-between text-[9px] text-gray-700 mt-0.5",children:[e.jsx("span",{children:"Grave"}),e.jsx("span",{children:"Natural"}),e.jsx("span",{children:"Agudo"})]})]}),e.jsx("button",{onClick:()=>{da();const g=new SpeechSynthesisUtterance("Olá! Sou a Jasmim, sua assistente jurídica. Como posso ajudar?");g.lang=F.lang,g.rate=F.rate,g.pitch=F.pitch;const ae=ce.find(de=>de.name===F.voiceName);ae&&(g.voice=ae),window.speechSynthesis?.speak(g)},className:"w-full py-1.5 text-[11px] bg-amber-900/30 border border-amber-700/40 text-amber-400 rounded-lg hover:bg-amber-900/50 transition-colors",children:"▶ Testar voz agora"})]}),k&&e.jsxs("div",{className:"border-b border-gray-700/40 bg-[#1c2714] p-3 space-y-3 shrink-0",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Nível de Esforço"}),e.jsxs("span",{className:`text-[11px] font-semibold ${Yt.color}`,children:[i," — ",Yt.label]})]}),e.jsx("input",{type:"range",min:1,max:5,value:i,onChange:g=>v(Number(g.target.value)),className:"w-full accent-amber-500 h-1.5"}),e.jsxs("div",{className:"flex justify-between text-[9px] text-gray-600 mt-0.5 px-0.5",children:[e.jsx("span",{children:"Rápido"}),e.jsx("span",{children:"Básico"}),e.jsx("span",{children:"Detalhado"}),e.jsx("span",{children:"Profundo"}),e.jsx("span",{children:"Exaustivo"})]}),e.jsx("p",{className:"text-[10px] text-gray-600 mt-1",children:Yt.desc})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1.5",children:"Extensão da Resposta"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>G("curta"),className:`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg border text-[11px] font-medium transition-all ${S==="curta"?"bg-blue-700/30 border-blue-600/50 text-blue-300":"border-gray-700/30 text-gray-600 hover:text-gray-400"}`,children:[e.jsx(xo,{size:12})," Concisa"]}),e.jsxs("button",{onClick:()=>G("longa"),className:`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg border text-[11px] font-medium transition-all ${S==="longa"?"bg-amber-700/30 border-amber-600/50 text-amber-300":"border-gray-700/30 text-gray-600 hover:text-gray-400"}`,children:[e.jsx(go,{size:12})," Completa"]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Chave de API"}),e.jsx("span",{className:"text-[10px] text-amber-400",children:qt?`${Lt||"Custom"} (chave própria)`:"Demo gratuito"})]}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("input",{type:j?"text":"password",value:r,onChange:g=>{n(g.target.value.trim()),$(null)},placeholder:"gsk_..., sk-..., AIza..., pplx-..., xai-...",className:"flex-1 h-8 px-2 text-[11px] font-mono bg-[#141c0d] border border-gray-700/50 rounded-lg text-gray-200 outline-none focus:border-amber-600/60"}),e.jsx("button",{onClick:()=>f(g=>!g),className:"w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-gray-500",children:j?e.jsx(Bo,{size:13}):e.jsx(Ws,{size:13})})]}),r&&e.jsxs("div",{className:"flex gap-1 mt-1",children:[e.jsx("input",{value:c,onChange:g=>p(g.target.value.trim()),placeholder:"URL customizada (opcional)",className:"flex-1 h-7 px-2 text-[10px] font-mono bg-[#141c0d] border border-gray-700/40 rounded text-gray-400 outline-none"}),e.jsx("input",{value:h,onChange:g=>m(g.target.value.trim()),placeholder:"Modelo (opcional)",className:"w-36 h-7 px-2 text-[10px] font-mono bg-[#141c0d] border border-gray-700/40 rounded text-gray-400 outline-none"})]}),r&&e.jsxs("div",{className:"flex gap-1 mt-1 items-center",children:[e.jsx("input",{value:C,onChange:g=>L(g.target.value),placeholder:Lt||"Nome para salvar",className:"flex-1 h-7 px-2 text-[11px] bg-[#141c0d] border border-gray-700/40 rounded text-gray-300 outline-none"}),e.jsxs("button",{onClick:Xe,disabled:D,className:"flex items-center gap-1 px-2 h-7 text-[11px] bg-blue-700/30 border border-blue-600/40 text-blue-300 rounded hover:bg-blue-700/50 disabled:opacity-50 shrink-0",children:[D?e.jsx(qe,{size:11,className:"animate-spin"}):e.jsx(pa,{size:11})," Testar"]}),e.jsxs("button",{onClick:ct,className:"flex items-center gap-1 px-2 h-7 text-[11px] bg-amber-700/30 border border-amber-600/40 text-amber-400 rounded hover:bg-amber-700/50 shrink-0",children:[e.jsx(ua,{size:11})," Salvar"]}),e.jsxs("button",{onClick:()=>{n(""),p(""),m("")},className:"flex items-center gap-1 px-2 h-7 text-[11px] text-red-400 border border-red-700/30 rounded hover:bg-red-900/20 shrink-0",children:[e.jsx(ye,{size:11})," Remover"]})]}),ee&&e.jsx("p",{className:`text-[10px] px-2 py-1 rounded mt-1 ${ee.ok?"text-green-400 bg-green-900/20":"text-red-400 bg-red-900/20"}`,children:ee.msg}),!r&&e.jsx("p",{className:"text-[10px] text-gray-600 mt-1",children:"💡 Sem chave: usa IA do servidor (Demo). Com Groq (gsk_...) ou OpenAI (sk-...): ativa transcrição de áudio."})]})]}),U&&e.jsxs("div",{className:"border-b border-gray-700/40 bg-[#1c2714] p-3 space-y-1.5 shrink-0 max-h-44 overflow-y-auto",children:[e.jsxs("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:["Chaves Salvas (",V.length,")"]}),V.length===0?e.jsx("p",{className:"text-[11px] text-gray-600 py-2 text-center",children:"Nenhuma chave salva."}):V.map(g=>e.jsxs("div",{className:`flex items-center gap-2 p-2 rounded-lg border text-[11px] ${g.key===r?"bg-amber-900/20 border-amber-700/40":"bg-[#141c0d] border-gray-700/30"}`,children:[e.jsxs("button",{onClick:()=>zt(g),className:"flex-1 text-left min-w-0",children:[e.jsx("div",{className:"font-medium text-gray-200 truncate",children:g.label}),e.jsxs("div",{className:"text-[10px] text-gray-500",children:[g.provider," · ",g.key.substring(0,8),"...",g.key.slice(-4)]})]}),g.key===r&&e.jsx("span",{className:"text-[9px] text-amber-400 font-bold shrink-0",children:"ATIVA"}),e.jsx("button",{onClick:()=>I(ae=>ae.filter(de=>de.id!==g.id)),className:"p-1 rounded hover:bg-red-900/20 text-gray-600 hover:text-red-400 shrink-0",children:e.jsx(ye,{size:11})})]},g.id))]}),e.jsx("input",{ref:Le,type:"file",accept:".txt,.md,.pdf,.docx,.doc,.rtf",className:"hidden",onChange:va}),e.jsx("input",{ref:ta,type:"file",accept:"audio/*,.mp3,.mp4,.wav,.m4a,.ogg,.webm,.flac",className:"hidden",onChange:aa}),e.jsx("div",{className:"flex border-b border-gray-700/40 bg-[#1c2714] shrink-0",children:[{id:"processar",label:"Processar",icon:Zt},{id:"ementas",label:`Ementas${we.length?` (${we.length})`:""}`,icon:ho},{id:"historico",label:`Histórico${Ze.length?` (${Ze.length})`:""}`,icon:Os},{id:"acoes",label:`Ações${Ie.length?` (${Ie.length})`:""}`,icon:It}].map(({id:g,label:ae,icon:de})=>e.jsxs("button",{onClick:()=>o(g),className:`flex items-center gap-1 px-3 py-2 text-[11px] font-medium border-b-2 transition-colors ${s===g?"border-amber-500 text-amber-400":"border-transparent text-gray-600 hover:text-gray-400"}`,children:[e.jsx(de,{size:11}),e.jsx("span",{className:"truncate max-w-[80px]",children:ae})]},g))}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[s==="processar"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 border-b border-gray-700/20 bg-[#1a2411]",children:[e.jsxs("span",{className:`text-[10px] font-semibold ${Yt.color}`,children:[e.jsx(os,{size:10,className:"inline mr-0.5"}),Yt.label]}),e.jsx("div",{className:"flex-1",children:e.jsx("input",{type:"range",min:1,max:5,value:i,onChange:g=>v(Number(g.target.value)),className:"w-full accent-amber-500 h-1"})}),e.jsxs("button",{onClick:()=>G(g=>g==="curta"?"longa":"curta"),className:`text-[10px] px-2 py-0.5 rounded-full border transition-colors shrink-0 ${S==="curta"?"bg-blue-900/20 border-blue-700/40 text-blue-400":"bg-amber-900/20 border-amber-700/40 text-amber-400"}`,title:S==="curta"?"Resposta concisa — clique para completa":"Resposta completa — clique para concisa",children:[S==="curta"?e.jsx(xo,{size:10,className:"inline mr-0.5"}):e.jsx(go,{size:10,className:"inline mr-0.5"}),S==="curta"?"Concisa":"Completa"]}),Ae.size>0&&e.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 bg-green-900/30 text-green-400 border border-green-700/30 rounded-full shrink-0",children:[Ae.size," ementa",Ae.size>1?"s":""]})]}),e.jsxs("div",{className:"p-3 border-b border-gray-700/30",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsx("span",{className:"text-[11px] text-gray-500 font-medium",children:"Texto do processo:"}),e.jsxs("div",{className:"flex gap-1 flex-wrap justify-end",children:[e.jsxs("button",{onClick:()=>Le.current?.click(),disabled:ue,className:"flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] border border-gray-700/40 text-gray-500 hover:text-amber-400 hover:border-amber-700/40 disabled:opacity-40",children:[ue?e.jsx(qe,{size:11,className:"animate-spin"}):e.jsx(Hs,{size:11}),ue?"Extraindo...":"PDF/DOCX"]}),e.jsxs("button",{onClick:()=>ta.current?.click(),disabled:ue,className:"flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] border border-gray-700/40 text-gray-500 hover:text-amber-400 hover:border-amber-700/40 disabled:opacity-40",children:[ue?e.jsx(qe,{size:11,className:"animate-spin"}):e.jsx(qr,{size:11}),"Áudio"]}),e.jsx("button",{onClick:ms,className:`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] transition-all ${he?"bg-red-600 text-white animate-pulse":"border border-gray-700/40 text-gray-500 hover:text-amber-400 hover:border-amber-700/40"}`,children:he?e.jsxs(e.Fragment,{children:[e.jsx(Gs,{size:11})," Parar"]}):e.jsxs(e.Fragment,{children:[e.jsx(fa,{size:11})," Ditar"]})}),e.jsx("button",{onClick:()=>Y(""),disabled:!J,className:"px-2 py-1 rounded-lg text-[11px] border border-gray-700/40 text-gray-600 hover:text-red-400 disabled:opacity-30",children:e.jsx(dt,{size:11})})]})]}),e.jsx("textarea",{value:J,onChange:g=>Y(g.target.value),placeholder:"Cole o texto, importe PDF/DOCX/TXT, ou use áudio/voz...",className:"w-full h-28 resize-none bg-[#1c2714] border border-gray-700/40 rounded-xl px-3 py-2.5 text-[12px] text-gray-200 placeholder-gray-600 outline-none focus:border-amber-600/40 leading-relaxed"})]}),e.jsxs("div",{className:"border-b border-gray-700/30",children:[e.jsxs("button",{onClick:()=>Q(g=>!g),className:"w-full flex items-center justify-between px-3 py-2 text-[11px] text-gray-500 hover:text-amber-400 transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ps,{size:12,className:"text-amber-600"}),e.jsx("span",{className:"font-medium",children:"Jurisprudência manual (opcional)"}),X&&e.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 bg-amber-900/30 text-amber-500 rounded-full border border-amber-700/30",children:[X.split(`
`).filter(g=>g.trim()).length,"L"]}),Ae.size>0&&e.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 bg-green-900/30 text-green-500 rounded-full border border-green-700/30",children:[Ae.size," ementa",Ae.size>1?"s":""," selecionada",Ae.size>1?"s":""]})]}),re?e.jsx(Do,{size:13}):e.jsx(ba,{size:13})]}),re&&e.jsxs("div",{className:"px-3 pb-3 space-y-1.5",children:[e.jsx("p",{className:"text-[10px] text-gray-600",children:"Cole ementas ou precedentes. A Jamile vai citá-los literalmente no documento."}),e.jsx("textarea",{value:X,onChange:g=>te(g.target.value),placeholder:"Cole as ementas ou precedentes aqui...",className:"w-full h-24 resize-none bg-[#1c2714] border border-amber-800/30 rounded-xl px-3 py-2 text-[12px] text-gray-200 placeholder-gray-600 outline-none focus:border-amber-600/40 leading-relaxed"}),X&&e.jsxs("button",{onClick:()=>te(""),className:"text-[10px] text-gray-600 hover:text-red-400 flex items-center gap-1",children:[e.jsx(dt,{size:10})," Limpar"]})]})]}),e.jsxs("div",{className:"px-3 pt-3 pb-2",children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-widest mb-2",children:"Modos:"}),e.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:Ro.map(g=>e.jsxs("button",{onClick:()=>Dt(g.id),disabled:R,className:`flex items-center justify-center py-2.5 px-2 rounded-xl border text-[11px] font-medium transition-all active:scale-95 disabled:opacity-40 ${g.color}`,children:[R&&d===g.id?e.jsx(qe,{size:12,className:"animate-spin mr-1"}):null,g.label]},g.id))})]}),e.jsxs("div",{className:"px-3 pb-2",children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-widest mb-2",children:"Ações:"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:Po.map(g=>e.jsxs("button",{onClick:()=>Dt(g.id),disabled:R,className:`py-2 px-3 rounded-xl border text-[11px] font-medium transition-all active:scale-95 disabled:opacity-40 ${d===g.id&&(R||T)?"bg-amber-800/30 border-amber-600/50 text-amber-300":"bg-[#1c2714] border-gray-700/40 text-gray-400 hover:border-amber-700/40 hover:text-amber-400"}`,children:[R&&d===g.id?e.jsx(qe,{size:11,className:"animate-spin inline mr-1"}):null,g.label]},g.id))})]}),Ie.length>0&&e.jsxs("div",{className:"px-3 pb-3",children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-widest mb-2",children:"Ações Personalizadas:"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:Ie.map(g=>e.jsxs("button",{onClick:()=>Dt("custom",g.prompt),disabled:R,className:`py-2 px-3 rounded-xl border text-[11px] font-medium transition-all active:scale-95 disabled:opacity-40 ${d==="custom_custom"&&(R||T)?"bg-purple-800/30 border-purple-600/50 text-purple-300":"bg-[#252f1a] border-purple-700/30 text-purple-400 hover:border-purple-600/50 hover:text-purple-300"}`,title:g.descricao,children:[e.jsx(It,{size:11,className:"inline mr-1"}),g.label]},g.id))})]}),(R||ke)&&e.jsx("div",{className:"px-3 pb-2",children:e.jsxs("button",{onClick:Jt,className:"w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-red-900/20 border border-red-700/30 text-red-400 text-[11px] hover:bg-red-900/30 transition-colors",children:[e.jsx(Xa,{size:13})," Parar"]})}),vt&&e.jsxs("div",{className:"px-3 pb-4",ref:Mt,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[10px] text-gray-500 uppercase tracking-widest",children:"Resultado"}),se&&e.jsx("span",{className:"text-[9px] px-1.5 py-0.5 bg-amber-900/20 border border-amber-700/30 text-amber-500 rounded-full",children:"Demo"}),R&&e.jsx(qe,{size:11,className:"animate-spin text-amber-500"})]}),e.jsxs("div",{className:"flex gap-1",children:[e.jsxs("button",{onClick:_a,className:`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] border ${ge?"border-green-600/40 text-green-400 bg-green-900/20":"border-gray-700/40 text-gray-500 hover:text-amber-400 hover:border-amber-700/40"}`,children:[ge?e.jsx(pa,{size:11}):e.jsx(Kt,{size:11})," ",ge?"Copiado!":"Copiar"]}),e.jsxs("button",{onClick:ps,className:"flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] border border-gray-700/40 text-gray-500 hover:text-amber-400 hover:border-amber-700/40",children:[e.jsx(pt,{size:11})," TXT"]}),e.jsxs("button",{onClick:us,className:"flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] border border-gray-700/40 text-gray-500 hover:text-amber-400 hover:border-amber-700/40",children:[e.jsx(pt,{size:11})," RTF"]})]})]}),e.jsx("div",{className:"bg-[#1c2714] border border-gray-700/30 rounded-xl p-4 overflow-x-auto",children:e.jsx(Gi,{text:vt})}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("button",{onClick:()=>pe(g=>!g),disabled:!T,className:"flex items-center gap-2 text-[11px] text-gray-500 hover:text-amber-400 transition-colors disabled:opacity-30",children:[e.jsx(Pa,{size:13}),Qe?"Fechar":"Refinar com Jamile",le.length>0&&e.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 bg-amber-900/30 text-amber-500 rounded-full",children:[Math.floor(le.length/2)," ajuste",le.length!==2?"s":""]})]}),Qe&&e.jsxs("div",{className:"mt-2 space-y-2",children:[le.length>0&&e.jsxs("div",{className:"space-y-2 max-h-56 overflow-y-auto",children:[le.map((g,ae)=>e.jsxs("div",{className:`rounded-xl px-3 py-2 text-[12px] leading-relaxed ${g.role==="user"?"bg-amber-900/20 border border-amber-800/30 text-amber-200 ml-4":"bg-[#1c2714] border border-gray-700/30 text-gray-300 mr-4"}`,children:[e.jsx("div",{className:"text-[10px] font-bold mb-1 opacity-60",children:g.role==="user"?"Você":"Jamile"}),g.content.length>300?e.jsxs("details",{children:[e.jsx("summary",{className:"cursor-pointer text-amber-400 text-[11px]",children:"Ver resposta..."}),e.jsx("div",{className:"mt-2 whitespace-pre-wrap",children:g.content})]}):e.jsx("div",{className:"whitespace-pre-wrap",children:g.content})]},ae)),ke&&e.jsxs("div",{className:"bg-[#1c2714] border border-gray-700/30 rounded-xl px-3 py-2 flex items-center gap-2 mr-4",children:[e.jsx(qe,{size:12,className:"animate-spin text-amber-500"}),e.jsx("span",{className:"text-[11px] text-gray-500",children:"Jamile está respondendo..."})]}),e.jsx("div",{ref:kt})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("textarea",{value:_,onChange:g=>Z(g.target.value),onKeyDown:g=>{g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),Wt())},placeholder:"Ex: Adicione mais fundamentação... / Inclua tutela de urgência... / Reformule o início...",rows:2,className:"flex-1 resize-none bg-[#1c2714] border border-amber-800/30 rounded-xl px-3 py-2 text-[12px] text-gray-200 placeholder-gray-600 outline-none focus:border-amber-600/50 leading-relaxed"}),e.jsx("button",{onClick:Wt,disabled:!_.trim()||ke,className:"self-end px-3 py-2 bg-amber-700/40 border border-amber-600/40 text-amber-300 rounded-xl hover:bg-amber-700/60 disabled:opacity-30 transition-colors",children:ke?e.jsx(qe,{size:16,className:"animate-spin"}):e.jsx(rs,{size:16})})]})]})]})]}),e.jsx("div",{className:"h-6"})]}),s==="ementas"&&e.jsxs("div",{className:"p-3 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-sm font-semibold text-amber-400 flex items-center gap-2",children:[e.jsx(ho,{size:15})," Biblioteca de Ementas"]}),e.jsx("p",{className:"text-[10px] text-gray-600 mt-0.5",children:"Salve jurisprudência para incluir automaticamente nos documentos."})]}),e.jsxs("button",{onClick:xs,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-700/30 border border-amber-600/40 text-amber-400 text-[12px] hover:bg-amber-700/50 transition-colors",children:[e.jsx(Bt,{size:13})," Nova Ementa"]})]}),at&&e.jsxs("div",{className:"bg-[#1c2714] border border-amber-700/30 rounded-xl p-3 space-y-2",children:[e.jsx("h3",{className:"text-[12px] font-semibold text-amber-400",children:st?"Editar Ementa":"Nova Ementa"}),e.jsx("input",{value:We,onChange:g=>ht(g.target.value),placeholder:"Título (ex: STJ — Responsabilidade civil médica)",className:"w-full h-8 px-2 text-[12px] bg-[#141c0d] border border-gray-700/40 rounded-lg text-gray-200 outline-none focus:border-amber-600/50"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{value:Pe,onChange:g=>Ve(g.target.value),placeholder:"Categoria (ex: STJ, STF, TRF1...)",list:"cats-datalist",className:"flex-1 h-8 px-2 text-[12px] bg-[#141c0d] border border-gray-700/40 rounded-lg text-gray-200 outline-none focus:border-amber-600/50"}),e.jsx("datalist",{id:"cats-datalist",children:Fi.map(g=>e.jsx("option",{value:g},g))})]}),e.jsx("textarea",{value:Be,onChange:g=>ot(g.target.value),placeholder:"Cole a ementa completa aqui...",rows:5,className:"w-full resize-none bg-[#141c0d] border border-gray-700/40 rounded-lg px-3 py-2 text-[12px] text-gray-200 placeholder-gray-600 outline-none focus:border-amber-600/50 leading-relaxed"}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>{_e(!1),lt(null)},className:"px-3 py-1.5 text-[12px] border border-gray-700/40 text-gray-500 rounded-lg hover:text-gray-300",children:"Cancelar"}),e.jsxs("button",{onClick:ya,disabled:!We.trim()||!Be.trim(),className:"px-3 py-1.5 text-[12px] bg-amber-700/40 border border-amber-600/50 text-amber-300 rounded-lg hover:bg-amber-700/60 disabled:opacity-40",children:[e.jsx(ua,{size:12,className:"inline mr-1"})," Salvar"]})]})]}),we.length>0&&e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx(ga,{size:12,className:"absolute left-2.5 top-2 text-gray-600"}),e.jsx("input",{value:Ke,onChange:g=>rt(g.target.value),placeholder:"Buscar ementas...",className:"w-full h-7 pl-7 pr-2 text-[11px] bg-[#1c2714] border border-gray-700/40 rounded-lg text-gray-300 outline-none focus:border-amber-600/40"})]}),Qt.length>0&&e.jsxs("select",{value:et||"",onChange:g=>wt(g.target.value||null),className:"h-7 px-2 text-[11px] bg-[#1c2714] border border-gray-700/40 rounded-lg text-gray-400 outline-none",children:[e.jsx("option",{value:"",children:"Todos"}),Qt.map(g=>e.jsx("option",{value:g,children:g},g))]})]}),Ut.length===0?e.jsx("div",{className:"text-center py-8 text-gray-600 text-[12px]",children:we.length===0?'Nenhuma ementa salva. Clique em "Nova Ementa" para começar.':"Nenhum resultado para a busca."}):Ut.map(g=>e.jsx("div",{className:`rounded-xl border p-3 space-y-2 transition-all ${Ae.has(g.id)?"border-green-600/50 bg-green-900/10":"border-gray-700/40 bg-[#1c2714]"}`,children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("button",{onClick:()=>Ht(g.id),className:`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${Ae.has(g.id)?"bg-green-600 border-green-500":"border-gray-600 hover:border-green-500"}`,children:Ae.has(g.id)&&e.jsx(pa,{size:10,className:"text-white"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("span",{className:"text-[12px] font-semibold text-gray-200 truncate",children:g.titulo}),g.categoria&&e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 bg-blue-900/30 text-blue-400 border border-blue-700/30 rounded-full shrink-0",children:g.categoria})]}),e.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5 line-clamp-2",children:g.texto})]}),e.jsxs("div",{className:"flex gap-1 shrink-0",children:[e.jsx("button",{onClick:()=>sa(g),className:"p-1 rounded hover:bg-white/5 text-gray-600 hover:text-amber-400",children:e.jsx(bo,{size:12})}),e.jsx("button",{onClick:()=>$t(g.id),className:"p-1 rounded hover:bg-red-900/20 text-gray-600 hover:text-red-400",children:e.jsx(dt,{size:12})})]})]})},g.id)),Ae.size>0&&e.jsx("div",{className:"sticky bottom-0 bg-[#141c0d] border-t border-green-700/30 p-3",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-[11px] text-green-400",children:[Ae.size," ementa",Ae.size>1?"s":""," selecionada",Ae.size>1?"s":""," — serão incluídas no próximo processamento"]}),e.jsxs("button",{onClick:()=>He(new Set),className:"text-[11px] text-gray-500 hover:text-red-400 flex items-center gap-1",children:[e.jsx(ye,{size:11})," Limpar"]})]})})]}),s==="historico"&&e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-sm font-semibold text-amber-400 flex items-center gap-2",children:[e.jsx(Os,{size:15})," Histórico"]}),Ze.length>0&&e.jsxs("button",{onClick:()=>ut([]),className:"text-[11px] text-gray-600 hover:text-red-400 flex items-center gap-1",children:[e.jsx(dt,{size:12})," Limpar"]})]}),Ze.length===0?e.jsx("div",{className:"text-center py-8 text-gray-600 text-[12px]",children:"Nenhum documento gerado ainda."}):Ze.map(g=>e.jsxs("div",{className:"bg-[#1c2714] border border-gray-700/40 rounded-xl p-3 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[11px] font-semibold text-amber-400",children:g.acao}),e.jsx("span",{className:"text-[10px] text-gray-600",children:g.timestamp})]}),e.jsxs("p",{className:"text-[11px] text-gray-500 truncate",children:[g.inputSnippet,"..."]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>{ne(g.resultado),o("processar")},className:"flex items-center gap-1 px-2 py-1 text-[11px] bg-amber-700/20 border border-amber-700/30 text-amber-400 rounded-lg hover:bg-amber-700/30",children:[e.jsx(Zt,{size:11})," Restaurar"]}),e.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(g.resultado)},className:"flex items-center gap-1 px-2 py-1 text-[11px] border border-gray-700/40 text-gray-500 rounded-lg hover:text-amber-400 hover:border-amber-700/40",children:[e.jsx(Kt,{size:11})," Copiar"]}),e.jsx("button",{onClick:()=>ut(ae=>ae.filter(de=>de.id!==g.id)),className:"p-1 text-gray-600 hover:text-red-400 rounded",children:e.jsx(dt,{size:12})})]}),e.jsxs("details",{children:[e.jsx("summary",{className:"text-[10px] text-gray-600 cursor-pointer hover:text-amber-400",children:"Ver resultado..."}),e.jsxs("div",{className:"mt-2 text-[11px] text-gray-400 whitespace-pre-wrap max-h-40 overflow-y-auto leading-relaxed border-t border-gray-700/30 pt-2",children:[g.resultado.substring(0,800),g.resultado.length>800?"...":""]})]})]},g.id))]}),s==="acoes"&&e.jsxs("div",{className:"p-3 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-sm font-semibold text-amber-400 flex items-center gap-2",children:[e.jsx(It,{size:15})," Ações Personalizadas"]}),e.jsx("p",{className:"text-[10px] text-gray-600 mt-0.5",children:"Crie instruções personalizadas para a IA. Aparecem na aba Processar."})]}),e.jsxs("button",{onClick:gs,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-700/30 border border-purple-600/40 text-purple-400 text-[12px] hover:bg-purple-700/50 transition-colors",children:[e.jsx(Bt,{size:13})," Nova Ação"]})]}),ft&&e.jsxs("div",{className:"bg-[#1c2714] border border-purple-700/30 rounded-xl p-3 space-y-2",children:[e.jsx("h3",{className:"text-[12px] font-semibold text-purple-400",children:A?"Editar Ação":"Nova Ação"}),e.jsx("input",{value:je,onChange:g=>ze(g.target.value),placeholder:"Nome da ação (ex: Petição Inicial Trabalhista)",className:"w-full h-8 px-2 text-[12px] bg-[#141c0d] border border-gray-700/40 rounded-lg text-gray-200 outline-none focus:border-purple-600/50"}),e.jsx("input",{value:De,onChange:g=>Oe(g.target.value),placeholder:"Descrição curta (opcional)",className:"w-full h-8 px-2 text-[12px] bg-[#141c0d] border border-gray-700/40 rounded-lg text-gray-200 outline-none focus:border-purple-600/50"}),e.jsx("textarea",{value:Ye,onChange:g=>Me(g.target.value),placeholder:"Instrução para a IA. O texto do documento será adicionado automaticamente após. Ex: Elabore uma petição inicial trabalhista com base no seguinte caso, incluindo todos os pedidos cabíveis, fundamentação legal e jurisprudência pertinente...",rows:5,className:"w-full resize-none bg-[#141c0d] border border-gray-700/40 rounded-lg px-3 py-2 text-[12px] text-gray-200 placeholder-gray-600 outline-none focus:border-purple-600/50 leading-relaxed"}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>{Et(!1),W(null)},className:"px-3 py-1.5 text-[12px] border border-gray-700/40 text-gray-500 rounded-lg hover:text-gray-300",children:"Cancelar"}),e.jsxs("button",{onClick:hs,disabled:!je.trim()||!Ye.trim(),className:"px-3 py-1.5 text-[12px] bg-purple-700/40 border border-purple-600/50 text-purple-300 rounded-lg hover:bg-purple-700/60 disabled:opacity-40",children:[e.jsx(ua,{size:12,className:"inline mr-1"})," Salvar"]})]})]}),Ie.length===0&&!ft?e.jsxs("div",{className:"text-center py-8 text-gray-600 text-[12px] space-y-2",children:[e.jsx(It,{size:24,className:"mx-auto text-gray-700"}),e.jsx("p",{children:"Nenhuma ação personalizada."}),e.jsx("p",{className:"text-[11px]",children:"Crie ações com suas próprias instruções — petição inicial específica, contrato, parecer jurídico, etc."})]}):Ie.map(g=>e.jsxs("div",{className:"bg-[#1c2714] border border-purple-700/20 rounded-xl p-3 space-y-1.5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[12px] font-semibold text-purple-300",children:g.label}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("button",{onClick:()=>tt(g),className:"p-1 rounded hover:bg-white/5 text-gray-600 hover:text-amber-400",children:e.jsx(bo,{size:12})}),e.jsx("button",{onClick:()=>bt(ae=>ae.filter(de=>de.id!==g.id)),className:"p-1 rounded hover:bg-red-900/20 text-gray-600 hover:text-red-400",children:e.jsx(dt,{size:12})})]})]}),g.descricao&&e.jsx("p",{className:"text-[11px] text-gray-500",children:g.descricao}),e.jsxs("details",{children:[e.jsx("summary",{className:"text-[10px] text-gray-600 cursor-pointer hover:text-purple-400",children:"Ver prompt..."}),e.jsx("p",{className:"text-[11px] text-gray-400 mt-1 whitespace-pre-wrap leading-relaxed border-t border-gray-700/30 pt-2",children:g.prompt})]}),e.jsxs("button",{onClick:()=>{o("processar"),setTimeout(()=>Dt("custom",g.prompt),100)},disabled:!J.trim(),className:"flex items-center gap-1 px-2 py-1 text-[11px] bg-purple-700/20 border border-purple-700/30 text-purple-400 rounded-lg hover:bg-purple-700/30 disabled:opacity-30 disabled:cursor-not-allowed",title:J.trim()?"":"Cole o texto na aba Processar primeiro",children:[e.jsx(Zt,{size:11})," Executar agora"]})]},g.id))]})]})]})}const yt=new Gr;function Vi(){const[t,s]=a.useState(fo),[o,r]=a.useState(null),[n,c]=a.useState(!1),[p,h]=a.useState(!1),[m,j]=a.useState(()=>localStorage.getItem("sk-light-mode")==="1");a.useEffect(()=>{localStorage.setItem("sk-light-mode",m?"1":"0")},[m]);const f=a.useRef(null);a.useEffect(()=>{const N=fo();s(N);const i=en();if(i){const v=N.find(S=>S.id===i);v&&Object.keys(v.files).length>0&&(yt.clear(),yt.fromJSON(v.files),r(v))}},[]);const k=a.useCallback((N,i)=>{const v={...N,name:i||N.name,files:yt.toJSON(),updatedAt:Date.now()};return r(v),s(S=>{const G=Ns(S,v);return ra(G),G}),v},[]);a.useEffect(()=>{if(!o)return;const N=()=>k(o),i=yt.onChange(N),v=setInterval(N,8e3);return()=>{i(),clearInterval(v)}},[o,k]);const z=a.useCallback((N,i)=>{const v=tn(i,N);yt.clear(),yt.fromJSON(N),r(v),Ga(v.id),s(S=>{const G=[v,...S];return ra(G),G})},[]),U=a.useCallback(N=>{r(i=>{if(i){const v={...i,files:yt.toJSON(),updatedAt:Date.now()};s(S=>{const G=Ns(S,v);return ra(G),G})}return i}),yt.clear(),yt.fromJSON(N.files),r(N),Ga(N.id)},[]),K=a.useCallback(()=>{r(null),Ga(null),yt.clear()},[]),C=a.useCallback(()=>f.current?.click(),[]),L=a.useCallback(async N=>{const i=N.target.files?.[0];if(i){try{const v=await Ho(i),S=Object.keys(v).length;if(S===0){alert(`Nenhum arquivo de código encontrado no ZIP.

Possíveis motivos:
• O ZIP contém apenas imagens ou arquivos binários
• Os arquivos estão em formato que não pode ser lido
• O ZIP está vazio ou corrompido`);return}z(v,i.name.replace(/\.(zip|tar\.gz|tgz|tar)$/i,"")),setTimeout(()=>{alert(`✓ ${S} arquivo(s) importado(s) com sucesso!

Node_modules, arquivos binários e pastas de build foram ignorados automaticamente para manter o projeto organizado.

Abra a Jasmim (✨) para pedir ajuda para entender ou modificar o projeto.`)},800)}catch(v){alert(`Erro ao importar: ${v.message}`)}N.target.value=""}},[z]),V=a.useCallback(N=>{s(i=>{const v=i.filter(S=>S.id!==N);return ra(v),v})},[]),I=a.useCallback(N=>{const i=an(N);s(v=>{const S=[i,...v];return ra(S),S})},[]),ee=a.useCallback(N=>{o&&k(o,N)},[o,k]),$=e.jsx("button",{onClick:()=>j(N=>!N),style:{position:"fixed",top:8,right:8,zIndex:99999,width:26,height:26,borderRadius:"50%",background:m?"#1c2714":"#e8f5e0",border:m?"1px solid #4a7c3f":"1px solid #6ab04c",fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 1px 6px rgba(0,0,0,0.25)",opacity:.85},title:m?"Modo escuro":"Modo claro",children:m?"🌙":"☀️"}),D=m?{filter:"invert(1) hue-rotate(180deg)",minHeight:"100dvh"}:{minHeight:"100dvh"};return n?e.jsxs("div",{style:D,children:[$,e.jsx(Ui,{onBack:()=>c(!1)})]}):p?e.jsxs("div",{style:D,children:[$,e.jsx(Hi,{onBack:()=>h(!1)})]}):o?e.jsxs("div",{style:D,children:[$,e.jsx(Di,{vfs:yt,projectName:o.name,onNewProject:K,onSaveProject:ee,onOpenCampoLivre:()=>c(!0),onOpenAssistenteJuridico:()=>h(!0),onBackToProjects:()=>{if(o){const N={...o,files:yt.toJSON(),updatedAt:Date.now()};s(i=>{const v=Ns(i,N);return ra(v),v})}r(null),Ga(null)}})]}):e.jsxs("div",{style:D,children:[$,e.jsx("input",{ref:f,type:"file",accept:".zip,.tar,.tar.gz,.tgz",onChange:L,className:"hidden"}),e.jsx(Nn,{projects:t,onSelect:N=>z(N.files,N.name),onOpenProject:U,onImportZip:C,onCreateFromAI:(N,i)=>z(N,i),onDeleteProject:V,onDuplicateProject:I,onOpenCampoLivre:()=>c(!0),onOpenAssistenteJuridico:()=>h(!0)})]})}ur.createRoot(document.getElementById("root")).render(e.jsx(Vi,{}));
