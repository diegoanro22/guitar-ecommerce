'use client';

import React from 'react';
import { useCart } from '@/app/contexts/CartContext';
import CartItem from '@molecules/cart/CartItem';
import { Button } from '@atoms/shared/ButtonCn';
import { useCartTotal } from '@/app/hooks/useMemoCart';
import SuccessDialog from '@atoms/cart/SuccessDialog';
import ErrorAlert from '@atoms/cart/ErrorAlert';

const CartList: React.FC = () => {
  const { cart, clearCart } = useCart();
  const getTotal = useCartTotal();
  const flagTotal = getTotal > 999.99;
  const hasItems = cart.length > 0;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      <h2 className="mb-6 text-2xl font-bold">Carrito</h2>

      <div className="space-y-6">
        {hasItems ? (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p className="text-gray-600">El carrito está vacio</p>
        )}
      </div>

      {hasItems && (
        <div className="mt-10 flex flex-col items-end gap-4">
          {flagTotal && <ErrorAlert />}
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
            <SuccessDialog onConfirm={clearCart} disabled={flagTotal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default CartList;
