'use client';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@atoms/shared/DrawerCn';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { useFavorites } from '@/app/contexts/FavoriteContext';
import ProductImage from '@atoms/dashboard/ProductImage';

export const FavoritesDrawer = () => {
  const { favoritesRef } = useFavorites();
  const [show, setShow] = useState(false);

  return (
    <Drawer open={show} onOpenChange={setShow}>
      <DrawerTrigger asChild>
        <button>
          <Heart className="h-5 w-5" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Favoritos</DrawerTitle>
        </DrawerHeader>
        <div className="space-y-4 p-4">
          {favoritesRef.current.length === 0 ? (
            <p>No has marcado favoritos aún.</p>
          ) : (
            favoritesRef.current.map((product) => (
              <div key={product.id} className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-md bg-gray-100">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-sm font-medium">{product.name}</div>
              </div>
            ))
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
