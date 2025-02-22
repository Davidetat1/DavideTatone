import React from "react";
import Button from "./Buttons/Button";
import ContactButton from "./Buttons/ContactButton";
import DownloadButton from "./Buttons/DownloadButton";
import { motion } from "framer-motion";
const HeroContent = ({ variants }) => {
  return (
    <motion.div
      variants={variants}
      className="text-left md:max-w-72 lg:max-w-lg"
    >
      <p className="text-2xl sm:text-2xl lg:text-4xl font-poppins font-bold tracking-wide text-[#388ae7]">
        Davide Tatone
      </p>

      <h2
        className="mt-1 font-garet font-bold text-4xl sm:text-5xl tracking-wide
         text-white md:text-4xl lg:text-6xl"
      >
        Full Stack Web Developer
      </h2>

      <p className="mt-3 font-poppins font-light text-sm sm:text-xl text-white/70 md:text-lg lg:text-xl">
        Amo trasformare idee in soluzioni digitali, creando applicazioni web
        moderne e intuitive.
      </p>
      <div className="mt-6 flex justify-center md:justify-start items-center gap-4">
        <ContactButton>Contattami</ContactButton>
        <DownloadButton>Download Cv</DownloadButton>
      </div>
    </motion.div>
  );
};

export default HeroContent;
