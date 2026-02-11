import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, MapPin } from 'lucide-react';
import { NAVIGATION_LINKS, IMAGES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Smooth scroll con transizione
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Chiudi il menu mobile se aperto
      setIsOpen(false);
      
      // Scroll smooth con offset per la navbar
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <motion.a 
            href="#" 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div 
              className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-cyan-500 group-hover:border-fuchsia-500 transition-colors"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src={IMAGES.LOGO} 
                alt="Phi Design Logo" 
                className="w-full h-full object-cover"
                width="40"
                height="40"
              />
            </motion.div>
            <span className="text-xl font-bold tracking-wider text-white">
              PHI <span className="text-cyan-400">DESIGN</span>
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link, index) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-fuchsia-500 after:transition-all hover:after:w-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2 rounded-full border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white transition-all text-sm font-bold"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(217, 70, 239, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Prenota
            </motion.a>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 z-[55] bg-slate-900 flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
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
            {NAVIGATION_LINKS.map((link, index) => (
              <motion.a 
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-widest"
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, x: 50, rotateY: -45 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 0.1 + index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.1, color: "#22d3ee" }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#contact" 
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold text-lg"
              onClick={(e) => handleNavClick(e, '#contact')}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Prenota una Call
            </motion.a>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};