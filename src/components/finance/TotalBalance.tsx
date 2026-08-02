"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import ReactApexChart to prevent SSR issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function TotalBalance() {
  const options: ApexOptions = {
    chart: {
      type: "area",
      fontFamily: "'Outfit', sans-serif",
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    colors: ["#465fff"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    tooltip: {
      fixed: { enabled: false },
      x: { show: false },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
      marker: { show: false },
    },
  };

  const series = [
    {
      name: "Balance",
      data: [54.4, 51.68, 52.36, 51, 47.6, 44.2, 40.8, 47.6, 46.24, 45.56, 48.28, 48.96, 49.64, 48.28, 37.4, 28.56, 20.4, 13.6, 19.04, 21.76, 10.2, 14.28, 15.64, 17],
    },
  ];

  return (
    <div className="rounded-[18px] border border-gray-200 bg-gray-100 p-1.5 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex flex-col justify-between rounded-xl bg-white p-6 dark:bg-gray-900">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-5">
          <div>
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">Total Balance</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Overview of your current funds</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button className="flex h-9 items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 text-sm font-medium text-gray-700 shadow-xs dark:border-gray-700 dark:bg-white/[0.03] dark:text-gray-400">
                <span className="flex items-center gap-1.5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8337 13.3333V6.66667M10.8337 13.3333C10.8337 13.7936 10.4606 14.1667 10.0003 14.1667H9.16699C8.70666 14.1667 8.33366 13.7936 8.33366 13.3333V6.66667M10.8337 13.3333H11.667C12.1273 13.3333 12.5003 12.9602 12.5003 12.5V10.8333C12.5003 10.373 12.1273 10 11.667 10H10.8337M8.33366 6.66667V5.83333C8.33366 5.373 8.70666 5 9.16699 5H10.0003C10.4606 5 10.8337 5.373 10.8337 5.83333V6.66667M8.33366 6.66667H7.50033C7.04 6.66667 6.66699 7.03967 6.66699 7.5V9.16667C6.66699 9.627 7.04 10 7.50033 10H8.33366M18.3337 10C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 10C1.66699 5.39763 5.39795 1.66667 10.0003 1.66667C14.6027 1.66667 18.3337 5.39763 18.3337 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  USD
                </span>
                <svg className="transition-transform " width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.3125 7.21875L9 11.9063L13.6875 7.21875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
            <div className="relative">
              <button className="flex h-9 items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 text-sm font-medium text-gray-700 shadow-xs dark:border-gray-700 dark:bg-white/[0.03] dark:text-gray-400">
                <span>June 2025</span>
                <svg className="transition-transform " width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.3125 7.21875L9 11.9063L13.6875 7.21875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-medium text-gray-800 dark:text-white/90">19,857.00</h2>
            <p className="mt-2 flex items-center gap-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
              <span className="text-success-600 flex items-center gap-1 font-medium">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.9974 2.66602L7.9974 13.3336M4 6.66334L7.99987 2.66602L12 6.66334" stroke="#039855" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                3.2%
              </span>
              than last month
            </p>
          </div>
          <div className="w-[150px]">
            <ReactApexChart options={options} series={series} type="area" height={70} />
          </div>
        </div>

        <div className="pt-7.5 mt-5 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col sm:items-center gap-2 sm:flex-row">
            <p className="shrink-0 text-sm text-gray-700 dark:text-gray-400">Primary Account:</p>
            <div className="flex items-center gap-2">
              <p className="shrink-0 text-lg font-medium text-gray-700 dark:text-gray-400">•••• •••• •••• 5332</p>
              <div className="shrink-0">
                <button type="button" className="relative flex h-8 w-9 items-center justify-center rounded-lg border border-gray-300 text-gray-700 shadow-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:bg-white/5">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="absolute">
                    <path d="M14.1559 14.1628H7.08724C6.39688 14.1628 5.83724 13.6032 5.83724 12.9128V5.84416M14.1559 14.1628V15.4161C14.1559 16.1065 13.5963 16.6661 12.9059 16.6661H4.58398C3.89363 16.6661 3.33398 16.1065 3.33398 15.4161V7.09416C3.33398 6.4038 3.89363 5.84416 4.58398 5.84416H5.83724M14.1559 14.1628H15.4144C16.1048 14.1628 16.6644 13.6032 16.6644 12.9128V4.58398C16.6644 3.89363 16.1048 3.33398 15.4144 3.33398H7.08724C6.39688 3.33398 5.83724 3.89363 5.83724 4.58398V5.84416" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
              <button className="flex h-8 shrink-0 items-center justify-center rounded-lg border border-gray-300 px-3 text-sm text-gray-700 shadow-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:bg-white/5">See Details</button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-5 pb-4 mt-5 border-t border-gray-100 dark:border-gray-800">
          <button className="flex h-11 flex-1 shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white hover:bg-brand-600">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9968 5.00356L5 15.0003M14.9977 12.4949L14.9953 5.00214L7.49917 4.99951" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            Transfer
          </button>
          <button className="flex h-11 flex-1 shrink-0 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition dark:border-gray-700 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:bg-white/5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.00095 14.9963L14.9977 4.99954M5 7.50539L5.00238 14.9981L12.4985 15.0007" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            Received
          </button>
          <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 transition dark:border-gray-700 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:bg-white/5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 10.0002H15.0006M10.0002 5V15.0006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
