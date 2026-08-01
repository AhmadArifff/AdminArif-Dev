"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MoreDotIcon } from "@/icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import CountryMap from "../ecommerce/CountryMap";

export const AiAnalytics = () => {
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenProject, setIsOpenProject] = useState(false);

  return (
    <>
      <div className="xl:col-span-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                User Analytics
              </h3>
              <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
                Number of users based on country
              </p>
            </div>
            <div className="relative inline-block">
              <button
                onClick={() => setIsOpenUser(!isOpenUser)}
                className="dropdown-toggle"
              >
                <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
              </button>
              <Dropdown
                isOpen={isOpenUser}
                onClose={() => setIsOpenUser(false)}
                className="w-40 p-2"
              >
                <DropdownItem
                  onItemClick={() => setIsOpenUser(false)}
                  className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                  View More
                </DropdownItem>
              </Dropdown>
            </div>
          </div>
          <div className="px-4 py-6 my-6 overflow-hidden border border-gray-200 rounded-2xl bg-gray-50 dark:border-gray-800 dark:bg-gray-900 sm:px-6">
            <div className="mapOne h-[212px]">
              <CountryMap />
            </div>
          </div>
        </div>
      </div>

      <div className="xl:col-span-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Projects Analytics
              </h3>
              <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
                Number of projects based on country
              </p>
            </div>
            <div className="relative inline-block">
              <button
                onClick={() => setIsOpenProject(!isOpenProject)}
                className="dropdown-toggle"
              >
                <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
              </button>
              <Dropdown
                isOpen={isOpenProject}
                onClose={() => setIsOpenProject(false)}
                className="w-40 p-2"
              >
                <DropdownItem
                  onItemClick={() => setIsOpenProject(false)}
                  className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                  View More
                </DropdownItem>
              </Dropdown>
            </div>
          </div>
          <div className="px-4 py-6 my-6 overflow-hidden border border-gray-200 rounded-2xl bg-gray-50 dark:border-gray-800 dark:bg-gray-900 sm:px-6">
            <div className="mapOne h-[212px]">
              <CountryMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
