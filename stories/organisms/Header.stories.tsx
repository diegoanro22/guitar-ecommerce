import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FavoritesProvider } from '@/app/contexts/FavoriteContext';
import { ShoppingCart, Guitar } from 'lucide-react';
import { Button } from '@atoms/shared/ButtonCn';
import { FavoritesDrawer } from '@molecules/dashboard/FavoriteDrawer';

const MockedHeader = () => {
  const totalCartItems = 2;

  return (
    <header className="bg-background sticky top-0 z-50 flex h-12 items-center justify-between px-3 sm:h-14 sm:px-6 md:h-16 md:px-10 lg:h-20 lg:px-16">
      <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
        <Guitar className="text-primary h-6 w-6" />
        GuitarMania
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex items-center gap-2">
          <FavoritesDrawer />
          <div className="relative">
            <Button size="icon" variant="ghost">
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
};

const meta: Meta<typeof MockedHeader> = {
  title: 'Organisms/Header (Mocked)',
  component: MockedHeader,
  decorators: [
    (Story) => (
      <FavoritesProvider>
        <div className="min-h-screen bg-gray-50 p-4">
          <Story />
        </div>
      </FavoritesProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MockedHeader>;

export const Default: Story = {};
