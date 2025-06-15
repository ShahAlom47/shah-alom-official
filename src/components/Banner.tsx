"use client";

import { TypeAnimation } from "react-type-animation";
import bannerMobile from "../assets/image/banner-mobile.png";
import banner from "../assets/image/banner.png";
import useScreenInfo from "@/hooks/useScreenInfo";
import { useEffect, useState } from "react";

const Banner = () => {
  const { width } = useScreenInfo();
    const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const isMobileScreen = width < 768;

  if (!hasMounted) return null; // Prevent SSR mismatch


  return (
    <div
      className="py-10  bg-cover bg-center "
      style={{
        backgroundImage: `url(${
          isMobileScreen ? bannerMobile.src : banner.src
        })`,
      }}
    >
<div className="grid gap-3 grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto justify-center items-end lg:items-center min-h-screen ">
         <div className="p-4 space-y-3 order-2 lg:order-1  ">
          <h3 className=" uppercase text-grayDeep text-lg font-semibold">
            Welcome to my world
          </h3>
          <h1 className=" text-3xl font-bold text-grayLight">
            Hello,I’m <span className=" text-primaryRed">Shah Alom</span>
          </h1>
          <h1 className="text-2xl font-bold text-grayLight space-x-2">
            {" "}
            a
            <TypeAnimation
              sequence={[
                " Creative Front-End",
                2000,
                "  Developer",
                2000,
                "  Professional Coder",
                2000,
              ]}
              speed={10}
              cursor={false}
              style={{ fontSize: "" }}
              repeat={Infinity}
            />
          </h1>

          <p className=" text-grayDeep text-sm pt-5">
            Creative Front-End Developer crafting user-friendly web experiences
            with modern technologies and clean design.
          </p>
          <h1 className="mt-6 font-semibold text-grayLight text-lg pt-7">
            A Journey of
            <TypeAnimation
              sequence={[" Dreams", 2000, " Emotions", 2000]}
              speed={10}
              cursor={false}
              style={{ fontSize: "" }}
              repeat={Infinity}
              className="text-primaryRed "
            />
          </h1>
        </div>

       <div className="p-4  order-1 lg:order-2 h-full "></div>
      </div>
    </div>
  );
};

export default Banner;
