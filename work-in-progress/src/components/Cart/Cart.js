import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  // Tax and Total Calculations
  let total = 0;
  let shippingCost = 0;
  for (const item of cart) {
    total = total + item.price;
    shippingCost = shippingCost + item.shipping;
  }
  let taxCost = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = (total + shippingCost + taxCost).toFixed(2);

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <div className="cart-info">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: {total}</p>
        <p>Total Shipping Charge: {shippingCost}</p>
        <p>Tax: {taxCost}</p>
        <h3>Grand Total: ${grandTotal}</h3>
      </div>
      <div className="btn-group">
        <button className="clear-btn">
          Clear Cart
          <FontAwesomeIcon
            icon={faTrash}
            shake
            style={{ color: "white", marginLeft: "5px" }}
          />
        </button>
        <button className="review-btn">
          Review Order
          <FontAwesomeIcon
            icon={faArrowRight}
            beatFade
            style={{ color: "white", marginLeft: "5px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Cart;
