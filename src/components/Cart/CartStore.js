"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartStore = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);

  // use this method to add items to the cart
  const addItemsToCart = (item) => {
    const existingItem = itemsInCart.find((product) => product.id === item.id);

    if (!existingItem) {
      // Add new item to cart
      setItemsInCart([...itemsInCart, { ...item, itemInCart: 1 }]);
    } else {
      // Update quantity of existing item
      const updatedCart = itemsInCart.map((product) =>
        product.id === item.id
          ? { ...product, itemInCart: product.itemInCart + 1 }
          : product
      );
      setItemsInCart(updatedCart);
    }
  };

  // subtract items
  const subItemsToCart = (item) => {
    const existingItem = itemsInCart.find((product) => product.id === item.id);

    if (!existingItem) {
      // Add new item to cart
      // setItemsInCart([...itemsInCart, { ...item, itemInCart: 1 }]);
      return;
    } else {
      // Update quantity of existing item
      const updatedCart = itemsInCart.map((product) =>
        product.id === item.id
          ? { ...product, itemInCart: (product.itemInCart -= 1) }
          : product
      );
      setItemsInCart(updatedCart);
    }
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
      itemsInCart.reduce((pre, cur) => pre + cur.price * cur.itemInCart, 0)
    ).toFixed(2);
    console.log(totalPrize);
    return totalPrize;
  };
  // useEffect to update the localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(itemsInCart));
  }, [itemsInCart, setItemsInCart]);

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
        subItemsToCart,
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
