import React from 'react';
import "../styles/form.css";


function Form() {
  return (
    <div className="form-container">
        
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit" className="form-button">Submit</button>
    </div>
  );
}

export default Form;
