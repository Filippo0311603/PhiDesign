import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { Button } from './Button';
import { IMAGES } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Diagonal Wipe Transition */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-slate-900 z-50"
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        animate={hasAnimated ? { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" } : {}}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      />
      
      {/* Background Image with Overlay */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
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
      </motion.div>

      {/* Content */}
      <motion.div 
        className="container relative z-10 px-6 pt-20 pb-16 sm:pb-0"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <motion.div 
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/30 uppercase tracking-widest flex items-center gap-2 animate-pulse">
              <Code2 size={14} /> Web Developer
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight neon-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dal design <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              al successo online
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Siti web che non passano inosservati. Unisco creatività e strategia per dare 
            alla tua attività la presenza digitale che merita.
          </motion.p>
          
          <motion.div 
            className="flex flex-row flex-wrap gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              Vedi i miei lavori
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contattami <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - hidden on mobile */}
      <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};