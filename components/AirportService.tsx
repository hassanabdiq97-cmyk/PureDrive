import React from 'react';
import { Plane, Key, FileCheck, Clock } from 'lucide-react';

export const AirportService: React.FC = () => {
  return (
    <section id="airport" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-pure-accent/10 rounded-full z-0"></div>
             <img 
               src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=800&q=80" 
               alt="Private Jet at Grenchen" 
               className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
             />
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border border-gray-50 hidden md:block">
               <div className="flex items-center gap-3 mb-2">
                 <Clock className="text-pure-accent" />
                 <span className="font-bold text-slate-900">High-Speed Transfer</span>
               </div>
               <p className="text-sm text-gray-500">Vom Depot Lengnau zum Rollfeld Grenchen in nur 5 Minuten.</p>
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-xs font-bold text-pure-accent tracking-widest uppercase mb-2">Aviation Partner LSZG</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Sie landen, wir stehen bereit.</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Für Piloten und Business-Reisende am Regionalflughafen Grenchen (LSZG). 
              Vergessen Sie Taxis oder Wartezeiten. Ihr Mietwagen wird direkt am GAC oder beim Flugzeug übergeben.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-pure-dark shrink-0">
                  <FileCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">1. Digitales Onboarding</h4>
                  <p className="text-sm text-gray-500">Vertrag und ID-Check erledigen Sie bequem vor Abflug auf dem Smartphone.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-pure-dark shrink-0">
                  <Plane size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">2. Landung & Übergabe</h4>
                  <p className="text-sm text-gray-500">Wir tracken Ihren Flug. Bei Ankunft steht das Auto direkt bereit.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-pure-dark shrink-0">
                  <Key size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">3. Einsteigen & Losfahren</h4>
                  <p className="text-sm text-gray-500">Kein Schalter. Schlüsselübergabe persönlich am Rollfeld.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};