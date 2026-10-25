/* ==========================================================================
   TEMA CLARO / ESCURO
   O tema inicial é aplicado por um script curto no <head> de cada página
   (evita a "piscada"). Aqui fica só o botão que alterna e salva a escolha.
   ========================================================================== */

const KEY = "tema";

export function initTheme() {
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  const root = document.documentElement;

  function sync() {
    const light = root.dataset.theme === "light";
    button.setAttribute("aria-pressed", String(light));
    button.querySelector(".sr-only").textContent = light ? "Usar tema escuro" : "Usar tema claro";
  }

  button.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try {
      localStorage.setItem(KEY, root.dataset.theme);
    } catch {
      // navegação privada: a escolha só vale até fechar a página
    }
    sync();
  });

  sync();
}
