import React, { useState } from "react";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Experiences from "./sections/Experiences.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  const [menuOpen, setMenuOpen] = useState();

  return (
    <div className="bg-customBlue overflow-x-clip antialiased">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero menuOpen={menuOpen} />
      <Projects />
      <About />
      <Skills />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
