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

interface GuitarCardProps {
  guitar: Guitar;
  onAddToCart: (guitar: Guitar) => void;
}

const GuitarCard: React.FC<GuitarCardProps> = ({ guitar, onAddToCart }) => {
  const router = useRouter();
  return (
    <Card
      className="mx-auto w-full max-w-sm bg-white transition-shadow duration-300 hover:shadow-lg"
      onClick={() => router.push(`/guitar/${guitar.id}`)}
    >
      <CardHeader className="p-4">
        <ProductImage src={guitar.image} alt={guitar.name} />
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
          onClick={() => onAddToCart(guitar)}
          className="w-full bg-orange-500 text-white hover:bg-orange-600"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GuitarCard;
