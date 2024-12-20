import React, { useState } from "react";

export default function Calculator() {






  const [num1, setNum1] = useState(""); 
  const [num2, setNum2] = useState(""); 
  const [result, setResult] = useState(null); 

  const addition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const division = () => {
    if (num2 === "0") {
      setResult("cant divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
  <div >
  <h2>Basic Calculator</h2>
    <div>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      
      />
    </div>
    <div>
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      
      />
    </div>
    <div>
      <button onClick={addition} >
        Add
      </button>
      <button onClick={subtraction} >
        Subtract
      </button>
      <button onClick={multiplication} >
        Multiply
      </button>
      <button onClick={division} >
        Divide
      </button>
    </div>
    <div>
      <h3>Result: {result !== null ? result : "N/A"}</h3>
    </div>
  </div> 

//  <h1>Calculator</h1>




);
}