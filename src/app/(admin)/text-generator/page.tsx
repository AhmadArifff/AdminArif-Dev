import type { Metadata } from "next";
import React from "react";
import { TextGeneratorLayout } from "@/components/text-generator/TextGeneratorLayout";

export const metadata: Metadata = {
  title: "AI Text Generator | Next.js TailAdmin Template",
  description: "This is the AI Text Generator page for TailAdmin Template",
};

export default function TextGeneratorPage() {
  return <TextGeneratorLayout />;
}
