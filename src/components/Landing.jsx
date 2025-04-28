import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import './Landing.css';

function Landing() {
  return (
    <section id="landing" className="landing-section">
      <motion.div 
        className="landing-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm Mohit Chaudhary</h1>
        <h2>
          <Typewriter
            words={['Web Developer', 'MERN Stack Developer', 'AI Enthusiast']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p>Building beautiful web experiences 🚀</p>
      </motion.div>
    </section>
  );
}

export default Landing;
