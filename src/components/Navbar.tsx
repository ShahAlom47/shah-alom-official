"use client";
import useScreenInfo from "@/hooks/useScreenInfo";
import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileNavBar from "./MobileNavbar";
import AuthMenu from "./AuthMenu";
const Navbar = () => {
 
  const { scrollY, scrollDirection } = useScreenInfo();
  const showNavbar = scrollDirection === "up" || scrollY < 100;
  const showShadow =  scrollY > 50


  return (
    <nav
      className={`fixed top-0 left-0 w-full  z-50  duration-500 transition-all  ${showShadow?" bg-blackMid  bg-opacity-90 shadow-md shadow-grayDeep":"shadow-none"}  ${
        showNavbar ? "translate-y-0 " : "-translate-y-[200%]"
      }  lg:px-5 md:px-3.5 px-2 py-4  `}
    >
      <div className=" lg:flex md:flex hidden items-center justify-between  ">
        <div className=" flex items-center gap-4 ">
       <Logo></Logo>
        </div>
        <div className="flex items-center gap-4 ">
          <NavLinks></NavLinks>
          <AuthMenu></AuthMenu>
        </div>
      </div>
      <div className={`lg:hidden md:hidden flex items-center justify-between `}>
        <MobileNavBar></MobileNavBar>
      </div>
    </nav>
  );
};

export default Navbar;
