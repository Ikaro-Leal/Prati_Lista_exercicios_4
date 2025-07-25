# Lista de Exercício 4 – Página de Perfil Pessoal – Desenvolvimento Front-end

Este repositório contém o projeto da Atividade 4 do curso de Desenvolvimento Front-end, ministrado pelo Professor Jaques Antunes no programa +PraTi & Codifica.

O projeto consiste na criação de uma página de perfil pessoal com HTML5, CSS3 e JavaScript, aplicando boas práticas de estrutura semântica, estilização responsiva e interatividade.

---

### Tecnologias Utilizadas

- **HTML5**: Para estruturar o conteúdo da página de forma semântica.
- **CSS3**: Para aplicar estilos, layout (Flexbox e Grid) e responsividade.
- **JavaScript**: Para adicionar interações e comportamentos dinâmicos simples.

---

### Como Executar o Projeto Localmente

Para explorar este projeto e ver as páginas em ação no seu computador, siga os passos abaixo.

#### Pré-requisitos

* **Navegador Web:** Qualquer navegador moderno, como Google Chrome, Firefox ou Microsoft Edge.
* **Git:** O sistema de controle de versão para clonar este repositório. [Faça o download aqui](https://git-scm.com/).
* **Editor de Código:** Recomendo o **Visual Studio Code**. [Faça o download aqui](https://code.visualstudio.com/).
    * **Extensão Recomendada (VS Code):** **Live Server**. Ela cria um servidor de desenvolvimento local para recarregar a página automaticamente. [Instale por aqui](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

#### Passos para Execução

**1. Clonar o Repositório** Execute o seguinte comando no seu terminal (Git Bash, PowerShell, etc.):

```bash
git clone https://github.com/Ikaro-Leal/Prati_Lista_exercicios_4.git
```
**2. Abrir a Pasta do Projeto** Navegue até a pasta recém-criada:

```bash
cd Prati_Lista_exercicios_4
```

**3. Visualizar os Exercícios** Você tem duas opções para abrir os arquivos HTML no navegador:

- (Recomendado) Usando o Live Server no VS Code:

1. Abra a pasta do projeto no Visual Studio Code.

2. Clique com o botão direito em um dos arquivos .html (por exemplo, index.html).

3. Selecione a opção "Open with Live Server". Seu navegador abrirá automaticamente com a página carregada.

- **(Alternativa) Abrindo o Arquivo Diretamente:**

1. Navegue até a pasta do projeto no seu explorador de arquivos.

2. Dê um duplo clique em qualquer arquivo .html (index.html, listas.html, etc.) para abri-lo diretamente no seu navegador padrão.


#### Estrutura do projeto

O projeto está organizado da seguinte forma para separar estrutura (HTML), estilo (CSS) e comportamento (JS).

```
Prati_Lista_exercicios_4/
├── img/
│   └── ... imagens
├── index.html
├── script.js
├── style.css
└── README.md
```

#### Autor

- **Ikaro França Leal**  
- **Professor, Jaques Antunes**
- **Projeto desenvolvido como parte do curso +PraTI e Codifica.**

#### Links

- [Repositório no GitHub](https://github.com/Ikaro-Leal/Prati_Lista_exercicios_4).
- [Página hospedada no GitHub Pages](https://ikaro-leal.github.io/Prati_Lista_exercicios_4/index.html).


#### Funcionalidades Implementadas

- Estrutura HTML semântica:
  - `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, etc.
- Layout responsivo com **Flexbox** e **media queries**.
- Uso de **variáveis CSS**, **pseudo-classes** e **pseudo-elementos**.
- Inclusão de **favicon** e fontes personalizadas do **Google Fonts**.
- Transições suaves com `transition` e efeitos visuais.
- Script JavaScript para funcionalidades como menu mobile.
quebrem de linha quando a largura for limitada. Ajuste o número de colunas do
Grid para telas menores por meio de media query.
