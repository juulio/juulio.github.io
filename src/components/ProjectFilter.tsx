import '../styles/ProjectFilter.css'

interface ProjectFilterProps {
  tags: string[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
}

export default function ProjectFilter({
  tags,
  selectedTags,
  onTagToggle,
}: ProjectFilterProps) {
  return (
    <div className="projectFilter">
      <div className="projectFilter__label">Filter by:</div>
      <div className="projectFilter__tags">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`projectFilter__button ${
              selectedTags.includes(tag) ? 'projectFilter__button--active' : ''
            }`}
            onClick={() => onTagToggle(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
