import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { 
      id: 1, 
      name: "iPhone 16 Pro", 
      tagline: "Pro. Beyond.", 
      image: "https://www.apple.com/v/iphone/home/bx/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png" 
    },
    { 
      id: 2, 
      name: "iPhone 16", 
      tagline: "Wonderful.", 
      image: "https://www.apple.com/v/iphone/home/bx/images/overview/select/iphone_16__c5bvots96jee_xlarge.png" 
    },
    { 
      id: 3, 
      name: "iPhone 15", 
      tagline: "Love the power. Love the price.", 
      image: "https://www.apple.com/v/iphone/home/bx/images/overview/select/iphone_15__buwagff0mwwi_xlarge.png" 
    },
    
  ];
  
const ProductGrid = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

export default ProductGrid;
