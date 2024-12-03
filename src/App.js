import React from "react";
import "./App.css"; // Import global styles
import Profile from "./components/profileCard";
import Product from "./components/productCard";

function App() {
  return (
    <div>
      {/* <Profile name={"Waqas"} title={"Software Engineer"}  age={21} location={"Karachi"} /> */}
      <Product />
    </div>
  );
}
export default App;
