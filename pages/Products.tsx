
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Categories = ['All', 'Apparel', 'Attire', 'Phantom Elite'];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="font-cinzel text-4xl md:text-5xl tracking-widest text-white mb-8">The Collection</h1>
        
        <div className="flex flex-wrap gap-4 border-b border-zinc-800 pb-8">
          {Categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-widest px-4 py-2 transition-all ${
                activeCategory === cat 
                  ? 'text-white border border-white' 
                  : 'text-zinc-500 border border-transparent hover:text-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-zinc-500 font-cinzel">No spirits found in this realm.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
