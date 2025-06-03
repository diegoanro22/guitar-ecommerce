import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@atoms/shared/AlertDialogCn';
import { Button } from '@atoms/shared/ButtonCn';

const meta: Meta = {
  title: 'Atoms/AlertDialog',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-primary text-white hover:bg-orange-600">
          Comprar
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¡Compra exitosa!</AlertDialogTitle>
          <AlertDialogDescription>
            Gracias por tu compra. Serás redirigido al panel principal.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => alert('Confirmado')}>
            Aceptar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
