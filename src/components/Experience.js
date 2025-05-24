import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Prophecy.io",
      role: "Senior Software Engineer",
      period: "March 2024 - Present",
      location: "Bengaluru, India",
      highlights: [
        "Promoted to Senior Software Engineer for leadership and technical contributions",
        "Spearheaded Specflow development - business requirement-to-pipeline agent system using LangGraph, Python, and Scala",
        "Led Columbus Dataset Explorer Agent project end-to-end for multi-platform dataset discovery",
        "Implemented audio support in Prophecy Copilot with speech-to-text and text-to-speech",
        "Contributed to Copilot Analytics for tracking AI feature usage and accuracy metrics",
        "Overhauled expression suggestion with personalized prompts and multi-dialect support"
      ],
      technologies: ["Python", "Scala", "LangGraph", "AI/ML", "Databricks", "Snowflake"]
    },
    {
      company: "Mudrex",
      role: "Software Development Engineer - Backend",
      period: "June 2022 - Feb 2024",
      location: "Bengaluru, India",
      highlights: [
        "Created and managed Darwin-Services using Elasticsearch and Go programming",
        "Developed Event-Services microservice for routing user events to Customer Data Platform",
        "Designed multi-faceted Token Rating System with Technical, Fundamental, and Sentimental ratings",
        "Implemented Portfolio Insights calculating time-weighted returns and asset distribution"
      ],
      technologies: ["Go", "Elasticsearch", "Microservices", "Redis", "PostgreSQL"]
    },
    {
      company: "INDmoney",
      role: "Software Engineer Intern",
      period: "Feb 2022 - May 2022",
      location: "Remote",
      highlights: [
        "Built add money and withdraw money screens for neobanking in VIPER architecture",
        "Developed polling screen for UPI transactions using Swift and UIKit",
        "Contributed to widget library with Common Image and Radio Widget components"
      ],
      technologies: ["Swift", "UIKit", "iOS", "VIPER Architecture"]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="experience-header">
                <h3 className="company">{exp.company}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <h4 className="role">{exp.role}</h4>
              <p className="location">{exp.location}</p>
              
              <ul className="highlights">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              
              <div className="technologies">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 