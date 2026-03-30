import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, ShieldCheck, Zap, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES, SERVICES, TEAM } from '../lib/constants';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.hero_bg} 
            alt="Showroom" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm border border-blue-500/20">
              Welcome to Sterling Motors
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
              Elevate Your <span className="text-blue-500">Driving</span> Experience
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Discover the finest collection of luxury, performance, and rare vehicles. Experience unparalleled service and automotive excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/inventory" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all transform hover:scale-105 group">
                Explore Inventory <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                <Play className="w-5 h-5 fill-current" /> Watch Video
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-0 w-full px-4 sm:px-6 lg:px-8 hidden md:block">
          <div className="max-w-7xl mx-auto flex gap-12 text-white">
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-slate-400 text-sm">Vehicles Delivered</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <p className="text-3xl font-bold">25+</p>
              <p className="text-slate-400 text-sm">Years Excellence</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-slate-400 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
            <p className="text-slate-600">We provide a comprehensive range of automotive services designed to exceed the expectations of the most discerning clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  {/* Since we can't dynamicly import icons, we use hardcoded ones for demo */}
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className="text-blue-600 font-semibold flex items-center gap-2 group">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicle Showcase */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  src={IMAGES.car_2} 
                  alt="Featured Car" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Featured Vehicle</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">The All-Electric Grand Tourer 2024</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Experience the pinnacle of sustainable luxury. With a 400-mile range and 0-60 in 2.8 seconds, the new Sterling GT-E redefines what an electric vehicle can be.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-slate-500 text-sm mb-1">Max Range</p>
                  <p className="text-2xl font-bold text-slate-900">400 Miles</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-slate-500 text-sm mb-1">Peak Power</p>
                  <p className="text-2xl font-bold text-slate-900">750 HP</p>
                </div>
              </div>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
                View Full Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 text-yellow-500 fill-current" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Robert Wilson", role: "Entrepreneur", text: "The team at Sterling Motors provided an unparalleled buying experience. Their attention to detail is world-class." },
              { name: "Jessica Palmer", role: "CEO", text: "Found my dream car through their global sourcing service. The process was seamless and incredibly professional." },
              { name: "David Sterling", role: "Collector", text: "Best inventory I've seen in years. Truly rare vehicles and a staff that actually knows their automotive history." }
            ].map((t, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-full" />
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-slate-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;