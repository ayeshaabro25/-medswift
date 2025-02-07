'use client';

import Image from 'next/image';

interface ProductProps {
  product: {
    name: string;
    description: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
      <Image 
        className="w-full h-40 object-cover rounded-md"
        src={product.image} 
        alt={product.name} 
        width={300} 
        height={160} 
        priority
      />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
};

export default ProductCard;
