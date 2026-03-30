"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const REVIEWS = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Family Traveler",
    content: "The Kerala package was flawlessly executed. Our driver was more than just a chauffeur; he was a local expert. The houseboat experience was a dream!",
    rating: 5,
    avatar: "AS"
  },
  {
    id: 2,
    name: "Priya Lakshmi",
    role: "Corporate Client",
    content: "Efficient, punctual, and highly professional. We used their corporate booking for a 3-day conference in Ooty, and the coordination was top-notch.",
    rating: 5,
    avatar: "PL"
  },
  {
    id: 3,
    name: "David Miller",
    role: "International Tourist",
    content: "Searching for reliable cabs in India can be tough, but Ak Tours and Travels made our Nilgiris trip stress-free. Clean vehicles and very reasonable pricing.",
    rating: 5,
    avatar: "DM"
  },
  {
    id: 4,
    name: "Sanjay Verma",
    role: "Frequent Traveler",
    content: "I've tried many agencies, but their custom packages are truly bespoke. They listened to our specific needs for a Kodaikanal trek and delivered.",
    rating: 5,
    avatar: "SV"
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials' className="py-32 bg-[#F8FAFC] overflow-hidden relative">
      {/* Decorative Branding */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-100/50 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-orange-100"
          >
            <ShieldCheck size={14} /> 100% Verified Reviews
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter"
          >
            Voices of Our <br />
            <span className="text-orange-600">Travelers.</span>
          </motion.h2>
        </div>

        {/* Swiper Engine */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ 
              clickable: true,
              el: '.custom-testimonial-pagination'
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <motion.div 
                  className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-900/5 transition-all duration-700 h-full flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle Background Icon */}
                  <Quote className="absolute -top-6 -right-6 w-32 h-32 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-0" />

                  <div className="relative z-10">
                    {/* Header: Stars & Status */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] font-black text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">
                        <CheckCircle2 size={10} /> Verified Trip
                      </div>
                    </div>

                    {/* Review Content */}
                    <p className="text-slate-600 text-base leading-relaxed font-medium italic">
                      "{review.content}"
                    </p>
                  </div>

                  {/* Profile Section */}
                  <div className="mt-12 pt-8 border-t border-slate-50 flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 bg-slate-900 rounded-[1.2rem] flex items-center justify-center text-orange-400 font-black text-sm shadow-xl group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 leading-tight uppercase tracking-tighter text-sm">{review.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container */}
          <div className="custom-testimonial-pagination mt-4 flex justify-center !static" />
        </div>

        {/* Enterprise Trust Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-slate-200 flex flex-col items-center"
        >
          <div className="flex items-center gap-6 mb-4">
             <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-900">4.9</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
                      <Star size={12} className="text-white fill-white" />
                    </div>
                  ))}
                </div>
             </div>
             <div className="h-8 w-px bg-slate-200 hidden md:block" />
             <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Based on 1,200+ Global Reviews</p>
          </div>
          
          {/* Brands / Recognition Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 mt-8">
            <span className="text-xs font-black uppercase tracking-widest text-slate-900">Google Reviews</span>
            <span className="text-xs font-black uppercase tracking-widest text-slate-900">TripAdvisor</span>
            <span className="text-xs font-black uppercase tracking-widest text-slate-900">Trustpilot</span>
          </div>
        </motion.div>

      </div>

      <style jsx global>{`
        .custom-testimonial-pagination .swiper-pagination-bullet {
          background: #dadada !important;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s;
          border-radius: 10px;
        }
        .custom-testimonial-pagination .swiper-pagination-bullet-active {
          background: #ff883e !important;
          width: 32px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;