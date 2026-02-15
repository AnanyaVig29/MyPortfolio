import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <Link href="/">
            <span className="text-display">Alex.</span>
          </Link>
        </div>

        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                  <span className="link-underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div 
        className={`mobile-menu ${menuOpen ? 'active' : ''}`}
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="mobile-menu-content">
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.name} 
              href={link.href} 
              className="mobile-link text-display"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 50 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
