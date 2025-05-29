// src/app/cart/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/app/utils/CartContext';
import { Button } from '@atoms/shared/ButtonCn';

export default function CartPage() {
  const { cart, changeQuantity, clearCart, getTotal } = useCart();

  return (
    <div className="px-6 py-10 md:px-16 lg:px-32">
      <h1 className="mb-8 text-2xl font-bold text-gray-900">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => changeQuantity(item.id, -1)}
                  className="rounded-full bg-gray-100 px-2 text-lg"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => changeQuantity(item.id, 1)}
                  className="rounded-full bg-gray-100 px-2 text-lg"
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <div className="text-sm text-gray-600">Subtotal</div>
                <div className="font-medium text-gray-900">
                  $
                  {(
                    (item.price - (item.price * item.discount) / 100) *
                    item.quantity
                  ).toFixed(2)}
                </div>
              </div>
            </div>
          ))}

          <div className="mt-8 flex items-center justify-between">
            <div className="text-xl font-bold text-gray-900">
              Total: ${getTotal().toFixed(2)}
            </div>
            <div className="flex gap-4">
              <Button variant="outline" onClick={clearCart}>
                Empty cart
              </Button>
              <Button className="bg-orange-500 text-white hover:bg-orange-600">
                Comprar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
