// src/components/AboutMe.js
import React from 'react';
import { Link } from 'react-router-dom';


const aboutMeStyle = {
    padding: '20px',
    textAlign: 'center'
};

function AboutMe() {
    return (
        <section style={aboutMeStyle}>
            <p>Welcome to Getie Bantimen Damtew's personal website!</p>
            <p>
                I’m a passionate Software Engineer specializing in full-stack development with expertise in modern technologies such as
                React, Node.js, and Spring Boot. My work in Cybersecurity focuses on identifying and mitigating vulnerabilities to protect against potential
                threats. I leverage tools like OWASP and advanced encryption techniques to ensure robust security solutions. Here, you'll find detailed information
                about my projects, skills, and ways to connect with me.
            </p>

            <nav>
                <Link to="/portfolio">Go to Portfolio</Link> |
                <Link to="/contact">Go to Contact</Link>
            </nav>
        </section>
    );
}

export default AboutMe;
