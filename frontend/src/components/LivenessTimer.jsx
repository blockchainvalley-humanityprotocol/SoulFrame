import React, { useEffect, useState } from "react";
import StatusBadge from "./StatusBadge";

const STAGES = [
  { status: "active", label: "🟢 인증 유효 (3분 남음)", duration: 5 },
  { status: "idle", label: "🟡 곧 만료 (2분 남음)", duration: 5 },
  { status: "dormant", label: "🔴 만료됨", duration: 9999 },
];

export default function LivenessTimer() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage < STAGES.length - 1) {
      const timer = setTimeout(
        () => setStage(stage + 1),
        STAGES[stage].duration * 1000
      );
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const { status, label } = STAGES[stage];
  return (
    <div className="flex items-center gap-2 mt-2">
      <StatusBadge status={status} />
      <span className="text-gray-300 text-sm">{label}</span>
    </div>
  );
}
