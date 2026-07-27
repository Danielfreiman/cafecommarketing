"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/site";
import { ProjectCard } from "./ProjectCard";

const filters = [
  "Todos",
  "Vídeo",
  "Social Media",
  "Campanha",
  "Branding",
  "Eventos",
  "Conteúdo vertical",
];

export function PortfolioGrid() {
  const [filter, setFilter] = useState("Todos");
  const visible = useMemo(
    () =>
      filter === "Todos"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section className="portfolio-section section-pad" aria-label="Projetos">
      <div className="filter-row" role="group" aria-label="Filtrar projetos">
        {filters.map((item) => (
          <button
            key={item}
            className={filter === item ? "active" : ""}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {visible.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </div>
      {visible.length === 0 && (
        <p className="empty-state">
          Essa categoria está passando o café. Veja todos os projetos por enquanto.
        </p>
      )}
    </section>
  );
}
