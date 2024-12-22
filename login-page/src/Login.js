import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./Login.css";
import ecoFriendlyLogo from "./assets/EcoFriendly.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error messages

    try {
      // API Call
      const response = await axios.post(
        "https://bml1ur6qt9.execute-api.us-east-1.amazonaws.com/dev/login",
        {
          username,
          password,
        }
      );

      // Successful Login
      if (response.data.message === "Login Successful") {
        alert(`Welcome, ${username}!`);
        navigate("/home", { state: { username } }); // Redirect to Home
      } else {
        // Invalid credentials
        setErrorMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);

      // Handle specific error messages or fallback to a generic one
      setErrorMessage(
        error.response?.data?.error ||
          "An unexpected error occurred. Please try again later."
      );
    }
  };

  const handleRegister = () => {
    navigate("/register"); // Redirect to the registration page
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <img src={ecoFriendlyLogo} alt="Eco Friendly Logo" className="login-logo" />
        <h2 className="login-title">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="register-prompt">Don't have an account?</p>
        <button onClick={handleRegister} className="register-button">
          Register
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
