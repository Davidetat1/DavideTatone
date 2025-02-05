import React, { useState } from 'react';
import Header from './sections/header.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx';
import About from './sections/About.jsx'; 


const App = () =>{
    const [menuOpen, setMenuOpen] = useState();

  return (
    <div className="bg-gray-900  overflow-x-clip antialiased">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero menuOpen={menuOpen} />
      <Projects />
      <About />
    </div>
  );
};

export default App;