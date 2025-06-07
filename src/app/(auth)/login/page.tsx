"use client";
import React, { useState } from "react";
import "../../../style/authpage.css";
import AuthCard from "@/components/AuthCard";

const Login: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="login-container flex justify-center items-center min-h-screen bg-[#1e1e2f] ">
      <AuthCard title="Login" hovered={hovered} setHovered={setHovered}>
        <form className="text-sm w-full space-y-4 p-5">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-2 py-1 rounded-full bg-gray-800 border border-gray-50 outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-2 py-1 rounded-full bg-gray-800 border border-gray-50 outline-none focus:ring-2 focus:ring-gray-500"
            />
      
        
            {/* <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 outline-none focus:ring-2 focus:ring-pink-500"
            />
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-pink-600 hover:bg-pink-700 font-bold text-white transition duration-200"
          >
            Login
          </button> */}
        </form>
      </AuthCard>
    </div>
  );
};

export default Login;
