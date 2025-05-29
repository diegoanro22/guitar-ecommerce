'use client';
import type { Review } from '@/app/types/product';
import { calculateAverageRating } from '@/app/utils/guitar-utils';

interface Props {
  reviews: Review[];
}

const StarRating: React.FC<Props> = ({ reviews }) => {
  const rating = calculateAverageRating(reviews);
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-500">({reviews.length})</span>
    </div>
  );
};

export default StarRating;
