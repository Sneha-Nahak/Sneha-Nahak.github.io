import React from 'react';
import './Projects.css';
import employeproductivitytracker from '../assets/employee-productivity-tracker.png'
import nestHive from '../assets/nestHive.png'
import flipcardGame from '../assets/Flipcard-Game.png'
const projectData = [
   {
    title: 'Flipcard Game',
    type: 'Group-based Project',
    description: 'A MERN stack web app where players match card pairs. Features include timers, difficulty levels, user auth, and a leaderboard for tracking top scores.',
    teckStack: 'NodeJs,ExpressJs,MongoDB,React,JavaScript,Bootstrap',
    image: flipcardGame,
    code:'https://github.com/Sneha-Nahak/Flip_Card_Game',
    live_link: 'https://flipcard-game-1-0.netlify.app/'
  }
  ,
  {
    title: 'Employee Productivity Tracker',
    type: 'Group-based Project',
    description: 'A browser-based platform to track on the performace and productivity level of employees.',
    teckStack: 'JavaScript,HTML,CSS',
    image: employeproductivitytracker,
    code:'https://github.com/Sneha-Nahak/Employee-Productivity-Tracker',
    live_link: 'https://employeproductivitytracker.netlify.app/',

  },
  {
    title: 'Property Listing Platform(NestHive)',
    type: 'Individual Project',
    description: 'A user-friendly platform to list, explore, and manage real estate properties with ease. Perfect for buyers and sellers alike.',
    teckStack: 'React,JavaScript,HTML,CSS',
    image: nestHive,
    code:'https://github.com/Sneha-Nahak/B43_WEB_160_Web-Project-155/tree/main/nesthive',
    live_link: 'https://nest-hive.netlify.app/'
  },
];


const Projects = () => (
  <section className="projects-section" id="projects">
    <h2 className="section-title">Projects</h2>
    <div className="projects-container">
      {projectData.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-content">
            <h2>{project.title}</h2>
            <br />
            <h3>{project.type}</h3>
            <p className='project-description'>{project.description}</p>
            <p className='project-tech-stack'>{project.teckStack}</p>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="project-deployed-link">
              View Live →
            </a>
            <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-github-link">
              View Code →
            </a>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;