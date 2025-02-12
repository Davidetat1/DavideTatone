import React from "react";
import SectionTitle from "../components/SectionTitle";
import AboutImage from "../assets/images/AboutImage.png";
import Button from "../components/Button";

const aboutText = `Fin da piccolo ho sempre avuto una curiosità instancabile per la tecnologia. Mi affascinava capire il funzionamento delle cose, Crescendo, quella curiosità mi ha portato a intraprendere un percorso nel mondo dello sviluppo software, dove ho affinato competenze sia nel back-end che nel front-end, lavorando con diverse tecnologie, linguaggi e framework.

Ma il codice non è tutto ciò che mi rappresenta. Ho imparato il valore della collaborazione e della determinazione non solo attraverso le righe di programmazione, ma anche attraverso lo sport, la mia prima scuola di vita, tra calcio e palestra, ho affinato costanza e perseveranza, imparando che ogni sfida, sia nel mondo digitale che nella vita reale, è un’opportunità per crescere e migliorare.

Oggi porto con me questa mentalità in ogni progetto su cui lavoro, con l'obiettivo di creare soluzioni innovative e continuare a crescere, sia come sviluppatore che come persona.`;

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
              Ciao, io sono{" "}
              <span className="text-blue-600 whitespace-nowrap">
                Davide Tatone
              </span>
            </h1>
            <hr className="border-2 border-blue-600 w-16 mt-3" />
            <p className="mt-3 text-sm text-white/100 font-garet font-thin md:text-base whitespace-pre-line tracking-wider">
              {aboutText}
            </p>
          </div>
          <div>
            <Button className="mt-5">Contattami</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
