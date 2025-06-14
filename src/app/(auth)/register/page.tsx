"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../../style/authpage.css";
import AuthCard from "@/components/AuthCard";

type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit = (data: RegisterFormInputs) => {
    console.log("Registration Data:", data);
  };

  const password = watch("password");

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1e1e2f]  ">
      <AuthCard title="Register" hovered={hovered} setHovered={setHovered}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-sm w-full space-y-4 p-3  "
        >
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-2 py-1 rounded-full bg-gray-900 border border-gray-50 outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-2 py-1 rounded-full bg-gray-900 border border-gray-50 outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-2 py-1 rounded-full bg-gray-900 border border-gray-50 outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <input
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full px-2 py-1 rounded-full bg-gray-900 border border-gray-50 outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="auth-button font-bold transition duration-200"
          >
            <span className="text-white relative z-20 hover:text-[#ff014f] transition duration-200">
              Register
            </span>
          </button>
        </form>
      </AuthCard>
    </div>
  );
};

export default Register;
