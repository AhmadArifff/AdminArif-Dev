"use client";

import React from "react";
import { LogOut, Trash, Lock } from "lucide-react";

export const AccountSettings = () => {
  return (
    <div className="mx-auto py-6 xl:max-w-[650px] xl:py-8.5">
      <h2 className="mb-6 border-b border-gray-200 pb-4 text-2xl font-semibold text-gray-900 dark:border-gray-800 dark:text-white/90">
        Account
      </h2>
      <div className="space-y-6">
        <section className="space-y-4">
          <h3 className="mb-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
            Profile Info
          </h3>
          <div className="rounded-2xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="flex items-center gap-3 border-b border-gray-100 p-4 dark:border-gray-800">
              <div className="bg-brand-400 inline-flex size-15 items-center justify-center rounded-full text-2xl font-medium text-white">
                M
              </div>
              <div>
                <label className="mb-2 inline-flex h-7 cursor-pointer items-center justify-center rounded-lg border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 shadow-xs dark:bg-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white/90">
                  <input className="hidden" type="file" name="avatar" />
                  Upload Avatar
                </label>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Min 400x400px, PNG or JPEG formats.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center dark:border-gray-800">
              <label className="flex-1 text-sm font-medium text-gray-700 dark:text-white/90">
                Full Name
              </label>
              <div className="flex-1">
                <input
                  placeholder="Musharof Chowdhory"
                  className="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                  type="text"
                  defaultValue="Musharof Chowdhory"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center dark:border-gray-800">
              <label className="flex-1 text-sm font-medium text-gray-700 dark:text-white/90">
                Email
              </label>
              <div className="flex-1">
                <input
                  placeholder="musharof@example.com"
                  className="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                  type="email"
                  defaultValue="musharof@example.com"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center dark:border-gray-800">
              <label className="flex-1 text-sm font-medium text-gray-700 dark:text-white/90">
                Workspace Name
              </label>
              <div className="flex-1">
                <input
                  placeholder="Pimjo"
                  className="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                  type="text"
                  defaultValue="Pimjo"
                />
              </div>
            </div>
            <div className="flex justify-end p-4">
              <button
                type="button"
                className="bg-brand-500 shadow-theme-xs hover:bg-brand-600 inline-flex h-9 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition"
                onClick={() => alert("Mock: Save Changes")}
              >
                Save Changes
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="mb-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
            Security
          </h3>
          <div className="rounded-2xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="flex flex-col justify-between gap-4 px-5 py-4 sm:flex-row sm:items-center border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm mb-1 font-medium text-gray-800 dark:text-white/90">
                      Change password
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Last updated 2 months ago
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <button
                  type="button"
                  className="inline-flex h-9 cursor-pointer w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:bg-white/5"
                  onClick={() => alert("Mock: Update password")}
                >
                  Update password
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 px-5 py-4 sm:flex-row sm:items-center border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm mb-1 font-medium text-gray-800 dark:text-white/90">
                      Two-Factor Authentication
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    3 devices currently signed in
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <button
                  type="button"
                  className="flex cursor-pointer items-center select-none"
                  aria-pressed="false"
                  onClick={() => alert("Mock: Toggle 2FA")}
                >
                  <span className="relative">
                    <span className="block h-5 w-9 rounded-full transition bg-gray-200 dark:bg-white/10"></span>
                    <span className="shadow-theme-sm absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition duration-200 ease-linear translate-x-0"></span>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 px-5 py-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm mb-1 font-medium text-gray-800 dark:text-white/90">
                      Active sessions
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    3 devices currently signed in
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <button
                  type="button"
                  className="inline-flex h-9 cursor-pointer w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:bg-white/5"
                  onClick={() => alert("Mock: Manage sessions")}
                >
                  Manage
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="mb-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
            Danger Zone
          </h3>
          <div className="rounded-2xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="flex flex-col justify-between gap-4 px-5 py-4 sm:flex-row sm:items-center border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm mb-1 font-medium text-gray-800 dark:text-white/90">
                      Logout all devices
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Sign out from every active session.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <button
                  type="button"
                  className="inline-flex h-9 cursor-pointer w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:bg-white/5"
                  onClick={() => alert("Mock: Logout all")}
                >
                  <LogOut className="size-5" /> Logout All
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 px-5 py-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm mb-1 font-medium text-gray-800 dark:text-white/90">
                      Delete account
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Permanently remove this workspace and all saved data.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <button
                  type="button"
                  className="inline-flex h-9 w-full sm:w-auto cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-red-400 px-3.5 py-2 text-sm font-medium text-red-500 transition-all hover:bg-red-50 dark:border-red-500/30 dark:hover:bg-red-500/10"
                  onClick={() => alert("Mock: Delete account")}
                >
                  <Trash className="size-5" /> Delete
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
