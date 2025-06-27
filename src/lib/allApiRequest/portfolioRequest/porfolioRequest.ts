
import { GetAllPortfolioParams, Project } from "@/Interfaces/portfolioInterfaces";
import { request } from "../apiRequests";



export const addPortfolio = async (data:Project) => {
  return request("POST", "/portfolio/addPortfolio", { ...data }, );
}

export const getAllPortfolio = async ({ currentPage, limit, searchTrim }: GetAllPortfolioParams) => {
  const url = `/portfolio/getAllPortfolio?currentPage=${currentPage}&pageSize=${limit}` +
              (searchTrim ? `&searchTrim=${encodeURIComponent(searchTrim)}` : "");

  return request("GET", url);
};
