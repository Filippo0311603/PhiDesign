import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, MapPin } from 'lucide-react';
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

  // Blocca lo scroll del body quando il menu è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-cyan-500 group-hover:border-fuchsia-500 transition-colors">
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
            className="md:hidden text-white z-[60]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[55] bg-slate-900 flex flex-col">
          {/* Header con X */}
          <div className="h-20 flex items-center justify-end px-6">
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white p-2"
              aria-label="Chiudi menu"
            >
              <X size={28} />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold text-lg"
              onClick={() => setIsOpen(false)}
            >
              Prenota una Call
            </a>
          </div>

          {/* Footer Section */}
          <div className="p-6 border-t border-slate-700">
            {/* Contact Info */}
            <div className="flex flex-col items-center gap-3 mb-6">
              <a href="mailto:info.phidesignweb@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={18} />
                <span className="text-sm">info.phidesignweb@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={18} />
                <span className="text-sm">Roma, Italia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-4">
              <a 
                href="https://www.instagram.com/phidesign__/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-fuchsia-500 hover:text-white transition-all"
                aria-label="Seguici su Instagram"
              >
                <Instagram size={22} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-center text-slate-500 text-xs">
              © 2026 Phi Design. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      )}
    </>
  );
};