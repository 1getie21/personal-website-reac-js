// src/components/Header.js
import React from 'react';

const headerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#282c34',
    color: 'white'
};

const logoStyle = {
    height: '40px',
    margin: '0 10px'
};

function Header() {
    return (
        <header style={headerStyle}>
            <img src="/vite.svg" style={logoStyle} alt="Vite logo" />
            <img src="/react.svg" style={logoStyle} alt="React logo" />
            <p>I am a Software Engineer</p>
        </header>
    );
}

export default Header;