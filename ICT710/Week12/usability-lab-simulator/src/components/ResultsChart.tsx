type ResultsChartProps = {
  items: Array<{ task: string; success: string; time: string; target?: string }>;
};

export function ResultsChart({ items }: ResultsChartProps) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <h2 className="h5 fw-bold mb-4">Task success summary</h2>
        <div className="d-grid gap-3">
          {items.map((item) => (
            <div key={item.task} className="border rounded-4 p-3 bg-light">
              <div className="fw-semibold">{item.task}</div>
              <div className="small text-muted">Success: {item.success}</div>
              <div className="small text-muted">Average time: {item.time}</div>
              {item.target ? <div className="small text-muted">{item.target}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
