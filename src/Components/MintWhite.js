import React, { useState, useRef, useEffect } from "react";
import ConnectWallet from "./ConnectWallet";
export default function MintWhite() {
  const [mint, setMint] = useState("noButtons");
  const [audioStatus, changeAudioStatus] = useState(false);


  // Play Audio
  const myRef = useRef();

  const startAudio = () => {
    myRef.current.play();
    //reduce speed of audio
    //reduce voice of audio

    myRef.current.playbackRate = 0.8;
    myRef.current.volume = 0.5;
    changeAudioStatus(true);
  };

  //toogle audio on off
  const toggleAudio = () => {
    if (audioStatus) {
      myRef.current.pause();
      changeAudioStatus(false);
    } else {
      myRef.current.play();
      changeAudioStatus(true);
    }
  };

  // Show Buttons
  const showButtons = () => {
    setMint("mintButtons");
  };

  useEffect(() => {
    startAudio();
  },[])

  return (
    <div
      to="/mint"
      className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-white mint__right"
    >
      
      {/* Audio */}
      <audio ref={myRef} loop src="/images/music.mp3" />

      {/* Social Icons */}
      <div className="s__icons mt-1 flex align-items-center">
        <a href="#" className="s_icon">
          <img src="/images/socials/twitter-icon.png" alt="" />
        </a>
        <a href="#" className="s_icon">
          <img src="/images/socials/opensea-icon.png" alt="" />
        </a>
        <a className="s_icon" onClick={toggleAudio}>
          {audioStatus ? (
            <img src="/images/socials/pause.png" alt="pause" />
          ) : (
            <img src="/images/socials/play.png" alt="play" />
          )}
        </a>
      </div>
      <h6 className="mt-2 col-4 text-end">UP ONLY</h6>

      {/* Red Box */}
      <img onClick={showButtons} src="/images/red.png" alt="buttons" />
      <div className="text__small mt-3 text-center">
        <h4 className="m-0" onClick={showButtons}>
          Mint Here
        </h4>
        <h6>
          1 FREE TO MINT <br /> THEN O.01 ETH <br /> MAX 10X WALLET
        </h6>
      </div>

      {/* Input Buttons */}
      <div className={mint}>
        <input min={0} placeholder="0" type="number" className="mint__button" />
        <ConnectWallet />
      </div>

      {/* White Box Small Text */}
      <footer className="d-flex w-100 align-items-center justify-content-between">
        <div className="col-6">
          <h6 className="mx-3">DEATH VISION LAB</h6>
        </div>
        <div className="col-6">
          <h6 className="text-end mx-3">DEATH VISION LAB</h6>
        </div>
      </footer>
    </div>
  );
}
