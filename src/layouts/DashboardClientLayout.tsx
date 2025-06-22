"use client";

import { useState } from "react";
import DashHeading from "@/components/DashHeading";
import DashNavbar from "@/components/DashNavbar";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

export default function DashboardClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen  ">
      <header className="w-full  border-b border-grayLight min-h-[10vh] bg-blackMid ">
        <DashHeading navListOpen={isOpen} setNavListOpen={setIsOpen} />
      </header>

      <div className="flex gap-2 min-h-[89vh] ">
        <aside className={`${isOpen ? "" : " "} flex flex-col justify-between gap-3 p-3 transition-all  text-white`}>
          <div className="overflow-y-scroll scroll-hide h-full max-h-[75vh] space-y-1 "><DashNavbar isOpen={isOpen} ></DashNavbar></div>
          <div className="p-1 min-h-[10vh] flex flex-col   gap-3 items-center justify-center bg-blackDee rounded-sm">
            <Link href={"/"} className="primary-hover text-sm w-full text-center flex items-center gap-2 justify-center "><FaHome></FaHome> {isOpen&& "Home"}
            </Link>
            <button className="primary-hover text-sm w-full text-center flex items-center gap-2 justify-center"><AiOutlineLogout /> {isOpen&& "Logout"}</button>
          </div>
        </aside>

        <main className="flex-1 flex flex-col justify-between">
          <div className="flex-1 max-h-[85vh] overflow-y-scroll bg-blackMid">{children}</div>
          <div className="text-center text-xs py-1 text-gray-500 border-t border-grayLight">
            © {new Date().getFullYear()} Shah Alom. All rights reserved.
          </div>
        </main>
      </div>
    </div>
  );
}
