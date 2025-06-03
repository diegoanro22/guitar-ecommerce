import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@atoms/shared/ButtonCn';
import { Heart } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Botón',
    variant: 'default',
    size: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const AddToCart: Story = {
  args: {
    children: <>Añadir al carrito</>,
    variant: 'default',
    size: 'default',
    className: 'bg-primary text-white hover:bg-orange-600 w-full',
  },
};

export const FavoriteIcon: Story = {
  args: {
    size: 'icon',
    variant: 'ghost',
    children: <Heart className="text-muted" />,
    className: 'absolute top-4 right-4',
  },
};

export const FavoriteIconActive: Story = {
  args: {
    size: 'icon',
    variant: 'ghost',
    children: <Heart className="fill-red-500 text-red-500" />,
    className: 'absolute top-4 right-4',
  },
};

export const FullWidthPrimary: Story = {
  args: {
    children: 'Comprar ahora',
    className: 'w-full bg-primary text-white hover:bg-orange-600',
  },
};
