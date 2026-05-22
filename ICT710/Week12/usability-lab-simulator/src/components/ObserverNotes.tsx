"use client";

import { useState } from "react";

type ObserverNotesProps = {
  heuristics: string[];
  initialNotes: string[];
};

export function ObserverNotes({ heuristics, initialNotes }: ObserverNotesProps) {
  const [noteType, setNoteType] = useState("Negative");
  const [heuristic, setHeuristic] = useState(heuristics[0] ?? "");
  const [severity, setSeverity] = useState("Medium");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(initialNotes);

  const handleAdd = () => {
    if (!note.trim()) {
      return;
    }

    const timestamp = new Date().toLocaleTimeString([], { minute: "2-digit", second: "2-digit" });
    setNotes((current) => [
      `${timestamp} - ${noteType} - ${note.trim()} (${heuristic}, ${severity})`,
      ...current,
    ]);
    setNote("");
  };

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
            <select className="form-select" value={heuristic} onChange={(e) => setHeuristic(e.target.value)}>
              {heuristics.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Severity</label>
            <select className="form-select" value={severity} onChange={(e) => setSeverity(e.target.value)}>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div className="col-12">
            <label className="form-label">Observation note</label>
            <textarea
              className="form-control"
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Record the observation, quote, confusion, or success moment."
            />
          </div>
          <div className="col-12">
            <button type="button" className="btn btn-danger" onClick={handleAdd}>
              Add timestamped note
            </button>
          </div>
          <div className="col-12">
            <div className="border rounded-4 p-3 bg-light">
              <div className="small text-danger fw-semibold mb-2">Captured observations</div>
              <ul className="mb-0 ps-3">
                {notes.map((entry) => (
                  <li key={entry} className="mb-2">
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
