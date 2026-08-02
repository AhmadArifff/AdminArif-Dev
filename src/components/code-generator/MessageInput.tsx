"use client";

import React from "react";
import Image from "next/image";
import { Paperclip, Mic, ChevronDown } from "lucide-react";

export default function MessageInput() {
  return (
    <div className="fixed bottom-5 lg:bottom-10 left-1/2 z-20 w-full -translate-x-1/2 transform px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[720px] rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-xs dark:border-gray-700 dark:bg-white/5">
        <textarea
          placeholder="Type your prompt here..."
          className="h-20 w-full resize-none border-none bg-transparent p-2 font-normal text-gray-800 outline-none placeholder:text-gray-400 focus:ring-0 dark:text-white"
        ></textarea>
        <div className="flex items-center justify-between pt-2">
          <span className="inline-flex">
            <label className="flex size-9 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-gray-200 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-300">
              <input className="sr-only" type="file" />
              <Paperclip className="size-5" />
            </label>
          </span>
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                aria-expanded="false"
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 text-sm text-gray-700 dark:text-gray-400"
              >
                <Image
                  width={18}
                  height={18}
                  alt="claude"
                  src="/images/logo/claude.svg"
                />
                <span>Claude Sonnet 4.6</span>
                <ChevronDown className="size-4 transition-transform duration-150" />
              </button>
            </div>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-white transition hover:bg-gray-800 dark:bg-white/90 dark:text-gray-800 dark:hover:bg-gray-900 dark:hover:text-white/90">
              <Mic className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
