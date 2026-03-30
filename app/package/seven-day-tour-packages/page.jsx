"use client";

import React, { useState } from 'react';
import { 
  Car, MapPin, ChevronDown, ChevronUp, Clock, Info, Send, Navigation, Calendar 
} from 'lucide-react';

const SEVEN_DAY_DATA = [
  {
    id: "cbe-ooty-kodai-munnar-7d",
    route: "Coimbatore - Ooty - Kodaikanal - Munnar - Coimbatore",
    duration: "7 Days / 6 Nights",
    itinerary: {
      day1: "Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake.",
      day2: "Cine Shooting Spot, Pykara Falls & Boating, Mudumalai Wildlife.",
      day3: "To Kodaikanal: Silver Cascade Falls, Museum, Kodai Lake, Bryant Park. Stay at Kodai.",
      day4: "Pine Forest, Guna Cave, Pillar Rock, Green Valley View, Coaker's Walk. Proceed to Munnar.",
      day5: "Munnar: Rose Garden, Photo Point, Honey Tree, Elephant Camp, Mattupatty Dam, Echo Point, Top Station.",
      day6: "Rajamalai Wildlife, Lakkam Water Falls, Sandal Forest.",
      day7: "Morning leisure and return journey to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "28,050" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "28,050" },
      { vehicle: "Innova A/C (SUV)", price: "36,250" },
      { vehicle: "Innova Crysta A/C", price: "49,400" },
      { vehicle: "Traveller A/C (14-seater)", price: "54,340" }
    ]
  },
  {
    id: "cbe-ooty-kodai-munnar-thekkady-alleppey-7d",
    route: "Coimbatore - Ooty - Kodaikanal - Munnar - Thekkady - Alleppey - Coimbatore",
    duration: "7 Days / 6 Nights",
    itinerary: {
      day1: "Coonoor: Dolphin Nose, Lamb's Rock, Tea Gardens, Sims Park.",
      day2: "Ooty: Doddabetta, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake, Shooting Point, Pykara Falls.",
      day3: "To Kodaikanal: Silver Cascade Falls, Museum, Kodai Lake, Bryant Park, Coaker's Walk.",
      day4: "To Munnar: Rose Garden, Photo Point, Mattupatty Dam, Echo Point, Top Station.",
      day5: "To Thekkady: Spice Plantation, Elephant Camp, Periyar Wildlife.",
      day6: "To Alleppey: Houseboat stay and backwater cruise.",
      day7: "Return to Coimbatore or Cochin Drop."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "32,450" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "32,450" },
      { vehicle: "Innova A/C (SUV)", price: "41,600" },
      { vehicle: "Innova Crysta A/C", price: "55,520" },
      { vehicle: "Traveller A/C (14-seater)", price: "60,900" }
    ]
  },
  {
    id: "cbe-ooty-kodai-madurai-rameshwaram-kanyakumari-7d",
    route: "Coimbatore - Ooty - Kodaikanal - Madurai - Rameshwaram - Kanyakumari",
    duration: "7 Days / 6 Nights",
    itinerary: {
      day1: "Ooty: Doddabetta, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake, Wax World.",
      day2: "Shooting Point, Pykara Falls, Mudumalai Wildlife.",
      day3: "Coonoor: Dolphin Nose, Lamb's Rock, Tea Gardens. Proceed to Kodaikanal.",
      day4: "Kodaikanal: Pine Forest, Guna Cave, Pillar Rock, Green Valley View, Bryant Park, Kodai Lake.",
      day5: "To Madurai: Sri Meenakshi Temple visit. Proceed to Rameshwaram.",
      day6: "Rameshwaram: Ramanathaswamy Temple, Dhanushkodi, Kalam Memorial. To Kanyakumari.",
      day7: "Kanyakumari Local Sightseeing. Back to Madurai or Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "35,250" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "35,250" },
      { vehicle: "Innova A/C (SUV)", price: "45,100" },
      { vehicle: "Innova Crysta A/C", price: "60,000" },
      { vehicle: "Traveller A/C (14-seater)", price: "66,300" }
    ]
  },
  {
    id: "blr-mysore-ooty-kodai-blr-7d",
    route: "Bangalore - Mysore - Ooty - Kodaikanal - Bangalore",
    duration: "7 Days / 6 Nights",
    itinerary: {
      day1: "Bangalore: Tipu's Palace, Lalbagh, Museum, Vidhana Soudha.",
      day2: "To Mysore: Palace, Brindavan Gardens, Chamundi Hills, Zoo.",
      day3: "To Ooty via Mudumalai: Shooting Point, Pykara Falls & Lake.",
      day4: "Ooty: Rose Garden, Lake, Thread Garden, Doddabetta, Tea Factory.",
      day5: "To Kodaikanal via Coonoor: Dolphin's Nose, Lamb's Rock, Sims Park.",
      day6: "Kodaikanal: Pillar Rocks, Bryant Park, Guna Cave, Bear Shola Falls.",
      day7: "Return to Bangalore City or Airport Drop."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "36,150" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "36,150" },
      { vehicle: "Innova A/C (SUV)", price: "47,350" },
      { vehicle: "Innova Crysta A/C", price: "61,800" },
      { vehicle: "Traveller A/C (14-seater)", price: "70,050" }
    ]
  },
  {
    id: "cbe-kerala-kovalam-7d",
    route: "Coimbatore - Munnar - Thekkady - Alleppey - Kovalam - Coimbatore",
    duration: "7 Days / 6 Nights",
    itinerary: {
      highlights: "Full Kerala experience covering Munnar hills, Thekkady wildlife, Alleppey backwaters, and Kovalam beach with Coimbatore return."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "30,950" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "30,950" },
      { vehicle: "Innova A/C (SUV)", price: "43,950" },
      { vehicle: "Innova Crysta A/C", price: "51,275" },
      { vehicle: "Traveller A/C (14-seater)", price: "54,800" }
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
          {SEVEN_DAY_DATA.map((item) => (
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