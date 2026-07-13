// Exporta a função para ser lida pelo arquivo mestre
export function initMenuResponsivo() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav");

  if (!menuToggle || !navMenu) return; // Proteção para evitar erros caso o HTML mude

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
      menuToggle.textContent = "✕";
    } else {
      menuToggle.textContent = "☰";
    }
  });
}
