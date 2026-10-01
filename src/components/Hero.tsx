"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { 
  ArrowRight, 
  Sparkles, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code,
  Terminal,
  Layers,
  Cpu,
  CheckCircle2
} from "lucide-react";

export default function Hero() {
  const { personal } = portfolioData;
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center"
      aria-label="Hero Introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status & Role Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 dark:bg-sky-500/10 backdrop-blur-md text-sky-600 dark:text-sky-300 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="uppercase tracking-widest font-mono text-[11px] font-bold">
                {personal.role}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
              <span className="text-slate-600 dark:text-slate-300 font-normal">Available for projects</span>
            </div>

            {/* Name & Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <span className="block text-2xl sm:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Hello, I&apos;m
                </span>
                <span className="text-gradient">
                  {personal.name}
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 max-w-2xl leading-snug">
                {personal.heroHeadline}
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {personal.heroSupportingText}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-semibold text-sm tracking-wide hover:border-sky-400/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Let&apos;s Work Together</span>
              </a>
            </div>

            {/* Social Icons Strip */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-200/80 dark:border-slate-800/80 w-full max-w-md">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-600 dark:text-slate-400 font-medium">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-500 dark:hover:text-sky-400 text-slate-700 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-500 dark:hover:text-sky-400 text-slate-700 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personal.socials.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fiverr Freelance Profile"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span className="font-bold">Fiverr</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Developer Photo / Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative Glow Ring behind card */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-sky-500 via-blue-600 to-cyan-400 opacity-30 dark:opacity-40 blur-xl"></div>

              {/* Main Card Frame */}
              <div className="relative rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl p-5 shadow-2xl overflow-hidden">
                
                {/* Header bar of the dev frame */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-200/70 dark:border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-sky-500" />
                    <span>hapinayan.dev/profile</span>
                  </div>
                </div>

                {/* Photo or Tasteful Dev Visual Area */}
                <div className="relative aspect-[4/4.2] w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800/70 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900/90 dark:to-[#080d1a] flex flex-col items-center justify-center p-6 text-center group">
                  
                  {!photoFailed ? (
                    <div className="relative w-full h-full">
                      <Image
                        src="/profile.jpg"
                        alt="Hapinayan - Web Developer"
                        fill
                        priority
                        className="object-cover rounded-xl"
                        onError={() => setPhotoFailed(true)}
                      />
                    </div>
                  ) : null}

                  {/* Fallback / Developer Visual Placeholder (Clean, professional, NO fake human face) */}
                  {photoFailed && (
                    <div className="flex flex-col items-center justify-center space-y-4">
                      {/* Monogram Tech Shield */}
                      <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-sky-500/30">
                        <span className="text-3xl font-black font-mono tracking-tighter">H</span>
                        <div className="absolute -bottom-1 -right-1 p-1 rounded-md bg-slate-900 border border-sky-400/40 text-sky-400">
                          <Code className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="font-mono text-sm font-bold text-slate-800 dark:text-slate-100">
                          &lt;Hapinayan /&gt;
                        </div>
                        <div className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                          Web Developer &amp; Tech Enthusiast
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                        <Layers className="w-3 h-3 text-sky-500" />
                        <span>Ready for your photo: /public/profile.jpg</span>
                      </div>
                    </div>
                  )}

                  {/* Bottom badge overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2 text-left">
                      <div className="w-7 h-7 rounded-md bg-sky-500/10 flex items-center justify-center text-sky-500">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight">
                          Modern Stack
                        </div>
                        <div className="text-[10px] text-slate-600 dark:text-slate-400">
                          React • Next.js • .NET
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>

                </div>

                {/* Sub-card specs */}
                <div className="mt-3.5 pt-3 border-t border-slate-200/60 dark:border-slate-800/70 grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-slate-100/60 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50">
                    <span className="block text-slate-600 dark:text-slate-400 text-[10px] uppercase font-mono">Specialty</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Responsive UI</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-100/60 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50">
                    <span className="block text-slate-600 dark:text-slate-400 text-[10px] uppercase font-mono">Code Quality</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Clean &amp; Tested</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
