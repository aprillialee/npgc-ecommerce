import React from "react";

import CustomButton from "../Custom-Button/Custom-Button.Component";

import "./cart-dropdown.style.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

export default CartDropdown;
