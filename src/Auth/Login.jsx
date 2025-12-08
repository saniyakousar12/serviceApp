import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";   // EXACT FILE PATH

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        login
      );

      alert("Login Successful!");

      // save user info
      localStorage.setItem("user", JSON.stringify(response.data));

      // ⭐ GO TO LANDING PAGE AFTER LOGIN
      navigate("/");
    } catch (error) {
      alert("Invalid email or password");
      console.error(error);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h3 className="text-center mb-3 login-title">Login</h3>

        <form onSubmit={submitLogin}>
          <input
            type="email"
            name="email"
            className="form-control login-input mb-3"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            className="form-control login-input mb-3"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button className="btn login-btn w-100">Login</button>

          <p className="text-center mt-2 login-text">
            Don’t have an account?{" "}
            <span
              className="signup-link"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;


