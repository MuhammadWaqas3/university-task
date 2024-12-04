import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Product from "./components/productCard/product";
import Profile from "./components/profileCard/profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         
          <Route
            path="/profile"
            element={
              <div>
                <Profile
                  name="Waqas"
                  title="Software Engineer"
                  age={21}
                  location="Karachi"
                />
                <div className="link-to-product">
                  <Link to="/">Click to watch my product →</Link>
                </div>
              </div>
            }

        
          />
 <Route
            path="/"
            element={
              <div>
                <Product
                  id={12345}
                  name="iPhone 16 Pro"
                  price="$899.00"
                  url="./product-image.svg"
                />
                <div className="link-to-profile">
                  <Link to="/profile">Click to watch my profile →</Link>
                </div>
              </div>
            }
          />        </Routes>
      </div>
    </Router>
  );
}

export default App;
