import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { projects, type Project } from "../../data/projects";
import styles from "./ProjectsPage.module.css";

export function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("TODOS");

  // Extrai todas as tags únicas de todos os projetos automaticamente
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    tagsSet.add("TODOS");
    projects.forEach((p) => p.tags.forEach((t) => tagsSet.add(t)));
    return Array.from(tagsSet);
  }, []);

  // Inverte cronologia: mais recentes primeiro
  const sortedProjects = useMemo(() => {
    return [...projects].reverse();
  }, []);

  // Filtra por termo de busca E por tag selecionada
  const filteredProjects = useMemo(() => {
    return sortedProjects.filter((project) => {
      const matchesTag =
        selectedTag === "TODOS" || project.tags.includes(selectedTag);

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      return matchesTag && matchesSearch;
    });
  }, [sortedProjects, selectedTag, searchQuery]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <Link to="/" className={styles.backLink}>
          <span>← Voltar para o Início</span>
        </Link>
        <h1 className={styles.title}>Diretório Completo de Projetos</h1>
        <p className={styles.subtitle}>
          Histórico técnico e arquivo de aplicações desenvolvidas por Lincoln
          Berto.
        </p>
      </div>

      <div className={styles.controlsBar}>
        <input
          type="search"
          placeholder="Buscar projetos por nome, tecnologia ou palavra-chave..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div
          className={styles.filterTags}
          role="toolbar"
          aria-label="Filtrar por stack"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`${styles.tagBtn} ${selectedTag === tag ? styles.tagBtnActive : ""}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filteredProjects.length === 0 ? (
          <p className={styles.emptyState}>
            // Nenhum projeto encontrado para os termos pesquisados.
          </p>
        ) : (
          filteredProjects.map((project: Project) => (
            <article key={project.title} className={styles.card}>
              {project.image && (
                <div className={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={`Capa de ${project.title}`}
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
                  <h2 className={styles.projectTitle}>{project.title}</h2>
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
                        <span>Acessar</span>
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
          ))
        )}
      </div>
    </div>
  );
}
