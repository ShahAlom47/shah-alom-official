import Banner from "@/components/Banner";
import React from "react";
import Loading from "./loading";
import Error from "./error";

const Home = () => {
  return (
    <div className=" min-h-screen ">
      <Banner></Banner>
      <Loading></Loading>
      <Error></Error>
    </div>
  );
};

export default Home;
