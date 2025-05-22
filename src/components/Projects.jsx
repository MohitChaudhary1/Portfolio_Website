// src/components/Projects.jsx

import React from 'react';
import './Projects.css'; // Link to the updated CSS

const Projects = () => {
  const projects = [
    {
      title: "Cricket Stats Web App",
      points: [
        "Built using Next.js and React.js.",
        "Records ball-by-ball events for matches.",
        "Displays real-time stats like run rate, strike rate, economy.",
        "Minimal and responsive design."
      ],
      github: "https://github.com/MohitChaudhary1/Agentic_AI"
    },
    {
      title: "College E-Commerce Platform",
      points: [
        "Full-stack application using MERN stack.",
        "Supports shopkeeper dashboard with inventory control.",
        "Optimized UI for students and faculty.",
        "Reusable React components with search and cart features."
      ],
      github: "https://github.com/yourusername/college-ecommerce"
    },
    {
      title: "Food Delivery Web App",
      points: [
        "React.js with Tailwind CSS for clean UI.",
        "Functional cart, order preview, menu browsing.",
        "Mobile-first responsive design.",
        "Parcel bundler for blazing-fast builds."
      ],
      github: "https://github.com/MohitChaudhary1/Food-Delivery-WebApp"
    },
    {
      title: "AI Stock Analyst",
      points: [
        "Streamlit dashboard powered by LLMs.",
        "Uses phidata and GPT for insights.",
        "Live charting and stock comparison.",
        "Free APIs integrated with real-time analysis."
      ],
      github: "https://github.com/yourusername/ai-finance-analyst"
    },
    {
      title: "MCP Gemini Twitter Bot",
      points: [
        "Designed a Multi-Agent Control Problem (MCP) bot using Gemini Pro.",
        "Aggregates financial news and performs sentiment analysis.",
        "Automatically generates tweets based on sentiment summary.",
        "Integrated with Twitter API for real-time content publishing."
      ],
      github: "https://github.com/MohitChaudhary1/MCP_Gemini_Twitter_Bot"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <ul>
                {project.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                🔗 View GitHub Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
