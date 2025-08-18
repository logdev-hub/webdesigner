# Qualificação Profissional em Web Designer — Material Interativo (UC1)

**Descrição curta:** Site estático e responsivo com aulas interativas para alunos do curso de Web Designer.  
Inclui exemplos práticos (HTML, CSS, JS), atividades, toasts, cópia para a área de transferência e recursos de acessibilidade.  
**Status:** neste pacote, apenas a **Aula 1** está disponível no índice da UC1 (as demais ficam como *Em breve*).

---

## ✨ Visão Geral
Este projeto reúne as páginas e assets para conduzir as aulas da **Unidade Curricular 1 (UC1)** com foco no estudante.  
O conteúdo usa **Bootstrap 5**, **JavaScript (ES6)** e uma **paleta suave** para melhorar a leitura e o engajamento (emojis, microinterações e transições leves).

- **Público:** alunos do curso de Qualificação em Web Designer.  
- **Formato:** site estático (abre no navegador, sem backend).  
- **Navegação:** Início → UC1 → Aula(s).  
- **Acessibilidade:** foco visível, navegação por teclado, contraste e linguagem clara.

## 🧰 Tech Stack
- **HTML5** (semântico)
- **CSS3** + **Bootstrap 5.3**
- **JavaScript (ES6)**
- Ícones **Bootstrap Icons**

## 🗂 Estrutura de Pastas (resumo)
webdesigner_uc/
README.md
index.html
assets/
css/styles.css
js/app.js
uc1/
index.html
aula-01.html

Principais arquivos:
- `index.html` — página inicial do curso (navegação para UC1).
- `uc1/index.html` — índice de aulas da UC1 (**somente Aula 1 ativa**).
- `uc1/aula-01.html` — Aula 1 (Fundamentos + Briefing v0.1).
- `assets/css/styles.css` — paleta suave e componentes visuais.
- `assets/js/app.js` — utilidades (toasts e copiar para área de transferência).
- `README.md` — este documento.

## ▶️ Como usar localmente
1. Baixe e extraia o `.zip` em uma pasta do seu computador.  
2. Abra **`webdesigner_uc/index.html`** no navegador.  
3. Navegue para **UC1** e clique em **Aula 1**.

> Dica: para melhor experiência (clipboard e importações), use um servidor local como a extensão **Live Server** do VS Code.

## 📚 Aulas incluídas (UC1)
- **Aula 1 — Fundamentos** ✅ *(disponível)*  
  - Conceitos: **HTML (estrutura)**, **CSS (apresentação)**, **JS (comportamento)** e **Bootstrap**.  
  - **Exemplos interativos**:  
    A) HTML semântico • B) CSS responsivo (simulador de colunas) • C) JS validação + toast •  
    D) **Persona** (cartão dinâmico + copiar) • E) **Mapa de Empatia** (auto-preencher + copiar + **insights automáticos**) •  
    F) **Análise de Concorrentes** (tabela editável + cálculo de score).
  - **Atividades guiadas**: HMW, referências, personas, KPIs e **Briefing v0.1**.  
  - **Extras de Persona**: contexto, motivação, resultado, dispositivos, habilidade digital, canais, critérios, barreiras, acessibilidade.  
  - **JTBD**: botão “✨ Gerar JTBD” monta “**Quando [contexto], quero [motivação] para [resultado].**”  
- Aulas 2–9 — *Em breve* ⏳ (links desabilitados no índice)

## 🧑‍🎓 Foco no aluno
- Linguagem acessível e orientada à prática.
- Passo a passo com **exemplos manipuláveis** e botões de **copiar** para acelerar os estudos.
- **Toasts** informativos e microinterações suaves (sem exageros).

## ♿ Acessibilidade
- Navegação por **teclado** (menus e acordeões do Bootstrap).  
- **Foco visível** em componentes interativos.  
- Recomendação de contraste **AA** para botões/links e textos (checar paleta no `styles.css`).  
- Em conteúdos coloridos (alertas, badges), há **redundância semântica** (rótulos + ícones).

## 🎨 Personalização rápida
- **Cores**: ajuste variáveis em `assets/css/styles.css` (`--brand-600`, `--brand-700`, etc.).  
- **Disponibilizar aulas**: edite `uc1/index.html` e troque o botão **Em breve** por um link real (`aula-0X.html`).  
- **Textos/Exemplos**: edite `uc1/aula-01.html` (blocos de Persona, Empatia e Concorrentes).

## 🚀 Publicação
Como é um site estático, você pode publicar no:
- GitHub Pages, Netlify, Vercel ou no seu servidor escolar.  
- Pasta pública da instituição (basta enviar o conteúdo da pasta `webdesigner_uc`).

## 🔗 Referências (recomendadas)
- NN/g — Personas & Empathy Maps:  
  https://www.nngroup.com/articles/personas-study-guide/  
  https://www.nngroup.com/articles/persona/  
  https://www.nngroup.com/articles/empathy-mapping/  
  https://www.nngroup.com/articles/using-empathy-maps/  
- Interaction Design Foundation (IxDF):  
  https://www.interaction-design.org/literature/article/personas-why-and-how-you-should-use-them  
  https://www.interaction-design.org/literature/article/how-to-create-design-personas-a-step-by-step-guide-for-beginners  
- Stanford d.school — Design Thinking Bootleg:  
  https://dschool.stanford.edu/tools/design-thinking-bootleg  
- IDEO — Empathy Maps (guia rápido)

**Atualizado em:** YYYY-MM-DD  
**Contato:** abra uma issue no repositório ou envie feedback pelo canal de suporte do curso.
