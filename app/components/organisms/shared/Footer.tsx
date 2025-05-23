import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="px-10 pt-8 pb-10 2xl:px-35">
        <div className="bg-foreground mx-auto mb-8 h-[1px] w-full max-w-xl rounded-full opacity-70" />

        <div className="mb-5 flex flex-col items-center gap-3 text-center sm:flex-row sm:flex-wrap sm:justify-center">
          <Link href="#" className="hover:text-primary transition-colors">
            Comunidad
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Términos y condiciones
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Política de privacidad
          </Link>
        </div>

        <div className="mb-4 text-center text-sm opacity-70 sm:text-base">
          © 2025 GuitarMania Inc. Todos los derechos reservados.
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="#"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="hover:text-primary h-6 w-6 opacity-70 transition-colors" />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="hover:text-primary h-6 w-6 opacity-70 transition-colors" />
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:text-primary h-6 w-6 opacity-70 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
