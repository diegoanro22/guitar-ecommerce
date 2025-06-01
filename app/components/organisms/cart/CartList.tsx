'use client';

import React from 'react';
import { useCart } from '@/app/contexts/CartContext';
import CartItem from '@molecules/cart/CartItem';
import { Button } from '@atoms/shared/ButtonCn';
import { useCartTotal } from '@/app/hooks/useMemoCart';

const CartList: React.FC = () => {
  const { cart, clearCart } = useCart();
  const getTotal = useCartTotal();

  const hasItems = cart.length > 0;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      <h2 className="mb-6 text-2xl font-bold">Your Cart</h2>

      <div className="space-y-6">
        {hasItems ? (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>

      {hasItems && (
        <div className="mt-10 flex flex-col items-end gap-4">
          <div className="text-right">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-xl">${getTotal.toFixed(2)}</p>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={clearCart}
              className="bg-muted text-black"
            >
              Empty cart
            </Button>
            <Button className="bg-orange-500 text-white hover:bg-orange-600">
              Comprar
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartList;
