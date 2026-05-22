import Link from "next/link";

import { LabNav } from "@/components/LabNav";
import { activeTests, workflowStages } from "@/data/testingData";

export default function HomePage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <LabNav currentPath="/" />
        </div>
        <div className="col-12">
          <div className="card lab-hero border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase fw-semibold small mb-2">Week 12 Demo Plan</p>
              <h1 className="display-6 fw-bold">Usability Lab Simulator</h1>
              <p className="col-lg-8 mb-0">
                Simulate the full usability testing workflow from test planning through final reporting.
              </p>
            </div>
          </div>
        </div>
        {[
          { title: "Tests completed", value: "12" },
          { title: "Participants recruited", value: "45" },
          { title: "Issues identified", value: "87" },
          { title: "Avg satisfaction", value: "3.8/5" },
        ].map((item) => (
          <div key={item.title} className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="small text-danger fw-semibold">{item.title}</div>
                <div className="display-6 fw-bold">{item.value}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 p-md-5">
              <h2 className="h3 fw-bold mb-4">Testing workflow</h2>
              <div className="row g-3">
                {workflowStages.map((stage, index) => (
                  <div key={stage.title} className="col-md-6">
                    <div className="border rounded-4 p-3 bg-light h-100">
                      <div className="small text-danger fw-semibold">Stage {index + 1}</div>
                      <div className="fw-bold">{stage.title}</div>
                      <div className="small text-muted">{stage.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 p-md-5">
              <h2 className="h4 fw-bold mb-3">Active tests</h2>
              <div className="d-grid gap-3">
                {activeTests.map((test) => (
                  <div key={test.name} className="border rounded-4 p-3 bg-light">
                    <div className="fw-semibold">{test.name}</div>
                    <div className="small text-muted">{test.status} • {test.sessions} sessions</div>
                    <div className="small mt-2">{test.objective}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">
                <div>
                  <h2 className="h4 fw-bold mb-1">Demo 2 extensions</h2>
                  <p className="text-muted mb-0">
                    Continue the week with remote moderated and unmoderated testing comparisons.
                  </p>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <Link href="/remote" className="btn btn-outline-danger">Open Remote Setup</Link>
                  <Link href="/unmoderated" className="btn btn-danger">Open Unmoderated Demo</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
