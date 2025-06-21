"use client";

import { useState } from "react";
import DashHeading from "@/components/DashHeading";
import DashNavbar from "@/components/DashNavbar";
import Link from "next/link";

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
        <aside className={`${isOpen ? "w-2/12" : "w-0"} flex flex-col justify-between gap-3 p-3 transition-all  text-white`}>
          <div className="overflow-y-scroll scroll-hide h-full max-h-[75vh]"><DashNavbar></DashNavbar></div>
          <div className="p-1 min-h-[10vh] flex flex-col   gap-3 items-center justify-center bg-blackDee rounded-sm">
            <Link href={"/"} className="primary-hover text-sm w-full text-center">Home
            </Link>
            <button className="primary-hover text-sm w-full text-center">Logout</button>
          </div>
        </aside>

        <main className="flex-1 flex flex-col justify-between">
          <div className="flex-1 overflow-y-scroll bg-blackMid">{children}</div>
          <div className="text-center text-xs py-1 text-gray-500 border-t border-white">
            © {new Date().getFullYear()} Shah Alom. All rights reserved.
          </div>
        </main>
      </div>
    </div>
  );
}
