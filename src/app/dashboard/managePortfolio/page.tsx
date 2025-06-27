"use client";
import DashPageTitle from "@/components/DashPageTitle";
import { CustomTable } from "@/components/ui/CustomTable";
import { getAllPortfolio } from "@/lib/allApiRequest/portfolioRequest/porfolioRequest";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const ManagePortfolio = () => {
  const {
    data: portfolio,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["portfolio"],
    queryFn: async () => {
      // Replace with your API call to fetch portfolio data
      const response = await getAllPortfolio(`1&10`);
      if (!response || !response.success) {
        throw new Error(response.message || "Failed to fetch portfolio data");
      }
      console.log("portfolio data", response);
      // Assuming the response contains an array of portfolio items
      return response;
    },
    refetchOnWindowFocus: false,
  });
  console.log("portfolio data", portfolio);

  const columns = [
    { header: "Name", accessor: "name", isSummary: true },
    { header: "Email", accessor: "email" },
    { header: "Action", accessor: "action" },
  ];

  const data = [
    {
      name: "Shah Alom",
      email: "shah@example.com",
      action: (
        <Link
          href={`/dashboard/portfolio/${"12345"}`}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          View
        </Link>
      ),
    },
  ];

  return (
    <div className="p-4 max-w ">
      <DashPageTitle>Manage Portfolio</DashPageTitle>
      <div className=" ">
        <CustomTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default ManagePortfolio;
