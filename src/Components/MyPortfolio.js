import React from 'react';
import './MyPortfolio.css';
import Profile from './Profile'; // Import the Profile component

const portfolioStyle = {
    padding: '20px',
    textAlign: 'center'
};

const projectList = [
    {
        title: "Networ-Traffic-Managment java-spring-boot",
        description: "A brief description of Project One.",
        link: "https://github.com/1getie21/java-spring-boot-backend"
    },
    {
        title: "Personal Website Screenshot",
        description: "A screenshot of my personal website. This provides a glimpse of my web design and development skills.",
        link: "/assets/screenshots/website-screenshot.png",
        type: "image"
    },
    {
        title: "My CV",
        description: "Download my CV for a detailed overview of my professional background and qualifications.",
        link: "/assets/documents/cv.pdf",
        type: "document"
    }
];

function MyPortfolio() {
    return (
        <section style={portfolioStyle}>
            <Profile /> {/* Add Profile component here */}
            <h2>Portfolio</h2>
            <p>Here you can showcase some of the projects I've worked on.</p>
            <ul className="portfolio-list">
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.type === "image" ? (
                            <img src={project.link} alt={project.title} style={{ width: '100%', maxWidth: '600px' }} />
                        ) : project.type === "document" ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">Download CV</a>
                        ) : (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default MyPortfolio;
