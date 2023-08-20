import React from "react";

const CartLists = (props) => {
    const formattedPrice = typeof props.price === 'number' ? props.price.toFixed(2) : '';
  return (
    <li>
      <div>
        <h2>{props.candyname}</h2>
        <span> {props.description}</span>
        <span>Rs.{formattedPrice}</span>
        <span>{props.quantity}</span>
      </div>
    </li>
  );
};

export default CartLists;
