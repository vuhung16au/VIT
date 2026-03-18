import Link from "next/link";

import { RequirementsNav } from "@/components/RequirementsNav";
import { functionalRequirements } from "@/data/functionalRequirements";
import { nonFunctionalRequirements } from "@/data/nonFunctionalRequirements";
import { userStories } from "@/data/userStories";

export default function HomePage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <RequirementsNav currentPath="/" />
        </div>
        <div className="col-12">
          <div className="card dashboard-hero border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase fw-semibold small mb-2">Week 08 Demo Plan</p>
              <h1 className="display-6 fw-bold">Requirements Hub</h1>
              <p className="col-lg-8 mb-4">
                Turn persona insights into structured requirements, user stories, use cases, and
                prioritization decisions for the doctor booking app.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Link href="/requirements" className="btn btn-light fw-semibold">
                  Open requirements dashboard
                </Link>
                <Link href="/prioritization" className="btn btn-outline-light">
                  View MoSCoW board
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card section-card h-100">
                <div className="card-body p-4">
                  <div className="small text-success fw-semibold">Functional requirements</div>
                  <div className="display-6 fw-bold">{functionalRequirements.length}</div>
                  <p className="text-muted mb-0">What the system must do for users and clinics.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card section-card h-100">
                <div className="card-body p-4">
                  <div className="small text-success fw-semibold">Non-functional requirements</div>
                  <div className="display-6 fw-bold">{nonFunctionalRequirements.length}</div>
                  <p className="text-muted mb-0">How fast, accessible, secure, and reliable it must be.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card section-card h-100">
                <div className="card-body p-4">
                  <div className="small text-success fw-semibold">User stories</div>
                  <div className="display-6 fw-bold">{userStories.length}</div>
                  <p className="text-muted mb-0">How persona goals translate into testable product work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card section-card">
            <div className="card-body p-4 p-md-5">
              <h2 className="h3 fw-bold mb-3">What students learn in this demo</h2>
              <div className="row g-3">
                <div className="col-md-6 col-lg-3">
                  <div className="border rounded-4 p-3 h-100 bg-light">
                    Distinguish functional requirements from non-functional requirements.
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="border rounded-4 p-3 h-100 bg-light">
                    Write user stories that trace back to real persona needs.
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="border rounded-4 p-3 h-100 bg-light">
                    Use use cases and environment constraints to clarify design decisions.
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="border rounded-4 p-3 h-100 bg-light">
                    Prioritize scope with a visible MoSCoW board and MVP focus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
