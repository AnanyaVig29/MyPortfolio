import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-content">
          <span className="section-label text-body">03 / Contact</span>
          
          <h2 className="contact-title text-display">
            Let's create something <br /> 
            <span className="text-muted">meaningful together.</span>
          </h2>
          
          <a href="mailto:hello@alex.design" className="email-link text-display">
            hello@alex.design
          </a>
          
          <div className="contact-footer">
            <div className="social-links">
              <a href="#" className="social-link text-body">Instagram</a>
              <a href="#" className="social-link text-body">LinkedIn</a>
              <a href="#" className="social-link text-body">Twitter</a>
              <a href="#" className="social-link text-body">Dribbble</a>
            </div>
            
            <div className="copyright text-body">
              © 2026 Alex Design.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
