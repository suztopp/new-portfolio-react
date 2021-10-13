import React from 'react';
import '../App.css';
import { Button } from './Button'
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1 style={{ color: "white", paddingTop: "70px", fontSize: "80px" }}>I'M SUZ</h1>
            <p style={{ color: "white" }}>I like to build things...</p>
            <br></br>

            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    CHECK OUT MY WORK
                </Button>
                <br></br><br></br>
                {/* <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    SEE WHAT I AM ABOUT
                </Button> */}
            </div>
        </div>
    )
}

export default HeroSection;