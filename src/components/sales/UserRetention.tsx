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
      fontFamily: "'Outfit', sans-serif",
      sparkline: { enabled: true },
    },
    colors: ["#3641F5"],
    plotOptions: {
      radialBar: {
        hollow: { size: "65%" },
        track: { background: "#F3F4F6", margin: 0 },
        dataLabels: {
          show: true,
          name: { show: false },
          value: {
            show: true,
            fontSize: "14px",
            fontWeight: 600,
            offsetY: 5,
            color: "#1F2937",
            formatter: (val) => val + "%"
          },
        },
      },
    },
    stroke: { lineCap: "round" },
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
        
        <div>
          <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
}
