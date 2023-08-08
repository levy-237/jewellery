import React from "react";
import {
  IoGlobeOutline,
  IoBagHandle,
  IoPinSharp,
  IoPersonOutline,
  IoHeartSharp,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";

export default function Home() {
  return (
    <div className="welcome">
      <video src={video} loop autoPlay muted></video>
      <div className="welcome-top">
        <IconContext.Provider value={{ size: 20, color: "black" }}>
          <Link to="/shop/locations">
            <div className="welcome-top1">
              <IoGlobeOutline />
              <p>austria | EN</p>
              <IoPinSharp />
              <p>Shops</p>
            </div>
          </Link>
          <div className="welcome-top2">
            <IconContext.Provider value={{ size: 25, color: "black" }}>
              <Link to="shop/cart">
                <IoBagHandle />
              </Link>
            </IconContext.Provider>
          </div>
        </IconContext.Provider>
      </div>
      <Link to="shop">
        <h1 className="welcome-headline">JEWELUXE</h1>
      </Link>
      <div className="welcome-bottom">
        <Link to="shop">All products</Link>
        <Link to="shop?type=necklace">Necklaces</Link>
        <Link to="shop?type=ring">Rings</Link>
        <Link to="shop?type=bracelet">Bracelets</Link>
      </div>
      <div className="welcome-welcome">
        <h1>DISCOVER JEWELUXE COLLECTION</h1>
        <p>
          Step into a world of exquisite elegance and timeless beauty with
          Jeweluxe, your premier destination for jewelry.
        </p>
        <Link to="/shop">Shop now</Link>
      </div>
    </div>
  );
}
