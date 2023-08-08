import React, { useState } from "react";
import {
  NavLink,
  Link,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { Context } from "../Context";
import { IconContext } from "react-icons";
import { IoBagOutline, IoBag } from "react-icons/io5";
import ScrollToTop from "react-scroll-to-top";
import { getJew } from "../mocks";
export function loader() {
  return getJew();
}

export default function JewelryLayout() {
  const { cartItems } = React.useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  const jewelry = useLoaderData();
  const filter = searchParams.get("type");
  const filteredJ = filter ? jewelry.filter((j) => j.type === filter) : jewelry;
  const displayJew = filteredJ.map((jew) => (
    <Link to={jew.id}>
      <div key={jew.id} className="item">
        <div className="img">
          <img src={jew.url} />
        </div>
        <h2 className="item-name">{jew.name}</h2>
        <h5 className="item-price">{jew.price}$</h5>
        <Link to={jew.id}>View product</Link>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="jewelry-layout-link">
        <NavLink to="">All products</NavLink>
        <NavLink to="?type=necklace">Necklaces</NavLink>
        <NavLink to="?type=ring">Rings</NavLink>
        <NavLink to="?type=bracelet">Bracelets</NavLink>
        <IconContext.Provider value={{ size: 22, color: "black" }}>
          <Link to="cart">
            {cartItems.length > 0 ? <IoBag /> : <IoBagOutline />}
          </Link>
        </IconContext.Provider>
      </div>
      <div className="container">{displayJew}</div>
      <ScrollToTop smooth color="ffff" />
    </>
  );
}
