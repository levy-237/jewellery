import React from "react";
import { Link } from "react-router-dom";
import { IoBagRemoveSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import "./modal.css";
export default function Modal({
  open,
  display,
  closemodal,
  recommended,
  removeFromCart,
}) {
  if (!open) return null;
  console.log(display);
  const items = display.map((it) => {
    return (
      <div className="modal-container">
        <div className="m-item1">
          <img src={it.url} />
        </div>
        <div className="m-item2">
          <h2>{it.name}</h2>
        </div>
        <div className="m-item3">
          <h4>{it.price} $</h4>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="modal-background">
        {items}

        <Link to="/shop/cart" className="modal-bag">
          View in Bag
        </Link>

        <Link to="/shop" className="modal-cont">
          {" "}
          Continue Shopping
        </Link>

        <div onClick={() => closemodal(false)} className="modal-x">
          x
        </div>
      </div>
    </>
  );
}
