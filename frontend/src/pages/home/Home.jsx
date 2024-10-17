import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recommended from "./Recommended";
import News from "./News";

const Home = () => {
  return (
    <div className="max-w-screen-2xl px-4 py-6">
      <Banner />
      <TopSellers />
      <Recommended />
      <News />
    </div>
  );
};

export default Home;
