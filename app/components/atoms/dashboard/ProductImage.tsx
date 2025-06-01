import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const ProductImage: React.FC<Props> = ({ src, alt, className = '' }) => (
  <div
    className={`${className} mb-3 aspect-square w-full overflow-hidden rounded-lg bg-gray-100`}
  >
    <Image
      src={src}
      alt={alt}
      width={400}
      height={400}
      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>
);

export default ProductImage;
