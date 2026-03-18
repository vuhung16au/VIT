type AnalyticsChartProps = {
  items: Array<{ stage: string; users: number; conversion: string }>;
};

export function AnalyticsChart({ items }: AnalyticsChartProps) {
  const max = Math.max(...items.map((item) => item.users));

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <h2 className="h5 fw-bold mb-4">Funnel chart</h2>
        <div className="d-grid gap-3">
          {items.map((item) => (
            <div key={item.stage}>
              <div className="d-flex justify-content-between small mb-1">
                <span>{item.stage}</span>
                <span>{item.users} users</span>
              </div>
              <div className="progress" role="progressbar" aria-label={item.stage}>
                <div className="progress-bar bg-success" style={{ width: `${(item.users / max) * 100}%` }}>
                  {item.conversion}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
