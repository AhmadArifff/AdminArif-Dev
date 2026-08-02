import type { Metadata } from "next";
import React from "react";
import { ImageGeneratorLayout } from "@/components/image-generator/ImageGeneratorLayout";

export const metadata: Metadata = {
  title: "AI Image Generator | Next.js TailAdmin Template",
  description: "This is the AI Image Generator page for TailAdmin Template",
};

export default function ImageGeneratorPage() {
  return <ImageGeneratorLayout />;
}
