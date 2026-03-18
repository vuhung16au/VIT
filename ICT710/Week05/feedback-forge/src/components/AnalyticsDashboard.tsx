"use client";

import { observationMetrics, userJourney } from "@/data/analyticsData";

export function AnalyticsDashboard() {
  return (
    <div className="row g-4">
      <div className="col-lg-7">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body p-4">
            <p className="text-uppercase text-primary fw-semibold small mb-1">Observation dashboard</p>
            <h2 className="h3 fw-bold mb-4">Simulated heatmap and step timing</h2>
            <p className="text-muted">
              {"// LEARNING NOTE: observation reveals what users actually do, not just what they report."}
            </p>

            <div className="border rounded-4 p-4 bg-light-subtle mb-4">
              <div className="row g-3">
                {observationMetrics.map((metric) => (
                  <div key={metric.id} className="col-md-4">
                    <div className="bg-white rounded-4 p-3 h-100 border">
                      <div className="fw-semibold">{metric.title}</div>
                      <div className="display-6 fw-bold text-primary">{metric.clicks}</div>
                      <div className="small text-muted">Clicks</div>
                      <div className="mt-2 small">Avg time: {metric.avgSeconds}s</div>
                      <div className="small">Drop-off: {metric.dropOff}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="h5 fw-bold mb-3">User journey flow</h3>
            <div className="d-flex flex-column gap-3">
              {userJourney.map((step) => (
                <div key={step.step}>
                  <div className="d-flex justify-content-between small mb-1">
                    <span>{step.step}</span>
                    <span>{step.users} users</span>
                  </div>
                  <div className="progress" role="progressbar" aria-label={step.step}>
                    <div
                      className={`progress-bar ${step.color}`}
                      style={{ width: `${(step.users / userJourney[0].users) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-5">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body p-4">
            <h3 className="h5 fw-bold mb-3">Drop-off insights</h3>
            <div className="list-group">
              {observationMetrics.map((metric) => (
                <div key={metric.id} className="list-group-item">
                  <div className="fw-semibold">{metric.title}</div>
                  <div className="small text-muted mt-1">{metric.insight}</div>
                </div>
              ))}
            </div>

            <hr className="my-4" />

            <h3 className="h5 fw-bold mb-3">Three visualizations included</h3>
            <ul className="mb-0">
              <li>Heatmap-style click summary</li>
              <li>User journey flow bars</li>
              <li>Step timing and drop-off comparison</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
