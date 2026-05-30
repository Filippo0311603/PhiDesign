import React, { useState } from 'react';
import { Mail, MapPin, Send, Zap, Activity } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface ContactProps {
  onOpenPrivacy?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPrivacy }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacy: false
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xwvbdolz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', privacy: false });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-[#050b14] relative overflow-hidden" ref={ref}>
      
      {/* Decorative Blur Orbs */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      ></motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Intestazione Sezione */}
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-wider">
              Iniziamo un <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 neon-text">Progetto</span>
            </h2>
            <p className="text-slate-400 mb-6 text-base md:text-xl max-w-xl font-light">
              Hai un'idea in mente o hai bisogno di rinnovare il tuo sito web? 
              Compila il form o contattami direttamente.
            </p>
          </div>
        </motion.div>

        {/* CYBER-BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 max-w-7xl mx-auto">
          
          {/* MAIN FORM BENTO (8 Columns) */}
          <motion.div 
            className="lg:col-span-8 bg-[#0a1220]/60 backdrop-blur-2xl border border-slate-800 hover:border-slate-700 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-colors duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top Bar Decorative */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-50"></div>
            
            <div className="flex items-center gap-3 mb-10 text-slate-400 font-mono text-sm uppercase tracking-widest border-b border-slate-800 pb-6">
              <Activity size={18} className="text-cyan-400 animate-pulse" />
              <span>Pannello Input Dati</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Floating Label Input: Nome */}
                <div className="relative z-0 w-full group">
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="block py-4 px-0 w-full text-xl md:text-2xl font-bold text-white bg-transparent border-0 border-b-2 border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer transition-colors duration-300" 
                    placeholder=" " 
                    required 
                    autoComplete="off"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute text-slate-500 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 font-bold uppercase tracking-widest text-sm"
                  >
                    Nome
                  </label>
                </div>

                {/* Floating Label Input: Email */}
                <div className="relative z-0 w-full group">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="block py-4 px-0 w-full text-xl md:text-2xl font-bold text-white bg-transparent border-0 border-b-2 border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-400 peer transition-colors duration-300" 
                    placeholder=" " 
                    required 
                    autoComplete="off"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute text-slate-500 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 font-bold uppercase tracking-widest text-sm"
                  >
                    Indirizzo Email
                  </label>
                </div>
              </div>

              {/* Floating Label Textarea: Messaggio */}
              <div className="relative z-0 w-full group mt-12">
                <textarea 
                  name="message" 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="block py-4 px-0 w-full text-xl md:text-2xl font-medium text-white bg-transparent border-0 border-b-2 border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer transition-colors duration-300 resize-none" 
                  placeholder=" " 
                  required 
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute text-slate-500 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 font-bold uppercase tracking-widest text-sm"
                >
                  Parlami del tuo progetto...
                </label>
              </div>

              {/* GDPR & Status */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
                
                <div className="flex items-start gap-4">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      required
                      className="w-5 h-5 appearance-none rounded border-2 border-slate-700 checked:border-cyan-500 checked:bg-cyan-500 transition-colors cursor-pointer"
                    />
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-[#050b14] opacity-0 peer-checked:opacity-100">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>
                  <label htmlFor="privacy" className="text-sm text-slate-400 font-light cursor-pointer select-none">
                    Accetto i protocolli di <button type="button" onClick={onOpenPrivacy} className="text-cyan-400 font-bold hover:underline">Privacy Policy (GDPR)</button>.
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full md:w-auto relative group overflow-hidden rounded-xl bg-white text-slate-900 px-8 py-4 font-black uppercase tracking-widest hover:text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status === 'sending' ? 'Trasmissione...' : 'Invia Dati'}
                    {!status && <Send size={18} />}
                    {status === 'idle' && <Send size={18} />}
                  </span>
                </button>

              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400 font-bold font-mono text-sm uppercase tracking-wider text-center">
                  ✓ Trasmissione completata con successo.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 font-bold font-mono text-sm uppercase tracking-wider text-center">
                  ✗ Errore di trasmissione. Riprovare.
                </div>
              )}

            </form>
          </motion.div>

          {/* SATELLITE BENTOS (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
            
            {/* EMAIL BENTO */}
            <motion.div 
              className="flex-1 bg-[#0a1220]/60 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-fuchsia-500/50 transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute top-8 right-8 w-16 h-16 bg-fuchsia-500/10 rounded-2xl border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover:scale-110 group-hover:bg-fuchsia-500 group-hover:text-white transition-all duration-500 transform group-hover:-rotate-12">
                <Mail size={32} />
              </div>
              <div className="relative z-10 mt-16">
                <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.2em] mb-2">Scrivimi</p>
                <h4 className="text-white font-bold text-lg md:text-xl break-words group-hover:text-fuchsia-400 transition-colors duration-300">
                  info.phidesignweb@gmail.com
                </h4>
              </div>
            </motion.div>

            {/* LOCATION BENTO (RADAR) */}
            <motion.div 
              className="flex-1 bg-[#0a1220]/60 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col justify-end min-h-[200px]"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Radar Background CSS Animation */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-cyan-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-cyan-500/50 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] border border-cyan-500/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-[150px] h-[1px] bg-cyan-400 origin-left animate-[spin_4s_linear_infinite]"></div>
              </div>

              <div className="absolute top-8 right-8 w-16 h-16 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 z-10">
                <MapPin size={32} />
              </div>
              
              <div className="relative z-10 mt-16">
                <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.2em] mb-2">Dove mi trovi</p>
                <h4 className="text-white font-bold text-2xl md:text-3xl group-hover:text-cyan-400 transition-colors duration-300">
                  Roma, IT
                </h4>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};