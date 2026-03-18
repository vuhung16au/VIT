import { LabNav } from "@/components/LabNav";
import { ResultsChart } from "@/components/ResultsChart";
import { analysisSummary, errorTable, qualitativeThemes, satisfactionScores } from "@/data/testingData";

export default function AnalyzePage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <LabNav currentPath="/analyze" />
        </div>
        {satisfactionScores.map((score) => (
          <div key={score.label} className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="small text-danger fw-semibold">{score.label}</div>
                <div className="display-6 fw-bold">{score.value}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-lg-7">
          <ResultsChart items={analysisSummary} />
        </div>
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-3">Error analysis</h2>
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr><th>Error</th><th>Frequency</th><th>Severity</th></tr>
                  </thead>
                  <tbody>
                    {errorTable.map((row) => (
                      <tr key={row.error}>
                        <td>{row.error}</td>
                        <td>{row.frequency}</td>
                        <td>{row.severity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-3">Qualitative themes</h2>
              <div className="d-flex flex-wrap gap-2">
                {qualitativeThemes.map((theme) => (
                  <span key={theme} className="badge text-bg-light border">{theme}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
