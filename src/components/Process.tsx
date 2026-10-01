"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  CheckCircle2, 
  Workflow, 
  Search, 
  Map, 
  Code, 
  Send 
} from "lucide-react";

export default function Process() {
  const { process } = portfolioData;

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-sky-500" />;
      case 1:
        return <Map className="w-5 h-5 text-cyan-500" />;
      case 2:
        return <Code className="w-5 h-5 text-blue-500" />;
      case 3:
        return <Send className="w-5 h-5 text-emerald-500" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section 
      id="process" 
      className="py-20 md:py-28 relative"
      aria-label="Workflow & Process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-300 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How I Work
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            A structured 4-step workflow that transforms goals into polished, high-performing websites.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-500 -translate-y-1/2 z-0 opacity-40"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {process.map((stepItem, idx) => (
              <div
                key={stepItem.step}
                className="relative rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white/80 dark:bg-[#0c1427]/80 backdrop-blur-md p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-sky-500 transition-colors">
                      {stepItem.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-sm group-hover:scale-110 transition-transform">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {stepItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {/* Progress Indicator Indicator */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  <span>Phase 0{idx + 1}</span>
                  <span className="text-sky-500">Step {idx + 1} of 4</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
