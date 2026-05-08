# Manual Completo — SK Code Editor
**Versão atual · Saulo Kenji · Maio 2026**

---

## O que é o SK Code Editor?

O SK Code Editor é um ambiente de desenvolvimento completo que roda no seu navegador ou celular — sem precisar instalar nada no computador. Ele foi criado especialmente para você, Saulo, levando em conta que você usa voz para digitar e precisa de uma ferramenta que funcione de forma autônoma e inteligente.

**Destaques:**
- Funciona 100% no navegador (celular ou computador)
- Pode ser instalado como app (PWA) no celular
- Assistente de IA integrada chamada **Jasmim**
- Integração completa com GitHub
- Publicação gratuita via GitHub Pages
- Geração de APK Android via PWABuilder
- Ferramentas jurídicas (Assistente Jamile)
- Funciona sem internet para arquivos já abertos (modo offline)

---

## Tela Inicial — Seus Projetos

Quando você abre o SK Code Editor, vê a tela de projetos com três abas:

### Aba TUDO
Lista todos os seus projetos salvos no dispositivo. Cada projeto mostra:
- Nome e data da última modificação
- Número de arquivos
- Clique no projeto para ver as opções: **Abrir**, **Duplicar**, **Baixar ZIP**, **Excluir**

**Ações rápidas no topo:**
- **Importar ZIP** — abre um projeto que você baixou antes
- **Novo Projeto** — vai para a aba Criar

### Aba RECENTE
Mostra só os projetos dos últimos 7 dias.

### Aba CRIAR
Opções para criar ou importar projetos:

| Opção | O que faz |
|---|---|
| Criar projeto vazio | Abre o editor com arquivos em branco |
| **Clonar Repositório Público** | Baixa qualquer repositório público do GitHub sem precisar de token |
| Criar a partir de Modelo | Escolhe entre templates prontos (React, Express, etc.) |
| Criar com IA | Descreve o projeto em português e a IA gera todos os arquivos |
| Importar do ZIP | Abre um arquivo .zip que estava salvo no seu dispositivo |

---

## Clonar Repositório Público (novo recurso)

Você pode baixar qualquer projeto público do GitHub direto na tela inicial, **sem precisar do seu token**:

1. Vá em **CRIAR → Clonar Repositório Público**
2. Cole o link do repositório (ex: `github.com/usuario/projeto`)
3. Clique em **Baixar Repositório**
4. O projeto abre automaticamente no editor

> **Atenção:** Funciona apenas para repositórios públicos. Para repositórios privados (seus), use o painel GitHub (🌿) dentro do editor, que usa seu token.

---

## Dentro do Editor

### Barra superior (ícones)
Da esquerda para a direita:

| Ícone | Nome | Função |
|---|---|---|
| ← | Voltar | Volta para a tela de projetos |
| 📁 | Arquivos | Painel com todos os arquivos do projeto |
| ✨ | Jasmim (IA) | Abre o chat com a assistente de IA |
| 🌿 | GitHub | Painel de integração com GitHub |
| 💾 | Checkpoint | Salva um ponto de restauração do projeto |
| ▶ | Terminal | Abre o terminal de comandos |
| 👁 | Preview | Visualiza o resultado do projeto no navegador |
| ⋮ | Menu | Opções adicionais (banco de dados, configurações) |

### Painel de Arquivos
- Mostra a estrutura de pastas e arquivos
- Clique em um arquivo para abrir no editor
- Segure (pressão longa) para renomear ou excluir
- O botão **+** cria novo arquivo ou pasta

### Editor Monaco
- O mesmo editor do VS Code, adaptado para mobile
- Realce de sintaxe para mais de 50 linguagens
- Autocompletar básico
- Undo/Redo com os botões da barra

---

## Jasmim — Sua Assistente de IA

### Como usar
1. Toque no ícone ✨ para abrir o chat
2. Fale ou escreva o que precisa
3. Ela gera o código ou os arquivos necessários
4. Clique **Aplicar** nos blocos de código para salvar no projeto

### O que ela sabe fazer
- Criar projetos do zero (React, Vue, Express, Python, etc.)
- Corrigir erros de código
- Explicar o que um código faz
- Criar APIs completas
- Configurar banco de dados (PostgreSQL/Neon)
- Criar interfaces visuais
- Ajudar com qualquer dúvida técnica

