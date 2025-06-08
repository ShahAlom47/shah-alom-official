import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Shah Alom Official",
  description: "Shah Alom's official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className="min-h-screen bg-blackLight dark:bg-blackMi">
        <Navbar />
       <main className=" mt-10">
         {children} 
         {children} 
       </main>
      </body>
    </html>
  );
}