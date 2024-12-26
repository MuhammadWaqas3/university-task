import React from "react";
import { useParams } from "react-router-dom";
import "../styles/productDetail.css";

export default function ProductDetail() {
  const { id } = useParams(); 


  const productData = {
    1: { name: "In-Fashion Nike Shoes", price: 10, description: "Trendy Genz Nike Shoes worth for you", image: "/sh1.jpeg" },
    2: { name: "Sports Wear", price: 15, description: "Sports Wear perfect for jogging , running or anyother sport", image: "/sh2.jpg" },
    3: { name: "Women's  Wear", price: 20, description: "Perfect choice for women", image: "/sh3.jpg" },
  };

 
  const product = productData[id];

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>Price: ${product.price}</h3>
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
}
