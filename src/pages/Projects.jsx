import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A responsive personal portfolio showcasing my skills, projects, and experience.',
    technologies: ['React', 'CSS', 'HTML'],
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'Weather App',
    description: 'A weather application built with React that shows weather information using an API.',
    technologies: ['React', 'API', 'CSS'],
    link: 'https://your-weather-app-link.com',
  },

  {
    title: 'DigiLekh',
    description: 'A responsive blog writing platform that helps users to create , read , share their ideas and blogs. ',
    technologies: ['React', 'Tailwind','Express','MongoDB', 'node JS'],
    link: 'https://your-weather-app-link.com',
  },
  // More projects...
];

const Projects = () => {
  return (
    <div className="projects-page" id="projects"> {/* Add the ID here */}
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="skills-section">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="skill-chip">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
