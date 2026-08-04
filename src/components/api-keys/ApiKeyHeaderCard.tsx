"use client";
import React from "react";

interface ApiKeyHeaderCardProps {
  onOpenModal: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const ApiKeyHeaderCard: React.FC<ApiKeyHeaderCardProps> = ({
  onOpenModal,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            API Keys
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            API keys are used to authenticate requests to the TailAdmin API
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search keys..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-4 text-xs text-gray-800 outline-none focus:border-brand-500 focus:bg-white dark:border-gray-800 dark:bg-gray-900/50 dark:text-white dark:focus:border-brand-500"
            />
          </div>

          {/* Add API Key Button */}
          <button
            type="button"
            onClick={onOpenModal}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-xs font-medium text-white hover:bg-brand-600 transition"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3.33334V12.6667M3.33334 8H12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Add API Key
          </button>
        </div>
      </div>
    </div>
  );
};
