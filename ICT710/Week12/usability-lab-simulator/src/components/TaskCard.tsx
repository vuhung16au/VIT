"use client";

type TaskCardProps = {
  title: string;
  scenario: string;
  targetTime: string;
  status: string;
  onStart: () => void;
  onComplete: () => void;
  onFail: () => void;
  onClickCapture: () => void;
  onPathAdvance: () => void;
  onErrorCapture: () => void;
};

export function TaskCard({
  title,
  scenario,
  targetTime,
  status,
  onStart,
  onComplete,
  onFail,
  onClickCapture,
  onPathAdvance,
  onErrorCapture,
}: TaskCardProps) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="small text-danger fw-semibold mb-1">{title}</div>
        <h2 className="h5 fw-bold">Task scenario</h2>
        <p>{scenario}</p>
        <div className="small text-muted mb-3">Target time: {targetTime}</div>
        <div className="d-flex flex-wrap gap-2">
          <button type="button" className="btn btn-outline-danger" onClick={onStart}>
            Start timer
          </button>
          <button type="button" className="btn btn-success" onClick={onComplete}>
            Mark complete
          </button>
          <button type="button" className="btn btn-dark" onClick={onFail}>
            Mark failed
          </button>
        </div>
        <div className="d-flex flex-wrap gap-2 mt-3">
          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onClickCapture}>
            Add click
          </button>
          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onPathAdvance}>
            Add screen step
          </button>
          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onErrorCapture}>
            Log error
          </button>
        </div>
        <div className="small text-muted mt-3">Current state: {status}</div>
      </div>
    </div>
  );
}
