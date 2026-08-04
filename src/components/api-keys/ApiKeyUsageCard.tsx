"use client";
import React, { useState } from "react";

export const ApiKeyUsageCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `curl -X GET "https://api.tailadmin.com/v1/user" \\
  -H "Authorization: Bearer sec_live_**********8x92" \\
  -H "Content-Type: application/json"`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-gray-800 dark:text-white">
            API Key Usage & Authentication
          </h3>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Pass your secret API key in the Authorization header of your HTTP requests.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopyCode}
          className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-300 dark:hover:bg-gray-800 transition"
        >
          {copied ? (
            <span className="text-emerald-500 font-bold">Copied!</span>
          ) : (
            <>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
              <span>Copy Snippet</span>
            </>
          )}
        </button>
      </div>

      <div className="relative rounded-xl bg-slate-900 p-4 font-mono text-xs text-emerald-400 dark:bg-gray-950 overflow-x-auto">
        <pre className="whitespace-pre-wrap">{codeSnippet}</pre>
      </div>
    </div>
  );
};
