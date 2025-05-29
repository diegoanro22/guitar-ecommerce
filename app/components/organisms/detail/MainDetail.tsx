'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import GuitarDetail from '@organisms/detail/GuitarDetail';
import { guitars } from '@/app/data/guitars';
import type { Guitar } from '@/app/types/product';
import { useCart } from '@/app/utils/CartContext';

export default function MainDetail() {
  const { id } = useParams();
  const guitarId = parseInt(id as string, 10);
  const guitar = guitars.find((g) => g.id === guitarId);
  const { addToCart } = useCart();

  const handleAddToCart = (guitar: Guitar) => {
    addToCart(guitar); //
  };

  if (!guitar) {
    return <p className="text-red-600">Guitarra no encontrada</p>;
  }

  return (
    <main className="flex flex-col items-center justify-center px-4 py-8 sm:px-8 md:px-16 lg:px-32">
      <GuitarDetail guitar={guitar} onAddToCart={handleAddToCart} />
    </main>
  );
}
