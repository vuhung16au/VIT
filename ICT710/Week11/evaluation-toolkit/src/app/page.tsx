import { EvaluationNav } from "@/components/EvaluationNav";
import { sampleFindings } from "@/data/sampleFindings";

const severityOrder = ["Critical", "High", "Medium", "Low"];

export default function HomePage() {
  const summary = severityOrder.map((severity) => ({
    severity,
    count: sampleFindings.filter((item) => item.severity === severity).length,
  }));

  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <EvaluationNav currentPath="/" />
        </div>
        <div className="col-12">
          <div className="card evaluation-hero border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase fw-semibold small mb-2">Week 11 Demo Plan</p>
              <h1 className="display-6 fw-bold">Evaluation Toolkit</h1>
              <p className="col-lg-8 mb-0">
                Evaluate existing projects with heuristics, walkthroughs, analytics, and structured inspection before running formal user tests.
              </p>
            </div>
          </div>
        </div>
        {[
          { title: "Projects under review", value: "2", note: "Doctor Booking App and Design System Studio" },
          { title: "Total issues found", value: String(sampleFindings.length), note: "Pre-loaded expert review findings" },
          { title: "Compliance score", value: "76%", note: "Simulated inspection result" },
          { title: "Most violated heuristic", value: "Visibility", note: "Common across both sample products" },
        ].map((card) => (
          <div key={card.title} className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="small text-success fw-semibold">{card.title}</div>
                <div className="display-6 fw-bold">{card.value}</div>
                <div className="text-muted small">{card.note}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h2 className="h3 fw-bold mb-4">Severity breakdown</h2>
              <div className="row g-3">
                {summary.map((item) => (
                  <div key={item.severity} className="col-md-3">
                    <div className="border rounded-4 p-3 bg-light h-100">
                      <div className="fw-semibold">{item.severity}</div>
                      <div className="display-6">{item.count}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
