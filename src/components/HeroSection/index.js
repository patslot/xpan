import React from 'react'
import "./HeroSection.css"
import {Button} from "../ButtonElements"
const HeroSection = () => {
    return(
        <div className="hero-container">
            <h1>Travel</h1>
            <p>
                Plan your next trip today
            </p>
            <div className="herobtn">
                <Button fontBig big primary>Get Started</Button>
            </div>
        </div>
    )
}

export default HeroSection