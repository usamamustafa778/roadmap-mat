import React, { useState } from "react";
import Popup from "./Popup";

export default function PopupButton() {
  const [isOpen, setIsOpen] = useState(false);

  function timerfuncion() {
    const timer = setTimeout(() => setIsOpen(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
    timerfuncion();
  };

  return (
    <div className="popup__button">
    {/* Button */}
      <input className="mt-5" type="button" value="Click to Open Popup" onClick={togglePopup} />
      
      {/* Output */}
      {isOpen && (
        <Popup
          content={
            <div className="d-flex align-items-center flex-column">
              <img src="/images/red.png" height={100} alt="" />
              <br />
              <p>
                Enter some quantity to mint.
              </p>
            </div>
          }
          // handleClose={togglePopup}
        />
      )}
    </div>
  );
}
