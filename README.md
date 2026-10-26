# lincolnberto.com

Meu portfólio. HTML, CSS e JavaScript puros, sem framework e sem build.

## Páginas

```
index.html                 home
projetos/                  lista de projetos
projetos/ats-carrantos/    case
projetos/sonar/            case
projetos/escuta-e-cuida/   case
sobre/
curriculo/                 currículo (página independente, pronta pra imprimir)
servicos/
laboratorio/               estudos e projetos de curso
contato/
404.html
meus-projetos/             projetos de estudo hospedados junto com o site
```

## Estrutura

```
css/main.css         importa tudo de base/, layout/ e components/
css/base/            tokens (cores, fontes, espaços), reset e tipografia
css/layout/          container, cabeçalho e rodapé
css/components/      peças reutilizáveis (botão, hero, case, blocos...)
css/pages/           CSS de uma página só, carregado com um segundo <link>
js/config.js         número e mensagem do WhatsApp
js/main.js           liga os módulos de js/modules/
img/                 fotos, capas e prints dos projetos
fonts/               fontes locais (woff2)
sitemap.xml, robots.txt
vercel.json          configuração da Vercel (URLs terminam com /)
```

## Como mexer

- **Rodar local:** `python3 -m http.server` e abrir http://localhost:8000. A página 404 só funciona na Vercel.
- **Cabeçalho, rodapé e ícones** estão copiados em todas as páginas. Mudou em uma, muda em todas.
- **Mudar cores ou fontes:** `css/base/tokens.css`.
- **Mudar o WhatsApp:** `js/config.js`. Botões com `data-whatsapp="mensagem"` montam o link sozinhos.
- **Adicionar projeto:** copiar um `<article class="project">` em `projetos/index.html`.
- **Adicionar estudo:** copiar um `<li class="study">` em `laboratorio/index.html` e, se tiver os arquivos, colocar a pasta em `meus-projetos/`.
- **Página nova:** copiar uma página parecida, trocar `<main>`, título, descrição, canonical e tags og, e incluir a URL no `sitemap.xml`.
- **Animação de entrada:** classes novas que devem aparecer com animação entram na lista `TARGETS` de `js/modules/reveal.js`.
- **Publicar:** `git push` na `main`. A Vercel publica sozinha.
