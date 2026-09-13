import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer} aria-label="Navegação Principal">
        <a href="#" className={styles.brand}>
          <span className={styles.brandBadge}>LB</span>
          <span>
            lincolnberto<span style={{ color: "var(--accent-cta)" }}>.com</span>
          </span>
        </a>

        <ul className={styles.navLinks}>
          <li className={styles.linkProjects}>
            <a href="#projetos" className={styles.navLink}>
              Projetos
            </a>
          </li>
          <li className={styles.linkAbout}>
            <a href="#sobre" className={styles.navLink}>
              Sobre
            </a>
          </li>
          <li>
            <a
              href="https://links.lincolnberto.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaLink}
            >
              <span>// Hub de Links</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
