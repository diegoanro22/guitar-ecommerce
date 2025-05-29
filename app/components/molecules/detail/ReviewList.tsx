// src/components/molecules/detail/ReviewList.tsx
import React from 'react';
import type { Review } from '@/app/types/product';
import ReviewItem from '@atoms/detail/ReviewItem';

interface Props {
  reviews: Review[];
}

const ReviewList: React.FC<Props> = ({ reviews }) => (
  <div className="mt-6 space-y-6">
    {reviews.map((review, index) => (
      <ReviewItem key={index} {...review} />
    ))}
  </div>
);

export default ReviewList;
