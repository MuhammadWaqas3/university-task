import React from "react";
import { Link } from "react-router-dom";
import "../styles/product.css";
export default function Product() {
  return (
    <div>
      <h1>Products</h1>
      <div className="products">
    <Link to="/product/1">  <img src="sh1.jpeg" alt="shoe"  className="prd-shoe"/>  </Link>
    <Link to="/product/2"><img src="sh2.jpg" alt="shoe"  className="prd-shoe"/></Link>
    <Link to="/product/3"><img src="sh3.jpg" alt="shoe"  className="prd-shoe"/></Link>
      </div>
    </div>
  );
}
