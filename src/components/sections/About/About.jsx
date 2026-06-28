import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-image"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="image-wrapper">
            <img 
              src="/assets/auro_photo.jpeg" 
              alt="Aurosmita Sahoo" 
              className="profile-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://ui-avatars.com/api/?name=Aurosmita+Sahoo&background=0A0A0A&color=00F0FF&size=300';
              }}
            />
            <div className="image-ring"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="about-badge">
            <span className="dot-pulse"></span>
            About Me
          </div>
          
          <h2 className="about-title">
            Full Stack & AI Developer<br />
            <span className="gradient-text">Building the Future</span>
          </h2>
          
          <p className="about-text">
            Hi, I'm a <strong>Full Stack Developer</strong> and <strong>AI enthusiast</strong> 
            passionate about building scalable, user-focused applications. I specialize in{' '}
            <strong>Spring Boot</strong>, <strong>MERN Stack</strong>, and{' '}
            <strong>AI-based solutions</strong>, with a strong interest in solving real-world 
            problems through technology.
          </p>
          
          <p className="about-text">
            I love turning ideas into functional products and continuously exploring new tools, 
            frameworks, and innovations in software development.
          </p>

          <p className="about-text">
            I enjoy working on both <strong>frontend</strong> and <strong>backend development</strong>, 
            ensuring seamless user experiences and robust system performance. I am always eager to learn, 
            collaborate with innovative teams, and contribute to impactful projects that create 
            meaningful value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;