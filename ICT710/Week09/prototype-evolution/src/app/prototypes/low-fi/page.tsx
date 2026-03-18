"use client";

import { useState } from "react";

import { PrototypeNav } from "@/components/PrototypeNav";

const doctors = ["Dr. Tina Hall", "Dr. Omar Khan", "Dr. Emily Tran"];

export default function LowFiPage() {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <PrototypeNav currentPath="/prototypes/low-fi" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase text-danger fw-semibold small mb-1">Stage 3</p>
              <h1 className="display-6 fw-bold">Low-fi interactive prototype</h1>
              <p className="text-muted mb-0">
                This version focuses on working task flow with minimal styling and only the state
                needed to test interaction.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h2 className="h4 fw-bold mb-4">Choose a doctor</h2>
              <div className="d-grid gap-3">
                {doctors.map((doctor) => (
                  <button
                    key={doctor}
                    type="button"
                    className={`btn text-start rounded-4 p-3 ${
                      selectedDoctor === doctor ? "btn-danger" : "btn-outline-secondary"
                    }`}
                    onClick={() => setSelectedDoctor(doctor)}
                  >
                    {doctor}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <label className="form-label">Choose a date</label>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-danger mt-4"
                disabled={!selectedDoctor || !date}
                onClick={() => setSubmitted(true)}
              >
                Submit prototype booking
              </button>
              {submitted && (
                <div className="alert alert-success mt-4 mb-0">
                  Prototype booking confirmed for {selectedDoctor} on {date}.
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold">Why this fidelity level?</h2>
              <ul className="mb-0">
                <li>Enough realism to test task completion.</li>
                <li>Still fast to change after user feedback.</li>
                <li>No animations or visual polish to distract discussion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
