import React from "react";
import {BrowserRouter as Router , Routes , Route ,Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar () {



    return (
        <nav className="navbar">


<Link to ="/"><img src="https://cdn.prod.website-files.com/633312e75f7f593dc82257d0/6347d9e9743ad2d131338391_WMW%20Logo.svg" alt="logo" width={150}/></Link>

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
            <Link to="/userProfile" className="link" >UserProfile</Link>
          </li>
        </ul>

      <button className="add-to-cart">Add To Cart</button>
      </nav>
    );

}