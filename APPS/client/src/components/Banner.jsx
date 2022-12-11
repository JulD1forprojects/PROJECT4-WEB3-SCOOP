import React from "react";
import landing from "../images/landing.png";

const Banner = () => {
  return (
    <div className="mmmcontainer">
      <img src={landing} alt="Banner" style={{ width: "100%" }} />

      <h2 className="bottom-left text-white">
        Place to get and share <br /> your latest web3 scoop
      </h2>
    </div>
  );
};

export default Banner;
