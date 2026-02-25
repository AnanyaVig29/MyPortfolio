import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const posRef = useRef({ mouseX: 0, mouseY: 0, followerX: 0, followerY: 0 });

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const pos = posRef.current;
    let rafId = null;

    // Mouse movement handler with parallax effect
    const handleMouseMove = (e) => {
      pos.mouseX = e.clientX;
      pos.mouseY = e.clientY;
      setIsVisible(true);
      
      // Direct cursor dot positioning - NO parallax for accuracy
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.mouseX}px, ${pos.mouseY}px, 0)`;
      }

      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target.closest('a, button, .navbar-dock-item, .accordion-trigger, .project-card, .header-nav a, .header-cta, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    // Smooth follower animation loop
    const animate = () => {
      const speed = isHovering ? 0.25 : 0.18; // Faster on hover
      
      pos.followerX += (pos.mouseX - pos.followerX) * speed;
      pos.followerY += (pos.mouseY - pos.followerY) * speed;
      
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${pos.followerX}px, ${pos.followerY}px, 0)`;
      }
      
      rafId = requestAnimationFrame(animate);
    };

    // Event listeners
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    rafId = requestAnimationFrame(animate);

    // Simple hover effect using CSS hover states
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      style.remove();
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return createPortal(
    <div className="cursor-container">
      <div 
        className={`cursor-dot ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''}`}
        ref={cursorRef}
      />
      <div 
        className={`cursor-follower ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''}`}
        ref={followerRef}
      />
    </div>,
    document.body
  );
};

export default CustomCursor;
