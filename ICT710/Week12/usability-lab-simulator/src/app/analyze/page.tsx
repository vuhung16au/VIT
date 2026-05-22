import { AnalyticsChart } from "@/components/AnalyticsChart";
import { LabNav } from "@/components/LabNav";
import { ResultsChart } from "@/components/ResultsChart";
import {
  analysisSummary,
  errorTable,
  qualitativeThemes,
  quoteCloud,
  satisfactionScores,
} from "@/data/testingData";

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
        <div className="col-lg-5">
          <ResultsChart items={analysisSummary} />
        </div>
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-3">Qualitative themes</h2>
              <div className="d-grid gap-3">
                {qualitativeThemes.map((theme) => (
                  <div key={theme.label} className="border rounded-4 p-3 bg-light">
                    <div className="fw-semibold">{theme.label}</div>
                    <div className="small text-muted">{theme.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <AnalyticsChart
            successRates={analysisSummary}
            errorHeatmap={errorTable}
            satisfactionScores={satisfactionScores}
            quoteCloud={quoteCloud}
          />
        </div>
      </div>
    </main>
  );
}
