'use client';

import React from 'react';
import { useEffect } from 'react';
import type { Guitar } from '@/app/types/product';
import ProductImage from '@atoms/dashboard/ProductImage';
import StarRating from '@atoms/shared/StarRating';
import PriceDisplay from '@atoms/dashboard/PriceDisplay';
import RatingBreakdown from '@atoms/detail/RatingBreakdown';
import ReviewList from '@molecules/detail/ReviewList';
import { Button } from '@atoms/shared/ButtonCn';
import { ArrowBigLeft } from 'lucide-react';
import RecommendedList from '@molecules/detail/RecommendedList';
import { useNavigationHistory } from '@/app/contexts/HistoryContext';

interface Props {
  guitar: Guitar;
  onAddToCart: (guitar: Guitar) => void;
}

const GuitarDetail: React.FC<Props> = ({ guitar, onAddToCart }) => {
  const { addToHistory } = useNavigationHistory();

  useEffect(() => {
    addToHistory(guitar.id);
  }, [guitar.id, addToHistory]);

  return (
    <div className="space-y-10">
      <div className="flex items-center">
        <Button
          variant="outline"
          className="flex items-center gap-2 text-sm hover:bg-gray-100"
          onClick={() => window.history.back()}
        >
          <ArrowBigLeft className="h-5 w-5" />
          <span>Go Back</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
        <div>
          <ProductImage src={guitar.image} alt={guitar.name} />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">{guitar.name}</h2>
          <PriceDisplay price={guitar.price} discount={guitar.discount} />
          <StarRating reviews={guitar.reviews ?? []} />
          <p className="text-gray-700">{guitar.description}</p>
          <Button
            className="bg-primary text-white hover:bg-orange-600"
            onClick={() => onAddToCart(guitar)}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <RecommendedList />

      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold">Rating Breakdown</h3>
          <RatingBreakdown reviews={guitar.reviews ?? []} />
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Customer Reviews</h3>
          <ReviewList reviews={guitar.reviews ?? []} />
        </div>
      </div>
    </div>
  );
};

export default GuitarDetail;
