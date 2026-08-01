import React from "react";
import type { Metadata } from "next";

import SalesMetrics from "@/components/sales/SalesMetrics";
import UsersRevenueStatistics from "@/components/sales/UsersRevenueStatistics";
import UserRetention from "@/components/sales/UserRetention";
import SalesByChannel from "@/components/sales/SalesByChannel";
import SalesByCountry from "@/components/sales/SalesByCountry";
import TopProducts from "@/components/sales/TopProducts";

export const metadata: Metadata = {
  title: "Sales Dashboard | Arif.Dev - Next.js Admin Dashboard Template",
  description: "This is Sales Dashboard page for Arif.Dev - Next.js Admin Dashboard",
};

export default function SalesDashboard() {
  return (
    <div className="space-y-6">
      <SalesMetrics />
      
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 xl:col-span-8">
          <UsersRevenueStatistics />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <UserRetention />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 xl:col-span-7">
          <SalesByChannel />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <SalesByCountry />
        </div>
      </div>

      <TopProducts />
    </div>
  );
}
