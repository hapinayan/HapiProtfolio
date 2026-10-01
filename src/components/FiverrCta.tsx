"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

export default function FiverrCta() {
  const { fiverrCta } = portfolioData.personal;

  return (
    <section className="py-12 relative" aria-label="Freelance Services on Fiverr">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-slate-900/60 to-emerald-950/20 backdrop-blur-xl p-8 sm:p-10 shadow-2xl">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Freelance Web Development</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {fiverrCta.title}
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {fiverrCta.description} I deliver responsive designs, clean code, and reliable turnaround through my verified freelance gig.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Order Protection
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Direct Milestones
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Fast Communication
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href={fiverrCta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>{fiverrCta.buttonText}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
