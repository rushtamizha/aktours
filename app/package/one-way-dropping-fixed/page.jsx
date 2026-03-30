"use client";

import React, { useState } from 'react';
import { 
  Car, MapPin, ChevronDown, ChevronUp, Info, Navigation, 
  Plane, Flower2, Mountain, MessageCircle, AlertCircle, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DROP_DATA = {
  airport: {
    name: "Airport to Hotel",
    description: "Coimbatore Airport to City Limit Hotels",
    icon: <Plane size={20} />,
    vehicles: [
      { name: "Logan / Verito A/C (Sedan)", fare: "900" },
      { name: "Swift Dzire A/C (Sedan)", fare: "900" },
      { name: "Toyota Etios A/C (Sedan)", fare: "900" },
      { name: "Mahindra Xylo A/C (SUV)", fare: "1,350" },
      { name: "Innova A/C (SUV)", fare: "1,350" },
      { name: "Innova Crysta A/C (SUV)", fare: "1,650" },
    ]
  },
  anaikatti: {
    name: "Anaikatti",
    description: "One-way drop to Anaikatti (Hill area)",
    icon: <Mountain size={20} />,
    vehicles: [
      { name: "Logan / Verito A/C (Sedan)", fare: "2,040" },
      { name: "Swift Dzire A/C (Sedan)", fare: "2,040" },
      { name: "Toyota Etios A/C (Sedan)", fare: "2,040" },
      { name: "Mahindra Xylo A/C (SUV)", fare: "3,480" },
      { name: "Innova A/C (SUV)", fare: "3,680" },
      { name: "Innova Crysta A/C (SUV)", fare: "4,750" },
    ]
  },
  isha: {
    name: "Isha Yoga Center",
    description: "Dropping to Adiyogi / Isha Yoga Center",
    icon: <Flower2 size={20} />,
    vehicles: [
      { name: "Logan / Verito A/C (Sedan)", fare: "2,040" },
      { name: "Swift Dzire A/C (Sedan)", fare: "2,040" },
      { name: "Toyota Etios A/C (Sedan)", fare: "2,040" },
      { name: "Mahindra Xylo A/C (SUV)", fare: "3,480" },
      { name: "Innova A/C (SUV)", fare: "3,680" },
      { name: "Innova Crysta A/C (SUV)", fare: "4,500" },
      { name: "Traveller Non-A/C (14s)", fare: "4,650" },
      { name: "Traveller A/C (14s)", fare: "4,850" },
    ]
  }
};

const OneWayDroppingPage = () => {
  const [activeLoc, setActiveLoc] = useState("airport");
  const [openIndex, setOpenIndex] = useState(null);

  const handleWhatsApp = (car, locName) => {
    const whatsappNum = "918190022220";
    const text = `*One-Way Drop Booking*%0A` +
                 `📍 *Destination:* ${locName}%0A` +
                 `🚗 *Vehicle:* ${car.name}%0A` +
                 `💰 *Fixed Fare:* ₹${car.fare}%0A` +
                 `--------------------------%0A` +
                 `I want to book this one-way drop. Please confirm.`;
    window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 font-sans">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            <ShieldCheck size={14} /> Fixed Price Guarantee
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            One Way <span className="text-orange-600">Dropping</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium">Reliable fixed-fare drops from Coimbatore to key locations.</p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(DROP_DATA).map((key) => (
            <button
              key={key}
              onClick={() => { setActiveLoc(key); setOpenIndex(null); }}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all border shadow-sm ${
                activeLoc === key 
                ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-105' 
                : 'bg-white text-slate-400 border-slate-100 hover:border-orange-200 hover:text-slate-600'
              }`}
            >
              {DROP_DATA[key].icon}
              {DROP_DATA[key].name}
            </button>
          ))}
        </div>

        {/* Pricing List */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLoc}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-4"
            >
              {DROP_DATA[activeLoc].vehicles.map((car, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white rounded-3xl border transition-all duration-300 ${openIndex === idx ? 'border-orange-500 shadow-xl' : 'border-slate-100 shadow-sm'}`}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-orange-600 text-white' : 'bg-slate-50 text-slate-400'}`}>
                        <Car size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-base">{car.name}</h3>
                        <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mt-1">Fixed Fare Drop</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <span className="text-[10px] font-black uppercase text-slate-400 block tracking-tight">One-Way Fare</span>
                        <span className="text-xl font-black text-slate-900">₹{car.fare}</span>
                      </div>
                      {openIndex === idx ? <ChevronUp className="text-orange-600" /> : <ChevronDown className="text-slate-300" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="px-6 pb-8 md:px-8 border-t border-slate-50 pt-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                            <Navigation size={18} className="text-orange-500" />
                            <span className="text-xs font-bold text-slate-600">Fixed Point-to-Point Route</span>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                            <Info size={18} className="text-orange-500" />
                            <span className="text-xs font-bold text-slate-600">Deviation Charged Extra</span>
                          </div>
                        </div>

                        <button 
                          onClick={() => handleWhatsApp(car, DROP_DATA[activeLoc].name)}
                          className="w-full bg-slate-900 text-orange-400 py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-orange-600 hover:text-white transition-all"
                        >
                          <MessageCircle size={18} fill="currentColor" />
                          Book One-Way Drop
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Specific Notes for One-Way */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="text-orange-500" size={20} />
            <h4 className="text-sm font-black uppercase tracking-tight text-slate-900">Dropping Policies</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">1</div>
                <p className="text-xs font-medium text-slate-500 leading-relaxed">Cost includes <span className="text-slate-900 font-bold">Cab Rent, Fuel, and Driver Allowance</span>.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">2</div>
                <p className="text-xs font-medium text-slate-500 leading-relaxed">Excludes <span className="text-slate-900 font-bold">Parking and Toll charges</span>.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">3</div>
                <p className="text-xs font-medium text-slate-500 leading-relaxed">A/C will be switched off in <span className="text-slate-900 font-bold">hill/upward sections</span> and parked vehicles.</p>
              </div>
            </div>
            
            <div className="p-6 bg-[#0B0C10] rounded-3xl text-white border border-white/5">
              <h5 className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-3">One-Way Return Policy</h5>
              <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                For one-way outstation trips, customers must pay <span className="text-white">toll, parking, state tax, and return charges</span> required by the driver to reach the original garage location.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-[10px] text-slate-500 italic">
                Night Allowance applies (10:00 PM - 6:00 AM)
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OneWayDroppingPage;