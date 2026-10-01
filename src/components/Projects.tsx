"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Check, 
  Sparkles,
  Layers
} from "lucide-react";
import { VaultXVisual, CampusConnectVisual, HrSystemVisual } from "./ProjectVisuals";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderVisual = (id: string) => {
    switch (id) {
      case "vaultx":
        return <VaultXVisual />;
      case "campusxconnect":
        return <CampusConnectVisual />;
      case "hr-system":
        return <HrSystemVisual />;
      default:
        return null;
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 md:py-28 relative"
      aria-label="Featured Projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-300 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Original web applications and platforms built with clean frontend components, secure architectures, and modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white/70 dark:bg-[#0c1427]/70 backdrop-blur-md overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Abstract Visual Header */}
                <div className="p-3 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800/90">
                  {renderVisual(project.id)}
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-sky-600 dark:text-sky-400">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Contribution Highlight if available */}
                  {project.contributionHighlight && (
                    <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-[11px] text-sky-800 dark:text-sky-300 font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>Focus: <strong>{project.contributionHighlight}</strong></span>
                    </div>
                  )}

                  {/* Key Features Preview */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 font-semibold block">
                      Key Highlights:
                    </span>
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10.5px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-500">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  type="button"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs tracking-wide shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
