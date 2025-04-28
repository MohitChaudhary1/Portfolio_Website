import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Mohit Chaudhary</div>
      <div className="nav-links">
        <Link to="landing" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="resume" smooth={true} duration={500}>Resume</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
