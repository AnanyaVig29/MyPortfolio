import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import './About.css';

// Development workflow stages configuration
const steps = [
  { id: '01', title: 'RESEARCH & PROBLEM ANALYSIS', content: 'Understanding user needs and project requirements through research and analysis. Identifying problems to solve, exploring potential solutions, and planning the development approach with a focus on real-world applications.' },
  { id: '02', title: 'UI/UX DESIGN & PROTOTYPING', content: 'Designing intuitive, user-friendly interfaces with emphasis on responsive layouts and accessibility. Creating wireframes and prototypes to visualize the user experience before development, ensuring designs work seamlessly across all devices.' },
  { id: '03', title: 'FRONTEND DEVELOPMENT', content: 'Building modern, responsive web applications using React, JavaScript, and contemporary frontend technologies. Writing clean, maintainable code following component-based architecture and best practices for scalable application development.' },
  { id: '04', title: 'TESTING & DEBUGGING', content: 'Conducting comprehensive testing across multiple browsers and devices to ensure consistent functionality and user experience. Identifying and resolving bugs, optimizing performance, and refining features based on testing results.' },
  { id: '05', title: 'COLLABORATION & LEARNING', content: 'Working collaboratively in team environments, participating in hackathons, and engaging in peer code reviews. Continuously learning new technologies and methodologies while contributing to group projects and technical discussions.' },
  { id: '06', title: 'DEPLOYMENT & ITERATION', content: 'Deploying projects using modern hosting platforms and version control with Git/GitHub. Gathering user feedback, implementing improvements, and iterating on solutions to deliver better products and enhance user satisfaction.' }
];

const About = () => {
  // Track which accordion item is active/open
  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  
  // Scroll progress tracking for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Spring animation configurations for smooth motion
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const fastSpring = { stiffness: 150, damping: 35, restDelta: 0.001 };
  
  // Multi-layer parallax for depth effect (different elements move at different speeds)
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [150, -250]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [100, -150]), springConfig);
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [60, -100]), springConfig);
  const y4 = useSpring(useTransform(scrollYProgress, [0, 1], [30, -60]), fastSpring);
  
  // Marquee section parallax
  const marqueeY = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), springConfig);
  
  // Section fade and scale effects
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1.02, 1, 0.98]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
  
  // Background decoration parallax
  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 400]), springConfig);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.2, 0.2, 0.1]);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* Marquee Section Above About */}
      <motion.div 
        className="about-marquee-section border-top border-bottom"
        style={{ y: marqueeY }}
      >
        <div className="about-marquee-content">
          <div className="about-marquee-track">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="about-marquee-item">ABOUT ME × WHO I AM × </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Decorative background elements */}
      <motion.div 
        className="about-bg-decoration"
        style={{ y: bgY, opacity: bgOpacity }}
      >
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
      </motion.div>
      
      <div className="container">
        <motion.div 
          className="section-title-box"
          style={{ y: y1, opacity, scale, rotate }}
        >
          <motion.h2 
            className="text-display"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ABOUT
          </motion.h2>
          <motion.h2 
            className="text-display text-outline"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            ME
          </motion.h2>
        </motion.div>

        <motion.div 
          className="about-intro"
          style={{ y: y2 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="intro-content">
            <motion.div 
              className="intro-label"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="label-line"></span>
              <span className="label-text">WHO I AM</span>
            </motion.div>
            <motion.p 
              className="intro-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Detail-oriented <strong>Bachelor of Computer Applications (BCA)</strong> student at <strong>Jagannath International Management School (JIMS)</strong> with hands-on experience in frontend web development, UI/UX implementation, and system design. Experienced in building responsive, user-focused web applications using modern technologies and collaborative development practices. Actively involved in national-level hackathons and technical projects, with a strong interest in problem-solving, product development, and delivering scalable, real-world software solutions.
            </motion.p>
            
          </div>
        </motion.div>

        <motion.div 
          className="process-section"
          style={{ y: y4 }}
        >
          <motion.div 
            className="process-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="process-title">
              STAGES OF WEBSITE<br />DEVELOPMENT
            </h3>
          </motion.div>

          <div className="accordion">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id} 
                className={`accordion-item ${active === step.id ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  className="accordion-trigger"
                  onClick={() => setActive(active === step.id ? null : step.id)}
                  whileHover={{ backgroundColor: 'rgba(60, 50, 40, 0.02)' }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="stage-label">STAGE {step.id}</span>
                  <h3 className="stage-title">{step.title}</h3>
                  <motion.div 
                    className="stage-icon"
                    animate={{ 
                      rotate: active === step.id ? 45 : 0
                    }}
                    whileHover={{ scale: 1.08, opacity: 0.8 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <line x1="10" y1="5" x2="10" y2="15"></line>
                      <line x1="5" y1="10" x2="15" y2="10"></line>
                    </svg>
                  </motion.div>
                </motion.div>
                <AnimatePresence initial={false}>
                  {active === step.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                          opacity: { duration: 0.3, delay: 0.1 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                          opacity: { duration: 0.2 }
                        }
                      }}
                      className="stage-content"
                    >
                      <motion.div
                        className="content-inner"
                        initial={{ y: -15, opacity: 0 }}
                        animate={{ 
                          y: 0, 
                          opacity: 1,
                          transition: { duration: 0.4, delay: 0.15, ease: [0.4, 0, 0.2, 1] }
                        }}
                        exit={{ 
                          y: -10, 
                          opacity: 0,
                          transition: { duration: 0.25 }
                        }}
                      >
                        <p className="content-text">{step.content}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
