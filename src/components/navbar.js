import React from "react";
import {BrowserRouter as Router , Routes , Route ,Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar () {



    return (
        <nav className="navbar">


<Link to ="/"><img src="https://wemakeshoes.com/wp-content/webp-express/webp-images/uploads/2023/02/candt-logo-001.png.webp" alt="logo" width={150}/></Link>

        <ul className="ul">
          {/* <li>
            <Link to="/home" className="link" >Home</Link>
          </li> */}
          <li>
            <Link to="/shoppingCart" className="link">Shopping</Link>
          </li>
          <li>
            <Link to="/product" className="link" >Product</Link>
          </li>
          
          <li>
          <Link to="/user/john_doe" className="link">User Profile</Link>
          </li>
        </ul>

      <button className="add-to-cart">Add To Cart</button>
      </nav>
    );

}