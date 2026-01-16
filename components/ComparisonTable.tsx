import React from 'react';
import { Check, X } from 'lucide-react';
import { COMPARISONS } from '../constants';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-dark mb-4">Der PureDrive Standard</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wir definieren Autovermietung neu. Keine Kompromisse, volle Transparenz.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-12 bg-pure-dark text-white p-6 font-semibold tracking-wide">
            <div className="col-span-4">FEATURE</div>
            <div className="col-span-4 text-center text-pure-accent">PUREDRIVE</div>
            <div className="col-span-4 text-center text-gray-500">KONKURRENZ</div>
          </div>
          
          {COMPARISONS.map((item, index) => (
            <div key={index} className={`grid grid-cols-12 p-6 items-center ${index !== COMPARISONS.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-slate-50 transition-colors`}>
              <div className="col-span-4 font-medium text-gray-800 flex items-center gap-2">
                {item.feature}
              </div>
              <div className="col-span-4 text-center font-bold text-pure-accent flex justify-center items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-pure-accent">
                    <Check size={14} strokeWidth={3} />
                </div>
                {item.us}
              </div>
              <div className="col-span-4 text-center text-gray-400 flex justify-center items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <X size={14} strokeWidth={3} />
                </div>
                {item.others}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};