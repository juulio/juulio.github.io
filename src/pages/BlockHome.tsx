import '../styles/BlockHome.css'
import { Link } from 'react-router-dom'

export default function BlockHome() {
  return (
    <div className="home">
      <h2>I'm a Software Engineer</h2>

      <p>
        My main interest is to develop creative 3D experiences that run on a web
        browser, mostly using the{' '}
        <a href="https://threejs.org/" target="_blank">
          three.js
        </a>{' '}
        framework.
      </p>

      {/* <p>
        I create high-performance immersive web experiences designed for
        scalability and user engagement.
      </p> */}

      <h3>work experience</h3>
      <p>
        <span>From 2022 to 2025</span> I worked for Microsoft. For a couple of
        years I was part of a team handling maintenance and development of two
        enterprise platform services that support communication APIs and provide
        very critical, large-scale data for other back-end services. These
        services were aggressively scaled in 2020 to meet the demands of remote
        work during the pandemic. The last year I worked as a Front End engineer
        maintaining Copilot Bizchat, "the UI for AI". (React + Typescript)
      </p>
      <p>
        <span>2011-2022</span> I worked for Wunderman Thompson (formerly
        Possible) for 11 years as a Senior Front End developer. I was in charge
        of overseeing the success of many web projects and applications. Other
        tasks included leading Wordpress projects, planning, scoping and
        budgetting for software development teams.
      </p>

      <h3>Education</h3>
      <p>
        Computers Engineering, Bachelor's Degree. Instituto Tecnologico de Costa
        Rica.
      </p>
      <p>
        Completed the Three.js Journey Course{' '}
        <a
          href="https://threejs-journey.com/certificate/view/38336"
          target="_blank"
        >
          https://threejs-journey.com/
        </a>
      </p>
      <p>
        I'm a sblack belt <Link to="/karate">karate</Link> Teacher
      </p>
      <p> I'm from Costa Rica</p>
    </div>
  )
}
