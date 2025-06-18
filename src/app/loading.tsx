"use client";

import React from "react";
import "../style/loadingSpinner.css"; // CSS টা নিচে দেওয়া হচ্ছে

const Loading = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white relative overflow-hidden">
      <div className="custom-loader"></div>
      <p className="mt-6 text-xl font-semibold tracking-wide">Loading...</p>
      <div className="glow-line "></div>
    </div>
  );
};

export default Loading;
