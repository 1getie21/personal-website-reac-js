import React from 'react';
import './MyPortfolio.css'; // Assuming you created a separate CSS file for Portfolio

const portfolioStyle = {
    padding: '20px',
    textAlign: 'center'
};
const projectList = [
    {
        title: "Project One",
        description: "A brief description of Project One.",
        link: "https://github.com/1getie21/project-one"
    },
    {
        title: "Project Two",
        description: "A brief description of Project Two.",
        link: "https://github.com/1getie21/project-two"
    },
    ];

function MyPortfolio() {
    return (
        <section style={portfolioStyle}>
            <h2>Portfolio</h2>
            <p>Here you can showcase some of the projects I've worked on.</p>
            {/* You might want to add a list or grid of projects here */}
            <ul className="portfolio-list">
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default MyPortfolio;