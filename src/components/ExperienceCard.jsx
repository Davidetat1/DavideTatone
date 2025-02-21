import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const ExperienceCard = ({ experience, isOpen, onToggle }) => {
  const cardRef = useRef(null);

  // Scorrimento automatico solo all'apertura della card
  useEffect(() => {
    if (isOpen && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isOpen]);

  const contentVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Card compatta */}
      <div className="rounded-lg overflow-hidden">
        <button
          onClick={onToggle}
          className="group w-full flex justify-between items-center 
            pl-3 pr-2 py-3 md:px-6 md:py-4 text-base lg:text-xs
            font-poppins tracking-wide
            bg-gradient-to-l from-blue-600 to-blue-700
            hover:from-blue-900 hover:to-blue-800 rounded-lg"
        >
          <span className="font-semibold text-xs md:text-lg lg:text-xl">
            {experience.title}
          </span>
          <div className="flex items-center gap-2 md:gap-6">
            {experience.years && (
              <span className="text-xs md:text-base lg:text-lg font-normal">
                {experience.years}
              </span>
            )}
            <span
              className="inline-flex items-center justify-center w-6 h-6 
                 text-xs md:text-base text-gray-300 
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

      {/* Contenuto espanso animato con AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="expanded-content"
            ref={cardRef}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationComplete={() => {
              if (isOpen && cardRef.current) {
                // Calcola la posizione della card e applica un offset adeguato
                const offset = 180;
                const top =
                  cardRef.current.getBoundingClientRect().top +
                  window.scrollY -
                  offset;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className="p-6 bg-white/70 text-black rounded-lg 
                     flex flex-col md:flex-row md:items-start gap-4"
          >
            {/** Logo – animato singolarmente */}
            {experience.logo && (
              <motion.div
                className="order-first md:order-last w-fit
                    bg-white border-2 rounded-lg p-1 flex-shrink-0 
                    transition transform duration-300 hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.2 }}
              >
                <img
                  src={experience.logo}
                  alt={`${experience.title} logo`}
                  className="w-auto h-auto object-contain"
                />
              </motion.div>
            )}

            {/** Dettagli – animati singolarmente */}
            <motion.div
              className="flex-1 order-last md:order-first"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.2 }}
            >
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
                  <div className="font-poppins font-medium text-sm text-left md:text-base md:text-justify whitespace-pre-wrap">
                    <ReactMarkdown>{experience.description}</ReactMarkdown>
                  </div>
                  {experience.skills && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-800 text-white/80 text-sm md:text-xs px-3 py-2 rounded-full shadow-lg font-poppins font-extralight"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExperienceCard;
