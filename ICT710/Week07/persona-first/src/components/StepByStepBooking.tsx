"use client";

import { useState } from "react";

export function StepByStepBooking() {
  const [step, setStep] = useState(1);
  const [choice, setChoice] = useState("");
  const [doctor, setDoctor] = useState("");

  const canContinue = step !== 1 || choice !== "";

  return (
    <div className="card border-0 shadow-sm bg-white text-dark">
      <div className="card-body p-4 p-md-5" style={{ fontSize: "18px" }}>
        <p className="text-uppercase text-primary fw-semibold small mb-1">
          {/* PERSONA: Robert needs high contrast, large text, and one decision at a time. */}
          Robert flow
        </p>
        <h2 className="fw-bold mb-4">Step-by-step booking</h2>
        <div className="mb-4">
          <div className="progress" role="progressbar" aria-label="Booking progress">
            <div className="progress-bar" style={{ width: `${(step / 3) * 100}%` }} />
          </div>
          <p className="mt-2 mb-0">Step {step} of 3</p>
        </div>

        {step === 1 && (
          <div>
            <label className="form-label fw-semibold">Which kind of doctor do you need?</label>
            <select className="form-select form-select-lg" value={choice} onChange={(event) => setChoice(event.target.value)}>
              <option value="">Choose one</option>
              <option>Heart specialist</option>
              <option>Skin specialist</option>
              <option>Children&apos;s doctor</option>
            </select>
          </div>
        )}
        {step === 2 && (
          <div>
            <p className="fw-semibold">Which option would you like?</p>
            <div className="d-grid gap-2">
              {["Dr. Sarah Smith", "Dr. Lisa Chen"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`btn btn-lg text-start ${doctor === item ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setDoctor(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            {doctor && <p className="mt-3 mb-0 text-success">Selected doctor: {doctor}</p>}
          </div>
        )}
        {step === 3 && (
          <div>
            <p className="fw-semibold">How would you like to continue?</p>
            <div className="alert alert-primary" role="status">
              You are booking a {choice.toLowerCase()} appointment{doctor ? ` with ${doctor}` : ""}.
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary btn-lg">Confirm online booking</button>
              <button className="btn btn-outline-dark btn-lg">Call the clinic instead</button>
            </div>
          </div>
        )}

        <div className="mt-4 d-flex gap-2">
          {step > 1 && (
            <button type="button" className="btn btn-outline-secondary" onClick={() => setStep((s) => s - 1)}>
              Back
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canContinue}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
