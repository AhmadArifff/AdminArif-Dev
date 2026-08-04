"use client";
import React, { useState } from "react";

export interface ApiKeyItem {
  id: string;
  name: string;
  value: string;
  status: "Active" | "Revoked" | "Expired";
  created: string;
  lastUsed: string;
}

interface ApiKeyTableCardProps {
  apiKeys: ApiKeyItem[];
  onRevokeKey: (id: string) => void;
  onDeleteKey: (id: string) => void;
}

export const ApiKeyTableCard: React.FC<ApiKeyTableCardProps> = ({
  apiKeys,
  onRevokeKey,
  onDeleteKey,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40">
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Key Name
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Key Value
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Created
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Last Used
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-right text-gray-500 dark:text-gray-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-xs">
            {apiKeys.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                  No API keys found. Click "Add API Key" to create one.
                </td>
              </tr>
            ) : (
              apiKeys.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-900/40 transition"
                >
                  {/* Name */}
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </td>

                  {/* Key Value & Copy Button */}
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 font-mono text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      <span>{item.value}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, item.value)}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
                        title="Copy Key"
                      >
                        {copiedId === item.id ? (
                          <span className="text-[10px] text-emerald-500 font-sans font-bold">
                            Copied!
                          </span>
                        ) : (
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        item.status === "Active"
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                          : item.status === "Revoked"
                          ? "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
                          : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Created Date */}
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                    {item.created}
                  </td>

                  {/* Last Used */}
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                    {item.lastUsed}
                  </td>

                  {/* Action Buttons */}
                  <td className="px-6 py-4 text-right">
                    <div className="inline-flex items-center justify-end gap-2">
                      {item.status === "Active" && (
                        <button
                          type="button"
                          onClick={() => onRevokeKey(item.id)}
                          className="rounded-lg px-2.5 py-1 text-xs font-medium text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-500/10 transition"
                        >
                          Revoke
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => onDeleteKey(item.id)}
                        className="rounded-lg px-2 py-1 text-xs text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition"
                        title="Delete Key"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
