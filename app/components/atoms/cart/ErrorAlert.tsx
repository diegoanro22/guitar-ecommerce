'use client';

import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@atoms/shared/AlertCn';

interface Props {
  message?: string;
  className?: string;
}

const ErrorAlert: React.FC<Props> = ({
  message = 'El total del carrito no puede exceder $999.99. Reduce la cantidad de productos para continuar con la compra.',
  className = '',
}) => {
  return (
    <Alert
      variant="destructive"
      className={`w-full max-w-md self-end ${className}`}
    >
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default ErrorAlert;
