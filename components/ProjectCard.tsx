import Image from "next/image";
import type { Project } from "@/data/site";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className={`project-card format-${project.format} accent-${project.accent}`}>
      <div className="project-visual">
        <Image
          src={index % 2 === 0 ? "/media/hero-collage.png" : "/media/vertical-collage.png"}
          alt={`Colagem editorial do projeto ${project.title}, para ${project.client}`}
          fill
          sizes="(max-width: 768px) 94vw, 48vw"
        />
        <span className="view-project">CASE EM BREVE</span>
      </div>
      <div className="project-meta">
        <p>
          {project.client} <span>— {project.year}</span>
        </p>
        <h3>{project.title}</h3>
        <div>
          <span>{project.category}</span>
          <strong>{project.result}</strong>
        </div>
      </div>
    </article>
  );
}
