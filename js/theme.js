/* ==========================================================================
   PROTOCOLO DE TEMA (CLARO / ESCURO)
   ==========================================================================
   A escolha do usuário é lida ANTES deste módulo, via script inline no
   <head> de cada página (evita o "flash" de tema claro antes de aplicar o
   escuro). Este módulo só cuida do botão de alternância e de persistir a
   escolha no localStorage.
   ========================================================================== */

export function initThemeToggle() {
  const btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  const root = document.documentElement;

  function isDark() {
    return root.getAttribute("data-theme") === "dark";
  }

  function updateIcon() {
    btn.textContent = isDark() ? "☀️" : "🌙";
    btn.setAttribute(
      "aria-label",
      isDark() ? "Ativar tema claro" : "Ativar tema escuro"
    );
  }

  updateIcon();

  btn.addEventListener("click", () => {
    if (isDark()) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    updateIcon();
  });
}
