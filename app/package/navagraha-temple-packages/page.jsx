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
  Navigation, 
  ShieldCheck, 
  MessageCircle, 
  ChevronRight,
  ChevronDown,
  Star
} from 'lucide-react';

const NAVAGRAHA_TOUR_DATA = [
  {
    id: "cbe-navagraha-2d",
    packageName: "Navagraha Temple Circuit",
    duration: "2 Days / 1 Night",
    mktCode: "920",
    description: "A comprehensive spiritual journey covering all nine celestial planetary temples (Navagraha) around Kumbakonam, starting from Coimbatore.",
    itinerary: [
      { 
        day: "Day 01", 
        title: "The Five Temples",
        desc: "Coimbatore to Thingaloor (Chandran), Alangudi (Guru), Thirunageshwaram (Raghu), Suriyanar Kovil (Suriyan), Kanjanoor (Sukkran). Night stay at Mayiladuthurai." 
      },
      { 
        day: "Day 02", 
        title: "The Final Four",
        desc: "Mayiladuthurai to Vaitheeswaran Kovil (Sevvai), Thiruvenkadu (Bhudan), Keezhaperumpallam (Kethu), Thirunallar (Sani) & Back to Coimbatore." 
      }
    ],
    pricing: [
      { vehicle: "Swift Dzire (Sedan)", price: "14,100" },
      { vehicle: "Toyota Etios (Sedan)", price: "14,100" },
      { vehicle: "Innova A/C (SUV)", price: "19,300" },
      { vehicle: "Innova Crysta Luxury", price: "21,850" },
      { vehicle: "Traveller (14-seater)", price: "25,567" }
    ],
    templeDirectory: [
      { lord: "Suryan (Sun)", location: "Suryanar Koil", route: "18 Kms towards Mayiladuthurai" },
      { lord: "Chandran (Moon)", location: "Thingalur", route: "Kumbakonam-Thiruvayyaru Road" },
      { lord: "Sevvai (Mars)", location: "Vaitheesvaran Koil", route: "Mayiladuthurai-Chidambaram Road" },
      { lord: "Budan (Mercury)", location: "Thiruvenkadu", route: "10 Kms SE of Sirkali" },
      { lord: "Guru (Jupiter)", location: "Alangudi", route: "Kumbakonam-Needamangalam Road" },
      { lord: "Sukran (Venus)", location: "Kanchanoor", route: "Mayiladuthurai-Kathiramangalam Road" },
      { lord: "Saneeswaran (Saturn)", location: "Thirunallar", route: "Kumbakonam-Karaikkal Route" },
      { lord: "Rahu", location: "Thirunageswaram", route: "9 Kms on Karaikkal route" },
      { lord: "Ketu", location: "Keezhaperumpallam", route: "Mayiladuthurai-Poompuhar road" }
    ]
  }
];

