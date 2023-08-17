// ProjectShowcase.js
import React from "react";
import Project from "./Project";
import projectData from "./projectData.json";

const ProjectShowcase = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projectData.map((project, index) => (
          <div className="col" key={index}>
            <Project
              title={project.title}
              image={project.image}
              techstack={project.techstack}
              description={project.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
