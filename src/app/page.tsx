'use client';

import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/productsCard";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";

const HomePage = () => {
  const products = [
    { name: "Medicines", description: "High-quality medicine to boost your health.", image: "/images/product-1.jpg" },
    { name: "Vitamins", description: "Essential vitamins for daily well-being.", image: "/images/product-2.jpg" },
    { name: "Wellness Syrup", description: "Reliable healthcare products at your doorstep.", image: "/images/product-3.jpg" },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilteredProducts(
      query.trim() === ''
        ? products
        : products.filter(
            (product) =>
              product.name.toLowerCase().includes(query.toLowerCase()) ||
              product.description.toLowerCase().includes(query.toLowerCase())
          )
    );
  };

  return (
    <>
      <Head>
        <title>Swift Medicine Delivery</title>
        <meta name="description" content="Get your medications in a flash" />
      </Head>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center text-center text-white" style={{ backgroundImage: "url('/images/hero-image.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto text-center relative z-10 py-32 px-6">
            <h1 className="text-5xl font-extrabold">Swift Medicine Delivery</h1>
            <p className="mt-6 text-xl">Get your medications in a flash</p>

            {/* Search Bar */}
            <div className="mt-8">
              <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />
            </div>

            <a href="#products" className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition mt-6 inline-block">
              View Products
            </a>
          </div>
        </section>

        {/* Category Section */}
        <section className="container mx-auto py-12 px-6">
          <Category />
        </section>

        {/* Our Services */}
        <section className="container mx-auto py-12 px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Fast Delivery", desc: "Get your orders delivered in under 30 minutes!" },
              { title: "Wide Range of Products", desc: "Medicines, wellness products, and more at your fingertips." },
              { title: "Reliable Service", desc: "Trust us to deliver high-quality healthcare essentials." }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
                <h3 className="text-lg font-bold text-gray-700">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="container mx-auto py-12 px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Featured Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
