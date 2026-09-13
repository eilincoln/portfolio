import { useState, useMemo } from "react";
import { projects, type Project } from "../../data/projects";
import styles from "./Projects.module.css";

export function Projects() {
  const [selectedTag, setSelectedTag] = useState<string>("TODOS");
  const [showAll, setShowAll] = useState<boolean>(false);

  const availableTags = useMemo(() => {
    return ["TODOS", "#React", "#TypeScript", "#HTML5", "#CSS3", "#CSSGrid"];
  }, []);

  // Inverte estritamente a ordem cronológica: o último do array fica em 1º lugar
  const sortedProjects = useMemo(() => {
    return [...projects].reverse();
  }, []);

  // Mostra apenas 6 na Home (ou todos ao clicar em ver mais)
  const displayedProjects = useMemo(() => {
    const filtered =
      selectedTag === "TODOS"
        ? sortedProjects
        : sortedProjects.filter((p) => p.tags.includes(selectedTag));

    if (showAll || selectedTag !== "TODOS") {
      return filtered;
    }

    return filtered.slice(0, 6);
  }, [sortedProjects, selectedTag, showAll]);

  const hasMoreProjects = selectedTag === "TODOS" && sortedProjects.length > 6;

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

      {/* Barra de Filtros */}
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
            onClick={() => {
              setSelectedTag(tag);
              setShowAll(false);
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid de Cards */}
      <div className={styles.grid}>
        {displayedProjects.map((project: Project) => (
          <article key={project.title} className={styles.card}>
            {project.image && (
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={`Capa do projeto ${project.title}`}
                  className={styles.image}
                  loading="lazy"
                  onError={(e) => {
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
                      <span aria-hidden="true">→</span>
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
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Botão de Expansão */}
      {hasMoreProjects && (
        <div className={styles.viewMoreWrapper}>
          <button
            type="button"
            className={styles.viewMoreBtn}
            onClick={() => setShowAll(!showAll)}
          >
            <span>
              {showAll
                ? "// Recolher Catálogo"
                : `// Ver Mais Projetos (${sortedProjects.length})`}
            </span>
            <span aria-hidden="true">{showAll ? "↑" : "↓"}</span>
          </button>
        </div>
      )}
    </section>
  );
}
