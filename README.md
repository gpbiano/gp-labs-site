[![Netlify Status](https://api.netlify.com/api/v1/badges/5c21bf89-25e8-43b5-afff-266238f67589/deploy-status)](https://app.netlify.com/sites/SEU-SITE-NO-NETLIFY/deploys)

# GP Labs – Site Institucional

Site institucional da **GP Labs – Marketing, Tecnologia & Automação**, desenvolvido em **Vite + React** e alinhado à identidade visual da **GP Holding Participações Ltda.**

O objetivo é apresentar os serviços da GP Labs (estratégia digital, sites, campanhas, WhatsApp, automação e dados), cases, clientes e um canal de contato com formulário e WhatsApp.

---

## 🔗 Produção

- **URL do site:** _(preencher com a URL do Netlify/domínio)_  
- **Painel Netlify:** _(preencher com o link do projeto no Netlify)_

---

## 🧱 Stack

- **Framework:** [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- **Linguagem:** JavaScript (ES Modules)
- **Estilos:** CSS puro (`src/assets/css/style.css`)
- **Fonte:** Montserrat (Google Fonts)
- **Ícones:** Remix Icon (para redes sociais)
- **Deploy:** Netlify (build estático)

---

## ✨ Principais features

- Hero dinâmico com destaque para:
  - Estratégia, tecnologia e automação para vendas recorrentes
  - Métricas visuais (dashboard, funis, leads, etc.)
- Seção de **Serviços** da GP Labs:
  - Estratégia digital & jornada do cliente  
  - Sites e landing pages  
  - WhatsApp, chatbots & automação  
  - Tráfego pago & campanhas  
  - Conteúdo & social media  
  - Dados, relatórios & melhoria contínua
- Seção **Como atuamos** com etapas do processo (diagnóstico → funil → implementação → evolução)
- Seção **Resultados / Cases**
- Página **Clientes** com:
  - Grade de logos de empresas atendidas
  - Cards de case para Criatório Peres e GP Holding
- Página **Quem somos** apresentando:
  - Essência, modelo de atuação, valores e entregáveis
- Seção **Contato** com:
  - **Formulário de contato** (nome, e-mail, WhatsApp, descrição da empresa)
  - Botão direto para WhatsApp com mensagem pré-preenchida
- **Banner de cookies** com opção “Saiba mais” e “Aceitar”
- Layout responsivo, com menu mobile e animações de entrada (scroll reveal)

---

## 📁 Estrutura do projeto

```text
gp-labs-site/
├─ public/
│  └─ favicon-gplabs.png
├─ src/
│  ├─ assets/
│  │  ├─ logos/
│  │  │  └─ gp-labs.png
│  │  └─ css/
│  │     └─ style.css
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Services.jsx
│  │  ├─ ProcessSection.jsx
│  │  ├─ Cases.jsx
│  │  ├─ ClientsSection.jsx
│  │  ├─ About.jsx
│  │  ├─ CtaSection.jsx
│  │  ├─ ContactForm.jsx
│  │  ├─ Footer.jsx
│  │  ├─ CookieBanner.jsx
│  │  └─ Reveal.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
