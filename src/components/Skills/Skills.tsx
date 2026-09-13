import styles from './Skills.module.css';

interface SkillItem {
  id: string;
  icon: string;
  badge: string;
  title: string;
  description: string;
}

const SKILLS: SkillItem[] = [
  {
    id: 'react-ts',
    icon: '⚡',
    badge: 'Frontend Core',
    title: 'React & TypeScript',
    description: 'Componentização declarativa, interfaces estritamente tipadas e gestão de estado reativo.',
  },
  {
    id: 'html-css',
    icon: '🎨',
    badge: 'Arquitetura Web',
    title: 'HTML5 & CSS Modular',
    description: 'Semântica estrita, acessibilidade (A11y), CSS Grid, Flexbox e Design Tokens (:root).',
  },
  {
    id: 'js-es6',
    icon: '⚙️',
    badge: 'Engine',
    title: 'JavaScript Moderno (ES6+)',
    description: 'Manipulação assíncrona, Fetch/REST APIs, DOM traversal e métodos nativos de array.',
  },
  {
    id: 'git-flow',
    icon: '🌿',
    badge: 'Versionamento',
    title: 'Git & GitHub',
    description: 'Fluxo profissional de branches, Conventional Commits e rastreabilidade analítica.',
  },
  {
    id: 'it-support',
    icon: '🛠️',
    badge: 'Operações',
    title: 'Suporte & Infraestrutura',
    description: 'Resolução de problemas de TI, redes locais, troubleshooting e visão de sistemas operacionais.',
  },
  {
    id: 'performance',
    icon: '🚀',
    badge: 'Otimização',
    title: 'Core Web Vitals',
    description: 'Carregamento otimizado, lazy loading nativo, SEO estruturado e zero dependências pesadas.',
  },
];

export function Skills() {
  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-heading">
      <div className={styles.header}>
        <span className={styles.tag}>// Stack Tecnológico</span>
        <h2 id="skills-heading" className={styles.title}>
          Habilidades & Ferramentas
        </h2>
        <p className={styles.subtitle}>
          Sistemas operacionais, linguagens e padrões de engenharia validados na prática:
        </p>
      </div>

      <div className={styles.grid}>
        {SKILLS.map((skill) => (
          <article key={skill.id} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.icon} aria-hidden="true">
                {skill.icon}
              </span>
              <span className={styles.badge}>{skill.badge}</span>
            </div>
            <div>
              <h3 className={styles.cardTitle}>{skill.title}</h3>
              <p className={styles.cardDesc}>{skill.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}