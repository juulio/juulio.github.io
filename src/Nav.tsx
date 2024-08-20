import { Link } from 'react-router-dom'
import './Nav.css'

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <h1>Julio Del Valle</h1>
          </Link>
        </li>
        <li>
          <ul>
            <li>
              <Link to="/software">Portfolio</Link>
            </li>
            <li>
              <Link to="/karate">Karate</Link>
            </li>
          </ul>
        </li>
        <li></li>
      </ul>
    </nav>
  )
}
