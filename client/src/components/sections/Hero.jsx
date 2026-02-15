import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  // Refined parallax values for subtler, smoother motion
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -250]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -120]), springConfig);
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), springConfig);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="hero-section" ref={container}>
      <div className="container">
        <div className="hero-top-bar border-bottom">
          <div className="top-bar-left">
            <span>SERHII DEMYCHEV</span>
          </div>
          <div className="top-bar-center">
            <span>MAIN PAGE</span>
          </div>
          <div className="top-bar-right">
            <nav className="nav-links">
              <span>About</span>
              <span>Work</span>
              <span>Contact</span>
            </nav>
          </div>
        </div>

        <div className="hero-main-content">
          <motion.div style={{ y: y1 }} className="hero-title-container">
            <h1 className="hero-title text-display">
              <span className="ux-slash">UX/</span>DESIGNER
            </h1>
            <h1 className="hero-title text-display text-outline">
              PORTFOLIO
            </h1>
          </motion.div>

          <div className="hero-bio-grid">
            <motion.div style={{ y: y2, scale }} className="hero-portrait">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop" alt="Serhii Demychev" />
              <div className="portrait-circle"></div>
            </motion.div>
            <motion.div style={{ y: y3 }} className="hero-bio-text">
              <p>Hi, my name is Serhii and I am a UX/UI designer. My main goal is to create and develop a quality product that will bring profit to the company. Meanwhile, it will help me improve my skills.</p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="marquee-section border-top border-bottom">
        <div className="marquee-content">
          <div className="marquee-track">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="marquee-item">MY WORKS × </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
