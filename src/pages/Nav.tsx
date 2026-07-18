import { Link } from 'react-router-dom'
import '../styles/Nav.css'

export default function Header() {
  return (
    <nav>
      <Link to="/" className="logo">
        <h1>julio del valle</h1>
      </Link>
      <ul>
        <li>
          <Link to="/work">work</Link>
        </li>
        <li>
          <Link to="/karate">karate</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  )
}
