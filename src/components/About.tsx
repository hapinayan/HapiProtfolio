"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { 
  Code2, 
  Layout, 
  Sparkles, 
  BookOpen, 
  Check, 
  Terminal, 
  Zap, 
  ShieldCheck 
} from "lucide-react";

export default function About() {
  const { personal } = portfolioData;

  const getStatIcon = (title: string) => {
    switch (title) {
      case "Web Development":
        return <Code2 className="w-5 h-5 text-sky-500" />;
      case "Responsive Design":
        return <Layout className="w-5 h-5 text-cyan-500" />;
      case "Modern UI":
        return <Sparkles className="w-5 h-5 text-blue-500" />;
      case "Full-Stack Learning":
        return <BookOpen className="w-5 h-5 text-indigo-500" />;
      default:
        return <Zap className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 md:py-28 relative"
      aria-label="About Hapinayan"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-300 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-3"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-900 dark:text-slate-100 text-lg sm:text-xl leading-snug">
                {personal.aboutIntro}
              </p>
              
              <p className="text-slate-600 dark:text-slate-400">
                I believe that a truly impactful website balances aesthetic excellence with robust underlying architecture. Whether crafting modular frontend interfaces or connecting with backend APIs, I prioritize clean development patterns, fast loading times, and accessible user experiences.
              </p>
            </div>

            {/* Developer Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm">
                <div className="w-6 h-6 rounded-md bg-sky-500/10 flex items-center justify-center text-sky-500 shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider font-mono">
                    Semantic &amp; Accessible
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Structured HTML5 with standard ARIA and SEO best practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm">
                <div className="w-6 h-6 rounded-md bg-sky-500/10 flex items-center justify-center text-sky-500 shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider font-mono">
                    Component Driven
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Modular, reusable React and Angular component structures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm">
                <div className="w-6 h-6 rounded-md bg-sky-500/10 flex items-center justify-center text-sky-500 shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider font-mono">
                    Performance Minded
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Optimized assets, minimal layout shifts, and rapid responses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm">
                <div className="w-6 h-6 rounded-md bg-sky-500/10 flex items-center justify-center text-sky-500 shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider font-mono">
                    Continuous Growth
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Actively advancing .NET backend and full-stack capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Factual Focus Cards (No fake numbers) */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personal.stats.map((stat) => (
                <div
                  key={stat.title}
                  className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-[#0c1427]/70 backdrop-blur-md hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-0.5 shadow-sm"
                >
                  <div className="mb-2 p-1.5 rounded-lg bg-sky-500/10 w-fit group-hover:scale-110 transition-transform">
                    {getStatIcon(stat.title)}
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-tight">
                    {stat.title}
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                    {stat.subtitle}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Tech Visual / Terminal (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-900 text-slate-200 shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <div className="relative w-4 h-4 rounded-full overflow-hidden border border-emerald-400/60 shrink-0">
                    <Image src="/profile.jpg" alt="Hapinayan" fill className="object-cover" />
                  </div>
                  <span>developer.config.ts</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">UTF-8</div>
              </div>

              {/* Code Snippet Box */}
              <div className="p-5 space-y-3 leading-relaxed text-[11.5px] overflow-x-auto">
                <p className="text-slate-500">// Personal developer manifesto</p>
                
                <p>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-sky-300">developer</span> = &#123;
                </p>

                <p className="pl-4">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-emerald-300">&quot;Hapinayan&quot;</span>,
                </p>

                <p className="pl-4">
                  <span className="text-slate-400">focus:</span>{" "}
                  <span className="text-emerald-300">&quot;Modern Web Development&quot;</span>,
                </p>

                <p className="pl-4">
                  <span className="text-slate-400">coreStrengths:</span> [
                </p>
                <p className="pl-8 text-amber-200">
                  &quot;Responsive Design&quot;, &quot;Clean UI&quot;, &quot;Modular Architecture&quot;
                </p>
                <p className="pl-4">],</p>

                <p className="pl-4">
                  <span className="text-slate-400">currentLearning:</span>{" "}
                  <span className="text-emerald-300">&quot;.NET Backend &amp; Advanced Full-Stack&quot;</span>,
                </p>

                <p className="pl-4">
                  <span className="text-slate-400">mindset:</span>{" "}
                  <span className="text-sky-300">function</span>() &#123;
                </p>
                <p className="pl-8 text-sky-400">
                  <span className="text-pink-400">return</span>{" "}
                  <span className="text-amber-200">&quot;Turn ideas into practical, reliable digital experiences.&quot;</span>;
                </p>
                <p className="pl-4">&#125;</p>

                <p>&#125;;</p>

                <div className="pt-2 text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Quality verified: semantic, accessible &amp; responsive</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
