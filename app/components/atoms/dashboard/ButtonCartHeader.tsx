import { Button } from '@atoms/shared/ButtonCn';
import { ShoppingCart } from 'lucide-react';

export function CartIconButton() {
  return (
    <Button size="icon" variant="ghost" aria-label="Ver carrito">
      <ShoppingCart className="h-5 w-5" />
    </Button>
  );
}
