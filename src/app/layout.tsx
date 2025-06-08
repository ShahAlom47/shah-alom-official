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
    <html lang="en" className="dark">
      <body className="min-h-screen ">
        <Navbar />
       <main className=" mt-10">
         {children} 
         {children} 
       </main>
      </body>
    </html>
  );
}