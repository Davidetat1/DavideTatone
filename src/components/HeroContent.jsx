import React from "react";
import Button from "./Button";

const HeroContent = () => {
  return (
    <div className="text-left md:max-w-72 lg:max-w-lg z-10">
      <p className="text-2xl sm:text-3xl font-poppins font-bold text-blue-500">
        Davide Tatone
      </p>

      <h2
        className="mt-4 font-garet font-bold text-4xl sm:text-5xl tracking-widest 
         text-white md:text-4xl lg:mt-8 lg:text-5xl"
      >
        Full Stack Web Developer
      </h2>

      <p className="mt-4 text-lg sm:text-xl text-white/70 md:text-lg">
        Amo trasformare idee in soluzioni digitali, creando applicazioni web
        moderne e intuitive.
      </p>
      <div className="flex items-center gap-5 m-5">
        <Button>Contattami</Button>
        <Button variant="outline">Download Cv</Button>
      </div>
    </div>
  );
};

export default HeroContent;
