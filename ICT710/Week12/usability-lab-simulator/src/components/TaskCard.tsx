"use client";

import { useState } from "react";

type TaskCardProps = {
  title: string;
  scenario: string;
};

export function TaskCard({ title, scenario }: TaskCardProps) {
  const [state, setState] = useState("Idle");

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="small text-danger fw-semibold mb-1">{title}</div>
        <h2 className="h5 fw-bold">Task scenario</h2>
        <p>{scenario}</p>
        <div className="d-flex flex-wrap gap-2">
          <button type="button" className="btn btn-outline-danger" onClick={() => setState("Timing")}>
            Start timer
          </button>
          <button type="button" className="btn btn-success" onClick={() => setState("Completed")}>
            Mark complete
          </button>
          <button type="button" className="btn btn-dark" onClick={() => setState("Failed")}>
            Mark failed
          </button>
        </div>
        <div className="small text-muted mt-3">Current state: {state}</div>
      </div>
    </div>
  );
}
