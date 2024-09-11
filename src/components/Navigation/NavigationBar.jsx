import React from 'react';
import './css/NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#services">Documents</a></li>
                <li><a href="#portfolio">Calendar</a></li>
                <li><a href="#contact">Galery</a></li>
                <li><a href="#contact">Contacts</a></li>
                <li><a href="#contact">News</a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
