"use client";

import React, { useState } from 'react';
import { 
  Car, Clock, ChevronDown, ChevronUp, Info, Navigation, CheckCircle, MessageCircle, MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOCAL_CITY_DATA = {
  "10hr": {
    title: "10 Hours / 80 Km",
    subtitle: "Full Day City Local",
    limit: "80 Km Free",
    vehicles: [
      { name: "Logan / Verito A/c (Sedan)", total: "2,650", extraHr: "250", extraKm: "13" },
      { name: "Swift Dzire A/C (Sedan)", total: "2,650", extraHr: "250", extraKm: "13" },
      { name: "Toyota Etios A/C (Sedan)", total: "2,650", extraHr: "250", extraKm: "13" },
      { name: "Tavera A/C (SUV)", total: "3,600", extraHr: "250", extraKm: "15" },
      { name: "Mahindra Xylo A/C (SUV)", total: "3,600", extraHr: "300", extraKm: "15" },
      { name: "Innova A/C (SUV)", total: "3,600", extraHr: "300", extraKm: "15" },
      { name: "Innova Crysta A/C (SUV)", total: "4,800", extraHr: "500", extraKm: "17" },
      { name: "Traveller Non A/C (14-seater)", total: "5,000", extraHr: "500", extraKm: "18" },
      { name: "Traveller A/C (14-seater)", total: "5,200", extraHr: "500", extraKm: "19" },
    ]
  },
  "8hr": {
    title: "8 Hours / 80 Km",
    subtitle: "Standard City Local",
    limit: "80 Km Free",
    vehicles: [
      { name: "Logan / Verito A/c (Sedan)", total: "2,450", extraHr: "250", extraKm: "13" },
      { name: "Swift Dzire A/C (Sedan)", total: "2,450", extraHr: "250", extraKm: "13" },
      { name: "Toyota Etios A/C (Sedan)", total: "2,450", extraHr: "250", extraKm: "13" },
      { name: "Tavera A/C (SUV)", total: "3,500", extraHr: "300", extraKm: "15" },
      { name: "Mahindra Xylo A/C (SUV)", total: "3,500", extraHr: "300", extraKm: "15" },
      { name: "Innova A/C (SUV)", total: "3,500", extraHr: "300", extraKm: "15" },
      { name: "Innova Crysta A/C (SUV)", total: "4,400", extraHr: "500", extraKm: "17" },
      { name: "Traveller Non A/C (14-seater)", total: "4,500", extraHr: "500", extraKm: "18" },
      { name: "Traveller A/C (14-seater)", total: "4,800", extraHr: "500", extraKm: "19" },
    ]
  }
};

const CityLocalTaxiPage = () => {
  const [activeTab, setActiveTab] = useState("10hr");
  const [openIndex, setOpenIndex] = useState(null);

  const handleWhatsApp = (vehicle, total, pkg) => {
    const whatsappNum = "918190022220";
    const text = `*City Local Taxi Booking*%0A` +
                 `📍 *Type:* Coimbatore City Local%0A` +
                 `🕒 *Package:* ${pkg}%0A` +
                 `🚗 *Vehicle:* ${vehicle}%0A` +
                 `💰 *Total Amount:* ₹${total}%0A` +
                 `--------------------------%0A` +
                 `I want to book this local taxi package. Please confirm availability.`;
    window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Coimbatore <span className="text-orange-600">City Local</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium max-w-lg mx-auto">
            Hassle-free local travel within Coimbatore city. Choose between 8-hour or 10-hour flexible packages.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-2xl border border-slate-200 flex gap-2 shadow-sm">
            {Object.keys(LOCAL_CITY_DATA).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setOpenIndex(null); }}
                className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
                  activeTab === tab 
                  ? 'bg-slate-900 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {LOCAL_CITY_DATA[tab].title}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Table / List */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {LOCAL_CITY_DATA[activeTab].vehicles.map((car, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white rounded-3xl border transition-all duration-300 ${openIndex === idx ? 'border-orange-500 shadow-xl' : 'border-slate-100 shadow-sm'}`}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${openIndex === idx ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <Car size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 md:text-lg">{car.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                           <span className="text-[10px] font-black uppercase text-orange-600 tracking-widest flex items-center gap-1">
                             <Navigation size={10} /> {LOCAL_CITY_DATA[activeTab].limit}
                           </span>
                           <span className="text-[10px] text-slate-300">|</span>
                           <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-1">
                             <Clock size={10} /> {activeTab === "10hr" ? "10 Hrs" : "8 Hrs"}
                           </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="hidden md:block text-right">
                        <span className="text-[10px] font-black uppercase text-slate-400 block tracking-tight">Total Fare</span>
                        <span className="text-xl font-black text-slate-900">₹{car.total}</span>
                      </div>
                      {openIndex === idx ? <ChevronUp className="text-orange-600" /> : <ChevronDown className="text-slate-300" />}
                    </div>
                  </button>

                  {openIndex === idx && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="px-6 pb-8 md:px-8 border-t border-slate-50 pt-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                          <div>
                            <h4 className="text-[10px] font-black text-slate-400 uppercase mb-1">Extra Hour Fare</h4>
                            <p className="text-sm font-black text-slate-900">₹{car.extraHr} / Hr</p>
                          </div>
                          <Clock size={20} className="text-slate-300" />
                        </div>
                        <div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100 flex items-center justify-between">
                          <div>
                            <h4 className="text-[10px] font-black text-orange-600 uppercase mb-1">After Free Km</h4>
                            <p className="text-sm font-black text-slate-900">₹{car.extraKm} / Km</p>
                          </div>
                          <Navigation size={20} className="text-orange-200" />
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-slate-900 rounded-3xl">
                        <div>
                          <p className="text-slate-400 text-xs font-medium">Estimated Package Total</p>
                          <h4 className="text-white text-3xl font-black italic">₹{car.total}.00</h4>
                        </div>
                        <button 
                          onClick={() => handleWhatsApp(car.name, car.total, LOCAL_CITY_DATA[activeTab].title)}
                          className="w-full md:w-auto bg-orange-500 hover:bg-orange-400 text-slate-900 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 transition-all transform hover:scale-105"
                        >
                          <MessageCircle size={18} fill="currentColor" />
                          Book via WhatsApp
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Important Notes Section */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Info className="text-orange-500" size={20} />
            <h4 className="text-sm font-black uppercase tracking-tight text-slate-900">Booking Terms & Notes</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              <li className="flex gap-3 text-xs font-medium text-slate-500 leading-relaxed">
                <CheckCircle size={14} className="text-orange-500 shrink-0 mt-0.5" />
                Excludes Parking and Toll charges.
              </li>
              <li className="flex gap-3 text-xs font-medium text-slate-500 leading-relaxed">
                <CheckCircle size={14} className="text-orange-500 shrink-0 mt-0.5" />
                Total Km and Time will be calculated from office to office (Garage-to-Garage).
              </li>
            </ul>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <p className="text-[10px] text-amber-800 font-bold uppercase mb-1">Driver Allowance</p>
              <p className="text-[10px] text-amber-700 font-medium leading-relaxed">
                Extra allowance applies if the driver drives after <span className="font-bold">10:00 PM</span> or before <span className="font-bold">6:00 AM</span>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CityLocalTaxiPage;