"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Navigation, Calendar, 
  MessageCircle, ShieldCheck, Star, 
  ChevronRight, ArrowUpRight, Phone
} from 'lucide-react';

const TABS = [
  { id: 'local', label: 'City Local', icon: <MapPin size={16} />, link: '/city-local', desc: 'Starting ₹2,450' },
  { id: 'outstation', label: 'Outstation', icon: <Navigation size={16} />, link: '/outstation-round-trip', desc: 'Starting ₹13/Km' },
  { id: 'tours', label: 'Tour Packages', icon: <Calendar size={16} />, link: '/tour-packages', desc: 'Ooty / Munnar' },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState('local');

  const handleWhatsApp = () => {
    const msg = `Hi Ak Tours and Travels Travels, I'm interested in booking a ${activeTab} taxi from your website.`;
    window.open(`https://wa.me/918190022220?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#F8FAFC]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full lg:w-1/2 bg-orange-600/5 rounded-l-[120px] -z-10 hidden lg:block" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-400/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-orange-100 px-4 py-2 rounded-2xl shadow-sm mb-8">
            <ShieldCheck className="text-orange-600" size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Official #1 Taxi Agency in Coimbatore</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
            Your Premium <br />
            <span className="text-orange-600">Travel Partner.</span>
          </h1>
          
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl mb-10 leading-relaxed">
            Professional drivers, transparent pricing, and 24/7 support. Whether it's a city drop or a week-long tour, we drive you with care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {/* WhatsApp CTA */}
            <button 
              onClick={handleWhatsApp}
              className="bg-orange-600 text-white px-8 py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 group"
            >
              <MessageCircle size={20} fill="currentColor" />
              Book via WhatsApp
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-8 border-t border-slate-200 pt-8">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-[11px] font-black text-slate-900 uppercase tracking-tighter">Trusted by 15,000+ Travelers</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Smart Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Widget Card */}
          <div className="bg-white p-8 rounded-[48px] shadow-2xl shadow-slate-200 border border-white relative z-10">
            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-tighter">
              Quick <span className="text-orange-600">Estimate</span>
            </h3>

            {/* Dynamic Tabs */}
            <div className="flex p-1.5 bg-slate-50 rounded-3xl mb-8 border border-slate-100">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex flex-col items-center justify-center gap-1 py-4 rounded-[22px] transition-all ${
                    activeTab === tab.id 
                    ? 'bg-white text-orange-600 shadow-lg scale-105' 
                    : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab.icon}
                  <span className="text-[9px] font-black uppercase tracking-widest">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Widget Form Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4 mb-8"
              >
                <div className="p-5 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Active Package</p>
                    <p className="text-sm font-bold text-slate-900 capitalize">{activeTab} Service</p>
                  </div>
                  <div className="bg-orange-100 text-orange-700 text-[10px] font-black px-3 py-1 rounded-full">
                    {TABS.find(t => t.id === activeTab).desc}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Support</p>
                      <p className="text-xs font-bold text-slate-900">24/7 Call</p>
                   </div>
                   <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Response</p>
                      <p className="text-xs font-bold text-slate-900">&lt; 5 Mins</p>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button 
              onClick={handleWhatsApp}
              className="w-full bg-slate-900 text-white p-6 rounded-[28px] font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-600 transition-all group"
            >
              Get Instant Quote
              <Phone size={16} className="text-orange-400 group-hover:text-white" />
            </button>
          </div>

          {/* Floating Price Tag */}
          <div className="absolute -top-6 -right-6 bg-slate-900 text-white px-6 py-4 rounded-3xl shadow-xl z-20 border-4 border-white rotate-6 animate-pulse">
            <p className="text-[10px] font-black uppercase tracking-widest text-orange-400">Low Price</p>
            <p className="text-lg font-black italic">₹2,450/-</p>
          </div>

          {/* Decor */}
          <div className="absolute top-1/2 -right-12 w-32 h-32 bg-orange-500/20 rounded-full -z-10 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;