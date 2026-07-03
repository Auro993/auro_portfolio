import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Auro993", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/aurosmitasahoo/", label: "LinkedIn" },
    { icon: <SiLeetcode />, url: "https://leetcode.com/aurosmitasahoo/", label: "LeetCode" },
    { icon: <FaEnvelope />, url: "mailto:aurosmitasahoo4@gmail.com", label: "Email" },
  ];

  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Education', to: 'education' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' }
  ];

  return (
    <footer className="footer">
      {/* Top Section - Divider with gradient */}
      <div className="footer-divider">
        <div className="divider-line"></div>
        <div className="divider-icon">✦</div>
        <div className="divider-line"></div>
      </div>

      <div className="footer-content">
        {/* Left Section - Brand */}
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="brand-name">
            <span className="gradient-text">Aurosmita</span> Sahoo
          </h3>
          <p className="brand-tagline">Full Stack Developer • AI Enthusiast • SDE '26</p>
          <div className="brand-social">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-social-link"
                whileHover={{ 
                  y: -3,
                  scale: 1.1,
                  color: '#00F0FF'
                }}
                transition={{ type: "spring", stiffness: 300 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Center Section - Navigation */}
        <motion.div 
          className="footer-nav"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="footer-nav-title">Quick Links</h4>
          <ul className="footer-nav-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  className="footer-nav-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Section - Removed Tech Stack */}
      </div>

      {/* Bottom Section - Copyright */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="footer-bottom-line"></div>
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © {currentYear} Aurosmita Sahoo. Built with{' '}
            <span className="heart">❤️</span>
          </p>
          <p className="footer-credit">
            Designed with passion • Crafted with code
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;