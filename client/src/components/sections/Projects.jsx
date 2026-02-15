import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Lumina Interface",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2784&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 2,
    title: "Ethereal Commerce",
    category: "Development",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 3,
    title: "Chronos App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 4,
    title: "Apex Finance",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop",
    year: "2024"
  }
];

const ProjectItem = ({ project, index }) => {
  return (
    <motion.div 
      className="project-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="project-image-container">
        <div className="project-image-overlay"></div>
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-view-btn">View Case</div>
      </div>
      <div className="project-info">
        <div className="project-info-left">
          <h3 className="project-title text-display">{project.title}</h3>
          <span className="project-category text-body">{project.category}</span>
        </div>
        <span className="project-year text-body">{project.year}</span>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label text-body">02 / Selected Works</span>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
