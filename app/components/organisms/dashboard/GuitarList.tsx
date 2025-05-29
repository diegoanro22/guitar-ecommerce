// src/components/organisms/dashboard/GuitarList.tsx
import React from 'react';
import GuitarCard from '@molecules/dashboard/GuitarCard';
import type { Guitar } from '@/app/types/product';

interface GuitarListProps {
  guitars: Guitar[];
  onAddToCart: (guitar: Guitar) => void;
}

const GuitarList: React.FC<GuitarListProps> = ({ guitars, onAddToCart }) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
    {guitars.map((guitar) => (
      <GuitarCard key={guitar.id} guitar={guitar} onAddToCart={onAddToCart} />
    ))}
  </div>
);

export default GuitarList;
