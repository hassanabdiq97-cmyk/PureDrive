import React, { useState, useEffect } from 'react';
import { Menu, X, Plane, CarFront } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-pure-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter text-white">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pure-accent to-blue-700 flex items-center justify-center text-white shadow-lg shadow-pure-accent/20">
            <CarFront size={20} />
          </div>
          <span>PUREDRIVE</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-light text-sm tracking-widest uppercase text-gray-300">
          <a href="#airport" className="hover:text-white transition-colors flex items-center gap-2 group">
             <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-pure-accent transition-colors" />
             Airport LSZG
          </a>
          <a href="#flotte" className="hover:text-white transition-colors flex items-center gap-2 group">
             <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-pure-accent transition-colors" />
             Flotte
          </a>
          <a href="#standort" className="hover:text-white transition-colors flex items-center gap-2 group">
             <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-pure-accent transition-colors" />
             Lengnau
          </a>
          <button className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-pure-dark transition-all duration-300 font-medium">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-pure-dark p-8 flex flex-col justify-center gap-8 md:hidden z-50">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={32} /></button>
          <a href="#airport" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-white">Airport LSZG</a>
          <a href="#flotte" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-white">Flotte</a>
          <a href="#standort" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-white">Standort</a>
          <button className="w-full py-4 bg-pure-accent text-white rounded-xl font-bold text-xl mt-8">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};