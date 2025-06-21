"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaFolderOpen, FaPlus, FaBlog } from "react-icons/fa";

const DashNavbar = () => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

  const navItems = [
    { name: "OverView", href: "/dashboard", icon: FaHome },
    { name: "Portfolio", href: "/portfolio", icon: FaFolderOpen },
    { name: "Add Portfolio", href: "/profile", icon: FaPlus },
    { name: "Blogs", href: "/blogs", icon: FaBlog },
    { name: "Add Blog", href: "/add-blog", icon: FaPlus },
    { name: "OverView", href: "/dashboard", icon: FaHome },
    { name: "Portfolio", href: "/portfolio", icon: FaFolderOpen },
    { name: "Add Portfolio", href: "/profile", icon: FaPlus },
    { name: "Blogs", href: "/blogs", icon: FaBlog },
    { name: "Add Blog", href: "/add-blog", icon: FaPlus },
    { name: "OverView", href: "/dashboard", icon: FaHome },
    { name: "Portfolio", href: "/portfolio", icon: FaFolderOpen },
    { name: "Add Portfolio", href: "/profile", icon: FaPlus },
    { name: "Blogs", href: "/blogs", icon: FaBlog },
    { name: "Add Blog", href: "/add-blog", icon: FaPlus },
  ];

  return (
    <>
      {navItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-full hover:bg-blackDeep transition duration-200 ${
              pathname === item.href ? "bg-blackDeep" : ""
            }`}
          >
            {Icon && <Icon className="text-lg" />}
            <span>{item.name}</span>
          </Link>
        );
      })}
    </>
  );
};

export default DashNavbar;
