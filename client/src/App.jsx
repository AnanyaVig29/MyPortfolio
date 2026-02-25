import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Layout & Section Components
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

// UI Components
import CustomCursor from './components/ui/CustomCursor';
import Loading from './components/ui/Loading';
import ScrollToTop from './components/ui/ScrollToTop';

import './styles/global.css';

function App() {
  // Loading state for initial page load animation
  const [isLoading, setIsLoading] = useState(true);

  // Initialize smooth scroll after loading completes
  useEffect(() => {
    if (!isLoading) {
      // Lenis smooth scroll configuration
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      // Animation frame loop for smooth scrolling
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Cleanup on unmount
      return () => {
        lenis.destroy();
      };
    }
  }, [isLoading]);

  return (
    <div className="app">
      {/* Custom cursor effect */}
      <CustomCursor />
      
      {/* Loading screen with animation */}
      <AnimatePresence mode="wait">
        {isLoading && <Loading onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main content after loading */}
      {!isLoading && (
        <>
          <main>
            <Navbar />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          {/* Scroll to top button */}
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;
