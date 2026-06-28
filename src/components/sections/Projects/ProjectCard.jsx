import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const { title, description, tech, github, demo, metrics, status, category } = project;

  return (
    <motion.div 
      className="project-card glass"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 60px rgba(0, 240, 255, 0.15)'
      }}
    >
      <div className="card-header">
        <div className="project-status">
          <span className={`status-dot ${status === 'Live' ? 'live' : 'progress'}`}></span>
          <span className="status-text">{status}</span>
        </div>
        <span className="category-badge">{category}</span>
      </div>

      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      <div className="tech-stack">
        {tech.slice(0, 4).map(t => (
          <span key={t} className="tech-pill">{t}</span>
        ))}
        {tech.length > 4 && <span className="tech-pill">+{tech.length - 4}</span>}
      </div>

      {metrics && (
        <div className="metrics-row">
          <div className="metric">
            <span className="metric-value">{metrics.value}</span>
            <span className="metric-label">{metrics.label}</span>
          </div>
        </div>
      )}

      <div className="card-actions">
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="btn-demo">
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn-github">
            <FaGithub /> Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;