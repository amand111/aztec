import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "NTSE Scholar 2016",
      description: "National Talent Search Examination Scholar",
      icon: "🏆"
    },
    {
      title: "700+ LeetCode Problems",
      description: "Solved over 700 algorithmic problems",
      icon: "💻"
    },
    {
      title: "Representative",
      description: "Enigma, Quizzing Club of IIT Ropar",
      icon: "🧠"
    },
    {
      title: "Project Member Enactus",
      description: "IIT Ropar (2018-20)",
      icon: "🤝"
    },
    {
      title: "NSS Volunteer",
      description: "National Service Scheme (2018-20)",
      icon: "🌟"
    }
  ];

  return (
    <section id="achievements" className="section achievements">
      <h2>Achievements & Activities</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements; 