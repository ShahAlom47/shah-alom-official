import Banner from "@/components/Banner";
import React from "react";
import Loading from "./loading";

const Home = () => {
  return (
    <div className=" min-h-screen ">
      <Banner></Banner>
      <Loading></Loading>
    </div>
  );
};

export default Home;
