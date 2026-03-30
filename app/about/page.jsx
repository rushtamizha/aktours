"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  MapPin, 
  Award, 
  Car, 
  ChevronRight,
  Globe,
  Heart,
  CheckCircle2
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: "Years Experience", value: "12+" },
    { label: "Verified Pilots", value: "50+" },
    { label: "Monthly Trips", value: "1.2k" },
    { label: "Client Rating", value: "4.9/5" },
  ];

  const values = [
    {
      title: "Transparent Pricing",
      desc: "No hidden charges. Our 'All-Inclusive' model covers tolls, permits, and driver allowance upfront.",
      icon: <ShieldCheck className="text-orange-500" />
    },
    {
      title: "Safety First",
      desc: "Every vehicle undergoes a 20-point safety check before every outstation journey.",
      icon: <CheckCircle2 className="text-orange-500" />
    },
    {
      title: "Local Expertise",
      desc: "Based in Coimbatore, we know the terrain of South India better than any GPS.",
      icon: <MapPin className="text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 overflow-hidden">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              <Globe size={14} className="text-orange-600" /> The Ak Tours and Travels Standard
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-slate-950">
              Redefining <br />
              <span className="text-orange-600">Travel.</span>
            </h1>
            <p className="text-lg font-medium text-slate-500 leading-relaxed max-w-lg">
              Ak Tours and Travels Travels isn't just a taxi service; we are a mobility partner built on the principles of transparency, reliability, and local expertise in Coimbatore.
            </p>
            <div className="flex gap-4">
               <button className="bg-slate-950 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-orange-600 transition-all flex items-center gap-3 shadow-2xl shadow-slate-900/20">
                 Our Fleet <ChevronRight size={16} />
               </button>
            </div>
          </motion.div>

          {/* Abstract Image Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="h-64 bg-slate-100 rounded-[3rem] overflow-hidden relative group">
                <div className="absolute inset-0 bg-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800" alt="Driving" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="h-48 bg-orange-600 rounded-[3rem] flex items-center justify-center p-8 text-white">
                <Heart size={48} fill="currentColor" className="opacity-20" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-48 bg-slate-950 rounded-[3rem] flex items-center justify-center text-orange-500 font-black text-4xl italic">
                CBE
              </div>
              <div className="h-80 bg-slate-100 rounded-[3rem] overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800" alt="Travel" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-950 py-24 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-orange-600/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-5xl font-black text-orange-500 tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content & Values */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">Our Mission</h2>
            <h3 className="text-4xl font-black tracking-tighter uppercase text-slate-950 leading-tight">
              Bridging the gap between <br />
              <span className="text-slate-400">luxury & accessibility.</span>
            </h3>
            <p className="text-slate-500 font-medium leading-loose">
              Founded in Coimbatore, Ak Tours and Travels Travels started with a single goal: to eliminate the uncertainty in taxi bookings. We realized that travellers often struggle with hidden costs and unreliable drivers during long-distance spiritual or leisure trips. 
              <br /><br />
              Today, we operate a fleet of premium sedans, SUVs, and luxury tempo travellers, ensuring that every journey—whether it’s a local drop or a 9-day pilgrimage—is handled with professional care and enterprise-grade logistics.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border border-slate-100 hover:border-orange-500/20 transition-all group ${i === 2 ? 'md:col-span-2 bg-slate-50' : 'bg-white'}`}>
                <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  {React.cloneElement(val.icon, { size: 24, className: "group-hover:text-white transition-colors" })}
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight text-slate-950 mb-4">{val.title}</h4>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="mb-32 max-w-7xl mx-auto px-6">
        <div className="bg-slate-950 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6 text-center md:text-left">
               <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white">
                    <Award size={24} />
                  </div>
                  <span className="text-white text-xl font-black uppercase tracking-widest italic">GST Registered Entity</span>
               </div>
               <p className="text-slate-400 font-medium max-w-md">
                 We are a fully compliant business entity, ensuring corporate travel is seamless with GST invoicing and professional audit trails.
               </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md">
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-2">GST Identification Number</p>
               <p className="text-3xl font-mono text-white tracking-tighter">33BISPK2263C1ZF</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;