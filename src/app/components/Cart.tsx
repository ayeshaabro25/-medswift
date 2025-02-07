"use client";

import React, { useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([
    { name: "Product 1", price: 100, quantity: 2 },
  ]);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Function to remove an item from the cart
  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Cart</h2>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <p>{item.name}</p>
            <p>{item.quantity} x ${item.price}</p>
            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <p className="font-bold">Total: ${totalPrice}</p>
    </div>
  );
}
