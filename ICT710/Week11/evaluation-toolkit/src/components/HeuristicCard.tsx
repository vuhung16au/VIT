import { SeverityBadge } from "@/components/SeverityBadge";
import type { Heuristic } from "@/data/heuristics";
import type { Finding } from "@/data/sampleFindings";

type HeuristicCardProps = {
  heuristic: Heuristic;
  findings: Finding[];
};

export function HeuristicCard({ heuristic, findings }: HeuristicCardProps) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
          <div>
            <div className="small text-success fw-semibold mb-1">Heuristic {heuristic.id}</div>
            <h2 className="h5 fw-bold mb-2">{heuristic.name}</h2>
            <p className="text-muted mb-0">{heuristic.description}</p>
          </div>
          <div className="metric-pill">{findings.length} findings</div>
        </div>

        <div className="mb-4">
          <div className="fw-semibold small text-uppercase text-muted mb-2">What good looks like</div>
          <ul className="small mb-0 ps-3">
            {heuristic.examples.map((example) => (
              <li key={example} className="mb-1">
                {example}
              </li>
            ))}
          </ul>
        </div>

        <div className="d-grid gap-3">
          {findings.length > 0 ? (
            findings.map((finding) => (
              <div key={finding.id} className="border rounded-4 p-3 bg-light">
                <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                  <div>
                    <div className="fw-semibold">{finding.screen}</div>
                    <div className="small text-muted">{finding.project}</div>
                  </div>
                  <SeverityBadge severity={finding.severity} />
                </div>
                <div className="small text-muted mb-2">Compliance rating: {finding.rating}/5</div>
                <div className="mb-2">{finding.issue}</div>
                <div className="small mb-2">
                  <strong>Evidence:</strong> {finding.evidence}
                </div>
                <div className="small text-success">
                  <strong>Recommendation:</strong> {finding.recommendation}
                </div>
              </div>
            ))
          ) : (
            <div className="border rounded-4 p-3 bg-light small text-muted">
              No pre-loaded violations for this heuristic yet. Use the issue form above to demonstrate adding one during class.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
