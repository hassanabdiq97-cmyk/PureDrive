import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Key, Smartphone, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Digital Pre-Check",
    desc: "Kein Papier. Vertrag & ID-Verifikation via Smartphone vor dem Start."
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: "Touchdown LSZG",
    desc: "Wir tracken Ihren Flug. Ihr PureDrive Wagen steht bereit, bevor die Propeller stoppen."
  },
  {
    icon: <Key className="w-6 h-6" />,
    title: "Key Handover",
    desc: "Persönliche Übergabe direkt am GAC oder beim Flugzeug. 5 Minuten bis zur Abfahrt."
  }
];

export const TheGrenchenExperience: React.FC = () => {
  return (
    <section id="airport" className="relative py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 md:flex justify-between items-end">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-sm font-bold text-pure-accent tracking-[0.3em] uppercase mb-4">The Grenchen Experience</h2>
            <h3 className="text-4xl md:text-6xl font-black text-pure-dark leading-tight">
              Vom Cockpit auf <br/>den Asphalt.
            </h3>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/3 mt-8 md:mt-0"
          >
            <p className="text-gray-500 font-light text-lg">
              Zeit ist Ihr wertvollstes Gut. Unser VIP-Prozess am Flughafen Grenchen eliminiert Wartezeiten vollständig.
            </p>
          </motion.div>
        </div>

        {/* The "Runway" Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-0 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 px-8 md:px-16">
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                    <div className="w-12 h-12 bg-pure-dark text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-pure-dark/20">
                      {step.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-pure-dark mb-2">{step.title}</h4>
                    <p className="text-gray-500 leading-relaxed max-w-sm">{step.desc}</p>
                  </div>
                </div>

                {/* Center Marker */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-pure-accent rounded-full ring-4 ring-white shadow-lg" />
                </div>

                {/* Empty Side for Balance */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 p-12 rounded-[2rem] bg-pure-dark relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-pure-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Bereit für den Take-off?</h3>
            <button className="px-10 py-4 bg-white text-pure-dark rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 mx-auto">
              VIP Service Buchen
              <CheckCircle size={20} className="text-pure-accent" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};