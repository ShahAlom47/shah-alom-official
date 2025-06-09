import React from "react";
import clsx from "clsx";

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "px-6 py-2 rounded-md text-primaryRed font-semibold",
        "bg-gradient-to-r from-blackLight to-blackMid",
        "bg-[length:200%_100%] bg-left",
        "transition-all duration-500 ease-in-out",
        "hover:bg-gradient-to-l hover:-translate-y-1",
        "shadow-md shadow-blackDeep ",
        "shadow-md  shadow-gray-600  ",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--tw-gradient-stops))",
      }}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
