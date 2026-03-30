"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight, Compass, MessageCircle, ChevronRight, ChevronLeft } from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TOURS = [
  { id: 1, name: "Ooty", duration: "5 Day Package", img: "/packages/another-wonderful-stone.jpg" },
  { id: 2, name: "Coorg", duration: "6 Day Package", img: "/packages/cooorg.jpg" },
  { id: 3, name: "Thekkady", duration: "5 Day Package", img: "/packages/thekkady.jpg" },
  { id: 4, name: "Kodaikanal", duration: "7 Day Package", img: "/packages/Kodaikanal.avif" },
  { id: 5, name: "Munnar", duration: "3 Day Package", img: "/packages/munnar-1723101236_d37cb4a4260539e5debd.webp" },
  { id: 6, name: "Alleppy", duration: "3 Day Package", img: "/packages/alleppey-kerala-india-shutterstock_1154918653_25793b1171.jpg" },
  { id: 7, name: "Wayanad", duration: "4 Day Package", img: "/packages/waynadu-1024x768.jpg" },
  { id: 8, name: "Cochin", duration: "3 Day Package", img: "/packages/backwater-tourism.jpg" },
];

const PopularTours = () => {
  const handleWhatsApp = (tourName, duration) => {
    const phoneNumber = "918190022220"; 
    const message = `*Tour Inquiry via Ak Tours and Travels Travels*%0A` +
                    `--------------------------%0A` +
                    `📍 *Destination:* ${tourName}%0A` +
                    `⏳ *Duration:* ${duration}%0A` +
                    `--------------------------%0A` +
                    `I want to book this package. Please share details!`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-32 bg-[#F8FAFC] overflow-hidden relative">
      {/* Aesthetic Background Detail */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 -skew-x-12 translate-x-1/2 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-orange-100/50 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-orange-100"
            >
              <Compass size={14} /> Curated Experiences
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter"
            >
              Popular <span className="text-orange-600">Tours.</span>
            </motion.h2>
          </div>
          
          {/* Custom Navigation Controls (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="swiper-prev-btn w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-orange-500 hover:text-orange-600 transition-all cursor-pointer shadow-sm hover:shadow-lg active:scale-95">
              <ChevronLeft size={24} />
            </button>
            <button className="swiper-next-btn w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-orange-500 hover:text-orange-600 transition-all cursor-pointer shadow-sm hover:shadow-lg active:scale-95">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true, el: '.custom-tour-pagination' }}
            navigation={{ nextEl: '.swiper-next-btn', prevEl: '.swiper-prev-btn' }}
            className="!pb-20"
          >
            {TOURS.map((tour) => (
              <SwiperSlide key={tour.id}>
                <motion.div 
                  className="relative h-[520px] rounded-[3rem] overflow-hidden group shadow-2xl shadow-slate-200/50 border border-white"
                >
                  {/* Luxury Background Image */}
                  <img 
                    src={tour.img} 
                    alt={tour.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  
                  {/* High-End Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/90 opacity-90 transition-opacity group-hover:opacity-100" />
                  
                  {/* Floating Badge (Glassmorphism) */}
                  <div className="absolute top-8 left-8 z-20">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[9px] font-black px-5 py-2.5 rounded-2xl uppercase tracking-[0.2em] shadow-xl">
                      Featured Trip
                    </div>
                  </div>

                  {/* Info Content */}
                  <div className="absolute bottom-0 p-10 w-full z-20 transition-all duration-500 group-hover:bottom-2">
                    <div className="flex items-center gap-2 text-orange-400 mb-3">
                      <Clock size={14} className="animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{tour.duration}</span>
                    </div>
                    
                    <h3 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                      {tour.name}
                    </h3>

                    {/* Action Button */}
                    <button 
                      onClick={() => handleWhatsApp(tour.name, tour.duration)}
                      className="w-full bg-white text-slate-900 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 group-hover:bg-orange-500 group-hover:text-white shadow-xl active:scale-95"
                    >
                      <MessageCircle size={16} fill="currentColor" className="opacity-70" />
                      Explore Package
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Mobile/Tablet Pagination */}
          <div className="custom-tour-pagination mt-4 flex justify-center !static" />
        </div>

      </div>

      {/* Aesthetic Style for Swiper Pagination */}
      <style jsx global>{`
        .custom-tour-pagination .swiper-pagination-bullet {
          background: #cbd5e1 !important;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s;
          border-radius: 10px;
        }
        .custom-tour-pagination .swiper-pagination-bullet-active {
          background: #ff883e !important;
          width: 30px;
        }
      `}</style>
    </section>
  );
};

export default PopularTours;