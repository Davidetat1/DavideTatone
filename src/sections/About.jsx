import React, { useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import AboutImage from "../assets/images/AboutImage.png";
import ContactButton from "../components/Buttons/ContactButton";
import { motion, useInView } from "framer-motion";
import { aboutText } from "../constants";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const containerVariants = {
    hidden: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="py-10"
      id="about"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <SectionTitle title="Su di me" />
      <div className="container mx-auto mt-8 flex flex-col md:flex-row items-center gap-10">
        {/* About Image Column */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.img
            src={AboutImage}
            alt="About Image"
            className="w-3/4 md:w-full lg:w-3/4 rounded-lg"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          />
        </div>
        {/* About Content Column */}
        <motion.div
          className="w-full md:w-1/2 md:mr-5"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="max-w-lg">
            <h1 className="font-bold font-poppins text-4xl md:text-5xl md:mt-3 text-white">
              Ciao, io sono{" "}
              <span className="text-[#e27006] whitespace-nowrap">
                Davide Tatone
              </span>
            </h1>
            <hr className="border-2 border-[#e27006ec] w-16 my-3" />
            <p className="mt-3 text-sm text-white/100 font-garet font-thin md:text-base whitespace-pre-line tracking-wider">
              {aboutText}
            </p>
          </div>
          <div className="mt-5">
            {/* Wrapper non-motion per isolare il pulsante */}
            <div>
              <ContactButton className="font-semibold" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
