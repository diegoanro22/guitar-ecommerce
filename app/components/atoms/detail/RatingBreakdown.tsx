import React from 'react';
import type { Review } from '@/app/types/product';
import { calculateRatingDistribution } from '@/app/utils/guitar-utils';

interface Props {
  reviews: Review[];
}

const RatingBreakdown: React.FC<Props> = ({ reviews }) => {
  const distribution = calculateRatingDistribution(reviews);

  return (
    <div className="space-y-2">
      {distribution.map(({ star, percentage }) => (
        <div key={star} className="flex items-center gap-2">
          <span className="w-4 text-sm">{star}</span>
          <div className="h-2 flex-1 rounded bg-gray-200">
            <div
              className="h-full rounded bg-yellow-400"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="w-10 text-right text-sm text-gray-500">
            {Math.round(percentage)}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default RatingBreakdown;
