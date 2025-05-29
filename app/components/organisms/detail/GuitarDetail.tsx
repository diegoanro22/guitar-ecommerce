'use client';

import React from 'react';
import type { Guitar } from '@/app/types/product';
import ProductImage from '@atoms/dashboard/ProductImage';
import StarRating from '@atoms/shared/StarRating';
import PriceDisplay from '@atoms/dashboard/PriceDisplay';
import RatingBreakdown from '@atoms/detail/RatingBreakdown';
import ReviewList from '@molecules/detail/ReviewList';
import { Button } from '@atoms/shared/ButtonCn';

interface Props {
  guitar: Guitar;
  onAddToCart: (guitar: Guitar) => void;
}

const GuitarDetail: React.FC<Props> = ({ guitar, onAddToCart }) => {
  return (
    <div className="space-y-10">
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
            className="bg-orange-500 text-white hover:bg-orange-600"
            onClick={() => onAddToCart(guitar)}
          >
            Add to Cart
          </Button>
        </div>
      </div>

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
