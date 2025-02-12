import React from "react";
import { FaPlus, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const ExperienceCard = ({ experience, isOpen, onToggle }) => {
  return (
    <>
      {/* Card Viola */}
      <div className="rounded-lg overflow-hidden">
        <button
          onClick={onToggle}
          className="group w-full flex justify-between items-center 
          pl-4 pr-2 py-4 md:px-6 md:py-4 text-base lg:text-xs
          font-poppins font-semibold tracking-wide
          bg-gradient-to-l from-blue-600 to-blue-700
          hover:from-blue-900 hover:to-blue-800 rounded-lg"
        >
          {/* Titolo a sinistra */}
          <span className="text-xs md:text-sm lg:text-lg">
            {experience.title}
          </span>

          {/* Container a destra per years e icona "+" */}
          <div className="flex items-center gap-3 md:gap-6">
            {experience.years && (
              <span className="text-xs md:text-sm lg:text-lg font-bold">
                {experience.years}
              </span>
            )}
            <span
              className="inline-flex items-center justify-center w-6 h-6 
               text-xs text-gray-300 
               transition-colors duration-300 
               group-hover:text-cyan-400 
               group-hover:bg-gray-100/10 
               group-hover:rounded-full"
            >
              <FaPlus />
            </span>
          </div>
        </button>
      </div>

      {/* Contenuto espanso unificato */}
      {isOpen && (
        <div
          className="p-6 bg-white/70 text-black rounded-lg 
        flex flex-col md:flex-row md:items-start gap-4"
        >
          {/* Logo in mobile: in cima; in desktop: a destra */}
          {experience.logo && (
            <div
              className="order-first md:order-last w-fit
             bg-white border-2 rounded-lg p-1 flex-shrink-0 
             transition transform duration-300 
             hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={experience.logo}
                alt={`${experience.title} logo`}
                className="w-auto h-auto object-contain"
              />
            </div>
          )}

          {/* Testo e altri dettagli */}
          <div className="flex-1 order-last md:order-first">
            {(experience.location || experience.website) && (
              <div className="flex flex-col md:flex-row gap-2 md:gap-6 mb-4 font-poppins font-normal">
                {experience.location && (
                  <div className="flex items-center gap-2 text-sm">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span>{experience.location}</span>
                  </div>
                )}
                {experience.website && (
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 text-sm hover:underline"
                  >
                    <FaExternalLinkAlt />
                    <span>
                      {experience.website.replace("https://www.", "")}
                    </span>
                  </a>
                )}
              </div>
            )}
            {experience.description && (
              <>
                <div className="font-poppins font-medium text-sm text-left md:text-justify whitespace-pre-wrap prose prose">
                  <ReactMarkdown>{experience.description}</ReactMarkdown>
                </div>
                {experience.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-800 text-white/80 
                        text-sm md:text-xs px-3 py-2 rounded-full shadow-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceCard;
