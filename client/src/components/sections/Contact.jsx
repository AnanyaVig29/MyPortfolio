import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const footerY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  
  const currentYear = new Date().getFullYear();
  
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Ananya_Vig_Resume.pdf';
    link.download = 'Ananya_Vig_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const contactInfo = [
    {
      label: 'EMAIL',
      value: 'ananyavig@gmail.com',
      href: 'mailto:ananyavig@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      label: 'GITHUB',
      value: 'AnanyaVig29',
      href: 'https://github.com/AnanyaVig29',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      label: 'LINKEDIN',
      value: 'ananya-vig',
      href: 'https://www.linkedin.com/in/ananya-vig-b915a8336/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-main">
          {/* Header Section with Parallax */}
          <motion.div 
            className="contact-header"
            style={{ y: headerY, opacity: headerOpacity }}
          >
            <motion.h2 
              className="text-display contact-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              CONTACT
            </motion.h2>
            
            <motion.h2 
              className="text-display text-outline contact-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              US
            </motion.h2>
          </motion.div>

          {/* Contact Info Section */}
          <div className="contact-content">
            <motion.p 
              className="contact-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Open to opportunities and collaborations.
            </motion.p>

            <motion.div 
              className="contact-info-grid"
              style={{ y: cardsY }}
            >
              {contactInfo.map((info, index) => (
                <ContactCard key={info.label} info={info} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Footer Section Merged */}
          <motion.div 
            className="footer-merged"
            style={{ y: footerY }}
          >
            <div className="footer-bg-text" aria-hidden="true">
              ANANYA VIG
            </div>

            <button
              className="footer-resume-button"
              onClick={handleDownloadResume}
              aria-label="Download Resume"
            >
              <motion.div 
                className="footer-logo"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </motion.div>
              <span className="resume-text">Download Resume</span>
            </button>

            <div className="footer-bottom">
              <div className="footer-decorative-line"></div>
              <p className="footer-copyright">
                © {currentYear} Ananya Vig. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Individual Contact Card Component
const ContactCard = ({ info, index }) => {
  return (
    <motion.div
      className="contact-info-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="contact-icon">
        {info.icon}
      </div>
      <div className="contact-info-content">
        <span className="contact-label">
          {info.label}
        </span>
        {info.href ? (
          <a 
            href={info.href}
            className="contact-value"
            target="_blank"
            rel="noopener noreferrer"
          >
            {info.value}
          </a>
        ) : (
          <span className="contact-value">
            {info.value}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
