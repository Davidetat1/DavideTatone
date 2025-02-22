import React from "react";
import HeroContent from "../components/HeroContent";
import HeroImage from "../components/HeroImage";
import videoBg from "../assets/videos/VideoBg.mp4";
import ShapeBottom from "../components/shape/shapeBottom/ShapeBottom";
import { motion } from "framer-motion";

const Hero = ({ menuOpen }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const contentVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  const imageVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="relative overflow-hidden pb-24 md:pb-0"
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z--100"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-99"></div>

      {/* Container */}
      <div
        className={`container transition-all duration-300 ${
          menuOpen ? "px-10 blur-sm" : ""
        }`}
      >
        <div
          className="relative flex h-[93svh] md:h-screen flex-col-reverse
          items-center md:flex-row "
        >
          {/* Hero content */}
          <HeroContent variants={contentVariants} />
          {/* Hero Image */}
          <HeroImage variants={imageVariants} />
        </div>
      </div>
      <ShapeBottom />
    </motion.section>
  );
};

export default Hero;
