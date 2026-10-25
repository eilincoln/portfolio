/* ==========================================================================
   MENU — painel do celular e fundo do cabeçalho ao rolar
   ========================================================================== */

const DESKTOP = window.matchMedia("(min-width: 60em)");

export function initMenu() {
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-menu]");
  const toggle = document.querySelector("[data-menu-toggle]");
  if (!header || !nav) return;

  /* ---------- Painel do celular ---------- */
  function setDrawer(open) {
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".sr-only").textContent = open ? "Fechar menu" : "Abrir menu";
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  }

  toggle?.addEventListener("click", () => {
    setDrawer(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Clicar num link (inclusive âncora na mesma página) fecha o painel
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setDrawer(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setDrawer(false);
      toggle?.focus();
    }
  });

  DESKTOP.addEventListener("change", () => setDrawer(false));

  /* ---------- Fundo ao rolar ---------- */
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
