import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeftRight, CheckCircle2, Star, Clock, Trophy } from 'lucide-react';
import { IMAGES } from '../lib/constants';

const CaseStudies = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies & Restorations</h1>
            <p className="text-xl text-slate-400">Witness the transformation of automotive icons under our care. From comprehensive detailing to full nut-and-bolt restorations.</p>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Project 01: The Phoenix Classic</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Vintage Roadster Restoration</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                This 1968 classic arrived at our workshop in a state of severe neglect. Over 18 months, our team meticulously restored every component to better-than-factory standards.
              </p>
              <div className="space-y-4">
                {[
                  "Complete engine rebuild and modern tuning",
                  "Chassis reinforcement and anti-corrosion treatment",
                  "Hand-stitched Italian leather interior",
                  "Period-correct 12-layer paint finish"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex gap-12">
                <div>
                  <p className="text-3xl font-bold text-slate-900">1,800+</p>
                  <p className="text-slate-500 text-sm">Labor Hours</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">100%</p>
                  <p className="text-slate-500 text-sm">Original Parts</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                <div 
                  className="absolute inset-0 z-10 select-none pointer-events-none"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <img src={IMAGES.case_study_after} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">AFTER</div>
                </div>
                <div className="absolute inset-0">
                  <img src={IMAGES.case_study_before} alt="Before" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-slate-900/80 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">BEFORE</div>
                </div>
                
                {/* Custom Slider Handle */}
                <div 
                  className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-xl cursor-ew-resize"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                    <ArrowLeftRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderPos}
                  onChange={handleSliderChange}
                  className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize"
                />
              </div>
              <p className="text-center text-slate-400 text-sm mt-4">Slide the handle to see the transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Restoration Philosophy</h2>
            <p className="text-slate-600">We don't just fix cars; we preserve automotive history using a blend of traditional craftsmanship and modern technology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Clock, 
                title: "Research & Documentation", 
                desc: "Every project starts with deep historical research to ensure every screw and thread is historically accurate." 
              },
              { 
                icon: Trophy, 
                title: "Artisanal Execution", 
                desc: "Our master craftsmen use techniques passed down through generations combined with precision aerospace tools." 
              },
              { 
                icon: Star, 
                title: "Rigorous Testing", 
                desc: "Before delivery, every vehicle undergoes a 200-point performance check and 500 miles of shake-down testing." 
              }
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-all border border-slate-100">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <p.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Modern Ceramic Protection", category: "Detailing", image: IMAGES.car_3 },
              { title: "Limited Edition Interior Re-trim", category: "Upholstery", image: IMAGES.car_1 }
            ].map((proj, i) => (
              <div key={i} className="group relative aspect-video rounded-3xl overflow-hidden shadow-lg">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-blue-400 font-bold text-sm uppercase mb-2">{proj.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{proj.title}</h3>
                  <button className="text-white font-semibold flex items-center gap-2 group/btn">
                    View Project <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;