import './Footer.css'
import xLogo from './assets/icon-x.png'
import githubLogo from './assets/icon-github.png'
import linkedinLogo from './assets/icon-linkedin.png'
import youtubeLogo from './assets/icon-youtube.svg'

export default function BlockHome() {
  return (
    <footer>
      <ul className="socialNav">
        <li>
          <a href="https://x.com/juulio" target="_blank">
            <img src={xLogo} alt="X" />
          </a>
        </li>
        <li>
          <a href="https://github.com/juulio" target="_blank">
            <img src={githubLogo} alt="Github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/juliodelvalle/" target="_blank">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@julioDelValle" target="_blank">
            <img src={youtubeLogo} alt="YouTube" />
          </a>
        </li>
      </ul>
    </footer>
  )
}
