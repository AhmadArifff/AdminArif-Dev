"use client";
import React from "react";
import { IntegrationItem } from "./IntegrationCard";

interface IntegrationDetailsModalProps {
  isOpen: boolean;
  item: IntegrationItem | null;
  onClose: () => void;
  onToggle: (id: string) => void;
}

export const IntegrationDetailsModal: React.FC<IntegrationDetailsModalProps> = ({
  isOpen,
  item,
  onClose,
  onToggle,
}) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-99999 flex items-center justify-center bg-gray-900/50 backdrop-blur-xs p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 p-2 dark:bg-gray-800">
              {item.icon}
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                {item.name} Integration
              </h3>
              <span className={`text-[11px] font-semibold ${item.connected ? "text-emerald-500" : "text-gray-400"}`}>
                {item.connected ? "Connected & Active" : "Not Connected"}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-5 space-y-4 text-xs">
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Description:</span>
            <p className="mt-1 text-gray-500 dark:text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-800/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700 dark:text-gray-300">Auto Sync</span>
              <span className="text-emerald-500 font-semibold">Enabled</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700 dark:text-gray-300">Webhook Status</span>
              <span className="text-gray-500 dark:text-gray-400">Listening on /v1/webhooks</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700 dark:text-gray-300">Last Synced</span>
              <span className="text-gray-500 dark:text-gray-400">2 minutes ago</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
          <button
            type="button"
            onClick={() => onToggle(item.id)}
            className={`rounded-xl px-4 py-2.5 text-xs font-medium transition ${
              item.connected
                ? "bg-rose-50 text-rose-600 hover:bg-rose-100 dark:bg-rose-500/10 dark:text-rose-400"
                : "bg-brand-500 text-white hover:bg-brand-600"
            }`}
          >
            {item.connected ? "Disconnect App" : "Connect App"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
