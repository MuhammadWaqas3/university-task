import React from "react";
import {BrowserRouter as Router , Routes , Route ,Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Shopping from "./components/shoppingCart";
import Product from "./components/product";
import UserProfile from "./components/userProfile";
import Navbar from "./components/navbar";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/shoppingCart" element={<Shopping />} />
          <Route path="/product" element={<Product />} />
          <Route path="/userProfile" element={<UserProfile />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;



