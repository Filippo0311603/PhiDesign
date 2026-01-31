import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
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
            <Shield className="text-cyan-400" size={28} />
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          </div>
        </div>

        <p className="text-slate-400 mb-8">Ultimo aggiornamento: 31 gennaio 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Titolare del trattamento</h2>
            <p className="text-slate-300 leading-relaxed">
              Il Titolare del trattamento dei dati personali è:
            </p>
            <div className="bg-slate-800/50 rounded-lg p-4 mt-3 border border-slate-700">
              <p className="text-white font-medium">Filippo Leotta</p>
              <p className="text-slate-400">Email: info.phidesignweb@gmail.com</p>
            </div>
            <p className="text-slate-300 mt-3">
              Il Titolare opera in qualità di persona fisica e studente, senza partita IVA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Tipologia di dati trattati</h2>
            <p className="text-slate-300 leading-relaxed">
              Il sito web phidesign è un sito vetrina che non prevede registrazione né login degli utenti.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              I dati personali raccolti sono esclusivamente quelli forniti volontariamente dall'utente tramite il form di contatto, ovvero:
            </p>
            <ul className="list-disc list-inside text-slate-300 mt-3 space-y-1">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Contenuto del messaggio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Finalità del trattamento</h2>
            <p className="text-slate-300 leading-relaxed">
              I dati personali sono trattati esclusivamente per le seguenti finalità:
            </p>
            <ul className="list-disc list-inside text-slate-300 mt-3 space-y-1">
              <li>Rispondere a richieste di informazioni</li>
              <li>Gestire comunicazioni inviate tramite il form di contatto</li>
              <li>Valutare eventuali collaborazioni professionali</li>
            </ul>
            <p className="text-slate-300 mt-3">
              I dati non saranno utilizzati per finalità di marketing né per invio di comunicazioni promozionali.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Base giuridica del trattamento</h2>
            <p className="text-slate-300 leading-relaxed">
              Il trattamento dei dati si basa sul consenso dell'utente, espresso mediante l'invio volontario del form di contatto.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Modalità del trattamento</h2>
            <p className="text-slate-300 leading-relaxed">
              Il trattamento dei dati avviene con strumenti informatici e telematici, adottando misure di sicurezza adeguate a prevenire accessi non autorizzati, divulgazione, modifica o distruzione dei dati.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Conservazione dei dati</h2>
            <p className="text-slate-300 leading-relaxed">
              I dati personali saranno conservati per il tempo strettamente necessario a rispondere alle richieste ricevute e comunque non oltre 12 mesi, salvo obblighi di legge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Comunicazione dei dati a terzi</h2>
            <p className="text-slate-300 leading-relaxed">
              I dati personali non saranno diffusi.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Potranno essere trattati da soggetti terzi che forniscono servizi tecnici e di hosting del sito web, quali:
            </p>
            <ul className="list-disc list-inside text-slate-300 mt-3 space-y-1">
              <li>Vercel Inc. (servizio di hosting e distribuzione dei contenuti)</li>
              <li>Aruba S.p.A. (eventuale servizio di dominio o posta elettronica)</li>
            </ul>
            <p className="text-slate-300 mt-3">
              Tali soggetti operano in qualità di Responsabili del trattamento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Diritti dell'interessato</h2>
            <p className="text-slate-300 leading-relaxed">
              Ai sensi del Regolamento UE 2016/679 (GDPR), l'utente ha il diritto di:
            </p>
            <ul className="list-disc list-inside text-slate-300 mt-3 space-y-1">
              <li>Accedere ai propri dati personali</li>
              <li>Chiederne la rettifica o la cancellazione</li>
              <li>Opporsi o richiedere la limitazione del trattamento</li>
            </ul>
            <p className="text-slate-300 mt-3">
              Le richieste possono essere inviate all'indirizzo email: <span className="text-cyan-400">info.phidesignweb@gmail.com</span>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Modifiche alla presente Privacy Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina.
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
