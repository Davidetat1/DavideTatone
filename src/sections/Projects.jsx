import React from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";
import ShapeDividerTop from "../components/shape/shapeTop/ShapeDividerTop";
const Projects = () => {
  return (
    <section className="py-16 relative " id="projects">
      <SectionTitle title="Progetti" />
      <div className="container mt-10">
        {/* Projects cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
