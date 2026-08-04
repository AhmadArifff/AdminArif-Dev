"use client";
import React, { useState } from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { ApiKeyHeaderCard } from "./ApiKeyHeaderCard";
import { ApiKeyTableCard, ApiKeyItem } from "./ApiKeyTableCard";
import { CreateApiKeyModal } from "./CreateApiKeyModal";
import { ApiKeyUsageCard } from "./ApiKeyUsageCard";

const initialApiKeys: ApiKeyItem[] = [
  {
    id: "1",
    name: "Primary Secret Key",
    value: "sec_live_**********8x92",
    status: "Active",
    created: "14 Jan, 2025",
    lastUsed: "Just now",
  },
  {
    id: "2",
    name: "Development Key",
    value: "dev_live_**********1182",
    status: "Active",
    created: "29 Dec, 2024",
    lastUsed: "Today, 12:40 AM",
  },
  {
    id: "3",
    name: "Legacy API Key",
    value: "leg_live_**********0932",
    status: "Active",
    created: "12 Mar, 2024",
    lastUsed: "Today, 11:45 PM",
  },
  {
    id: "4",
    name: "Staging Key",
    value: "stg_live_**********4490",
    status: "Revoked",
    created: "05 Jan, 2024",
    lastUsed: "15 Oct, 2024",
  },
];

export const ApiKeysLayout: React.FC = () => {
  const [apiKeys, setApiKeys] = useState<ApiKeyItem[]>(initialApiKeys);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredKeys = apiKeys.filter(
    (key) =>
      key.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      key.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateKey = (name: string) => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newKey: ApiKeyItem = {
      id: Date.now().toString(),
      name,
      value: `sec_live_**********${randomSuffix}`,
      status: "Active",
      created: "Just now",
      lastUsed: "Never",
    };
    setApiKeys((prev) => [newKey, ...prev]);
  };

  const handleRevokeKey = (id: string) => {
    setApiKeys((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Revoked" as const } : item
      )
    );
  };

  const handleDeleteKey = (id: string) => {
    setApiKeys((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="API Keys" />

      <div className="space-y-6">
        <ApiKeyHeaderCard
          onOpenModal={() => setIsModalOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <ApiKeyTableCard
          apiKeys={filteredKeys}
          onRevokeKey={handleRevokeKey}
          onDeleteKey={handleDeleteKey}
        />

        <ApiKeyUsageCard />
      </div>

      <CreateApiKeyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateKey={handleCreateKey}
      />
    </div>
  );
};
