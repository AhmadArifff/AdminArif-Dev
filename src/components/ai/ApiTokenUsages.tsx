"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useState } from "react";
import { MoreDotIcon } from "@/icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const ApiTokenUsages = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const options: ApexOptions = {
    chart: {
      type: "donut",
      fontFamily: "Outfit, sans-serif",
    },
    colors: ["#7592FF", "#7CD4FD", "#BDB4FE"],
    labels: ["xGPT", "Geminix", "xAI"],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      markers: {
        shape: "circle",
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "24px",
              fontWeight: 600,
            },
            value: {
              show: true,
              fontSize: "12px",
              fontWeight: 400,
              color: "#667085",
            },
            total: {
              show: true,
              label: "13.5M",
              fontSize: "24px",
              fontWeight: 600,
              color: "#000000",
              formatter: function (w) {
                return "2450";
              },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
  };

  const series = [900, 700, 850];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-3 py-2 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-3 flex items-center justify-between gap-5 px-4 pt-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            API Token Usages
          </h3>
        </div>
        <div className="relative inline-block">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
          </button>
          <Dropdown isOpen={isOpen} onClose={closeDropdown} className="w-40 p-2">
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              View More
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Delete
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-center">
          <Chart options={options} series={series} type="donut" height={250} />
        </div>
        <div className="px-4 pb-4">
           {/* If we needed extra legends or tokens details we'd add here, but donut legend is mostly enough */}
        </div>
      </div>
    </div>
  );
};
