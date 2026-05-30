import React, { useRef } from 'react';
import { Code, Layout, ShoppingCart, BarChart3 } from 'lucide-react';
import { SERVICES_DATA } from '../constants';
import { motion, useInView } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  'code': <Code size={40} strokeWidth={1} />,
  'layout': <Layout size={40} strokeWidth={1} />,
  'shopping-cart': <ShoppingCart size={40} strokeWidth={1} />,
  'bar-chart': <BarChart3 size={40} strokeWidth={1} />,
};

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-[#050b14] relative overflow-hidden" ref={containerRef}>
      
      {/* Dynamic CSS for Hover Effects */}
      <style>{`
        .cyber-scanline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, rgba(6, 182, 212, 0.8), transparent);
          opacity: 0;
          z-index: 20;
          pointer-events: none;
        }

        .service-row:hover .cyber-scanline {
          opacity: 1;
          animation: scan 2s linear infinite;
        }

        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }

        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .service-row:hover .noise-overlay {
          opacity: 1;
        }
      `}</style>

      {/* Background Decorative Orbs */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-fuchsia-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="mb-24 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-3xl">
            <h2 className="text-sm md:text-base text-cyan-400 font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-cyan-400"></span>
              Metodologia Operativa
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              DISTRUGGIAMO <br className="hidden md:block" />
              LO <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-300">STANDARD.</span>
            </h3>
          </div>
          <div className="text-right max-w-sm hidden lg:block">
            <p className="text-slate-400 font-light leading-relaxed">
              Nessun template. Nessuna scorciatoia. Solo codice puro e design che lascia il segno nella mente degli utenti.
            </p>
          </div>
        </motion.div>

        {/* EDITORIAL ACCORDION LIST */}
        <div className="flex flex-col w-full border-t border-slate-800/50">
          {SERVICES_DATA.map((service, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="service-row group relative border-b border-slate-800/50 py-10 md:py-16 overflow-hidden cursor-pointer"
              >
                {/* Tech Scanline Animation */}
                <div className="cyber-scanline"></div>
                
                {/* Noise Background on Hover */}
                <div className="noise-overlay absolute inset-0 z-0 pointer-events-none mix-blend-overlay"></div>
                
                {/* Hover Ambient Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/0 via-fuchsia-900/0 to-cyan-900/0 group-hover:from-cyan-900/10 group-hover:via-[#050b14] group-hover:to-fuchsia-900/10 transition-all duration-700 z-0"></div>

                {/* Giant Watermark Number */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-10 text-[8rem] md:text-[14rem] font-black text-slate-800/10 group-hover:text-cyan-500/5 transition-colors duration-700 pointer-events-none select-none z-0 tracking-tighter">
                  {num}
                </div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-10">
                  
                  {/* Title Area */}
                  <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto">
                    <span className="text-cyan-500 font-mono text-xl md:text-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                      /{num}
                    </span>
                    <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-300 uppercase tracking-tighter group-hover:tracking-normal transition-all duration-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Animated Icon (Appears on hover) */}
                  <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-full border border-slate-800 text-slate-600 group-hover:border-cyan-500 group-hover:text-cyan-400 group-hover:-rotate-12 transition-all duration-500 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 bg-[#050b14] shadow-[0_0_0_rgba(6,182,212,0)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] shrink-0 z-20">
                    {iconMap[service.icon]}
                  </div>
                </div>

                {/* Expanding Description Area */}
                <div className="relative z-10 max-h-0 group-hover:max-h-[500px] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] px-4 md:px-10 ml-0 md:ml-[5rem] lg:ml-[7rem] overflow-hidden">
                  <div className="pt-8 md:pt-12 pb-4 max-w-3xl flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-12 h-[2px] bg-cyan-500 mt-3 shrink-0 transform -translate-x-8 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
                    <p className="text-slate-400 text-lg md:text-2xl font-light leading-relaxed transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                      {service.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};