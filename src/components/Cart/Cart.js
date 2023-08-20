import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartLists from './CartLists';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const cartItems = (
        <ul>
        {cartCtx.candies.map((candy) => (
          <CartLists key={candy.id} candyname={candy.CandyName} description={candy.CandyDescription} quantity={candy.quantity} price={candy.CandyPrice} />
        ))}
      </ul>
    )
  return (
<div >
    {cartItems}
    <button onClick={props.onHideCart}>Close</button>
</div>
  )
}

export default Cart;
