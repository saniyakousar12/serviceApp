
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitLogin = (e) => {
    e.preventDefault();
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

          <button
            type="submit"
            className="w-full h-12 bg-[#fca311] border-2 border-[#b8750b] text-black font-bold rounded-lg hover:bg-[#ffbe33] hover:border-[#a06306] transition transform hover:-translate-y-1"
          >
            Login
          </button>

          <p className="text-center text-gray-700 mt-2">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-[#1b1f3b] font-bold cursor-pointer hover:underline"
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
