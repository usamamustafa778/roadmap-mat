import React from "react";
import MintBlack from "../Components/MintBlack";
import MintWhite from "../Components/MintWhite";
import PopupButton from "../Components/PopupButton";

export default function Mint() {

  return (
    <div className="mint container-fluid d-flex align-items-center justify-content-center">
      <PopupButton/>
      <div className="row justify-content-center">
        <MintBlack />
        <MintWhite />
      </div>
    </div>
  );
}
