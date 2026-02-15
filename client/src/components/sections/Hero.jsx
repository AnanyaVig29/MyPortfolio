import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.h1 
            className="hero-title text-display"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 }}
          >
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }} 
                animate={{ y: "0%" }} 
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Digital
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }} 
                animate={{ y: "0%" }} 
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Designer &
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }} 
                animate={{ y: "0%" }} 
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block text-accent"
              >
                Developer
              </motion.span>
            </div>
          </motion.h1>

          <motion.div 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            <p className="text-body">
              Crafting immersive digital experiences with a focus on motion, interaction, and minimal aesthetics.
            </p>
          </motion.div>

          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </motion.div>
        </div>
      </div>
      <div className="hero-background-gradient"></div>
    </section>
  );
};

export default Hero;
