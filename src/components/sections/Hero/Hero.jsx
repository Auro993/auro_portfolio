import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const words = [
    'Initializing Portfolio...',
    'Aurosmita Sahoo - Full Stack & AI Developer',
    '4th Year CSE @ Centurion University',
    'Spring Boot • React • Node.js • AI',
    'Open to SDE Roles 2026'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 70);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section id="hero" className="hero-section">
      {/* Floating 3D Geometric Shapes - 10 Shapes Total */}
      <div className="floating-shapes">
        {/* Shape 1: Cube (Top Left) */}
        <div className="shape shape-1">
          <div className="cube"></div>
        </div>
        
        {/* Shape 2: Sphere (Top Right) */}
        <div className="shape shape-2">
          <div className="sphere"></div>
        </div>
        
        {/* Shape 3: Torus/Ring (Bottom Left) */}
        <div className="shape shape-3">
          <div className="torus"></div>
        </div>
        
        {/* Shape 4: Pyramid (Bottom Right) */}
        <div className="shape shape-4">
          <div className="pyramid"></div>
        </div>
        
        {/* Shape 5: Dodecahedron (Center) */}
        <div className="shape shape-5">
          <div className="dodecahedron"></div>
        </div>

        {/* NEW Shape 6: Star (Top Center) */}
        <div className="shape shape-6">
          <div className="star"></div>
        </div>

        {/* NEW Shape 7: Hexagon (Middle Left) */}
        <div className="shape shape-7">
          <div className="hexagon"></div>
        </div>

        {/* NEW Shape 8: Diamond (Middle Right) */}
        <div className="shape shape-8">
          <div className="diamond"></div>
        </div>

        {/* NEW Shape 9: Cross/Plus (Bottom Center) */}
        <div className="shape shape-9">
          <div className="cross"></div>
        </div>

        {/* NEW Shape 10: Triangle (Center Right) */}
        <div className="shape shape-10">
          <div className="triangle"></div>
        </div>
      </div>

      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Terminal Window */}
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="terminal-title">portfolio.sh</span>
          </div>
          <div className="terminal-body">
            <p className="terminal-line">
              <span className="prompt">$</span> 
              {text}
              <span className="cursor">▋</span>
            </p>
            <p className="terminal-line success">
              <span className="prompt"></span> Welcome to my portfolio 🔥
            </p>
          </div>
        </div>

        {/* Main Title */}
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <span className="gradient-text">Aurosmita Sahoo</span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Full Stack Developer • Spring Boot • MERN Stack • AI Developer
        </motion.p>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          Building scalable solutions with Spring Boot, React, and AI
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <Link to="projects" smooth={true} duration={500} className="btn-primary">
            <span>📂 View My Work</span>
            <span className="btn-glow"></span>
          </Link>
          <Link to="contact" smooth={true} duration={500} className="btn-secondary">
            💬 Let's Connect
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="hero-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
        >
          <a href="https://github.com/Auro993" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aurosmitasahoo/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/aurosmitasahoo/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LeetCode">
            <SiLeetcode />
          </a>
          <a href="mailto:aurosmitasahoo4@gmail.com" className="social-link" aria-label="Email">
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Stats - Only Location */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          <span>📍 Bhubaneswar, India</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;