import React from 'react';

function addToCart(itemID) {
  let items = CartContext.cartItems
  items.push(itemID)
  CartContext.cartItems = items
}

function removeFromCart(itemID) {
  let items = CartContext.cartItems
  items = items.filter(item => item.id !== itemID)
  CartContext.cartItems = items
}

export const CartContext = React.createContext({
  cartItems: [],
  addToCart: (itemID) => addToCart(itemID),
  removeFromCart: (itemID) => removeFromCart(itemID)
})
