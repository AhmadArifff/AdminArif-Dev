"use client";

import React from "react";
import { User, Settings, CreditCard, Palette, Cpu, Folder, Box, Link2, Lock, ChevronDown } from "lucide-react";
import Link from "next/link";

export const SettingsSidebar = () => {
  return (
    <aside className="fixed top-0 right-0 z-[99999] h-full w-72 overflow-y-auto bg-white p-3 shadow-xl transition-transform duration-300 ease-in-out xl:static xl:z-auto xl:block xl:w-62.5 xl:translate-x-0 xl:border-r xl:border-gray-200 xl:shadow-none dark:border-gray-800 dark:bg-gray-900 translate-x-full">
      <div className="space-y-4">
        <div className="relative">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-lg border border-gray-100 p-3 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-white/5"
            onClick={() => alert("Mock: Profile dropdown")}
          >
            <div className="flex items-center gap-2.5">
              <div className="bg-brand-400 inline-flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white">
                M
              </div>
              <div className="text-left">
                <h4 className="text-sm font-medium text-gray-800 dark:text-white/90">
                  Musharof Chy
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Personal</p>
              </div>
            </div>
            <ChevronDown className="size-5 shrink-0 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div>
          <p className="mb-0.5 block px-3 py-1 text-xs text-gray-400 uppercase">
            Account
          </p>
          <div className="space-y-0.5">
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition bg-gray-100 font-medium text-gray-800 dark:bg-white/5 dark:text-white/90"
              onClick={() => alert("Mock: Go to Account Settings")}
            >
              <User className="size-5" /> Account
            </button>
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
              onClick={() => alert("Mock: Go to General Settings")}
            >
              <Settings className="size-5" /> General
            </button>
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
              onClick={() => alert("Mock: Go to Credit and Billing")}
            >
              <CreditCard className="size-5" /> Credit and Billing
            </button>
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
              onClick={() => alert("Mock: Go to Personalization")}
            >
              <Palette className="size-5" /> Personalization
            </button>
          </div>
        </div>

        <div>
          <p className="mb-0.5 block px-3 py-1 text-xs text-gray-400 uppercase">
            Features
          </p>
          <div className="space-y-0.5">
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
              onClick={() => alert("Mock: Go to Memory")}
            >
              <Cpu className="size-5" /> Memory
            </button>
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
              onClick={() => alert("Mock: Go to File & Media")}
            >
              <Folder className="size-5" /> File & Media
            </button>
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
              onClick={() => alert("Mock: Go to Model")}
            >
              <Box className="size-5" /> Model
            </button>
          </div>
        </div>

        <div>
          <p className="mb-0.5 block px-3 py-1 text-xs text-gray-400 uppercase">
            System
          </p>
          <div className="space-y-0.5">
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
              onClick={() => alert("Mock: Go to Connector")}
            >
              <Link2 className="size-5" /> Connector
            </button>
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
              onClick={() => alert("Mock: Go to Data Control")}
            >
              <Lock className="size-5" /> Data Control
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
