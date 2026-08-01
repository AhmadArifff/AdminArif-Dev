"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon, PlugInIcon, TrashBinIcon } from "@/icons";

interface Transaction {
  id: number;
  name: string;
  email: string;
  plan: string;
  price: string;
  date: string;
  status: "Active" | "Expired" | "Canceled";
}

const tableData: Transaction[] = [
  {
    id: 1,
    name: "Lindsey Curtis",
    email: "lindsey@gmail.com",
    plan: "Pro - Monthly",
    price: "$99.00",
    date: "14 Jan, 2029",
    status: "Active",
  },
  {
    id: 2,
    name: "Kaiya George",
    email: "kaiya@gmail.com",
    plan: "Enterprise - Yearly",
    price: "$999.00",
    date: "25 Dec, 2028",
    status: "Active",
  },
  {
    id: 3,
    name: "Zainab Bator",
    email: "zainab@gmail.com",
    plan: "Starter - Monthly",
    price: "$20.00",
    date: "22 Dec, 2028",
    status: "Canceled",
  },
  {
    id: 4,
    name: "Chance Philips",
    email: "chance@gmail.com",
    plan: "Growth - Yearly",
    price: "$249.00",
    date: "12 Dec, 2028",
    status: "Active",
  },
  {
    id: 5,
    name: "Terry Geidt",
    email: "terry@gmail.com",
    plan: "Starter - Monthly",
    price: "$20.00",
    date: "25 Nov, 2028",
    status: "Expired",
  },
];

export const RecentTransactions = () => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const closeDropdown = () => {
    setOpenDropdownId(null);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Transactions
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                User
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Plan
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Price
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Date
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="py-3">
                  <div>
                    <p className="font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                      {transaction.name}
                    </p>
                    <span className="text-gray-500 text-sm dark:text-gray-400">
                      {transaction.email}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-700 text-theme-sm dark:text-gray-400">
                  {transaction.plan}
                </TableCell>
                <TableCell className="py-3 text-gray-700 text-theme-sm dark:text-gray-400">
                  {transaction.price}
                </TableCell>
                <TableCell className="py-3 text-gray-700 text-theme-sm dark:text-gray-400">
                  {transaction.date}
                </TableCell>
                <TableCell className="py-3">
                  <Badge
                    size="sm"
                    color={
                      transaction.status === "Active"
                        ? "success"
                        : transaction.status === "Expired"
                        ? "error"
                        : "warning"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="py-3">
                  <div className="relative inline-block">
                    <button
                      onClick={() => toggleDropdown(transaction.id)}
                      className="text-gray-500 dark:text-gray-400"
                    >
                      <MoreDotIcon className="size-6" />
                    </button>
                    <Dropdown
                      isOpen={openDropdownId === transaction.id}
                      onClose={closeDropdown}
                      className="w-40 p-2 right-0"
                    >
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
