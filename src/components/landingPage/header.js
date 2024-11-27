import "../../styles/header.css";
import React from 'react';

function LandingPage() {
    return (
        <div>
            <div className="landing-container">
                <div>
                    <h1 className="title">Your One-Stop Solution for Laptop Problems – Software & Hardware</h1>
                    <p className="content-text">
                        Expert Assistance to Fix Your Laptop Issues – Fast, Reliable, and Professional Support for Software and Hardware Problems.
                    </p>
                
                    </div>
                <div>
                    <img src="/assets/img.jpg" alt="image photo" className="header-image" />
                </div>
            </div>
            {/* <button className="landing-button">
                Learn More
            </button> */}
        </div>
    );
}

export default LandingPage;
