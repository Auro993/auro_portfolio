import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../../../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const { email, github, linkedin, leetcode, location } = portfolioData;
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // EmailJS Credentials
  const SERVICE_ID = 'service_y9vfz3t';
  const TEMPLATE_ID = 'xro15eg';
  const PUBLIC_KEY = 'aFwzLA66fWZrxBkp';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        form.current.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: email, link: `mailto:${email}` },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: location || 'Bhubaneswar, India', link: null },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: github, label: 'GitHub', color: '#FFFFFF' },
    { icon: <FaLinkedin />, url: linkedin, label: 'LinkedIn', color: '#0A66C2' },
    { icon: <SiLeetcode />, url: leetcode, label: 'LeetCode', color: '#FFA116' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Background Glow */}
      <div className="contact-glow"></div>
      <div className="contact-glow2"></div>

      {/* Section Header */}
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="header-line"></div>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <div className="header-line"></div>
      </motion.div>

      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        I typically respond within 6-8 hours
      </motion.p>

      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Side - Contact Info */}
        <motion.div 
          className="contact-info"
          variants={itemVariants}
        >
          <h3>Get in Touch</h3>
          <p className="contact-description">
            I'm always open to new opportunities, collaborations, or just a friendly chat. 
            Feel free to reach out!
          </p>

          <div className="contact-details">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link || '#'}
                className="contact-item"
                whileHover={{ x: 8, color: '#00F0FF' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="contact-icon">{item.icon}</span>
                <div>
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="social-section">
            <h4>Connect with me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.1,
                    boxShadow: `0 8px 30px rgba(0, 240, 255, 0.15)`
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                  <span className="social-label">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div 
            className="availability"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="status-dot"></span>
            <span>Available for opportunities</span>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form with EmailJS */}
        <motion.form 
          className="contact-form"
          ref={form}
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="user_name">Your Name</label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input 
                type="text" 
                id="user_name"
                name="user_name"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="user_email">Your Email</label>
            <div className="input-wrapper">
              <span className="input-icon">✉️</span>
              <input 
                type="email" 
                id="user_email"
                name="user_email"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <div className="input-wrapper textarea-wrapper">
              <textarea 
                id="message"
                name="message"
                rows="4"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>
          </div>

          <motion.button 
            type="submit" 
            className="submit-btn"
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 8px 40px rgba(0, 240, 255, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="spinner">
                <span className="spinner-dot"></span>
                <span className="spinner-dot"></span>
                <span className="spinner-dot"></span>
              </span>
            ) : (
              <>
                <span>Send Message</span>
                <span className="btn-arrow">→</span>
              </>
            )}
          </motion.button>

          {submitStatus === 'success' && (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✅ Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div 
              className="error-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ❌ Failed to send. Please try again or email me directly.
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;