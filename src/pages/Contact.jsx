import React, { useState } from 'react';
import './Contact.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Import icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    setTimeout(() => {
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>If you have any questions or just want to say hello, feel free to reach out!</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>

          {formStatus && <p className="form-status">{formStatus}</p>}
        </form>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <ul>
            <li>Email: <a href="mailto:anasxaerospace@gmail.com">anasxaerospace@gmail.com</a></li>
            <li>Phone: +91 7860215229</li>
            <li>Location: India</li>
          </ul>
        </div>

        {/* Social Media Icons in the Contact Area */}
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100022857851318" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/anas-khan-751351244/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Anaskhan78602" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/im_4nas_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
