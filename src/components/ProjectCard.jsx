import React from "react";

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="sticky overflow-hidden rounded-2xl border-2 border-white/15 bg-gray-800 p-8 md:flex md:items-center"
      style={{
        top: `calc(100px + ${index * 30}px)`,
      }}
    >
      {/* Project Content */}
      <div className="flex flex-1 flex-col gap-5">
        <h2 className="font-poppins text-2xl font-bold text-white/90">
          {project.title}
        </h2>
        <hr className="border-t-2 border-white/10" />
        <p className="text-sm text-white/50 whitespace-pre-line">
          {project.description}
        </p>
      </div>
      {/* Project Image */}
      <div className="mt-5 flex items-center justify-center md:mt-0 md:flex-1">
        <div className="overflow-hidden rounded-lg -mb-10 mt-8 h-50 w-full md:h-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full  md:object-cover md:-mr-20"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
