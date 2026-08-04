"use client";
import React from "react";
import { IntegrationCard, IntegrationItem } from "./IntegrationCard";

interface IntegrationGridProps {
  items: IntegrationItem[];
  onToggle: (id: string) => void;
  onOpenDetails: (item: IntegrationItem) => void;
}

export const IntegrationGrid: React.FC<IntegrationGridProps> = ({
  items,
  onToggle,
  onOpenDetails,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <IntegrationCard
          key={item.id}
          item={item}
          onToggle={onToggle}
          onOpenDetails={onOpenDetails}
        />
      ))}
    </div>
  );
};
