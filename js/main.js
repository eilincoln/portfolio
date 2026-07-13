/* ==========================================================================
   ARQUIVO MESTRE JAVASCRIPT - HUB DE IMPORTAÇÃO DE MÓDULOS
   ========================================================================== */

import { initMenuResponsivo } from "./menu.js"; // Menu responsivo
import { renderProjects } from "./projects-render.js"; // Renderização dinâmica dos projetos
import { initScrollReveal } from "./scroll-reveal.js"; // Animação de entrada ao rolar
import { initThemeToggle } from "./theme.js"; // Alternância de tema claro/escuro

// Executa as funções assim que o HTML carregar na tela
document.addEventListener("DOMContentLoaded", () => {
  initMenuResponsivo();
  initThemeToggle();

  // Home: só os 3 projetos mais recentes.
  renderProjects("home-projects-grid", { limit: 3 });
  // Diretório completo: todos os projetos.
  renderProjects("all-projects-grid");

  // Precisa rodar DEPOIS da renderização dos projetos, para observar
  // também os cards que acabaram de ser criados dinamicamente.
  initScrollReveal();
  // add aqui os próximos módulos
});
