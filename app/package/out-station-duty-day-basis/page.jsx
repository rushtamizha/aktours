"use client";

import React, { useState } from 'react';
import { 
  Car, Clock, ChevronDown, ChevronUp, Info, Navigation, 
  AlertCircle, MessageCircle, Calendar, Zap, Mountain
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DAY_BASIS_DATA = [
  { name: "Indigo / Zest A/C (Sedan)", rent: "2,450", freeKm: "100", extraKm: "11.00", driver: "400", total: "2,850" },
  { name: "Logan / Verito A/C (Sedan)", rent: "2,450", freeKm: "100", extraKm: "11.00", driver: "400", total: "2,850" },
  { name: "Swift Dzire A/C (Sedan)", rent: "2,450", freeKm: "100", extraKm: "11.00", driver: "400", total: "2,850" },
  { name: "Toyota Etios A/C (Sedan)", rent: "2,450", freeKm: "100", extraKm: "11.00", driver: "400", total: "2,850" },
  { name: "Tavera A/C (SUV)", rent: "3,500", freeKm: "100", extraKm: "15.00", driver: "400", total: "3,900" },
  { name: "Mahindra Xylo A/C (SUV)", rent: "3,500", freeKm: "100", extraKm: "15.00", driver: "400", total: "3,900" },
  { name: "Innova A/C (SUV)", rent: "3,500", freeKm: "100", extraKm: "15.00", driver: "400", total: "3,900" },
  { name: "Innova Crysta A/C (SUV)", rent: "4,800", freeKm: "100", extraKm: "16.00", driver: "400", total: "5,200" },
  { name: "Traveller A/C (14-seater)", rent: "5,000", freeKm: "100", extraKm: "19.00", driver: "500", total: "5,500" },
  { name: "Coach (25-seater)", rent: "5,500", freeKm: "100", extraKm: "20.00", driver: "500", total: "6,000" },
];

const OutstationDayBasisPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleWhatsApp = (car) => {
    const whatsappNum = "918190022220";
    const text = `*Outstation Day-Basis Booking*%0A` +
                 `📍 *Trip Type:* Outstation (Day Basis)%0A` +
                 `🚗 *Vehicle:* ${car.name}%0A` +
                 `🛣️ *Free KMs:* ${car.freeKm} Kms/Day%0A` +
                 `💰 *Base Total:* ₹${car.total}%0A` +
                 `--------------------------%0A` +
                 `I am interested in the Day Basis plan. Please check availability.`;
    window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-blue-100">
            <Calendar size={14} /> Short Distance Outstation
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Outstation <span className="text-orange-600">Day Basis</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium max-w-2xl mx-auto">
            Ideal for shorter trips (under 300km/day). Includes set free kilometers per day 
            with transparent pricing for any extra distance.
          </p>
        </div>

        {/* List of Vehicles */}
        <div className="space-y-4">
          {DAY_BASIS_DATA.map((car, idx) => (
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
                         <Navigation size={10} /> {car.freeKm} Kms Free / Day
                       </span>
                       <span className="text-[10px] text-slate-300 hidden md:block">|</span>
                       <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-1">
                         ₹{car.extraKm} / Extra Km
                       </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:block text-right">
                    <span className="text-[10px] font-black uppercase text-slate-400 block tracking-tight text-right">Per Day Base</span>
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
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <h4 className="text-[10px] font-black text-slate-400 uppercase mb-1">Rent / Day</h4>
                          <p className="text-sm font-black text-slate-900">₹{car.rent}</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <h4 className="text-[10px] font-black text-slate-400 uppercase mb-1">Driver Batta</h4>
                          <p className="text-sm font-black text-slate-900">₹{car.driver}</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <h4 className="text-[10px] font-black text-slate-400 uppercase mb-1">Included Km</h4>
                          <p className="text-sm font-black text-slate-900">{car.freeKm} Kms</p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                          <h4 className="text-[10px] font-black text-orange-600 uppercase mb-1">Extra Km Fare</h4>
                          <p className="text-sm font-black text-slate-900">₹{car.extraKm}</p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-slate-900 rounded-3xl">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
                            <Zap size={20} />
                          </div>
                          <div>
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Estimated Daily Total</p>
                            <h4 className="text-white text-2xl font-black">₹{car.total}.00 <span className="text-xs font-normal text-slate-500 italic">+ Extra Kms</span></h4>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleWhatsApp(car)}
                          className="w-full md:w-auto bg-orange-500 hover:bg-orange-400 text-slate-900 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 transition-all"
                        >
                          <MessageCircle size={18} fill="currentColor" />
                          Book Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Dynamic Tariff Alert */}
        <div className="mt-8 bg-amber-50 rounded-3xl p-6 border border-amber-200 flex flex-col md:flex-row items-center gap-6">
           <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
             <AlertCircle size={32} />
           </div>
           <div>
             <h4 className="text-sm font-black text-amber-900 uppercase tracking-tight mb-1">Tariff Switch Alert</h4>
             <p className="text-xs text-amber-800 leading-relaxed font-medium">
                If your average usage exceeds <span className="font-black underline">300 Kms/Day</span>, the billing will automatically shift to our <span className="font-black text-amber-900">KM-Basis Tariff</span> for better value.
             </p>
           </div>
        </div>

        {/* Policy Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <h4 className="text-sm font-black uppercase tracking-tight text-slate-900 mb-6">Booking Policies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex gap-3 text-xs font-medium text-slate-500 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  Calculated Garage-to-Garage (Office to Office).
                </li>
                <li className="flex gap-3 text-xs font-medium text-slate-500 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  Parking and Toll charges extra.
                </li>
                <li className="flex gap-3 text-xs font-medium text-slate-500 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  Calendar day logic (Midnight to Midnight).
                </li>
              </ul>
              <div className="bg-slate-50 p-5 rounded-2xl">
                 <p className="text-[10px] text-slate-400 font-black uppercase mb-2">Driver Night Allowance</p>
                 <p className="text-[10px] text-slate-600 font-medium leading-relaxed">
                   Extra batta applies if driving between <span className="text-slate-900 font-bold">10:00 PM and 6:00 AM</span>.
                 </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0B0C10] rounded-3xl p-8 text-white flex flex-col justify-center border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <Mountain className="text-[#D4AF37]" size={24} />
              <h4 className="text-sm font-black uppercase tracking-widest text-[#D4AF37]">Hill Station Note</h4>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
              Hill trips attract extra charges. A/C will be turned off in upward hill sections and while the vehicle is parked.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OutstationDayBasisPage;