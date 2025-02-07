'use client';

import React, { useState } from "react";
import ProductCard from "./productsCard";

const categories = [
  {
    name: "Medication",
    products: [
      { name: "Tablets", description: "High-quality medicine to boost your health.", image: "/images/product-1.jpg" }
    ]
  },
  {
    name: "Vitamins",
    products: [
      { name: "Vitamins", description: "Essential vitamins for daily well-being.", image: "/images/product-2.jpg" }
    ]
  },
  {
    name: "Wellness",
    products: [
      { name: "Wellness Syrup", description: "Reliable healthcare products at your doorstep.", image: "/images/product-3.jpg" }
    ]
  }
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Medication");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const category = categories.find((cat) => cat.name === selectedCategory);

  return (
    <div className="category-container">
      {/* Category Navigation */}
      <div className="category-nav flex space-x-6 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`text-lg font-semibold ${selectedCategory === cat.name ? "text-blue-600" : "text-gray-800"}`}
            onClick={() => handleCategoryChange(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Selected Category Products */}
      <div className="category-products">
        <h2 className="text-2xl font-semibold mb-6">{category?.name}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category?.products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;