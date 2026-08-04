"use client";
import React, { useState } from "react";

export interface InvoiceItem {
  id: string;
  productName: string;
  quantity: number;
  unitCost: number;
  discount: number;
}

const initialItems: InvoiceItem[] = [
  {
    id: "1",
    productName: 'Macbook pro 13"',
    quantity: 1,
    unitCost: 1200,
    discount: 0,
  },
  {
    id: "2",
    productName: "Apple Watch Ultra",
    quantity: 1,
    unitCost: 300,
    discount: 50,
  },
  {
    id: "3",
    productName: "iPhone 15 Pro Max",
    quantity: 2,
    unitCost: 800,
    discount: 0,
  },
  {
    id: "4",
    productName: "iPad Pro 3rd Gen",
    quantity: 1,
    unitCost: 900,
    discount: 0,
  },
];

export const CreateInvoiceTable: React.FC = () => {
  const [items, setItems] = useState<InvoiceItem[]>(initialItems);

  const handleItemChange = (
    id: string,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  const handleAddItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      productName: "",
      quantity: 1,
      unitCost: 0,
      discount: 0,
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const calculateRowTotal = (item: InvoiceItem) => {
    const baseTotal = item.quantity * item.unitCost;
    const discountAmount = baseTotal * (item.discount / 100);
    return baseTotal - discountAmount;
  };

  const subtotal = items.reduce((acc, item) => acc + calculateRowTotal(item), 0);

  return (
    <div className="p-5 lg:p-6">
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
        <table className="min-w-full divide-y divide-gray-200 text-left dark:divide-gray-800">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th scope="col" className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                S. No.
              </th>
              <th scope="col" className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Products
              </th>
              <th scope="col" className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Quantity
              </th>
              <th scope="col" className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Unit Cost
              </th>
              <th scope="col" className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Discount
              </th>
              <th scope="col" className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Total
              </th>
              <th scope="col" className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-transparent">
            {items.map((item, index) => {
              const rowTotal = calculateRowTotal(item);
              return (
                <tr key={item.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02]">
                  <td className="px-5 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-gray-900 dark:text-white min-w-[200px]">
                    <input
                      type="text"
                      value={item.productName}
                      onChange={(e) => handleItemChange(item.id, "productName", e.target.value)}
                      className="w-full rounded-md border border-transparent bg-transparent px-2 py-1 text-sm font-semibold text-gray-900 focus:border-gray-300 focus:bg-white focus:outline-none dark:text-white dark:focus:border-gray-700 dark:focus:bg-gray-900"
                    />
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap w-[100px]">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(item.id, "quantity", Number(e.target.value))}
                      className="w-20 rounded-md border border-gray-200 bg-transparent px-2 py-1 text-sm text-gray-800 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                    />
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap w-[120px]">
                    <div className="relative flex items-center">
                      <span className="text-gray-500 dark:text-gray-400 mr-1">$</span>
                      <input
                        type="number"
                        min="0"
                        value={item.unitCost}
                        onChange={(e) => handleItemChange(item.id, "unitCost", Number(e.target.value))}
                        className="w-24 rounded-md border border-gray-200 bg-transparent px-2 py-1 text-sm text-gray-800 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                      />
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap w-[100px]">
                    <div className="relative flex items-center">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={item.discount}
                        onChange={(e) => handleItemChange(item.id, "discount", Number(e.target.value))}
                        className="w-16 rounded-md border border-gray-200 bg-transparent px-2 py-1 text-sm text-gray-800 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                      />
                      <span className="text-gray-500 dark:text-gray-400 ml-1">%</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                    ${rowTotal.toFixed(2)}
                  </td>
                  <td className="px-5 py-4 text-sm text-center whitespace-nowrap">
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 transition hover:text-error-500 dark:text-gray-500 dark:hover:text-error-500"
                      title="Remove product"
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.25 5.25C4.25 4.83579 4.58579 4.5 5 4.5H15C15.4142 4.5 15.75 4.83579 15.75 5.25C15.75 5.66421 15.4142 6 15 6H14.3639L13.7257 15.5724C13.6247 17.0877 12.3618 18.25 10.8427 18.25H9.15732C7.63821 18.25 6.3753 17.0877 6.27429 15.5724L5.63613 6H5C4.58579 6 4.25 5.66421 4.25 5.25ZM7.13289 6L7.76861 15.5358C7.81912 16.2934 8.45057 16.75 9.15732 16.75H10.8427C11.5494 16.75 12.1809 16.2934 12.2314 15.5358L12.8671 6H7.13289ZM8.25 2.75C7.83579 2.75 7.5 3.08579 7.5 3.5C7.5 3.91421 7.83579 4.25 8.25 4.25H11.75C12.1642 4.25 12.5 3.91421 12.5 3.5C12.5 3.08579 12.1642 2.75 11.75 2.75H8.25Z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={handleAddItem}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03]"
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 4.25C10.4142 4.25 10.75 4.58579 10.75 5V9.25H15C15.4142 9.25 15.75 9.58579 15.75 10C15.75 10.4142 15.4142 10.75 15 10.75H10.75V15C10.75 15.4142 10.4142 15.75 10 15.75C9.58579 15.75 9.25 15.4142 9.25 15V10.75H5C4.58579 10.75 4.25 10.4142 4.25 10C4.25 9.58579 4.58579 9.25 5 9.25H9.25V5C9.25 4.58579 9.58579 4.25 10 4.25Z"
            />
          </svg>
          Add Item
        </button>

        <div className="flex flex-col gap-2 text-right sm:min-w-[240px]">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Subtotal:</span>
            <span className="font-semibold text-gray-800 dark:text-white">
              ${subtotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-3 border-t border-gray-200 pt-6 dark:border-gray-800">
        <button
          type="button"
          className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03]"
        >
          Save as Draft
        </button>
        <button
          type="button"
          className="rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600 dark:bg-brand-500 dark:hover:bg-brand-600"
        >
          Send Invoice
        </button>
      </div>
    </div>
  );
};
