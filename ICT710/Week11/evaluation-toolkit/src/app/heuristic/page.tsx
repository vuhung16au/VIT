import { EvaluationNav } from "@/components/EvaluationNav";
import { ExportReportButton } from "@/components/ExportReportButton";
import { HeuristicCard } from "@/components/HeuristicCard";
import { IssueForm } from "@/components/IssueForm";
import { SeverityBadge } from "@/components/SeverityBadge";
import { heuristics } from "@/data/heuristics";
import { sampleFindings } from "@/data/sampleFindings";

export default function HeuristicPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <EvaluationNav currentPath="/heuristic" />
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex flex-column flex-xl-row justify-content-between gap-4">
                <div className="col-xl-8 px-0">
                  <div className="text-uppercase small fw-semibold text-success mb-2">Nielsen&apos;s 10 usability heuristics</div>
                  <h1 className="display-6 fw-bold">Heuristic evaluation workspace</h1>
                  <p className="text-muted mb-0">
                    Review every heuristic, document findings, sort issues by severity, and print a PDF-style report for teaching or stakeholder review.
                  </p>
                </div>
                <ExportReportButton />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <IssueForm />
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex flex-wrap justify-content-between gap-3 mb-3">
                <h2 className="h4 fw-bold mb-0">Sortable findings table</h2>
                <div className="small text-muted">Pre-sorted from highest severity to lowest severity for fast triage.</div>
              </div>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Heuristic</th>
                      <th>Project</th>
                      <th>Screen</th>
                      <th>Severity</th>
                      <th>Rating</th>
                      <th>Recommendation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...sampleFindings]
                      .sort((left, right) => {
                        const order = ["Critical", "High", "Medium", "Low"];
                        return order.indexOf(left.severity) - order.indexOf(right.severity);
                      })
                      .map((finding) => (
                        <tr key={finding.id}>
                          <td>{finding.heuristicId}. {heuristics.find((heuristic) => heuristic.id === finding.heuristicId)?.name}</td>
                          <td>{finding.project}</td>
                          <td>{finding.screen}</td>
                          <td><SeverityBadge severity={finding.severity} /></td>
                          <td>{finding.rating}/5</td>
                          <td>{finding.recommendation}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {heuristics.map((heuristic) => (
          <div key={heuristic.id} className="col-lg-6">
            <HeuristicCard
              heuristic={heuristic}
              findings={sampleFindings.filter((finding) => finding.heuristicId === heuristic.id)}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
