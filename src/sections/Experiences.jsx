import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../constants/index.jsx";

const Experiences = () => {
  const [openCard, setOpenCard] = useState(null);

  const handleToggle = (id) => {
    setOpenCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10" id="experiences">
      <SectionTitle title="Esperienze" />
      <div className="container mx-auto mt-8 grid gap-4 md:grid-cols-1 text-white">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            isOpen={openCard === exp.id}
            onToggle={() => handleToggle(exp.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
