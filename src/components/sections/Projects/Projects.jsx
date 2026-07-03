import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../../../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  const totalProjects = projects.length;

  // Handle scroll to change project - FULL VIEWPORT
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const viewportHeight = window.innerHeight;
      
      const scrollY = window.scrollY - sectionRef.current.offsetTop;
      const newIndex = Math.min(
        Math.floor(scrollY / viewportHeight),
        totalProjects - 1
      );

      if (newIndex !== currentIndex && newIndex >= 0) {
        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentIndex, totalProjects]);

  // Smooth scroll to project
  const goToProject = (index) => {
    const targetElement = projectRefs.current[index];
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      {/* Header - Same as Skills Section */}
      <div className="projects-header">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">Scroll to explore my work</p>
      </div>

      {/* Projects Container - Full Viewport Each */}
      <div className="projects-container">
        {projects.map((project, index) => {
          const isActive = index === currentIndex;
          
          // Format tech stack as a code string
          const techString = project.tech.map(t => `'${t}'`).join(', ');
          
          return (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className={`project-wrapper ${isActive ? 'active' : ''}`}
              style={{ minHeight: '100vh' }}
            >
              <div className="project-content-wrapper">
                {/* Project Number - Fixed */}
                <div className="project-number">
                  <span className="number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="total"> / {String(totalProjects).padStart(2, '0')}</span>
                </div>

                {/* Code-like Display - Full Width */}
                <div className="project-code-display">
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-variable"> project</span>
                    <span className="code-operator"> =</span>
                    <span className="code-brace">{' {'}</span>
                  </div>
                  
                  <div className="code-line indent-1">
                    <span className="code-key">name</span>
                    <span className="code-operator">:</span>
                    <span className="code-string"> '{project.title}'</span>
                    <span className="code-comma">,</span>
                  </div>
                  
                  <div className="code-line indent-1">
                    <span className="code-key">tools</span>
                    <span className="code-operator">:</span>
                    <span className="code-bracket">[</span>
                    <span className="code-string">{techString}</span>
                    <span className="code-bracket">]</span>
                    <span className="code-comma">,</span>
                  </div>
                  
                  <div className="code-line indent-1">
                    <span className="code-key">myRole</span>
                    <span className="code-operator">:</span>
                    <span className="code-string"> '{project.category || 'Full Stack Developer'}'</span>
                    <span className="code-comma">,</span>
                  </div>
                  
                  <div className="code-line indent-1">
                    <span className="code-key">status</span>
                    <span className="code-operator">:</span>
                    <span className="code-string"> '{project.status}'</span>
                    <span className="code-comma">,</span>
                  </div>
                  
                  <div className="code-line indent-1">
                    <span className="code-key">description</span>
                    <span className="code-operator">:</span>
                    <span className="code-string"> '{project.description}'</span>
                    <span className="code-comma">,</span>
                  </div>
                  
                  <div className="code-line">
                    <span className="code-brace">{'}'}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-demo"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github"
                  >
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fixed Navigation - Right Side */}
      <div className="fixed-nav">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`nav-btn ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToProject(index)}
          >
            <span className="nav-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="nav-line"></span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;