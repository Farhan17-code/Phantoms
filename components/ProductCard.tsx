
import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    addToCart(product);
    
    // Flying Bird Animation Logic
    const bird = document.createElement('div');
    bird.className = 'fixed pointer-events-none z-[100] transition-all duration-1000 ease-in-out';
    bird.innerHTML = `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
        <path d="M21 5l-1.4 1.4L18.2 5 13 10.2l-3.2-3.2L3 13.8l1.4 1.4L13 6.6l3.2 3.2L22.4 3.6 21 5zM3 17.2l1.4 1.4 6.8-6.8 3.2 3.2L21 8.8l-1.4-1.4-6.6 6.6-3.2-3.2L3 17.2z" />
      </svg>
    `;
    
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    bird.style.left = `${rect.left}px`;
    bird.style.top = `${rect.top}px`;
    bird.style.opacity = '1';
    bird.style.transform = 'scale(1.5)';
    
    document.body.appendChild(bird);
    
    // Target position (header cart icon roughly)
    setTimeout(() => {
      bird.style.left = `${window.innerWidth - 80}px`;
      bird.style.top = `30px`;
      bird.style.opacity = '0';
      bird.style.transform = 'scale(0.1) rotate(45deg)';
    }, 50);
    
    setTimeout(() => {
      document.body.removeChild(bird);
    }, 1100);
  };

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          loading="lazy"
        />
        
        {/* Overlay Action */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={handleAdd}
            className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
          >
            Add to Void
          </button>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">{product.name}</h3>
          <p className="text-xs text-zinc-500 mt-1">{product.category}</p>
        </div>
        <span className="text-sm text-zinc-400">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
