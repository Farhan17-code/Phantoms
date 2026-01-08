
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC<{ soundOn: boolean; setSoundOn: (v: boolean) => void }> = ({ soundOn, setSoundOn }) => {
  const { totalItems } = useCart();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/products' },
    { name: 'The Story', path: '/story' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center relative">
             <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current animate-pulse group-hover:rotate-180 transition-transform duration-1000">
                <path d="M50 15L15 50L50 85L85 50L50 15ZM50 25L75 50L50 75L25 50L50 25Z" />
                <circle cx="50" cy="50" r="8" className="animate-ping opacity-50" />
                <circle cx="50" cy="50" r="4" />
             </svg>
          </div>
          <span className="font-cinzel text-xl tracking-[0.3em] font-bold hidden sm:block">PHANTOM</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[10px] uppercase tracking-[0.3em] transition-all hover:text-white hover:tracking-[0.4em] ${
                location.pathname === item.path ? 'text-white font-bold border-b border-white pb-1' : 'text-zinc-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setSoundOn(!soundOn)}
            className="text-zinc-500 hover:text-white transition-colors"
            title={soundOn ? "Mute Soundscape" : "Enable Soundscape"}
          >
            {soundOn ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          <Link to="/cart" className="relative group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
