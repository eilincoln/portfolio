/* ==========================================================================
   WHATSAPP — monta os links a partir do config.js
   Qualquer link com data-whatsapp recebe o número e a mensagem.
   data-whatsapp="Texto" usa uma mensagem específica.
   Sem número configurado, o link mantém o href do HTML (fallback).
   ========================================================================== */

import { CONFIG } from "../config.js";

export function whatsappUrl(message = CONFIG.whatsappMessage) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function initWhatsapp() {
  if (!CONFIG.whatsapp) return;

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = whatsappUrl(link.dataset.whatsapp || CONFIG.whatsappMessage);
    link.target = "_blank";
    link.rel = "noopener";
  });
}
