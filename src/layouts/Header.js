import React from "react";
import {
  IoGlobeOutline,
  IoBagHandle,
  IoPinSharp,
  IoPersonOutline,
  IoHeartSharp,
  IoBagOutline,
  IoBag,
} from "react-icons/io5";
import { Context } from "../Context";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
export default function Header() {
  const { cartItems } = React.useContext(Context);
  return (
    <header className="header">
      <div className="header-top">
        <IconContext.Provider value={{ size: 20, color: "black" }}>
          <Link to="/shop/locations">
            <div className="header-top1">
              <IoGlobeOutline />
              <p>austria | EN</p>
              <IoPinSharp />
              <p>Shops</p>
            </div>
          </Link>
          <div className="header-top2">
            <IconContext.Provider value={{ size: 22, color: "black" }}>
              <Link to="cart">
                {cartItems.length > 0 ? <IoBag /> : <IoBagOutline />}
              </Link>
            </IconContext.Provider>
          </div>
        </IconContext.Provider>
      </div>
      <Link>
        <h1 className="header-headline">JEWELUXE</h1>
      </Link>
    </header>
  );
}
