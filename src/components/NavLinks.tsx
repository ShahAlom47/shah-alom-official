"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Code Diary", href: "/code-diary" },
  { name: "Blogs", href: "/blogs" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavLinks = () => {
  const pathname = usePathname();

  const getActiveStyle = (href: string) => {
    if (href === "/") {
      return pathname === "/" ? "text-grayLight font-bold" : "text-grayDeep font-semibold hover:text-white";
    }
    return pathname.startsWith(href)
      ? "text-grayLight font-bold"
      : "text-grayDeep font-semibold hover:text-white";
  };

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={` transition-all duration-500 uppercase  ${getActiveStyle(item.href)}`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
