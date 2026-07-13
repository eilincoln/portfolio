/* ==========================================================================
   ARQUIVO MESTRE JAVASCRIPT - HUB DE IMPORTAÇÃO DE MÓDULOS
   ========================================================================== */

import { initMenuResponsivo } from "./menu.js"; // Importa o arquivo do menu

// Executa as funções assim que o HTML carregar na tela
document.addEventListener("DOMContentLoaded", () => {
  initMenuResponsivo();
  // add aqui os próximos módulos
});
