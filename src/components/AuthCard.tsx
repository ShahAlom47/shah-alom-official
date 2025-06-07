import React from "react";

interface AuthCardProps {
  title: string;
  children: React.ReactNode;
  hovered: boolean;
  setHovered: (value: boolean) => void;
}

const AuthCard: React.FC<AuthCardProps> = ({
  title,
  children,
  hovered,
  setHovered,
}) => {
  return (
    <div
      className={`box  relative flex flex-col items-center  justify-center w-[450px] p- rounded-[20px] text-white font-sans transition-all duration-500 ease-in-out transform ${
        hovered ? "scale-105" : "scale-95"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className=" box-shadow">
        <h2 className="text-center text-2xl font-medium  relative mt-4 z-20 uppercase  w-full">
          {title}
        </h2>

        <div
          className={`form relative transition-all duration-1000 ease-in-out overflow-hidden   ${
            hovered
              ? "max-h-[1000px] opacity-100 scale-100 "
              : "max-h-0 opacity-30 scale-95 "
          }`}
          style={{ transitionProperty: "opacity, transform, max-height" }}
        >
          {children}
        </div>

        <p
          className={`text-center text-gray-400  transition-opacity duration-300 ${
            hovered ? "opacity-30 h-0 " : "opacity-100 animate-pulse"
          }`}
        >
          Hover to {title.toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default AuthCard;
