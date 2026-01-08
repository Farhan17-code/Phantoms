
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="pt-48 pb-24 px-6 text-center min-h-screen">
        <h1 className="font-cinzel text-4xl text-zinc-500 mb-6">The Void is Empty</h1>
        <p className="text-zinc-600 mb-10 text-[10px] uppercase tracking-[0.3em]">Add some spirits to your collection to proceed.</p>
        <Link to="/products" className="px-12 py-5 border border-white/10 hover:border-white text-white text-[10px] uppercase tracking-[0.4em] transition-all">
          Browse Spirits
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="font-cinzel text-5xl text-white mb-12 tracking-widest">Your Vault <span className="text-zinc-600 text-xl">({totalItems})</span></h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-10">
          {cart.map(item => (
            <div key={item.id} className="flex gap-8 pb-10 border-b border-zinc-900 group">
              <div className="w-32 h-44 bg-zinc-900 border border-white/5 overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-cinzel text-white mb-2">{item.name}</h3>
                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em]">{item.category}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-zinc-700 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center border border-zinc-800 bg-black">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-4 py-2 text-zinc-500 hover:text-white transition-colors"
                    >-</button>
                    <span className="px-4 text-xs font-bold tracking-widest">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-4 py-2 text-zinc-500 hover:text-white transition-colors"
                    >+</button>
                  </div>
                  <span className="text-zinc-400 font-cinzel text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-zinc-900/20 backdrop-blur-sm border border-zinc-800 p-10 sticky top-32">
            <h2 className="font-cinzel text-2xl text-white mb-8 tracking-widest uppercase">Summary</h2>
            <div className="space-y-6 mb-10">
              <div className="flex justify-between text-zinc-500 text-[10px] uppercase tracking-[0.2em]">
                <span>Ritual Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-500 text-[10px] uppercase tracking-[0.2em]">
                <span>Transit Fees</span>
                <span className="text-zinc-700 italic">Unveiled at exit</span>
              </div>
              <div className="pt-6 border-t border-zinc-800 flex justify-between text-white font-bold tracking-widest">
                <span className="uppercase text-xs">Total Commitment</span>
                <span className="text-xl font-cinzel">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full py-5 bg-white text-black font-bold text-[10px] uppercase tracking-[0.5em] hover:bg-zinc-200 transition-all active:scale-95 shadow-xl"
            >
              Seal the Ritual
            </button>
            <p className="mt-6 text-[9px] text-zinc-600 text-center uppercase tracking-[0.4em] leading-relaxed">
              Encrypted via Shadow Protocol
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
