import React from "react";
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="mainfoot">
      <hr className="hr-12"></hr>
      <div className="footer">
        <div className="footer1">
          Copyright ⓒ 2023 Jeweluxe. All rights reserved. Jeweluxe and the SWAN
          logo are registered and trademarks of Jeweluxe AG.
        </div>
        <div className="footer2">
          <IconContext.Provider value={{ size: 27, color: "black" }}>
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitter />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
