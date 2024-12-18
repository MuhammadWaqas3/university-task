



import React from "react";
import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import SpecialityMenu from "./components/specialityMenu";
import "./App.css";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <SpecialityMenu
  item1={{
    name: "Spicy Chicken Wings",
    description: "Our signature spicy wings",
    price: "Rs. 500",
    image: "https://images.deliveryhero.io/image/fd-pk/Products/49411247.jpg?width=%s",
  }}
  item2={{
    name: "Classic Fried Chicken",
    description: "Traditional recipe",
    price: "Rs. 350",
    image: "https://images.deliveryhero.io/image/fd-pk/Products/26754778.jpg?width=%s",
  }}
  item3={{
    name: "Chicken Burger Combo",
    description: "Burger with fries and drink",
    price: "Rs. 650",
    image: "https://images.deliveryhero.io/image/fd-pk/Products/58219340.jpg?width=%s",
  }}
/>
<Footer/>
    </div>
  );
}

export default App;
