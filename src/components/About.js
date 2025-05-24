import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate Senior Software Engineer with expertise in building AI-powered solutions 
            and scalable backend systems. Currently working at Prophecy.io, I specialize in developing 
            innovative features using cutting-edge technologies like LangGraph, Python, and Scala.
          </p>
          <p>
            My journey in tech has been driven by curiosity and a desire to solve complex problems. 
            From developing business requirement-to-pipeline agent systems to creating robust analytics 
            modules, I enjoy working on projects that push the boundaries of what's possible.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">700+</span>
              <span className="stat-label">LeetCode Problems</span>
            </div>
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">IIT</span>
              <span className="stat-label">Graduate</span>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="profile-card">
            <div className="card-header">
              <div className="terminal-buttons">
                <span className="btn-close"></span>
                <span className="btn-minimize"></span>
                <span className="btn-maximize"></span>
              </div>
            </div>
            <div className="card-content">
              <div className="typing-text">
                <span>const developer = {`{`}</span><br/>
                <span>&nbsp;&nbsp;name: "Aman Dhawan",</span><br/>
                <span>&nbsp;&nbsp;role: "Senior SWE",</span><br/>
                <span>&nbsp;&nbsp;passion: "AI & Backend",</span><br/>
                <span>&nbsp;&nbsp;location: "Bengaluru"</span><br/>
                <span>{`}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 