import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Go", "Scala", "C/C++", "SQL", "Swift"]
    },
    {
      title: "Frameworks & Tools",
      icon: "🛠️",
      skills: ["LangGraph", "FastAPI", "Kubernetes", "Docker", "Redis", "Elasticsearch"]
    },
    {
      title: "AI & Data",
      icon: "🤖",
      skills: ["Machine Learning", "LLMs", "Data Mining", "Databricks", "Snowflake"]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
            </div>
            <div className="skills-container">
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 