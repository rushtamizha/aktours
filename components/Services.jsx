"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  PlaneTakeoff, 
  Briefcase, 
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const SERVICES = [
  {
    title: "Day Basis",
    desc: "Full-day convenience for weddings or local city exploration. Comfort tailored to your schedule.",
    icon: <Calendar size={24} />,
    tag: "Most Popular",
    link: "/outstation-day-basis",
    color: "orange"
  },
  {
    title: "KM Basis",
    desc: "Flexible round-trip outstation services. Pay only for the distance you travel with no hidden fees.",
    icon: <Clock size={24} />,
    tag: "Long Distance",
    link: "/outstation-round-trip",
    color: "orange"
  },
  {
    title: "Airport / One Way",
    desc: "Reliable airport transfers and fixed-fare one-way drops to Isha Yoga & Anaikatti.",
    icon: <PlaneTakeoff size={24} />,
    tag: "Fixed Fare",
    link: "/one-way-dropping",
    color: "orange"
  },
  {
    title: "Corporate",
    desc: "Prompt, efficient mobility solutions for businesses. Monthly billing and premium fleet options.",
    icon: <Briefcase size={24} />,
    tag: "B2B Priority",
    link: "https://wa.me/918190022220",
    color: "orange"
  }
];

const Services = () => {
  return (
    <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Branding */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-orange-100/50 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-orange-100"
            >
              <ShieldCheck size={14} /> Our Service Excellence
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter"
            >
              Tailored Mobility <br />
              <span className="text-orange-600">Solutions.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:max-w-xs space-y-4"
          >
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              From daily local commutes to multi-day spiritual journeys, Ak Tours and Travels Travels ensures a professional and safe experience every time.
            </p>
            <div className="h-1 w-20 bg-orange-600 rounded-full" />
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-500 flex flex-col h-full relative"
            >
              {/* Badge */}
              <div className="absolute top-8 right-8 text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-orange-500 transition-colors">
                {service.tag}
              </div>

              {/* Icon Container */}
              <div className="w-16 h-16 bg-slate-50 text-slate-400 group-hover:bg-orange-600 group-hover:text-white rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 shadow-inner">
                {service.icon}
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter uppercase group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 text-[13px] leading-relaxed mb-10 flex-1 font-medium">
                {service.desc}
              </p>

              {/* Action Link */}
              <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                <a 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-orange-600 transition-all"
                >
                  Learn More
                  <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => window.open(`https://wa.me/918190022220?text=Hi, I want to inquire about ${service.title}`, '_blank')}
                  className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-orange-100 group-hover:text-orange-600 transition-all"
                >
                  <MessageCircle size={18} fill="currentColor" className="opacity-40 group-hover:opacity-100" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-900 rounded-[3rem] p-10 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-10 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -z-10" />
          
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-3xl md:text-4xl font-black tracking-tighter">Need a Custom <br className="hidden md:block" />Travel Itinerary?</h4>
            <p className="text-slate-400 text-sm font-medium max-w-sm">Contact our travel desk for bulk bookings or customized South India tour packages.</p>
          </div>

          <a 
            href="https://wa.me/918190022220"
            className="bg-orange-500 text-slate-900 px-10 py-5 rounded-[2rem] font-black uppercase text-xs tracking-[0.2em] flex items-center gap-3 hover:bg-white hover:scale-105 transition-all shadow-xl shadow-orange-500/20 active:scale-95"
          >
            Chat with Travel Expert
            <ChevronRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;