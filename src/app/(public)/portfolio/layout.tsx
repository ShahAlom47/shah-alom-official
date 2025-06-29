// app/portfolio/layout.tsx
import PageHeading from "@/components/PageHeading";
import React, { ReactNode } from "react";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <section className="max-w-5xl mx-auto p-4">
      <PageHeading
        title="My Portfolio"
        subtitle="Visit my portfolio and keep your feedback"
      ></PageHeading>
      {children}
    </section>
  );
}
