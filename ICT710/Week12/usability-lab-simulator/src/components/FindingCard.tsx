type FindingCardProps = {
  severity: string;
  title: string;
  evidence: string;
  recommendation: string;
  priority: string;
};

export function FindingCard({
  severity,
  title,
  evidence,
  recommendation,
  priority,
}: FindingCardProps) {
  return (
    <div className="border rounded-4 p-4 report-finding-card h-100">
      <div className="d-flex justify-content-between align-items-start gap-3 mb-2">
        <span className="small text-danger fw-semibold">{severity}</span>
        <span className="badge rounded-pill text-bg-light border">{priority}</span>
      </div>
      <h3 className="h5 fw-bold">{title}</h3>
      <p className="mb-2">{evidence}</p>
      <div className="text-success fw-semibold">{recommendation}</div>
    </div>
  );
}
