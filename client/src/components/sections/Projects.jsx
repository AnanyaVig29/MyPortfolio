import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 'SENTINEL',
    title: 'SENTINEL - EARLY WARNING SYSTEM',
    tags: ['REACT 18', 'TYPESCRIPT', 'TAILWIND CSS', 'LUCIDE REACT'],
    sub: 'Microsoft Imagine Cup Project: Mental health monitoring system with real-time mood tracking dashboards, animated data visualizations, four-tier risk assessment interface, privacy-first workflows, and informed consent handling for early intervention',
    img: '/i1.png',
    github: 'https://github.com/AnanyaVig29/Microsoft-ImagineCupX.git'
  },
  {
    id: 'IMPROVEMYCITY',
    title: 'IMPROVE MY CITY',
    tags: ['REACT 18', 'TYPESCRIPT', 'TAILWIND CSS', 'EXPRESS.JS', 'NODE.JS'],
    sub: 'Full-stack civic engagement platform enabling citizens to report municipal issues with image/video uploads, real-time status tracking, role-based dashboards for Citizens/Admins/Workers, smart duplicate issue detection, interactive maps for precise reporting, and analytics for city administrators',
    img: '/i2.png',
    github: 'https://github.com/AnanyaVig29/PU-Hackathon---Improve-My-City.git'
  },
  {
    id: 'RURALGOVERNANCE',
    title: 'RURAL GOVERNANCE PLATFORM',
    tags: ['REACT', 'TAILWIND CSS', 'MAPBOX GL JS'],
    sub: 'IIC Regional Meet Project: Multi-dashboard web platform for rural planning with GIS-based spatial visualization tools using Mapbox, application tracking workflows, budget visualization dashboards, and gamified planner interfaces to enhance governance efficiency',
    img: '/i3.png',
    github: 'https://github.com/AnanyaVig29/RuralGovernance'
  },
  {
    id: 'WASTESEGREGATION',
    title: 'WASTE SEGREGATION HELPER',
    tags: ['REACT', 'TYPESCRIPT', 'GOOGLE GEMINI AI', 'FIREBASE'],
    sub: 'AI-powered waste classification app with camera-based scanning, Google Gemini AI image recognition for biodegradable/recyclable categorization, real-time disposal guidance, sustainability tips, environmental impact tracking, and interactive analytics dashboards',
    img: '/i4.png',
    github: 'https://github.com/AnanyaVig29/GDG.git'
  },
  {
    id: 'ARGENTE',
    title: 'ARGENTÉ - E-COMMERCE PLATFORM',
    tags: ['REACT 18', 'TAILWIND CSS'],
    sub: 'Premium fashion e-commerce platform featuring comprehensive product catalog with advanced filters, shopping cart with persistent state management using Context API, wishlist functionality, seamless checkout flow, responsive animations, and multi-device navigation optimization',
    img: '/i5.png',
    github: 'https://github.com/AnanyaVig29/Argente.git'
  }
];

const ProjectCard = ({ p, index }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Subtle parallax for smooth effect without cropping
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-20, 20]), springConfig);
  const imageY = useSpring(useTransform(scrollYProgress, [0, 1], [-15, 15]), springConfig);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 1, 1.02]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-0.5, 0, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      className="project-card"
      style={{ y, scale, rotate, opacity }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.33, 1, 0.68, 1] }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="card-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-display">{p.title}</h3>
        <div className="card-tags">
          {p.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 + 0.3 + i * 0.1 }}
              viewport={{ once: true }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
      <motion.p
        className="card-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
        viewport={{ once: true }}
      >
        {p.sub}
      </motion.p>

      {/* GitHub Link Button */}
      {p.github && (
        <motion.a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link-btn"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span>View on GitHub</span>
        </motion.a>
      )}

      <div className="card-image-container">
        <motion.div
          className="card-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
          viewport={{ once: true }}
        >
          <motion.img
            style={{ y: imageY, scale: imageScale }}
            src={p.img}
            alt={p.title}
            className="card-parallax-img"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Separate scroll tracking for marquee with enhanced parallax
  const { scrollYProgress: marqueeScroll } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const marqueeSpringConfig = { stiffness: 80, damping: 25, restDelta: 0.001 };
  const titleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -30]), springConfig);

  // Reduced marquee parallax with smoother movement
  const marqueeY = useSpring(useTransform(marqueeScroll, [0, 1], [60, -60]), marqueeSpringConfig);
  const marqueeOpacity = useTransform(marqueeScroll, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7]);
  const marqueeScale = useTransform(marqueeScroll, [0, 0.5, 1], [0.98, 1, 0.98]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.8]);

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      {/* Marquee Section */}
      <motion.div
        ref={marqueeRef}
        className="projects-marquee-section border-top border-bottom"
        style={{
          y: marqueeY,
          opacity: marqueeOpacity,
          scale: marqueeScale
        }}
      >
        <div className="projects-marquee-content">
          <div className="projects-marquee-track">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="projects-marquee-item">SELECTED WORKS × PROJECTS × PORTFOLIO × </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="container">
        <motion.div
          className="projects-header"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <motion.h2
            className="text-display section-title-large"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            SELECTED
          </motion.h2>
          <motion.h2
            className="text-display text-outline section-title-large"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            WORKS
          </motion.h2>
        </motion.div>
        <div className="projects-grid-container">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
