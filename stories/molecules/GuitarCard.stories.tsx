import type { Meta, StoryObj } from '@storybook/react';
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
import { Heart } from 'lucide-react';

const mockGuitar = {
  id: 1,
  name: 'Fender Stratocaster',
  price: 999,
  image:
    'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=400&h=400&fit=crop',
  description: 'Guitarra eléctrica con cuerpo clásico y gran versatilidad.',
  discount: 15,
  reviews: [
    {
      rating: 5,
      comment: '¡Sonido increíble!',
      author: 'John Doe',
      date: '2025-06-01',
    },
    {
      rating: 4,
      comment: 'Muy cómoda de tocar.',
      author: 'Jane Smith',
      date: '2025-06-02',
    },
  ],
};

const meta: Meta = {
  title: 'Molecules/GuitarCardSimple',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Card className="mx-auto w-full max-w-sm bg-white transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="relative p-4">
        <ProductImage src={mockGuitar.image} alt={mockGuitar.name} />
        <Button size="icon" variant="ghost" className="absolute top-4 right-4">
          <Heart className="text-muted" />
        </Button>
        <CardTitle className="text-lg font-semibold text-gray-900">
          {mockGuitar.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-2">
        <PriceDisplay price={mockGuitar.price} discount={mockGuitar.discount} />
        <div className="mb-3 text-sm text-gray-600">
          {mockGuitar.description}
        </div>
        <StarRating reviews={mockGuitar.reviews} />
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <Button className="bg-primary w-full text-white hover:bg-orange-600">
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  ),
};
