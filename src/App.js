// App.js

import React from "react";
import ProjectShowcase from "./ProjectShowcase";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <div className="jumbotron text-center">
        <h1 className="display-3">Rajasimha's Portfolio</h1>
      </div>

      <ProjectShowcase />
    </div>
  );
}

export default App;
