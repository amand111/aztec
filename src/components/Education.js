import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section education">
      <h2>Education</h2>
      <div className="education-content">
        <div className="education-card">
          <div className="education-header">
            <div className="degree-info">
              <h3 className="degree">BTech in Computer Science & Engineering</h3>
              <h4 className="institute">Indian Institute of Technology, Ropar</h4>
              <p className="duration">2018 - 2022</p>
            </div>
            <div className="cgpa">
              <span className="cgpa-label">CGPA</span>
              <span className="cgpa-value">7.58</span>
            </div>
          </div>
          
          <div className="courses-section">
            <h4 className="courses-title">Key Courses</h4>
            <div className="courses-grid">
              <div className="course-category">
                <h5>Computer Science</h5>
                <ul>
                  <li>Algorithm & Data Structure</li>
                  <li>Operating Systems</li>
                  <li>Database Management Systems</li>
                  <li>Software Engineering</li>
                  <li>Computer Networks</li>
                  <li>Computer Architecture</li>
                </ul>
              </div>
              <div className="course-category">
                <h5>Mathematics & ML</h5>
                <ul>
                  <li>Machine Learning</li>
                  <li>Data Mining</li>
                  <li>Social Computing</li>
                  <li>Probability & Statistics</li>
                  <li>Linear Algebra</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 