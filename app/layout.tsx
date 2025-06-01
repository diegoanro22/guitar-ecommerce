import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import { CartProvider } from '@/app/contexts/CartContext';
import { FavoritesProvider } from '@/app/contexts/FavoriteContext';
import { HistoryProvider } from '@/app/contexts/HistoryContext';

import './globals.css';

const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-be-vietnam-pro',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Guitarmania',
  description: 'Want a guitar? We have it all!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${beVietnamPro.variable} antialiased`}>
        <CartProvider>
          <FavoritesProvider>
            <HistoryProvider>{children}</HistoryProvider>
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
