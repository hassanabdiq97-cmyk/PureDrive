import React, { useState } from 'react';
import { ArrowRight, MapPin, Plane, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hq' | 'airport'>('hq');
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleImg = useTransform(scrollY, [0, 500], [1, 1.1]);
  const yWidget = useTransform(scrollY, [0, 500], [0, -50]);

  const scrollToFleet = () => {
    const element = document.getElementById('flotte');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[110vh] flex flex-col items-center justify-start pt-32 overflow-hidden bg-pure-dark">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pure-dark via-transparent to-pure-dark z-10" />
        <motion.div 
          style={{ scale: scaleImg }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        
        {/* Brand Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-pure-accent text-xs font-bold tracking-[0.2em] uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-pure-accent animate-pulse shadow-[0_0_10px_#0ea5e9]" />
          Swiss Excellence
        </motion.div>

        {/* Cinematic Title */}
        <motion.h1 
          style={{ y: yText, opacity: opacityText }}
          className="text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 mb-12 mix-blend-overlay"
        >
          PURE<br/>DRIVE
        </motion.h1>

        {/* Floating Booking Widget */}
        <motion.div 
          style={{ y: yWidget }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          className="w-full max-w-4xl"
        >
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 shadow-2xl shadow-pure-accent/10">
            <div className="bg-pure-dark/40 rounded-2xl p-6 md:p-8 border border-white/5">
              
              {/* Tab Switcher */}
              <div className="flex justify-center mb-8">
                <div className="bg-white/5 p-1 rounded-xl inline-flex border border-white/5">
                  <button 
                    onClick={() => setActiveTab('hq')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'hq' ? 'bg-white text-pure-dark shadow-lg' : 'text-gray-400 hover:text-white'}`}
                  >
                    <MapPin size={16} />
                    Depot Lengnau
                  </button>
                  <button 
                    onClick={() => setActiveTab('airport')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'airport' ? 'bg-pure-accent text-white shadow-[0_0_20px_rgba(14,165,233,0.3)]' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Plane size={16} />
                    Airport LSZG
                  </button>
                </div>
              </div>

              {/* Input Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold text-pure-accent tracking-widest uppercase ml-1">Abholung</label>
                  <div className="relative">
                    <input type="date" className="w-full h-14 pl-4 pr-4 bg-white/5 border border-white/10 rounded-xl focus:ring-1 focus:ring-pure-accent focus:border-pure-accent outline-none text-white font-medium transition-all hover:bg-white/10" />
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold text-pure-accent tracking-widest uppercase ml-1">Rückgabe</label>
                  <div className="relative">
                    <input type="date" className="w-full h-14 pl-4 pr-4 bg-white/5 border border-white/10 rounded-xl focus:ring-1 focus:ring-pure-accent focus:border-pure-accent outline-none text-white font-medium transition-all hover:bg-white/10" />
                  </div>
                </div>
                <div className="flex items-end">
                  <button 
                    onClick={scrollToFleet}
                    className="w-full h-14 bg-white hover:bg-gray-100 text-pure-dark rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Fahrzeug finden</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Status Line */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400 font-light">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                {activeTab === 'hq' ? 'Solothurnstrasse 44, Lengnau' : 'Direkte Zustellung zum GAC / Rollfeld'}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ArrowDown size={32} />
      </motion.div>
    </div>
  );
};