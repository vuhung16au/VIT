"use client";

import { useEffect, useState } from "react";

import { defaultRecordings, recordingStorageKey } from "@/data/feedbackData";
import type { RecordingEntry } from "@/types/feedback";

function readEntries() {
  if (typeof window === "undefined") return defaultRecordings;
  const raw = window.localStorage.getItem(recordingStorageKey);
  if (!raw) {
    window.localStorage.setItem(recordingStorageKey, JSON.stringify(defaultRecordings));
    return defaultRecordings;
  }

  try {
    return JSON.parse(raw) as RecordingEntry[];
  } catch {
    return defaultRecordings;
  }
}

const methodCards = [
  {
    title: "Notes + Photos",
    strengths: "Low-tech, easy to deploy, quick to review.",
    tradeoff: "Misses tone and real-time nuance.",
    variant: "text-primary",
  },
  {
    title: "Audio + Photos",
    strengths: "Captures exact wording and emotion.",
    tradeoff: "Harder to skim and still raises privacy questions.",
    variant: "text-success",
  },
  {
    title: "Video Recording",
    strengths: "Richest context for behavior and expression.",
    tradeoff: "Highest privacy concern and biggest storage burden.",
    variant: "text-danger",
  },
];

export function RecordingMethodsDemo() {
  const [entries, setEntries] = useState<RecordingEntry[]>([]);
  const [consentGiven, setConsentGiven] = useState(false);
  const [form, setForm] = useState({
    method: "Notes + Photos" as RecordingEntry["method"],
    category: "Confusion" as RecordingEntry["category"],
    note: "",
  });

  useEffect(() => {
    setEntries(readEntries());
  }, []);

  const addEntry = () => {
    if (!consentGiven || !form.note.trim()) return;

    const nextEntry: RecordingEntry = {
      id: crypto.randomUUID(),
      ...form,
      createdAt: new Date().toISOString(),
    };
    const nextEntries = [nextEntry, ...entries];
    setEntries(nextEntries);
    window.localStorage.setItem(recordingStorageKey, JSON.stringify(nextEntries));
    setForm({ ...form, note: "" });
  };

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <p className="text-uppercase text-primary fw-semibold small mb-1">Recording methods</p>
        <h2 className="h3 fw-bold mb-4">Compare ways to capture data</h2>

        <div className="row g-3 mb-4">
          {methodCards.map((card) => (
            <div key={card.title} className="col-md-4">
              <div className="border rounded-4 p-3 h-100 bg-light">
                <div className={`fw-bold ${card.variant}`}>{card.title}</div>
                <p className="small mt-2 mb-2">{card.strengths}</p>
                <p className="small text-muted mb-0">{card.tradeoff}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-warning">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="consentCheck"
              checked={consentGiven}
              onChange={(event) => setConsentGiven(event.target.checked)}
            />
            <label className="form-check-label" htmlFor="consentCheck">
              I confirm the participant understands what is being recorded and has given informed
              consent.
            </label>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Method</label>
            <select
              className="form-select"
              value={form.method}
              onChange={(event) =>
                setForm({ ...form, method: event.target.value as RecordingEntry["method"] })
              }
            >
              {methodCards.map((card) => (
                <option key={card.title} value={card.title}>
                  {card.title}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              value={form.category}
              onChange={(event) =>
                setForm({ ...form, category: event.target.value as RecordingEntry["category"] })
              }
            >
              {["Confusion", "Success", "Error"].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <label className="form-label">Observation note</label>
            <textarea
              className="form-control"
              rows={3}
              value={form.note}
              onChange={(event) => setForm({ ...form, note: event.target.value })}
            />
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary mt-4"
          disabled={!consentGiven}
          onClick={addEntry}
        >
          Save observation entry
        </button>

        <div className="table-responsive mt-4">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Method</th>
                <th>Category</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.method}</td>
                  <td>{entry.category}</td>
                  <td>{entry.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
