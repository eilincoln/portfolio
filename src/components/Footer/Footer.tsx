import styles from "./Footer.module.css";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    url: "https://github.com/eilincoln",
    icon: "↗",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/lincoln-berto/",
    icon: "↗",
  },
  {
    label: "Hub de Links",
    url: "https://links.lincolnberto.com",
    icon: "⚡",
  },
  {
    label: "E-mail",
    url: "mailto:contato@lincolnberto.com",
    icon: "✉",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandBlock}>
            <div className={styles.brandTitle}>
              <span>Lincoln Berto</span>
              <span className={styles.brandBadge}>DEV</span>
            </div>
            <p className={styles.brandDesc}>
              Frontend Developer & Técnico de TI.
            </p>
          </div>

          <div className={styles.socialLinks}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={styles.socialButton}
              >
                <span>{link.label}</span>
                <span aria-hidden="true">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copy}>
            © {currentYear} Lincoln Berto. Todos os direitos reservados.
          </p>
          <p className={styles.techSignature}>
            // Vite + React + TypeScript + macOS Glass
          </p>
        </div>
      </div>
    </footer>
  );
}
