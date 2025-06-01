'use client';

import React from 'react';
import type { CartItem as CartItemType } from '@/app/types/product';
import ProductImage from '@atoms/dashboard/ProductImage';
import { Button } from '@atoms/shared/ButtonCn';
import { Minus, Plus } from 'lucide-react';
import { useCart } from '@/app/contexts/CartContext';

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const { changeQuantity } = useCart();
  const subtotal =
    (item.price - (item.price * item.discount) / 100) * item.quantity;
  if (item.quantity === 0) return null;

  return (
    <div className="flex items-center justify-between gap-4 border-b py-4">
      <div className="flex items-center gap-4">
        <ProductImage
          src={item.image}
          alt={item.name}
          className="h-24 w-full rounded-md object-cover"
        />
        <div>
          <h4 className="text-sm font-semibold text-gray-900">{item.name}</h4>
          <p className="text-sm text-gray-500">
            ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => changeQuantity(item.id, -1)}
          >
            <Minus className="h-4 w-4" />
          </Button>

          <span className="w-6 text-center text-sm font-medium">
            {item.quantity}
          </span>

          <Button
            size="icon"
            variant="ghost"
            onClick={() => changeQuantity(item.id, 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-muted-foreground mt-1 text-xs">
          Subtotal: <strong>${subtotal.toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
