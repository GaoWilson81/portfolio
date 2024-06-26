import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  return (
    <ul className="nav nav-underline justify-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://github.com/GaoWilson81" target="_blank" rel="noopener noreferrer">GitHub</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.linkedin.com/in/gaowilson81/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="AboutMe.tsx" target="_blank" rel="noopener noreferrer">About Me</a>
      </li>
    </ul>

    
  )
}

export default Nav