import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import { IoTrashOutline } from "react-icons/io5";
import { FaApplePay, FaCcVisa } from "react-icons/fa";
import { IconContext } from "react-icons";
import CheckModal from "../components/CheckModal";
export default function Cart() {
  const { cartItems, removeFromCart, emptyCart } = React.useContext(Context);
  const [open, setOpen] = React.useState(false);

  const num = cartItems.map((it) => +it.price);
  console.log(num);
  const subtotal = num.reduce((a, b) => a + b, 0); // with initial value to avoid when the array is empty
  console.log(subtotal);
  const total = subtotal / 10 + subtotal;
  const vat = subtotal / 10;
  //console.log(total);
  const cart = cartItems.map((p) => {
    return (
      <>
        <div className="cart-items">
          <div className="cart-cont">
            <div className="cart-cont1">
              <img src={p.url} />
            </div>
            <div className="cart-cont2">
              <h3>{p.name}</h3>
              <h4>{p.price} $</h4>
              <h7>Article No:{p.id}</h7>
              <IconContext.Provider value={{ size: 20, color: "black" }}>
                <button
                  onClick={() => removeFromCart(p.id)}
                  className="cart-icon"
                >
                  <IoTrashOutline />
                </button>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      {cartItems.length === 0 ? null : (
        <h1 className="cart-h1">Your shopping bag</h1>
      )}

      {cartItems.length === 0 ? (
        <div className="nothing">
          <h1>Your bag is empty..</h1>
          <Link to="..">continue shopping </Link>
        </div>
      ) : (
        <div className="cart-page">
          <div>{cart}</div>
          <div className="cart-checkout">
            <div className="payment-dis">
              <h4>Summary</h4>
              <p>Subtotal: {subtotal}$</p>
              <p>
                enviroment friendly shipping: <b>Free</b>
              </p>
              <hr></hr>
              <h3>Total: {total}$</h3>
              <h5>VAT included 10%: {vat}$</h5>
              <button className="cart-button" onClick={() => setOpen(true)}>
                checkout
              </button>
              <p className="line">
                <span>or</span>
              </p>
              <IconContext.Provider value={{ size: 50, color: "white" }}>
                <button className="pay-button">
                  <Link to="https://www.apple.com/apple-pay/" target="_blank">
                    <FaApplePay />
                  </Link>
                </button>
              </IconContext.Provider>
              <br></br>
              <IconContext.Provider
                value={{
                  color: "#0047AB",
                  style: { width: "150px", height: "100%" },
                }}
              ></IconContext.Provider>
            </div>
          </div>
          <CheckModal
            open={open}
            close={setOpen}
            cartItems={cartItems}
            empty={emptyCart}
          />
        </div>
      )}
    </>
  );
}
