import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';  // ← ADD THIS
import Education from './components/sections/Education/Education';
import Projects from './components/sections/Projects/Projects';
import Certificates from './components/sections/Certificates/Certificates';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />  {/* ← ADD THIS */}
      <Education />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;