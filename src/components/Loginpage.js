
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function Loginpage() {
  const navigate = useNavigate();

  // State for email, password
  const [login, setLogin] = useState({ email: "", password: "" });

  // State for role (customer or provider)
  const [role, setRole] = useState("");

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitLogin = (e) => {
    e.preventDefault();

    // Check role and redirect
    if (role === "customer") {
      navigate("/customer");
    } else if (role === "provider") {
      navigate("/provider");
    } else {
      alert("Please select a role");
      return;
    }

    alert("Login Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#dfe3ee] p-5">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-lg rounded-xl p-8 border border-black/20 shadow-xl animate-fadeIn">
        <h3 className="text-center mb-6 text-2xl font-bold text-[#1b1f3b]">
          Login
        </h3>

        <form onSubmit={submitLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#fca311] focus:ring focus:ring-[#fca311]/40 outline-none transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#fca311] focus:ring focus:ring-[#fca311]/40 outline-none transition"
          />

          {/* ROLE SELECTION DROPDOWN */}
          <select
            className="form-control login-input mb-3"
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="customer">Customer</option>
            <option value="provider">Service Provider</option>
          </select>

          <button className="btn login-btn w-100">Login</button>

          <p className="text-center mt-2 login-text">
            Don't have an account?{" "}
            <span
              className="signup-link"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Loginpage;
