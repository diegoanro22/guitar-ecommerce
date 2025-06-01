'use client';
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@atoms/shared/CardCn';
import ProductImage from '@atoms/dashboard/ProductImage';
import StarRating from '@atoms/shared/StarRating';
import PriceDisplay from '@atoms/dashboard/PriceDisplay';
import { Button } from '@atoms/shared/ButtonCn';
import type { Guitar } from '@/app/types/product';
import { useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/app/contexts/FavoriteContext';

interface GuitarCardProps {
  guitar: Guitar;
  onAddToCart: (guitar: Guitar) => void;
}

const GuitarCard: React.FC<GuitarCardProps> = ({ guitar, onAddToCart }) => {
  const router = useRouter();
  const { toggleFavorite, isFavorite } = useFavorites();
  const liked = isFavorite(guitar.id);

  return (
    <Card
      className="mx-auto w-full max-w-sm bg-white transition-shadow duration-300 hover:shadow-lg"
      onClick={() => router.push(`/guitar/${guitar.id}`)}
    >
      <CardHeader className="relative p-4">
        <ProductImage src={guitar.image} alt={guitar.name} />
        <Button
          size="icon"
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(guitar);
          }}
          className="absolute top-4 right-4"
        >
          <Heart
            className={liked ? 'fill-red-500 text-red-500' : 'text-muted'}
          />
        </Button>
        <CardTitle className="text-lg font-semibold text-gray-900">
          {guitar.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-2">
        <PriceDisplay price={guitar.price} discount={guitar.discount} />
        <div className="mb-3 text-sm text-gray-600">{guitar.description}</div>
        <StarRating reviews={guitar.reviews ?? []} />
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(guitar);
          }}
          className="bg-primary w-full text-white hover:bg-orange-600"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GuitarCard;
