"use client";

import React, { useState } from 'react';
import { 
  Car, MapPin, ChevronDown, ChevronUp, Clock, Info, Send, Navigation, Calendar 
} from 'lucide-react';

const THREE_DAY_DATA = [
  {
    id: "cbe-ooty-3d",
    route: "Coimbatore - Ooty - Coimbatore",
    duration: "3 Days / 2 Nights",
    itinerary: {
      highlights: "Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake, Coonoor Sims Park."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "10,150" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "10,150" },
      { vehicle: "Innova A/C (SUV)", price: "14,250" },
      { vehicle: "Innova Crysta A/C", price: "18,800" },
      { vehicle: "Traveller A/C (14-seater)", price: "20,380" }
    ]
  },
  {
    id: "cbe-kodai-3d",
    route: "Coimbatore - Kodaikanal - Coimbatore",
    duration: "3 Days / 2 Nights",
    itinerary: {
      highlights: "Silver Cascade Falls, Kodai Lake, Bryant Park, Coaker's Walk, Pine Forest, Guna Caves, Pillar Rocks, Green Valley View."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "12,350" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "12,350" },
      { vehicle: "Innova A/C (SUV)", price: "16,050" },
      { vehicle: "Innova Crysta A/C", price: "22,300" },
      { vehicle: "Traveller A/C (14-seater)", price: "24,350" }
    ]
  },
  {
    id: "cbe-munnar-3d",
    route: "Coimbatore - Munnar - Coimbatore",
    duration: "3 Days / 2 Nights",
    itinerary: {
      highlights: "Lakkam Water Fall, Mattupatty Dam, Rose Garden, Echo Point, Tea Plantation & Spice Plantation."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "12,930" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "12,930" },
      { vehicle: "Innova A/C (SUV)", price: "16,550" },
      { vehicle: "Innova Crysta A/C", price: "22,450" },
      { vehicle: "Traveller A/C (14-seater)", price: "24,900" }
    ]
  },
  {
    id: "cbe-wayanad-3d",
    route: "Coimbatore - Wayanad - Coimbatore",
    duration: "3 Days / 2 Nights",
    itinerary: {
      day1: "Meenmutty Water Falls, Soochippara Water Fall.",
      day2: "Banasura Sagar Dam, Kuruva Island, Edakal Caves.",
      day3: "Lakkidi View Point, Pookot Lake, Back to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "13,600" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "13,600" },
      { vehicle: "Innova A/C (SUV)", price: "17,420" },
      { vehicle: "Innova Crysta A/C", price: "23,350" },
      { vehicle: "Traveller A/C (14-seater)", price: "25,900" }
    ]
  },
  {
    id: "cbe-ooty-mysore-3d",
    route: "Coimbatore - Ooty - Mysore - Coimbatore",
    duration: "3 Days / 2 Nights",
    itinerary: {
      day1: "Coonoor Sightseeing: Dolphin's Nose, Tea Gardens, Lamb's Rock, Sims Park.",
      day2: "Ooty Sightseeing: Doddabetta Peak, Tea Museum, Botanical & Rose Gardens, Ooty Lake, Pykara Falls & Boating.",
      day3: "Mysore Sightseeing: Chamundi Temple, Mysore Zoo, Mysore Palace, Rail Museum, Brindavan Garden, Back to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "15,100" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "15,100" },
      { vehicle: "Innova A/C (SUV)", price: "20,000" },
      { vehicle: "Innova Crysta A/C", price: "26,050" },
      { vehicle: "Traveller A/C (14-seater)", price: "31,250" }
    ]
  },
  {
    id: "cbe-mysore-coorg-3d",
    route: "Coimbatore - Mysore - Coorg - Coimbatore",
    duration: "3 Days / 2 Nights",
    itinerary: {
      day1: "Mysore Palace, Mysore Zoo, Chamundi Temple, Rail Museum, Brindavan Garden.",
      day2: "Abbey Falls, Omkareswara Temple, Raja Seat, Madikeri Fort, Local Shopping.",
      day3: "Dubbare Elephant Camp, Kaveri Nisargadhama, Golden Temple, Back to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "16,400" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "16,400" },
      { vehicle: "Innova A/C (SUV)", price: "22,430" },
      { vehicle: "Innova Crysta A/C", price: "28,930" },
      { vehicle: "Traveller A/C (14-seater)", price: "33,200" }
    ]
  },
  {
    id: "cbe-valparai-3d",
    route: "Coimbatore - Valparai - Coimbatore",
    duration: "3 Days / 2 Nights",
    itinerary: {
      highlights: "Balaji Temple, Sholayar Dam, Koolangallu River, Tea Gardens, Aaliyar Dam, Monkey Falls, Scenic Road Views."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "10,700" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "10,700" },
      { vehicle: "Innova A/C (SUV)", price: "14,800" },
      { vehicle: "Innova Crysta A/C", price: "19,700" },
      { vehicle: "Traveller A/C (14-seater)", price: "21,700" }
    ]
  },
  {
    id: "cbe-mysore-only-3d",
    route: "Coimbatore - Mysore - Coimbatore",
    duration: "3 Days / 2 Nights",
    itinerary: {
      highlights: "Chamundi Temple, Mysore Zoo, Mysore Palace, St. Philomena's Church, Rail Museum, Brindavan Gardens."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "14,420" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "14,420" },
      { vehicle: "Innova A/C (SUV)", price: "20,000" },
      { vehicle: "Innova Crysta A/C", price: "25,050" },
      { vehicle: "Traveller A/C (14-seater)", price: "30,120" }
    ]
  },
  {
    id: "cbe-rameshwaram-madurai-3d",
    route: "Coimbatore - Rameshwaram - Madurai - Coimbatore",
    duration: "3 Days / 2 Nights",
    itinerary: {
      highlights: "Ramanathaswamy Temple, Dhanushkodi, Pamban Bridge, Madurai Meenakshi Amman Temple Darshan."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "16,250" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "16,250" },
      { vehicle: "Innova A/C (SUV)", price: "22,950" },
      { vehicle: "Innova Crysta A/C", price: "26,500" },
      { vehicle: "Traveller A/C (14-seater)", price: "27,750" }
    ]
  },
  {
    id: "cbe-sabarimalai-3d",
    route: "Coimbatore - Sabarimalai - Palani - Coimbatore",
    duration: "3 Days / 2 Nights",
    itinerary: {
      highlights: "Sabarimalai Temple Pilgrimage, Palani Murugan Temple Darshan."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "15,700" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "15,700" },
      { vehicle: "Innova A/C (SUV)", price: "21,700" },
      { vehicle: "Innova Crysta A/C", price: "25,850" },
      { vehicle: "Traveller A/C (14-seater)", price: "27,350" }
    ]
  }
];

