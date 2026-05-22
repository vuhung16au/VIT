import { EvaluationNav } from "@/components/EvaluationNav";
import { ExportReportButton } from "@/components/ExportReportButton";
import { heuristics } from "@/data/heuristics";
import { checklistSections, sampleFindings } from "@/data/sampleFindings";
import {
  calculateAverageHeuristicRating,
  calculateComplianceScore,
  countFindingsBySeverity,
  getMostViolatedHeuristic,
} from "@/lib/severityCalculator";

const methods = [
  {
    title: "Heuristic evaluation",
    href: "/heuristic",
    summary: "Review both existing projects against Nielsen's 10 heuristics with evidence, severity, and recommendations.",
  },
  {
    title: "Cognitive walkthrough",
    href: "/cognitive-walkthrough",
    summary: "Step through a realistic appointment-booking task from the perspective of a novice older adult.",
  },
  {
    title: "Analytics review",
    href: "/analytics",
    summary: "Interpret funnel data, hotspots, errors, and time-on-task to explain what users actually do.",
  },
  {
    title: "Inspection checklist",
    href: "/checklist",
    summary: "Score accessibility, usability, performance, and content readiness with an auto-calculated percentage.",
  },
];

export default function HomePage() {
  const severityCounts = countFindingsBySeverity(sampleFindings);
  const checklistItems = checklistSections.flatMap((section) => section.items);
  const heuristicNames = Object.fromEntries(heuristics.map((heuristic) => [heuristic.id, heuristic.name]));
  const mostViolated = getMostViolatedHeuristic(sampleFindings, heuristicNames);
  const averageRating = calculateAverageHeuristicRating(sampleFindings);
  const complianceScore = calculateComplianceScore(checklistItems);

  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <EvaluationNav currentPath="/" />
        </div>

        <div className="col-12">
          <div className="card evaluation-hero border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex flex-column flex-xl-row justify-content-between gap-4">
                <div className="col-xl-8 px-0">
                  <p className="text-uppercase fw-semibold small mb-2">Week 11 Design Evaluation</p>
                  <h1 className="display-5 fw-bold">Evaluation Hub</h1>
                  <p className="lead mb-3">
                    Inspect the Doctor Booking App and Design System Studio using heuristics, walkthroughs, analytics, and structured checklists before formal user testing.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill text-bg-light">Doctor Booking App</span>
                    <span className="badge rounded-pill text-bg-light">Design System Studio</span>
                    <span className="badge rounded-pill text-bg-light">Bootstrap 5.3.3</span>
                    <span className="badge rounded-pill text-bg-light">Next.js App Router</span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2 align-items-start">
                  <ExportReportButton />
                  <div className="small text-white-50">
                    Print-friendly report export works well for class demos and stakeholder walkthroughs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {[
          { title: "Total issues found", value: String(sampleFindings.length), note: "Pre-loaded expert inspection findings" },
          { title: "Compliance score", value: `${complianceScore}%`, note: "Calculated from checklist pass rate" },
          { title: "Average heuristic rating", value: `${averageRating}/5`, note: "Mean compliance across documented issues" },
          { title: "Most violated heuristic", value: mostViolated, note: "Highest weighted severity signal" },
        ].map((card) => (
          <div key={card.title} className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="small text-success fw-semibold">{card.title}</div>
                <div className="display-6 fw-bold">{card.value}</div>
                <div className="text-muted small">{card.note}</div>
              </div>
            </div>
          </div>
        ))}

        <div className="col-lg-7">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 p-md-5">
              <h2 className="h4 fw-bold mb-4">Available evaluation methods</h2>
              <div className="row g-3">
                {methods.map((method) => (
                  <div key={method.title} className="col-md-6">
                    <a href={method.href} className="text-decoration-none">
                      <div className="method-card h-100">
                        <div className="fw-semibold text-dark mb-2">{method.title}</div>
                        <div className="small text-muted">{method.summary}</div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 p-md-5">
              <h2 className="h4 fw-bold mb-4">Severity breakdown</h2>
              <div className="row g-3">
                {Object.entries(severityCounts).map(([severity, count]) => (
                  <div key={severity} className="col-6">
                    <div className="severity-summary-card">
                      <div className={`badge severity-${severity.toLowerCase()}`}>{severity}</div>
                      <div className="display-6 mt-2 mb-1">{count}</div>
                      <div className="small text-muted">Issues documented</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h2 className="h4 fw-bold mb-3">Teaching notes</h2>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="border rounded-4 p-3 h-100 bg-light">
                    <div className="fw-semibold mb-2">Formative before summative</div>
                    <div className="small text-muted">
                      Use inspection methods first to uncover obvious design risks before investing in moderated user studies.
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border rounded-4 p-3 h-100 bg-light">
                    <div className="fw-semibold mb-2">Severity helps prioritise</div>
                    <div className="small text-muted">
                      Not every problem is equal. Critical and high-severity findings should shape the next design sprint.
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border rounded-4 p-3 h-100 bg-light">
                    <div className="fw-semibold mb-2">Analytics tests assumptions</div>
                    <div className="small text-muted">
                      Funnel and heatmap evidence keeps evaluation grounded in behaviour instead of opinion alone.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
