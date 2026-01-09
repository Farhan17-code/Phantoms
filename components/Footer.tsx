
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white flex items-center justify-center rounded-sm">
              <div className="w-3 h-3 bg-black rotate-45"></div>
            </div>
            <span className="font-cinzel text-lg tracking-widest font-bold">PHANTOM</span>
          </Link>
          <p className="text-zinc-600 text-xs leading-relaxed max-w-xs">
            A specialized movement dedicated to high-performance technical apparel with a mystical aesthetic. Designed for the unseen.
          </p>
        </div>

        <div>
          <h4 className="text-zinc-300 text-xs uppercase tracking-[0.2em] mb-6">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/products" className="text-zinc-600 hover:text-zinc-300 text-xs transition-colors">Collections</Link></li>
            <li><Link to="/story" className="text-zinc-600 hover:text-zinc-300 text-xs transition-colors">Manifesto</Link></li>
            <li><Link to="/cart" className="text-zinc-600 hover:text-zinc-300 text-xs transition-colors">Your Vault</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-zinc-300 text-xs uppercase tracking-[0.2em] mb-6">Support</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-zinc-600 hover:text-zinc-300 text-xs transition-colors">Shipping Spirits</a></li>
            <li><a href="#" className="text-zinc-600 hover:text-zinc-300 text-xs transition-colors">Ritual Returns</a></li>
            <li><a href="#" className="text-zinc-600 hover:text-zinc-300 text-xs transition-colors">Invisibility Guide</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-zinc-300 text-xs uppercase tracking-[0.2em] mb-6">Shadows</h4>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.26-2.911.557-.788.306-1.457.715-2.122 1.38-.665.665-1.074 1.334-1.38 2.122-.297.763-.5 1.634-.557 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.668.072 4.947c.057 1.277.26 2.148.557 2.911.306.788.715 1.457 1.38 2.122.665.665 1.334 1.074 2.122 1.38.763.297 1.634.5 2.911.557 1.28.058 1.688.072 4.947.072s3.668-.014 4.947-.072c1.277-.057 2.148-.26 2.911-.557.788-.306 1.457-.715 2.122-1.38.665-.665 1.074-1.334 1.38-2.122.297-.763.5-1.634.557-2.911.058-1.28.072-1.688.072-4.947s-.014-3.668-.072-4.947c-.057-1.277-.26-2.148-.557-2.911-.306-.788-.715-1.457-1.38-2.122-.665-.665-1.334-1.074-2.122-1.38-.763-.297-1.634-.5-2.911-.557-1.28-.058-1.688-.072-4.947-.072z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-zinc-700 uppercase tracking-widest">© 2026 PHANTOM WEARS. ALL RIGHTS RESERVED.</p>
        <p className="text-[10px] text-zinc-700 uppercase tracking-widest">MADE IN THE SHADOWS.</p>
      </div>
    </footer>
  );
};

export default Footer;
