"use client";

import React, { useState } from 'react';
import { 
  Car, MapPin, ChevronDown, ChevronUp, Clock, Info, Send, Navigation, Calendar 
} from 'lucide-react';

const FIVE_DAY_DATA = [
  {
    id: "cbe-ooty-5d",
    route: "Coimbatore - Ooty - Coimbatore",
    duration: "5 Days / 4 Nights",
    itinerary: {
      highlights: "Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake, Coonoor Sims Park."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "15,390" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "15,390" },
      { vehicle: "Innova A/C (SUV)", price: "21,700" },
      { vehicle: "Innova Crysta A/C", price: "29,200" },
      { vehicle: "Traveller A/C (14-seater)", price: "31,500" }
    ]
  },
  {
    id: "cbe-ooty-kodai-5d",
    route: "Coimbatore - Ooty - Kodaikanal - Coimbatore",
    duration: "5 Days / 4 Nights",
    itinerary: {
      day1: "Coonoor Dolphin Nose, Tea Gardens, Lamb's Rock, Sims Park.",
      day2: "Doddabetta Peak, Botanical Garden, Rose Garden, Ooty Lake, Shooting Spots, Pykara Falls & Lake.",
      day3: "Ooty to Kodai: Silver Cascade Falls, Kodai Lake.",
      day4: "Pine Forest, Pillar Rock, Guna Cave, Green Valley View, Coaker's Walk, Back to Coimbatore.",
      day5: "Local sightseeing and leisure before departure."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "20,200" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "20,200" },
      { vehicle: "Innova A/C (SUV)", price: "26,130" },
      { vehicle: "Innova Crysta A/C", price: "35,440" },
      { vehicle: "Traveller A/C (14-seater)", price: "38,850" }
    ]
  },
  {
    id: "cbe-ooty-kodai-madurai-5d",
    route: "Coimbatore - Ooty - Kodaikanal - Madurai",
    duration: "5 Days / 4 Nights",
    itinerary: {
      day1: "Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake.",
      day2: "Cine Shooting Point, Pykara Falls & Boating, Mudumalai Wildlife.",
      day3: "Ooty to Kodaikanal via Coonoor: Sims Park, Tea Gardens, Lamb's Rock, Dolphin's Nose.",
      day4: "Kodaikanal: Pine Forest, Guna Cave, Pillar Rock, Green Valley View, Coaker's Walk, Bryant Park, Kodai Lake.",
      day5: "After breakfast, proceed to Madurai Sri Meenakshi Temple. Drop at Madurai or Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "22,690" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "22,690" },
      { vehicle: "Innova A/C (SUV)", price: "29,350" },
      { vehicle: "Innova Crysta A/C", price: "39,800" },
      { vehicle: "Traveller A/C (14-seater)", price: "41,000" }
    ]
  },
  {
    id: "cbe-kodai-munnar-5d",
    route: "Coimbatore - Kodaikanal - Munnar - Coimbatore",
    duration: "5 Days / 4 Nights",
    itinerary: {
      day1: "Palani Temple, Silver Cascade Falls, Museum, Kodai Lake.",
      day2: "Pine Forest, Guna Cave, Pillar Rock, Green Valley View, Coaker's Walk, Bryant Park.",
      day3: "Kodai to Munnar: Rose Garden, Mattupatty Dam, Echo Point, Tea Museum, Top Station.",
      day4: "Rajamalai Wildlife, Lakkam Falls.",
      day5: "Return journey to Coimbatore with en-route sightseeing."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "19,590" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "19,590" },
      { vehicle: "Innova A/C (SUV)", price: "25,450" },
      { vehicle: "Innova Crysta A/C", price: "34,850" },
      { vehicle: "Traveller A/C (14-seater)", price: "39,050" }
    ]
  },
  {
    id: "cbe-south-india-pillgrimage-5d",
    route: "Coimbatore - Kodaikanal - Madurai - Rameshwaram - Kanyakumari - Coimbatore",
    duration: "5 Days / 4 Nights",
    itinerary: {
      day1: "Palani Temple, Silver Cascade Falls, Museum. Overnight stay at Kodai.",
      day2: "Kodaikanal: Pine Forest, Guna Cave, Pillar Rock, Green Valley View, Bryant Park, Kodai Lake, Kurinji Andavar Temple.",
      day3: "Kodaikanal to Madurai: Sri Meenakshi Temple, proceeding to Rameshwaram.",
      day4: "Rameshwaram: Sri Ramanathaswamy Temple, Surrounding Temples, Dr. APJ Abdul Kalam Memorial. Proceeding to Kanyakumari.",
      day5: "Kanyakumari Local Sightseeing & Back to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "27,850" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "27,850" },
      { vehicle: "Innova A/C (SUV)", price: "35,185" },
      { vehicle: "Innova Crysta A/C", price: "47,570" },
      { vehicle: "Traveller A/C (14-seater)", price: "48,450" }
    ]
  },
  {
    id: "cbe-ooty-munnar-5d",
    route: "Coimbatore - Ooty - Munnar - Coimbatore",
    duration: "5 Days / 4 Nights",
    itinerary: {
      day1: "Doddabetta Peak, Tea Museum, Rose Garden, Botanical Garden, Ooty Lake.",
      day2: "Cine Shooting Spot, Pykara Falls & Boating, Mudumalai Wildlife.",
      day3: "Ooty to Munnar: Coonoor Sims Park, Tea Gardens, Lamb's Rock, Dolphin's Nose. Proceed to Munnar.",
      day4: "Munnar: Rose Garden, Photo Point, Elephant Camp, Mattupatty Dam, Echo Point, Top Station.",
      day5: "Rajamalai Wildlife, Lakkam Water Falls, Back to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "20,450" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "20,450" },
      { vehicle: "Innova A/C (SUV)", price: "26,450" },
      { vehicle: "Innova Crysta A/C", price: "36,150" },
      { vehicle: "Traveller A/C (14-seater)", price: "37,650" }
    ]
  },
  {
    id: "cbe-ooty-mysore-coorg-mangalore-5d",
    route: "Coimbatore - Ooty - Mysore - Coorg - Mangalore",
    duration: "5 Days / 4 Nights",
    itinerary: {
      day1: "Coonoor: Dolphin's Nose, Tea Gardens, Lamb's Rock, Sims Park.",
      day2: "Ooty: Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake, Pykara Falls & Boating.",
      day3: "Mysore: Chamundi Hill, Mysore Zoo, Mysore Palace, Brindhavan Garden (KRS Dam).",
      day4: "Coorg: Golden Temple, Kaveri Nisargadhama, Abbey Falls, Raja Seat, Omkareswara Temple, Madikeri Fort.",
      day5: "After breakfast, proceed to Mangalore Airport/Railway Station."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "26,800" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "26,800" },
      { vehicle: "Innova A/C (SUV)", price: "34,500" },
      { vehicle: "Innova Crysta A/C", price: "45,400" },
      { vehicle: "Traveller A/C (14-seater)", price: "49,450" }
    ]
  },
  {
    id: "cbe-ooty-wayanad-5d",
    route: "Coimbatore - Ooty - Wayanad - Coimbatore",
    duration: "5 Days / 4 Nights",
    itinerary: {
      day1: "Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake, Thread Garden.",
      day2: "Shooting Spot, Pykara Falls & Boating. Transfer to Wayanad.",
      day3: "Banasura Sagar Dam, Edakkal Cave, Soochipara Falls.",
      day4: "Pookot Lake, Lakkidi View Point.",
      day5: "Wayanad local exploration and return to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "19,200" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "19,200" },
      { vehicle: "Innova A/C (SUV)", price: "26,200" },
      { vehicle: "Innova Crysta A/C", price: "34,700" },
      { vehicle: "Traveller A/C (14-seater)", price: "37,900" }
    ]
  },
  {
    id: "cbe-munnar-alleppey-cochin-5d",
    route: "Coimbatore - Munnar - Alleppey - Cochin - Coimbatore",
    duration: "5 Days / 4 Nights",
    itinerary: {
      highlights: "Munnar Tea Gardens, Alleppey Houseboat/Backwaters, Cochin Fort and Marine Drive, Return to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "20,650" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "20,650" },
      { vehicle: "Innova A/C (SUV)", price: "28,050" },
      { vehicle: "Innova Crysta A/C", price: "32,650" },
      { vehicle: "Traveller A/C (14-seater)", price: "34,950" }
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
            2 Days / 1 Night <span className="text-orange-600">Tour Packages</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium">Explore South India with our curated two-day itineraries.</p>
        </div>

        <div className="space-y-4">
          {FIVE_DAY_DATA.map((item) => (
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