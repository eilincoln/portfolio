/* ==========================================================================
   WHATSAPP FLUTUANTE — mostra/esconde conforme a rolagem
   Escondido no hero (lá já tem os botões principais) e quando a chamada
   final ou o rodapé aparecem (eles já têm WhatsApp). Em páginas sem hero,
   aparece desde o início.
   ========================================================================== */

export function initWhatsappFloat() {
  const button = document.querySelector("[data-wa-float]");
  if (!button) return;

  const hero = document.querySelector(".hero");
  const covers = [...document.querySelectorAll(".cta-band, .footer")];
  const onScreen = new Set();

  const update = () => button.classList.toggle("is-hidden", onScreen.size > 0);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) onScreen.add(entry.target);
      else onScreen.delete(entry.target);
    });
    update();
  });

  [hero, ...covers].filter(Boolean).forEach((el) => observer.observe(el));
  update();
}
