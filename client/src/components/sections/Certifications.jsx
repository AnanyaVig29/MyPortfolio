import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './Certifications.css';

const certificationsData = [
  {
    id: 1,
    title: "HackVerse - 3rd Place Winner & Cash Prize",
    issuer: "GDG JIMS Vasant Kunj (with Enigma IT Club)",
    date: "January 2025",
    credentialId: "HACKVERSE-2025-3RD-PLACE",
    description: "Awarded 3rd place and cash prize of Rs 1,000 for developing an innovative AI-powered waste segregation mobile application. Implemented camera-based waste scanning with automated classification into biodegradable, recyclable, and non-recyclable categories using Google Gemini AI, Firebase for data storage, and Google Cloud Platform (GCP) for backend scalability. Recognized for innovation, real-world applicability, and technical execution",
    skills: ["React", "Google Gemini AI", "Firebase", "GCP", "Mobile Development"],
    verifyLink: "#"
  },
  {
    id: 2,
    title: "Zenigma UI/UX Hackathon - Finalist (Top Teams Nationwide)",
    issuer: "E-Summit, IIT Roorkee",
    date: "February 2024",
    credentialId: "ZENIGMA-IIT-ROORKEE-2024",
    description: "Selected as finalist among top teams nationwide in a competitive 36-hour national-level design and product ideation hackathon. Collaborated in a team to develop solution concepts, rapid prototypes, and structured pitch presentations under tight deadlines. Demonstrated excellence in UI/UX design, product thinking, and presentation skills at one of India's premier technical institutes",
    skills: ["UI/UX Design", "Product Design", "Rapid Prototyping", "Pitching", "Team Collaboration"],
    verifyLink: "https://unstop.com/competitions/zenigma-a-design-challenge-iit-roorkee-876150"
  },
  {
    id: 3,
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2024",
    credentialId: "IBM-AI-FUNDAMENTALS-2024",
    description: "Comprehensive certification covering foundational concepts in artificial intelligence, machine learning algorithms, neural networks, and AI applications. Gained practical knowledge of IBM Watson services, data science methodologies, and ethical AI implementation. Applied learnings in real-world projects including AI-powered waste classification and mental health monitoring systems",
    skills: ["Artificial Intelligence", "Machine Learning", "IBM Watson", "Data Science", "Neural Networks"],
    verifyLink: "https://www.credly.com/badges/411ef739-6fca-441f-a110-6d9e4c993745"
  },
  {
    id: 4,
    title: "Smart India Hackathon 2025 - Participant",
    issuer: "Ministry of Education, Government of India",
    date: "2025",
    credentialId: "SIH-2025-PARTICIPANT",
    description: "Participated in India's largest hackathon initiative organized by the Ministry of Education, contributing to solution ideation and technical planning for national-level problem statements. Worked on real-world challenges addressing governance, healthcare, and social issues. Demonstrated problem-solving abilities, innovation mindset, and collaborative teamwork in a high-pressure competitive environment",
    skills: ["Problem Solving", "Innovation", "System Design", "Team Collaboration", "Government Tech"],
    verifyLink: "https://www.sih.gov.in/"
  },
  {
    id: 5,
    title: "Smart India Hackathon 2024 - Participant",
    issuer: "Ministry of Education, Government of India",
    date: "2024",
    credentialId: "SIH-2024-PARTICIPANT",
    description: "Participated in Smart India Hackathon 2024, working on real-world problem statements from government ministries and industry partners. Contributed to solution ideation, technical planning, and prototype development for national challenges. Gained experience in agile methodology, product development, and presenting technical solutions to expert panels and stakeholders",
    skills: ["Innovation", "Product Development", "Agile Methodology", "Teamwork", "Technical Presentation"],
    verifyLink: "https://www.sih.gov.in/"
  }
];

const CertificationCard = ({ cert, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), springConfig);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [
    index % 2 === 0 ? -2 : 2,
    0,
    index % 2 === 0 ? 2 : -2
  ]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  return (
    <motion.div
      ref={cardRef}
      className="certification-card"
      style={{ y, scale, rotate, opacity }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="cert-badge"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring" }}
        viewport={{ once: true }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      <motion.div
        className="cert-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="cert-title">{cert.title}</h3>
        <div className="cert-issuer">
          <span className="issuer-name">{cert.issuer}</span>
          <span className="cert-divider">•</span>
          <span className="cert-date">{cert.date}</span>
        </div>
        <p className="cert-description">{cert.description}</p>

        <div className="cert-meta">
          <span className="credential-id">ID: {cert.credentialId}</span>
          {cert.verifyLink && (
            <motion.a
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="verify-link-btn"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <span>Verify</span>
            </motion.a>
          )}
        </div>

        <div className="cert-skills">
          {cert.skills.map((skill, i) => (
            <motion.span
              key={i}
              className="cert-skill-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.4 + i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const titleY = useSpring(useTransform(scrollYProgress, [0, 1], [150, -150]), springConfig);
  const gridY = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), springConfig);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.7]);

  return (
    <section className="certifications-section" id="certifications" ref={sectionRef}>
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
            CERTIFICATES &
          </motion.h2>
          <motion.h2
            className="text-display text-outline"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            ACHIEVEMENTS
          </motion.h2>
        </motion.div>

        <motion.div
          className="certifications-grid"
          style={{ y: gridY }}
        >
          {certificationsData.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
