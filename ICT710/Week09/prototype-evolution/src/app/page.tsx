import Link from "next/link";

import { FeedbackAnnotations } from "@/components/FeedbackAnnotations";
import { PrototypeComparison } from "@/components/PrototypeComparison";
import { PrototypeNav } from "@/components/PrototypeNav";
import { PrototypeTimeline } from "@/components/PrototypeTimeline";
import { prototypeStages } from "@/data/prototypeFeedback";

export default function HomePage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <PrototypeNav currentPath="/" />
        </div>
        <div className="col-12">
          <div className="card prototype-hero border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase fw-semibold small mb-2">Week 09 Demo Plan</p>
              <h1 className="display-6 fw-bold">Prototype Evolution</h1>
              <p className="col-lg-8 mb-4">
                Move from paper sketches to polished interactive prototypes and show what each
                fidelity level is good at answering.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="stage-chip">Fail fast, fail cheap</span>
                <span className="stage-chip">Fidelity matches the question</span>
                <span className="stage-chip">Prototype only the risky parts</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <PrototypeTimeline />
        </div>
        <div className="col-12">
          <PrototypeComparison />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h2 className="h3 fw-bold mb-1">When to use each prototype level</h2>
                  <p className="text-muted mb-0">Use the cheapest prototype that can answer the current question.</p>
                </div>
                <Link href="/storyboard" className="btn btn-outline-danger">
                  Open storyboard
                </Link>
              </div>
              <FeedbackAnnotations notes={prototypeStages.flatMap((stage) => stage.feedback).slice(0, 6)} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
