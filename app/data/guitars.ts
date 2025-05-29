import type { Guitar } from '../types/product';

export const guitars: Guitar[] = [
  {
    id: 1,
    name: 'Fender Stratocaster',
    price: 1100,
    image:
      'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=400&h=400&fit=crop',
    description: 'Classic electric guitar with versatile tone',
    rating: 5,
    discount: 0,
    category: 'Electric',
    dateAdded: '2025-05-01',
    reviews: [
      {
        rating: 5,
        comment: 'A classic. Feels amazing to play.',
        author: 'John Mayer',
        date: '2025-05-02',
      },
    ],
  },
  {
    id: 2,
    name: 'Gibson Les Paul',
    price: 1400,
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    description: 'Legendary rock guitar with powerful humbuckers',
    rating: 5,
    discount: 10,
    category: 'Electric',
    dateAdded: '2025-05-03',
    reviews: [
      {
        rating: 4,
        comment: 'Heavy but sounds incredible.',
        author: 'Jimmy Page',
        date: '2025-05-04',
      },
    ],
  },
  {
    id: 3,
    name: 'Yamaha Pacifica',
    price: 500,
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
    description: 'Versatile guitar perfect for beginners',
    rating: 4,
    discount: 0,
    category: 'Electric',
    dateAdded: '2025-05-05',
    reviews: [
      {
        rating: 4,
        comment: 'Muy buena por el precio.',
        author: 'Alejandro Soto',
        date: '2025-05-06',
      },
    ],
  },
];
