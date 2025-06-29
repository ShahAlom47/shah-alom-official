import { getAllPortfolio } from "@/lib/allApiRequest/portfolioRequest/porfolioRequest";
import { Project } from "@/Interfaces/portfolioInterfaces";
import Link from "next/link";
import PublicPagePaginationButton from "@/components/PublicPagePaginationButton";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function PortfolioPage({ searchParams }: Props) {
  const currentPage = Number(searchParams.page) || 1;
  const limit = 1;

  const response = await getAllPortfolio({ currentPage, limit });

  const portfolioData = response?.data as Project[] || [];
  const total = response?.totalData || 0;

  const totalPages = Math.ceil(total / limit);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.map((portfolio) => (
          <div
            key={String(portfolio._id)}
            className="border rounded p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{portfolio.title}</h2>
            <p className="mt-2">{portfolio.description}</p>
            <Link
              href={`/portfolio/${portfolio._id}`}
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
      <PublicPagePaginationButton currentPage={currentPage} totalPages={totalPages}></PublicPagePaginationButton>
      )}
    </section>
  );
}
