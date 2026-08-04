"use client";
import React, { useState } from "react";

export const CountryTrafficAnalyticsCard: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-5">
        <h3 className="text-base font-bold text-gray-900 dark:text-white">
          Country Traffic Analytics
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Visualize traffic volume and engagement by region
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/60 min-h-[300px] flex items-center justify-center p-4">
        {/* World Choropleth Map SVG */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-auto max-h-[280px] transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* US - High Intensity */}
          <path d="M150,120 Q180,90 280,100 Q320,140 290,190 Q220,230 180,190 Z" className="fill-brand-600" />
          {/* Canada - Medium */}
          <path d="M140,40 Q260,30 320,90 Q200,100 140,40 Z" className="fill-brand-400" />
          {/* South America - Soft */}
          <path d="M220,240 Q250,220 280,260 Q260,320 220,380 Q190,320 220,240 Z" className="fill-brand-300" />
          {/* Europe - Medium High */}
          <path d="M460,110 Q520,90 560,130 Q540,170 480,160 Z" className="fill-brand-500" />
          {/* Africa - Light */}
          <path d="M470,180 Q560,170 580,240 Q550,330 490,320 Q460,240 470,180 Z" className="fill-gray-300 dark:fill-gray-700" />
          {/* Russia - Medium */}
          <path d="M570,70 Q780,50 870,100 Q760,140 570,110 Z" className="fill-brand-300" />
          {/* China - High Medium */}
          <path d="M680,130 Q800,120 840,180 Q740,210 680,130 Z" className="fill-brand-400" />
          {/* Australia - Soft Blue */}
          <path d="M750,280 Q840,270 860,330 Q800,380 740,340 Z" className="fill-brand-300" />
        </svg>

        {/* Floating Zoom Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-1 rounded-lg border border-gray-200 bg-white/90 p-1 shadow-md dark:border-gray-700 dark:bg-gray-900/90 backdrop-blur-xs z-10">
          <button
            type="button"
            onClick={handleZoomIn}
            className="flex h-7 w-7 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 font-bold transition text-xs"
            title="Zoom In"
          >
            +
          </button>
          <div className="h-px bg-gray-200 dark:bg-gray-700" />
          <button
            type="button"
            onClick={handleZoomOut}
            className="flex h-7 w-7 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 font-bold transition text-xs"
            title="Zoom Out"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
