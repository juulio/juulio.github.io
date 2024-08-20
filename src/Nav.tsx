import { Link } from 'react-router-dom'
import './Nav.css'
import linkedinLogo from './assets/icon-linkedin.png'
import githubLogo from './assets/icon-github.png'
import youtubeLogo from './assets/icon-youtube.svg'

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
        <li>
          <ul className="socialNav">
            <li>
              <a href="https://www.youtube.com/@julioDelValle" target="_blank">
                <img src={youtubeLogo} alt="React logo" />
              </a>
            </li>
            <li>
              <a href="https://github.com/juulio" target="_blank">
                <img src={githubLogo} alt="React logo" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/juliodelvalle/"
                target="_blank"
              >
                <img src={linkedinLogo} alt="React logo" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
