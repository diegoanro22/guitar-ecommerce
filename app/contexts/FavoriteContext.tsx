'use client';
import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import type { Guitar } from '@/app/types/product';

interface FavoritesContextType {
  favoritesRef: React.RefObject<Guitar[]>;
  toggleFavorite: (product: Guitar) => void;
  isFavorite: (productId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const favoritesRef = useRef<Guitar[]>([]);
  const [, setRender] = useState({});

  const toggleFavorite = (product: Guitar) => {
    const index = favoritesRef.current.findIndex(
      (item) => item.id === product.id,
    );

    if (index !== -1) {
      favoritesRef.current.splice(index, 1);
    } else {
      favoritesRef.current.push(product);
    }

    setRender({});
  };

  const isFavorite = (productId: number) => {
    return favoritesRef.current.some((item) => item.id === productId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favoritesRef, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error('useFavorites must be used within a FavoritesProvider');
  return context;
};
