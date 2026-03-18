"use client";

import { useState } from "react";

type ChecklistItemProps = {
  label: string;
};

export function ChecklistItem({ label }: ChecklistItemProps) {
  const [status, setStatus] = useState("Pass");

  return (
    <div className="border rounded-4 p-3 bg-light">
      <div className="d-flex justify-content-between align-items-start gap-3">
        <div className="fw-semibold">{label}</div>
        <select className="form-select form-select-sm" style={{ maxWidth: "120px" }} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Pass</option>
          <option>Fail</option>
          <option>N/A</option>
        </select>
      </div>
      <textarea className="form-control mt-3" rows={2} placeholder="Add notes or evidence." />
    </div>
  );
}
