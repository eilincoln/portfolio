import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.statusBadge} role="status" aria-live="polite">
        <span className={styles.statusDotWrapper}>
          <span className={styles.statusPing} />
          <span className={styles.statusDot} />
        </span>
        <span>DISPONÍVEL PARA NOVOS PROJETOS</span>
      </div>

      <h1 id="hero-title" className={styles.title}>
        Construo interfaces modernas, rápidas e focadas em{" "}
        <span className={styles.highlight}>conversão</span>.
      </h1>

      <p className={styles.description}>
        Desenvolvedor front-end focado em React, TypeScript e arquitetura
        modular limpa. Transformando regras de negócio em soluções de alta
        performance sem dependências desnecessárias.
      </p>

      <div className={styles.actions}>
        <a href="#projetos" className={styles.primaryButton}>
          <span>Explorar Projetos</span>
          <span aria-hidden="true">&darr;</span>
        </a>

        <a
          href="https://links.lincolnberto.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.glassButton}
        >
          <span>Acessar Hub & Orçamento</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
