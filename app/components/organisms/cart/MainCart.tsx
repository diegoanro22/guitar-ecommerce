'use client';
import React from 'react';
import CartList from '@organisms/cart/CartList'; // O donde lo hayas ubicado exactamente

export default function MainCart() {
  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
      <CartList />
    </main>
  );
}
