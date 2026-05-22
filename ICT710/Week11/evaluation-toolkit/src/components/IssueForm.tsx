"use client";

import { useState } from "react";

import { heuristics } from "@/data/heuristics";

const initialForm = {
  project: "Doctor Booking App",
  screen: "Appointment booking form",
  heuristicId: "1",
  rating: "2",
  severity: "High",
  foundBy: "Expert evaluator",
  description: "",
  recommendation: "",
};

export function IssueForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function updateField(name: string, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-4">
          <div>
            <div className="text-uppercase small fw-semibold text-success mb-2">Evaluation form</div>
            <h2 className="h3 fw-bold mb-2">Log a heuristic finding</h2>
            <p className="text-muted mb-0">
              Capture the screen, violated heuristic, compliance rating, severity, and recommended fix in one place.
            </p>
          </div>
          <div className="screenshot-dropzone">
            <div className="fw-semibold">Screenshot evidence</div>
            <div className="small text-muted">Upload area placeholder for live demos or screen captures.</div>
          </div>
        </div>

        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="project" className="form-label">
              Project under review
            </label>
            <select
              id="project"
              className="form-select"
              value={form.project}
              onChange={(event) => updateField("project", event.target.value)}
            >
              <option>Doctor Booking App</option>
              <option>Design System Studio</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="screen" className="form-label">
              Screen or component being evaluated
            </label>
            <input
              id="screen"
              className="form-control"
              value={form.screen}
              onChange={(event) => updateField("screen", event.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="heuristic" className="form-label">
              Related heuristic
            </label>
            <select
              id="heuristic"
              className="form-select"
              value={form.heuristicId}
              onChange={(event) => updateField("heuristicId", event.target.value)}
            >
              {heuristics.map((heuristic) => (
                <option key={heuristic.id} value={heuristic.id}>
                  {heuristic.id}. {heuristic.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="rating" className="form-label">
              Compliance rating
            </label>
            <select
              id="rating"
              className="form-select"
              value={form.rating}
              onChange={(event) => updateField("rating", event.target.value)}
            >
              <option value="1">1 - Very poor</option>
              <option value="2">2 - Weak</option>
              <option value="3">3 - Mixed</option>
              <option value="4">4 - Strong</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="severity" className="form-label">
              Severity
            </label>
            <select
              id="severity"
              className="form-select"
              value={form.severity}
              onChange={(event) => updateField("severity", event.target.value)}
            >
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="foundBy" className="form-label">
              Found by
            </label>
            <input
              id="foundBy"
              className="form-control"
              value={form.foundBy}
              onChange={(event) => updateField("foundBy", event.target.value)}
            />
          </div>

          <div className="col-12">
            <label htmlFor="description" className="form-label">
              Issues found
            </label>
            <textarea
              id="description"
              className="form-control"
              rows={3}
              placeholder="Describe the usability problem clearly and specifically."
              value={form.description}
              onChange={(event) => updateField("description", event.target.value)}
            />
          </div>

          <div className="col-12">
            <label htmlFor="recommendation" className="form-label">
              Recommendation
            </label>
            <textarea
              id="recommendation"
              className="form-control"
              rows={2}
              placeholder="Capture the fix or design change that should happen next."
              value={form.recommendation}
              onChange={(event) => updateField("recommendation", event.target.value)}
            />
          </div>

          <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 pt-2">
            <div className="small text-muted">
              Tip: in a live class demo, fill this form while discussing one screen so students see how inspection notes become evidence.
            </div>
            <button type="submit" className="btn btn-success">
              Save demo finding
            </button>
          </div>
        </form>

        {submitted ? (
          <div className="alert alert-success mt-4 mb-0">
            Demo entry captured for <strong>{form.project}</strong> on <strong>{form.screen}</strong>. In a real project this would be stored or exported into the evaluation report.
          </div>
        ) : null}
      </div>
    </div>
  );
}
