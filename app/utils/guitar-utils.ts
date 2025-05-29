import type { Review, Guitar } from '@/app/types/product';

export const calculateAverageRating = (reviews: Review[]): number => {
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  return Math.round(total / reviews.length);
};

export const calculateDiscountedPrice = (
  price: number,
  discount: number,
): number => {
  return price - (price * discount) / 100;
};

export const updateNavigationHistory = (productId: number, limit = 10) => {
  const history = JSON.parse(
    localStorage.getItem('guitarNavigation') || '[]',
  ) as number[];
  if (!history.includes(productId)) {
    const updated = [productId, ...history].slice(0, limit);
    localStorage.setItem('guitarNavigation', JSON.stringify(updated));
  }
};

export const getRecommendedGuitars = (
  productList: Guitar[],
  currentId: number,
  limit: number,
): Guitar[] => {
  const history = JSON.parse(
    localStorage.getItem('guitarNavigation') || '[]',
  ) as number[];
  const currentCategory = productList.find((p) => p.id === currentId)?.category;

  const recommendations = productList
    .filter(
      (p) =>
        p.id !== currentId &&
        (history.includes(p.id) || p.category === currentCategory),
    )
    .sort(() => Math.random() - 0.5);

  return recommendations.slice(0, limit);
};

export const calculateRatingDistribution = (reviews: Review[]) => {
  const total = reviews.length;

  return [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter(
      (review) => Math.floor(review.rating) === star,
    ).length;
    const percentage = total > 0 ? (count / total) * 100 : 0;

    return { star, count, percentage };
  });
};
