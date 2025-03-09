import React from 'react';
import './Certifications.css';

const certifications = [
  {
    title: 'Certified Web Developer',
    issuer: 'freecodecamp',
    date: 'Oct 2024',
    link: 'https://freecodecamp.org/certification/anaskhan9795/responsive-web-design',
    description: 'Comprehensive web development course covering HTML, CSS, JavaScript, React, and Node.js.'
  },
  {
    title: 'Data Analysis using Excel',
    issuer: 'Great Learning',
    date: 'Nov 2024',
    link: 'https://www.mygreatlearning.com/certificate/WDVOHXRA',
    description: 'Completed the Data analysis course and built a variety of dashboards.'
  },
  {
    title: 'React Developer Certificate',
    issuer: 'Great Learning',
    date: 'Nov 2024',
    link: 'https://www.mygreatlearning.com/certificate/PMCESYOC',
    description: 'Completed the React.js course and built a variety of React-based projects.'
  },
  {
    title: 'Javascript Certificate',
    issuer: 'Hackerrank',
    date: 'Oct 2024',
    link: 'https://www.hackerrank.com/certificates/f8748281f9d3',
    description: 'Completed the Javascript course and built a variety of Javascript-based projects.'
  },
  {
    title: 'Apache Kafka',
    issuer: 'Great Learning',
    date: 'Nov 2024',
    link: 'https://www.mygreatlearning.com/certificate/LRLLIPGX',
    description: 'Basics of Apache Kafka.'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" style={styles.section}>
      <h2 style={styles.heading}>Certifications</h2>
      <div style={styles.cardsContainer}>
        {certifications.map((cert, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{cert.title}</h3>
            <p style={styles.cardIssuer}><strong>Issuer:</strong> {cert.issuer}</p>
            <p style={styles.cardDate}><strong>Date:</strong> {cert.date}</p>
            <p style={styles.cardDescription}>{cert.description}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" style={styles.link}>View Certification</a>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px',
    backgroundColor: '#000', // Set background to black
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#00ffff',
    textShadow: '2px 2px 5px rgb(0,100,100,0.6)',
    fontFamily:'lucida calligraphy',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginTop: '30px',
  },
  card: {
    backgroundColor: '#1a1a1d', // Dark container background
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'left',
    color: '#fff', // White text in cards
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#00ffff', // Red text for title
  },
  cardIssuer: {
    color: '#fff', // White text for issuer
  },
  cardDate: {
    color: '#fff', // White text for date
  },
  cardDescription: {
    color: '#fff', // White text for description
  },
  link: {
    marginTop: '10px',
    color: '#00ffff', // Red link color
    textDecoration: 'underline',
    fontWeight: 'bold',
    
  }
  
};

export default Certifications;
