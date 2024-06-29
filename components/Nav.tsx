import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "../app/aboutme/page";

const Nav = () => {
  return (
    <nav className="mt-4">
      <ul className="nav nav-underline justify-center">
        <li className="nav-item">
          <a className="nav-link" href="/primary">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/GaoWilson81" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/gaowilson81/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/aboutme">About Me</a>
        </li>
      </ul>
    </nav>
    
  )
}

export default Nav