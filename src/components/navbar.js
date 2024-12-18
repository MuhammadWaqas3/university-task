




import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-brand-container">
                <img src="./logo-img.png" alt="KababJees Logo" className="logo" />
                <h4 className="brandname">KababJees Fried Chicken</h4>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li>
                    <a href="#footer" className="order-button">
                        <img src="./cart.png" width={20} alt="Cart" />
                        Order
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
