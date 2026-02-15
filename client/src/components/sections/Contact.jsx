import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="text-display center-title">HOW <span className="text-outline">CAN</span> I HELP?</h2>
        
        <div className="help-grid">
          <div className="help-text">
            <p>I am a multidisciplinary designer specializing in creative leadership, UX/UI design, product strategy, and interactive solutions. I am with you from the very beginning to the end, but even after the release I am with you.</p>
          </div>
          <div className="help-text">
            <p>I believe that effective design should be simple, should feel like it was meant to be exactly like that, as it is. I am with you to achieve challenging business goals with the help of my tools. I like tasks for self-improvement and progress.</p>
          </div>
        </div>

        <div className="skills-footer-grid">
          <div className="skills-col">
            <h4>SKILLS</h4>
            <ul>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>After Effects</li>
              <li>Webflow</li>
              <li>Marketing</li>
              <li>Copy</li>
            </ul>
          </div>
          <div className="skills-col">
            <h4>WORK</h4>
            <ul>
              <li>User flow</li>
              <li>UX/UI</li>
              <li>Development of complex interfaces</li>
              <li>E-commerce sites</li>
              <li>Multi-page sites</li>
              <li>Landing pages</li>
              <li>Mobile apps</li>
            </ul>
          </div>
        </div>

        <div className="contact-footer-main">
          <h2 className="text-display">CONTACT</h2>
          <h2 className="text-display text-outline">ME</h2>
          
          <div className="footer-bottom">
            <div className="socials">
              <span>Behance</span>
              <span>Instagram</span>
              <span>LinkedIn</span>
            </div>
            <div className="email-box">
              <span>CONTACTS</span>
              <a href="mailto:serhii.demychev@gmail.com">serhii.demychev@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
