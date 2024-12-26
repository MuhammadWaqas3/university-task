





import React, { useState } from "react";
import "../styles/shoppingCart.css";

export default function ShoppingCart() {
  // State for hardcoded items
  const [item1Quantity, setItem1Quantity] = useState(0);
  const [item2Quantity, setItem2Quantity] = useState(0);
  const [item3Quantity, setItem3Quantity] = useState(0);

  const [showItem1, setShowItem1] = useState(true);
  const [showItem2, setShowItem2] = useState(true);
  const [showItem3, setShowItem3] = useState(true);

  // Total calculation
  const total =
    (showItem1 ? 10 * item1Quantity : 0) +
    (showItem2 ? 15 * item2Quantity : 0) +
    (showItem3 ? 20 * item3Quantity : 0);

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>

      <div className="cart-items">
        {showItem1 && (
          <div className="cart-item">
            <div className="item-details">
              <h3>Item 1</h3>
              <p>$10.00</p>
            </div>
            <div className="item-actions">
              <button
                onClick={() => setItem1Quantity((prev) => Math.max(0, prev - 1))}
              >
                -
              </button>
              <span>{item1Quantity}</span>
              <button onClick={() => setItem1Quantity((prev) => prev + 1)}>
                +
              </button>
            </div>
            <button className="remove-btn" onClick={() => setShowItem1(false)}>
              Remove
            </button>
          </div>
        )}

        {showItem2 && (
          <div className="cart-item">
            <div className="item-details">
              <h3>Item 2</h3>
              <p>$15.00</p>
            </div>
            <div className="item-actions">
              <button
                onClick={() => setItem2Quantity((prev) => Math.max(0, prev - 1))}
              >
                -
              </button>
              <span>{item2Quantity}</span>
              <button onClick={() => setItem2Quantity((prev) => prev + 1)}>
                +
              </button>
            </div>
            <button className="remove-btn" onClick={() => setShowItem2(false)}>
              Remove
            </button>
          </div>
        )}

        {showItem3 && (
          <div className="cart-item">
            <div className="item-details">
              <h3>Item 3</h3>
              <p>$20.00</p>
            </div>
            <div className="item-actions">
              <button
                onClick={() => setItem3Quantity((prev) => Math.max(0, prev - 1))}
              >
                -
              </button>
              <span>{item3Quantity}</span>
              <button onClick={() => setItem3Quantity((prev) => prev + 1)}>
                +
              </button>
            </div>
            <button className="remove-btn" onClick={() => setShowItem3(false)}>
              Remove
            </button>
          </div>
        )}
      </div>

      <div className="total">
        <h3>Total: ${total.toFixed(0)}</h3>
      </div>
    </div>
  );
}
