import React from "react";
import "./Projects.css";
import { PROJECTS } from "../../data";
import Card from "../Card/Card";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <h1 className="projects-heading">Feature Projects</h1>
      </div>
      <div className="projects-cardscontainer">
        <div className="container">
          <div className="project-cards">
            {PROJECTS.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                image={project.img}
                features={project.features}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
