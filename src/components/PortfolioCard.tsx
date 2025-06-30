"use client";
import { Project } from "@/Interfaces/portfolioInterfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

type PortfolioDetailsProps = {
  portfolio: Project;
};

const PortfolioCard = ({ portfolio }: PortfolioDetailsProps) => {
  const images = portfolio?.media?.filter((item) => item.type === "image") || [];

  return (
    <div className="primary-hover group p-4 transition-all duration-700 ease-in-out">
      {/* Image Slider */}
      <div className="relative w-full  rounded overflow-hidden">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full md:h-60 sm:h-52 h-40 rounded-sm">
                <Image
                  src={img.url}
                  alt={`portfolio-image-${index}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Title and Links */}
      <h2 className="text-xl font-semibold my-3 capitalize transition-all duration-700 ease-in-out group-hover:text-primaryRed">
        {portfolio.title}
      </h2>
      <div className="flex justify-between items-center">
        <Link
          href={portfolio?.liveLink || ""}
          target="_blank"
          className="underline hover:text-primaryRed hover:scale-110 transition-all duration-500"
        >
          Live
        </Link>
        <Link
          href={`/portfolio/${portfolio._id}`}
          className="primary-hover px-3 py-1 transition-all duration-500"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
