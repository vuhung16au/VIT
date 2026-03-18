"use client";

import { useEffect, useMemo, useState } from "react";

import { defaultInterviews, interviewStorageKey } from "@/data/feedbackData";
import type { InterviewSchedule } from "@/types/feedback";

function readInterviews() {
  if (typeof window === "undefined") return defaultInterviews;
  const raw = window.localStorage.getItem(interviewStorageKey);
  if (!raw) {
    window.localStorage.setItem(interviewStorageKey, JSON.stringify(defaultInterviews));
    return defaultInterviews;
  }

  try {
    return JSON.parse(raw) as InterviewSchedule[];
  } catch {
    return defaultInterviews;
  }
}

export function InterviewScheduler() {
  const [interviews, setInterviews] = useState<InterviewSchedule[]>([]);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredSlot: "Thursday 11:00 AM",
    interviewType: "Video" as InterviewSchedule["interviewType"],
  });

  useEffect(() => {
    setInterviews(readInterviews());
  }, []);

  const slots = useMemo(
    () => ["Wednesday 2:00 PM", "Thursday 11:00 AM", "Friday 3:30 PM"],
    [],
  );

  const submitInterview = () => {
    const emailValid = /\S+@\S+\.\S+/.test(form.email);
    const phoneValid = /^[0-9+()\-\s]{8,}$/.test(form.phone);

    if (!emailValid) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!phoneValid) {
      setError("Please enter a valid phone number.");
      return;
    }

    const nextEntry: InterviewSchedule = {
      id: crypto.randomUUID(),
      ...form,
      createdAt: new Date().toISOString(),
    };

    const nextInterviews = [nextEntry, ...interviews];
    setInterviews(nextInterviews);
    window.localStorage.setItem(interviewStorageKey, JSON.stringify(nextInterviews));
    setError("");
    setForm({
      name: "",
      email: "",
      phone: "",
      preferredSlot: "Thursday 11:00 AM",
      interviewType: "Video",
    });
  };

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4 p-md-5">
        <p className="text-uppercase text-primary fw-semibold small mb-1">Interviews</p>
        <h2 className="h3 fw-bold mb-4">Schedule a user interview</h2>
        <p className="text-muted">
          {"// LEARNING NOTE: interviews add depth and context that surveys often miss."}
        </p>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input
              className="form-control"
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Preferred time slot</label>
            <select
              className="form-select"
              value={form.preferredSlot}
              onChange={(event) => setForm({ ...form, preferredSlot: event.target.value })}
            >
              {slots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <label className="form-label">Interview type</label>
            <div className="d-flex flex-wrap gap-2">
              {(["Phone", "Video", "In-person"] as InterviewSchedule["interviewType"][]).map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`btn ${form.interviewType === type ? "btn-primary" : "btn-outline-secondary"}`}
                  onClick={() => setForm({ ...form, interviewType: type })}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {error && <div className="alert alert-danger mt-3 mb-0">{error}</div>}

        <button type="button" className="btn btn-primary mt-4" onClick={submitInterview}>
          Schedule interview
        </button>

        <hr className="my-4" />

        <h3 className="h5 fw-bold mb-3">Scheduled interviews</h3>
        <div className="list-group">
          {interviews.map((item) => (
            <div key={item.id} className="list-group-item">
              <div className="d-flex justify-content-between gap-3 flex-wrap">
                <div>
                  <div className="fw-semibold">{item.name}</div>
                  <div className="text-muted small">{item.email} • {item.phone}</div>
                </div>
                <div className="text-end small">
                  <div>{item.preferredSlot}</div>
                  <div className="text-muted">{item.interviewType}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
