"use client";

import { useEffect, useState } from "react";

import { BootstrapNav } from "@/components/BootstrapNav";
import {
  defaultInterviews,
  defaultSurveys,
  interviewStorageKey,
  surveyStorageKey,
  triangulatedInsights,
} from "@/data/feedbackData";

export default function InsightsPage() {
  const [surveyCount, setSurveyCount] = useState(defaultSurveys.length);
  const [interviewCount, setInterviewCount] = useState(defaultInterviews.length);

  useEffect(() => {
    const surveys = window.localStorage.getItem(surveyStorageKey);
    const interviews = window.localStorage.getItem(interviewStorageKey);
    if (surveys) setSurveyCount(JSON.parse(surveys).length);
    if (interviews) setInterviewCount(JSON.parse(interviews).length);
  }, []);

  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <BootstrapNav currentPath="/admin/insights" />
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase text-primary fw-semibold small mb-1">Triangulation</p>
              <h1 className="h2 fw-bold mb-4">Combined insights from multiple methods</h1>
              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <div className="border rounded-4 p-3 bg-light h-100">
                    <div className="text-muted small">Questionnaire responses</div>
                    <div className="display-6 fw-bold text-primary">{surveyCount}</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border rounded-4 p-3 bg-light h-100">
                    <div className="text-muted small">Interview signups</div>
                    <div className="display-6 fw-bold text-success">{interviewCount}</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border rounded-4 p-3 bg-light h-100">
                    <div className="text-muted small">Observation themes</div>
                    <div className="display-6 fw-bold text-warning">{triangulatedInsights.length}</div>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                {triangulatedInsights.map((insight) => (
                  <div key={insight.title} className="col-12">
                    <div className="border rounded-4 p-4">
                      <h2 className="h4 fw-bold mb-3">{insight.title}</h2>
                      <div className="row g-3">
                        <div className="col-md-4">
                          <div className="rounded-4 bg-light p-3 h-100">
                            <div className="fw-semibold text-primary mb-2">Questionnaire</div>
                            <div className="small text-muted">{insight.questionnaire}</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="rounded-4 bg-light p-3 h-100">
                            <div className="fw-semibold text-success mb-2">Interviews</div>
                            <div className="small text-muted">{insight.interviews}</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="rounded-4 bg-light p-3 h-100">
                            <div className="fw-semibold text-warning mb-2">Observation</div>
                            <div className="small text-muted">{insight.observation}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
