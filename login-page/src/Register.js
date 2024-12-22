import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Register.css";

import ecoFriendlyLogo from "./assets/EcoFriendly.jpg";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/register", {
        username,
        password,
      });
      if (response.data.message) {
        alert(response.data.message);
        navigate("/login"); // Redirect to login page after success
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error || "An error occurred.");
      } else {
        setErrorMessage("Server connection failed. Please try again later.");
      }
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <img src={ecoFriendlyLogo} alt="EcoFriendly Logo" className="register-logo" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Choose a password"
              required
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Register;
