"use client";

import React from "react";
import { 
  ShieldCheck, 
  Key, 
  FolderLock, 
  FileText, 
  Bell, 
  Users, 
  Calendar, 
  Network, 
  Briefcase, 
  CheckCircle, 
  BarChart3, 
  Database,
  Lock
} from "lucide-react";

export function VaultXVisual() {
  return (
    <div className="w-full h-full min-h-[200px] p-4 bg-gradient-to-br from-[#0a1222] via-[#0f1d38] to-[#091122] rounded-xl flex flex-col justify-between border border-sky-500/20 text-slate-200 select-none overflow-hidden relative group-hover:border-sky-400/50 transition-colors">
      {/* Background radial glow */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-sky-500/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Top Bar Mockup */}
      <div className="flex items-center justify-between border-b border-sky-500/20 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-md bg-sky-500/20 text-sky-400 border border-sky-500/30">
            <Lock className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-xs font-bold text-white tracking-wide">
            VAULTX // ENCRYPTED
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] text-emerald-400 font-mono">
          <ShieldCheck className="w-3 h-3" />
          <span>AES-GCM ACTIVE</span>
        </div>
      </div>

      {/* Middle Mockup Grid */}
      <div className="grid grid-cols-3 gap-2.5 my-3">
        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/60 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <FolderLock className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-[10px] font-mono">14</span>
          </div>
          <div className="text-[11px] font-semibold text-white mt-1">Folders</div>
        </div>

        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/60 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <Key className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] font-mono">38</span>
          </div>
          <div className="text-[11px] font-semibold text-white mt-1">Credentials</div>
        </div>

        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/60 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-mono">62</span>
          </div>
          <div className="text-[11px] font-semibold text-white mt-1">Documents</div>
        </div>
      </div>

      {/* Security Status Bar */}
      <div className="p-2 rounded-lg bg-sky-950/40 border border-sky-500/20 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Session Auto-Timeout: 15m</span>
        </div>
        <span className="text-sky-400 font-bold">2FA Verified</span>
      </div>
    </div>
  );
}

export function CampusConnectVisual() {
  return (
    <div className="w-full h-full min-h-[200px] p-4 bg-gradient-to-br from-[#091522] via-[#0d2138] to-[#07121d] rounded-xl flex flex-col justify-between border border-cyan-500/20 text-slate-200 select-none overflow-hidden relative group-hover:border-cyan-400/50 transition-colors">
      {/* Background radial glow */}
      <div className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Top Bar Mockup */}
      <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-md bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Network className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-xs font-bold text-white tracking-wide">
            CAMPUS-X // PORTAL
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-[10px] text-cyan-300 font-mono">
          <Database className="w-3 h-3" />
          <span>.NET / REST API</span>
        </div>
      </div>

      {/* Campus Feed Snapshot */}
      <div className="space-y-2 my-3">
        <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-300 text-[10px] font-bold">
              CS
            </div>
            <div>
              <div className="text-[11px] font-bold text-white">Algorithms Workshop</div>
              <div className="text-[9.5px] text-slate-400">Engineering Hall B • Today 3:00 PM</div>
            </div>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[9.5px] font-mono bg-sky-500/20 text-sky-300">
            Notice
          </span>
        </div>

        <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 text-[10px] font-bold">
              DB
            </div>
            <div>
              <div className="text-[11px] font-bold text-white">MySQL Project Resources</div>
              <div className="text-[9.5px] text-slate-400">12 Shared Notes &amp; Lab Solutions</div>
            </div>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[9.5px] font-mono bg-emerald-500/20 text-emerald-300">
            Active
          </span>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800">
        <span className="flex items-center gap-1">
          <Users className="w-3 h-3 text-cyan-400" />
          Student Community
        </span>
        <span className="text-cyan-400 font-semibold">Angular + C# Backend</span>
      </div>
    </div>
  );
}

export function HrSystemVisual() {
  return (
    <div className="w-full h-full min-h-[200px] p-4 bg-gradient-to-br from-[#0c1328] via-[#101b38] to-[#080d1a] rounded-xl flex flex-col justify-between border border-blue-500/20 text-slate-200 select-none overflow-hidden relative group-hover:border-blue-400/50 transition-colors">
      {/* Background radial glow */}
      <div className="absolute -top-10 -right-10 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Top Bar Mockup */}
      <div className="flex items-center justify-between border-b border-blue-500/20 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <Briefcase className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-xs font-bold text-white tracking-wide">
            HR WORKFLOW SYSTEM
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-[10px] text-blue-300 font-mono">
          <BarChart3 className="w-3 h-3" />
          <span>ANALYSIS &amp; ARCH</span>
        </div>
      </div>

      {/* Task & Sprint Analytics Progress */}
      <div className="my-3 space-y-2">
        <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60">
          <div className="flex justify-between items-center text-[10.5px] font-mono text-slate-300 mb-1.5">
            <span>Sprint Execution Velocity</span>
            <span className="text-emerald-400 font-bold">94%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full w-[94%]"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 flex items-center justify-between">
            <span className="text-[10px] text-slate-400">Attendance</span>
            <span className="text-[11px] font-bold text-sky-400">98.2%</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 flex items-center justify-between">
            <span className="text-[10px] text-slate-400">Task Queues</span>
            <span className="text-[11px] font-bold text-emerald-400">120 Closed</span>
          </div>
        </div>
      </div>

      {/* Footer Contribution highlight */}
      <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-500/20 flex items-center justify-between text-[10.5px] font-mono">
        <span className="text-slate-300">My Contribution:</span>
        <span className="text-sky-300 font-bold">Analysis &amp; Solution Dev</span>
      </div>
    </div>
  );
}
