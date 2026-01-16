import React, { useState, useEffect } from 'react';
import { X, Calendar, CreditCard, ShieldCheck, CheckCircle } from 'lucide-react';
import { Car, BookingDetails } from '../types';

interface BookingOverlayProps {
  car: Car | null;
  onClose: () => void;
}

export const BookingOverlay: React.FC<BookingOverlayProps> = ({ car, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [details, setDetails] = useState<BookingDetails>({
    startDate: '',
    endDate: '',
    pickupLocation: 'hq',
    totalPrice: 0,
    paymentMethod: null,
  });

  useEffect(() => {
    if (car && details.startDate && details.endDate) {
      const start = new Date(details.startDate);
      const end = new Date(details.endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1; // Minimum 1 day
      setDetails(prev => ({ ...prev, totalPrice: diffDays * car.pricePerDay }));
    }
  }, [details.startDate, details.endDate, car]);

  if (!car) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom-10 duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-slate-50">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Reservierung</h3>
            <p className="text-sm text-gray-500">{car.name}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          
          {/* Progress Bar */}
          <div className="flex items-center justify-center mb-8 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-2 rounded-full flex-1 transition-all ${i <= step ? 'bg-pure-accent' : 'bg-gray-200'}`} />
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <Calendar className="text-pure-accent" />
                Details wählen
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Abholung</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pure-accent focus:border-transparent outline-none"
                    onChange={(e) => setDetails({...details, startDate: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Rückgabe</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pure-accent focus:border-transparent outline-none"
                    onChange={(e) => setDetails({...details, endDate: e.target.value})}
                  />
                </div>
              </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Abholort</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pure-accent focus:border-transparent outline-none bg-white"
                    onChange={(e) => setDetails({...details, pickupLocation: e.target.value as any})}
                  >
                    <option value="hq">Lengnau HQ (Solothurnstrasse 44)</option>
                    <option value="lszg">Grenchen Airport LSZG (VIP Transfer)</option>
                  </select>
                </div>

              <div className="bg-sky-50 p-4 rounded-lg flex items-start gap-3 border border-sky-100">
                <ShieldCheck className="text-pure-accent flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-sky-900">All-Inclusive Schutz</p>
                  <p className="text-xs text-sky-700 mt-1">
                    Vollkasko, Diebstahlschutz und Pannenhilfe sind im Preis bereits enthalten. 
                    Keine versteckten Gebühren.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-gray-100 pt-6 mt-6">
                <div>
                  <p className="text-sm text-gray-500">Gesamtpreis (CHF)</p>
                  <p className="text-3xl font-bold text-pure-dark">{details.totalPrice > 0 ? details.totalPrice : car.pricePerDay}</p>
                </div>
                <button 
                  onClick={() => setStep(2)}
                  disabled={!details.startDate || !details.endDate}
                  className="bg-pure-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-pure-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Weiter
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <CreditCard className="text-pure-accent" />
                Zahlungsmethode
              </h4>

              <div className="grid grid-cols-1 gap-3">
                <button 
                  onClick={() => setDetails({...details, paymentMethod: 'twint'})}
                  className={`p-4 border rounded-xl flex items-center justify-between transition-all ${details.paymentMethod === 'twint' ? 'border-pure-accent bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded flex items-center justify-center text-white font-bold text-xs">TWINT</div>
                    <span className="font-medium">TWINT</span>
                  </div>
                  {details.paymentMethod === 'twint' && <CheckCircle className="text-pure-accent" />}
                </button>

                <button 
                  onClick={() => setDetails({...details, paymentMethod: 'creditcard'})}
                  className={`p-4 border rounded-xl flex items-center justify-between transition-all ${details.paymentMethod === 'creditcard' ? 'border-pure-accent bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-600">
                        <CreditCard size={20} />
                     </div>
                    <span className="font-medium">Kreditkarte</span>
                  </div>
                  {details.paymentMethod === 'creditcard' && <CheckCircle className="text-pure-accent" />}
                </button>

                <button 
                  onClick={() => setDetails({...details, paymentMethod: 'applepay'})}
                  className={`p-4 border rounded-xl flex items-center justify-between transition-all ${details.paymentMethod === 'applepay' ? 'border-pure-accent bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-600">
                       <span className="text-xs font-bold">Pay</span>
                    </div>
                    <span className="font-medium">Apple Pay</span>
                  </div>
                  {details.paymentMethod === 'applepay' && <CheckCircle className="text-pure-accent" />}
                </button>
              </div>

              <div className="flex justify-between items-center border-t border-gray-100 pt-6 mt-6">
                <button onClick={() => setStep(1)} className="text-gray-500 hover:text-gray-800 font-medium px-4">Zurück</button>
                <button 
                  onClick={() => setStep(3)}
                  disabled={!details.paymentMethod}
                  className="bg-pure-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-pure-accent transition-colors disabled:opacity-50"
                >
                  Kostenpflichtig buchen
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col items-center text-center py-8 animate-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <CheckCircle size={40} />
              </div>
              <h4 className="text-2xl font-bold text-pure-dark mb-2">Buchung bestätigt!</h4>
              <p className="text-gray-600 mb-8 max-w-sm">
                Vielen Dank. Ihr digitaler Mietvertrag wurde soeben erstellt und an Ihre E-Mail gesendet.
              </p>
              
              <div className="w-full bg-slate-50 p-6 rounded-xl text-left mb-8 border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Fahrzeug</p>
                <p className="font-bold text-slate-900 mb-4">{car.name}</p>
                <div className="flex justify-between mb-2">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Abholung</p>
                        <p className="font-medium text-slate-900">{details.startDate}</p>
                    </div>
                    <div className="text-right">
                         <p className="text-sm text-gray-500 mb-1">Rückgabe</p>
                         <p className="font-medium text-slate-900">{details.endDate}</p>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                   <p className="text-sm text-gray-500 mb-1">Ort</p>
                   <p className="font-medium text-slate-900">
                     {details.pickupLocation === 'hq' ? 'Solothurnstrasse 44, Lengnau' : 'Airport Grenchen (LSZG) - GAC'}
                   </p>
                </div>
              </div>

              <button 
                onClick={onClose}
                className="w-full bg-pure-dark text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors"
              >
                Zurück zur Startseite
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};