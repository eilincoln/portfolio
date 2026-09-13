import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroContent}>
        <div className={styles.statusBadge} role="status" aria-live="polite">
          <span className={styles.statusDotWrapper}>
            <span className={styles.statusPing} />
            <span className={styles.statusDot} />
          </span>
          <span>DISPONÍVEL PARA PROJETOS</span>
        </div>

        <h1 id="hero-title" className={styles.title}>
          Olá, eu sou o <span className={styles.highlight}>Lincoln Berto</span>.
        </h1>

        <p className={styles.description}>
          Desenvolvedor Front-end & Técnico de TI. Construo interfaces modernas,
          acessíveis e de alta performance aplicando ecossistema moderno com
          HTML5, CSS modular, React e TypeScript.
        </p>

        <div className={styles.actions}>
          <a href="#projetos" className={styles.primaryButton}>
            <span>Ver projetos</span>
            <span aria-hidden="true">&darr;</span>
          </a>

          <a href="#sobre" className={styles.glassButton}>
            <span>Sobre mim</span>
          </a>
        </div>
      </div>

      <div className={styles.avatarContainer}>
        <div className={styles.avatarGlassFrame}>
          <img
            src="/img/avatar.png"
            alt="Avatar ilustrado de Lincoln Berto"
            className={styles.avatarImg}
            loading="eager"
            onError={(e) => {
              // Fallback automático para o avatar do GitHub caso o PNG local não exista
              e.currentTarget.src = "https://github.com/eilincoln.png";
            }}
          />
        </div>
      </div>
    </section>
  );
}
