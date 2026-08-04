"use client";
import React, { useState } from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { IntegrationGrid } from "./IntegrationGrid";
import { IntegrationItem } from "./IntegrationCard";
import { AddIntegrationModal } from "./AddIntegrationModal";
import { IntegrationDetailsModal } from "./IntegrationDetailsModal";

const initialIntegrations: IntegrationItem[] = [
  {
    id: "1",
    name: "Mailchimp",
    description:
      "Connect Mailchimp to streamline your email marketing—automate campaigns.",
    connected: true,
    icon: (
      <svg className="w-7 h-7 text-amber-500 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V7h2v7z" />
      </svg>
    ),
  },
  {
    id: "2",
    name: "Google Meet",
    description:
      "Connect your Google Meet account for seamless video conferencing.",
    connected: false,
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 4.5L16.5 9L12 13.5V10.5H4.5V7.5H12V4.5Z" fill="#34A853" />
        <path d="M19.5 7.5L16.5 9.75V14.25L19.5 16.5V7.5Z" fill="#EA4335" />
        <path d="M4.5 13.5H12V16.5H4.5V13.5Z" fill="#4285F4" />
        <path d="M12 13.5L16.5 18L19.5 16.5L12 10.5V13.5Z" fill="#FBBC04" />
      </svg>
    ),
  },
  {
    id: "3",
    name: "Zoom",
    description:
      "Integrate Zoom to streamline your virtual meetings and team collaborations",
    connected: false,
    icon: (
      <svg className="w-7 h-7 text-blue-500 fill-current" viewBox="0 0 24 24">
        <path d="M4.5 5.5A2.5 2.5 0 002 8v8a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5V8a2.5 2.5 0 00-2.5-2.5h-10zm13 3.5l4.5-3v12l-4.5-3V9z" />
      </svg>
    ),
  },
  {
    id: "4",
    name: "Loom",
    description:
      "Integrate Loom to easily record, share, and manage video messages",
    connected: false,
    icon: (
      <svg className="w-7 h-7 text-purple-600 fill-current" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5l-5-3.5V7l5 3.5v6z" />
      </svg>
    ),
  },
  {
    id: "5",
    name: "Linear",
    description:
      "Integrate Linear to manage issues, track progress, and streamline your team's.",
    connected: false,
    icon: (
      <svg className="w-7 h-7 text-indigo-600 fill-current" viewBox="0 0 24 24">
        <path d="M3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0zm8.5-6a6 6 0 100 12 6 6 0 000-12z" />
      </svg>
    ),
  },
  {
    id: "6",
    name: "Gmail",
    description:
      "Integrate Gmail to send, receive, and manage emails directly from your workspace.",
    connected: false,
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    id: "7",
    name: "Trello",
    description: "Capture, organize, and tackle your to-dos from anywhere.",
    connected: false,
    icon: (
      <svg className="w-7 h-7 text-blue-600 fill-current" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H7V7h4v8zm6-4h-4V7h4v4z" />
      </svg>
    ),
  },
  {
    id: "8",
    name: "Notion",
    description: "Capture, organize, and tackle your to-dos from anywhere.",
    connected: false,
    icon: (
      <svg className="w-7 h-7 text-gray-900 dark:text-white fill-current" viewBox="0 0 24 24">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.334-.653c.234 0 .046-.233-.046-.28-.327-.233-.84-.56-1.542-.606L5.86 2.62c-.42-.047-.654.14-.56.514l.84 4.572v12.787c0 .653.373.98.98.933l12.455-.746c.7-.047.887-.467.887-1.027V6.589c0-.467-.187-.653-.607-.653l-1.401.093c-.14 0-.233.14-.233.28v11.248c0 .28-.14.467-.42.467l-7.794.42c-.28 0-.42-.14-.42-.42V4.208z" />
      </svg>
    ),
  },
  {
    id: "9",
    name: "Jira",
    description:
      "Track issues and manage projects with ease and full team visibility.",
    connected: false,
    icon: (
      <svg className="w-7 h-7 text-sky-600 fill-current" viewBox="0 0 24 24">
        <path d="M11.571 11.429L1.714 21.286A1.143 1.143 0 001.714 22.9L12.07 12.544l-0.499-1.115z" />
        <path d="M12.071 1.714L1.714 12.071a1.143 1.143 0 000 1.614l10.357-10.357L12.071 1.714z" />
        <path d="M22.286 1.714L11.929 12.071l0.499 1.115L22.786 2.83a1.143 1.143 0 00-0.5-1.116z" />
      </svg>
    ),
  },
];

export const IntegrationsLayout: React.FC = () => {
  const [integrations, setIntegrations] =
    useState<IntegrationItem[]>(initialIntegrations);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IntegrationItem | null>(null);

  const handleToggle = (id: string) => {
    setIntegrations((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, connected: !item.connected } : item
      )
    );
    if (selectedItem && selectedItem.id === id) {
      setSelectedItem((prev) =>
        prev ? { ...prev, connected: !prev.connected } : null
      );
    }
  };

  const handleAddIntegration = (name: string, description: string) => {
    const newIntegration: IntegrationItem = {
      id: Date.now().toString(),
      name,
      description,
      connected: true,
      icon: (
        <svg className="w-7 h-7 text-brand-500 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    };
    setIntegrations((prev) => [newIntegration, ...prev]);
  };

  return (
    <div>
      {/* Top Header with Breadcrumb and Button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <PageBreadcrumb pageTitle="Integrations" />
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-xs font-medium text-white hover:bg-brand-600 transition shadow-theme-xs self-end sm:self-auto"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 2.91667V11.0833M2.91667 7H11.0833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Add New Integration
        </button>
      </div>

      {/* Grid of Integration Cards */}
      <IntegrationGrid
        items={integrations}
        onToggle={handleToggle}
        onOpenDetails={(item) => setSelectedItem(item)}
      />

      {/* Modals */}
      <AddIntegrationModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddIntegration={handleAddIntegration}
      />

      <IntegrationDetailsModal
        isOpen={!!selectedItem}
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onToggle={handleToggle}
      />
    </div>
  );
};
