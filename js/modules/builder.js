/* ==========================================================================
   DO CÓDIGO AO SITE — animação do hero da Home
   Cada linha do editor é "digitada" (CSS) e, quando termina, a parte da
   prévia ligada a ela aparece: <span class="code__line" data-reveal="nav">
   acende o elemento <… data-part="nav">.
   O HTML já vem com tudo visível; o JS só esconde se puder animar.
   ========================================================================== */

const PAUSE_BETWEEN_LINES = 120; // ms
const PAUSE_AT_END = 4500;       // ms com o pedido na tela antes de recomeçar
const RESET_FADE = 450;          // ms, igual à transição do CSS

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function initBuilder() {
  const builder = document.querySelector("[data-builder]");
  if (!builder || reduceMotion.matches) return;

  const lines = [...builder.querySelectorAll(".code__line")];
  const parts = builder.querySelectorAll("[data-part]");
  const pointer = builder.querySelector("[data-pointer]");
  const button = builder.querySelector(".mock__btn");
  const toast = builder.querySelector("[data-toast]");

  // A largura de cada linha em "ch" = quantidade de caracteres
  lines.forEach((line) => {
    const text = line.querySelector(".code__text");
    text.style.setProperty("--chars", text.textContent.length);
  });

  // Só anima com a animação visível na tela e a aba aberta
  let visible = true;
  new IntersectionObserver(([entry]) => (visible = entry.isIntersecting)).observe(builder);

  async function whenVisible() {
    while (!visible || document.hidden) await wait(300);
  }

  function typeLine(line) {
    const text = line.querySelector(".code__text");
    return new Promise((resolve) => {
      // Linha vazia: não há o que digitar
      if (!text.textContent.length) {
        line.classList.add("is-done");
        resolve();
        return;
      }
      text.addEventListener(
        "animationend",
        () => {
          line.classList.replace("is-typing", "is-done");
          resolve();
        },
        { once: true }
      );
      line.classList.add("is-typing");
    });
  }

  // Site pronto: o mouse entra, clica em "Pedir no WhatsApp" e chega um pedido
  async function simulateClient() {
    // offset* ignora a inclinação 3D (getBoundingClientRect não ignora)
    const mock = pointer.parentElement;
    const moveTo = (x, y) => {
      pointer.style.setProperty("--x", `${x}px`);
      pointer.style.setProperty("--y", `${y}px`);
    };

    // Começa no canto de baixo, à direita, sem transição
    pointer.style.transition = "none";
    moveTo(mock.offsetWidth - 30, mock.offsetHeight - 10);
    pointer.offsetWidth; // força o navegador a aplicar a posição
    pointer.style.transition = "";

    pointer.classList.add("is-visible");
    await wait(200);
    moveTo(button.offsetLeft + button.offsetWidth * 0.6, button.offsetTop + button.offsetHeight * 0.4);
    await wait(1200);

    button.classList.add("is-clicked");
    await wait(180);
    button.classList.remove("is-clicked");
    await wait(500);
    toast.classList.add("is-shown");
  }

  function reset() {
    lines.forEach((line) => line.classList.remove("is-typing", "is-done", "is-idle"));
    parts.forEach((part) => part.classList.remove("is-shown"));
    pointer?.classList.remove("is-visible");
    toast?.classList.remove("is-shown");
  }

  async function loop() {
    for (;;) {
      for (const line of lines) {
        await whenVisible();
        await typeLine(line);
        const part = line.dataset.reveal;
        if (part) builder.querySelector(`[data-part="${part}"]`)?.classList.add("is-shown");
        await wait(PAUSE_BETWEEN_LINES);
      }

      lines.at(-1).classList.add("is-idle");
      if (pointer && button && toast) {
        await wait(900);
        await whenVisible();
        await simulateClient();
      }

      await wait(PAUSE_AT_END);
      builder.classList.add("is-resetting");
      await wait(RESET_FADE);
      reset();
      builder.classList.remove("is-resetting");
      await wait(300);
    }
  }

  builder.classList.add("is-animating");
  loop();
}
