import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';

const steps = [
  { id: '01', title: 'BRIEFING', content: 'In this stage, I look for an acquaintance with the customer and the project, we discuss what work needs to be carried out.' },
  { id: '02', title: 'ANALYTICS', content: 'Detailed market and competitor analysis to find the best positioning.' },
  { id: '03', title: 'PROTOTYPING', content: 'Creating low-fidelity wireframes to test user flows.' },
  { id: '04', title: 'DESIGN', content: 'High-fidelity visual design and interactive prototypes.' },
  { id: '05', title: 'ADAPTIVE', content: 'Ensuring the design works perfectly on all devices.' },
  { id: '06', title: 'THE FINAL', content: 'Handover to developers and final quality checks.' }
];

const About = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="about-section">
      <div className="container">
        <div className="section-title-box">
          <h2 className="text-display">STAGES OF WEBSITE</h2>
          <h2 className="text-display text-outline">DEVELOPMENT</h2>
        </div>

        <div className="accordion">
          {steps.map((step) => (
            <div key={step.id} className="accordion-item">
              <div 
                className="accordion-trigger"
                onClick={() => setActive(active === step.id ? null : step.id)}
              >
                <div className="trigger-left">
                  <span className="step-id">STEP {step.id}</span>
                  <span className="step-title">{step.title}</span>
                </div>
                <span className="plus">{active === step.id ? '×' : '+'}</span>
              </div>
              <AnimatePresence>
                {active === step.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="accordion-content"
                  >
                    <p>{step.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
