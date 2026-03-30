"use client";

import React, { useState } from 'react';
import { 
  Car, MapPin, ChevronDown, ChevronUp, Clock, Info, Send, Navigation, Calendar 
} from 'lucide-react';

const NINE_DAY_DATA = [
  {
    id: "blr-mysore-coorg-ooty-kodai-cbe-9d",
    route: "Bangalore - Mysore - Coorg - Ooty - Kodaikanal - Coimbatore",
    duration: "9 Days / 8 Nights",
    itinerary: {
      day1: "Bangalore Pickup, Local Sightseeing, Stay.",
      day2: "Bangalore to Mysore, Stay at Mysore.",
      day3: "Mysore to Coorg, Stay at Coorg.",
      day4: "Coorg Local Sightseeing, Stay at Coorg.",
      day5: "Coorg to Ooty, Stay at Ooty.",
      day6: "Ooty Local Sightseeing, Stay at Ooty.",
      day7: "Ooty to Kodaikanal, Stay at Kodaikanal.",
      day8: "Kodaikanal Local Sightseeing, Stay at Kodaikanal.",
      day9: "Kodaikanal to Coimbatore Drop."
    },
    inclusions: "Cab Rent, Fuel, Driver Allowance, Parking, Toll Charges & Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "42,000" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "42,000" },
      { vehicle: "Innova A/C (SUV)", price: "55,000" },
      { vehicle: "Innova Crysta A/C", price: "58,000" },
      { vehicle: "Traveller Non A/C (14-seater)", price: "66,000" },
      { vehicle: "Traveller A/C (14-seater)", price: "69,000" }
    ]
  },
  {
    id: "blr-mysore-ooty-cbe-kodai-madurai-9d",
    route: "Bangalore - Mysore - Ooty - Coimbatore - Kodaikanal - Madurai",
    duration: "9 Days / 8 Nights",
    itinerary: {
      day1: "Bangalore Pickup, Local Sightseeing, Stay.",
      day2: "Bangalore to Mysore, Stay at Mysore.",
      day3: "Mysore to Ooty, Stay at Ooty.",
      day4: "Ooty Local Sightseeing, Stay at Ooty.",
      day5: "Ooty to Coimbatore, Stay at Coimbatore.",
      day6: "Coimbatore to Kodaikanal, Stay at Kodaikanal.",
      day7: "Kodaikanal Local Sightseeing, Stay at Kodaikanal.",
      day8: "Kodaikanal to Madurai, Stay at Madurai.",
      day9: "Madurai Local Sightseeing and Drop."
    },
    inclusions: "Cab Rent, Fuel, Driver Allowance, Parking, Toll Charges & Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "41,550" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "41,550" },
      { vehicle: "Innova A/C (SUV)", price: "54,450" },
      { vehicle: "Innova Crysta A/C", price: "57,265" },
      { vehicle: "Traveller Non A/C (14-seater)", price: "65,950" },
      { vehicle: "Traveller A/C (14-seater)", price: "68,850" }
    ]
  },
  {
    id: "blr-mysore-coorg-ooty-kodai-madurai-9d",
    route: "Bangalore - Mysore - Coorg - Ooty - Kodaikanal - Madurai",
    duration: "9 Days / 8 Nights",
    itinerary: {
      day1: "Bangalore Pickup, Local Sightseeing, Stay.",
      day2: "Bangalore to Mysore, Stay at Mysore.",
      day3: "Mysore to Coorg, Stay at Coorg.",
      day4: "Coorg Local Sightseeing, Stay at Coorg.",
      day5: "Coorg to Ooty, Stay at Ooty.",
      day6: "Ooty Local Sightseeing, Stay at Ooty.",
      day7: "Ooty to Kodaikanal, Stay at Kodaikanal.",
      day8: "Kodaikanal Local Sightseeing, Stay at Kodaikanal.",
      day9: "Kodaikanal to Coimbatore Drop (Madurai Finish via CBE)."
    },
    inclusions: "Cab Rent, Fuel, Driver Allowance, Parking, Toll Charges & Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "41,750" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "41,750" },
      { vehicle: "Innova A/C (SUV)", price: "54,750" },
      { vehicle: "Innova Crysta A/C", price: "57,550" },
      { vehicle: "Traveller Non A/C (14-seater)", price: "65,950" },
      { vehicle: "Traveller A/C (14-seater)", price: "68,950" }
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
          {NINE_DAY_DATA.map((item) => (
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