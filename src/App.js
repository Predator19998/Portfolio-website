// App.js
import React from "react";
import ProjectShowcase from "./ProjectShowcase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Corrected import path for brand icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import the solid envelope icon

import "./styles.css"

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <p className="navbar-brand mb-0 h1 fs-2">
            Rajasimhas Portfolio
          </p>
          <div className="navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/Predator19998">
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/rajasimha-reddy-jerry-sivaram-reddy/">
                  <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="mailto:jerrysiv@usc.edu">
                  <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <ProjectShowcase />
      </div>
    </div>
  );
}

export default App;
