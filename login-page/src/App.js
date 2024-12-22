import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Login from "./login.js";
import Register from "./Register.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
