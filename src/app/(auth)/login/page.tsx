"use client";
import React, { useState } from "react";
import "../../../style/authpage.css";
import AuthCard from "@/components/AuthCard";

const Login: React.FC = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div className=" flex justify-center items-center min-h-screen bg-[#1e1e2f] ">
      <AuthCard title="login" hovered={hovered} setHovered={setHovered}>
        <form className="text-sm w-full space-y-4 p-5">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-2 py-1 rounded-full bg-gray-900 border border-gray-50 outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-2 py-1 rounded-full bg-gray-900 border  border-gray-50 outline-none focus:ring-2 focus:ring-gray-500"
            />
      
        
           
          <button
            type="submit"
            className=" auth-button   font-bold  transition duration-200"
          >
            <span className=" text-white relative z-20 hover:text-[#ff014f] transition duration-200 ">Login</span>
          </button> 
        </form>
      </AuthCard>
    </div>
  );
};

export default Login;
