import { EvaluationNav } from "@/components/EvaluationNav";
import { WalkthroughStep } from "@/components/WalkthroughStep";
import { walkthroughSteps } from "@/data/sampleFindings";

export default function CognitiveWalkthroughPage() {
  const issueCount = walkthroughSteps.filter((step) => step.severity !== "Low").length;

  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <EvaluationNav currentPath="/cognitive-walkthrough" />
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <div className="row g-4 align-items-end">
                <div className="col-lg-8">
                  <div className="text-uppercase small fw-semibold text-success mb-2">Task definition</div>
                  <h1 className="display-6 fw-bold">Cognitive walkthrough</h1>
                  <p className="text-muted mb-2">
                    Task: Book an appointment with Dr. Sarah Chen for next Tuesday.
                  </p>
                  <p className="text-muted mb-0">
                    User profile: Robert, 65 years old, limited tech experience, expects obvious labels, reassurance, and minimal jargon.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="walkthrough-summary-card">
                    <div className="small text-uppercase text-success fw-semibold mb-2">Result summary</div>
                    <div className="mb-2">Issue count: <strong>{issueCount}</strong></div>
                    <div className="mb-2">Most problematic step: <strong>Select date and time</strong></div>
                    <div className="mb-2">Task completion likelihood: <strong>62%</strong></div>
                    <div className="mb-0">Priority fix: <strong>Clarify start CTA and progress feedback</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-3">Heat map of problematic steps</h2>
              <div className="row g-3">
                {walkthroughSteps.map((step) => (
                  <div key={step.id} className="col-md-3">
                    <div className={`heat-step-card severity-${step.severity.toLowerCase()}`}>
                      <div className="small text-uppercase fw-semibold">{step.step}</div>
                      <div className="small mt-2">{step.severity} friction</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {walkthroughSteps.map((step) => (
          <div key={step.id} className="col-lg-6">
            <WalkthroughStep step={step} />
          </div>
        ))}
      </div>
    </main>
  );
}
