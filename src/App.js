import logo from './logo.svg';
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import MyPortfolio from "./Components/MyPortfolio";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <div className="App">
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<MyPortfolio />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
