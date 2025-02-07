'use client';

interface ProductProps {
  name: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img className="w-full h-40 object-cover" src={image} alt={name} />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProductCard;
