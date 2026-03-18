"use client";

import { useState } from "react";

export function IssueForm() {
  const [screen, setScreen] = useState("Booking form");
  const [severity, setSeverity] = useState("Medium");

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <h2 className="h5 fw-bold mb-3">Issue logging form</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Screen or component</label>
            <input className="form-control" value={screen} onChange={(e) => setScreen(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Severity</label>
            <select className="form-select" value={severity} onChange={(e) => setSeverity(e.target.value)}>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div className="col-12">
            <label className="form-label">Issue description</label>
            <textarea className="form-control" rows={3} placeholder="Describe the usability issue found during inspection." />
          </div>
          <div className="col-12">
            <label className="form-label">Recommendation</label>
            <textarea className="form-control" rows={2} placeholder="Add an actionable recommendation." />
          </div>
        </div>
      </div>
    </div>
  );
}
