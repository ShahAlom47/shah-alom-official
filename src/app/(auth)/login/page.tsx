"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../../style/authpage.css";
import AuthCard from "@/components/AuthCard";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login Data:", data);
    // You can handle login logic here (e.g., API call)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1e1e2f] ">
      <AuthCard title="login" hovered={hovered} setHovered={setHovered}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-sm w-full space-y-4 p-3  "
        >
          <div>
            <input
              type="email"
              placeholder="Enter email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-2 py-1 rounded-full bg-gray-900 border border-gray-50 outline-none focus:ring focus:ring-gray-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

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
              className="w-full px-2 py-1 rounded-full bg-gray-900 border border-gray-50 outline-none focus:ring focus:ring-gray-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="auth-button font-bold transition duration-200"
          >
            <span className="text-white relative z-20 hover:text-[#ff014f] transition duration-200">
              Login
            </span>
          </button>
        </form>
      </AuthCard>
    </div>
  );
};

export default Login;
