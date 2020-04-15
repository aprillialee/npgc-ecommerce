import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  NameContainer,
} from "./Cart-Item.Style";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x £{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
