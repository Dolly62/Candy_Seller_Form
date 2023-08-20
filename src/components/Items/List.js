import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const List = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (quantity) => {
    cartCtx.addToCart(props.id, quantity);
  };
  return (
    <ul>
      {props.children}
      <button onClick={() => addToCartHandler(1)}>Buy One</button>
      <button onClick={() => addToCartHandler(2)}>Buy Two</button>
      <button onClick={() => addToCartHandler(3)}>Buy Three</button>
    </ul>
  );
};

export default List;
