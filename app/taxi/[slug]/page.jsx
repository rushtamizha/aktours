"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { 
  MapPin, Phone, Mail, Calendar, Clock, 
  ChevronRight, ShieldCheck, CreditCard, Send 
} from 'lucide-react';

const DynamicTaxiPage = () => {
  const params = useParams();
  const slug = params.slug || "Coimbatore";
  // Clean the slug: "wayanad-taxi" -> "Wayanad Taxi"
  const cityName = slug.toString().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const [formData, setFormData] = useState({
    name: '', mobile: '', email: '', 
    pickup: '', pDate: '', pTime: '',
    drop: '', dDate: '', dTime: '',
    message: ''
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const whatsappNum = "918190022220";
    const text = `*New Booking Enquiry: ${cityName}*%0A` +
                 `--------------------------%0A` +
                 `👤 *Name:* ${formData.name}%0A` +
                 `📞 *Mobile:* ${formData.mobile}%0A` +
                 `📍 *Pickup:* ${formData.pickup} (${formData.pDate} @ ${formData.pTime})%0A` +
                 `🏁 *Drop:* ${formData.drop} (${formData.dDate} @ ${formData.dTime})%0A` +
                 `✉️ *Message:* ${formData.message}`;
    window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header Section */}
      <div className="bg-orange-600 py-16 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">{cityName}</h1>
        <p className="opacity-90 max-w-2xl mx-auto px-6">
          Premium and reliable taxi services in {cityName.split(' ')[0]}. 
          Experience a comfortable journey with AK Tours & Travels.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact & Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-2">
                <MapPin className="text-orange-600" size={20} /> Office Location
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                7-2, Lakshmi Nagar <br /> 3rd Street,Sanganoor, <br />
                Coimbatore - 641 027
              </p>
              
              <div className="space-y-4 pt-6 border-t border-slate-50">
                <p className="text-xs font-bold uppercase text-slate-400 tracking-widest">Phone Numbers</p>
                <div className="grid grid-cols-1 gap-2">
                  {["9043758158" ,"8190022220", "9047283222"].map(num => (
                    <a key={num} href={`tel:+91${num.replace(/\s/g, '')}`} className="text-slate-900 font-bold hover:text-orange-600 flex items-center gap-2">
                      <Phone size={14} className="text-orange-500" /> +91 {num}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-2">Email Address</p>
                <a href="mailto:aktourstravels02@gmail.com" className="text-slate-900 font-medium text-sm flex items-center gap-2">
                  <Mail size={14} className="text-orange-500" />  aktourstravels02@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-orange-900/5 border border-slate-100">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-slate-900">Enquiry Now</h2>
                <p className="text-slate-500 mt-2">Fill the form below and we will get back to you immediately.</p>
              </div>

              <form onSubmit={handleWhatsApp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">Full Name</label>
                  <input required name="name" onChange={handleChange} placeholder="Enter your name" className="w-full bg-slate-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">Mobile Number</label>
                  <input required name="mobile" onChange={handleChange} placeholder="WhatsApp Number" className="w-full bg-slate-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                </div>
                <div className="md:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">Your Email</label>
                  <input name="email" onChange={handleChange} type="email" placeholder="Email Address" className="w-full bg-slate-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                </div>

                {/* Pickup Details */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">Pickup Location</label>
                  <input required name="pickup" onChange={handleChange} placeholder="Address / City" className="w-full bg-slate-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                   <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">P. Date</label>
                      <input required name="pDate" onChange={handleChange} type="date" className="w-full bg-slate-50 border-none p-4 rounded-xl text-xs outline-none" />
                   </div>
                   <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">P. Time</label>
                      <input required name="pTime" onChange={handleChange} type="time" className="w-full bg-slate-50 border-none p-4 rounded-xl text-xs outline-none" />
                   </div>
                </div>

                {/* Drop Details */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">Drop Location</label>
                  <input required name="drop" onChange={handleChange} placeholder="Address / City" className="w-full bg-slate-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                   <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">D. Date</label>
                      <input name="dDate" onChange={handleChange} type="date" className="w-full bg-slate-50 border-none p-4 rounded-xl text-xs outline-none" />
                   </div>
                   <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">D. Time</label>
                      <input name="dTime" onChange={handleChange} type="time" className="w-full bg-slate-50 border-none p-4 rounded-xl text-xs outline-none" />
                   </div>
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">Message</label>
                  <textarea name="message" onChange={handleChange} rows="4" placeholder="Mention any special requirements..." className="w-full bg-slate-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                </div>

                <button type="submit" className="md:col-span-2 bg-orange-600 hover:bg-orange-700 text-white p-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-orange-600/30 mt-4">
                  Enquiry Now <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicTaxiPage;