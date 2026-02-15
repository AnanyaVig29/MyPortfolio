import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  { id: 'INGENUE', title: 'INGENUE', sub: 'Conceptual art visual clothing store', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop' },
  { id: 'SONY', title: 'SONY', sub: 'Corporate platform redesign', img: 'https://images.unsplash.com/photo-1526510747391-58c97a4d5a45?q=80&w=2787&auto=format&fit=crop' },
  { id: 'IRISH', title: 'THE IRISH TIMES', sub: 'News site concept', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2940&auto=format&fit=crop' },
  { id: 'EMPIRE', title: 'EMPIRE', sub: 'Architecture portfolio', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop' }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-grid">
          {projects.map((p) => (
            <motion.div 
              key={p.id} 
              className="project-card"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            >
              <div className="card-header">
                <h3 className="text-display">{p.title}</h3>
                <div className="card-tags">
                  <span>UI/UX DESIGN</span>
                  <span>CONCEPT</span>
                </div>
              </div>
              <p className="card-sub">{p.sub}</p>
              <div className="card-image">
                <img src={p.img} alt={p.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
