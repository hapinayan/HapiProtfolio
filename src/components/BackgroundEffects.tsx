"use client";

import React from "react";

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10 select-none">
      {/* Subtle Grid Pattern with radial mask */}
      <div 
        className="absolute inset-0 tech-grid opacity-75 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" 
      />

      {/* Top Ambient Glow - Electric Blue */}
      <div 
        className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[650px] h-[450px] rounded-full bg-gradient-to-b from-sky-500/15 via-blue-600/10 to-transparent blur-[120px] dark:from-sky-400/20 dark:via-blue-600/15 animate-pulse-slow" 
      />

      {/* Side Ambient Glow - Deep Blue/Indigo */}
      <div 
        className="absolute top-[35%] -left-[150px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-700/10 to-transparent blur-[140px] dark:from-sky-600/15" 
      />

      {/* Bottom Subtle Ambient Glow */}
      <div 
        className="absolute -bottom-[200px] right-[5%] w-[600px] h-[500px] rounded-full bg-gradient-to-t from-cyan-500/10 via-sky-600/5 to-transparent blur-[130px] dark:from-cyan-400/15" 
      />

      {/* Floating subtle code symbols */}
      <div className="absolute top-[18%] left-[8%] text-xs font-mono text-sky-500/25 dark:text-sky-400/20 animate-float-slow hidden md:block">
        &lt;div class=&quot;developer&quot;&gt;
      </div>
      <div className="absolute top-[35%] right-[10%] text-xs font-mono text-blue-500/25 dark:text-blue-400/20 animate-float-slow [animation-delay:2s] hidden md:block">
        const build = async () =&gt; &#123; &#125;
      </div>
      <div className="absolute top-[65%] left-[6%] text-xs font-mono text-cyan-500/20 dark:text-cyan-400/15 animate-float-slow [animation-delay:4s] hidden md:block">
        git commit -m &quot;feat: modern-ui&quot;
      </div>
      <div className="absolute top-[82%] right-[8%] text-xs font-mono text-indigo-500/25 dark:text-indigo-400/20 animate-float-slow [animation-delay:3s] hidden md:block">
        &lt;/Hapinayan&gt;
      </div>
    </div>
  );
}
