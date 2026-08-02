"use client";
import React from "react";
import TotalBalance from "@/components/finance/TotalBalance";
import FinanceMetrics from "@/components/finance/FinanceMetrics";
import CashflowOverview from "@/components/finance/CashflowOverview";
import MyCards from "@/components/finance/MyCards";
import Spending from "@/components/finance/Spending";
import QuickSend from "@/components/finance/QuickSend";
import RecentTransactions from "@/components/finance/RecentTransactions";

export default function FinancePage() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
      {/* Top Left: Total Balance */}
      <div className="col-span-12 xl:col-span-5">
        <TotalBalance />
      </div>

      {/* Top Right: Metrics */}
      <div className="col-span-12 xl:col-span-7">
        <FinanceMetrics />
      </div>

      {/* Cashflow & MyCards Row */}
      <div className="col-span-12 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <CashflowOverview />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <MyCards />
        </div>
      </div>

      {/* Spending & QuickSend Row */}
      <div className="col-span-12 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-6">
          <Spending />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <QuickSend />
        </div>
      </div>

      {/* Bottom Table: Recent Transactions */}
      <div className="col-span-12">
        <RecentTransactions />
      </div>
    </div>
  );
}
