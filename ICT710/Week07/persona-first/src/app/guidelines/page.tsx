"use client";

import { useState } from "react";

import { PersonaNav } from "@/components/PersonaNav";

const checklist = [
  "Visibility of system status",
  "Match between system and real world",
  "User control and freedom",
  "Consistency and standards",
  "Error prevention",
  "Recognition rather than recall",
  "Flexibility and efficiency",
  "Aesthetic and minimalist design",
  "Help users recognize errors",
  "Help and documentation",
];

const walkthroughSteps = [
  "Start booking",
  "Choose a doctor",
  "Select date and time",
  "Confirm booking",
];

export default function GuidelinesPage() {
  const [checked, setChecked] = useState<string[]>([]);

  const toggle = (item: string) => {
    setChecked((current) =>
      current.includes(item) ? current.filter((value) => value !== item) : [...current, item],
    );
  };

  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <PersonaNav currentPath="/guidelines" />
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase text-primary fw-semibold small mb-1">Demo 2</p>
              <h1 className="display-6 fw-bold">Usability Guidelines in Action</h1>
              <p className="text-muted mb-0">
                Compare weaker patterns with stronger ones and check off guidelines as they are
                demonstrated.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-danger border-2 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold text-danger">Before: Weak usability</h2>
              <ul className="mt-3 mb-0">
                <li>Submit button hidden below the fold</li>
                <li>User must remember date format manually</li>
                <li>No feedback during submission</li>
                <li>Different button styles on every step</li>
                <li>Error messages appear only after full submit</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-success border-2 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold text-success">After: Strong usability</h2>
              <ul className="mt-3 mb-0">
                <li>Primary CTA stays visible and clear</li>
                <li>Date picker reduces memory load</li>
                <li>Loading and confirmation states guide the user</li>
                <li>Consistent controls build confidence</li>
                <li>Validation helps early and specifically</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold mb-3">Interactive checklist</h2>
              <div className="list-group">
                {checklist.map((item) => (
                  <label key={item} className="list-group-item d-flex gap-3">
                    <input
                      type="checkbox"
                      checked={checked.includes(item)}
                      onChange={() => toggle(item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold mb-3">Cognitive walkthrough</h2>
              <div className="d-grid gap-3">
                {walkthroughSteps.map((step) => (
                  <div key={step} className="border rounded-4 p-3 bg-light">
                    <div className="fw-semibold">{step}</div>
                    <ul className="small mt-2 mb-0">
                      <li>Will the user know what to do?</li>
                      <li>Will the user see how to do it?</li>
                      <li>Will the feedback make sense?</li>
                      <li>Will the user know to proceed?</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
