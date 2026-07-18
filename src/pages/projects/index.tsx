import { Link } from 'react-router-dom'
import { demos } from '../../data/demosMetadata'
import '../../styles/demos/DemosIndex.css'

export default function DemosIndex() {
  return (
    <div className="demosIndex">
      <h2>3D Demonstrations</h2>
      <p>Interactive WebGL and generative art experiments</p>

      <div className="demosIndex__grid">
        {demos.map((demo) => (
          <Link
            key={demo.id}
            to={`/projects/${demo.id}`}
            className="demosIndex__card"
          >
            <h3>{demo.title}</h3>
            <p>{demo.description}</p>
            <div className="demosIndex__tags">
              {demo.tags.map((tag) => (
                <span key={tag} className="demosIndex__tag">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
