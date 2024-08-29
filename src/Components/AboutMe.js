// src/components/AboutMe.js
import React from 'react';

const aboutMeStyle = {
    padding: '20px',
    textAlign: 'center'
};

function AboutMe() {
    return (
        <section style={aboutMeStyle}>
            <p>Welcome to Getie Bantimen Damtew's personal website!</p>
            <p>
                I’m a passionate Software Engineer with a focus on [full-stack development using modern technologies such as React, Node.js, spring boot,
                and Cyber-security identifying vulnerabilities to protect against threats, utilizing tools like OWASP and various encryption techniques ].
                Here, you'll find details about my projects,skills, and how to connect with me.

            </p>
        </section>
    );
}

export default AboutMe;