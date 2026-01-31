import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Github, Linkedin, Twitter } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <span className="text-2xl font-bold tracking-wider text-white">
                PHI <span className="text-cyan-400">DESIGN</span>
              </span>
              <p className="text-slate-500 text-sm mt-2">
                © {new Date().getFullYear()} Phi Design. Tutti i diritti riservati.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;