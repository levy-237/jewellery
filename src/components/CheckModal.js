import React from "react";
import "./modal.css";
import { Link } from "react-router-dom";
export default function CheckModal({ open, close, cartItems, empty }) {
  if (!open) return null;

  return (
    <div className="container-checkout">
      <div className="container12">
        <h5>Please enter your shipping details.</h5>

        <div className="form">
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" for="firstname">
                First name
              </span>
              <input
                className="field__input"
                type="text"
                id="firstname"
                required
              />
            </label>
            <label className="field">
              <span className="field__label" for="lastname">
                Last name
              </span>
              <input
                className="field__input"
                type="text"
                id="lastname"
                required
              />
            </label>
          </div>
          <label className="field">
            <span className="field__label" for="address">
              Address
            </span>
            <input className="field__input" type="text" id="address" required />
          </label>
          <label className="field">
            <span className="field__label" for="country">
              Country
            </span>
            <select className="field__input" id="country">
              <option value="country">Austria</option>
              <option value="country">Poland</option>
              <option value="country">Germany</option>
              <option value="country">Hungary</option>
              <option value="country">Georgia</option>
            </select>
          </label>
          <div className="fields fields--3">
            <label className="field">
              <span className="field__label" for="zipcode">
                Zip code
              </span>
              <input
                className="field__input"
                type="text"
                id="zipcode"
                required
              />
            </label>
            <label className="field">
              <span className="field__label" for="city">
                City
              </span>
              <input className="field__input" type="text" id="city" required />
            </label>
            <label className="field">
              <span className="field__label" for="state">
                Payment Method
              </span>
              <select className="field__input" id="state">
                <option value="cash">Cash</option>
                <option value="cc">Credit card</option>
              </select>
            </label>
          </div>
        </div>
        <hr></hr>
        <div onClick={() => empty()}>
          <Link className="button" to="..">
            Continue
          </Link>
        </div>
        <div className="modal-x" onClick={() => close(false)}>
          x
        </div>
      </div>
    </div>
  );
}
