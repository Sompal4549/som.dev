"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartStore = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);

  // use this method to add items to the cart
  const addItemsToCart = (item) => {
    console.log(item);
    const items = itemsInCart;
    setItemsInCart([...items, { ...item }]);
    console.log(itemsInCart);
  };

  // use this method to remove items to the cart
  const removeItem = (id) => {
    const itemId = itemsInCart.find((item) => item.id === id);
    if (!itemId) {
      alert("Item not found");
    } else {
      const items = itemsInCart.filter((item) => item.id !== id);
      setItemsInCart(items);
    }
  };

  const getTotalPrize = () => {
    const totalPrize = Number(
      itemsInCart.reduce((pre, cur) => pre + cur.price, 0)
    ).toFixed(2);
    console.log(totalPrize);
    return totalPrize;
  };
  // useEffect to update the localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  // useEffect to update the itemsInCart state
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart"));
    setItemsInCart(items);
  }, []);
  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        setItemsInCart,
        addItemsToCart,
        removeItem,
        getTotalPrize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartStore;
export const useCartContext = () => {
  return useContext(CartContext);
};
