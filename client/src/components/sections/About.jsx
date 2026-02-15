import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-label">
            <span className="section-label text-body">01 / About</span>
          </div>
          <div className="about-content">
            <h2 className="about-text text-display">
              I am a creative developer based in San Francisco. I combine technology and design to create memorable web experiences.
            </h2>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number text-display">5+</span>
                <span className="stat-label text-body">Years of Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-display">40+</span>
                <span className="stat-label text-body">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-display">15+</span>
                <span className="stat-label text-body">Awards Won</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
