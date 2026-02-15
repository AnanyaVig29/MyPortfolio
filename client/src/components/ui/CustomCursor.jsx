import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      
      // Direct cursor movement
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      // Smooth follower movement
      if (followerRef.current) {
        followerRef.current.animate({
          transform: `translate3d(${clientX - 20}px, ${clientY - 20}px, 0)`
        }, {
          duration: 500,
          fill: "forwards"
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);

    // Hover effects
    const handleLinkHover = () => {
      cursorRef.current?.classList.add('hovered');
      followerRef.current?.classList.add('hovered');
    };

    const handleLinkLeave = () => {
      cursorRef.current?.classList.remove('hovered');
      followerRef.current?.classList.remove('hovered');
    };

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
};

export default CustomCursor;
