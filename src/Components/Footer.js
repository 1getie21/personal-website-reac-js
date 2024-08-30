import React from 'react';

const footerStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: 'blue'
};

function Footer() {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 Getie Bantimen Damtew. All rights reserved.</p>
            <p>Connect with me on <a href="https://github.com/1getie21">GitHub</a>.</p>
        </footer>
    );
}

export default Footer;