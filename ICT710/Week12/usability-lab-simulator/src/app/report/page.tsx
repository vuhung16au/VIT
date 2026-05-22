import { FindingCard } from "@/components/FindingCard";
import { LabNav } from "@/components/LabNav";
import { ReportExports } from "@/components/ReportExports";
import {
  analysisSummary,
  appendices,
  methodology,
  recommendations,
  topFindings,
} from "@/data/testingData";
import { buildCsv, buildPresentationOutline } from "@/lib/reportGenerator";

export default function ReportPage() {
  const csvContent = buildCsv([
    ["Task", "Success", "Average Time", "Target"],
    ...analysisSummary.map((item) => [item.task, item.success, item.time, item.target]),
  ]);

  const pptOutline = buildPresentationOutline("USABILITY TEST REPORT", [
    {
      heading: "1. Executive Summary",
      bullets: [
        "8 participants tested the doctor booking app",
        "Overall task success: 75%",
        "5 critical issues identified",
        "Satisfaction: 3.2/5",
      ],
    },
    {
      heading: "2. Methodology",
      bullets: methodology,
    },
    {
      heading: "3. Key Findings",
      bullets: topFindings.map((item) => `${item.title}: ${item.evidence} Recommendation: ${item.recommendation}`),
    },
  ]);

  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <LabNav currentPath="/report" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <div className="small text-danger fw-semibold mb-2">Usability test report</div>
              <h1 className="display-6 fw-bold">Doctor booking app study summary</h1>
              <p className="mb-0">
                8 participants tested the doctor booking app. Overall task success was 75%, satisfaction was 3.2/5, and the team identified 5 critical issues to address.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-3">Executive summary</h2>
              <ul className="mb-0 ps-3">
                <li>8 participants tested the doctor booking app.</li>
                <li>Overall task success: 75%.</li>
                <li>5 critical issues identified.</li>
                <li>Satisfaction: 3.2/5 and needs improvement.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-3">Test methodology</h2>
              <ul className="mb-0 ps-3">
                {methodology.map((item) => (
                  <li key={item} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12">
          <h2 className="h4 fw-bold">Key findings</h2>
        </div>
        {topFindings.map((finding) => (
          <div key={finding.title} className="col-md-6">
            <FindingCard {...finding} />
          </div>
        ))}

        <div className="col-lg-7">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-3">Recommendations</h2>
              <div className="d-grid gap-3">
                {recommendations.map((group) => (
                  <div key={group.priority} className="border rounded-4 p-3 bg-light">
                    <div className="fw-semibold mb-2">{group.priority}</div>
                    <ul className="mb-0 ps-3">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-3">Appendices</h2>
              <ul className="mb-0 ps-3">
                {appendices.map((item) => (
                  <li key={item} className="mb-2">{item}</li>
                ))}
              </ul>
              <ReportExports csvContent={csvContent} pptOutline={pptOutline} />
              <div className="small text-muted mt-3">
                PDF export uses the browser print flow. PowerPoint export provides a presentation-ready outline for slides.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
