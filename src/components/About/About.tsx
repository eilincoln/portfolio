import styles from "./About.module.css";

const PILLARS = [
  {
    icon: "🎯",
    title: "Engenharia com Intenção",
    desc: "Código limpo, acessível (A11y) e semântico. Menos peso em pacotes externos e mais domínio das APIs nativas da plataforma web.",
  },
  {
    icon: "⚡",
    title: "Visão de Suporte & Infra",
    desc: "A bagagem prática em TI me ensinou a diagnosticar a causa-raiz com rapidez, entendendo o fluxo completo do sistema além da tela.",
  },
  {
    icon: "🌐",
    title: "Foco Full Stack & Global",
    desc: "Evoluindo continuamente de Front-end para Full Stack moderno, com código estruturado pronto para oportunidades de alto nível.",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      className={styles.section}
      aria-labelledby="about-heading"
    >
      <div className={styles.header}>
        <span className={styles.tag}>// Trajetória & Racional</span>
        <h2 id="about-heading" className={styles.title}>
          Sobre Mim
        </h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.bioCard}>
          <p>
            Olá! Me chamo <strong>Lincoln Berto</strong>. Minha atuação combina
            a vivência de <strong>Responsável Técnico de TI</strong> com o
            desenvolvimento ativo de interfaces modernas e sistemas web
            orientados a <strong>React e TypeScript</strong>.
          </p>

          <p>
            Trabalhar com suporte técnico e infraestrutura corporativa moldou
            minha forma de programar: tenho obsessão por{" "}
            <strong>estabilidade, rastreabilidade e usabilidade real</strong>.
            Não crio interfaces apenas para serem bonitas, mas para resolver
            gargalos práticos com performance máxima.
          </p>

          <p>
            No dia a dia, trabalho com HTML5 semântico, arquitetura modular com
            CSS Custom Properties (:root), componentização reativa com tipagem
            estrita e integração direta com bancos de dados relacionais e APIs
            de nuvem.
          </p>
        </div>

        <div className={styles.pillarsList}>
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={styles.pillarIcon} aria-hidden="true">
                  {pillar.icon}
                </span>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              </div>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
