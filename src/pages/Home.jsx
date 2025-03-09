import React, { useState } from 'react';
import { FaGithub, FaInstagram,FaFacebook, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'; // Importing icons
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import LazyLoad from 'react-lazyload';
import profileImage from '../assets/Anas Khan.png'; // Adjust the path as needed
import './Home.css';

// Add sections like About, Projects, Contact
import About from './About'; // Assuming you have these components
import Certifications from './Certifications'; // Import Certifications page
import Contact from './Contact';


const Home = () => {
  const [typedText, setTypedText] = useState('');
  
  const typingSpeed = 100;
  const eraseSpeed = 50;
  const pauseTime = 1500;

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/newest resume.pdf'; // ✅ Correct path (No /public/)
    link.download = 'newest resume.pdf';
    link.click();
  };
  

  return (
    <section className="home">
      <div className="home-container">
        {/* Left Section (Text, CTA, Social Icons) */}
        <div className="left-section">
          
          <h1>Hi, I'm </h1>
          <h1 id='name'>Anas </h1>

          <motion.div
            className="home-typewriter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="typewriter-text">
              <Typewriter
                words={['Web Developer', 'UI/UX Designer', 'React Enthusiast','Front-End Developer','Programmer']}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={typingSpeed}
                deleteSpeed={eraseSpeed}
                delaySpeed={pauseTime}
              />
            </h2>
          </motion.div>

          <button className="cta-button">Hire Me</button>

          <div className="social-links">
          <a href="https://www.instagram.com/im_4nas_/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram size={35} />
            </a>
            <a href="https://github.com/Anaskhan78602" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={35} />
            </a>
            <a href="https://www.linkedin.com/in/anas-khan-751351244/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={35} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100022857851318" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook size={35} />
            </a>
            <a href="mailto:anasxaerospace@gmail.com" className="social-icon">
              <FaEnvelope size={35} />
            </a>
          </div>
        </div>

        {/* Right Section (Image, CV, Paragraph) */}
        <div className="right-section">
          <motion.div
            className="home-image-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <LazyLoad height={200} offset={100}>
              <img
                src={profileImage} // Use the imported image here
                alt="Portfolio"
                className="home-image"
              />
            </LazyLoad>
          </motion.div>

          <div className="info">
            <p><span>Expert on:</span> Based in India</p>
            <p>
              I'm a developer and UI/UX designer. Are you looking for a designer to build your brand and grow your business? Let's shake hands with me.
            </p>
            <button className="download-cv" onClick={handleResumeDownload}>
              <FaDownload size={30} /> Download CV
            </button>
          </div>
        </div>
      </div>

      {/*home section */ }
      

      {/* About Section */}
      <section id="about">
        <About />
      </section>

     
       {/* certifications Section */}
       <section id="certifications">
        <Certifications />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </section>
  );
};

export default Home;
