import { Input } from '@atoms/shared/InputCn';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeaderSearchInput({
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
      <Input
        type="search"
        placeholder="Buscar..."
        className={cn(
          'bg-background h-8 w-full rounded-md pl-9 text-sm shadow-none ring-0 focus-visible:ring-1',
          className,
        )}
        {...props}
      />
    </div>
  );
}
