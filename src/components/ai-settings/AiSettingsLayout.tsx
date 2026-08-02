"use client";

import React from "react";
import { SettingsSidebar } from "./SettingsSidebar";
import { AccountSettings } from "./AccountSettings";

export const AiSettingsLayout = () => {
  return (
    <div className="flex h-[calc(100vh-theme(spacing.header))] flex-col sm:flex-row">
      {/* Sidebar for settings */}
      <SettingsSidebar />

      {/* Main content area */}
      <main className="h-full flex-1 overflow-y-auto no-scrollbar">
        <AccountSettings />
      </main>
    </div>
  );
};
