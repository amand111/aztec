import React, { useState, useEffect } from 'react';
import './Header.css';
import ParticleNetwork from './ParticleNetwork';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo">
          <span className="logo-text">Aman Dhawan</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="wave">👋</span> Hi, I'm <span className="name">Aman Dhawan</span>
          </h1>
          <p className="hero-subtitle">Senior Software Engineer</p>
          <p className="hero-company">at Prophecy.io</p>
          <p className="hero-description">
            Building AI-powered solutions and scalable backend systems. 
            Passionate about creating innovative technology that makes a difference.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="https://github.com/amand11" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              View GitHub
            </a>
          </div>
        </div>
        <div className="hero-image">
          <ParticleNetwork />
        </div>
      </div>
    </header>
  );
};

export default Header; 