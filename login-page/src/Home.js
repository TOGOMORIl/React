import React from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div className="home-wrapper no-background">
      <div className="home-header">
        <h1>Welcome, {username ? username : "Guest"}!</h1>
        <p>This is the homepage of your program.</p>
      </div>
    </div>
  );
};

export default Home;
