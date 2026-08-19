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
    title: "Imobiliária Santos",
    status: "stable",
    description:
      "Página institucional simples para uma imobiliária desenvolvida exclusivamente com HTML5 e CSS3. Projeto criado com o objetivo de praticar estruturação de tags, estilização básica, alinhamento de elementos e versionamento de código com Git/GitHub. (PS: Ainda não trabalhei responsividade neste projeto)",
    tags: ["#HTML", "#CSS"],
    image: "./img/capas-de-projetos/imobiliaria-santos.png",
    link: "https://imobiliaria-santos-wine.vercel.app/",
    github: "https://github.com/eilincoln/imobiliaria",
  },

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
    title: "Morauto Soluções Automotivas",
    status: "stable",
    description:
      "Landing Page institucional premium desenvolvida para uma oficina de funilaria de alto padrão em Campinas-SP. Conta com arquitetura CSS modular, design estruturado em Dark Mode, efeitos de micro-interações nativas e total responsividade para dispositivos móveis.",
    tags: ["#HTML5", "#CSS3", "#Grid", "#Flexbox", "#Git"],
    image: "./img/capas-de-projetos/morauto.png",
    link: "https://lincolnberto.com/meus-projetos/morauto/",
    github: "https://github.com/eilincoln/morauto",
  },

  {
    title: "Pet Boutique - Estética Animal",
    status: "stable",
    description:
      "Landing page institucional focada em conversão. Desenvolvida com arquitetura CSS Modular nativa, o projeto apresenta serviços especializados, galeria de marcas com filtros dinâmicos e integração total com a API do WhatsApp e Google Maps.",
    tags: ["#HTML5", "#CSS3", "#CSSGrid", "#Flexbox", "#Modular"],
    image: "./img/capas-de-projetos/pet-boutique.png",
    link: "https://lincolnberto.com.br/meus-projetos/pet-boutique/",
    github: "https://github.com/eilincoln/pet-boutique",
  },
];
