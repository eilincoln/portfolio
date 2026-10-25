/* ==========================================================================
   TRAJETÓRIA — a linha da timeline enche de laranja conforme a rolagem
   Sem JS ou com "reduzir movimento", a linha já aparece cheia.
   ========================================================================== */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

export function initTimeline() {
  const timeline = document.querySelector("[data-timeline]");
  if (!timeline || reduceMotion.matches) return;

  let ticking = false;

  function update() {
    const rect = timeline.getBoundingClientRect();
    const middle = window.innerHeight * 0.6; // a linha acompanha 60% da altura da tela
    const progress = (middle - rect.top) / rect.height;
    timeline.style.setProperty("--progress", Math.min(Math.max(progress, 0), 1).toFixed(3));
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );

  update();
}
