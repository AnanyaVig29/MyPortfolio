import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollToTop.css';

const ScrollToTop = () => {
  // Show button when user scrolls down
  const [isVisible, setIsVisible] = useState(false);

  // Listen to scroll events
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px down
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Smooth scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          // Fade in/out animations
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          // Hover effects
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          aria-label="Scroll to top"
        >
          {/* Up arrow icon */}
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="10" y1="15" x2="10" y2="5"></line>
            <polyline points="5 10 10 5 15 10"></polyline>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
