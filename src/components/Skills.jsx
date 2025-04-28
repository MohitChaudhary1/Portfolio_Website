import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  const skills = ['React', 'NodeJS', 'HTML', 'CSS', 'JavaScript','Streamlit','MCP','REST APIs','Python','ExpressJS'];

  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="skills-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-box" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
