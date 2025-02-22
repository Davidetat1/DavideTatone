import React from "react";
import HeroPic from "../assets/images/HeroPic.png";
import { motion } from "framer-motion";
const HeroImage = ({ variants }) => {
  return (
    <motion.div
      variants={variants}
      className="mask-gradient absolute right-0 top-0 h-[63svh] w-full
    overflow-hidden rounded-bl-full rounded-br-full border-r-[10px]
    border-white/80 bg-[#00487a] md:h-[60dvh] md:w-[450px] lg:h-[67svh]"
    >
      <img
        src={HeroPic}
        alt="HeroPic"
        className="absolute bottom-0 left-1/2 w-[450px] -translate-x-1/2"
      />
    </motion.div>
  );
};

export default HeroImage;

/* 00478d8f colore alternativo più trasparente*/
