import React, { createContext, useState, useEffect } from "react";
import Notification from "../components/Notification";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      setNotification("Product is already added to the cart.");
      return;
    }
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const getItemCount = () => {
    return cart.length;
  };

  const closeNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        getItemCount,
      }}
    >
      {children}
      {notification && (
        <Notification message={notification} onClose={closeNotification} />
      )}
    </CartContext.Provider>
  );
};
