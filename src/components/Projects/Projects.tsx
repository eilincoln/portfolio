import { useState, useMemo } from "react";
import { projects, type Project } from "../../data/projects";
import styles from "./Projects.module.css";

export function Projects() {
  const [selectedTag, setSelectedTag] = useState<string>("TODOS");

  // Coleta as tags mais relevantes para os filtros rápidos
  const availableTags = useMemo(() => {
    const coreTags = [
      "TODOS",
      "#React",
      "#TypeScript",
      "#HTML5",
      "#CSS3",
      "#CSSGrid",
    ];
    return coreTags;
  }, []);

  // Filtra projetos dinamicamente
  const filteredProjects = useMemo(() => {
    if (selectedTag === "TODOS") return projects;
    return projects.filter((p) => p.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <section
      id="projetos"
      className={styles.section}
      aria-labelledby="projects-heading"
    >
      <div className={styles.header}>
        <span className={styles.tag}>// Catálogo de Engenharia</span>
        <h2 id="projects-heading" className={styles.title}>
          Projetos & Casos de Estudo
        </h2>
        <p className={styles.subtitle}>
          Aplicações completas, landing pages modulares e sistemas em produção:
        </p>
      </div>

      {/* Filtros por Stack */}
      <div
        className={styles.filterBar}
        role="toolbar"
        aria-label="Filtros de projetos"
      >
        {availableTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`${styles.filterBtn} ${selectedTag === tag ? styles.filterBtnActive : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid de Cards */}
      <div className={styles.grid}>
        {filteredProjects.map((project: Project) => (
          <article key={project.title} className={styles.card}>
            {project.image && (
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={`Capa do projeto ${project.title}`}
                  className={styles.image}
                  loading="lazy"
                  onError={(e) => {
                    // Oculta a área da imagem caso falhe o carregamento
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}

            <div className={styles.content}>
              <div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>

              <div>
                <div className={styles.tagsWrapper}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tagBadge}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionLink}
                    >
                      <span>Acessar Projeto</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                    >
                      <span>GitHub</span>
                      <span aria-hidden="true">&nearr;</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
