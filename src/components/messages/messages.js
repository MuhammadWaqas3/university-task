import React from "react";
import "../../styles/messages.css";

function Messages({ messages }) {
  return (
    <div className="messages card">
      <h2>Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
