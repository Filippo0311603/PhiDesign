import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from './Button';

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

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Text & Info */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Iniziamo un <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Progetto</span>
            </h2>
            <p className="text-slate-400 mb-10 text-base sm:text-lg">
              Hai un'idea in mente o hai bisogno di rinnovare il tuo sito web? 
              Compila il form o contattami direttamente.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 border border-slate-700">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-slate-400 text-sm sm:text-base">info.phidesignweb@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 border border-slate-700">
                  <MapPin size={20} />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-slate-400">Roma, Italia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel p-8 rounded-2xl border border-slate-700">
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
          </div>

        </div>
      </div>
    </section>
  );
};