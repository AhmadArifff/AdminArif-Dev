"use client";
import React from "react";

export const GlobalUserDistributionCard: React.FC = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-5">
        <h3 className="text-base font-bold text-gray-900 dark:text-white">
          Global User Distribution
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Track active users and customer locations worldwide
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/60 min-h-[300px] flex items-center justify-center p-4">
        {/* World Map Vector SVG */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-auto max-h-[280px] fill-gray-200 dark:fill-gray-700/60"
        >
          {/* North America */}
          <path d="M150,120 Q180,90 280,100 Q320,140 290,190 Q220,230 180,190 Z" />
          <path d="M220,240 Q250,220 280,260 Q260,320 220,380 Q190,320 220,240 Z" />
          {/* Europe */}
          <path d="M460,110 Q520,90 560,130 Q540,170 480,160 Z" />
          {/* Africa */}
          <path d="M470,180 Q560,170 580,240 Q550,330 490,320 Q460,240 470,180 Z" />
          {/* Asia */}
          <path d="M570,90 Q750,70 850,130 Q820,240 680,220 Q600,180 570,90 Z" />
          {/* Australia */}
          <path d="M750,280 Q840,270 860,330 Q800,380 740,340 Z" />

          {/* Active Location Pin Dots */}
          {/* US Pin */}
          <circle cx="230" cy="150" r="7" className="fill-brand-500 animate-pulse" />
          <circle cx="230" cy="150" r="14" className="fill-brand-500/30" />

          {/* Europe Pin */}
          <circle cx="510" cy="130" r="7" className="fill-brand-500 animate-pulse" />
          <circle cx="510" cy="130" r="14" className="fill-brand-500/30" />

          {/* India Pin */}
          <circle cx="680" cy="180" r="7" className="fill-brand-500 animate-pulse" />
          <circle cx="680" cy="180" r="14" className="fill-brand-500/30" />

          {/* Australia Pin */}
          <circle cx="800" cy="320" r="7" className="fill-brand-500 animate-pulse" />
          <circle cx="800" cy="320" r="14" className="fill-brand-500/30" />
        </svg>
      </div>
    </div>
  );
};
