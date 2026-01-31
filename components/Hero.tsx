import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { Button } from './Button';
import { IMAGES } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* 
            NOTE FOR USER: 
            This uses the IMAGES.HERO constant. Replace the URL in constants.ts 
            with your uploaded developer photo.
        */}
        <img 
          src={IMAGES.HERO} 
          alt="Phi Design - Web Developer al lavoro" 
          className="w-full h-full object-cover object-center"
          width="1920"
          height="1080"
          loading="eager"
        />
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-pulse">
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/30 uppercase tracking-widest flex items-center gap-2">
              <Code2 size={14} /> Web Development Studio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight neon-text">
            Dal design <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              al successo online
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
            Siti web che non passano inosservati. Unisco creatività e strategia per dare 
            alla tua attività la presenza digitale che merita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              Vedi i miei lavori
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contattami <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};