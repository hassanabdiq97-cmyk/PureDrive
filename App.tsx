import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FleetSlider } from './components/FleetSlider';
import { BookingOverlay } from './components/BookingOverlay';
import { ComparisonTable } from './components/ComparisonTable';
import { TheGrenchenExperience } from './components/TheGrenchenExperience';
import { FLEET_DATA } from './constants';
import { Car } from './types';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [bookingCar, setBookingCar] = useState<Car | null>(null);

  return (
    <div className="min-h-screen bg-white font-inter selection:bg-pure-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <TheGrenchenExperience />

        <FleetSlider cars={FLEET_DATA} onBook={setBookingCar} />

        <ComparisonTable />

        {/* Location Reveal Section */}
        <section id="standort" className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-sm font-bold text-pure-accent tracking-[0.3em] uppercase mb-4">Hauptsitz</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-pure-dark mb-8">
                            Strategisch <br/> Platziert.
                        </h3>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            Unser Depot an der Solothurnstrasse 44 in Lengnau ist der perfekte Knotenpunkt zwischen Bern, Biel und Solothurn.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-gray-100">
                                <div className="w-12 h-12 bg-pure-dark text-white rounded-xl flex items-center justify-center">
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className="font-bold text-pure-dark">PureDrive HQ</h4>
                                    <p className="text-gray-500 text-sm">Solothurnstrasse 44, 2543 Lengnau</p>
                                </div>
                            </div>
                            <button className="text-pure-accent font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                Route berechnen <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 h-[500px] w-full bg-slate-200 rounded-[2rem] overflow-hidden relative shadow-2xl"
                    >
                        {/* Styled Map Placeholder */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2715.485606497214!2d7.362981315843468!3d47.18431097915893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47918f6c5e7b7f1d%3A0x6b7e7c7e7c7e7c7e!2sSolothurnstrasse%2044%2C%202543%20Lengnau!5e0!3m2!1sen!2sch!4v1620000000000!5m2!1sen!2sch" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
                            loading="lazy"
                        ></iframe>
                        <div className="absolute inset-0 pointer-events-none border-[12px] border-white/50 rounded-[2rem]" />
                    </motion.div>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-pure-dark text-slate-400 py-24 border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
                <h4 className="text-white font-bold text-xl mb-8 tracking-tight">PUREDRIVE.</h4>
                <p className="text-sm leading-relaxed mb-8 font-light">
                  Excellence in Motion.<br/>
                  Defined by Swiss Precision.
                </p>
            </div>
            
            {/* Footer columns... (Keeping simple for clean design) */}
            <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm font-light">
                <div>
                    <h5 className="text-white font-medium mb-4">Explore</h5>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-pure-accent">Airport LSZG</a></li>
                        <li><a href="#" className="hover:text-pure-accent">Collection</a></li>
                        <li><a href="#" className="hover:text-pure-accent">Services</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-white font-medium mb-4">Legal</h5>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-pure-accent">Privacy</a></li>
                        <li><a href="#" className="hover:text-pure-accent">Terms</a></li>
                    </ul>
                </div>
                <div>
                     <h5 className="text-white font-medium mb-4">Connect</h5>
                    <ul className="space-y-2">
                        <li>info@puredrive.ch</li>
                        <li>+41 32 123 45 67</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-xs text-center text-slate-600">
            &copy; {new Date().getFullYear()} PureDrive Switzerland. Designed for Excellence.
        </div>
      </footer>

      {/* Booking Overlay Modal */}
      {bookingCar && (
        <BookingOverlay 
          car={bookingCar} 
          onClose={() => setBookingCar(null)} 
        />
      )}
    </div>
  );
}

export default App;