import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer} aria-label="Navegação Principal">
        <Link to="/" className={styles.brand}>
          <span className={styles.brandBadge}>LB</span>
          <span>
            lincolnberto<span style={{ color: "var(--accent-cta)" }}>.com</span>
          </span>
        </Link>

        <ul className={styles.navLinks}>
          <li className={styles.linkProjects}>
            <Link to="/projetos" className={styles.navLink}>
              Projetos
            </Link>
          </li>
          <li className={styles.linkAbout}>
            <a href="/#sobre" className={styles.navLink}>
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
