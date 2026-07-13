import { useMemo, useState } from 'react'
import { Project } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectFilter from './ProjectFilter'
import '../styles/ProjectsGrid.css'

interface ProjectsGridProps {
  projects: Project[]
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    projects.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [projects])

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projects
    }
    return projects.filter((project) =>
      selectedTags.some((tag) => project.tags.includes(tag)),
    )
  }, [projects, selectedTags])

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }

  return (
    <div className="projectsGrid">
      <ProjectFilter
        tags={allTags}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
      />

      <div className="projectsGrid__count">
        Showing {filteredProjects.length} of {projects.length} projects
      </div>

      <div className="projectsGrid__container">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="projectsGrid__empty">
            No projects match the selected filters
          </div>
        )}
      </div>
    </div>
  )
}
