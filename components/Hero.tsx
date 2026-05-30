import React from 'react';
import { ArrowRight, Crosshair, Cpu, Orbit } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  // Generatore di linee verticali per l'effetto "Data Stream"
  const generateDataStreams = () => {
    return Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `-20%`,
          height: `${Math.random() * 30 + 10}%`,
        }}
        animate={{
          top: ['-20%', '120%'],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: 'linear',
          delay: Math.random() * 5,
        }}
      />
    ));
  };

  return (
    <section id="home" className="relative w-full min-h-[100vh] flex flex-col items-center justify-center bg-[#050b14] overflow-hidden">
      
      {/* 1. HIGH-DENSITY BLUEPRINT BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Core Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.07)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Micro-Grid for density */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:10px_10px]"></div>

        {/* Ambient Dark Glows so it's not totally flat */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-fuchsia-900/10 rounded-full blur-[150px]"></div>

        {/* Falling Data Streams */}
        {generateDataStreams()}

        {/* HUD Elements Scatter */}
        <div className="absolute top-[15%] left-[10%] text-cyan-500/30 flex items-center gap-2 font-mono text-[10px]">
          <Crosshair size={12} />
          <span>[TRG_LOCK: ACTIVE]</span>
        </div>
        
        <div className="absolute bottom-[25%] left-[5%] text-cyan-500/20 font-mono text-[10px] hidden md:block">
          <div className="w-16 h-[1px] bg-cyan-500/30 mb-1"></div>
          <span>SECURE // 0x48FA</span>
        </div>

        <div className="absolute top-[25%] right-[10%] text-fuchsia-500/30 flex items-center gap-2 font-mono text-[10px]">
          <span>[SYS.ONLINE]</span>
          <Orbit size={12} className="animate-spin-slow" />
        </div>

        <div className="absolute bottom-[30%] right-[5%] flex flex-col gap-1 items-end hidden md:flex">
          <div className="w-2 h-2 bg-cyan-500/50"></div>
          <div className="w-2 h-2 bg-cyan-500/20"></div>
          <div className="w-2 h-2 bg-cyan-500/80 animate-pulse"></div>
        </div>

      </div>

      {/* 2. MAIN CONTENT (Framed like a target) */}
      <div 
        className="container relative z-10 px-6 pt-24 pb-20 md:pt-32 md:pb-24 flex flex-col items-center justify-center text-center max-w-5xl mx-auto flex-1"
      >
        
        {/* The Targeting Frame container */}
        <div className="relative p-6 md:p-12 w-full flex flex-col items-center">
          
          {/* Decorative Corners (Targeting Brackets) */}
          <div className="absolute top-0 left-0 w-8 md:w-16 h-8 md:h-16 border-t-2 border-l-2 border-cyan-500/40 opacity-70"></div>
          <div className="absolute top-0 right-0 w-8 md:w-16 h-8 md:h-16 border-t-2 border-r-2 border-cyan-500/40 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-8 md:w-16 h-8 md:h-16 border-b-2 border-l-2 border-cyan-500/40 opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-8 md:w-16 h-8 md:h-16 border-b-2 border-r-2 border-cyan-500/40 opacity-70"></div>

          {/* Availability Badge */}
          <motion.div 
            className="mb-6 md:mb-8 inline-flex items-center gap-3 bg-[#0a1220]/80 backdrop-blur-md border border-cyan-500/30 px-5 py-2 group hover:border-cyan-400/50 transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Cpu size={14} className="text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] group-hover:text-cyan-200 transition-colors">
              Disponibile per nuovi progetti
            </span>
          </motion.div>
          
          {/* Monumental H1 - Scaled down to prevent clipping */}
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black text-white mb-6 md:mb-8 leading-[1.1] tracking-tighter uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-2xl">
              Dal design
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 neon-text">
              al successo online
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-base md:text-xl text-slate-400 mb-8 md:mb-10 leading-relaxed max-w-2xl font-light px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Siti web che non passano inosservati. Unisco creatività e strategia per dare 
            alla tua attività la <strong className="text-white font-medium">presenza digitale che merita.</strong>
          </motion.p>
          
          {/* Tactical Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button 
              className="relative overflow-hidden bg-cyan-500 text-[#050b14] px-8 md:px-10 py-4 font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:scale-105 text-sm md:text-base w-full sm:w-auto"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Esplora i progetti
            </button>
            
            <button 
              className="group relative overflow-hidden bg-[#0a1220]/50 backdrop-blur-md border border-slate-700 text-white px-8 md:px-10 py-4 font-bold uppercase tracking-widest hover:border-cyan-500 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 text-sm md:text-base w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Inizia ora</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 group-hover:text-cyan-400 transition-all" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* 3. INFINITE MARQUEE (Replacing Mouse Scroll) */}
      <div className="absolute bottom-0 left-0 w-full bg-[#03070d] border-t border-cyan-500/20 py-3 overflow-hidden z-20 flex">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-[10px] md:text-xs font-mono text-cyan-500/70 uppercase tracking-[0.3em] mx-8 flex items-center gap-8">
              // SCROLL TO INITIATE SYSTEM
              <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-pulse"></span>
            </span>
          ))}
        </div>
        <div className="animate-marquee whitespace-nowrap flex items-center absolute top-3 left-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={`dup-${i}`} className="text-[10px] md:text-xs font-mono text-cyan-500/70 uppercase tracking-[0.3em] mx-8 flex items-center gap-8">
              // SCROLL TO INITIATE SYSTEM
              <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-pulse"></span>
            </span>
          ))}
        </div>
      </div>
      
    </section>
  );
};