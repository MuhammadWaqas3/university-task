import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Messages from  "./components/messages/messages";
import Statistics from "./components/statistics/stats";
import Info from "./components/userInfo/info";

function App() {

 const userData = {
        name: "John Doe",
        email: "johndoe@example.com",
        role: "Administrator",
        profilePicture: "./img.svg",
      };
    
      const statisticsData = {
        totalUsers: 500,
        activeUsers: 120,
        newSignups: 50,
        activePercentage: (120 / 500) * 100,
      };
    
      const messagesData = [
        "Welcome to the platform!",
        "System maintenance scheduled for tomorrow.",
        "New features have been added!",
      ];
    
      return (
        <div className="app-container">
          <div className="grid-layout">
           <Info user={userData} />
        <Statistics stats={statisticsData} />
            <Messages messages={messagesData} /> 
          </div>
        </div>
      );
    }
    
 
export default App;
