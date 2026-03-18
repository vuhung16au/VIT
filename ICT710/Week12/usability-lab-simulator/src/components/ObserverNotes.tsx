"use client";

import { useState } from "react";

export function ObserverNotes() {
  const [noteType, setNoteType] = useState("Negative");

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <h2 className="h5 fw-bold mb-3">Observer notes</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Observation type</label>
            <select className="form-select" value={noteType} onChange={(e) => setNoteType(e.target.value)}>
              <option>Positive</option>
              <option>Negative</option>
              <option>Neutral</option>
              <option>Question</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Related heuristic</label>
            <select className="form-select">
              <option>Visibility of system status</option>
              <option>Consistency and standards</option>
              <option>Recognition rather than recall</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Severity</label>
            <select className="form-select">
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div className="col-12">
            <textarea className="form-control" rows={3} placeholder="Record the observation, quote, confusion, or success moment." />
          </div>
        </div>
      </div>
    </div>
  );
}
