'use client';

import React from 'react';
// import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@atoms/shared/CardCn';

// Tipos
interface Guitar {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
}

interface GuitarCardProps {
  guitar: Guitar;
  onAddToCart: (guitar: Guitar) => void;
}

// Molécula: GuitarCard
const GuitarCard: React.FC<GuitarCardProps> = ({ guitar, onAddToCart }) => {
  return (
    <Card className="mx-auto w-full max-w-sm bg-white transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="p-4">
        <div className="mb-3 aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          {/* <Image
            src={guitar.image}
            alt={guitar.name}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          /> */}
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900">
          {guitar.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-2">
        <div className="mb-2 text-xl font-bold text-gray-900">
          ${guitar.price.toLocaleString()}
        </div>
        <div className="mb-3 text-sm text-gray-600">{guitar.description}</div>
        <div className="mb-2 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-sm ${i < guitar.rating ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              ★
            </span>
          ))}
          <span className="ml-2 text-sm text-gray-500">({guitar.reviews})</span>
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <button
          onClick={() => onAddToCart(guitar)}
          className="w-full rounded-lg bg-orange-500 px-4 py-2.5 font-medium text-white transition-colors duration-200 hover:bg-orange-600"
        >
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
};

// Organismo: GuitarGrid
const GuitarGrid: React.FC = () => {
  const guitars: Guitar[] = [
    {
      id: 1,
      name: 'Fender Stratocaster',
      price: 1100,
      image:
        'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=400&h=400&fit=crop',
      description: 'Classic electric guitar with versatile tone',
      rating: 5,
      reviews: 234,
    },
    {
      id: 2,
      name: 'Gibson Les Paul',
      price: 1400,
      image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      description: 'Legendary rock guitar with powerful humbuckers',
      rating: 5,
      reviews: 189,
    },
    {
      id: 3,
      name: 'PRS Custom 24',
      price: 3200,
      image:
        'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400&h=400&fit=crop',
      description: 'Premium guitar with stunning flame maple top',
      rating: 5,
      reviews: 156,
    },
    {
      id: 4,
      name: 'Ibanez RG550',
      price: 900,
      image:
        'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=400&fit=crop',
      description: 'High-performance guitar for metal and rock',
      rating: 4,
      reviews: 98,
    },
    {
      id: 5,
      name: 'Schecter C-1',
      price: 800,
      image:
        'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=400&h=400&fit=crop',
      description: 'Modern metal guitar with aggressive tone',
      rating: 4,
      reviews: 73,
    },
    {
      id: 6,
      name: 'Epiphone Casino',
      price: 600,
      image:
        'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=400&fit=crop',
      description: 'Hollow-body electric with vintage character',
      rating: 4,
      reviews: 145,
    },
    {
      id: 7,
      name: 'Yamaha Pacifica',
      price: 500,
      image:
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
      description: 'Versatile guitar perfect for beginners',
      rating: 4,
      reviews: 267,
    },
    {
      id: 8,
      name: 'Jackson Dinky',
      price: 700,
      image:
        'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?w=400&h=400&fit=crop',
      description: 'Shred machine with lightning-fast neck',
      rating: 4,
      reviews: 82,
    },
    {
      id: 9,
      name: 'Charvel San Dimas',
      price: 750,
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      description: 'Classic superstrat with modern features',
      rating: 4,
      reviews: 91,
    },
    {
      id: 10,
      name: 'ESP Horizon',
      price: 1000,
      image:
        'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=400&h=400&fit=crop',
      description: 'Professional-grade guitar for serious players',
      rating: 5,
      reviews: 124,
    },
    {
      id: 11,
      name: 'Gretsch G6120',
      price: 1800,
      image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      description: 'Iconic hollow-body with that Gretsch sound',
      rating: 5,
      reviews: 76,
    },
    {
      id: 12,
      name: 'Rickenbacker 330',
      price: 2200,
      image:
        'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=400&h=400&fit=crop',
      description: 'Distinctive jangle tone loved by legends',
      rating: 5,
      reviews: 54,
    },
  ];

  const handleAddToCart = (guitar: Guitar): void => {
    console.log(`Added ${guitar.name} to cart`);
    // Aquí iría la lógica para agregar al carrito
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Guitars</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover our premium collection of electric and acoustic guitars
            from the worlds most renowned brands
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {guitars.map((guitar) => (
            <GuitarCard
              key={guitar.id}
              guitar={guitar}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-lg bg-gray-900 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800">
            Load More Guitars
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuitarGrid;
