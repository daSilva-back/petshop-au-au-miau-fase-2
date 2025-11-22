

# 🐾 Petshop Auau & Miau — Fase 2  
Projeto desenvolvido para a disciplina **Fundamentos de Sistemas Web**.

Este sistema web simula o site de um petshop, com foco em HTML, CSS, Bootstrap, JavaScript, formulários completos e requisitos de acessibilidade.  
Nesta fase foram implementados elementos dinâmicos, carrossel, validações de formulário e agendamentos inteligentes, seguindo todos os requisitos da Fase 2.

---

## 🎯 Objetivo Geral
Criar um site completo e funcional utilizando:

- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript**
- Boas práticas de acessibilidade
- Formulários complexos com validação

---

## 🗂️ Estrutura do Projeto

### ✔ **index.html**
- Página inicial do petshop  
- Carrossel feito com Bootstrap  
- Banner rotativo com JavaScript  
- Imagens com texto alternativo (alt)

### ✔ **produtos.html**
- Lista de produtos organizados em cards  
- Fotos, descrições e preços  
- Design responsivo com Bootstrap

### ✔ **servicos.html**
- Descrição dos serviços de Banho, Tosa e Cuidados  
- Imagens + vídeos  
- Conteúdo organizado e acessível

### ✔ **faleconosco.html**
- Formulário de contato  
- Envio via FormSubmit  
- Campos validados

### ✔ **agendar.html** (página principal da Fase 2)
Inclui:
- Formulário completo do **cliente**
  - Nome, CPF, data de nascimento, sexo, renda, endereço, etc.
- Formulário completo do **pet**
  - Nome, raça, sexo e data de nascimento
- Escolha do **serviço**
- Escolha da **telebusca (sim/não)**
- Campo de **data e hora** com validação inteligente

---

## ✨ Funcionalidades JavaScript Implementadas

### 🔄 1. Troca automática de imagem no topo
Arquivo: `script.js`  
Troca as imagens do banner de forma dinâmica.

### 🕒 2. Validação completa de agendamento (`validaData()`)
- Bloqueia datas no passado  
- Bloqueia domingos  
- Respeita horário de funcionamento (08h–18h)  
- **Se telebusca = SIM:**  
  - Aceita até **17:20** (40 min antes de fechar)  
  - Bloqueia horários acima disso  

### 🔧 3. Atualização automática do campo de data (`dataAtual()`)
Preenche a data/hora atual ao carregar ou ao trocar telebusca.

### 🖱 4. Eventos dinâmicos
- `oninput` para detectar mudanças na data/hora em tempo real  
- `onchange` no campo telebusca

---

## ♿ Acessibilidade
Atende ao requisito mínimo da disciplina:

- Todas as imagens incluem `alt` descritivo  
- Estrutura semântica de HTML  
- Navegação clara e textos acessíveis

---

## 🎨 Tecnologias Utilizadas
- HTML5  
- CSS3  
- Bootstrap 5  
- JavaScript  
- FormSubmit  
- GitHub Pages  

---
Desenvolvido por:
Alexia da Silva - 2025
