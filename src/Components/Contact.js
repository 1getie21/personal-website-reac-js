// src/components/Contact.js
import React from 'react';

const contactStyle = {
    padding: '20px',
    textAlign: 'center'
};

function Contact() {
    return (
        <section style={contactStyle}>
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me via email at <a href="mailto:kaffet2010@gmail.com">kaffet2010@gmail.com</a>.</p>
        </section>
    );
}

export default Contact;