/* ==========================================================================
   REVELAR AO ROLAR — blocos surgem (fade + sobe) quando entram na tela
   Não precisa de nada no HTML: os alvos são escolhidos pelas classes abaixo.
   Itens irmãos (cards, trajetória) entram em cascata.
   Sem JS ou com "reduzir movimento", tudo aparece normalmente.
   ========================================================================== */

const TARGETS = [
  ".section-head",
  ".case",
  ".path",
  ".about__intro",
  ".timeline__item",
  ".lab__card",
  ".cta-band",
  // páginas de case
  ".stat",
  ".case-block",
  ".shot",
  ".case-next",
  ".steps li",
  ".project",
].join(", ");

const STAGGER = 90;  // ms entre um item e o próximo do mesmo grupo
const MAX_STEPS = 5; // limita a espera em grupos grandes

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Depois de aparecer, o elemento volta ao estado original (sem classes extras)
function cleanUp(event) {
  if (event.target !== event.currentTarget || event.propertyName !== "opacity") return;
  const el = event.currentTarget;
  el.classList.remove("reveal", "is-visible");
  el.style.removeProperty("--reveal-delay");
  el.removeEventListener("transitionend", cleanUp);
}

export function initReveal() {
  const main = document.querySelector("main");
  if (!main || reduceMotion.matches || !("IntersectionObserver" in window)) return;

  const items = main.querySelectorAll(TARGETS);
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  items.forEach((el) => {
    const group = [...el.parentElement.children].filter((child) => child.matches(TARGETS));
    const step = Math.min(group.indexOf(el), MAX_STEPS);
    el.style.setProperty("--reveal-delay", `${step * STAGGER}ms`);
    el.classList.add("reveal");
    el.addEventListener("transitionend", cleanUp);
    observer.observe(el);
  });
}
