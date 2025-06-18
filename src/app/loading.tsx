"use client";

import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blackDeep text-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <FaSpinner className="animate-spin text-4xl text-primary" />

        {/* Text */}
        <p className="text-lg font-medium">Loading, please wait...</p>
      </div>
    </div>
  );
}
