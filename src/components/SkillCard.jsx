import React from "react";
import { skills } from "../constants";

const SkillCard = ({ skill }) => {
  return (
    <div
      className="flex flex-col gap-4 rounded-lg border-2 
    border-white/10 bg-white/5 p-5"
    >
      <skill.icon
        className="rounded-full border-2 border-white/15 bg-white/5 
        p-2 text-6xl text-blue-600 hover:border-blue-600"
      />
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-white/90">{skill.title}</h3>
        <p className="text-white/40">{skill.description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
