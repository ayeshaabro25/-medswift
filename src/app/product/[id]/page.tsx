"use client"; // 👈 Add this at the top

import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams(); // Get the dynamic `id` from the route

  // Mock product data (replace with API or CMS fetch later)
  const product = {
    id,
    name: "Sample Product",
    description: "This is a detailed description of the product.",
    price: 150,
    sizes: ["S", "M", "L"],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Available Sizes: {product.sizes.join(", ")}</p>
    </div>
  );
}

