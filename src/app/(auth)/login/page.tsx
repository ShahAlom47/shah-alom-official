"use client"
import React, { useState } from 'react';
import "../../../style/authpage.css";

const Login: React.FC = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div className="login-container flex justify-center items-center min-h-screen bg-[#1e1e2f]">
      <div
        className={`box relative w-[350px] p-8 rounded-[20px] text-white font-sans transition-all duration-500 ease-in-out transform ${
          hovered ? 'scale-105' : 'scale-95'
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h2 className="text-center text-2xl font-semibold mb-6 relative z-20">Login</h2>

        <form
          className={`form relative transition-all duration-700 ease-in-out overflow-hidden ${
            hovered ? 'max-h-[1000px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
          }`}
          style={{ transitionProperty: 'opacity, transform, max-height' }}
        >
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-pink-600 hover:bg-pink-700 font-bold text-white transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Hover hint */}
        <p
          className={`text-center text-gray-400 mt-4 transition-opacity duration-300 ${
            hovered ? 'opacity-0' : 'opacity-100 animate-pulse'
          }`}
        >
          Hover to login
        </p>
      </div>
    </div>
  );
};

export default Login;
