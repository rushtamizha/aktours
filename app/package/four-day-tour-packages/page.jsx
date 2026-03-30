"use client";

import React, { useState } from 'react';
import { 
  Car, MapPin, ChevronDown, ChevronUp, Clock, Info, Send, Navigation, Calendar 
} from 'lucide-react';

const FOUR_DAY_DATA = [
  {
    id: "cbe-ooty-4d",
    route: "Coimbatore - Ooty - Coimbatore",
    duration: "4 Days / 3 Nights",
    itinerary: {
      highlights: "Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake, Coonoor Sims Park."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "12,700" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "12,700" },
      { vehicle: "Innova A/C (SUV)", price: "17,440" },
      { vehicle: "Innova Crysta A/C", price: "22,950" },
      { vehicle: "Traveller A/C (14-seater)", price: "25,440" }
    ]
  },
  {
    id: "cbe-kodai-4d",
    route: "Coimbatore - Kodaikanal - Coimbatore",
    duration: "4 Days / 3 Nights",
    itinerary: {
      highlights: "Silver Cascade Falls, Kodai Lake, Bryant Park, Coaker's Walk, Pine Forest, Guna Caves, Pillar Rocks, Green Valley View."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "14,350" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "14,350" },
      { vehicle: "Innova A/C (SUV)", price: "18,640" },
      { vehicle: "Innova Crysta A/C", price: "26,050" },
      { vehicle: "Traveller A/C (14-seater)", price: "26,950" }
    ]
  },
  {
    id: "cbe-ooty-kodai-4d",
    route: "Coimbatore - Ooty - Kodaikanal - Coimbatore",
    duration: "4 Days / 3 Nights",
    itinerary: {
      day1: "Coonoor Dolphin Nose, Tea Gardens, Lamb's Rock, Sims Park.",
      day2: "Doddabetta Peak, Botanical Garden, Rose Garden, Ooty Lake, Shooting Spots, Pykara Falls & Lake.",
      day3: "Ooty to Kodai transfer, Silver Cascade Falls, Kodai Lake.",
      day4: "Pine Forest, Pillar Rock, Guna Cave, Green Valley View, Coaker's Walk, Back to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "18,100" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "18,100" },
      { vehicle: "Innova A/C (SUV)", price: "23,450" },
      { vehicle: "Innova Crysta A/C", price: "31,600" },
      { vehicle: "Traveller A/C (14-seater)", price: "34,750" }
    ]
  },
  {
    id: "cbe-kodai-madurai-4d",
    route: "Coimbatore - Kodaikanal - Madurai - Coimbatore",
    duration: "4 Days / 3 Nights",
    itinerary: {
      day1: "Palani Temple, Silver Cascade Falls, Museum.",
      day2: "Pine Forest, Guna Cave, Pillar Rock, Green Valley View, Coaker's Walk, Bryant Park, Kodai Lake.",
      day3: "Kodai to Madurai: Sri Meenakshi Temple, Thirumalai Nayakar Palace, Alagar Kovil, Palamuthir Solai.",
      day4: "Breakfast and proceeding to Coimbatore (Airport/Railway Station)."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "16,050" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "16,050" },
      { vehicle: "Innova A/C (SUV)", price: "21,050" },
      { vehicle: "Innova Crysta A/C", price: "29,500" },
      { vehicle: "Traveller A/C (14-seater)", price: "32,650" }
    ]
  },
  {
    id: "cbe-munnar-4d",
    route: "Coimbatore - Munnar - Coimbatore",
    duration: "4 Days / 3 Nights",
    itinerary: {
      highlights: "Lakkam Water Fall, Mattupatty Dam, Rose Garden, Echo Point, Tea Plantation & Spice Plantation."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "14,550" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "14,550" },
      { vehicle: "Innova A/C (SUV)", price: "19,100" },
      { vehicle: "Innova Crysta A/C", price: "26,550" },
      { vehicle: "Traveller A/C (14-seater)", price: "29,070" }
    ]
  },
  {
    id: "cbe-kodai-munnar-4d",
    route: "Coimbatore - Kodaikanal - Munnar - Coimbatore",
    duration: "4 Days / 3 Nights",
    itinerary: {
      day1: "Palani Temple, Silver Cascade Falls, Museum, Kodai Lake.",
      day2: "Pine Forest, Guna Cave, Pillar Rock, Green Valley View, Coaker's Walk, Bryant Park.",
      day3: "Kodai to Munnar: Rose Garden, Mattupatty Dam, Echo Point, Tea Museum, Top Station.",
      day4: "Rajamalai Wildlife, Lakkam Falls, Drop at Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "17,800" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "17,800" },
      { vehicle: "Innova A/C (SUV)", price: "24,500" },
      { vehicle: "Innova Crysta A/C", price: "30,950" },
      { vehicle: "Traveller A/C (14-seater)", price: "34,320" }
    ]
  },
  {
    id: "cbe-ooty-mysore-blr-4d",
    route: "Coimbatore - Ooty - Mysore - Bangalore",
    duration: "4 Days / 3 Nights",
    itinerary: {
      day1: "Coonoor Dolphin Nose, Tea Gardens, Lamb's Rock, Sims Park.",
      day2: "Doddabetta Peak, Tea Museum, Botanical & Rose Gardens, Ooty Lake.",
      day3: "Ooty to Mysore: Shooting Spot, Pykara Falls & Boating, Mudumalai Wildlife.",
      day4: "Chamundi Temple, Mysore Zoo, Mysore Palace, Rail Museum, Brindavan Garden, Drop at Bangalore Airport/City."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "22,420" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "22,420" },
      { vehicle: "Innova A/C (SUV)", price: "31,650" },
      { vehicle: "Innova Crysta A/C", price: "38,440" },
      { vehicle: "Traveller A/C (14-seater)", price: "44,530" }
    ]
  },
  {
    id: "cbe-munnar-thekkady-4d",
    route: "Coimbatore - Munnar - Thekkady - Coimbatore",
    duration: "4 Days / 3 Nights",
    itinerary: {
      day1: "Lakkam Water Falls, Rajamalai Wildlife.",
      day2: "Rose Garden, Elephant Camp, Honey Tree, Mattupatty Dam, Echo Point, Top Station, Tea Museum.",
      day3: "Munnar to Thekkady: Periyar Wildlife Sanctuary (Boating), Elephant Safari, Spice Plantation, Kerala Cultural Program.",
      day4: "Breakfast and proceeding back to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "17,800" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "17,800" },
      { vehicle: "Innova A/C (SUV)", price: "24,450" },
      { vehicle: "Innova Crysta A/C", price: "30,950" },
      { vehicle: "Traveller A/C (14-seater)", price: "34,150" }
    ]
  },
  {
    id: "cbe-ooty-wayanad-4d",
    route: "Coimbatore - Ooty - Wayanad - Coimbatore",
    duration: "4 Days / 3 Nights",
    itinerary: {
      day1: "Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake, Thread Garden.",
      day2: "Transfer to Wayanad: Shooting Spot, Pykara Falls & Boating.",
      day3: "Banasura Sagar Dam, Edakkal Cave, Soochipara Falls.",
      day4: "Pookot Lake, Lakkidi View Point, Proceeding to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "16,950" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "16,950" },
      { vehicle: "Innova A/C (SUV)", price: "23,630" },
      { vehicle: "Innova Crysta A/C", price: "30,500" },
      { vehicle: "Traveller A/C (14-seater)", price: "33,120" }
    ]
  },
  {
    id: "cbe-munnar-alleppey-4d",
    route: "Coimbatore - Munnar - Alleppey - Coimbatore",
    duration: "4 Days / 3 Nights",
    itinerary: {
      highlights: "Munnar Sightseeing, Alleppey Backwaters, Houseboat/Shikara experience, Return to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "17,650" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "17,650" },
      { vehicle: "Innova A/C (SUV)", price: "24,250" },
      { vehicle: "Innova Crysta A/C", price: "28,450" },
      { vehicle: "Traveller A/C (14-seater)", price: "30,550" }
    ]
  },
  {
    id: "cbe-coorg-mysore-4d",
    route: "Coimbatore - Coorg - Mysore - Coimbatore",
    duration: "4 Days / 3 Nights",
    itinerary: {
      highlights: "Madikeri Sightseeing, Abbey Falls, Raja's Seat, Golden Temple (Bylakuppe), Mysore Palace and Zoo."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "17,950" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "17,950" },
      { vehicle: "Innova A/C (SUV)", price: "24,950" },
      { vehicle: "Innova Crysta A/C", price: "30,880" },
      { vehicle: "Traveller A/C (14-seater)", price: "32,400" }
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
          {FOUR_DAY_DATA.map((item) => (
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