import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartCandy, setCartCandies] = useState([]);

  const addToCartHandler = (candy, quantity) => {
    const existingCandyIndex = cartCandy.findIndex(
      (cartCandies) => cartCandies.id === candy.id
    );

    if (existingCandyIndex !== -1) {
      const updatedCandies = [...cartCandy];
      updatedCandies[existingCandyIndex].quantity += quantity;
      return setCartCandies(updatedCandies);
    } else {
      setCartCandies((prevCandies) => [
        ...prevCandies,
        { ...candy, quantity },
      ]);
    }
  };

  const cartContext = {
    candies: cartCandy,
    totalQuantity: cartCandy.reduce(
      (total, candy) => total + candy.quantity,
      0
    ),
    addToCart: addToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
