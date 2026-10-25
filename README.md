# lincolnberto.com

Meu portfólio. HTML, CSS e JavaScript puros, sem build.

## Estrutura

```
index.html        a página inteira
css/style.css     estilos (cores e fontes no topo, em :root)
js/main.js        só atualiza o ano do rodapé
img/              foto e capas dos projetos
meus-projetos/    projetos de estudo hospedados junto com o site
```

## Como mexer

- **Rodar local:** `python3 -m http.server` e abrir http://localhost:8000
- **Adicionar projeto em destaque:** copiar um `<article class="projeto">` no `index.html`
- **Adicionar estudo:** copiar um `<li class="estudo">` e, se tiver os arquivos, colocar a pasta em `meus-projetos/`
- **Publicar:** `git push` na `main`. A Vercel publica sozinha.
