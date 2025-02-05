import React from 'react'
import HeroContent from '../components/HeroContent'
import HeroImage from '../components/HeroImage'
import videoBg from '../assets/videos/videoBg.mp4';



const Hero = ({menuOpen}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z--100"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video */}
      <div 
       className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-99">
      </div>

      {/* Container */}
        <div 
        className={`container transition-all duration-300 ${
            menuOpen ? "px-10 blur-sm" : ""
        }`}
        >    
          <div className="relative flex h-screen flex-col-reverse
          items-center md:flex-row">
                {/* Hero content */}
                <HeroContent/>
                {/* Hero Image */}
                <HeroImage/>
            </div>
        </div>
    </section>
  )
}

export default Hero