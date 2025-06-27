import { getPortfolioCollection } from "@/lib/database/db_collections";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
  
    const url = new URL(req.url);
    const currentPage = parseInt(url.searchParams.get("currentPage") || "1", 10);
    const pageSize = parseInt(url.searchParams.get("pageSize") || "10", 10);

    if (isNaN(currentPage) || isNaN(pageSize)) {
      return NextResponse.json(
        { message: "Invalid query parameters", success: false },
        { status: 400 }
      );
    }

    const portfolioCollection = await getPortfolioCollection();

    const skip = (currentPage - 1) * pageSize;

    const [data, total] = await Promise.all([
      portfolioCollection.find().skip(skip).limit(pageSize).toArray(),
      portfolioCollection.countDocuments(),
    ]);

    return NextResponse.json(
      {
        message: "Portfolio retrieved successfully",
        success: true,
        data,
        totalData: total,
        currentPage,
        totalPages: Math.ceil(total / pageSize),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in GET /api/portfolio:", error);

    return NextResponse.json(
      {
        message: "An error occurred while retrieving the portfolio",
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