const NavagrahaPage = () => {
  const pkg = NAVAGRAHA_TOUR_DATA[0];
  const [selectedVehicle, setSelectedVehicle] = useState(pkg.pricing[0]);
  const WHATSAPP_NUMBER = "918190022220";

  const handleBooking = () => {
    const message = `*Navagraha Tour Booking*%0A` +
                    `--------------------------%0A` +
                    `🔖 *MKT ID:* ${pkg.mktCode}%0A` +
                    `🚗 *Vehicle:* ${selectedVehicle.vehicle}%0A` +
                    `💰 *Price:* ₹${selectedVehicle.price}%0A` +
                    `--------------------------%0A` +
                    `Please confirm availability for this circuit!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-32 overflow-hidden">
      
      {/* Dynamic Header */}
      <header className="bg-[#020617] pt-32 pb-48 px-6 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-orange-500/20"
          >
            <Star size={14} fill="currentColor" /> Sacred Navagraha Path
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
          >
            Celestial <br />
            <span className="text-orange-500">Journey.</span>
          </motion.h1>
          <p className="text-slate-400 mt-8 max-w-xl text-sm md:text-base font-medium leading-relaxed mx-auto lg:mx-0">
            {pkg.description} Verified pilots and premium fleet service starting from Coimbatore.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 -mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20">
        
        {/* Left Column: Itinerary & Temple Guide */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Schedule Section */}
          <section className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] border border-slate-100">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-12 flex items-center gap-3">
              <Clock className="text-orange-600" /> Planned Itinerary
            </h2>
            <div className="space-y-10">
              {pkg.itinerary.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="group flex flex-col md:flex-row gap-8 pb-10 border-b border-slate-50 last:border-0"
                >
                  <div className="w-20 h-20 rounded-3xl bg-slate-950 text-orange-400 flex flex-col items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Day</span>
                    <span className="text-2xl font-black leading-none mt-1">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-[15px] font-medium italic">
                      "{item.desc}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Temple Directory Section */}
          <section className="bg-white rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden">
            <div className="p-10 md:p-14 border-b border-slate-50">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 flex items-center gap-3">
                <Navigation size={16} className="text-orange-600" /> Sacred Temple Directory
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-10 py-6 text-[9px] font-black text-slate-400 uppercase tracking-widest">Lord / Deity</th>
                    <th className="px-10 py-6 text-[9px] font-black text-slate-400 uppercase tracking-widest">Location</th>
                    <th className="px-10 py-6 text-[9px] font-black text-slate-400 uppercase tracking-widest">Distance & Route</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {pkg.templeDirectory.map((temple, idx) => (
                    <tr key={idx} className="group hover:bg-orange-50/30 transition-colors">
                      <td className="px-10 py-6 font-black text-slate-900 text-xs uppercase group-hover:text-orange-600 transition-colors">{temple.lord}</td>
                      <td className="px-10 py-6 text-[11px] font-bold text-slate-500 group-hover:text-slate-900">{temple.location}</td>
                      <td className="px-10 py-6 text-[10px] font-medium text-slate-400 italic">{temple.route}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Right Column: Pricing & Quick Booking */}
        <div className="lg:col-span-4">
          <div className="sticky top-8 space-y-8">
            <div className="bg-slate-950 p-10 rounded-[3rem] shadow-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl" />
              
              <h3 className="text-white text-[10px] font-black mb-10 uppercase tracking-[0.3em] flex items-center gap-2">
                <Car size={16} className="text-orange-500" /> Select Fleet
              </h3>
              
              <div className="space-y-3">
                {pkg.pricing.map((item) => (
                  <button
                    key={item.vehicle}
                    onClick={() => setSelectedVehicle(item)}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 group ${
                      selectedVehicle?.vehicle === item.vehicle 
                      ? 'border-orange-500 bg-orange-500/5 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
                      : 'border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="text-left">
                      <div className={`text-xs font-black uppercase tracking-tight ${selectedVehicle?.vehicle === item.vehicle ? 'text-white' : 'text-slate-400'}`}>
                        {item.vehicle}
                      </div>
                      <div className="text-[8px] text-slate-600 font-bold uppercase tracking-widest mt-1 group-hover:text-orange-500 transition-colors">Total Fare</div>
                    </div>
                    <div className="text-lg font-black text-orange-500 tracking-tighter">₹{item.price}</div>
                  </button>
                ))}
              </div>

              <button 
                onClick={handleBooking}
                className="w-full mt-10 py-5 rounded-2xl bg-orange-600 text-white font-black uppercase text-[10px] tracking-[0.2em] shadow-xl shadow-orange-900/40 hover:bg-white hover:text-slate-950 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                <MessageCircle size={18} fill="currentColor" />
                Reserve Circuit
              </button>
              
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase">
                  <ShieldCheck size={14} className="text-orange-500" /> GST Verified
                </div>
                <div className="text-[9px] font-black text-slate-700 uppercase tracking-widest">MKT ID: {pkg.mktCode}</div>
              </div>
            </div>

            {/* Inclusion Alert */}
            <div className="bg-orange-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-orange-900/10 relative overflow-hidden group">
              <CheckCircle className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 group-hover:scale-110 transition-transform duration-700" />
              <h4 className="font-black uppercase text-[10px] tracking-[0.3em] mb-4">Ak Tours and Travels Standard</h4>
              <p className="text-xs font-bold leading-relaxed opacity-90">
                Fare includes: Cab rent, Fuel, Driver Allowance, Parking & All State Tolls. No hidden extras.
              </p>
            </div>
            
            <a 
              href={`tel:${WHATSAPP_NUMBER}`}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-slate-50 transition-all group"
            >
              <Phone size={14} className="group-hover:rotate-12 transition-transform" /> Support Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavagrahaPage;