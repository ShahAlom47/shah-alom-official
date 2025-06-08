"use client";
import useScreenInfo from "@/hooks/useScreenInfo";
import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
const Navbar = () => {
 
  const { scrollY, scrollDirection } = useScreenInfo();
  const showNavbar = scrollDirection === "up" || scrollY < 100;



  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }  lg:px-5 md:px-3.5 px-2 pt-4  `}
    >
      <div className=" lg:flex md:flex hidden items-center justify-between  ">
        <div className=" flex items-center gap-4 ">
       <Logo></Logo>
        </div>
        <div className="flex items-center gap-4 ">
          <NavLinks></NavLinks>
        </div>
      </div>
      <div className={`lg:hidden md:hidden flex items-center justify-between `}>
        {/* <MobileNavBar></MobileNavBar> */}
      </div>
    </nav>
  );
};

export default Navbar;
