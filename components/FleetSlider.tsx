import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { VehicleCard } from './VehicleCard';
import { Car } from '../types';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface FleetSliderProps {
  cars: Car[];
  onBook: (car: Car) => void;
}

export const FleetSlider: React.FC<FleetSliderProps> = ({ cars, onBook }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="flotte" className="py-32 bg-pure-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-pure-accent/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between relative z-10">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            The Collection
          </motion.h2>
          <p className="text-gray-400 font-light">Kuratiert für Leistung und Komfort.</p>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-white/10 hover:bg-white/10 flex items-center justify-center text-white transition-all active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-white/10 hover:bg-white/10 flex items-center justify-center text-white transition-all active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-6 md:px-[15vw] pb-12 snap-x snap-mandatory no-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {cars.map((car) => (
          <div key={car.id} className="snap-center">
             <VehicleCard car={car} onBook={onBook} />
          </div>
        ))}
        {/* Spacer for right padding */}
        <div className="w-12 shrink-0" />
      </div>
    </section>
  );
};