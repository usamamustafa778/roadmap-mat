import React from "react";

export default function MintBlack() {
  return (
    <div to="/mint" className="col-md-6 d-flex flex-column justify-content-between text-white mint__left">
      <div className="d-flex justify-content-between mint__left__top">
        {/* Top Left Small Text */}
        <h6 className="mt-2 col-4">THE HODLER IS STILL HOLDING</h6>

        {/* Gray Box */}
        <a href="https://twitter.com" className="gray__box col-4 d-flex justify-content-center align-items-center">
          <img src="/images/grey.png" alt="" />
        </a>

        {/* Top Right Small TExt */}
        <h6 className="mt-2 col-4 text-end">UP ONLY</h6>
      </div>

      {/* Big Texts */}
      <div className="big__texts">
        <h3 className="mt-5">
          WE BELIEVE IN OUR BAGS. <br /> WE NEVER SELL. LONG VISION. <br />{" "}
          STOCK TO FLOW IS OUR RELIGION. <br /> MICHAEL SAYLOR IS OUR GOD...{" "}
          <br /> BUT THIS IS HARD TIME AND WE NEED SOME ETH, SO DONT BE GREEDY
          AND MINT SOME HODLERS.
        </h3>
        <h1 className="my-5">
          ROADMAP? <br /> JUST IN CASE WE’LL EARN ENOUGH ETH, WE ARE CURRENTLY
          BROKE.
        </h1>
      </div>

      {/* Footer Small TExt */}
      <div className="footer d-flex align-items-center justify-content-between">
        <div className="col-8">
          <h6>THE HODLERS © 2022 ALL RIGHTS RESERVED</h6>
        </div>
        <div className="col-4">
          <h6 className="text-end mx-1">DEATH VISION LAB</h6>
        </div>
      </div>
    </div>
  );
}
