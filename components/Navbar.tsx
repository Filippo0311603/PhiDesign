import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS, IMAGES } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-cyan-500 group-hover:border-fuchsia-500 transition-colors">
             {/* 
                NOTE FOR USER: 
                The src below uses a placeholder. 
                Ideally, replace IMAGES.LOGO in constants.ts with your actual logo file path.
             */}
            <img 
              src={IMAGES.LOGO} 
              alt="Phi Design Logo" 
              className="w-full h-full object-cover"
              width="40"
              height="40"
            />
          </div>
          <span className="text-xl font-bold tracking-wider text-white">
            PHI <span className="text-cyan-400">DESIGN</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-fuchsia-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 rounded-full border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white transition-all text-sm font-bold">
            Prenota
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-slate-700 animate-in slide-in-from-top-5 fade-in duration-300">
          <div className="flex flex-col p-6 gap-4">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-lg text-slate-200 py-2 border-b border-slate-700/50 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};