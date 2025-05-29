import React from 'react';
import type { Review } from '@/app/types/product';

const ReviewItem: React.FC<Review> = ({ author, date, rating, comment }) => (
  <div>
    <div className="mb-1 font-semibold">{author}</div>
    <div className="mb-1 text-sm text-gray-400">{date}</div>
    <div className="mb-1 text-yellow-400">
      {'★'.repeat(rating)}
      <span className="text-gray-300">{'★'.repeat(5 - rating)}</span>
    </div>
    <p className="text-gray-700">{comment}</p>
  </div>
);

export default ReviewItem;
