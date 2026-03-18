import { EvaluationNav } from "@/components/EvaluationNav";
import { WalkthroughStep } from "@/components/WalkthroughStep";
import { walkthroughSteps } from "@/data/sampleFindings";

export default function CognitiveWalkthroughPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <EvaluationNav currentPath="/cognitive-walkthrough" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Cognitive walkthrough</h1>
              <p className="text-muted mb-0">
                Task: Book an appointment with Dr. Sarah Chen for next Tuesday. User profile: Robert, 65, limited tech experience.
              </p>
            </div>
          </div>
        </div>
        {walkthroughSteps.map((step) => (
          <div key={step.step} className="col-lg-6">
            <WalkthroughStep step={step} />
          </div>
        ))}
      </div>
    </main>
  );
}
