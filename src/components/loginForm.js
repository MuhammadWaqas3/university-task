import React, { useState } from "react";

export default function LoginForm () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setFullName("");
    setAge("");
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
            />
          </label>
        </div>
        <br />
        <button type="button" onClick={clearForm}>
          Clear
        </button>
      </form>

      <h3>Form Data (Real-Time):</h3>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Password:</strong> {password}
      </p>
      <p>
        <strong>Full Name:</strong> {fullName}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
    </div>
  );
};

