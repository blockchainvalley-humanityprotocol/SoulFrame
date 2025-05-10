import React from "react";

const statusMap = {
  active: { color: "bg-green-500", label: "Active", icon: "🟢" },
  idle: { color: "bg-yellow-400", label: "Idle", icon: "🟡" },
  dormant: { color: "bg-red-500", label: "Dormant", icon: "🔴" },
};

export default function StatusBadge({ status = "active" }) {
  const { color, label, icon } = statusMap[status] || statusMap.active;
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold text-white ${color}`}
      title={label}
    >
      <span className="mr-1 text-lg">{icon}</span>
      {label}
    </span>
  );
}
