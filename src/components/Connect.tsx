"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Copy, 
  Check, 
  Share2 
} from "lucide-react";

export default function Connect() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 relative" aria-label="Social & Developer Connectivity">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/90 bg-white/70 dark:bg-[#0c1427]/70 backdrop-blur-xl p-8 sm:p-10 text-center shadow-xl space-y-6">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-300 text-xs font-mono font-semibold tracking-wider uppercase">
            <Share2 className="w-3.5 h-3.5" />
            <span>Developer Network</span>
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let&apos;s Connect
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Have a project idea or need a modern website? Let’s build something great together.
            </p>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 font-semibold text-xs transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 font-semibold text-xs transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <Linkedin className="w-4 h-4 text-sky-500" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={personal.socials.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 font-semibold text-xs transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <span className="font-bold">Fiverr</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs transition-all hover:-translate-y-0.5 shadow-md shadow-sky-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>
          </div>

          {/* Quick Copy Email Strip */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <button
              onClick={copyEmail}
              type="button"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/60 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors"
              title="Click to copy email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied: {personal.email}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy email: {personal.email}</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
