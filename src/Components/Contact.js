// src/Components/Contact.js
import React from 'react';
import { Link } from 'react-router-dom';

const contactStyle = {
    padding: '20px',
    textAlign: 'center'
};

function Contact() {
    return (
        <section style={contactStyle}>
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me via email at <a href="mailto:kaffet2010@gmail.com">kaffet2010@gmail.com</a>.</p>
            <p>You can also connect with me on <a href="https://github.com/1getie21">GitHub</a>.</p>
            <nav>
                <Link to="/">Go to About Me</Link> |
                <Link to="/portfolio">Go to Portfolio</Link>
            </nav>
        </section>
    );
}

export default Contact;
