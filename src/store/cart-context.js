import React from 'react'

const CartContext = React.createContext({
candies: [],
totalQuantity: 0,
addToCart: (candy) => {},
})

export default CartContext;
