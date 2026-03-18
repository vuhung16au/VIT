"use client";

import { useState } from "react";

import { paperNotes } from "@/data/prototypeFeedback";

const screens = [
  { id: 1, title: "Screen 1", text: "Sketchy home screen with specialty choices and rough annotations." },
  { id: 2, title: "Screen 2", text: "Doctor list sketch with hand-drawn cards and manual highlight marks." },
  { id: 3, title: "Screen 3", text: "Confirmation sketch showing summary, notes, and reminder options." },
];

export function PaperPrototypeViewer() {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <div className="row g-4">
      <div className="col-lg-8">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="h4 fw-bold mb-0">Wizard of Oz paper simulator</h2>
              <span className="badge text-bg-warning">Human-mediated</span>
            </div>
            <div className="paper-canvas rounded-4 p-4">
              <div className="small text-muted mb-2">Click a region to swap sketches</div>
              <div className="row g-3">
                {screens.map((screen, index) => (
                  <div key={screen.id} className="col-md-4">
                    <button
                      type="button"
                      className={`w-100 text-start border rounded-4 p-3 bg-white ${activeScreen === index ? "border-dark" : ""}`}
                      onClick={() => setActiveScreen(index)}
                    >
                      <div className="paper-thumb rounded-3 mb-3" />
                      <div className="fw-semibold">{screen.title}</div>
                      <div className="small text-muted">{screen.text}</div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-4 border p-3 bg-light">
              <div className="small text-danger fw-semibold mb-1">Active screen details</div>
              <div>{screens[activeScreen]?.text}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body p-4">
            <h2 className="h5 fw-bold mb-3">Captured testing feedback</h2>
            <ul className="mb-0">
              {paperNotes.map((note) => (
                <li key={note} className="mb-2">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
