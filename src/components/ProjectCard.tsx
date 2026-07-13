import { Project } from '../data/projects'
import '../styles/ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="projectCard">
      <div className="projectCard__header">
        <h3>{project.title}</h3>
        <span className="projectCard__year">{project.year}</span>
      </div>

      <p className="projectCard__description">{project.description}</p>

      <div className="projectCard__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="projectCard__tag">
            {tag}
          </span>
        ))}
      </div>

      {project.link && project.link !== '#' && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="projectCard__link"
        >
          View Project →
        </a>
      )}
    </div>
  )
}
