import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/demos/DemoTemplate.css'

interface DemoTemplateProps {
  title: string
  description: string
  tags: string[]
  year: number
  children?: ReactNode
}

export default function DemoTemplate({
  title,
  description,
  tags,
  year,
  children,
}: DemoTemplateProps) {
  return (
    <div className="demoTemplate">
      <div className="demoTemplate__info">
        <div className="demoTemplate__header">
          <h2>{title}</h2>
          <span className="demoTemplate__year">{year}</span>
        </div>

        <p className="demoTemplate__description">{description}</p>

        <div className="demoTemplate__tags">
          {tags.map((tag) => (
            <span key={tag} className="demoTemplate__tag">
              {tag}
            </span>
          ))}
        </div>

        <Link to="/work" className="demoTemplate__back">
          ← Back to Projects
        </Link>

        {children}
      </div>
    </div>
  )
}
