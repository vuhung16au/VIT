"use client";

import { useState } from "react";

import { PrototypeNav } from "@/components/PrototypeNav";

const responses: Record<string, string> = {
  headache: "A general practitioner with same-day availability is recommended.",
  rash: "A skin specialist with photo-friendly follow-up would be a good match.",
  child: "A pediatric doctor with family scheduling is recommended.",
};

export default function WizardOzPage() {
  const [query, setQuery] = useState("headache");
  const [response, setResponse] = useState("");

  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <PrototypeNav currentPath="/wizard-oz" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Wizard of Oz demonstration</h1>
              <p className="text-muted mb-0">
                Simulate smart recommendations before building the real AI system.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <label className="form-label fw-semibold">Describe the booking need</label>
              <select className="form-select" value={query} onChange={(event) => setQuery(event.target.value)}>
                <option value="headache">Urgent headache</option>
                <option value="rash">Skin rash</option>
                <option value="child">Booking for child</option>
              </select>
              <button type="button" className="btn btn-danger mt-3" onClick={() => setResponse(responses[query])}>
                Simulate AI recommendation
              </button>
              {response && (
                <div className="alert alert-info mt-4 mb-0">
                  <div className="fw-semibold">Behind the scenes</div>
                  <div>{response}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold">Teaching point</h2>
              <p className="mb-0">
                Wizard of Oz prototyping lets teams test whether users want a feature before
                committing to expensive engineering work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
