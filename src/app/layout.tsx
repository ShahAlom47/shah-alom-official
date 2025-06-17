import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/Providers/Providers";

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
        <Providers>
          <Navbar />
          <main className=" mt-16 min-h-screen py-2">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
