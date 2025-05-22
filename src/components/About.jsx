import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>Driven Undergrad with 1.5 years of experience in full-stack development, building scalable web applications and impactful user interfaces. Eager to explore opportunities at the intersection of software engineering and Artificial intelligence systems.</p>
      </motion.div>
    </section>
  );
}

export default About;