const TwoDayPackages = () => {
  const [openId, setOpenId] = useState(null);

  const handleWhatsApp = (route, vehicle, price) => {
    const whatsappNum = "918190022220";
    const text = `*Two-Day Tour Booking*%0A` +
                 `📍 *Route:* ${route}%0A` +
                 `🚗 *Vehicle:* ${vehicle}%0A` +
                 `💰 *Price:* ₹${price}%0A` +
                 `--------------------------%0A` +
                 `I want to book this 2-day package. Please confirm availability.`;
    window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
             <span className="text-orange-600">Tour Packages</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium">Explore South India with our curated two-day itineraries.</p>
        </div>

        <div className="space-y-4">
          {THREE_DAY_DATA.map((item) => (
            <div key={item.id} className={`bg-white rounded-3xl border transition-all duration-300 ${openId === item.id ? 'border-orange-500 shadow-xl' : 'border-slate-100 shadow-sm'}`}>
              <button onClick={() => setOpenId(openId === item.id ? null : item.id)} className="w-full flex items-center justify-between p-6 md:p-8 text-left">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${openId === item.id ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 md:text-lg">{item.route}</h3>
                    <span className="text-[10px] font-black uppercase text-orange-600 tracking-widest">{item.duration}</span>
                  </div>
                </div>
                {openId === item.id ? <ChevronUp className="text-orange-600" /> : <ChevronDown className="text-slate-300" />}
              </button>

              {openId === item.id && (
                <div className="px-6 pb-8 md:px-8 border-t border-slate-50 pt-6">
                  {/* Itinerary Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="text-[10px] font-black text-orange-600 uppercase mb-2">Day 01</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.itinerary.day1}</p>
                    </div>
                    <div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100">
                      <h4 className="text-[10px] font-black text-orange-600 uppercase mb-2">Day 02</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.itinerary.day2}</p>
                    </div>
                  </div>

                  {/* Pricing Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-separate border-spacing-y-2">
                      <thead>
                        <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <th className="px-4 py-2 text-left">Vehicle Choice</th>
                          <th className="px-4 py-2 text-right">Package Price</th>
                          <th className="px-4 py-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.pricing.map((p, idx) => (
                          <tr key={idx} className="bg-white border border-slate-100 shadow-sm">
                            <td className="px-4 py-4 rounded-l-xl border-y border-l border-slate-50">
                              <div className="flex items-center gap-3">
                                <Car size={14} className="text-orange-500" />
                                <span className="text-sm font-bold text-slate-700">{p.vehicle}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm font-black text-slate-900 text-right border-y border-slate-50">₹{p.price}</td>
                            <td className="px-4 py-4 text-center rounded-r-xl border-y border-r border-slate-50">
                              <button onClick={() => handleWhatsApp(item.route, p.vehicle, p.price)} className="bg-slate-900 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-orange-600 transition-all">Book Now</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex items-start gap-2 pt-6 border-t border-slate-100">
                    <Info size={14} className="text-orange-500 mt-0.5" />
                    <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                      <span className="text-slate-900 font-bold uppercase">INCLUDES:</span> {item.inclusions}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoDayPackages;