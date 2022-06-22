import React, { useState } from "react";

export default function Mint() {
  const [mint, setMint] = useState("noButtons");
  const [counter, setCounter] = useState(0);

  const showButtons = () => {
    setMint("mintButtons");
  };

  return (
    <div className="mint py-5 container-fluid d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div to="/mint" className="col-md-6 text-white mint__left px-3">
            <div className="d-flex justify-content-between mint__left__top">
              <h6 className="mt-2 col-4">THE HODLER IS STILL HOLDING</h6>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <img src="/images/grey.png" alt="" />
              </div>
              <h6 className="mt-2 col-4 text-end">UP ONLY</h6>
            </div>
            <h3 className="mt-5">
              WE BELIEVE IN OUR BAGS. WE NEVER SELL. LONG VISION. STOCK TO FLOW
              IS OUR RELIGION. MICHAEL SAYLOR IS OUR GOD... BUT THIS IS HARD
              TIME AND WE NEED SOME ETH, SO DONT BE GREEDY AND MINT SOME
              HODLERS.
            </h3>
            <h1 className="my-5">
              ROADMAP? JUST IN CASE WE’LL EARN ENOUGH ETH, WE ARE CURRENTLY
              BROKE.
            </h1>
          </div>
          <div
            to="/mint"
            className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-white mint__right"
          >
            <h6 className="mt-2 col-4 text-end">UP ONLY</h6>
            
            <img onClick={showButtons} src="/images/red.png" alt="" />
            <h5 onClick={showButtons}>Mint Here</h5>
            <div className={mint}>
              <div onClick={() => setCounter(counter - 1)}>-</div>
              <input min={0} value={counter} disabled className="text-center" />
              <div onClick={() => setCounter(counter + 1)}>+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
