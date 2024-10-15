import React from 'react';

const ProductCard = ({ product }) => (
  <div className="bg-gray-100 rounded-3xl p-8 text-center">
    <h3 className="text-3xl font-semibold mb-2">{product.name}</h3>
    <p className="text-xl text-gray-600 mb-4">{product.tagline}</p>
    <div className="flex justify-center space-x-4 mb-6">
      <a href="#" className="text-blue-600 hover:underline">Learn more &gt;</a>
      <a href="#" className="text-blue-600 hover:underline">Buy &gt;</a>
    </div>
    <img src={product.image} alt={product.name} className="mx-auto" />
  </div>
);

export default ProductCard;
