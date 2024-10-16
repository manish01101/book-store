import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="w-full md:w-1/2 flex items-center md:justify-end">
        <img src={bannerImg} alt="" />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="md:text-5xl text-2xl fond-medium mb-7">
          New Release This Week
        </h1>
        <p>
          It's time to update your list with some of the latest and greatest
          releases in the literary world. From heart-pumping thrillers to
          captivating memoirs, this week's new releases offer something for
          everyone
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
