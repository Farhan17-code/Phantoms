
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types';

const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      alert("The ritual is complete. Your garments will find you in the shadows.");
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
        <h1 className="font-cinzel text-5xl text-white mb-4 tracking-[0.2em]">Final Ritual</h1>
        <p className="text-zinc-600 text-[10px] uppercase tracking-[0.5em]">Verify your presence to finalize the transfer.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
          <div className="space-y-6">
            <h2 className="text-zinc-400 text-[10px] uppercase tracking-[0.4em] border-b border-zinc-900 pb-2">Identification</h2>
            <div className="grid grid-cols-1 gap-4">
              <input required type="text" placeholder="TRUE NAME" className="bg-black border border-zinc-800 p-4 text-[10px] tracking-widest text-zinc-300 focus:border-white outline-none transition-colors uppercase" />
              <input required type="email" placeholder="DIGITAL FREQUENCY (EMAIL)" className="bg-black border border-zinc-800 p-4 text-[10px] tracking-widest text-zinc-300 focus:border-white outline-none transition-colors uppercase" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-zinc-400 text-[10px] uppercase tracking-[0.4em] border-b border-zinc-900 pb-2">Coordinates</h2>
            <div className="grid grid-cols-1 gap-4">
              <input required type="text" placeholder="STREET ADDRESS" className="bg-black border border-zinc-800 p-4 text-[10px] tracking-widest text-zinc-300 focus:border-white outline-none transition-colors uppercase" />
              <div className="grid grid-cols-2 gap-4">
                 <input required type="text" placeholder="CITY" className="bg-black border border-zinc-800 p-4 text-[10px] tracking-widest text-zinc-300 focus:border-white outline-none uppercase" />
                 <input required type="text" placeholder="CODE" className="bg-black border border-zinc-800 p-4 text-[10px] tracking-widest text-zinc-300 focus:border-white outline-none uppercase" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-zinc-400 text-[10px] uppercase tracking-[0.4em] border-b border-zinc-900 pb-2">Payment Essence</h2>
            <div className="bg-zinc-900/50 p-6 border border-zinc-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-[10px] tracking-[0.3em] text-white">SECURE SHADOW VAULT</span>
              </div>
              <input required type="text" placeholder="CARD NUMBER" className="w-full bg-black border border-zinc-800 p-4 text-[10px] tracking-widest text-zinc-300 mb-4 outline-none" />
              <div className="grid grid-cols-2 gap-4">
                 <input required type="text" placeholder="MM/YY" className="bg-black border border-zinc-800 p-4 text-[10px] tracking-widest text-zinc-300 outline-none" />
                 <input required type="text" placeholder="CVV" className="bg-black border border-zinc-800 p-4 text-[10px] tracking-widest text-zinc-300 outline-none" />
              </div>
            </div>
          </div>

          <button disabled={isProcessing} className="w-full py-6 bg-white text-black font-bold text-[10px] uppercase tracking-[0.6em] hover:bg-zinc-200 transition-all disabled:opacity-50 relative overflow-hidden group">
            {isProcessing ? 'Transcending...' : 'Authorize Ritual'}
            <div className="absolute inset-0 bg-zinc-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
        </form>

        <div className="bg-zinc-900/20 border border-zinc-800 p-8 h-fit animate-in fade-in slide-in-from-right-4 duration-1000">
          <h2 className="font-cinzel text-xl text-white mb-8 tracking-widest">Manifest Contents</h2>
          <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
            {cart.map((item: CartItem) => (
              <div key={item.id} className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-800 border border-white/5">
                    <img src={item.image} alt="" className="w-full h-full object-cover grayscale opacity-50" />
                  </div>
                  <span className="text-zinc-400 tracking-wider uppercase">{item.name} x{item.quantity}</span>
                </div>
                <span className="text-zinc-200 font-cinzel">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-zinc-800">
             <div className="flex justify-between items-baseline">
                <span className="text-zinc-600 text-[10px] uppercase tracking-widest">Total Sacrifice</span>
                <span className="text-3xl text-white font-cinzel">${totalPrice.toFixed(2)}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
