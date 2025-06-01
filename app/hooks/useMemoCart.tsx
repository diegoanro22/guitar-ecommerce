import { useMemo } from 'react';
import { useCart } from '@/app/contexts/CartContext';

export const useCartTotal = () => {
  const { cart } = useCart();

  return useMemo(() => {
    return cart.reduce((total, item) => {
      const itemTotal = item.price - (item.price * item.discount) / 100;
      return total + itemTotal * item.quantity;
    }, 0);
  }, [cart]);
};

export const useCartCount = (): number => {
  const { cart } = useCart();

  return useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);
};
