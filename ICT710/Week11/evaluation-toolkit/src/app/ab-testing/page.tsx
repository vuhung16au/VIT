import { EvaluationNav } from "@/components/EvaluationNav";
import { abResults } from "@/data/analyticsData";

export default function ABTestingPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <EvaluationNav currentPath="/ab-testing" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">A/B testing concept</h1>
              <p className="text-muted mb-0">
                Compare two variants, split traffic evenly, and inspect conversion, time, and error trade-offs.
              </p>
            </div>
          </div>
        </div>
        {abResults.map((result) => (
          <div key={result.version} className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="h4 fw-bold">{result.version}</h2>
                <div className="text-muted mb-3">{result.conversion} conversion rate</div>
                <ul className="mb-0">
                  <li>Average completion time: {result.completionTime}</li>
                  <li>Error rate: {result.errorRate}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
