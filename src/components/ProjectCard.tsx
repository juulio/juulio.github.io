import { Project } from '../data/projects'
import '../styles/ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasValidLink = project.link && project.link !== '#'

  const cardContent = (
    <>
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
    </>
  )

  if (hasValidLink) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="projectCard"
      >
        {cardContent}
      </a>
    )
  }

  return <div className="projectCard">{cardContent}</div>
}
