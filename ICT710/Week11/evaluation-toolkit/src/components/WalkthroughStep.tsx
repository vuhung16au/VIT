type WalkthroughStepProps = {
  step: {
    step: string;
    answers: string[];
    issue: string;
    recommendation: string;
  };
};

const questions = [
  "Will users know what to do?",
  "Will users see how to do it?",
  "Will users understand from feedback whether the action was correct?",
  "Will users know they made progress toward the goal?",
];

export function WalkthroughStep({ step }: WalkthroughStepProps) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h2 className="h5 fw-bold">{step.step}</h2>
        <div className="d-grid gap-2 my-3">
          {questions.map((question, index) => (
            <div key={question} className="border rounded-4 p-3 bg-light">
              <div className="small text-muted">{question}</div>
              <div className="fw-semibold">{step.answers[index]}</div>
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
