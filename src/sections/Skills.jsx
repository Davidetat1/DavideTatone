import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../constants'
import SkillCard from '../components/SkillCard'

const Skills = () => {
  return (
    <section className="py-10" id="skills">
        <SectionTitle title="Skills"/>
        <div className="container mt-5 grid grid-cols-1 gap-4 
        md:grid-cols-2">
            {skills.map((skill) => (             
            <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
    </section>
  )
}

export default Skills