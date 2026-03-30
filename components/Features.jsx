"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Map, UserCheck, Sparkles, ChevronRight, ShieldCheck, Star } from 'lucide-react';

const FEATURES = [
  {
    title: "Verified Drivers",
    desc: "Every pilot in our fleet undergoes rigorous background checks and professional training for mountain & city terrain.",
    icon: <UserCheck size={24} />,
    tag: "Safety First"
  },
  {
    title: "Custom Itineraries",
    desc: "From spiritual drops to multi-city business trips, we tailor our routes to match your specific schedule and needs.",
    icon: <Sparkles size={24} />,
    tag: "Flexible"
  },
  {
    title: "Verified Routes",
    desc: "We use pre-calculated, optimized routes to ensure you avoid traffic and reach your destination on time, every time.",
    icon: <Map size={24} />,
    tag: "Efficient"
  }
];

const Features = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Decorative Branding Element */}
      <div className="absolute -right-20 top-1/4 w-96 h-96 bg-orange-50 rounded-full blur-3xl -z-10 opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Side: Premium Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070" 
                alt="Ak Tours and Travels Travels Experience" 
                className="w-full h-[650px] object-cover transition-transform duration-1000 hover:scale-105"
              />
              
              {/* Glassmorphism Floating Badge */}
              <div className="absolute bottom-10 left-10 right-10 bg-white/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white shadow-2xl">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-orange-400 shadow-lg">
                    <Compass size={28} className="animate-[spin_8s_linear_infinite]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 tracking-tighter uppercase">Reliable Heritage</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">10+ Years of Excellence in Coimbatore</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Trust Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-orange-500 text-white p-6 rounded-3xl shadow-xl z-20 flex flex-col items-center gap-1"
            >
              <Star size={20} fill="currentColor" />
              <span className="text-xl font-black">4.9</span>
              <span className="text-[8px] font-black uppercase tracking-widest opacity-80">Rating</span>
            </motion.div>
          </motion.div>

          {/* Right Side: Structured Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <ShieldCheck size={14} className="text-orange-600" /> Professional Commitment
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter">
                Travel with <br />
                <span className="text-orange-600">Peace of Mind.</span>
              </h2>
              <p className="mt-8 text-slate-500 text-sm font-medium leading-relaxed max-w-lg">
                We don't just provide a vehicle; we provide a curated travel experience. From our strictly vetted drivers to our optimized route planning, every detail is designed for your comfort.
              </p>
            </motion.div>

            <div className="space-y-6">
              {FEATURES.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start gap-8 p-8 rounded-[2.5rem] bg-white hover:bg-slate-50 transition-all duration-500 border border-slate-100 hover:border-orange-100 hover:shadow-xl hover:shadow-orange-900/5"
                >
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[9px] font-black uppercase tracking-[0.15em] bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-slate-500 text-[13px] leading-relaxed max-w-sm font-medium">
                      {item.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-600 overflow-hidden">
                       <span className="translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                         View Details
                       </span>
                       <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;