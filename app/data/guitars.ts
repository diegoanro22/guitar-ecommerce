import type { Guitar } from '../types/product';

export const guitars: Guitar[] = [
  {
    id: 1,
    name: 'Fender Stratocaster',
    price: 180,
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
    price: 190,
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
    price: 120,
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
  {
    id: 4,
    name: 'Taylor 214ce',
    price: 150,
    image:
      'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=400&h=400&fit=crop',
    description: 'Acoustic-electric with rich midrange and bright highs',
    rating: 5,
    discount: 15,
    category: 'Acoustic',
    dateAdded: '2025-05-07',
    reviews: [
      {
        rating: 5,
        comment: 'Perfecta para presentaciones acústicas.',
        author: 'Camila Cabello',
        date: '2025-05-08',
      },
    ],
  },
  {
    id: 5,
    name: 'Ibanez RG550',
    price: 160,
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    description: 'Shredder’s dream with fast neck and hot pickups',
    rating: 4,
    discount: 5,
    category: 'Electric',
    dateAdded: '2025-05-09',
    reviews: [
      {
        rating: 4,
        comment: 'El mástil es una locura de rápido.',
        author: 'Steve Vai',
        date: '2025-05-10',
      },
    ],
  },
  {
    id: 6,
    name: 'PRS SE Custom 24',
    price: 170,
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
    description: 'Affordable PRS with premium features',
    rating: 4,
    discount: 0,
    category: 'Electric',
    dateAdded: '2025-05-11',
    reviews: [
      {
        rating: 4,
        comment: 'Excelente calidad por el precio.',
        author: 'Carlos Santana',
        date: '2025-05-12',
      },
    ],
  },
  {
    id: 7,
    name: 'Martin D-28',
    price: 195,
    image:
      'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=400&h=400&fit=crop',
    description: 'Legendary acoustic guitar with booming sound',
    rating: 5,
    discount: 20,
    category: 'Acoustic',
    dateAdded: '2025-05-13',
    reviews: [
      {
        rating: 5,
        comment: 'Una obra maestra en madera.',
        author: 'Eric Clapton',
        date: '2025-05-14',
      },
    ],
  },
  {
    id: 8,
    name: 'Gretsch G2622',
    price: 140,
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    description: 'Semi-hollow with vintage vibe and modern playability',
    rating: 4,
    discount: 10,
    category: 'Semi-Hollow',
    dateAdded: '2025-05-15',
    reviews: [
      {
        rating: 4,
        comment: 'Estilo y sonido clásico.',
        author: 'George Harrison',
        date: '2025-05-16',
      },
    ],
  },
  {
    id: 9,
    name: 'Jackson Dinky JS22',
    price: 90,
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
    description: 'Entry-level metal guitar with fast neck',
    rating: 3,
    discount: 0,
    category: 'Electric',
    dateAdded: '2025-05-17',
    reviews: [
      {
        rating: 3,
        comment: 'Cumple para empezar.',
        author: 'Dave Mustaine',
        date: '2025-05-18',
      },
    ],
  },
  {
    id: 10,
    name: 'Epiphone Casino',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    description: 'Hollow body with Beatles heritage and bright tone',
    rating: 5,
    discount: 8,
    category: 'Hollow Body',
    dateAdded: '2025-05-19',
    reviews: [
      {
        rating: 5,
        comment: 'El sonido limpio es mágico.',
        author: 'Paul McCartney',
        date: '2025-05-20',
      },
    ],
  },
];
