"use client";
import React from "react";

export interface IntegrationItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  connected: boolean;
}

interface IntegrationCardProps {
  item: IntegrationItem;
  onToggle: (id: string) => void;
  onOpenDetails: (item: IntegrationItem) => void;
}

export const IntegrationCard: React.FC<IntegrationCardProps> = ({
  item,
  onToggle,
  onOpenDetails,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03]">
      <div>
        {/* Top Row: App Icon & Options Menu */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 p-2.5 dark:bg-gray-800/80">
            {item.icon}
          </div>

          <button
            type="button"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
            title="Options"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>

        {/* Content Section */}
        <div className="mt-5">
          <h4 className="text-base font-bold text-gray-900 dark:text-white">
            {item.name}
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400 min-h-[36px]">
            {item.description}
          </p>
        </div>
      </div>

      {/* Footer Controls Section */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-5">
        <div className="flex items-center gap-2">
          {/* Settings Button */}
          <button
            type="button"
            onClick={() => onOpenDetails(item)}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition"
            title="Settings"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* Details Button */}
          <button
            type="button"
            onClick={() => onOpenDetails(item)}
            className="rounded-xl border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 transition"
          >
            Details
          </button>
        </div>

        {/* Toggle Switch */}
        <button
          type="button"
          onClick={() => onToggle(item.id)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
            item.connected ? "bg-brand-500" : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
              item.connected ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
};
