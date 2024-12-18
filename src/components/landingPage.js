import React from 'react';
import './landingpage.css';

function LandingPage() {
    return (
        <div className="landing-page" id="home">
        <div className="intro-text">
            <h1>Taste the <span className='landingspan'>KababJees</span> Magic</h1>
            <p>Crispy Delicious Chikcen that keeps you coming back</p>
            <button className="order-button">                  <img src="./cart.png" width={20}/>
             Order Now</button>
        </div>
        <img src="./landingpage-img.jpg" alt="Landing" className="landing-image" />
    </div>
    );  
}

export default LandingPage;