import React, { Fragment, useState } from "react";
import CartButton from "../Cart/CartButton";

const Input = (props) => {
  const [enteredCandyName, setEnteredCandyName] = useState("");
  const [enteredCandyDescription, setEnteredCandyDescription] = useState("");
  const [enteredCandyPrice, setEnteredCandyPrice] = useState("");

  const addCandyHandler = (event) => {
    event.preventDefault();
    props.onAddCandy(
      enteredCandyName,
      enteredCandyDescription,
      enteredCandyPrice
    );
    setEnteredCandyName("");
    setEnteredCandyDescription("");
    setEnteredCandyPrice("");
  };

  const candyNameHandler = (event) => {
    setEnteredCandyName(event.target.value);
  };
  const candyDescriptionHandler = (event) => {
    setEnteredCandyDescription(event.target.value);
  };
  const candyPriceHandler = (event) => {
    setEnteredCandyPrice(event.target.value);
  };

  return (
    <Fragment>
      <h1>Seller Form</h1>
      <form onSubmit={addCandyHandler}>
        <label htmlFor="candyname">Candy Name:</label>
        <input
          type="text"
          id="candyname"
          value={enteredCandyName}
          onChange={candyNameHandler}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={enteredCandyDescription}
          onChange={candyDescriptionHandler}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={enteredCandyPrice}
          onChange={candyPriceHandler}
        />
        <button type="submit">Add Candy</button>
      </form>
      <CartButton onClick={props.onShowCart} />
    </Fragment>
  );
};

export default Input;
