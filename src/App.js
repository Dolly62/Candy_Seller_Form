import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/SellerForm/Input";
import CandyLists from "./components/Items/CandyLists";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const initialList = JSON.parse(localStorage.getItem("candiesList")) || [];
  const [candiesList, setCandiesList] = useState(initialList);
  const [cartCandiesShown, setCartCandiesShown] = useState(false);

  const showCartCandiesHandler = () => {
    setCartCandiesShown(true)
  }

  const hideCartCandiesHandler = () => {
    setCartCandiesShown(false)
  }

  useEffect(() => {
    localStorage.setItem("candiesList", JSON.stringify(candiesList));
  }, [candiesList]);

  const addCandiesHandler = (candyname, candydescription, candyprice) => {
    setCandiesList((prevLists) => {
      const newList = {
        id: Math.random().toString(),
        CandyName: candyname,
        CandyDescription: candydescription,
        CandyPrice: candyprice,
      };

      const updatedLists = [...prevLists, newList];
      return updatedLists;
    });
  };
  return (
    <CartProvider>
      {cartCandiesShown &&
      <Cart onShowCart={showCartCandiesHandler} onHideCart={hideCartCandiesHandler} />}
      <Input onAddCandy={addCandiesHandler} />
      <CandyLists candies={candiesList} />
    </CartProvider>
  );
}

export default App;
