import React, { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

const MainContextProvider = (props) => {
    
  const getLocalItems = () => {
    let data = localStorage.getItem("cartItems");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [cartItems, setCartItems] = useState(getLocalItems);
  

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addFlower = (flower) => {
    const flowerExist = cartItems.find((f) => f.id === flower.id);
    if (flowerExist) {
      setCartItems(
        cartItems.map((f) => {
          return f.id === flower.id
            ? { ...flowerExist, quantity: flowerExist.quantity + 1 }
            : f;
        })
      );
    } else {
      setCartItems([...cartItems, { ...flower, quantity: 1 }]);
    }
  };

  const removeFLower = (flower) => {
    const flowerExist = cartItems.find((f) => f.id === flower.id);
    if (flowerExist.quantity === 1) {
      setCartItems(cartItems.filter((f) => f.id !== flower.id));
    } else {
      setCartItems(
        cartItems.map((f) => {
          return f.id === flower.id
            ? { ...flowerExist, quantity: flowerExist.quantity - 1 }
            : f;
        })
      );
    }
  };

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <MainContext.Provider value={{ cartItems, addFlower, removeFLower, clearCart }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
