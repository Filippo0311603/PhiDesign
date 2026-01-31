import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Grazie! Il messaggio è stato inviato (simulazione).');
    setFormData({ name: '', email: '', message: '', privacy: false });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Text & Info */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Iniziamo un <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Progetto</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
              Hai un'idea in mente o hai bisogno di rinnovare il tuo sito web? 
              Compila il form o contattami direttamente.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 border border-slate-700">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-slate-400">info@phidesign.it</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-fuchsia-400 border border-slate-700">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Telefono</h4>
                  <p className="text-slate-400">+39 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 border border-slate-700">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Studio</h4>
                  <p className="text-slate-400">Milano, Italia (Remoto disponibile)</p>
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

              <Button type="submit" className="w-full">
                Invia Messaggio <Send size={18} />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};