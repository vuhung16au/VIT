import { LabNav } from "@/components/LabNav";
import { topFindings } from "@/data/testingData";

export default function ReportPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <LabNav currentPath="/report" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Usability test report</h1>
              <p className="mb-4">
                8 participants tested the doctor booking app. Overall task success was 75% and 5 critical issues were identified.
              </p>
              <div className="d-grid gap-4">
                {topFindings.map((finding) => (
                  <div key={finding.title} className="border rounded-4 p-4 bg-light">
                    <div className="small text-danger fw-semibold">{finding.severity}</div>
                    <h2 className="h4 fw-bold">{finding.title}</h2>
                    <p className="mb-2">{finding.evidence}</p>
                    <div className="text-success fw-semibold">{finding.recommendation}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 d-flex gap-2">
                <button className="btn btn-danger">Export PDF</button>
                <button className="btn btn-outline-danger">Export CSV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
