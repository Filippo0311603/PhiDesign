import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { CookiePolicy } from './components/CookiePolicy';
import { SectionTransition } from './components/SectionTransition';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookie, setShowCookie] = useState(false);

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact onOpenPrivacy={() => setShowPrivacy(true)} />
      </main>

      <footer className="bg-slate-950 border-t border-slate-800">
        {/* Main Footer */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <img src="/logo-optimized.webp" alt="Phi Design Logo" className="h-12 w-auto mb-4 mx-auto md:mx-0" width="48" height="48" />
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Creo esperienze digitali uniche che trasformano le tue idee in realtà. Design moderno, codice pulito, risultati concreti.
              </p>
              {/* Social */}
              <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
                <motion.a 
                  href="https://www.instagram.com/phidesign__/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                  aria-label="Seguici su Instagram"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Instagram size={18} />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Navigazione</h4>
              <ul className="space-y-3">
                <li>
                  <motion.a 
                    href="#home" 
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="w-0 h-[1px] bg-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                    Home
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#services" 
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="w-0 h-[1px] bg-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                    Servizi
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#portfolio" 
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="w-0 h-[1px] bg-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                    Portfolio
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#contact" 
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="w-0 h-[1px] bg-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                    Contatti
                  </motion.a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contatti</h4>
              <ul className="flex flex-col items-center md:items-start space-y-3 text-slate-400">
                <li className="flex items-center gap-3 w-full max-w-[280px]">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm break-all">info.phidesignweb@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 w-full max-w-[280px]">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm">Roma, Italia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Phi Design. Tutti i diritti riservati.
              </p>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setShowCookie(true)}
                  className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
                >
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      
      {/* Cookie Policy Modal */}
      {showCookie && <CookiePolicy onClose={() => setShowCookie(false)} />}
    </div>
  );
};

export default App;