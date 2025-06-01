'use client';
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import type { CartItem, Guitar } from '@/app/types/product';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Guitar) => void;
  removeFromCart: (productId: number) => void;
  changeQuantity: (productId: number, amount: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Guitar) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const changeQuantity = (productId: number, amount: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item,
      ),
    );
  };

  const clearCart = () => setCart([]);

  const getTotal = () => {
    return cart.reduce(
      (total, item) =>
        total +
        item.quantity * (item.price - (item.price * item.discount) / 100),
      0,
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        changeQuantity,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
