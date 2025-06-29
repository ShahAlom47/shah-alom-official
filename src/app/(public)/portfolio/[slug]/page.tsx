import React from "react";
import { notFound } from "next/navigation";
import { getSinglePortfolio } from "@/lib/allApiRequest/portfolioRequest/porfolioRequest";
import { Project } from "@/Interfaces/portfolioInterfaces";



interface Props {
  params: {
    slug: string;
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = params;
  const response = await getSinglePortfolio(slug);
  const portfolio = response?.data as Project

  if (!portfolio) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{portfolio.title}</h1>
      <p className="mb-6">{portfolio.description}</p>
      {portfolio.content && (
        <section
          dangerouslySetInnerHTML={{ __html: portfolio.content }}
          className="prose max-w-none"
        />
      )}
    </article>
  );
}
