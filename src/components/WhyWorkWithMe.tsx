"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Smartphone, 
  FileCode2, 
  Sparkles, 
  Handshake, 
  CheckCircle,
  HelpCircle
} from "lucide-react";

export default function WhyWorkWithMe() {
  const { whyMe } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-sky-500" />;
      case "FileCode2":
        return <FileCode2 className="w-6 h-6 text-emerald-500" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-blue-500" />;
      case "Handshake":
        return <Handshake className="w-6 h-6 text-indigo-500" />;
      default:
        return <CheckCircle className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section 
      className="py-20 md:py-28 relative"
      aria-label="Why Work With Me"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-300 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Value &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Work With Me?
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Factual principles that guide every line of code and user interface I craft.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyMe.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white/70 dark:bg-[#0c1427]/70 backdrop-blur-md p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 w-fit mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                Principle 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
