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
  const [material, setMaterial] = useState("");
  const [price, setPrice] = useState("");
  const jewelry = useLoaderData();
  const filter = searchParams.get("type");
  let filteredProd = filter
    ? jewelry.filter((j) => j.type === filter)
    : jewelry;

  ///sorting by price
  filteredProd =
    price === ""
      ? filteredProd.sort((a, b) => a.name.localeCompare(b.name))
      : price === "descend"
      ? filteredProd.sort((a, b) => Number(a.price) - Number(b.price))
      : price === "ascend"
      ? filteredProd.sort((a, b) => Number(b.price) - Number(a.price))
      : filteredProd;

  ////checking if material is provided and filtering it based on it
  if (material) {
    filteredProd = filteredProd.filter((prod) => prod.material === material);
  }
 
  const displayJew = filteredProd.map((jew) => (
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

  const resetSort = () => {
    setPrice("");
    setMaterial("");
  };
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
      <div className="filter">
        <section>
          <label htmlFor="materials">Select a material:</label>
          <select
            id="materials"
            onChange={(e) => setMaterial(e.target.value)}
            className="materialInput"
            value={material}
          >
            <option value="" disabled selected>
              Any
            </option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="stone">Stone</option>
          </select>
        </section>
        <section>
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            onChange={(e) => setPrice(e.target.value)}
            className="priceInput"
            value={price}
          >
            <option value="" disabled selected>
              Any
            </option>
            <option value="descend">Lowest price</option>
            <option value="ascend">Highest price</option>
          </select>
        </section>
        <button onClick={resetSort}>Reset</button>
      </div>
      <div className="container">{displayJew}</div>
      <ScrollToTop smooth color="ffff" />
    </>
  );
}
