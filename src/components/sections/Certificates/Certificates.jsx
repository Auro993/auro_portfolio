import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { portfolioData } from '../../../data/portfolioData';
import './Certificates.css';

const Certificates = () => {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);
  const scrollContainerRef = useRef(null);

  const openCertificate = (cert) => {
    setSelectedCert(cert);
  };

  const closeCertificate = () => {
    setSelectedCert(null);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="certificates" className="certificates-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="certificates-header">
          <div className="header-line"></div>
          <h2 className="section-title">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <div className="header-line"></div>
        </div>
        <p className="section-subtitle">Scroll horizontally to explore my certificates</p>
      </motion.div>

      <div className="certificates-scroll-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="certificates-scroll" ref={scrollContainerRef}>
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certificate-card-scroll"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: '0 15px 50px rgba(0, 240, 255, 0.08)',
                borderColor: 'rgba(0, 240, 255, 0.2)'
              }}
              onClick={() => openCertificate(cert)}
            >
              <div className="cert-card-scroll-content">
                <div className="cert-number-scroll">#{String(index + 1).padStart(2, '0')}</div>
                <div className="cert-image-wrapper-scroll">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="cert-thumbnail-scroll"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="cert-fallback-scroll">
                          <span>📜</span>
                          <span>${cert.name}</span>
                        </div>
                      `;
                    }}
                  />
                  <div className="cert-image-overlay-scroll">
                    <FaEye />
                    <span>Click to View</span>
                  </div>
                </div>
                <div className="cert-info-scroll">
                  <h3 className="cert-name-scroll">{cert.name}</h3>
                  <p className="cert-issuer-scroll">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificate}
          >
            <motion.div
              className="cert-modal"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="cert-modal-close" onClick={closeCertificate}>
                <FaTimes />
              </button>
              <div className="cert-modal-content">
                <h2>{selectedCert.name}</h2>
                <p className="cert-modal-issuer">Issued by: {selectedCert.issuer}</p>
                <div className="cert-modal-image">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="cert-placeholder">
                          <span>📜</span>
                          <p>Certificate Preview</p>
                          <small>${selectedCert.name}</small>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;