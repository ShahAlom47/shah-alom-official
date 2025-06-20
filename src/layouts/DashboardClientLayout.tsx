"use client";

import { useState } from "react";
import DashHeading from "@/components/DashHeading";

export default function DashboardClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <header className="w-full min-h-10 border-b border-white">
        <DashHeading navListOpen={isOpen} setNavListOpen={setIsOpen} />
      </header>

      <div className="flex gap-2 min-h-screen">
        <aside className={`${isOpen ? "w-2/12" : "w-0"} transition-all overflow-y-scroll scroll-hide text-white`}>
          {isOpen && <div>Sidebar content</div>}
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
