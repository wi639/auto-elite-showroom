import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, ChevronRight, Fuel, Gauge, Cpu } from 'lucide-react';
import { IMAGES } from '../lib/constants';
import { cn } from '../lib/utils';

const CARS = [
  { id: 1, name: "2024 Sterling GT-E", type: "Electric", price: "$185,000", image: IMAGES.car_2, range: "400mi", hp: "750", speed: "2.8s" },
  { id: 2, name: "2023 Grand SUV Ultra", type: "Hybrid", price: "$145,000", image: IMAGES.car_1, range: "550mi", hp: "520", speed: "4.5s" },
  { id: 3, name: "2024 Executive S-Series", type: "Petrol", price: "$115,000", image: IMAGES.car_3, range: "450mi", hp: "450", speed: "4.1s" },
  { id: 4, name: "Classic Z-Restoration", type: "Vintage", price: "$295,000", image: IMAGES.case_study_after, range: "N/A", hp: "380", speed: "5.2s" },
  { id: 5, name: "Sportster RR", type: "Petrol", price: "$210,000", image: IMAGES.hero_bg, range: "320mi", hp: "620", speed: "3.2s" },
  { id: 6, name: "Urban City E-Compact", type: "Electric", price: "$65,000", image: IMAGES.car_2, range: "250mi", hp: "200", speed: "6.8s" },
];

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCars = CARS.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || car.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const filters = ['All', 'Electric', 'Hybrid', 'Petrol', 'Vintage'];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Current Inventory</h1>
              <p className="text-slate-600">Explore our curated selection of high-performance vehicles and luxury cruisers.</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search models..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-full md:w-64 transition-all"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-3 bg-slate-100 rounded-xl font-semibold text-slate-700 hover:bg-slate-200 transition-all">
                <SlidersHorizontal className="w-5 h-5" /> More Filters
              </button>
            </div>
          </div>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap",
                  activeFilter === filter 
                    ? "bg-slate-900 text-white" 
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredCars.map((car) => (
                <motion.div
                  key={car.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm uppercase tracking-wider">
                        {car.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{car.name}</h3>
                        <p className="text-blue-600 font-bold mt-1">{car.price}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-50 mb-6">
                      <div className="text-center">
                        <Fuel className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                        <span className="text-[10px] text-slate-500 uppercase font-bold block">Range</span>
                        <span className="text-sm font-bold text-slate-800">{car.range}</span>
                      </div>
                      <div className="text-center">
                        <Cpu className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                        <span className="text-[10px] text-slate-500 uppercase font-bold block">Power</span>
                        <span className="text-sm font-bold text-slate-800">{car.hp} HP</span>
                      </div>
                      <div className="text-center">
                        <Gauge className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                        <span className="text-[10px] text-slate-500 uppercase font-bold block">0-60</span>
                        <span className="text-sm font-bold text-slate-800">{car.speed}</span>
                      </div>
                    </div>

                    <button className="w-full bg-slate-50 text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                      View Details <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-24">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">No vehicles found</h3>
              <p className="text-slate-500">Try adjusting your filters or search terms.</p>
              <button 
                onClick={() => {setSearchTerm(''); setActiveFilter('All');}}
                className="mt-6 text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Inventory;