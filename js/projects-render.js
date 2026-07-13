/* ==========================================================================
   RENDERIZADOR DE CARDS DE PROJETO
   ==========================================================================
   Lê js/projects-data.js e desenha os cards dentro de qualquer grid da
   página (identificado por um ID). Usado tanto na Home (com limite de 3)
   quanto em projetos.html (sem limite, lista completa).
   ========================================================================== */

import { projects } from "./projects-data.js";

const STATUS_LABELS = {
  stable: "Stable",
  building: "Building",
  null: "Null",
};

const STATUS_CLASSES = {
  stable: "badge-stable",
  building: "badge-dev",
  null: "",
};

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className =
    "project-card reveal" + (project.status === "null" ? " placeholder" : "");

  const statusClass = STATUS_CLASSES[project.status] ?? "";
  const statusLabel = STATUS_LABELS[project.status] ?? "Null";

  const header = document.createElement("div");
  header.className = "project-header";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const status = document.createElement("span");
  status.className = ("project-status " + statusClass).trim();
  status.textContent = statusLabel;

  header.append(title, status);

  const description = document.createElement("p");
  description.textContent = project.description;

  const tagsWrapper = document.createElement("div");
  tagsWrapper.className = "project-tags";
  project.tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.textContent = tag;
    tagsWrapper.appendChild(tagEl);
  });

  article.append(header, description, tagsWrapper);
  return article;
}

/**
 * Renderiza os projetos dentro do elemento com o ID informado.
 * @param {string} containerId - ID do elemento grid de destino.
 * @param {{ limit?: number }} options - limit: quantidade máxima de cards.
 */
export function renderProjects(containerId, { limit } = {}) {
  const container = document.getElementById(containerId);
  if (!container) return; // Essa página não tem esse grid, ignora silenciosamente.

  // Mais recente primeiro (o último item adicionado ao array aparece no topo).
  const ordered = [...projects].reverse();
  const list = typeof limit === "number" ? ordered.slice(0, limit) : ordered;

  container.innerHTML = "";
  list.forEach((project) => container.appendChild(createProjectCard(project)));
}
