import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      icon: "💻",
      skills: ["Java", "Python", "JavaScript", "SQL"]
    },
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Responsive Web Design"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT Authentication"]
    },
    {
      category: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "MongoDB"]
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Postman", "Docker"]
    },
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      skills: ["Generative AI", "Machine Learning", "Deep Learning", "Prompt Engineering", "LLM Applications"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </motion.div>

      <div className="skills-grid">
        {skillsData.map((item, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 10px 40px rgba(0, 240, 255, 0.08)'
            }}
          >
            <div className="skill-card-header">
              <span className="skill-icon">{item.icon}</span>
              <h3 className="skill-category">{item.category}</h3>
            </div>
            <div className="skill-tags">
              {item.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;