import React from "react";
import SectionTitle from "../components/SectionTitle";
import { skills } from "../constants";
import SkillCard from "../components/SkillCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef);

  const cardVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: index * 0.5,
      },
    }),
  };

  return (
    <section className="py-10 snap-start" id="skills" ref={skillsRef}>
      <SectionTitle title="Skills" />
      <div
        className="container mt-5 grid grid-cols-1 gap-4 
        md:grid-cols-2"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="md:min-h-[230px] flex"
          >
            <SkillCard key={skill.id} skill={skill} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
