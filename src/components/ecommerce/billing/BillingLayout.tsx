"use client";
import React from "react";
import { BillingHeader } from "./BillingHeader";
import { PlanDetails } from "./PlanDetails";
import { BillingInfo } from "./BillingInfo";
import { PaymentMethods } from "./PaymentMethods";
import { BillingInvoices } from "./BillingInvoices";

export const BillingLayout = () => {
  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) p-4 pb-20 md:p-6 md:pb-24">
      <BillingHeader />
      <div className="mb-6 flex flex-col gap-6 xl:flex-row">
        <PlanDetails />
        <BillingInfo />
      </div>
      <PaymentMethods />
      <BillingInvoices />
    </div>
  );
};
