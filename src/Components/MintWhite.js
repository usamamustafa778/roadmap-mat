import React, { useState } from "react";
export default function MintWhite() {
  const [mint, setMint] = useState("noButtons");
  const showButtons = () => {
    setMint("mintButtons");
  };

  return (
    <div
      to="/mint"
      className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-white mint__right"
    >
      <div className="s__icons mt-1 flex align-items-center">
        <a href="#" className="s_icon">
          <img src="/images/socials/twitter-icon.png" className="s_icon" alt="" />
        </a>
        <a href="#" className="s_icon">
          <img src="/images/socials/opensea-icon.png" className="s_icon" alt="" />
        </a>
      </div>
      <h6 className="mt-2 col-4 text-end">UP ONLY</h6>

      <img onClick={showButtons} src="/images/red.png" alt="" />
      <div className="text__small mt-3 text-center">
        <h4 className="m-0" onClick={showButtons}>
          Mint Here
        </h4>
        <h6>
          1 FREE TO MINT <br /> THEN O.01 ETH <br /> MAX 10X WALLET
        </h6>
      </div>
      <div className={mint}>
        <input min={0} placeholder="0" type="number" className="mint__button" />
        <div className="mint__button">Mint</div>
      </div>
      <footer className="d-flex px-3 w-100 align-items-center justify-content-between">
        <div className="col-6">
          <h6>DEATH VISION LAB</h6>
        </div>
        <div className="col-6">
          <h6 className="text-end">DEATH VISION LAB</h6>
        </div>
      </footer>
    </div>
  );
}
