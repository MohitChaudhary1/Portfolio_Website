import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  const projectList = [
    { title: 'Cricket Stats App', desc: 'Multi-agent LLM system (CrewAI, Groq) for real-time predictions/commentary. Automated data pipeline cut analysis time by 80%. Achieved 76% accuracy in IPL predictions, advancing sports analytics.', github: 'https://github.com/MohitChaudhary1/Agentic_AI/blob/main/CricketAnalyst.py' },
    { title: 'Food Delivery App', desc: 'Full-stack campus utility app (2K+ users) boosted marketplace transactions by 35%. Features: real-time orders, merchant dashboard (inventory/orders), role-based auth, and search. Improved UX for students/shopkeepers.', github: 'https://github.com/yourgithub/food-delivery' },
    { title: 'MCP Gimini Twitter Bot App', desc: 'Built AI agent (Gemini, MCP) for task automation. Designed secure Node.js client-server with dynamic tool discovery (SSE). Automated Twitter posting via API v2 + OAuth 1.0a, ensuring robust security.', github: 'https://github.com/MohitChaudhary1/MCP_Gemini_Twitter_Bot' },
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Projects</h2>
        <div className="project-list">
          {projectList.map((proj, index) => (
            <div className="project-card" key={index}>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <a href={proj.github} target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
