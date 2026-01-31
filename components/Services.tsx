import React from 'react';
import { Code, Layout, ShoppingCart, BarChart3 } from 'lucide-react';
import { SERVICES_DATA } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  'code': <Code size={32} />,
  'layout': <Layout size={32} />,
  'shopping-cart': <ShoppingCart size={32} />,
  'bar-chart': <BarChart3 size={32} />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900 relative">
        {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">I Miei <span className="text-cyan-400">Servizi</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Soluzioni complete per la tua presenza online. Dalla progettazione iniziale alla messa online e oltre.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id} 
              className="group glass-panel p-6 md:p-8 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 hover:-translate-y-2 text-center sm:text-left"
            >
              <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-fuchsia-500 group-hover:text-white transition-all duration-300 mx-auto sm:mx-0">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};