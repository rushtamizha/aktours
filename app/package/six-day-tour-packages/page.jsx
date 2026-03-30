"use client";

import React, { useState } from 'react';
import { 
  Car, MapPin, ChevronDown, ChevronUp, Clock, Info, Send, Navigation, Calendar 
} from 'lucide-react';

const SIX_DAY_DATA = [
  {
    id: "cbe-ooty-6d",
    route: "Coimbatore - Ooty - Coimbatore",
    duration: "6 Days / 5 Nights",
    itinerary: {
      highlights: "Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake, Coonoor Sims Park."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "18,700" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "18,700" },
      { vehicle: "Innova A/C (SUV)", price: "26,000" },
      { vehicle: "Innova Crysta A/C", price: "35,300" },
      { vehicle: "Traveller A/C (14-seater)", price: "37,600" }
    ]
  },
  {
    id: "cbe-ooty-kodai-munnar-6d",
    route: "Coimbatore - Ooty - Kodaikanal - Munnar - Coimbatore",
    duration: "6 Days / 5 Nights",
    itinerary: {
      day1: "Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake.",
      day2: "Cine Shooting Spot, Pykara Falls & Boating, Mudumalai Wildlife.",
      day3: "To Kodaikanal: Silver Cascade Falls, Museum, Kodai Lake, Bryant Park.",
      day4: "Pine Forest, Guna Cave, Pillar Rock, Green Valley View, Coaker's Walk. Proceed to Munnar.",
      day5: "Munnar: Rose Garden, Photo Point, Honey Tree, Elephant Camp, Mattupatty Dam, Echo Point, Top Station.",
      day6: "Rajamalai Wildlife, Lakkam Water Falls, Sandal Forest, Back to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "26,230" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "26,230" },
      { vehicle: "Innova A/C (SUV)", price: "33,700" },
      { vehicle: "Innova Crysta A/C", price: "46,500" },
      { vehicle: "Traveller A/C (14-seater)", price: "47,550" }
    ]
  },
  {
    id: "cbe-munnar-thekkady-alleppey-cochin-6d",
    route: "Coimbatore - Munnar - Thekkady - Alleppey - Cochin - Coimbatore",
    duration: "6 Days / 5 Nights",
    itinerary: {
      day1: "Lakkam Water Falls, Rajamalai Wildlife. Stay at Munnar.",
      day2: "Munnar local: Rose Garden, Photo Point, Mattupatty Dam, Echo Point, Top Station.",
      day3: "To Thekkady: Spice Plantation, Periyar Boating.",
      day4: "To Alleppey: Houseboat experience.",
      day5: "To Cochin: Chinese Fishing Nets, Fort Cochin, Dutch Palace, Marine Drive.",
      day6: "Lulu Mall shopping. Drop at Cochin or Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "24,550" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "24,550" },
      { vehicle: "Innova A/C (SUV)", price: "31,800" },
      { vehicle: "Innova Crysta A/C", price: "43,600" },
      { vehicle: "Traveller A/C (14-seater)", price: "47,600" }
    ]
  },
  {
    id: "cbe-ooty-kodai-madurai-6d",
    route: "Coimbatore - Ooty - Kodaikanal - Madurai - Coimbatore",
    duration: "6 Days / 5 Nights",
    itinerary: {
      day1: "Coonoor: Dolphin Nose, Lamb's Rock, Tea Gardens, Sims Park.",
      day2: "Ooty: Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake, Wax World.",
      day3: "Shooting Spot, Pykara Falls & Boating, Mudumalai Wildlife.",
      day4: "To Kodaikanal: Silver Cascade Falls, Museum, Kodai Lake, Bryant Park.",
      day5: "Pine Forest, Guna Cave, Pillar Rock, Green Valley View, Coaker's Walk. Proceed to Madurai.",
      day6: "Madurai Sri Meenakshi Temple visit. Drop at Madurai or Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "24,400" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "24,400" },
      { vehicle: "Innova A/C (SUV)", price: "31,650" },
      { vehicle: "Innova Crysta A/C", price: "43,450" },
      { vehicle: "Traveller A/C (14-seater)", price: "47,450" }
    ]
  },
  {
    id: "cbe-kodai-ooty-mysore-blr-6d",
    route: "Coimbatore - Kodaikanal - Ooty - Mysore - Bangalore",
    duration: "6 Days / 5 Nights",
    itinerary: {
      day1: "To Kodaikanal: Silver Cascade Falls, Museum, Kodai Lake, Bryant Park.",
      day2: "Pine Forest, Guna Cave, Pillar Rock, Green Valley View, Coaker's Walk, Kurinji Andavar Temple.",
      day3: "To Ooty: Coonoor Dolphin Nose, Lamb's Rock, Tea Gardens, Sims Park.",
      day4: "Ooty: Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake, Wax World.",
      day5: "To Mysore: Shooting Spot, Pykara Falls, Brindavan Garden.",
      day6: "Chamundi Hills, Mysore Zoo, Mysore Palace. Drop at Bangalore City/Airport."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "31,550" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "31,550" },
      { vehicle: "Innova A/C (SUV)", price: "40,900" },
      { vehicle: "Innova Crysta A/C", price: "54,750" },
      { vehicle: "Traveller A/C (14-seater)", price: "58,540" }
    ]
  },
  {
    id: "cbe-ooty-coorg-mysore-blr-6d",
    route: "Coimbatore - Ooty - Coorg - Mysore - Bangalore",
    duration: "6 Days / 5 Nights",
    itinerary: {
      day1: "Coonoor sightseeing. Day 2: Ooty local sightseeing.",
      day3: "To Coorg via Mudumalai Wildlife, Shooting Spot, Pykara Falls.",
      day4: "Coorg: Omkareswara Temple, Fort, Abbey Falls, Raja Seat, Shopping.",
      day5: "To Mysore: Dubare Elephant Camp, Nisargadhama, Golden Temple, Brindavan Garden.",
      day6: "Mysore Palace, Zoo, Chamundi Hills. Drop at Bangalore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "30,100" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "30,100" },
      { vehicle: "Innova A/C (SUV)", price: "39,240" },
      { vehicle: "Innova Crysta A/C", price: "51,750" },
      { vehicle: "Traveller A/C (14-seater)", price: "58,850" }
    ]
  },
  {
    id: "cbe-ooty-wayanad-coorg-blr-6d",
    route: "Coimbatore - Ooty - Wayanad - Coorg - Bangalore",
    duration: "6 Days / 5 Nights",
    itinerary: {
      "day1-2": "Coonoor and Ooty Local sightseeing.",
      day3: "To Wayanad via Shooting Spot and Pykara Falls.",
      day4: "Wayanad: Banasura Dam, Meenmutty Falls, Edakkal Cave, Soochipara Falls, Lakkidi View Point.",
      day5: "To Coorg: Iruppu Falls, Nagarhole Wildlife, Omkareswara Temple, Abbey Falls, Raja Seat.",
      day6: "Dubare Elephant Camp, Golden Temple. Drop at Bangalore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance, Interstate Permit Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "30,340" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "30,340" },
      { vehicle: "Innova A/C (SUV)", price: "41,750" },
      { vehicle: "Innova Crysta A/C", price: "52,500" },
      { vehicle: "Traveller A/C (14-seater)", price: "60,000" }
    ]
  },
  {
    id: "cbe-ooty-kodai-return-6d",
    route: "Coimbatore - Ooty - Kodaikanal - Coimbatore",
    duration: "6 Days / 5 Nights",
    itinerary: {
      "day1-2": "Ooty local and Mudumalai Wildlife.",
      day3: "Ooty to Kodai via Coonoor sightseeing.",
      "day4-5": "Kodaikanal local: Guna Caves, Pillar Rock, Bryant Park, Kodai Lake, Bear Shola Falls.",
      day6: "Silver Cascade Falls and return to Coimbatore."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "21,900" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "21,900" },
      { vehicle: "Innova A/C (SUV)", price: "28,650" },
      { vehicle: "Innova Crysta A/C", price: "39,640" },
      { vehicle: "Traveller A/C (14-seater)", price: "41,250" }
    ]
  },
  {
    id: "cbe-pilgrimage-south-6d",
    route: "Coimbatore - Kodaikanal - Madurai - Rameshwaram - Kanyakumari - Trivandrum",
    duration: "6 Days / 5 Nights",
    itinerary: {
      highlights: "Full South India pilgrimage covering Kodaikanal, Meenakshi Temple, Ramanathaswamy Temple, Kanyakumari sunset/sunrise, and Trivandrum drop."
    },
    inclusions: "Vehicle Cost, Parking & Toll, Driver Allowance.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "30,250" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "30,250" },
      { vehicle: "Innova A/C (SUV)", price: "42,050" },
      { vehicle: "Innova Crysta A/C", price: "49,625" },
      { vehicle: "Traveller A/C (14-seater)", price: "51,950" }
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
          {SIX_DAY_DATA.map((item) => (
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