'use client';

import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/productsCard"; 

const ProductsPage = () => {
  // Products grouped by categories
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

  return (
    <>
      <Head>
        <title>Our Products</title>
        <meta name="description" content="Browse our wide range of healthcare products" />
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Products</h1>

        {/* Categories Section */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="category-section">
              <h2 className="text-3xl font-semibold text-gray-700 mb-6">{category.name}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.products.map((product, productIndex) => (
                  <ProductCard 
                    key={productIndex} 
                    name={product.name} 
                    description={product.description} 
                    image={product.image} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
