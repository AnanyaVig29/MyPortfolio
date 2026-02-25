  import {
    HomeIcon,
    User,
    GraduationCap,
    Briefcase,
    Code2,
    FolderGit2,
    Award,
    Mail,
  } from 'lucide-react';
  import { useState, useEffect, useRef } from 'react';
  import { Dock, DockIcon, DockItem } from '../ui/Dock';
  import { AnimatePresence, motion, useScroll, useTransform, useSpring } from 'framer-motion';
  import './Navbar.css';

  // Navigation menu items configuration
  const data = [
    {
      title: 'Home',
      icon: <HomeIcon style={{ height: '100%', width: '100%', color: '#666' }} />,
      href: '#hero',
    },
    {
      title: 'About',
      icon: <User style={{ height: '100%', width: '100%', color: '#666' }} />,
      href: '#about',
    },
    {
      title: 'Education',
      icon: <GraduationCap style={{ height: '100%', width: '100%', color: '#666' }} />,
      href: '#education',
    },
    {
      title: 'Experience',
      icon: <Briefcase style={{ height: '100%', width: '100%', color: '#666' }} />,
      href: '#experience',
    },
    {
      title: 'Skills',
      icon: <Code2 style={{ height: '100%', width: '100%', color: '#666' }} />,
      href: '#skills',
    },
    {
      title: 'Projects',
      icon: <FolderGit2 style={{ height: '100%', width: '100%', color: '#666' }} />,
      href: '#projects',
    },
    {
      title: 'Certifications',
      icon: <Award style={{ height: '100%', width: '100%', color: '#666' }} />,
      href: '#certifications',
    },
    {
      title: 'Contact',
      icon: <Mail style={{ height: '100%', width: '100%', color: '#666' }} />,
      href: '#contact',
    },
  ];

  // Tooltip label component for dock items
  function DockLabel({ children, isHovered }) {
    return (
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 2 }}
            style={{
              position: 'absolute',
              top: '-2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
              borderRadius: '0.375rem',
              backgroundColor: 'rgba(26, 26, 26, 0.9)',
              padding: '0.25rem 0.5rem',
              fontSize: '0.75rem',
              color: 'white',
              zIndex: 50
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  export default function Navbar() {
    // Track which dock item is hovered for tooltip display
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    const container = useRef(null);
    
    // Scroll progress tracking for parallax effects
    const { scrollY, scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end start"]
    });

    // Spring animation configurations for smooth motion
    const springConfig = { stiffness: 80, damping: 25, restDelta: 0.001 };
    const dockSpringConfig = { stiffness: 150, damping: 35, restDelta: 0.001 };
    
    // Hero content parallax animations (fade out on scroll)
    const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig);
    const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    
    // Keep dock navbar static (no parallax for always visible navbar)
    const dockY = useSpring(useTransform(scrollY, [0, 300], [0, 0]), dockSpringConfig);
    const dockOpacity = useTransform(scrollY, [0, 150], [1, 1]);
    const dockScale = useSpring(useTransform(scrollY, [0, 150], [1, 1]), dockSpringConfig);
    
    // Header "ANANYA VIG" parallax effect
    const headerY = useSpring(
      useTransform(scrollY, [0, 300], [0, -80]),
      { stiffness: 80, damping: 25, restDelta: 0.001 }
    );
    const headerOpacity = useTransform(scrollY, [0, 200, 300], [1, 0.8, 0]);

    // Keep navbar always visible (no auto-hide)
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setLastScrollY(currentScrollY);
        setIsVisible(true); // Always visible
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Smooth scroll to section on click with proper offset
    const handleClick = (href) => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Offset for navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    return (
      <section
        className="hero-section"
        id="hero"
        ref={container}
        style={{ minHeight: '120vh', position: 'relative', overflow: 'visible' }} // Ensure enough height for parallax
      >
        {/* Hero Header Bar - ANANYA VIG */}
        <motion.div 
          className="hero-header-bar"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <motion.div
            className="header-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="header-name">ANANYA VIG</span>
          </motion.div>
        </motion.div>

        {/* Apple Dock Navbar */}
        <motion.div 
          className="navbar-wrapper"
          style={{ 
            y: dockY,
            opacity: dockOpacity,
            scale: dockScale
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: 0,
            opacity: 1
          }}
          transition={{ 
            type: 'spring',
            stiffness: 300,
            damping: 30,
            mass: 0.8
          }}
        >
          <Dock className="navbar-dock">
            {data.map((item, idx) => (
              <DockItem
                key={idx}
                className="navbar-dock-item"
                onClick={() => handleClick(item.href)}
              >
                {(isHovered) => (
                  <div
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      position: 'relative',
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <DockLabel isHovered={hoveredIndex === idx}>
                      {item.title}
                    </DockLabel>
                    <DockIcon>{item.icon}</DockIcon>
                  </div>
                )}
              </DockItem>
            ))}
          </Dock>
        </motion.div>

        {/* Hero Main Content */}
        <motion.div 
          className="container"
          style={{ opacity }}
        >
          <div className="hero-main-content">
            <motion.div style={{ y: y1 }} className="hero-title-container">
              <motion.h1 
                className="hero-title text-display"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
              >
                FRONTEND
              </motion.h1>
              <motion.h1 
                className="hero-title text-display text-outline"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
              >
                DEVELOPER
              </motion.h1>
            </motion.div>

            <div className="hero-bio-grid">
              <div className="hero-portrait" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 220 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="portrait-wrapper"
                  style={{
                    width: 180,
                    height: 180,
                    borderRadius: '50%',
                    overflow: 'visible', // Allow image to show fully
                    position: 'relative',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img 
                    src="/pic.jpeg" 
                    alt="Ananya Vig" 
                    style={{
                      width: 160,
                      height: 160,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      display: 'block',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
                    }}
                  />
                  <motion.div 
                    className="portrait-circle"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: [0.33, 1, 0.68, 1] }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 180,
                      height: 180,
                      borderRadius: '50%',
                      border: '3px solid #e0e0e0',
                      zIndex: 1,
                      pointerEvents: 'none',
                    }}
                  ></motion.div>
                </motion.div>
              </div>
               <motion.div 
                style={{ y: y3 }} 
                className="hero-bio-text"
              >
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Hi, I'm Ananya Vig, a BCA student at JIMS Delhi with hands-on experience in frontend web development, UI/UX implementation, and system design. I build responsive, user-focused web applications using React, TypeScript, and modern web technologies. Active participant in national-level hackathons and currently leading IT Club initiatives.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }
