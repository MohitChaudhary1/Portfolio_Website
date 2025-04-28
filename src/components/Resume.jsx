import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <motion.div
        className="resume-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Resume</h2>
        <a href="/resume.pdf" download className="download-btn">Download Resume</a>
      </motion.div>
    </section>
  );
}

export default Resume;
