import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCandies = cartCtx.totalQuantity;
  return (
    <button onClick={props.onClick}>
      <span>Your Cart</span>
      <span>{numberOfCandies}</span>
    </button>
  );
};

export default CartButton;
