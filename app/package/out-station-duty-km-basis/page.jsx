"use client";

import React, { useState } from 'react';
import { 
  Car, MapPin, ChevronDown, ChevronUp, Info, Navigation, 
  AlertTriangle, MessageCircle, Calendar, ShieldCheck, Mountain
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OUTSTATION_DATA = [
  { name: "Indigo / Zest A/C (Sedan)", minKm: "300", fare: "13.00", driver: "400", total: "4,600", type: "Sedan" },
  { name: "Logan / Verito A/C (Sedan)", minKm: "300", fare: "13.00", driver: "400", total: "4,600", type: "Sedan" },
  { name: "Swift Dzire A/C (Sedan)", minKm: "300", fare: "13.00", driver: "400", total: "4,600", type: "Sedan" },
  { name: "Toyota Etios A/C (Sedan)", minKm: "300", fare: "13.00", driver: "400", total: "4,600", type: "Sedan" },
  { name: "Tavera A/C (SUV)", minKm: "350", fare: "18.00", driver: "400", total: "6,850", type: "SUV" },
  { name: "Mahindra Xylo A/C (SUV)", minKm: "350", fare: "18.00", driver: "400", total: "6,850", type: "SUV" },
  { name: "Innova A/C (SUV)", minKm: "350", fare: "18.00", driver: "400", total: "6,850", type: "SUV" },
  { name: "Innova Crysta A/C (SUV)", minKm: "400", fare: "21.00", driver: "400", total: "9,040", type: "Premium SUV" },
  { name: "Traveller A/C (14-seater)", minKm: "400", fare: "25.00", driver: "500", total: "10,850", type: "Mini Van" },
  { name: "20 Seater A/C Coach", minKm: "400", fare: "37.00", driver: "500", total: "15,850", type: "Coach" },
];

const OutstationPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleWhatsApp = (car) => {
    const whatsappNum = "918190022220";
    const text = `*Outstation Round Trip Booking*%0A` +
                 `📍 *Trip Type:* Round Trip (KM Basis)%0A` +
                 `🚗 *Vehicle:* ${car.name}%0A` +
                 `🛣️ *Min Charge:* ${car.minKm} Kms/Day%0A` +
                 `💰 *Base Amount:* ₹${car.total}%0A` +
                 `--------------------------%0A` +
                 `Please confirm availability for my outstation trip.`;
    window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            <ShieldCheck size={14} /> Verified Outstation Service
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Outstation <span className="text-orange-600">Round Trip</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium max-w-2xl mx-auto">
            Reliable inter-city travel with transparent KM-based pricing. 
            Perfect for family vacations, business trips, and hill station tours.
          </p>
        </div>

        {/* List of Vehicles */}
        <div className="space-y-4">
          {OUTSTATION_DATA.map((car, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl border transition-all duration-300 ${openIndex === idx ? 'border-orange-500 shadow-xl' : 'border-slate-100 shadow-sm'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-orange-600 text-white' : 'bg-slate-50 text-slate-400'}`}>
                    <Car size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base md:text-lg">{car.name}</h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                       <span className="text-[10px] font-black uppercase text-orange-600 tracking-widest flex items-center gap-1">
                         <Navigation size={10} /> {car.minKm} Kms / Day Min.
                       </span>
                       <span className="text-[10px] text-slate-300 hidden md:block">|</span>
                       <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-1">
                         ₹{car.fare} / Km
                       </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:block text-right">
                    <span className="text-[10px] font-black uppercase text-slate-400 block tracking-tight">Daily Base Fare</span>
                    <span className="text-xl font-black text-slate-900">₹{car.total}</span>
                  </div>
                  {openIndex === idx ? <ChevronUp className="text-orange-600" /> : <ChevronDown className="text-slate-300" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 md:px-8 border-t border-slate-50 pt-6">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <h4 className="text-[10px] font-black text-slate-400 uppercase mb-1">Driver Allowance</h4>
                          <p className="text-sm font-black text-slate-900">₹{car.driver} / Day</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <h4 className="text-[10px] font-black text-slate-400 uppercase mb-1">Minimum Kms</h4>
                          <p className="text-sm font-black text-slate-900">{car.minKm} Kms / Day</p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                          <h4 className="text-[10px] font-black text-orange-600 uppercase mb-1">Extra Km Fare</h4>
                          <p className="text-sm font-black text-slate-900">₹{car.fare} / Km</p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-slate-900 rounded-3xl">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-orange-400">
                            <Info size={20} />
                          </div>
                          <div>
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Estimated Daily Base</p>
                            <h4 className="text-white text-2xl font-black">₹{car.total}.00 <span className="text-xs font-normal text-slate-500 italic">+ Extras</span></h4>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleWhatsApp(car)}
                          className="w-full md:w-auto bg-orange-500 hover:bg-orange-400 text-slate-900 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95"
                        >
                          <MessageCircle size={18} fill="currentColor" />
                          Book Round Trip
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Terms and Hill Station Notes */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-orange-500" size={20} />
              <h4 className="text-sm font-black uppercase tracking-tight text-slate-900">Important Terms</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex gap-3 text-xs font-medium text-slate-500 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  Parking, Toll and Interstate permit charges extra.
                </li>
                <li className="flex gap-3 text-xs font-medium text-slate-500 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  One day = Calendar day (12:00 AM to 11:59 PM).
                </li>
                <li className="flex gap-3 text-xs font-medium text-slate-500 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  Calculation starts/ends at our office (Garage-to-Garage).
                </li>
              </ul>
              <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100">
                <p className="text-[10px] text-amber-800 font-black uppercase mb-2 flex items-center gap-2">
                  <AlertTriangle size={12} /> Night Driver Allowance
                </p>
                <p className="text-[10px] text-amber-700 font-medium leading-relaxed">
                  Extra allowance applies if the duty falls between <span className="font-bold text-amber-900">10:00 PM and 6:00 AM</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0F172A] rounded-3xl p-8 text-white flex flex-col justify-center border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <Mountain className="text-orange-400" size={24} />
              <h4 className="text-sm font-black uppercase tracking-widest text-orange-400">Hill Station Policy</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              For hill trips, Hill Station Charges and Night Halt charges apply. 
              <br /><br />
              <span className="text-slate-200">Note: A/C will be switched off in uphill sections and while parked/stopped for passenger safety and engine cooling.</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OutstationPage;