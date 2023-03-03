import React from "react";
import { createContext, useState } from "react";
import data from "./data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < data.products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((perv) => ({ ...perv, [itemId]: perv[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((perv) => ({ ...perv, [itemId]: perv[itemId] - 1 }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
