"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Users, 
  Map, 
  CircleDollarSign, 
  Ship, 
  ChevronRight,
  ShieldCheck, 
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';

const REASONS = [
  {
    title: "Various Adventures",
    desc: "From hill station trekking to coastal safaris, we offer diverse experiences for every seeker.",
    icon: <Compass size={24} />,
    tag: "Explore"
  },
  {
    title: "Family Trips",
    desc: "Specially curated itineraries that ensure comfort and fun for kids and seniors alike.",
    icon: <Users size={24} />,
    tag: "Comfort"
  },
  {
    title: "Complete Guide",
    desc: "Our certified local pilots don't just drive; they narrate the history of every hidden spot.",
    icon: <Map size={24} />,
    tag: "Expertise"
  },
  {
    title: "Honest Pricing",
    desc: "Premium service without the premium markup. Transparent billing with no hidden costs.",
    icon: <CircleDollarSign size={24} />,
    tag: "Value"
  },
  {
    title: "Cruise Booking",
    desc: "Exclusive access to luxury houseboat and backwater cruise bookings in Kerala.",
    icon: <Ship size={24} />,
    tag: "Premium"
  },
  {
    title: "Safer Travel",
    desc: "Verified drivers, GPS-tracked fleet, and 24/7 emergency support for peace of mind.",
    icon: <ShieldCheck size={24} />,
    tag: "Safety"
  }
];

const WhyChooseUs = () => {
  const WHATSAPP_URL = "https://wa.me/918190022220";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-orange-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
            >
              <div className="w-8 h-px bg-orange-600" /> Why Choose Us
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase"
            >
              The Gold Standard in <br />
              <span className="text-orange-600">Travel & Logistics</span>
            </motion.h2>
          </div>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-slate-200"
          >
            <MessageCircle size={18} fill="currentColor" />
            Quick Consultation
          </motion.a>
        </div>

        {/* Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((item, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500"
            >
              {/* Floating Tag */}
              <div className="absolute top-8 right-10 text-[9px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-orange-500 transition-colors">
                {item.tag}
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 bg-white text-slate-400 group-hover:bg-orange-600 group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight uppercase group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-200/50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[9px] font-black uppercase tracking-widest text-orange-600">Enterprise Quality</span>
                <ArrowUpRight size={16} className="text-orange-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Hook */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href={WHATSAPP_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-4 group"
          >
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] group-hover:text-orange-500 transition-colors">Click to chat on WhatsApp</span>
            <div className="flex items-center gap-3 bg-orange-50 text-orange-700 px-6 py-3 rounded-full font-black uppercase text-xs tracking-widest group-hover:bg-orange-600 group-hover:text-white transition-all">
              Start Your Plan <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;