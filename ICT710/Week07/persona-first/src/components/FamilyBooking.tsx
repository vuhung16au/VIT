"use client";

import { useState } from "react";

export function FamilyBooking() {
  const [member, setMember] = useState("Maya");
  const [saved, setSaved] = useState(false);
  const [favorites, setFavorites] = useState(false);
  const [rebooked, setRebooked] = useState(false);

  return (
    <div className="card border-0 shadow-sm bg-primary-subtle">
      <div className="card-body p-4 p-md-5">
        <p className="text-uppercase text-primary fw-semibold small mb-1">
          {/* PERSONA: Maya values flexibility, reminders, and family management. */}
          Maya flow
        </p>
        <h2 className="h3 fw-bold mb-4">Family-friendly booking</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Who is this booking for?</label>
            <select className="form-select" value={member} onChange={(event) => setMember(event.target.value)}>
              <option>Maya</option>
              <option>Noah (Son)</option>
              <option>Emma (Daughter)</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Reminder setup</label>
            <select className="form-select">
              <option>SMS + Email reminders</option>
              <option>Email only</option>
              <option>SMS only</option>
            </select>
          </div>
        </div>
        <div className="mt-4 d-flex flex-wrap gap-2">
          <button className="btn btn-primary">Book for family member</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => setFavorites(true)}>
            Save favorite doctor
          </button>
          <button type="button" className="btn btn-outline-dark" onClick={() => setRebooked(true)}>
            Quick rebook last appointment
          </button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => setSaved(true)}>
            Save progress
          </button>
        </div>
        {favorites && (
          <div className="alert alert-primary mt-4 mb-0">
            Favorite doctor saved for faster repeat bookings.
          </div>
        )}
        {rebooked && (
          <div className="alert alert-info mt-4 mb-0">
            Last appointment details restored for {member}. Maya can adjust only what changed.
          </div>
        )}
        {saved && <div className="alert alert-success mt-4 mb-0">Progress saved. Maya can come back later.</div>}
      </div>
    </div>
  );
}
