'use client';
import React from 'react';
import { useRecommendations } from '@/app/hooks/useMemoHistory';
import ProductImage from '@atoms/dashboard/ProductImage';
import type { Guitar } from '@/app/types/product';

const RecommendedList: React.FC = () => {
  const recommendations = useRecommendations();

  if (recommendations.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-semibold">Recomendados para ti</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {recommendations.map((guitar: Guitar) => (
          <div key={guitar.id} className="text-sm">
            <ProductImage src={guitar.image} alt={guitar.name} />
            <p className="mt-2 font-medium">{guitar.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedList;
