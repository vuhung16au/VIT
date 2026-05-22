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
              <div className="text-uppercase small fw-semibold text-success mb-2">A/B testing concept</div>
              <h1 className="display-6 fw-bold">From inspection to experiment</h1>
              <p className="text-muted mb-0">
                Split traffic 50/50, compare conversion and error rates, and decide whether a design change is meaningful enough to ship.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="row g-4">
            {abResults.map((result) => (
              <div key={result.version} className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h2 className="h4 fw-bold">{result.version}</h2>
                    <div className="text-muted mb-3">{result.summary}</div>
                    <ul className="mb-0">
                      <li>Conversion rate: {result.conversion}</li>
                      <li>Average completion time: {result.completionTime}</li>
                      <li>Error rate: {result.errorRate}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h2 className="h4 fw-bold mb-3">Interpretation</h2>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="border rounded-4 p-3 bg-light h-100">
                    <div className="fw-semibold mb-2">Traffic split</div>
                    <div className="small text-muted">Send half of users to Version A and half to Version B to avoid bias from audience differences.</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border rounded-4 p-3 bg-light h-100">
                    <div className="fw-semibold mb-2">Statistical signal</div>
                    <div className="small text-muted">Version B wins with a higher conversion rate and lower error rate, assumed significant at p &lt; 0.05 for the demo.</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border rounded-4 p-3 bg-light h-100">
                    <div className="fw-semibold mb-2">Decision</div>
                    <div className="small text-muted">Ship Version B if reducing errors and increasing successful bookings matters more than raw speed.</div>
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
