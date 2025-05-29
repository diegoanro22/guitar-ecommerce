import type { Guitar } from '@/app/types/product';

type Props = Pick<Guitar, 'price' | 'discount'>;

const PriceDisplay: React.FC<Props> = ({ price, discount = 0 }) => {
  const hasDiscount = discount > 0;
  const discounted = price - (price * discount) / 100;

  return hasDiscount ? (
    <div className="flex items-center gap-2">
      <span className="text-xl font-bold text-red-600">
        ${discounted.toFixed(2)}
      </span>
      <span className="text-sm text-gray-500 line-through">
        ${price.toFixed(2)}
      </span>
    </div>
  ) : (
    <div className="text-xl font-bold text-gray-900">${price.toFixed(2)}</div>
  );
};

export default PriceDisplay;
