"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Car, 
  CheckCircle, 
  Phone, 
  Info, 
  Star, 
  Calendar, 
  MessageCircle, 
  ShieldCheck, 
  ChevronRight,
  Navigation
} from 'lucide-react';

// Unified Data Source
const TEMPLE_PACKAGES = [
  {
    id: "cbe-sabarimala-2d",
    route: "Coimbatore - Sabarimala - Coimbatore",
    duration: "2 Days / 1 Night",
    mkt: "720",
    description: "Sabarimala Sree Dharma Sastha Temple, dedicated to Lord Ayyappa, is situated on a hilltop 3000ft above sea level. Vehicles can go up to Pampa.",
    itinerary: ["Departure from Coimbatore to Sabarimala Pampa.", "Trek to Sannidhanam, Dharsan and return to Coimbatore."],
    pricing: [
      { vehicle: "Swift Dzire (Sedan)", price: "13,100" },
      { vehicle: "Innova A/C (SUV)", price: "16,650" },
      { vehicle: "Innova Crysta Luxury", price: "19,580" },
      { vehicle: "Traveller (14 Seater)", price: "24,300" }
    ]
  },
  {
    id: "cbe-palani-1d",
    route: "Coimbatore - Palani - Coimbatore",
    duration: "1 Day Trip",
    mkt: "105",
    description: "Visit the world-famous Arulmigu Dhandayuthapani Swamy Temple, one of the Arupadai Veedu of Lord Murugan.",
    itinerary: ["Early morning pickup from Coimbatore.", "Palani Dharsan and evening drop back."],
    pricing: [
      { vehicle: "Sedan (4 Seater)", price: "4,500" },
      { vehicle: "SUV (7 Seater)", price: "6,200" }
    ]
  }
];

