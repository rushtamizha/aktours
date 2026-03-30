"use client";

import React, { useState } from 'react';
import { 
  Car, MapPin, ChevronDown, ChevronUp, Clock, Info, Send, Navigation, Calendar 
} from 'lucide-react';

const TWO_DAY_DATA = [
  {
    id: "cbe-ooty-2d",
    route: "Coimbatore - Ooty - Coimbatore",
    duration: "2 Days / 1 Night",
    itinerary: {
      day1: "Pine Forest, Kamarajar Dam, 6th & 9th Mile Shooting Points, Pykara Falls & Lake, Dodabetta Peak, Tea Factory, Botanical Garden.",
      day2: "Rose Garden, Ooty Lake, Thread Garden, Children Park, Wax Museum, Ketti Valley View, Sims Park, Dolphin's Nose, Lamb's Rock."
    },
    inclusions: "Vehicle Rent, Fuel, Driver Allowance, Parking and Toll Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "8,250" },
      { vehicle: "Toyota Etios A/C (Sedan)", price: "8,250" },
      { vehicle: "Mahindra Xylo A/C (SUV)", price: "10,700" },
      { vehicle: "Innova A/C (SUV)", price: "10,700" },
      { vehicle: "Innova Crysta A/C", price: "14,350" },
      { vehicle: "Traveller A/C (14-seater)", price: "16,200" }
    ]
  },
  {
    id: "cbe-kodai-2d",
    route: "Coimbatore - Kodaikanal - Coimbatore",
    duration: "2 Days / 1 Night",
    itinerary: {
      day1: "Silver Cascade Falls, Kodai Lake, Bryant Park, Coaker's Walk, Pine Forest, Guna Caves, Pillar Rocks.",
      day2: "Berijam Lake (Forest area), Dolphin's Nose, Bear Shola Falls, Shenbaganur Museum."
    },
    inclusions: "Cab Rent, Fuel, Driver Allowance, Parking & Toll Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "9,850" },
      { vehicle: "Innova A/C (SUV)", price: "12,800" },
      { vehicle: "Innova Crysta A/C", price: "15,950" },
      { vehicle: "Traveller A/C (14-seater)", price: "17,700" }
    ]
  },
  {
    id: "cbe-munnar-2d",
    route: "Coimbatore - Munnar - Coimbatore",
    duration: "2 Days / 1 Night",
    itinerary: {
      day1: "Echo Point, Elephant Lake, Rose Garden, Mattupetty Dam, Chinnar Wildlife Sanctuary, Top Station, Tata Tea Museum.",
      day2: "Rajamalai Wildlife Sanctuary, Power House Falls."
    },
    inclusions: "Cab Rent, Fuel, Driver Allowance, Parking, Tolls & Interstate Permit.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "10,500" },
      { vehicle: "Innova A/C (SUV)", price: "13,200" },
      { vehicle: "Innova Crysta A/C", price: "17,600" },
      { vehicle: "Traveller A/C (14-seater)", price: "18,950" }
    ]
  },
  {
    id: "cbe-valparai-2d",
    route: "Coimbatore - Valparai - Coimbatore",
    duration: "2 Days / 1 Night",
    itinerary: {
      day1: "Eachanari, Masaniamman Temple, Aaliyar Dam, Monkey Falls, Night Stay in Valparai.",
      day2: "Sholayar Dam, Tea Estates, View Points, Balaji Temple."
    },
    inclusions: "Cab Rent, Fuel, Driver Allowance, Parking & Toll Charges.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "8,500" },
      { vehicle: "Innova A/C (SUV)", price: "11,600" },
      { vehicle: "Innova Crysta A/C", price: "15,150" },
      { vehicle: "Traveller A/C (14-seater)", price: "16,800" }
    ]
  },
  {
    id: "cbe-valparai-athirapally-2d",
    route: "Coimbatore - Valparai - Athirapally - Coimbatore",
    duration: "2 Days / 1 Night",
    itinerary: {
      day1: "Aaliyar Dam, Monkey Falls, Balaji Temple, Tea Estates, Local View Points.",
      day2: "Sholayar Dam, Athirapally Falls (8am - 6pm)."
    },
    inclusions: "Vehicle Rent, Fuel, Driver Allowance, Parking Toll & Interstate Permit.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "10,900" },
      { vehicle: "Innova A/C (SUV)", price: "14,300" },
      { vehicle: "Innova Crysta A/C", price: "18,100" },
      { vehicle: "Traveller A/C (14-seater)", price: "20,150" }
    ]
  },
  {
    id: "cbe-mysore-2d",
    route: "Coimbatore - Mysore - Coimbatore",
    duration: "2 Days / 1 Night",
    itinerary: {
      day1: "Mysore Palace, Chamundi Hills, Mysore Zoo, Lalita Mahal Palace, Brindavan Gardens.",
      day2: "Rail Museum, Sri Ranganatha Swamy Temple, Datta Peetham, Karanji Lake, Tipu Sultan's Palace."
    },
    inclusions: "Cab Rent, Fuel, Driver Allowance, Parking, Tolls & Interstate Permit.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "11,650" },
      { vehicle: "Innova A/C (SUV)", price: "16,500" },
      { vehicle: "Innova Crysta A/C", price: "20,500" },
      { vehicle: "Traveller A/C (14-seater)", price: "24,600" }
    ]
  },
  {
    id: "cbe-yercaud-2d",
    route: "Coimbatore - Yercaud - Coimbatore",
    duration: "2 Days / 1 Night",
    itinerary: {
      day1: "Anna Park, Arthurs Seat, Bears Cave, Big Lake, Killiyur Falls.",
      day2: "Shevaroy Temple, Pagoda Point, Small Lake, Silk Farm."
    },
    inclusions: "Vehicle Rent, Fuel, Driver Allowance, Parking Toll & Interstate Permit.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "9,750" },
      { vehicle: "Innova A/C (SUV)", price: "13,350" },
      { vehicle: "Innova Crysta A/C", price: "16,650" },
      { vehicle: "Traveller A/C (14-seater)", price: "17,900" }
    ]
  },
  {
    id: "cbe-rameshwaram-2d",
    route: "Coimbatore - Rameshwaram - Coimbatore",
    duration: "2 Days / 1 Night",
    itinerary: {
      day1: "Dhanushkodi, Hanuman Temple, Kothandaramaswamy Temple, Pamban Bridge.",
      day2: "Sri Ramanathaswamy Temple, Madurai Meenakshi Temple."
    },
    inclusions: "Cab Rent, Fuel, Driver Allowance, Parking, Tolls & Interstate Permit.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "14,300" },
      { vehicle: "Innova A/C (SUV)", price: "17,400" },
      { vehicle: "Innova Crysta A/C", price: "20,500" },
      { vehicle: "Traveller A/C (14-seater)", price: "26,200" }
    ]
  },
  {
    id: "cbe-wayanad-2d",
    route: "Coimbatore - Wayanad - Coimbatore",
    duration: "2 Days / 1 Night",
    itinerary: {
      day1: "Ananthanatha Swami Temple, Muthanga Wildlife Sanctuary, Banasura Dam.",
      day2: "Edakkal Caves, Meenmutty Falls, Kanthapara Falls, Soochipara Falls."
    },
    inclusions: "Cab Rent, Fuel, Driver Allowance, Parking, Tolls & Interstate Permit.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "11,650" },
      { vehicle: "Innova A/C (SUV)", price: "16,500" },
      { vehicle: "Innova Crysta A/C", price: "19,900" },
      { vehicle: "Traveller A/C (14-seater)", price: "22,350" }
    ]
  },
  {
    id: "cbe-thiruvannamalai-2d",
    route: "Coimbatore - Thiruvannamalai - Coimbatore",
    duration: "2 Days / 1 Night",
    itinerary: {
      day1: "Departure from Coimbatore to Thiruvannamalai, Temple Visit.",
      day2: "Giri Valam, Local Sightseeing, Return to Coimbatore."
    },
    inclusions: "Cab Rent, Fuel, Driver Allowance, Parking & Tolls.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "12,800" },
      { vehicle: "Innova A/C (SUV)", price: "16,050" },
      { vehicle: "Innova Crysta A/C", price: "19,050" },
      { vehicle: "Traveller A/C (14-seater)", price: "23,900" }
    ]
  },
  {
    id: "mys-ooty-2d",
    route: "Mysore - Ooty - Mysore",
    duration: "2 Days / 1 Night",
    itinerary: {
      day1: "Bandipur/Mudumalai Forest Drive, Pykara Falls, Pykara Lake, Shooting Point.",
      day2: "Ooty Lake, Rose Garden, Botanical Garden, Dodabetta Peak, Tea Factory."
    },
    inclusions: "Cab Rent, Fuel, Driver Allowance, Parking & Tolls.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "9,900" },
      { vehicle: "Innova A/C (SUV)", price: "13,200" },
      { vehicle: "Innova Crysta A/C", price: "13,800" },
      { vehicle: "Traveller A/C (14-seater)", price: "18,400" }
    ]
  },
  {
    id: "tpr-kodai-2d",
    route: "Tirupur - Kodaikanal - Tirupur",
    duration: "2 Days / 1 Night",
    itinerary: {
      day1: "Kodai Lake, Coaker's Walk, Pillar Rocks, Bryant Park, Silver Cascade.",
      day2: "Berijam Lake, Dolphin's Nose, Bear Shola Falls, Shenbaganur Museum."
    },
    inclusions: "Cab Rent, Fuel, Driver Allowance, Parking & Tolls.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "10,700" },
      { vehicle: "Innova A/C (SUV)", price: "13,500" },
      { vehicle: "Innova Crysta A/C", price: "15,700" },
      { vehicle: "Traveller A/C (14-seater)", price: "17,750" }
    ]
  },
  {
    id: "mdu-kodai-2d",
    route: "Madurai - Kodaikanal - Madurai",
    duration: "2 Days / 1 Night",
    itinerary: {
      day1: "Departure to Kodai, Lake, Bryant Park, Coaker's Walk.",
      day2: "Pillar Rocks, Guna Caves, Pine Forest, Silver Cascade Falls."
    },
    inclusions: "Cab Rent, Fuel, Driver Allowance, Parking & Tolls.",
    pricing: [
      { vehicle: "Swift Dzire A/C (Sedan)", price: "9,100" },
      { vehicle: "Innova A/C (SUV)", price: "12,500" },
      { vehicle: "Innova Crysta A/C", price: "14,050" },
      { vehicle: "Traveller A/C (14-seater)", price: "15,500" }
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
          {TWO_DAY_DATA.map((item) => (
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