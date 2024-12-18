import React from "react";
 import './landingpage.css';



function SpecialityMenu({ item1, item2, item3 }) {
    return (
      <div className="speciality-menu" id="menu">
        <h2>Our Speciality Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src={item1.image} alt={item1.name} className="menu-image" />
            <h3>{item1.name}</h3>
            <p>{item1.description}</p>
            <div className="price-section">
              <p className="price">{item1.price}</p>
              <button className="add-to-cart-button">Add to cart</button>
            </div>
          </div>
          <div className="menu-item">
            <img src={item2.image} alt={item2.name} className="menu-image" />
            <h3>{item2.name}</h3>
            <p>{item2.description}</p>
            <div className="price-section">
              <p className="price">{item2.price}</p>
              <button className="add-to-cart-button">Add to cart</button>
            </div>
          </div>
          <div className="menu-item">
            <img src={item3.image} alt={item3.name} className="menu-image" />
            <h3>{item3.name}</h3>
            <p>{item3.description}</p>
            <div className="price-section">
              <p className="price">{item3.price}</p>
              <button className="add-to-cart-button">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SpecialityMenu;