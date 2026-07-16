/* ==========================================================================
   FONTE ÚNICA DE DADOS DOS PROJETOS
   ==========================================================================
   Ordem = ordem de criação (do mais antigo para o mais novo).

   Para adicionar um projeto novo (ex: "A Nova Era"), basta colar um novo
   objeto no FINAL deste array. Não precisa mexer em index.html nem em
   projetos.html — os dois se atualizam sozinhos:

     - A Home (index.html) mostra automaticamente apenas os 3 mais recentes.
     - projetos.html mostra o diretório completo, sempre com o mais novo
       aparecendo primeiro.

   status aceito: "stable" | "building" | "null"

   Campos opcionais:
     - image:  caminho da capa do projeto (ex: "img/projeto-pic.png").
               Se omitido, o card renderiza sem capa (como os placeholders).
     - link:   URL do projeto no ar. Se omitido, o card não mostra o botão
               de acesso (útil para os placeholders "Project_0X.log").
     - github: URL do repositório no GitHub. Se omitido, o card não mostra
               o botão "Ver código" (use apenas em projetos com repo público
               — não use em projetos de cliente).
   ========================================================================== */

export const projects = [
  {
    title: "Escuta e Cuida",
    status: "stable",
    description:
      "Plataforma digital de saúde mental voltada aos profissionais de uma UBS. Oferece acesso a atendimento psicológico online e remoto a valor social, promovendo bem-estar, acolhimento e qualidade de vida no ambiente de trabalho.",
    tags: ["#HTML", "#CSS"],
    image: "./img/capas-de-projetos/escuta-e-cuida.png",
    link: "https://lincolnberto.com/meus-projetos/escuta-e-cuida/",
  },
  {
    title: "A Nova Era",
    status: "stable",
    description:
      "Landing page do livro 'A Nova Era'. Desenvolvido no curso da DevMedia.",
    tags: ["#HTML", "#CSS"],
    image: "./img/capas-de-projetos/preview-desktop.png",
    link: "https://lincolnberto.com/meus-projetos/a-era-artificial/",
    github: "https://github.com/eilincoln/a-era-artificial",
  },
  {
    title: "Imobiliária Santos",
    status: "stable",
    description:
      "Página institucional simples para uma imobiliária desenvolvida exclusivamente com HTML5 e CSS3. Projeto criado com o objetivo de praticar estruturação de tags, estilização básica, alinhamento de elementos e versionamento de código com Git/GitHub. (PS: Ainda não trabalhei responsividade neste projeto)",
    tags: ["#HTML", "#CSS"],
    image: "./img/capas-de-projetos/imobiliaria-santos.png",
    link: "https://imobiliaria-santos-wine.vercel.app/",
    github: "https://github.com/eilincoln/imobiliaria",
  },
];