const TempleTourPage = () => {
  const [selectedPkg, setSelectedPkg] = useState(TEMPLE_PACKAGES[0]);
  const WHATSAPP_NUMBER = "918190022220"; 

  const handleWhatsAppBook = () => {
    const message = `*Temple Tour Inquiry*%0A` +
                    `--------------------------%0A` +
                    `📍 *Route:* ${selectedPkg.route}%0A` +
                    `⏳ *Duration:* ${selectedPkg.duration}%0A` +
                    `🔖 *MKT ID:* ${selectedPkg.mkt}%0A` +
                    `--------------------------%0A` +
                    `Please check availability for this package!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 overflow-hidden">
      {/* Premium Header Section */}
      <header className="bg-[#020617] pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/10 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-orange-500/20"
          >
            <Star size={14} fill="currentColor" /> Spiritual Excellence
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
          >
            Divine <br />
            <span className="text-orange-500 text-6xl md:text-9xl">Circuits.</span>
          </motion.h1>
          <p className="text-slate-400 mt-8 max-w-xl text-sm md:text-base font-medium leading-relaxed mx-auto lg:mx-0">
            Premium pilgrimage services from Coimbatore. Expert pilots, sanitized vehicles, and meticulously planned itineraries for your spiritual peace.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 -mt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-2">
                <Navigation size={14} className="text-orange-500" /> Select Your Path
              </h3>
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0">
                {TEMPLE_PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPkg(pkg)}
                    className={`min-w-[280px] lg:min-w-0 text-left p-6 rounded-[2rem] transition-all relative overflow-hidden group border-2 ${
                      selectedPkg.id === pkg.id 
                      ? 'bg-slate-950 border-orange-500 shadow-2xl shadow-orange-900/10' 
                      : 'bg-white border-transparent hover:border-slate-200'
                    }`}
                  >
                    <div className={`text-[10px] font-black mb-2 uppercase tracking-widest ${selectedPkg.id === pkg.id ? 'text-orange-500' : 'text-slate-400'}`}>
                      {pkg.duration}
                    </div>
                    <div className={`font-black tracking-tight leading-tight uppercase text-sm ${selectedPkg.id === pkg.id ? 'text-white' : 'text-slate-700'}`}>
                      {pkg.route}
                    </div>
                    {selectedPkg.id === pkg.id && (
                      <motion.div layoutId="active-indicator" className="absolute right-6 top-1/2 -translate-y-1/2 text-orange-500">
                        <ChevronRight size={20} />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Content Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedPkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-[3.5rem] p-8 md:p-14 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-slate-100"
              >
                {/* ID & Info Header */}
                <div className="flex flex-wrap justify-between items-start gap-6 mb-12">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-slate-950">
                      {selectedPkg.route}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest">
                      <span className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-slate-600">
                        <Clock size={14} className="text-orange-600" /> {selectedPkg.duration}
                      </span>
                      <span className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full text-orange-700">
                        <ShieldCheck size={14} /> MKT ID: {selectedPkg.mkt}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="p-8 bg-slate-50 rounded-[2.5rem] mb-12 relative overflow-hidden group">
                   <QuoteIcon className="absolute top-4 right-8 text-slate-200 w-24 h-24 rotate-180 opacity-40 group-hover:rotate-0 transition-transform duration-700" />
                   <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium relative z-10 italic">
                     "{selectedPkg.description}"
                   </p>
                </div>

                {/* Schedule & Pricing Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Itinerary */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Schedule Details</h4>
                    <div className="space-y-4">
                      {selectedPkg.itinerary.map((step, idx) => (
                        <div key={idx} className="flex gap-4 group">
                          <div className="w-8 h-8 rounded-xl bg-slate-900 text-orange-400 flex items-center justify-center font-black text-xs shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            {idx + 1}
                          </div>
                          <p className="text-[13px] font-bold text-slate-600 leading-snug group-hover:text-slate-950 transition-colors">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Fare Estimates</h4>
                    <div className="space-y-3">
                      {selectedPkg.pricing.map((priceItem, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-100 hover:border-orange-500/20 hover:shadow-xl transition-all flex justify-between items-center group">
                          <div>
                            <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-orange-600">Premium Fleet</div>
                            <div className="text-xs font-black text-slate-900 uppercase">{priceItem.vehicle}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-black text-slate-950 tracking-tighter group-hover:text-orange-600">₹{priceItem.price}</div>
                            <div className="text-[8px] font-black text-slate-400 uppercase">Inclusive</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <Info size={20} />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-relaxed max-w-[240px]">
                      Inclusive of Fuel, Driver, <br />Tolls & All State Permits.
                    </div>
                  </div>
                  <button 
                    onClick={handleWhatsAppBook}
                    className="w-full md:w-auto bg-orange-600 text-white px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl shadow-orange-900/20 hover:bg-slate-950 transition-all flex items-center justify-center gap-3 active:scale-95"
                  >
                    <MessageCircle size={18} fill="currentColor" />
                    Book Journey
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Verified Trust Bar */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck className="text-orange-500" size={24} />, title: "No Hidden Costs", desc: "Transparent all-inclusive pricing" },
              { icon: <Clock className="text-orange-500" size={24} />, title: "24/7 Support", desc: "Real-time trip assistance" },
              { icon: <Car className="text-orange-500" size={24} />, title: "Verified Pilots", desc: "Background-checked professionals" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-2">{item.icon}</div>
                <h5 className="font-black uppercase tracking-tighter text-slate-950 text-sm">{item.title}</h5>
                <p className="text-[11px] font-medium text-slate-500">{item.desc}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

// Utility Icon
const QuoteIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V5C14.017 4.44772 14.4647 4 15.017 4H20.017C21.1216 4 22.017 4.89543 22.017 6V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H3.01697C2.46468 8 2.01697 7.55228 2.01697 7V5C2.01697 4.44772 2.46468 4 3.01697 4H8.01697C9.12154 4 10.017 4.89543 10.017 6V15C10.017 18.3137 7.33068 21 4.01697 21H2.01697Z" /></svg>
);

export default TempleTourPage;