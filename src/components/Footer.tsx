"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Code2, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  ExternalLink 
} from "lucide-react";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/90 bg-white/50 dark:bg-[#040711]/90 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/70 dark:border-slate-800/80 text-center md:text-left">
          
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-lg text-slate-900 dark:text-white tracking-wider">
                {personal.name}
              </div>
              <div className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                {personal.role}
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase font-medium tracking-wider text-slate-600 dark:text-slate-400">
            <a href="#home" className="hover:text-sky-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-sky-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-sky-500 transition-colors">Projects</a>
            <a href="#services" className="hover:text-sky-500 transition-colors">Services</a>
            <a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a>
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personal.socials.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fiverr"
              className="px-2.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 font-bold text-xs transition-colors"
            >
              Fiverr
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white transition-all hover:-translate-y-0.5 shadow-sm"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left font-mono">
          <p>© 2026 {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
