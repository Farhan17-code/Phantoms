
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FireflyCanvas from './components/FireflyCanvas';
import PhantomAI from './components/PhantomAI';
import Home from './pages/Home';
import Products from './pages/Products';
import Story from './pages/Story';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  const [soundOn, setSoundOn] = useState(false);
  const [audio] = useState(new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3'));

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.15;
    if (soundOn) {
      audio.play().catch(e => console.log("Audio play failed, user interaction needed"));
    } else {
      audio.pause();
    }
    return () => audio.pause();
  }, [soundOn, audio]);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col">
          <FireflyCanvas />
          <Header soundOn={soundOn} setSoundOn={setSoundOn} />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/story" element={<Story />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          <Footer />
          <PhantomAI />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
