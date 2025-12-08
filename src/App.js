import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Auth/Login.jsx";
import Register from "./Auth/Register.jsx";
import LandingPage from "./components/LandingPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />       {/* Landing Page */}
        <Route path="/login" element={<Login />} />    {/* Login Page */}
        <Route path="/signup" element={<Register />} />    {/* Register Page */}
      </Routes>
    </Router>
  );
}

export default App;
