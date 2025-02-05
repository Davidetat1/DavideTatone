import React from 'react'
import SectionTitle from '../components/SectionTitle'
import AboutImage from '../assets/images/AboutImage.png'

const About = () => {
  return (
    <section className="bg-white/10 py-20" id="about">
        <SectionTitle title="Su di me" />
        <div>
         {/*  About Image */}
        <img 
            src={AboutImage} 
            alt="About Image"
            className="my-1"/>
        </div>
        {/* About Content */}

        <div className="container flex-1">
            <div className="max-w-lg">
                <h1 className="font-bold font-poppins text-5xl text-white/80">
                Ciao, io sono <span className="text-blue-600">Davide Tatone</span>
                </h1>
                <p className="mt-3 text:sm text-white/60 md:text-base">
                Le mie passione per il codice, il design e la tecnologia.
                Amo trasformare idee in soluzioni digitali, creando applicazioni web moderne e intuitive.
                Ogni progetto è per me una nuova sfida per crescere, imparare e innovare.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About