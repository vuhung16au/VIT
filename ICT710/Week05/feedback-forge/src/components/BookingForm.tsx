"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function BookingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    doctor: "",
    slot: "",
  });

  const doctors = [
    "Dr. Sarah Smith - Cardiology",
    "Dr. Mike Jones - Pediatrics",
    "Dr. Lisa Chen - Dermatology",
  ];

  const slots = ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"];

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-4 p-md-5">
        <p className="text-uppercase text-primary fw-semibold small mb-2">Main booking interface</p>
        <h2 className="h3 fw-bold mb-4">Book a doctor consultation</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full name</label>
            <input
              type="text"
              className="form-control"
              value={formData.name}
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
            />
          </div>
          <div className="col-12">
            <label className="form-label">Doctor</label>
            <select
              className="form-select"
              value={formData.doctor}
              onChange={(event) => setFormData({ ...formData, doctor: event.target.value })}
            >
              <option value="">Choose a doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor} value={doctor}>
                  {doctor}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <label className="form-label">Time slot</label>
            <div className="d-flex flex-wrap gap-2">
              {slots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={`btn ${formData.slot === slot ? "btn-primary" : "btn-outline-secondary"}`}
                  onClick={() => setFormData({ ...formData, slot })}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 d-flex flex-wrap gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => router.push("/booking-complete")}
          >
            Complete booking and collect feedback
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => router.push("/admin/analytics")}
          >
            View observation dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
