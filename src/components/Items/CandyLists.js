import React, { Fragment } from "react";
import List from "./List";

const CandyLists = (props) => {
  return (
    <Fragment>
      <h1>Lists</h1>
      <ul>
        {props.candies.map((candy) => (
          <li key={candy.id}>
            <List key={candy.id} id={candy.id}>
              {candy.CandyName} - {candy.CandyDescription} - {candy.CandyPrice}
            </List>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default CandyLists;
