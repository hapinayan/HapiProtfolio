"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Briefcase, 
  Rocket, 
  UserCheck, 
  ShoppingBag, 
  Smartphone, 
  Code2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function Services() {
  const { services } = portfolioData;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-sky-500" />;
      case "Rocket":
        return <Rocket className="w-6 h-6 text-blue-500" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-cyan-500" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-emerald-500" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-indigo-500" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-sky-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section 
      id="services" 
      className="py-20 md:py-28 relative"
      aria-label="Services - What I Can Build"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-300 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What I Can Build
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Tailored digital solutions built from the ground up to empower your online presence, communicate your value, and engage your audience.
          </p>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white/70 dark:bg-[#0c1427]/70 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Header Icon & Index Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 group-hover:scale-110 group-hover:border-sky-500/40 transition-all duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Link */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:text-sky-500 group-hover:gap-2 transition-all duration-200"
                >
                  <span>Request a quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
