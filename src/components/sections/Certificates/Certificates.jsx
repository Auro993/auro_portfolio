import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/portfolioData';
import './Certificates.css';

const Certificates = () => {
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="certificates-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          My <span className="gradient-text">Certificates</span>
        </h2>
        <p className="section-subtitle">Recognized for my technical expertise</p>
      </motion.div>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <motion.div 
            key={cert.id}
            className="certificate-card glass"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              rotate: (Math.random() - 0.5) * 3
            }}
            viewport={{ once: true }}
          >
            <div className="certificate-image-wrapper">
              <img 
                src={cert.image} 
                alt={cert.name}
                className="certificate-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/200x150/1A1A1A/00F0FF?text=' + cert.name;
                }}
              />
            </div>
            <div className="certificate-info">
              <h4>{cert.name}</h4>
              <p>{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;