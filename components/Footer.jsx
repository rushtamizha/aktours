"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Globe,
  Navigation,
  MessageCircle,
  Clock,
  Map,
} from "lucide-react";
import Link from "next/link";

const TAXI_ROUTES = [
  "Wayanad",
  "Yercuad",
  "Valparai",
  "Sabarimalai",
  "Nagercoil",
  "Topslip",
  "Thoothukudi",
  "Thirunelveli",
  "Puduchery",
  "Pollachi",
  "Madurai",
  "Karur",
  "Erode",
  "Trichy",
  "Bengaluru",
  "Palani",
  "Kanyakumari",
  "Mettupalayam",
  "Dindugal",
  "Kumbakonam",
  "Hyderabad",
  "Coimbatore",
  "Cochin",
  "Coonoor",
  "Guruvayur",
  "Trivanduram",
  "Thiruchendur",
  "Thekkady",
  "Tiruvanamalai",
  "Kanchipuram",
  "Coorg",
];

const TOUR_PACKAGES = [
  "One day tour",
  "Two day tour",
  "Three day tour",
  "Four day tour",
  "Five day tour",
  "Six day tour",
  "Seven day tour",
  "Eight day tour",
  "Nine day tour",
  "Navagraha temple",
  "Pilgrimage tour",
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] text-slate-400 pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Aesthetic Background Detail */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Branding & Contact Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 pb-16 border-b border-white/5">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <Globe size={24} />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase leading-tight">
                Ak Tours and Travels
                <br />
                <span className="text-orange-500 text-[10px] block tracking-[0.4em] -mt-1">
                  TRAVELS
                </span>
              </span>
            </Link>
            <p className="text-sm font-medium leading-relaxed max-w-sm">
              Your trusted partner for professional mobility across South India.
              Specializing in outstation drops, pilgrimage tours, and corporate
              travel.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/918190022220"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-white transition-all shadow-xl border border-white/10"
              >
                <MessageCircle size={20} fill="currentColor" />
              </a>
              <a
                href="tel:918190022220"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-white transition-all shadow-xl border border-white/10"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                <MapPin size={14} className="text-orange-500" /> Main Office
              </h4>
              <p className="text-xs font-medium leading-loose text-slate-300">
                7-2, Lakshmi Nagar <br /> 3rd Street,Sanganoor, <br />
                Coimbatore - 641 027
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                <Mail size={14} className="text-orange-500" /> Business Inquiry
              </h4>
              <div className="space-y-2">
                <a
                  href="mailto:aktourstravels02@gmail.com"
                  className="block text-sm font-black text-white hover:text-orange-400 transition-colors uppercase tracking-tighter"
                >
                  aktourstravels02@gmail.com
                </a>
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                  Available 24/7 for Bookings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mega Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Taxi Routes Mega Grid */}
          <div className="lg:col-span-8">
            <h4 className="text-white text-[10px] font-black mb-12 uppercase tracking-[0.3em] flex items-center gap-3">
              <Navigation size={14} className="text-orange-500" /> Regional Taxi
              Services
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-8">
              {TAXI_ROUTES.map((city) => (
                <Link
                  key={city}
                  href={`/taxi/${city.toLowerCase().replace(/\s+/g, "-")}-taxi`}
                  className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-orange-400 transition-all group flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 bg-slate-800 rounded-full group-hover:bg-orange-500" />
                  {city} Taxi
                </Link>
              ))}
            </div>
          </div>

          {/* Tour Packages List */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-[10px] font-black mb-12 uppercase tracking-[0.3em] flex items-center gap-3">
              <Clock size={14} className="text-orange-500" /> Tour Collections
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-4">
              {TOUR_PACKAGES.map((tour) => (
                <Link
                  key={tour}
                  href={`/package/${tour.toLowerCase().replace(/\s+/g, "-")}-packages`}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-orange-500 flex items-center justify-between group py-2  border-white/5"
                >
                  {tour} Packages
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance & Copyright Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 px-5 py-2.5 rounded-xl">
              <ShieldCheck size={16} className="text-orange-500" />
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                GST: 33BISPK2263C1ZF
              </span>
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600">
              © {currentYear}{" "}
              <span className="text-white">Ak Tours and Travels Travels</span>.
              All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.2em]">
            <span className="text-slate-700">Technology Partner</span>
            <Link
              href="https://wepzite.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-all duration-300"
            >
              <span className="text-orange-500 group-hover:text-orange-600 transition-colors">
                Wepzite
              </span>
              <ArrowUpRight
                size={12}
                className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
