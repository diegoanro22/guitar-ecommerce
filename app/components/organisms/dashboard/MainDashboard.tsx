'use client';
import React from 'react';
import GuitarList from '@organisms/dashboard/GuitarList';
import { guitars } from '@/app/data/guitars';
import type { Guitar } from '@/app/types/product';
import { useCart } from '@/app/utils/CartContext';

export default function MainDashboard() {
  const { addToCart } = useCart();
  const handleAddToCart = (guitar: Guitar) => {
    addToCart(guitar); //
  };

  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
      <GuitarList guitars={guitars} onAddToCart={handleAddToCart} />
    </main>
  );
}
