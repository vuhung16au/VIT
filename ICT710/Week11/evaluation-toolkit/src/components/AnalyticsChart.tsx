type AnalyticsChartProps = {
  items: Array<{ stage: string; users: number; conversion: number; dropoffRate: number }>;
};

export function AnalyticsChart({ items }: AnalyticsChartProps) {
  const max = Math.max(...items.map((item) => item.users));

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4 p-md-5">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-4">
          <div>
            <div className="text-uppercase small fw-semibold text-success mb-2">User flow analytics</div>
            <h2 className="h4 fw-bold mb-1">Booking funnel</h2>
            <p className="text-muted mb-0">Track where users continue, hesitate, or abandon the flow.</p>
          </div>
          <div className="metric-pill">Overall completion 24.5%</div>
        </div>

        <div className="d-grid gap-3">
          {items.map((item) => (
            <div key={item.stage}>
              <div className="d-flex justify-content-between small mb-1">
                <span>{item.stage}</span>
                <span>
                  {item.users} users • {item.conversion}%
                </span>
              </div>
              <div className="progress mb-1" role="progressbar" aria-label={item.stage}>
                <div className="progress-bar bg-success" style={{ width: `${(item.users / max) * 100}%` }}>
                  {item.conversion}%
                </div>
              </div>
              <div className="small text-muted">Drop-off from previous step: {item.dropoffRate}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
