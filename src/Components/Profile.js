import React from 'react';
import './Profile.css'; // Create a CSS file for styling

function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-info">
                <h1>Mazengia Tesfa</h1>
                <h2>Hello, Welcome to My Portfolio</h2>
                <p>I'm Mazengia Tesfa</p>
                <p>A passionate fullstack developer and software analyser.</p>
            </div>
            <div className="profile-picture">
                <img src="/path-to-your-profile-picture.jpg" alt="Mazengia Tesfa" />
            </div>
        </div>
    );
}

export default Profile;
