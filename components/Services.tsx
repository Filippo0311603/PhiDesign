import React from 'react';
import { Code, Layout, ShoppingCart, BarChart3 } from 'lucide-react';
import { SERVICES_DATA } from '../constants';
import { motion, useInView } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  'code': <Code size={32} />,
  'layout': <Layout size={32} />,
  'shopping-cart': <ShoppingCart size={32} />,
  'bar-chart': <BarChart3 size={32} />,
};

export const Services: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-slate-900 relative overflow-hidden" ref={ref}>
        {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      ></motion.div>

      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">I Miei <span className="text-cyan-400">Servizi</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Soluzioni complete per la tua presenza online. Dalla progettazione iniziale alla messa online e oltre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.8 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                rotateY: 8,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="group glass-panel p-6 md:p-8 rounded-2xl hover:bg-slate-800/80 transition-all duration-500 border border-slate-700 hover:border-cyan-500/50 text-center sm:text-left h-full"
            >
              <motion.div 
                className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-fuchsia-500 group-hover:text-white transition-all duration-300 mx-auto sm:mx-0"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {iconMap[service.icon]}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};