import React, { useState } from "react";
import Popup from "./Popup";

export default function PopupButton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="popup__button">
    {/* Button */}
      <input className="mt-5" type="button" value="Click to Open Popup" onClick={togglePopup} />
      
      {/* Output */}
      {isOpen && (
        <Popup
          content={
            <>
              <img src="/images/red.png" height={100} alt="" />
              <b>Design your Popup</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button>Test button</button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
