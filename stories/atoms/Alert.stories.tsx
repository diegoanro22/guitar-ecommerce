import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@atoms/shared/AlertCn';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'destructive'],
    },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: 'default',
    className: 'max-w-md',
    children: (
      <>
        <AlertTitle>Información</AlertTitle>
        <AlertDescription>
          Este es un mensaje informativo con estilo predeterminado.
        </AlertDescription>
      </>
    ),
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    className: 'max-w-md',
    children: (
      <>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Algo salió mal. Intenta nuevamente más tarde o contacta soporte.
        </AlertDescription>
      </>
    ),
  },
};
