"use client";

import { useState } from "react";

import { PrototypeNav } from "@/components/PrototypeNav";

const doctors = [
  { name: "Dr. Maya Patel", specialty: "General Practice", rating: "4.9", slot: "Today, 4:15 PM" },
  { name: "Dr. Lucas Reed", specialty: "Skin Specialist", rating: "4.8", slot: "Tomorrow, 9:00 AM" },
  { name: "Dr. Nina Chen", specialty: "Children's Health", rating: "4.9", slot: "Tomorrow, 1:30 PM" },
];

export default function HighFiPage() {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0].name);
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleBook = () => {
    setLoading(true);
    setConfirmed(false);
    window.setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
    }, 800);
  };

  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <PrototypeNav currentPath="/prototypes/high-fi" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase text-danger fw-semibold small mb-1">Stage 4</p>
              <h1 className="display-6 fw-bold">High-fi interactive prototype</h1>
              <p className="text-muted mb-0">
                This version adds trust cues, richer content, micro-feedback, and a more polished
                presentation of the same booking flow.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="card high-fi-panel border-0">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h2 className="h3 fw-bold mb-1">Choose a doctor</h2>
                  <div className="text-muted">Polished cards, trust indicators, and highlighted availability.</div>
                </div>
                <span className="badge text-bg-danger">Interactive</span>
              </div>
              <div className="d-grid gap-3">
                {doctors.map((doctor) => (
                  <button
                    key={doctor.name}
                    type="button"
                    className={`btn text-start rounded-4 p-3 transition ${
                      selectedDoctor === doctor.name ? "btn-danger" : "btn-light border"
                    }`}
                    onClick={() => setSelectedDoctor(doctor.name)}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="doctor-photo" />
                      <div>
                        <div className="fw-bold">{doctor.name}</div>
                        <div className={selectedDoctor === doctor.name ? "text-white-50" : "text-muted"}>
                          {doctor.specialty} • {doctor.rating} stars
                        </div>
                        <div className={selectedDoctor === doctor.name ? "small text-white" : "small text-danger"}>
                          Next slot: {doctor.slot}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="rounded-4 bg-light p-4 mt-4">
                <div className="small text-danger fw-semibold mb-2">Booking summary</div>
                <div className="fw-semibold">{selectedDoctor}</div>
                <div className="text-muted">Fastest available slot selected automatically.</div>
              </div>
              <button type="button" className="btn btn-danger mt-4 px-4" onClick={handleBook} disabled={loading}>
                {loading ? "Confirming..." : "Confirm polished prototype"}
              </button>
              {confirmed && (
                <div className="alert alert-success mt-4 mb-0">
                  Booking confirmed. Summary, reminder setup, and next-step guidance are now visible.
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold">What high-fi adds</h2>
              <ul className="mb-0">
                <li>Visual trust cues like ratings and summaries.</li>
                <li>Responsive-ready layout and cleaner spacing.</li>
                <li>Loading states and polished confirmation feedback.</li>
                <li>Closer approximation of the final product experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
