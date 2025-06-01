'use client';

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
import { useRouter } from 'next/navigation';

interface Props {
  disabled: boolean;
  onConfirm?: () => void;
}

const SuccessDialog: React.FC<Props> = ({ disabled, onConfirm }) => {
  const router = useRouter();

  const handleConfirm = () => {
    onConfirm?.();
    router.push('/');
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={disabled}
          className="bg-primary text-white hover:bg-orange-600"
        >
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
          <AlertDialogAction onClick={handleConfirm}>Aceptar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SuccessDialog;
