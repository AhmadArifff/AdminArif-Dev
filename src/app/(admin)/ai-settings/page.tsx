import React from "react";
import type { Metadata } from "next";
import { AiSettingsLayout } from "@/components/ai-settings/AiSettingsLayout";

export const metadata: Metadata = {
  title: "AI Settings | TailAdmin - React.js Admin Dashboard Template",
  description:
    "This is AI Settings page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template",
};

export default function AiSettingsPage() {
  return <AiSettingsLayout />;
}