### Pasta `_jasmim/` — gerada automaticamente
A cada vez que a Jasmim faz alterações no seu projeto, ela cria ou atualiza uma pasta `_jasmim/` com:
- **RESUMO.md** — o que foi feito e por que
- **PROXIMOS_PASSOS.md** — o que você faz agora, passo a passo
- **COMANDOS_PARA_RODAR.md** — comandos para executar no StackBlitz (quando o terminal não funciona)

### Quando o terminal não executa
O terminal dentro do SK Code Editor requer um servidor pago (Replit). Se você estiver usando a versão gratuita (GitHub Pages), o terminal não vai rodar comandos.

**Fluxo alternativo quando o terminal não funciona:**
1. A Jasmim cria os arquivos normalmente
2. Você envia para o GitHub (painel 🌿 → Enviar)
3. Após o push, clique em **StackBlitz — Terminal completo**
4. No StackBlitz, o terminal funciona de graça
5. Execute os comandos e cole o resultado de volta para a Jasmim

### Configurar a IA (Jasmim)
A Jasmim usa sua própria chave de IA. Para configurar:
1. Abra o chat (✨)
2. Toque no ícone ⚙️ (engrenagem)
3. Escolha o provedor: **OpenAI**, **Anthropic (Claude)**, **Google (Gemini)** ou **IA Embutida (gratuita, cortesia)**
4. Cole sua chave de API
5. Salve

> A **IA Embutida** é gratuita mas com limite de uso. Para projetos grandes, recomendo usar sua própria chave do ChatGPT ou Claude.

---

## GitHub — Integração Completa

### Configurar o token
1. Abra o painel 🌿 (GitHub)
2. Cole seu **Personal Access Token** do GitHub
3. O token precisa das permissões: `repo`, `workflow`

**Como criar o token:**
1. Acesse github.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Clique em **Generate new token**
3. Marque: `repo` (tudo), `workflow`
4. Copie o token gerado (guarde em local seguro!)

### Enviar projeto para o GitHub
1. Painel 🌿 → **Enviar para repositório**
2. Se for a primeira vez: escolha **Criar novo repositório**
3. Dê um nome ao repositório
4. Clique em **Enviar**

Após o push, aparecem 3 botões:
- **VS Code Web** — abre o projeto no editor online da Microsoft
- **StackBlitz** — abre com terminal Node.js completo (gratuito)
- **Gitpod** — ambiente de desenvolvimento completo na nuvem

### Importar projeto do GitHub
1. Painel 🌿 → **Importar repositório**
2. Escolha na lista de repositórios
3. Clique em importar

---

## Publicar no GitHub Pages (Grátis)

O GitHub Pages hospeda seu projeto de graça, com URL própria.

### Como publicar
1. Painel 🌿 → **Publicar no GitHub Pages — Grátis**
2. Aguarde o processo (leva 1-3 minutos)
3. Ao terminar, você recebe a URL do seu app (ex: `seuusuario.github.io/seuprojeto`)

### Após publicar — Gerar APK Android
Após a publicação no GitHub Pages, aparece o botão:

**"Gerar APK — PWABuilder"**

Clique nele para ir ao PWABuilder com a URL do seu app já preenchida. Lá você:
1. Clica em **Package for stores**
2. Escolhe **Android**
3. Baixa o APK assinado
4. Instala no seu celular

> O PWABuilder é gratuito e não precisa de conta na Play Store.

---

## Terminal

O terminal permite executar comandos como `npm install`, `node index.js`, etc.

**Limitações:**
- Funciona apenas quando o SK Code Editor está rodando em servidor ativo (Replit com conta paga)
- Na versão hospedada no GitHub Pages (gratuita), o terminal não executa comandos
- Nesse caso, use o **StackBlitz** como alternativa (veja seção Jasmim acima)

---

## Banco de Dados

O SK Code Editor suporta conexão com banco de dados PostgreSQL (Neon):

1. Menu ⋮ → **Banco de Dados**
2. Cole a URL de conexão do Neon (gratuito em neon.tech)
3. A Jasmim pode criar tabelas, schemas e consultas automaticamente

---

## Ferramentas Jurídicas

