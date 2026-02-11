import React, { useState, useEffect } from 'react';
import './welcome.css';

const WelcomeScreen = ({ onEnter }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        setTimeout(() => {
            setHidden(true);
            if (onEnter) onEnter();
        }, 1500); // Wait for door animation to finish
    };

    if (hidden) return null;

    return (
        <div className={`welcome-screen ${isOpen ? 'open' : ''}`} onClick={handleOpen}>
            <div className="door door-left"></div>
            <div className="door door-right"></div>
            <div className="logo-container">
                <h1 className="welcome-text">Experience <br /> <span>Royal Hospitality</span></h1>
                <img src="/images/logo.png" alt="Chatpati Delhi" />
                <div className="click-hint">Click to Enter</div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
