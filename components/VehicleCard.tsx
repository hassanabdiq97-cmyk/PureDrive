import React from 'react';
import { motion } from 'framer-motion';
import { Car, Fuel, Zap, Settings, Gauge, ArrowUpRight } from 'lucide-react';
import type { Car as CarType } from '../types';

interface VehicleCardProps {
  car: CarType;
  onBook: (car: CarType) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ car, onBook }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative min-w-[320px] md:min-w-[400px] bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-[2rem] overflow-hidden flex flex-col h-[500px] shadow-2xl"
    >
      {/* Image Section */}
      <div className="h-1/2 relative overflow-hidden bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10" />
        <img 
          src={car.image} 
          alt={car.name} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale-[20%] group-hover:grayscale-0"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-wider">
            {car.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow p-8 flex flex-col justify-between relative z-20 bg-gradient-to-b from-transparent to-slate-950/50">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{car.name}</h3>
          
          {/* Specs */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Settings size={14} className="text-pure-accent" />
              <span>{car.specs.transmission}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              {car.specs.fuel === 'Elektro' ? <Zap size={14} className="text-yellow-400" /> : <Fuel size={14} className="text-pure-accent" />}
              <span>{car.specs.fuel}</span>
            </div>
            {car.specs.range && (
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Gauge size={14} className="text-pure-accent" />
                <span>{car.specs.range} km</span>
              </div>
            )}
             <div className="flex items-center gap-2 text-sm text-gray-400">
                <Car size={14} className="text-pure-accent" />
                <span>{car.specs.seats} Sitze</span>
             </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-end justify-between pt-6 border-t border-white/10 mt-6">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Tagespreis</p>
            <p className="text-3xl font-light text-white">
              <span className="text-lg align-top mr-1">CHF</span>
              {car.pricePerDay}
            </p>
          </div>
          
          <button 
            onClick={() => onBook(car)}
            disabled={!car.isAvailable}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              car.isAvailable 
                ? 'bg-pure-accent text-white hover:bg-white hover:text-pure-dark shadow-lg shadow-pure-accent/20' 
                : 'bg-gray-800 text-gray-600 cursor-not-allowed'
            }`}
          >
            <ArrowUpRight size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};