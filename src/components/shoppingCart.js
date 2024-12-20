import React, { useState } from "react";

const ShoppingCart = () => {
  const [item1Count, setItem1Count] = useState(0);
  const [item2Count, setItem2Count] = useState(0);
  const [item3Count, setItem3Count] = useState(0);
  const [total, setTotal] = useState(0);

  const addItem = (price, setCount, count) => {
    setCount(count + 1);
    setTotal(total + price);
  };

  const removeItem = (price, setCount, count) => {
    if (count > 0) {
      setCount(count - 1);
      setTotal(total - price);
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        <h3>Item 1 ($10)</h3>
        <button onClick={() => addItem(10, setItem1Count, item1Count)}>
          Add
        </button>
        <button onClick={() => removeItem(10, setItem1Count, item1Count)}>
          Remove
        </button>
        <p>Quantity: {item1Count}</p>
      </div>
      <div>
        <h3>Item 2 ($20)</h3>
        <button onClick={() => addItem(20, setItem2Count, item2Count)}>
          Add
        </button>
        <button onClick={() => removeItem(20, setItem2Count, item2Count)}>
          Remove
        </button>
        <p>Quantity: {item2Count}</p>
      </div>
      <div>
        <h3>Item 3 ($30)</h3>
        <button onClick={() => addItem(30, setItem3Count, item3Count)}>
          Add
        </button>
        <button onClick={() => removeItem(30, setItem3Count, item3Count)}>
          Remove
        </button>
        <p>Quantity: {item3Count}</p>
      </div>
      <h3>Total Cost: ${total}</h3>
    </div>
  );
};

export default ShoppingCart;
