"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { 
  X, 
  Check, 
  Github, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  ShieldCheck 
} from "lucide-react";
import { VaultXVisual, CampusConnectVisual, HrSystemVisual } from "./ProjectVisuals";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderVisual = () => {
    switch (project.id) {
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#091122] shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {project.badge}
              </span>
            )}
          </div>
          <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Visual Preview */}
        <div className="rounded-xl overflow-hidden shadow-inner border border-slate-200/80 dark:border-slate-800">
          {renderVisual()}
        </div>

        {/* Contribution Highlight if available */}
        {project.contributionHighlight && (
          <div className="p-4 rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-900 dark:text-sky-200 text-xs sm:text-sm flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Role &amp; Contribution Focus: </span>
              <span>{project.contributionHighlight}</span>
            </div>
          </div>
        )}

        {/* Key Features List */}
        <div>
          <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-500" />
            <span>Key Features &amp; Specifications</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-2 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 text-xs text-slate-700 dark:text-slate-300"
              >
                <div className="w-4 h-4 rounded bg-sky-500/10 flex items-center justify-center text-sky-500 shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Badges */}
        <div>
          <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-sky-500" />
            <span>Technologies Used</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:border-sky-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold shadow-md shadow-sky-500/20 transition-all"
            >
              <span>Discuss Similar Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 font-mono underline"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
