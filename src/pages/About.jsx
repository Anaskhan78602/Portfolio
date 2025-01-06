import React, { useState } from 'react';
import './About.css';
import collegeLogo from '../assets/mpgi-logo.jpg'; // Adjust the path as needed
import schoolLogo12 from '../assets/upboard-logo.jpg';
import schoolLogo10 from '../assets/upboard-logo.jpg';



const About = () => {
  const programmingLanguages = [
    { name: 'C', proficiency: 80 },
    { name: 'C++', proficiency: 70 },
    { name: 'Python', proficiency: 85 },
    { name: 'Java', proficiency: 75 },
    { name: 'JavaScript', proficiency: 90 }
  ];

  const technologies = [
    { name: 'React', proficiency: 80 },
    { name: 'Tailwind', proficiency: 85 },
    { name: 'Node.js', proficiency: 75 },
    { name: 'Express.js', proficiency: 70 },
    { name: 'MongoDB', proficiency: 80 },
    { name: 'MySQL', proficiency: 80 }
  ];

  const itConstructs = [
    { name: 'OOPs', proficiency: 90 },
    { name: 'DSA', proficiency: 85 },
    { name: 'Database', proficiency: 80 },
    { name: 'OS', proficiency: 70 }
  ];
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      university: 'Maharana Pratap Engineering College (Mandhana , Kanpur)',
      year: '2022-2026',
      image: collegeLogo, // Assuming you imported it
      link: 'https://www.mpgi.edu.in/',
    },
    {
      degree: 'Intermediate (12th)',
      university: 'UP Board',
      year: '2022',
      image: schoolLogo12, // Assuming you imported it
      link: 'https://upmsp.edu.in',
    },
    {
      degree: 'High School (10th)',
      university: 'UP Board',
      year: '2020',
      image: schoolLogo10, // Assuming you imported it
      link: 'https://upmsp.edu.in',
    },
  ];
  
  

  const [category, setCategory] = useState(null);
  const [skills, setSkills] = useState([]);

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
    if (selectedCategory === 'programming') {
      setSkills(programmingLanguages);
    } else if (selectedCategory === 'technologies') {
      setSkills(technologies);
    } else if (selectedCategory === 'itConstructs') {
      setSkills(itConstructs);
    }
  };

  const renderSkills = () => {
    return skills.map((skill, index) => (
      <div key={index} className="skill-card">
        <h3>{skill.name}</h3>
        <div className="progress-bar-background">
          <div
            className="progress-bar"
            style={{ width: `${category ? skill.proficiency : 0}%` }}
          ></div>
        </div>
        <p>{skill.proficiency}%</p>
      </div>
    ));
  };

  const renderEducation = () => {
    return education.map((edu, index) => (
      <div key={index} className="education-card">
        <div className="education-card-inner">
          {/* Front Side */}
          <div className="education-card-front">
            <h3>{edu.degree}</h3>
            <p>{edu.university}</p>
            <p>{edu.year}</p>
          </div>
          {/* Back Side */}
          <div className="education-card-back">
  <h3>{edu.university}</h3>
  <a href={edu.link} target="_blank" rel="noopener noreferrer">
    <img src={edu.image} alt={`${edu.degree} Logo`} className="card-logo" />
  </a>
  <a href={edu.link} target="_blank" rel="noopener noreferrer">
  <p>Visit Official Website</p>
  </a>
</div>


        </div>
      </div>
    ));
  };

  return (
    <div className="about-page" id="about">
      <div className="about-container">
        <div className="about-content">
          <h1>About Me</h1><br />
          <p>
          Hi, I'm Anas Khan, a passionate UI/UX designer and front-end developer based in India. I specialize in creating visually appealing and user-friendly websites and applications that offer seamless experiences. With a strong foundation in front-end technologies like HTML, CSS, JavaScript, and React, I aim to bring ideas to life through clean, efficient, and responsive design. I am continuously exploring new tools and techniques to improve my skills and stay up-to-date with the latest trends in web development. I thrive in collaborative environments, always eager to learn and grow, and I am committed to delivering high-quality work that aligns with user needs and business goals.
          </p>
        </div>
        <h2 id='skills'>Skills</h2>
        {/* Skill Categories */}
        <div className="skills-section">
          <h2
            className="category-header"
            onClick={() => handleCategoryClick('programming')}
          >
            Programming Skills
          </h2>
          {category === 'programming' && renderSkills()}

          <h2
            className="category-header"
            onClick={() => handleCategoryClick('technologies')}
          >
            Technologies
          </h2>
          {category === 'technologies' && renderSkills()}

          <h2
            className="category-header"
            onClick={() => handleCategoryClick('itConstructs')}
          >
            IT Constructs
          </h2>
          {category === 'itConstructs' && renderSkills()}
        </div>

        {/* Education Section */}
        
        {/* Education Section */}
        <div className="education-section">
          <h2 className="section-header">Education</h2>
          <div className="education-card-container">{renderEducation()}</div> {/* Education Cards Container */}
        </div>
      </div>
    </div>
  );
};

export default About;
