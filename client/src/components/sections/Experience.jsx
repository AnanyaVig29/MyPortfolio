import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    role: "Manager – IT Club",
    company: "Jagannath International Management School (JIMS)",
    location: "Delhi, India",
    duration: "2024 - Present",
    type: "Leadership Role",
    description: "Leading technical planning, execution, and coordination of IT Club initiatives while managing institutional web development projects and cross-functional team collaboration",
    responsibilities: [
      "Led the development and maintenance of two institutional websites for the IT Club and college events, ensuring reliability, scalability, and optimal performance",
      "Collaborated with cross-functional teams of designers and developers to deliver responsive, performance-optimized web solutions using React and modern frameworks",
      "Worked closely with the SEO team to enhance digital visibility and search performance of institutional platforms through optimization strategies",
      "Coordinated with faculty members and student teams to align technical projects with academic and administrative objectives, ensuring seamless integration",
      "Organized and managed technical events, workshops, and hackathons for the college community, fostering innovation and skill development",
      "Implemented modern web development practices including component-based architecture, version control with Git/GitHub, and responsive design principles",
      "Provided technical mentorship to club members, conducted code reviews, and established best practices for collaborative development",
      "Managed project timelines, resource allocation, and stakeholder communication to ensure successful delivery of institutional digital initiatives"
    ],
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Git/GitHub", "SEO Optimization", "Responsive Design", "Figma"]
  }
];

const ExperienceCard = ({ exp, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [120, -120]), springConfig);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? -2 : 2, 0, index % 2 === 0 ? 2 : -2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <motion.div
      ref={cardRef}
      className="experience-card"
      style={{ y, scale, rotate, opacity }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <div className="exp-timeline-marker">
        <motion.div 
          className="timeline-dot"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.3 + 0.3 }}
          viewport={{ once: true }}
        />
        <div className="timeline-line" />
      </div>

      <motion.div 
        className="exp-content"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
        viewport={{ once: true }}
      >
        <div className="exp-header">
          <div className="exp-title-section">
            <motion.span 
              className="exp-type"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.3 + 0.3 }}
              viewport={{ once: true }}
            >
              {exp.type}
            </motion.span>
            <h3 className="exp-role">{exp.role}</h3>
            <div className="exp-company-info">
              <span className="company-name">{exp.company}</span>
              <span className="location-dot">•</span>
              <span className="exp-location">{exp.location}</span>
            </div>
            <p className="exp-duration">{exp.duration}</p>
          </div>
        </div>

        <motion.p 
          className="exp-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.3 + 0.4 }}
          viewport={{ once: true }}
        >
          {exp.description}
        </motion.p>

        <motion.button
          className="expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
          <motion.span
            className="expand-icon"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ↓
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="exp-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="responsibilities-section">
                <h4>Key Responsibilities</h4>
                <ul className="responsibilities-list">
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <span className="resp-bullet">▹</span>
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="technologies-section">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const titleY = useSpring(useTransform(scrollYProgress, [0, 1], [180, -180]), springConfig);
  const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), springConfig);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.7]);

  return (
    <section className="experience-section" id="experience" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="section-title-box"
          style={{ y: titleY, rotate, opacity }}
        >
          <motion.h2 
            className="text-display"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            WORK
          </motion.h2>
          <motion.h2 
            className="text-display text-outline"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            EXPERIENCE
          </motion.h2>
        </motion.div>

        <motion.div 
          className="experience-timeline"
          style={{ y: contentY }}
        >
          {experienceData.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
