"use client";
import React, { useState } from "react";

export const USCustomerHeatmapCard: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-5">
        <h3 className="text-base font-bold text-gray-900 dark:text-white">
          US Customer Heatmap
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Analyze customer density and regional performance
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/60 min-h-[340px] flex items-center justify-center p-4">
        {/* US Map Vector SVG */}
        <svg
          viewBox="0 0 800 450"
          className="w-full h-auto max-h-[300px] transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* West Coast / Washington */}
          <path d="M50,40 L160,30 L150,110 L40,100 Z" className="fill-brand-600" />
          {/* Oregon / California */}
          <path d="M40,100 L150,110 L120,290 L30,220 Z" className="fill-brand-500" />
          {/* Nevada / Arizona */}
          <path d="M120,130 L230,120 L220,280 L120,290 Z" className="fill-brand-300" />
          {/* Idaho / Montana / Wyoming */}
          <path d="M160,30 L350,20 L340,150 L150,110 Z" className="fill-blue-200 dark:fill-blue-900/50" />
          {/* Texas / South */}
          <path d="M220,280 L390,260 L380,410 L260,380 Z" className="fill-brand-400" />
          {/* Midwest */}
          <path d="M350,20 L580,40 L560,180 L340,150 Z" className="fill-brand-600" />
          {/* East Coast / NY / Florida */}
          <path d="M580,40 L740,60 L710,260 L560,180 Z" className="fill-brand-500" />
          <path d="M640,260 L730,250 L700,380 L620,330 Z" className="fill-brand-700" />

          {/* Density Heatmap Dots */}
          <circle cx="100" cy="80" r="5" className="fill-white animate-ping" />
          <circle cx="100" cy="80" r="4" className="fill-brand-200" />

          <circle cx="80" cy="200" r="5" className="fill-white animate-ping" />
          <circle cx="80" cy="200" r="4" className="fill-brand-200" />

          <circle cx="310" cy="330" r="5" className="fill-white animate-ping" />
          <circle cx="310" cy="330" r="4" className="fill-brand-200" />

          <circle cx="480" cy="110" r="5" className="fill-white animate-ping" />
          <circle cx="480" cy="110" r="4" className="fill-brand-200" />

          <circle cx="680" cy="340" r="5" className="fill-white animate-ping" />
          <circle cx="680" cy="340" r="4" className="fill-brand-200" />
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
