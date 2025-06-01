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
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Guitar) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        if (exists.quantity >= 9) return prev;
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
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id !== productId) return item;
          const newQuantity = item.quantity + amount;

          // Si baja a 0 o menos, será filtrado abajo
          if (newQuantity <= 0) return null;

          return {
            ...item,
            quantity: Math.min(newQuantity, 9),
          };
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        changeQuantity,
        clearCart,
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
