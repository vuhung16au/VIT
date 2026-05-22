import { SeverityBadge } from "@/components/SeverityBadge";
import type { WalkthroughStepData } from "@/data/sampleFindings";

type WalkthroughStepProps = {
  step: WalkthroughStepData;
};

const questions = [
  "Will users know what to do?",
  "Will users see how to do it?",
  "Will users understand from feedback whether the action was correct?",
  "Will users know they made progress toward the goal?",
];

const answerClasses: Record<WalkthroughStepData["answers"][number], string> = {
  Yes: "walkthrough-answer answer-yes",
  Maybe: "walkthrough-answer answer-maybe",
  No: "walkthrough-answer answer-no",
};

export function WalkthroughStep({ step }: WalkthroughStepProps) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
          <div>
            <div className="small text-success fw-semibold">Task step</div>
            <h2 className="h5 fw-bold mb-1">{step.step}</h2>
            <p className="text-muted mb-0">{step.userGoal}</p>
          </div>
          <SeverityBadge severity={step.severity} />
        </div>

        <div className="d-grid gap-2 my-3">
          {questions.map((question, index) => (
            <div key={question} className="border rounded-4 p-3 bg-light">
              <div className="small text-muted mb-1">{question}</div>
              <div className={answerClasses[step.answers[index]]}>{step.answers[index]}</div>
            </div>
          ))}
        </div>

        <div className="fw-semibold">Issue</div>
        <p>{step.issue}</p>
        <div className="fw-semibold text-success">Recommendation</div>
        <p className="mb-0">{step.recommendation}</p>
      </div>
    </div>
  );
}
