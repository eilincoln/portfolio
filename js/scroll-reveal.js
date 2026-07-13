/* ==========================================================================
   ANIMAÇÃO DE ENTRADA AO ROLAR A PÁGINA (SCROLL REVEAL)
   ==========================================================================
   Aplica a classe .is-visible em qualquer elemento com a classe .reveal
   assim que ele entra na tela, usando IntersectionObserver (leve, sem
   dependências externas e sem custo de performance no scroll).
   ========================================================================== */

export function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  // Navegadores muito antigos: mostra tudo direto, sem animação.
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
}
