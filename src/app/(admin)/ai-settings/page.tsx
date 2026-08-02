import type { Metadata } from "next";
import React from "react";
import { AISettingsLayout } from "@/components/ai-settings/AiSettingsLayout";

export const metadata: Metadata = {
  title: "AI Settings | Next.js TailAdmin Template",
  description: "This is the AI Settings page for TailAdmin Template",
};

export default function AISettingsPage() {
  return <AISettingsLayout />;
}
