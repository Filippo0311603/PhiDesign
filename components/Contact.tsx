import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from './Button';
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
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden" ref={ref}>
      {/* Sliding panel reveal */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-10"
        initial={{ y: 0 }}
        animate={isInView ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      />
      
      {/* Glow Effects */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Text & Info */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Iniziamo un <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Progetto</span>
            </motion.h2>
            <motion.p 
              className="text-slate-400 mb-10 text-base sm:text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hai un'idea in mente o hai bisogno di rinnovare il tuo sito web? 
              Compila il form o contattami direttamente.
            </motion.p>

            <div className="flex flex-col items-center lg:items-start space-y-6">
              <motion.div 
                className="flex items-center gap-4 w-full max-w-[320px]"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.1, x: 10 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 border border-slate-700 flex-shrink-0"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail size={20} />
                </motion.div>
                <div className="text-left">
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-slate-400 text-sm sm:text-base break-all">info.phidesignweb@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 w-full max-w-[320px]"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.1, x: 10 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 border border-slate-700 flex-shrink-0"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin size={20} />
                </motion.div>
                <div className="text-left">
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-slate-400">Roma, Italia</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            className="glass-panel p-8 rounded-2xl border border-slate-700"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5), 0 0 50px rgba(6, 182, 212, 0.4)"
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Mario Rossi"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="mario@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Messaggio</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Parlami del tuo progetto..."
                  required
                ></textarea>
              </div>
              
              {/* GDPR Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-900 cursor-pointer"
                />
                <label htmlFor="privacy" className="text-sm text-slate-400 leading-relaxed cursor-pointer">
                  Dichiaro di aver letto e accettato la{' '}
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Privacy Policy
                  </button>
                  {' '}e autorizzo il trattamento dei miei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).
                </label>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-400 text-sm">
                  ✓ Messaggio inviato con successo! Ti risponderò al più presto.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-400 text-sm">
                  ✗ Si è verificato un errore. Riprova o contattami direttamente via email.
                </div>
              )}

              <Button type="submit" className="w-full" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <>Invio in corso...</>
                ) : (
                  <>Invia Messaggio <Send size={18} /></>
                )}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};