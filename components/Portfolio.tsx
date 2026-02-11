import React, { useState } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight, Clock, Maximize2, Minimize2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_DATA[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openModal = (project: typeof PORTFOLIO_DATA[0]) => {
    if (project.comingSoon) return; // Non aprire modal per coming soon
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
    <section id="portfolio" className="py-20 bg-slate-950 relative overflow-hidden" ref={ref}>
      {/* Curtain Effect - Left */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 z-10 origin-left"
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      />
      
      {/* Curtain Effect - Right */}
      <motion.div
        className="absolute inset-0 bg-slate-950 z-10 origin-right"
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
      />
      
      <div className="container mx-auto px-6 relative z-0">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ultimi <span className="text-fuchsia-500">Progetti</span></h2>
            <p className="text-slate-400">Una selezione dei miei lavori più recenti.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PORTFOLIO_DATA.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 100 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              whileHover={{ 
                scale: 1.08,
                y: -20,
                rotateY: project.comingSoon ? 0 : 10,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl ${project.comingSoon ? 'cursor-default' : 'cursor-pointer'}`}
              onClick={() => openModal(project)}
            >
              {project.comingSoon ? (
                /* Coming Soon Card */
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center border border-slate-700 border-dashed">
                  <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center mb-4">
                    <Clock size={32} className="text-cyan-400" />
                  </div>
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
                  <p className="text-slate-500 text-sm">In lavorazione...</p>
                </div>
              ) : (
                /* Normal Project Card */
                <>
                  <img 
                    src={project.image} 
                    alt={`Progetto ${project.title} - ${project.category}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width="400"
                    height="300"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                      Visualizza Progetto <ExternalLink size={14} />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && !isFullscreen && (
          <motion.div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              aria-label="Chiudi modal"
            >
              <X size={20} />
            </button>

            {/* Image Gallery */}
            <div className="relative aspect-video bg-slate-950">
              <img 
                src={images[currentImageIndex]} 
                alt={`${selectedProject.title} - Immagine ${currentImageIndex + 1}`}
                className="w-full h-full object-contain cursor-pointer"
                width="800"
                height="450"
                loading="lazy"
                onClick={toggleFullscreen}
              />
              
              {/* Fullscreen Button */}
              <button 
                onClick={toggleFullscreen}
                className="absolute top-4 left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Schermo intero"
              >
                <Maximize2 size={20} />
              </button>
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <motion.button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Immagine precedente"
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <motion.button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Immagine successiva"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-white text-sm" aria-live="polite">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Project Info */}
            <div className="p-6 md:p-8">
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
                {selectedProject.title}
              </h3>
              
              {selectedProject.description && (
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
              )}

              {/* Technologies */}
              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="mb-6">
                  <span className="text-slate-500 text-sm uppercase tracking-wider">Tecnologie</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span 
                        key={index}
                        className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {/* Visit Site Button */}
              {selectedProject.link && (
                <motion.a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visita il Sito <ExternalLink size={18} />
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
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
          onClick={toggleFullscreen}
        >
          {/* Close Fullscreen Button */}
          <button 
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Esci da schermo intero"
          >
            <Minimize2 size={24} />
          </button>

          {/* Fullscreen Image */}
          <img 
            src={images[currentImageIndex]} 
            alt={`${selectedProject.title} - Immagine ${currentImageIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Immagine precedente"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Immagine successiva"
              >
                <ChevronRight size={32} />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
        )}
      </AnimatePresence>
    </section>
  );
};