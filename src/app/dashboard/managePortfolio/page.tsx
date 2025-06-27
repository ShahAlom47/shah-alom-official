"use client";
import ErrorComponent from "@/app/error";
import Loading from "@/app/loading";
import DashPageTitle from "@/components/DashPageTitle";
import { CustomTable } from "@/components/ui/CustomTable";
import { DashPaginationButton } from "@/components/ui/DashPaginationButton";
import { Project } from "@/Interfaces/portfolioInterfaces";
import { getAllPortfolio } from "@/lib/allApiRequest/portfolioRequest/porfolioRequest";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";

const ManagePortfolio = () => {
  const [page, setPage] = useState(1);
  const limit = 10; // Assuming you want to fetch 10 items per page

  const {
    data: portfolio,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["portfolio"],
    queryFn: async () => {
      const response = await getAllPortfolio({
        currentPage: page,
        limit: limit,
        searchTrim: "",
      });
      if (!response || !response.success) {
        throw new globalThis.Error(
          response.message || "Failed to fetch portfolio data"
        );
      }
      return response;
    },
    refetchOnWindowFocus: false,
  });

  const portfolioData = (portfolio?.data as Project[]) || [];
  console.log(portfolioData, "portfolioData");

  const totalPages = portfolio?.totalPages || 1; // Assuming portfolio contains totalPages

  const columns = [
    { header: "Title", accessor: "title", isSummary: true },
    { header: "Live", accessor: "live" },
    { header: "Git Repo", accessor: "gitRepo" },
    { header: "View", accessor: "view" },
  ];

  //   const data = [
  //     {
  //       name:,
  //       email: "shah@example.com",
  //       action: (
  //         <Link
  //           href={`/dashboard/portfolio/${"12345"}`}
  //           className="primary-hover"
  //         >
  //           View
  //         </Link>
  //       ),
  //     },
  //   ];

  const data =
    portfolioData?.map((item) => ({
      title: item.title,
      live: item.liveLink ? (
        <Link href={item.liveLink} target="_blank" className="btn btn-sm">
          Live
        </Link>
      ) : (
        "Not Available"
      ),

      gitRepo: item.repoLink ? (
        <Link href={item.repoLink} target="_blank" className="btn btn-sm">
          Git Repo
        </Link>
      ) : (
        "Not Available"
      ),
      view:  (
        <Link href={`dashboard/ManagePortfolio/${item?._id}`} className="btn btn-sm">
          View Details
        </Link>
      ),
    })) || [];

  return (
    <div className="p-4 max-w   min-h-screen  ">
      <DashPageTitle>Manage Portfolio</DashPageTitle>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent />
      ) : (
        <>
          <CustomTable
            columns={columns}
            data={data}
            className="shadow-2xl shadow-stone-600"
          />
          <DashPaginationButton
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
            className="mt-4"
          />
        </>
      )}
    </div>
  );
};

export default ManagePortfolio;
