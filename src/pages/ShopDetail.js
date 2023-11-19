import React from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";
import { getJew } from "../mocks";
import { Context } from "../Context";
import Cart from "./Cart";
import Modal from "../components/Modal";
import ScrollToTop from "react-scroll-to-top";

export function loader() {
  return getJew();
}
export default function ShopDetail() {
  const { addToCart, cartItems, removeFromCart } = React.useContext(Context);
  const [openModal, setOpenModal] = React.useState(false);
  const { id } = useParams();
  const items = useLoaderData();
  const scrollToTop = () => window.scrollTo(0, 0);
  const display = items.find((it) => it.id === id);
  const recommend = items
    .filter((prod) => prod.type === display.type)
    .filter((prod) => prod.id !== display.id)
    .slice(0, 4);
  const rdisplay = recommend.map((it) => (
    <div className="recitem">
      <img src={it.url} />
      <h3>{it.name}</h3>
      <h4>{it.price}$</h4>
      <a href={`/shop/${it.id}`} onClick={scrollToTop}>View </a>
    </div>
  ));

  function addtobag() {
    addToCart(display);
    setOpenModal(true);
  }

  return (
    <>
      <div className="detail-container">
        <div className="detail-box1">
          <img src={display.url} />
        </div>
        <div className="detail-box2">
          <h2>{display.name}</h2>
          <p>{display.type}</p>
          <h4>{display.price}$</h4>
          <button onClick={() => addtobag()}>Add to bag</button>
          <br></br>
          <p>
            <span className="detail-span">
              <b>description:</b>
            </span>
            <br></br>
            <br></br>
            {display.info.description}
          </p>
          <Modal
            open={openModal}
            display={cartItems}
            closemodal={setOpenModal}
            recommended={recommend}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
      <div className="recommended">{rdisplay}</div>
      <ScrollToTop smooth color="ffff" />
    </>
  );
}
