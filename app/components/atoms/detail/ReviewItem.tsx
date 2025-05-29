// src/components/atoms/detail/ReviewItem.tsx
import React from 'react';
import type { Review } from '@/app/types/product';
import { ThumbsUp } from 'lucide-react';

const ReviewItem: React.FC<Review> = ({ author, date, rating, comment }) => (
  <div>
    <div className="mb-1 font-semibold">{author}</div>
    <div className="mb-1 text-sm text-gray-400">{date}</div>
    <div className="mb-1 text-yellow-400">
      {'★'.repeat(rating)}
      <span className="text-gray-300">{'★'.repeat(5 - rating)}</span>
    </div>
    <p className="text-gray-700">{comment}</p>
    <div className="mt-2 flex items-center text-sm text-gray-500">
      <ThumbsUp className="mr-1 h-4 w-4" /> 1
    </div>
  </div>
);

export default ReviewItem;
