/* ==========================================================================
   MAIN — ponto de entrada do JavaScript
   Cada módulo verifica se o seu elemento existe na página;
   por isso o mesmo arquivo serve para todas as páginas.
   ========================================================================== */

import { initTheme } from "./modules/theme.js";
import { initMenu } from "./modules/menu.js";
import { initWhatsapp } from "./modules/whatsapp.js";
import { initBuilder } from "./modules/builder.js";
import { initTimeline } from "./modules/timeline.js";
import { initReveal } from "./modules/reveal.js";

initTheme();
initMenu();
initWhatsapp();
initBuilder();
initTimeline();
initReveal();

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
