import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './Education.css';

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Jagannath International Management School (JIMS)",
    location: "Delhi, India",
    duration: "2024 - Present",
    highlights: [
      "Hands-on experience in frontend web development and UI/UX implementation",
      "Manager of IT Club, leading technical initiatives and website development",
      "Active participant in national-level hackathons (SIH, Zenigma, HackVerse)",
      "Developed multiple real-world projects using React, TypeScript, and modern web technologies"
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "SLS DAV Public School",
    location: "Mausam Vihar, Delhi",
    duration: "2021 - 2024",
    highlights: [
      "Completed higher secondary education",
      "Foundation in computer science and mathematics",
      "Built strong analytical and problem-solving skills"
    ]
  }
];

const EducationCard = ({ edu, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), springConfig);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  return (
    <motion.div
      ref={cardRef}
      className="education-card"
      style={{ y, scale, rotate, opacity }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <motion.div 
        className="edu-header"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        viewport={{ once: true }}
      >
        <div className="edu-title-section">
          <h3 className="text-display edu-degree">{edu.degree}</h3>
          <p className="edu-institution">{edu.institution}</p>
          <p className="edu-location">{edu.location}</p>
        </div>
        <div className="edu-meta">
          <motion.span 
            className="edu-duration"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            viewport={{ once: true }}
          >
            {edu.duration}
          </motion.span>
        </div>
      </motion.div>

      <motion.div 
        className="edu-highlights"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
        viewport={{ once: true }}
      >
        {edu.highlights.map((highlight, i) => (
          <motion.div
            key={i}
            className="highlight-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.7 + i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="highlight-bullet">→</span>
            <span>{highlight}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Education = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const titleY = useSpring(useTransform(scrollYProgress, [0, 1], [150, -150]), springConfig);
  const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), springConfig);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.7]);

  return (
    <section className="education-section" id="education" ref={sectionRef}>
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
            EDUCATION &
          </motion.h2>
          <motion.h2 
            className="text-display text-outline"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            QUALIFICATIONS
          </motion.h2>
        </motion.div>

        <motion.div 
          className="education-container"
          style={{ y: contentY }}
        >
          {educationData.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
