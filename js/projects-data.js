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
   ========================================================================== */

export const projects = [
  {
    title: "A Era Artificial",
    status: "building",
    description:
      "Landing page responsiva desenvolvida do zero para consolidar meus conhecimentos práticos. Focada em estrutura semântica e estilização avançada.",
    tags: ["#HTML", "#CSS"],
  },
  {
    title: "Project_02.log",
    status: "null",
    description:
      "Um novo projeto em breve... Módulo reservado para a primeira aplicação utilizando lógica de programação pura.",
    tags: ["#JavaScript"],
  },
  {
    title: "Project_03.log",
    status: "null",
    description:
      "Espaço reservado para o desenvolvimento de componentes modernos e expansão do ecossistema front-end.",
    tags: ["#React"],
  },
  {
    title: "Project_04.log",
    status: "null",
    description:
      "Slot vago no servidor local. Próxima automação de interface ou integração de API programada para este bloco.",
    tags: ["#API_Rest"],
  },

  // 👉 Exemplo de como vai ficar quando você adicionar "A Nova Era" amanhã:
  // {
  //   title: "A Nova Era",
  //   status: "building",
  //   description: "Landing page do livro 'A Nova Era'.",
  //   tags: ["#HTML", "#CSS", "#JavaScript"],
  // },
];
