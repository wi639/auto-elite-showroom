import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const Services = () => {
  const [activeTier, setActiveTier] = useState('Premium');

  const plans = [
    {
      name: "Essential",
      price: "1,200",
      features: ["Vehicle Search", "Title History Report", "Pre-purchase Inspection", "Negotiation Assistance", "Documentation Support"],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Premium",
      price: "2,500",
      features: ["All Essential Features", "Global Sourcing", "Enclosed Transport", "Professional Detail", "12-Month Roadside Assist", "Concierge Delivery"],
      cta: "Choose Premium",
      highlight: true
    },
    {
      name: "Elite",
      price: "5,000",
      features: ["All Premium Features", "Track Day Experience", "Storage for 6 Months", "Extended Warranty", "Exclusive Event Access", "Dedicated Consultant"],
      cta: "Contact for Elite",
      highlight: false
    }
  ];

  const comparison = [
    { feature: "Concierge Service", essential: false, premium: true, elite: true },
    { feature: "National Delivery", essential: "Basic", premium: "Enclosed", elite: "White Glove" },
    { feature: "Warranty Period", essential: "30 Days", premium: "6 Months", elite: "2 Years" },
    { feature: "Private Viewing", essential: false, premium: true, elite: true },
    { feature: "Custom Restoration", essential: false, premium: false, elite: true },
    { feature: "Storage Included", essential: false, premium: false, elite: "6 Months" },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Automotive Excellence Redefined</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">We offer bespoke services for the acquisition, maintenance, and enjoyment of fine motor cars.</p>
        </div>
      </section>

      {/* Pricing/Tiers */}
      <section className="py-24 bg-white -mt-10 rounded-t-[3rem] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={cn(
                  "p-8 rounded-3xl border transition-all duration-300",
                  plan.highlight 
                    ? "bg-slate-900 text-white border-blue-600 shadow-2xl scale-105" 
                    : "bg-white text-slate-900 border-slate-200 hover:border-blue-300"
                )}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className={cn("text-sm", plan.highlight ? "text-slate-400" : "text-slate-500")}>/project</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={cn("w-5 h-5", plan.highlight ? "text-blue-400" : "text-blue-600")} />
                      <span className={cn("text-sm", plan.highlight ? "text-slate-300" : "text-slate-600")}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={cn(
                  "w-full py-4 rounded-xl font-bold transition-all",
                  plan.highlight 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                )}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Compare Service Tiers</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-slate-100">
                    <th className="py-6 px-4 text-slate-500 font-medium">Feature</th>
                    <th className="py-6 px-4 text-slate-900 font-bold">Essential</th>
                    <th className="py-6 px-4 text-slate-900 font-bold">Premium</th>
                    <th className="py-6 px-4 text-slate-900 font-bold">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-6 px-4 text-slate-700 font-medium">{row.feature}</td>
                      <td className="py-6 px-4">
                        {typeof row.essential === 'boolean' 
                          ? (row.essential ? <Check className="text-green-500" /> : <span className="text-slate-300">-</span>)
                          : <span className="text-slate-600 text-sm font-semibold">{row.essential}</span>}
                      </td>
                      <td className="py-6 px-4">
                        {typeof row.premium === 'boolean' 
                          ? (row.premium ? <Check className="text-green-500" /> : <span className="text-slate-300">-</span>)
                          : <span className="text-slate-600 text-sm font-semibold">{row.premium}</span>}
                      </td>
                      <td className="py-6 px-4">
                        {typeof row.elite === 'boolean' 
                          ? (row.elite ? <Check className="text-green-500" /> : <span className="text-slate-300">-</span>)
                          : <span className="text-slate-600 text-sm font-semibold">{row.elite}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-10">Our advisors are ready to help you find or maintain your next masterpiece.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all">
              Book a Consultation
            </button>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Download Full Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;