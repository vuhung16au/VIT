"use client";

type MetricsDisplayProps = {
  startTime: string | null;
  endTime: string | null;
  durationSeconds: number;
  status: string;
  clicks: number;
  path: string[];
  errors: number;
};

export function MetricsDisplay({
  startTime,
  endTime,
  durationSeconds,
  status,
  clicks,
  path,
  errors,
}: MetricsDisplayProps) {
  const metrics = [
    { label: "Task start", value: startTime ?? "Not started" },
    { label: "Task end", value: endTime ?? "Not finished" },
    { label: "Duration", value: `${durationSeconds}s` },
    { label: "Success state", value: status },
    { label: "Clicks", value: String(clicks) },
    { label: "Errors", value: String(errors) },
  ];

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h2 className="h5 fw-bold mb-3">Auto-captured metrics</h2>
        <div className="row g-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="col-sm-6">
              <div className="border rounded-4 p-3 bg-light h-100">
                <div className="small text-danger fw-semibold">{metric.label}</div>
                <div className="fw-semibold">{metric.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="small text-danger fw-semibold mb-2">Path taken</div>
          <div className="d-flex flex-wrap gap-2">
            {path.length ? (
              path.map((step) => (
                <span key={step} className="badge rounded-pill text-bg-light border">
                  {step}
                </span>
              ))
            ) : (
              <span className="text-muted small">Add screen steps during the simulation.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
