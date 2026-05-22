import { EvaluationNav } from "@/components/EvaluationNav";
import { comparisonData, decisionMatrix } from "@/data/analyticsData";

function calculateWeightedScore(versionKey: "versionA" | "versionB") {
  const total = decisionMatrix.reduce((sum, row) => sum + row[versionKey] * (row.weight / 100), 0);
  return total.toFixed(2);
}

export default function ComparisonPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <EvaluationNav currentPath="/comparison" />
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <div className="text-uppercase small fw-semibold text-success mb-2">Comparative evaluation</div>
              <h1 className="display-6 fw-bold">Version A vs Version B</h1>
              <p className="text-muted mb-0">
                Compare a single-page booking form against a multi-step wizard using learnability, efficiency, memorability, errors, and satisfaction.
              </p>
            </div>
          </div>
        </div>

        {comparisonData.map((item) => (
          <div key={item.version} className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 p-md-5">
                <div className="small text-success fw-semibold">{item.version}</div>
                <h2 className="h3 fw-bold">{item.pattern}</h2>
                <p className="text-muted">{item.description}</p>
                <div className="comparison-shot mb-4">{item.pattern}</div>
                <div className="row g-3">
                  <div className="col-6"><div className="border rounded-4 p-3 bg-light">Learnability: {item.learnability}/10</div></div>
                  <div className="col-6"><div className="border rounded-4 p-3 bg-light">Efficiency: {item.efficiency}/10</div></div>
                  <div className="col-6"><div className="border rounded-4 p-3 bg-light">Memorability: {item.memorability}/10</div></div>
                  <div className="col-6"><div className="border rounded-4 p-3 bg-light">Satisfaction: {item.satisfaction}/10</div></div>
                  <div className="col-6"><div className="border rounded-4 p-3 bg-light">Heuristic score: {item.heuristicScore}</div></div>
                  <div className="col-6"><div className="border rounded-4 p-3 bg-light">Accessibility: {item.accessibility}</div></div>
                  <div className="col-6"><div className="border rounded-4 p-3 bg-light">Time: {item.completionTime}</div></div>
                  <div className="col-6"><div className="border rounded-4 p-3 bg-light">Cognitive load: {item.cognitiveLoad}</div></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h2 className="h4 fw-bold mb-3">Decision matrix</h2>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Criteria</th>
                      <th>Weight</th>
                      <th>Version A</th>
                      <th>Version B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decisionMatrix.map((row) => (
                      <tr key={row.criteria}>
                        <td>{row.criteria}</td>
                        <td>{row.weight}%</td>
                        <td>{row.versionA}/10</td>
                        <td>{row.versionB}/10</td>
                      </tr>
                    ))}
                    <tr className="fw-bold">
                      <td>Total score</td>
                      <td>100%</td>
                      <td>{calculateWeightedScore("versionA")}/10</td>
                      <td>{calculateWeightedScore("versionB")}/10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="alert alert-success mt-3 mb-0">
                Recommendation: choose <strong>Version B</strong> for better learnability, error prevention, and overall satisfaction, even though it takes longer to complete.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
