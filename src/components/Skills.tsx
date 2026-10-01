"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Layers, 
  ExternalLink,
  Sparkles
} from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>("all");

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Frontend":
        return <Code2 className="w-5 h-5 text-sky-500" />;
      case "Backend":
        return <Server className="w-5 h-5 text-indigo-500" />;
      case "Database":
        return <Database className="w-5 h-5 text-cyan-500" />;
      case "Tools & Workflow":
        return <Wrench className="w-5 h-5 text-blue-500" />;
      default:
        return <Layers className="w-5 h-5 text-sky-500" />;
    }
  };

  const getTechColor = (name: string) => {
    switch (name) {
      case "HTML5":
        return "hover:border-orange-500/50 hover:bg-orange-500/5 text-orange-600 dark:text-orange-400";
      case "CSS3":
        return "hover:border-blue-500/50 hover:bg-blue-500/5 text-blue-600 dark:text-blue-400";
      case "JavaScript":
        return "hover:border-yellow-500/50 hover:bg-yellow-500/5 text-amber-600 dark:text-amber-400";
      case "TypeScript":
        return "hover:border-sky-500/50 hover:bg-sky-500/5 text-sky-600 dark:text-sky-400";
      case "React":
        return "hover:border-cyan-500/50 hover:bg-cyan-500/5 text-cyan-600 dark:text-cyan-400";
      case "Angular":
        return "hover:border-red-500/50 hover:bg-red-500/5 text-red-600 dark:text-red-400";
      case "Next.js":
        return "hover:border-slate-500/50 hover:bg-slate-500/5 text-slate-800 dark:text-slate-200";
      case "Tailwind CSS":
        return "hover:border-teal-500/50 hover:bg-teal-500/5 text-teal-600 dark:text-teal-400";
      case "C#":
      case ".NET":
        return "hover:border-purple-500/50 hover:bg-purple-500/5 text-purple-600 dark:text-purple-400";
      case "MySQL":
        return "hover:border-blue-600/50 hover:bg-blue-600/5 text-blue-600 dark:text-blue-400";
      default:
        return "hover:border-sky-500/50 hover:bg-sky-500/5 text-slate-800 dark:text-slate-200";
    }
  };

  const filteredCategories =
    activeTab === "all"
      ? skills
      : skills.filter((c) => c.title.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section 
      id="skills" 
      className="py-20 md:py-28 relative"
      aria-label="Skills & Technologies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-300 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Modern tools, languages, and frameworks I use to build responsive websites, scalable components, and web applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("all")}
            type="button"
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
              activeTab === "all"
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                : "border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:border-sky-500/40"
            }`}
          >
            All Technologies
          </button>
          {skills.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(category.title.toLowerCase())}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                activeTab === category.title.toLowerCase()
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                  : "border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:border-sky-500/40"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white/70 dark:bg-[#0c1427]/70 backdrop-blur-md p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-sky-500/40 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 group-hover:scale-105 transition-transform">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill Badges List */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center justify-center p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 text-xs font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 cursor-default text-center ${getTechColor(
                      skill.name
                    )}`}
                  >
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
