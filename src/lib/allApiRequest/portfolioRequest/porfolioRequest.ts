
import { Project } from "@/Interfaces/portfolioInterfaces";
import { request } from "../apiRequests";



export const addPortfolio = async (data:Project) => {
  return request("POST", "/portfolio/addPortfolio", { ...data }, );
}
export const getAllPortfolio = async (query:string) => {
  return request("GET", `/portfolio/getAllPortfolio?${query}` );
}