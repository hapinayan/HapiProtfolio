"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  CheckCircle2, 
  Calendar, 
  FolderCheck 
} from "lucide-react";

export default function Education() {
  const { education, experience } = portfolioData;

  return (
    <section 
      id="education" 
      className="py-20 md:py-28 relative"
      aria-label="Education & Development Experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-300 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education &amp; Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Formal foundations in software engineering and hands-on application development milestones.
          </p>
        </div>

        {/* 2-Column Grid: Left Education, Right Relevant Development Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-sky-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white/70 dark:bg-[#0c1427]/70 backdrop-blur-md p-6 shadow-sm hover:border-sky-500/40 transition-all duration-300"
              >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3">
                  Focus: {edu.focus}
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {edu.degree}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
                  {edu.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Software Engineering &amp; Modern Computing Principles</span>
                </div>
              </div>
            ))}
          </div>

          {/* Development Experience Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FolderCheck className="w-5 h-5 text-sky-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Development Milestones
              </h3>
            </div>

            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white/70 dark:bg-[#0c1427]/70 backdrop-blur-md p-6 shadow-sm hover:border-sky-500/40 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-base text-slate-900 dark:text-white">
                      {exp.title}
                    </span>
                    <span className="text-[10.5px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {exp.highlight}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 mb-2">
                    Role: {exp.role}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
