import React from 'react'
import SectionTitle from '../components/SectionTitle'
import AboutImage from '../assets/images/AboutImage.png'
import Button from '../components/Button'

const About = () => {
  return (
    <section className="bg-white/10 py-10" id="about">
      <SectionTitle title="Su di me" />
      <div className="container mx-auto mt-8 flex flex-col md:flex-row items-center gap-10">
        {/* About Image Column */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={AboutImage} 
            alt="About Image"
            className="w-3/4 md:w-full lg:w-3/4 rounded-lg" 
          />
        </div>
        {/* About Content Column */}
        <div className="w-full md:w-1/2 md:mr-5">
          <div className="max-w-lg">
            <h1 className="font-bold font-poppins text-4xl md:text-5xl md:mt-3 text-white/80">
              Ciao, io sono <span className="text-blue-600 whitespace-nowrap">Davide Tatone</span>
            </h1>
            <p className="mt-3 text-sm text-white/60 md:text-base whitespace-pre-line">
              Le mie passione per il codice, il design e la tecnologia.
              Amo trasformare idee in soluzioni digitali, creando applicazioni web moderne e intuitive.
              Ogni progetto è per me una nuova sfida per crescere, imparare e innovare.
            </p>
          </div>
          <div> 
            <Button className="mt-5">Contattami</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About