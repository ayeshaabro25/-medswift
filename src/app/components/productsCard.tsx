interface ProductProps {
  name: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, description, image }) => {
  return (
    <div className="product-card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-transform transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-lg font-bold text-gray-700 mt-4">{name}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default ProductCard;
