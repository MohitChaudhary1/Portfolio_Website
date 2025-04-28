import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Contact</h2>
        <div className="contact-icons">
          <a href="https://github.com/MohitChaudhary1" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
          <a href="https://www.linkedin.com/in/chaudhary-mohit/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="mailto:chaudharymohit2307@gmail.com"><FaEnvelope size={30} /></a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
