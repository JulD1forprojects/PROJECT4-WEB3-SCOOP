import React from "react";
import landing from "../images/landing.png";

const Slider = () => {
  return (
    <div class="mmmcontainer">
      <img src={landing} alt="Banner" style={{ width: "100%" }} />

      <h2 class="bottom-left text-white">
        Place to get and share <br /> your latest Web3 scoop
      </h2>
    </div>
  );
};

export default Slider;
