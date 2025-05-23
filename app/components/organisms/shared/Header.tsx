import { HeaderSearchInput } from '@atoms/dashboard/InputHeader';
import { CartIconButton } from '@atoms/dashboard/ButtonCartHeader';
import { Guitar } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 flex h-12 items-center justify-between px-3 sm:h-14 sm:px-6 md:h-16 md:px-10 lg:h-20 lg:px-16">
      <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
        <Guitar className="text-primary h-6 w-6" />
        GuitarMania
      </div>
      <div className="flex items-center gap-4">
        <HeaderSearchInput />
        <CartIconButton />
      </div>
    </header>
  );
}
