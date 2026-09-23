import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart((current) =>
      current.map((item) => item.id === id ? { ...item, quantity } : item)
    );
  };

  const removeFromCart = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, total, count, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);