import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section className="hero-section" ref={container}>
      <div className="container">
        <div className="hero-top-nav">
          <span>SERHII DEMYCHEV</span>
          <span>DESIGNER PORTFOLIO ©</span>
          <div className="nav-links">
            <span>About</span>
            <span>Work</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="hero-main">
          <motion.div style={{ y: y1 }} className="hero-title-wrap">
            <h1 className="hero-title text-display">
              <span className="ux-label">UX/</span> DESIGNER
            </h1>
            <h1 className="hero-title text-display text-outline">
              PORTFOLIO
            </h1>
          </motion.div>

          <div className="hero-content-grid">
            <motion.div style={{ y: y2, scale }} className="hero-image-box">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop" alt="Profile" />
            </motion.div>
            <div className="hero-intro-text">
              <p>Hi, my name is Serhii and I am a UX/UI designer. My main goal is to create and develop a quality product that will bring profit to the company. Meanwhile, it will help me improve my skills.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="marquee-wrap">
        <div className="marquee">
          <span>MY WORKS × MY WORKS × MY WORKS × MY WORKS × MY WORKS × MY WORKS × </span>
          <span>MY WORKS × MY WORKS × MY WORKS × MY WORKS × MY WORKS × MY WORKS × </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
