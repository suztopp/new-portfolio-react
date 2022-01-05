import React from 'react';
import '../App.css';
import { Button } from './Button'
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-3.mp4" autoPlay loop muted />
            <h1 style={{ paddingTop: "100px", color: "white" }}>I'M SUZ</h1>
            <p style={{ paddingBottom: "30px", color: "white" }}>I like to learn....</p>

            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>HOW TO CONTACT ME</Button>
            </div>
        </div>
    )
}

export default HeroSection;