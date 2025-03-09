import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const handleScrollToSection = (section) => {
    if (section === 'home') {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to the specified section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <span className="white-text">Anas </span>
        <span className="red-text">Khan</span>
      </div>
      <ul>
        <li onClick={() => handleScrollToSection('home')}>Home</li>
        <li onClick={() => handleScrollToSection('about')}>About</li>
        <li onClick={() => handleScrollToSection('certifications')}>Certifications</li>
        <li onClick={() => handleScrollToSection('contact')}>Contact</li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
