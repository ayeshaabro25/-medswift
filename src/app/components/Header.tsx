import Link from "next/link";
import { FC } from "react";

const Header: FC = () => (
  <header className="bg-black text-white p-4">
    <nav className="flex justify-between items-center">
      {/* Logo */}
      <Link href="/" passHref>
        <h1 className="text-3xl font-extrabold cursor-pointer">MediSwift</h1>
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6 flex items-center">
        <Link href="/" passHref>
          <button className="text-lg font-semibold hover:text-gray-400">Home</button>
        </Link>
        <Link href="/about" passHref>
          <button className="text-lg font-semibold hover:text-gray-400">About</button>
        </Link>
        <Link href="/contact" passHref>
          <button className="text-lg font-semibold hover:text-gray-400">Contact</button>
        </Link>

        {/* Product Listing Link */}
        <Link href="/products" passHref>
          <button className="text-lg font-semibold hover:text-gray-400">Products</button>
        </Link>

        {/* Wishlist Link */}
        <Link href="/wishlist" passHref>
          <button className="text-lg font-semibold hover:text-gray-400">Wishlist</button>
        </Link>

        {/* Cart Icon */}
        <Link href="/cart" passHref>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.4-9M7 13l-1 5.5m0 0h10m-10 0a2.5 2.5 0 105 0m5 0a2.5 2.5 0 105 0"
              />
            </svg>
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;