"use client";

import { useEffect, useMemo, useState } from "react";

import { defaultSurveys, surveyStorageKey } from "@/data/feedbackData";
import type { SurveyResponse } from "@/types/feedback";

function readSurveys() {
  if (typeof window === "undefined") return defaultSurveys;
  const raw = window.localStorage.getItem(surveyStorageKey);
  if (!raw) {
    window.localStorage.setItem(surveyStorageKey, JSON.stringify(defaultSurveys));
    return defaultSurveys;
  }

  try {
    return JSON.parse(raw) as SurveyResponse[];
  } catch {
    return defaultSurveys;
  }
}

export function FeedbackQuestionnaire() {
  const [submitted, setSubmitted] = useState(false);
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [form, setForm] = useState({
    satisfaction: "4",
    clarity: "4",
    trust: "4",
    bookingEase: "",
    comment: "",
  });

  useEffect(() => {
    setResponses(readSurveys());
  }, []);

  const averageSatisfaction = useMemo(() => {
    if (responses.length === 0) return "0.0";
    const total = responses.reduce((sum, item) => sum + item.satisfaction, 0);
    return (total / responses.length).toFixed(1);
  }, [responses]);

  const submitSurvey = () => {
    const nextEntry: SurveyResponse = {
      id: crypto.randomUUID(),
      satisfaction: Number(form.satisfaction) as SurveyResponse["satisfaction"],
      clarity: Number(form.clarity) as SurveyResponse["clarity"],
      trust: Number(form.trust) as SurveyResponse["trust"],
      bookingEase: form.bookingEase,
      comment: form.comment,
      createdAt: new Date().toISOString(),
    };

    const nextResponses = [nextEntry, ...responses];
    setResponses(nextResponses);
    window.localStorage.setItem(surveyStorageKey, JSON.stringify(nextResponses));
    setSubmitted(true);
  };

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div>
            <p className="text-uppercase text-primary fw-semibold small mb-1">Questionnaire</p>
            <h2 className="h3 fw-bold mb-0">Post-booking feedback survey</h2>
          </div>
          <div className="badge text-bg-primary fs-6 px-3 py-2">
            Avg satisfaction: {averageSatisfaction}/5
          </div>
        </div>

        {submitted ? (
          <div className="alert alert-success mb-0">
            Thank you. Your feedback has been saved and added to the Week 05 demo data set.
          </div>
        ) : (
          <>
            <p className="text-muted mb-4">
              {"// LEARNING NOTE: questionnaires work well after task completion because users can reflect with lower cognitive load."}
            </p>
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">How satisfied were you overall?</label>
                <select
                  className="form-select"
                  value={form.satisfaction}
                  onChange={(event) => setForm({ ...form, satisfaction: event.target.value })}
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">How clear was the booking flow?</label>
                <select
                  className="form-select"
                  value={form.clarity}
                  onChange={(event) => setForm({ ...form, clarity: event.target.value })}
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">How much did you trust the experience?</label>
                <select
                  className="form-select"
                  value={form.trust}
                  onChange={(event) => setForm({ ...form, trust: event.target.value })}
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12">
                <label className="form-label">What best describes the booking process?</label>
                <select
                  className="form-select"
                  value={form.bookingEase}
                  onChange={(event) => setForm({ ...form, bookingEase: event.target.value })}
                >
                  <option value="">Choose one</option>
                  <option value="Very easy to follow">Very easy to follow</option>
                  <option value="Mostly clear with one difficult step">Mostly clear with one difficult step</option>
                  <option value="Needed more guidance and examples">Needed more guidance and examples</option>
                </select>
              </div>
              <div className="col-12">
                <label className="form-label">What should we improve next?</label>
                <textarea
                  className="form-control"
                  rows={4}
                  value={form.comment}
                  onChange={(event) => setForm({ ...form, comment: event.target.value })}
                />
              </div>
            </div>
            <button type="button" className="btn btn-primary mt-4" onClick={submitSurvey}>
              Submit questionnaire
            </button>
          </>
        )}
      </div>
    </div>
  );
}
