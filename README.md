<h1 align="start">
  <img src="https://raw.githubusercontent.com/karinacmartins/rickandmorty/refs/heads/main/images/RICK_MORTY_ICON-01.svg" alt="Rick and Morty Logo" width="40" />
  Rick and Morty 
</h1>

Uma aplicação web para explorar os personagens do Rick and Morty.

---

## 📚 Sobre o Projeto

Este projeto foi desenvolvido durante um bootcamp da **Growdev**, com o objetivo de praticar e aplicar conceitos de desenvolvimento web utilizando **HTML**, **CSS**, **JavaScript puro**, **Bootstrap 5** e a biblioteca **Axios** para requisições HTTP.

A aplicação consome dados da [Rick and Morty API](https://rickandmortyapi.com/) e exibe uma interface para explorar os personagens da série.

### 🔍 Funcionalidades

- **Página Inicial**:

  - Exibe uma lista de personagens com as seguintes informações:
    - 🧪 **Imagem**
    - 🧬 **Nome**
    - 💀 **Status** (vivo, morto ou desconhecido), com ícone colorido indicativo
    - 👽 **Espécie**
    - 🌍 **Última localização conhecida**
  - Campo de **busca dinâmica**, permitindo filtrar personagens diretamente da API.

- **Página de Detalhes**:

  - Exibe informações detalhadas do personagem selecionado:
    - 🧪 **Imagem em destaque**
    - 🧬 **Nome**
    - 💀 **Status**
    - 👽 **Espécie**
    - 🌍 **Última localização conhecida**
    - 🌌 **Origem**
    - 🎞️ **Número de episódios em que apareceu**
    - 🧾 **Tipo** (se disponível)

- **Footer Dinâmico**:

  - Exibe o total de personagens, localizações e episódios da API.
  - Atualizado automaticamente com os dados da API.

- **Responsividade**:
  - Layout totalmente responsivo, adaptado para diferentes tamanhos de tela, utilizando **Bootstrap**.

---

## 🚀 Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Rick and Morty API](https://img.shields.io/badge/API-Rick_and_Morty-00BFFF?style=for-the-badge)

---

## 📂 Estrutura do Projeto

```
rickandmorty/
├── [index.html]        # Página inicial
├── [detail.html]       # Página de detalhes do personagem
├── css/
│   └── styles.css      # Estilos personalizados
├── js/
│   ├── index.js        # Lógica da página inicial
│   ├── detail.js       # Lógica da página de detalhes
│   ├── common.js       # Funções compartilhadas (ex.: footer dinâmico)
│   └── api.js          # Configuração de requisições à API
├── assets/
│   └── images/         # Imagens e ícones
└── [README.md]         # Documentação do projeto
```

<br>
<br>

  <div align="right">Made with 💜 by <a href="https://github.com/karinacmartins">KM</a>.</div>
