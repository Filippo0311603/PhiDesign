import React, { useState, useRef } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight, Clock, Maximize2, Minimize2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_DATA[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openModal = (project: typeof PORTFOLIO_DATA[0]) => {
    if (project.comingSoon) return;
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsFullscreen(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsFullscreen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const images = selectedProject?.gallery?.length ? selectedProject.gallery : (selectedProject ? [selectedProject.image] : []);

  return (
    <section id="portfolio" className="py-32 bg-[#050b14] relative overflow-hidden" ref={ref}>
      
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      {/* Curtain Effect - Intro */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600 z-50 origin-left pointer-events-none"
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute inset-0 bg-[#050b14] z-40 origin-right pointer-events-none"
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Sezione */}
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-3xl">
            <h2 className="text-sm md:text-base text-cyan-400 font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-cyan-400"></span>
              Lavori Selezionati
            </h2>
            <h3 className="text-5xl md:text-8xl font-black text-white leading-[1] tracking-tighter">
              ARCHIVIO <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">DIGITALE.</span>
            </h3>
          </div>
        </motion.div>

        {/* ACCORDION CINEMATOGRAFICO */}
        <motion.div 
          className="flex flex-col md:flex-row h-[75vh] min-h-[600px] w-full gap-2 md:gap-4 overflow-hidden rounded-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {PORTFOLIO_DATA.map((project, index) => {
            const isHovered = hoveredId === project.id;
            const isComingSoon = project.comingSoon;
            // Se nessun elemento è in hover, la prima card è leggermente più larga per far capire il meccanismo su desktop,
            // oppure lasciamo flex-1 equo. Optiamo per flex-1 equo e su mobile flex-col.
            // Quando si hovera (o si tappa su mobile), flex-[3].
            
            return (
              <div 
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => openModal(project)}
                className={`relative flex-1 group overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isHovered ? 'flex-[4] md:flex-[5]' : 'flex-1'
                } ${isComingSoon ? 'cursor-default' : 'cursor-pointer'}`}
              >
                {/* Immagine di Background */}
                <div className="absolute inset-0 bg-slate-900 overflow-hidden">
                  {!isComingSoon && (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover origin-center transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        isHovered ? 'scale-100 opacity-90' : 'scale-[1.3] opacity-40 grayscale-[50%]'
                      }`}
                    />
                  )}
                  {isComingSoon && (
                    <div className="w-full h-full flex items-center justify-center bg-slate-950 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpattern id=%22grid%22 width=%2210%22 height=%2210%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 10 0 L 0 0 0 10%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.05)%22 strokeWidth=%221%22/%3E%3C/pattern%3E%3Crect width=%22100%22 height=%22100%22 fill=%22url(%23grid)%22/%3E%3C/svg%3E')] opacity-80">
                    </div>
                  )}
                </div>
                
                {/* Overlay Scuro */}
                <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700 ${
                  isHovered ? 'from-[#050b14] via-[#050b14]/50 to-transparent opacity-80' : 'from-[#050b14] via-[#050b14]/80 to-[#050b14]/40 opacity-100'
                }`}></div>

                {/* Contenuto Verticale (Default su Desktop, Orizzontale su Mobile) */}
                <div 
                  className={`absolute inset-0 flex justify-center items-center p-6 md:p-10 transition-all duration-700 pointer-events-none ${
                    isHovered ? 'opacity-0 delay-0' : 'opacity-100 delay-300'
                  }`}
                >
                  <h3 
                    className="text-2xl md:text-5xl font-black text-white/50 uppercase tracking-[0.2em] md:tracking-[0.5em] whitespace-nowrap drop-shadow-2xl md:[writing-mode:vertical-rl] md:rotate-180" 
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Contenuto Espanso (Hover) */}
                <div 
                  className={`absolute inset-0 flex flex-col justify-end p-6 md:p-12 transition-all duration-700 ${
                    isHovered ? 'opacity-100 translate-y-0 delay-200 pointer-events-auto' : 'opacity-0 translate-y-20 pointer-events-none delay-0'
                  }`}
                >
                  {isComingSoon ? (
                    <div className="flex flex-col items-start">
                      <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center mb-6 border border-slate-700">
                        <Clock size={32} className="text-cyan-400" />
                      </div>
                      <span className="text-cyan-400 font-bold tracking-widest uppercase mb-4">{project.category}</span>
                      <h3 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Coming Soon</h3>
                      <p className="text-slate-400 text-lg md:text-xl font-light">Progetto attualmente in fase di sviluppo.</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-start w-full">
                      <span className="text-cyan-400 font-bold tracking-widest uppercase mb-4 border border-cyan-400/30 px-4 py-2 rounded-full backdrop-blur-sm bg-cyan-900/20">
                        {project.category}
                      </span>
                      <h3 className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none shadow-black drop-shadow-2xl">
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center gap-3 mt-4 px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-400 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        Esplora Caso Studio <ExternalLink size={20} />
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </motion.div>

      </div>

      {/* MODAL (Invariato nel design, mantenuto l'approccio premium cyber) */}
      <AnimatePresence>
        {selectedProject && !isFullscreen && (
          <motion.div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative bg-[#0a1220] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 hover:text-cyan-400 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Image Gallery */}
            <div className="relative aspect-video bg-[#050b14] overflow-hidden group">
              <img 
                src={images[currentImageIndex]} 
                alt={`${selectedProject.title} - Immagine ${currentImageIndex + 1}`}
                className="w-full h-full object-contain cursor-pointer transition-transform duration-700 group-hover:scale-105"
                onClick={toggleFullscreen}
              />
              
              <button 
                onClick={toggleFullscreen}
                className="absolute top-4 left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-cyan-400 transition-colors"
              >
                <Maximize2 size={20} />
              </button>
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <motion.button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 border border-slate-700 text-white hover:border-cyan-500 transition-colors"
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <motion.button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 border border-slate-700 text-white hover:border-cyan-500 transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                  
                  {/* Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/50 border border-slate-800 text-cyan-400 text-xs font-mono font-bold tracking-widest">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Project Info */}
            <div className="p-8 md:p-12">
              <span className="text-cyan-500 text-xs font-bold uppercase tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white mt-6 mb-6 tracking-tighter">
                {selectedProject.title}
              </h3>
              
              {selectedProject.description && (
                <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light max-w-3xl">
                  {selectedProject.description}
                </p>
              )}

              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="mb-10">
                  <span className="text-slate-600 text-xs font-bold uppercase tracking-widest block mb-4">Tech Stack</span>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span 
                        key={index}
                        className="px-4 py-2 rounded-full bg-[#050b14] text-cyan-400 text-sm border border-slate-800"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.link && (
                <motion.a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold tracking-wide hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Esplora Progetto <ExternalLink size={18} />
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>

      {/* FULLSCREEN LIGHTBOX */}
      <AnimatePresence>
        {selectedProject && isFullscreen && (
        <motion.div 
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050b14]"
          onClick={toggleFullscreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button 
            onClick={toggleFullscreen}
            className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-cyan-500 transition-colors"
          >
            <Minimize2 size={24} />
          </button>

          <motion.img 
            src={images[currentImageIndex]} 
            alt="Fullscreen"
            className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          />
          
          {images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-cyan-500 transition-colors"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-cyan-500 transition-colors"
              >
                <ChevronRight size={32} />
              </button>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-white/10 text-white text-sm tracking-widest font-mono">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};