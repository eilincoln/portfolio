import { useState, useEffect } from "react";

type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Prioriza escolha salva no localStorage
    const savedTheme = localStorage.getItem("lb_theme") as Theme | null;
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    // 2. Detecta preferência nativa do sistema operacional
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      return "light";
    }

    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("lb_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
