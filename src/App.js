



import React from "react";

import "./App.css";
import Counter from "./components/counter";
import LoginForm from "./components/loginForm";
import Calculator from "./components/calculatorDev";
import ShoppingCart from "./components/shoppingCart";
console.log(Calculator);
function App() {
  return (
    <div className="App">
     <Counter/>
     <LoginForm/>
     <Calculator/>
     <ShoppingCart/>
    </div>
  );
}

export default App;