### Assistente Jamile
Especialista em direito brasileiro. Acesse pelo botão **Jurídico** na tela inicial.

Pode ajudar com:
- Análise de contratos e documentos
- Pesquisa de jurisprudência
- Redação de petições e documentos jurídicos
- Perguntas sobre legislação brasileira

### Campo Livre
Chat sem restrições, sem contexto de código. Acesse pelo botão **Campo Livre** na tela inicial.

---

## Usar por Voz

O SK Code Editor funciona com reconhecimento de voz do sistema:

1. No campo de texto do chat da Jasmim, toque no ícone de microfone
2. Fale sua mensagem
3. O texto aparece automaticamente

**Dica:** Para comandos de programação, fale devagar e spell out nomes de variáveis se necessário.

---

## Checkpoints — Salvar Estado do Projeto

Os checkpoints funcionam como um "salvar jogo":

1. Clique em 💾 na barra superior
2. O estado atual do projeto é salvo
3. Se algo der errado depois, você pode restaurar esse checkpoint

**Para restaurar:**
1. Clique em 💾
2. Escolha um checkpoint da lista
3. Clique em **Restaurar**

---

## Instalar como App (PWA)

O SK Code Editor pode ser instalado no celular como um app nativo:

**Android:**
1. Abra no Chrome
2. Menu (3 pontos) → **Adicionar à tela inicial**
3. Confirme

**iPhone/iPad:**
1. Abra no Safari
2. Botão de compartilhar (quadrado com seta) → **Adicionar à Tela de Início**
3. Confirme

---

## Atalhos Úteis

| Ação | Como fazer |
|---|---|
| Desfazer | Botão ↩ na barra do editor |
| Refazer | Botão ↪ na barra do editor |
| Salvar arquivo | Automático (salva em tempo real) |
| Formatar código | Botão `{ }` na barra do editor |
| Buscar no arquivo | Ctrl+F (computador) |
| Enviar mensagem à Jasmim | Enter ou botão ➤ |
| Nova linha sem enviar | Shift+Enter |

---

## Versões e Histórico

| Recurso | Status |
|---|---|
| Editor Monaco | ✅ Ativo |
| IA Jasmim (OpenAI/Claude/Gemini) | ✅ Ativo |
| GitHub Push/Pull | ✅ Ativo |
| Clone repositório público | ✅ Ativo (novo) |
| GitHub Pages Deploy | ✅ Ativo |
| APK via PWABuilder | ✅ Ativo |
| Terminal (requer servidor pago) | ⚠ Limitado |
| Banco de dados Neon | ✅ Ativo |
| Assistente Jurídica Jamile | ✅ Ativo |
| Campo Livre | ✅ Ativo |
| Modo offline (PWA) | ✅ Ativo |
| Checkpoints locais | ✅ Ativo |

---

## Solução de Problemas

### "A Jasmim não responde"
- Verifique se há uma chave de IA configurada (ícone ⚙️ no chat)
- Tente a **IA Embutida** (gratuita) nas configurações
- Verifique sua conexão com internet

### "O terminal não executa"
- Use o fluxo: GitHub → StackBlitz → execute lá → cole o resultado aqui
- A Jasmim vai guiar você nesse processo

### "Não consigo ver meu app no Preview"
- Certifique-se de que o projeto tem um arquivo `index.html`
- Para projetos Node/React, é necessário um servidor ativo (conta Replit paga ou StackBlitz)

### "Perdi meu projeto"
- Verifique se há um **checkpoint** salvo (botão 💾)
- Se enviou para o GitHub antes, importe de volta (painel 🌿)
- Os projetos ficam salvos no armazenamento local do navegador

### "Não consigo publicar no GitHub Pages"
- Verifique se o token tem permissão `repo` e `workflow`
- Certifique-se de que o repositório existe e foi feito pelo menos um push antes
- O processo leva 2-5 minutos para a URL ficar ativa

---

## Contato e Suporte

Este editor foi desenvolvido sob medida para **Saulo Kenji**.

Para melhorias e correções, abra uma conversa com a Jasmim dentro do editor e descreva o que precisa. Ela pode corrigir o próprio editor!

---

*Manual gerado automaticamente pelo SK Code Editor — Maio 2026*
