import { SeverityBadge } from "@/components/SeverityBadge";

type HeuristicCardProps = {
  heuristic: {
    id: number;
    name: string;
    description: string;
  };
  findings: Array<{
    screen: string;
    issue: string;
    severity: string;
    rating: number;
    recommendation: string;
  }>;
};

export function HeuristicCard({ heuristic, findings }: HeuristicCardProps) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="small text-success fw-semibold mb-1">Heuristic {heuristic.id}</div>
        <h2 className="h5 fw-bold">{heuristic.name}</h2>
        <p className="text-muted">{heuristic.description}</p>
        <div className="d-grid gap-3">
          {findings.map((finding) => (
            <div key={`${finding.screen}-${finding.issue}`} className="border rounded-4 p-3 bg-light">
              <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                <div className="fw-semibold">{finding.screen}</div>
                <SeverityBadge severity={finding.severity} />
              </div>
              <div className="small text-muted mb-2">Compliance rating: {finding.rating}/5</div>
              <div>{finding.issue}</div>
              <div className="small mt-2 text-success">{finding.recommendation}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
