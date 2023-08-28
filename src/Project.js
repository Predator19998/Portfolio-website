// Project.js
import React, { useState } from "react";

const Project = ({ title, image, techstack, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    event.preventDefault()
    setExpanded(!expanded);
  };

  const isImage = image.match(/\.(jpeg|jpg|gif|png)$/) !== null;

  return (
    <div className="card">
      {isImage ? (
        <img src={image} className="card-img-top" alt={title} />
      ) : (
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={image}
            title={title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text techstack">{techstack.join(", ")}</p>
        <p className={`card-text ${expanded ? "expanded" : ""}`}>
          {description}
        </p>
        {description.length > 200 && (
          <a
            href="#"
            className="btn btn-link"
            onClick={toggleExpansion}
            style={{ display: "block", marginTop: "10px", color: "#007bff" }}
          >
            {expanded ? "Read Less" : "Read More"}
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
