import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Projects.css';

const projects = [
  { 
    id: 'INGENUE', 
    title: 'INGENUE', 
    tags: ['UI/UX DESIGN', 'CONCEPT'],
    sub: 'Conceptual art visual clothing store', 
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop' 
  },
  { 
    id: 'SONY', 
    title: 'SONY', 
    tags: ['PLATFORM', 'REDESIGN'],
    sub: 'Corporate platform redesign', 
    img: 'https://images.unsplash.com/photo-1526510747391-58c97a4d5a45?q=80&w=2787&auto=format&fit=crop' 
  },
  { 
    id: 'IRISH', 
    title: 'THE IRISH TIMES', 
    tags: ['PLATFORM', 'REDESIGN'],
    sub: 'News site concept', 
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2940&auto=format&fit=crop' 
  },
  { 
    id: 'EMPIRE', 
    title: 'EMPIRE', 
    tags: ['ARCHITECTURE', 'CONCEPT'],
    sub: 'Architecture portfolio', 
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop' 
  }
];

const ProjectCard = ({ p, index }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth parallax for the project image inside its container
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <motion.div 
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="card-header">
        <h3 className="text-display">{p.title}</h3>
        <div className="card-tags">
          {p.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
      </div>
      <p className="card-sub">{p.sub}</p>
      <div className="card-image-container">
        <motion.img 
          style={{ y }}
          src={p.img} 
          alt={p.title} 
          className="card-parallax-img"
        />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
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
