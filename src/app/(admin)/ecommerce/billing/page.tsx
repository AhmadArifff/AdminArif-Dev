import type { Metadata } from "next";
import React from "react";
import { BillingLayout } from "@/components/ecommerce/billing/BillingLayout";

export const metadata: Metadata = {
  title: "Billing | Next.js TailAdmin Template",
  description: "This is the Billing page for TailAdmin Template",
};

export default function BillingPage() {
  return <BillingLayout />;
}
