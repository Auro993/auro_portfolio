import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/portfolioData';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="education-section">
      {/* Section Header */}
      <div className="education-header">
        <div className="header-line"></div>
        <h2 className="section-title">
          My <span className="gradient-text">Education</span>
        </h2>
        <div className="header-line"></div>
      </div>

      <div className="education-wrapper">
        {/* Left Side - SVG Only */}
        <div className="education-animation">
          <img 
            src="/eduBlue.svg" 
            alt="Education Background" 
            className="education-bg-svg"
          />
          <div className="animation-container">
            <div className="education-orb">
              <div className="orb-gradient"></div>
              <div className="orb-ring"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Education Cards */}
        <div className="education-cards-wrapper">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              className="education-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: '0 10px 40px rgba(0, 240, 255, 0.1)'
              }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-duration">{item.duration}</div>
                <div className="card-body">
                  <div className="card-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="card-details">
                    <h3>{item.title}</h3>
                    <p className="card-institution">{item.institution}</p>
                    <p className="card-grade">{item.cgpa}</p>
                    <div className="card-courses">
                      {item.courses && item.courses.map((course, idx) => (
                        <span key={idx} className="course-badge">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;