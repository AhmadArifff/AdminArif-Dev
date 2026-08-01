"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function UserRetention() {
  const options: ApexOptions = {
    chart: {
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    colors: ["#465FFF"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "65%",
        },
        dataLabels: {
          show: false,
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
  };

  const series = [24];

  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            User Retention
          </h4>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Current active users
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-800 dark:text-white/90">24%</span>
          </div>
          <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            height={120}
            width={120}
          />
        </div>
      </div>
    </div>
  );
}
