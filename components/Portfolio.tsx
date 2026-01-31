import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ultimi <span className="text-fuchsia-500">Progetti</span></h2>
            <p className="text-slate-400">Una selezione dei miei lavori più recenti.</p>
          </div>
          <button className="hidden md:block text-cyan-400 hover:text-white transition-colors mt-4 md:mt-0">
            Vedi tutto il portfolio &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button className="text-cyan-400 hover:text-white transition-colors">
                Vedi tutto il portfolio &rarr;
            </button>
        </div>
      </div>
    </section>
  );
};