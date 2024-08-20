import { Link } from 'react-router-dom'
import './Nav.css'

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <h1>julio del valle</h1>
          </Link>
        </li>
        <li>
          <ul>
            <li>
              <Link to="/software">portfolio</Link>
            </li>
            <li>
              <Link to="/karate">karate</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
