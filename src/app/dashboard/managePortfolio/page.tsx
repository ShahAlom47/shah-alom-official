"use client"
import DashPageTitle from '@/components/DashPageTitle';
import { getAllPortfolio } from '@/lib/allApiRequest/portfolioRequest/porfolioRequest';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManagePortfolio = () => {
    const {data:portfolio, isLoading,error}= useQuery({
        queryKey: ['portfolio'],
        queryFn: async () => {
            // Replace with your API call to fetch portfolio data
            const response = await getAllPortfolio(`1&10`);
            if (!response || !response.success) {   
                throw new Error(response.message || 'Failed to fetch portfolio data');
            }
            console.log("portfolio data", response);
            // Assuming the response contains an array of portfolio items
            return response;
        },
        refetchOnWindowFocus: false,
    })
    console.log("portfolio data",portfolio );

    return (
        <div className="p-4 max-w ">
              <DashPageTitle>Manage Portfolio</DashPageTitle>
              <div className="">

              </div>
            
        </div>
    );
};

export default ManagePortfolio;