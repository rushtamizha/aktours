"use client";

import React, { useState } from 'react';
import { 
  Car, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Info,
  Send,
  Navigation
} from 'lucide-react';

const TOUR_DATA = [
  {
    id: "ooty-1d",
    route: "Coimbatore - Ooty - Coimbatore",
    duration: "One Day",
    highlights: "Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake, Coonoor Sims Park",
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "5,900" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "5,900" },
      { vehicle: "Mahindra Xylo A/C (SUV)", price: "8,170" },
      { vehicle: "Innova A/C (SUV)", price: "8,170" },
      { vehicle: "Innova Crysta A/C", price: "10,300" },
      { vehicle: "Traveller A/C (14-seater)", price: "11,930" }
    ]
  },
  {
    id: "kodai-1d",
    route: "Coimbatore - Kodaikanal - Coimbatore",
    duration: "One Day",
    highlights: "Silvercascade Falls, Kodai Lake, Bryant Park, Coaker's Walk, Pine Forest, Guna Caves, Pillar Rocks, Green Valley View",
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance",
    pricing: [
      { vehicle: "Swift Dzire AC (Sedan)", price: "8,300" },
      { vehicle: "Toyota Etios AC (Sedan)", price: "8,300" },
      { vehicle: "Innova AC (SUV)", price: "10,100" },
      { vehicle: "Mahindra Xylo AC (SUV)", price: "10,100" },
      { vehicle: "Innova Crysta", price: "11,950" },
      { vehicle: "Traveller AC (Mini Van)", price: "15,350" }
    ]
  },
  {
    id: "valparai-1d",
    route: "Coimbatore - Valparai - Coimbatore",
    duration: "One Day",
    highlights: "Balaji Temple, Solayar Dam, Coolangallu River, Tea Gardens, Aaliyar Dam, Monkey Falls",
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance",
    pricing: [
      { vehicle: "Swift Dzire AC (Sedan)", price: "6,850" },
      { vehicle: "Innova AC (SUV)", price: "8,750" },
      { vehicle: "Innova Crysta", price: "11,250" },
      { vehicle: "Traveller AC (Mini Van)", price: "13,300" }
    ]
  },
  {
    id: "palani-1d",
    route: "Coimbatore - Palani - Coimbatore",
    duration: "One Day",
    highlights: "Direct Trip to Palani Murugan Temple and Back",
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance",
    pricing: [
      { vehicle: "Swift Dzire AC (Sedan)", price: "4,700" },
      { vehicle: "Innova AC (SUV)", price: "6,550" },
      { vehicle: "Innova Crysta", price: "8,250" },
      { vehicle: "Traveller AC (Mini Van)", price: "9,200" }
    ]
  },
  {
    id: "black-thunder-1d",
    route: "Coimbatore - Black Thunder - Coimbatore",
    duration: "One Day (8am - 7pm)",
    highlights: "Water Theme Park Visit",
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance",
    pricing: [
      { vehicle: "Swift Dzire AC (Sedan)", price: "3,300" },
      { vehicle: "Innova AC (SUV)", price: "4,650" },
      { vehicle: "Innova Crysta", price: "6,150" },
      { vehicle: "Traveller AC (Mini Van)", price: "6,750" }
    ]
  },
  {
    id: "munnar-1d",
    route: "Coimbatore - Munnar - Coimbatore",
    duration: "One Day",
    highlights: "Lakkam Water Fall, Mattupatty Dam, Rose Garden, Echo Point, Tea & Spice Plantation",
    inclusions: "Vehicle Cost, Parking, Toll, Driver Allowance, Interstate Permit",
    pricing: [
      { vehicle: "Swift Dzire AC (Sedan)", price: "8,750" },
      { vehicle: "Innova AC (SUV)", price: "10,450" },
      { vehicle: "Innova Crysta", price: "12,200" },
      { vehicle: "Traveller AC (Mini Van)", price: "15,950" }
    ]
  },
  {
    id: "guruvayur-1d",
    route: "Coimbatore - Guruvayur - Coimbatore",
    duration: "One Day",
    highlights: "Guruvayur Krishnan Temple, Mammiyur Temple, Elephant Camp",
    inclusions: "Vehicle Cost, Parking, Toll, Driver Allowance, Interstate Permit",
    pricing: [
      { vehicle: "Swift Dzire AC (Sedan)", price: "7,050" },
      { vehicle: "Innova AC (SUV)", price: "8,800" },
      { vehicle: "Innova Crysta", price: "11,550" },
      { vehicle: "Traveller AC (Mini Van)", price: "12,750" }
    ]
  },
  {
    id: "mysore-1d",
    route: "Coimbatore - Mysore - Coimbatore",
    duration: "One Day",
    highlights: "Chamundi Temple, Mysore Zoo, Mysore Palace, St. Philomina's Church, Rail Museum, Brindavan Gardens",
    inclusions: "Vehicle Cost, Parking, Toll, Driver Allowance, Interstate Permit",
    pricing: [
      { vehicle: "Swift Dzire AC (Sedan)", price: "9,200" },
      { vehicle: "Innova AC (SUV)", price: "12,250" },
      { vehicle: "Innova Crysta", price: "13,950" },
      { vehicle: "Traveller AC (Mini Van)", price: "18,500" }
    ]
  },
  {
    id: "yercaud-1d",
    route: "Coimbatore - Yercaud - Coimbatore",
    duration: "One Day",
    highlights: "Yercaud Lake, Botanical Garden, Pagoda Point, Ladies Seat, Rose Garden, Killiyur Falls, Anna Park",
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance",
    pricing: [
      { vehicle: "Swift Dzire AC (Sedan)", price: "7,950" },
      { vehicle: "Innova AC (SUV)", price: "9,550" },
      { vehicle: "Innova Crysta", price: "11,275" },
      { vehicle: "Traveller AC (Mini Van)", price: "14,000" }
    ]
  },
  {
    id: "madurai-palani-1d",
    route: "Coimbatore - Madurai - Palani - Coimbatore",
    duration: "One Day",
    highlights: "Sree Meenakshi Amman Temple, Thirumalai Nayakar Palace, Palani Temple",
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance",
    pricing: [
      { vehicle: "Swift Dzire AC (Sedan)", price: "8,350" },
      { vehicle: "Innova AC (SUV)", price: "10,150" },
      { vehicle: "Innova Crysta", price: "11,950" },
      { vehicle: "Traveller AC (Mini Van)", price: "15,200" }
    ]
  },
  {
    id: "athirapally-1d",
    route: "Coimbatore - Athirapalli - Malampuzha - Coimbatore",
    duration: "One Day",
    highlights: "Athirapally Water Falls & Malampuzha Dam",
    inclusions: "Vehicle Cost, Parking, Toll, Driver Allowance, Interstate Permit",
    pricing: [
      { vehicle: "Swift Dzire AC (Sedan)", price: "7,200" },
      { vehicle: "Innova AC (SUV)", price: "8,630" },
      { vehicle: "Innova Crysta", price: "10,200" },
      { vehicle: "Traveller AC (Mini Van)", price: "13,080" }
    ]
  },
  {
    id: "topslip-1d",
    route: "Coimbatore - Parambikulam - Topslip - Coimbatore",
    duration: "One Day",
    highlights: "Parambikulam Dam, Lake, Teak Tree, Trekking, Elephant Safari, Masani Amman Temple",
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance",
    pricing: [
      { vehicle: "Swift Dzire AC (Sedan)", price: "5,550" },
      { vehicle: "Innova AC (SUV)", price: "7,200" },
      { vehicle: "Innova Crysta", price: "9,650" },
      { vehicle: "Traveller AC (Mini Van)", price: "10,250" }
    ]
  },
  {
    id: "hogennakal-1d",
    route: "Coimbatore - Hogennakal Falls - Coimbatore",
    duration: "One Day",
    highlights: "Hogennakal Waterfalls Sightseeing and Coracle Ride",
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance",
    pricing: [
      { vehicle: "Swift Dzire AC (Sedan)", price: "7,870" },
      { vehicle: "Innova AC (SUV)", price: "10,250" },
      { vehicle: "Innova Crysta", price: "11,950" },
      { vehicle: "Traveller AC (Mini Van)", price: "14,000" }
    ]
  },
  {
    id: "rameshwaram-madurai-1d",
    route: "Madurai - Rameshwaram - Madurai",
    duration: "One Day",
    highlights: "Ramanathaswamy Temple, Agni Teertham, Dhanushkodi, Pamban Bridge",
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "7,100" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "7,100" },
      { vehicle: "Innova A/C (SUV)", price: "9,500" },
      { vehicle: "Innova Crysta A/C", price: "10,950" },
      { vehicle: "Traveller A/C (14-seater)", price: "12,850" }
    ]
  },
  {
    id: "thiruchendur-madurai-1d",
    route: "Madurai - Thiruchendur - Madurai",
    duration: "One Day",
    highlights: "Thiruchendur Murugan Temple Sightseeing",
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "7,100" },
      { vehicle: "Innova A/C (SUV)", price: "9,100" },
      { vehicle: "Innova Crysta A/C", price: "10,950" },
      { vehicle: "Traveller A/C (14-seater)", price: "12,100" }
    ]
  },
  {
    id: "tirupur-madurai-1d",
    route: "Tirupur - Madurai - Palani - Tirupur",
    duration: "One Day",
    highlights: "Madurai Meenakshi Temple & Palani Temple Visit",
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "8,700" },
      { vehicle: "Innova A/C (SUV)", price: "10,900" },
      { vehicle: "Innova Crysta A/C", price: "12,950" },
      { vehicle: "Traveller A/C (14-seater)", price: "14,800" }
    ]
  }
];

const PackageAccordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleWhatsApp = (route, vehicle, price) => {
    const whatsappNum = "918190022220";
    const text = `*Tour Booking Request*%0A` +
                 `📍 *Route:* ${route}%0A` +
                 `🚗 *Vehicle:* ${vehicle}%0A` +
                 `💰 *Price:* ₹${price}%0A` +
                 `--------------------------%0A` +
                 `Please check availability for my travel date.`;
    window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            One Day <span className="text-orange-600">Tour Packages</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            Click on a destination to view vehicle pricing and details.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {TOUR_DATA.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                openId === item.id ? 'border-orange-500 shadow-xl shadow-orange-900/5' : 'border-slate-100 shadow-sm'
              }`}
            >
              {/* Header Toggle */}
              <button 
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    openId === item.id ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <Navigation size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 md:text-lg leading-tight">{item.route}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-black uppercase text-orange-600 tracking-widest">{item.duration}</span>
                      <span className="text-slate-300 text-xs">|</span>
                      <span className="text-[11px] text-slate-400 truncate max-w-[200px] md:max-w-md">{item.highlights}</span>
                    </div>
                  </div>
                </div>
                {openId === item.id ? <ChevronUp className="text-orange-600" /> : <ChevronDown className="text-slate-300" />}
              </button>

              {/* Collapsible Content */}
              <div className={`transition-all duration-500 ease-in-out ${
                openId === item.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-8 md:px-8">
                  
                  {/* Highlights Grid */}
                  <div className="bg-slate-50 rounded-2xl p-5 mb-6 border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <MapPin size={12} className="text-orange-500" /> Sightseeing Highlights
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed italic">
                      {item.highlights}
                    </p>
                  </div>

                  {/* Vehicle Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-separate border-spacing-y-2">
                      <thead>
                        <tr className="text-[10px] font-black uppercase text-slate-400 tracking-widest text-left">
                          <th className="px-4">Vehicle</th>
                          <th className="px-4 text-right">Price</th>
                          <th className="px-4 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.pricing?.map((p, idx) => (
                          <tr key={idx} className="bg-white border border-slate-50 shadow-sm group hover:border-orange-200 transition-colors">
                            <td className="px-4 py-4 rounded-l-xl border-y border-l border-slate-100">
                              <div className="flex items-center gap-3">
                                <Car size={14} className="text-orange-500" />
                                <span className="text-sm font-bold text-slate-700">{p.vehicle}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-right border-y border-slate-100">
                              <span className="text-sm font-black text-slate-900">₹{p.price}</span>
                            </td>
                            <td className="px-4 py-4 text-center rounded-r-xl border-y border-r border-slate-100">
                              <button 
                                onClick={() => handleWhatsApp(item.route, p.vehicle, p.price)}
                                className="bg-orange-600 text-white p-2 md:px-4 md:py-2 rounded-lg text-[10px] font-black uppercase hover:bg-slate-900 transition-all flex items-center gap-2 mx-auto"
                              >
                                Book <Send size={10} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Footer Notes */}
                  <div className="mt-6 flex items-start gap-2 border-t border-slate-100 pt-6">
                    <Info size={14} className="text-orange-500 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-slate-400 font-medium">
                      <span className="text-slate-900 font-bold uppercase">Cost Includes:</span> {item.inclusions}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-slate-900 rounded-[2.5rem] p-8 text-center">
           <h4 className="text-white font-bold mb-2">Can't find your destination?</h4>
           <p className="text-slate-400 text-xs mb-6 font-medium">We offer customized packages for 2, 3, and 5-day tours.</p>
           <a href="tel:918190022220" className="inline-flex items-center gap-2 text-orange-400 font-black uppercase text-xs tracking-widest border border-orange-400/30 px-6 py-3 rounded-xl hover:bg-orange-400 hover:text-slate-900 transition-all">
             Contact Specialist
           </a>
        </div>

      </div>
    </div>
  );
};

export default PackageAccordion;