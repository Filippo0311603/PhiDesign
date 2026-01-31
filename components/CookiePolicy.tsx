import React from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyProps {
  onClose: () => void;
}

export const CookiePolicy: React.FC<CookiePolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-slate-900 overflow-y-auto">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Torna indietro"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-3">
            <Cookie className="text-cyan-400" size={28} />
            <h1 className="text-3xl font-bold text-white">Cookie Policy</h1>
          </div>
        </div>

        <p className="text-slate-400 mb-8">Ultimo aggiornamento: 31 gennaio 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Cosa sono i cookie</h2>
            <p className="text-slate-300 leading-relaxed">
              I cookie sono piccoli file di testo che i siti web visitati dall'utente inviano al suo dispositivo, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Tipologie di cookie utilizzati</h2>
            <p className="text-slate-300 leading-relaxed">
              Il sito phidesign utilizza esclusivamente <strong className="text-white">cookie tecnici</strong>, necessari al corretto funzionamento del sito e alla navigazione.
            </p>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
              <p className="text-green-400 font-medium">
                ✓ Questi cookie non richiedono il consenso dell'utente.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Cookie di terze parti</h2>
            <p className="text-slate-300 leading-relaxed">
              Il sito utilizza servizi di terze parti che possono installare cookie tecnici:
            </p>
            
            <div className="mt-6 space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                <h3 className="text-white font-semibold mb-2">Google Fonts</h3>
                <p className="text-slate-300 text-sm">
                  Il sito utilizza font forniti da Google Fonts, un servizio di Google LLC, che consente la visualizzazione corretta dei caratteri tipografici.
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  L'utilizzo di Google Fonts può comportare la trasmissione dell'indirizzo IP dell'utente ai server di Google.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                <h3 className="text-white font-semibold mb-2">CDN e servizi tecnici</h3>
                <p className="text-slate-300 text-sm">Il sito utilizza:</p>
                <ul className="list-disc list-inside text-slate-400 text-sm mt-2 space-y-1">
                  <li>Vercel per hosting e distribuzione dei contenuti</li>
                  <li>Tailwind CSS CDN per la gestione dello stile del sito</li>
                </ul>
                <p className="text-slate-400 text-sm mt-2">
                  Tali servizi possono utilizzare cookie tecnici necessari al loro funzionamento.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Cookie di profilazione</h2>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-300">
                ❌ Il sito <strong className="text-white">non utilizza cookie di profilazione</strong> né strumenti di tracciamento per finalità pubblicitarie o di marketing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Gestione dei cookie</h2>
            <p className="text-slate-300 leading-relaxed">
              L'utente può configurare il proprio browser per rifiutare o eliminare i cookie.
            </p>
            <p className="text-amber-400 text-sm mt-3">
              ⚠️ La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Modifiche alla Cookie Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              La presente Cookie Policy può essere soggetta a modifiche. Le versioni aggiornate saranno pubblicate su questa pagina.
            </p>
          </section>

        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Torna al sito
          </button>
        </div>
      </div>
    </div>
  );
};
