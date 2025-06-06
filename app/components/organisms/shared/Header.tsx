'use client';
import { Button } from '@atoms/shared/ButtonCn';
import { Guitar, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCartCount } from '@/app/hooks/useMemoCart';
import { FavoritesDrawer } from '@molecules/dashboard/FavoriteDrawer';

export default function Header() {
  const router = useRouter();
  const totalCartItems = useCartCount();

  return (
    <header className="bg-background sticky top-0 z-50 flex h-12 items-center justify-between px-3 sm:h-14 sm:px-6 md:h-16 md:px-10 lg:h-20 lg:px-16">
      <div
        className="flex items-center gap-2 text-xl font-bold tracking-tight"
        onClick={() => router.push('/')}
      >
        <Guitar className="text-primary h-6 w-6" />
        GuitarMania
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex items-center gap-2">
          <FavoritesDrawer />

          <div className="relative">
            <Button
              size="icon"
              variant="ghost"
              aria-label="Ver carrito"
              title="Ver carrito"
              onClick={() => router.push('/cart')}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            {totalCartItems > 0 && (
              <span className="bg-secondary absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white">
                {totalCartItems}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
