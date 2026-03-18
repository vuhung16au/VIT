"use client";

import { useState } from "react";

export function QuickBooking() {
  const [doctor, setDoctor] = useState("Dr. Sarah Smith");
  const [slot, setSlot] = useState("Next available");
  const [darkMode, setDarkMode] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsSubmitting(true);
    setConfirmed(false);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setConfirmed(true);
    }, 900);
  };

  return (
    <div className={`card border-0 shadow-sm ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`}>
      <div className="card-body p-4 p-md-5">
        <p className="text-uppercase fw-semibold small mb-1 text-info">
          {/* PERSONA: Sarah values speed, shortcuts, and compact decision-making. */}
          Sarah flow
        </p>
        <div className="d-flex justify-content-between align-items-center gap-3 mb-4">
          <h2 className="h3 fw-bold mb-0">Quick booking mode</h2>
          <button type="button" className="btn btn-outline-info btn-sm" onClick={() => setDarkMode((v) => !v)}>
            Toggle dark mode
          </button>
        </div>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Doctor</label>
            <select className="form-select" value={doctor} onChange={(event) => setDoctor(event.target.value)}>
              <option>Dr. Sarah Smith</option>
              <option>Dr. Mike Jones</option>
              <option>Dr. Lisa Chen</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Time shortcut</label>
            <select className="form-select" value={slot} onChange={(event) => setSlot(event.target.value)}>
              <option>Next available</option>
              <option>Tomorrow morning</option>
              <option>This afternoon</option>
            </select>
          </div>
        </div>
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <div className={`rounded-4 p-3 h-100 ${darkMode ? "bg-secondary text-white" : "bg-light text-dark"}`}>
              <div className="small text-uppercase fw-semibold">Saved details</div>
              <div className="mt-2 small">Autofill insurance and contact details from Sarah&apos;s last visit.</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`rounded-4 p-3 h-100 ${darkMode ? "bg-secondary text-white" : "bg-light text-dark"}`}>
              <div className="small text-uppercase fw-semibold">Calendar integration</div>
              <div className="mt-2 small">Push the confirmed slot directly into Sarah&apos;s work calendar.</div>
            </div>
          </div>
        </div>
        <div className="mt-4 d-flex flex-wrap gap-2">
          <button
            type="button"
            className="btn btn-info text-dark fw-semibold"
            onClick={handleConfirm}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Confirming..." : "Confirm in 1 tap"}
          </button>
          <button className="btn btn-outline-light">Add to calendar</button>
        </div>
        {confirmed && (
          <div className={`alert mt-4 mb-0 ${darkMode ? "alert-info" : "alert-success"}`}>
            Appointment confirmed with {doctor} for {slot.toLowerCase()}.
          </div>
        )}
        <p className="small mt-4 mb-0 text-secondary">
          Sarah can finish this flow in three clicks: choose doctor, choose shortcut, confirm.
        </p>
      </div>
    </div>
  );
}
