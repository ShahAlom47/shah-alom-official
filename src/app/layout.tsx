import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {children}
      </body>
    </html>
  );
}