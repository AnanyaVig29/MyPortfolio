import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loading.css';

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className="loading-screen"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="loading-container">
        <motion.div 
          className="loading-percentage text-display"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {Math.min(progress, 100)}%
        </motion.div>
        <div className="loading-bar-container">
          <motion.div 
            className="loading-bar"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
