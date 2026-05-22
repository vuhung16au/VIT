import { LabNav } from "@/components/LabNav";
import {
  moderatorPrompts,
  thinkAloudInsights,
  thinkAloudOverview,
  thinkAloudTranscript,
} from "@/data/testingData";

export default function ThinkAloudPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <LabNav currentPath="/think-aloud" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Think-aloud protocol guide</h1>
              <div className="row g-4 mt-1">
                <div className="col-lg-5">
                  <h2 className="h5 fw-bold mb-3">How it works</h2>
                  <div className="d-grid gap-3">
                    {thinkAloudOverview.map((item) => (
                      <div key={item} className="border rounded-4 p-3 bg-light">{item}</div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-7">
                  <h2 className="h5 fw-bold mb-3">Example transcript</h2>
                  <div className="d-grid gap-3">
                    {thinkAloudTranscript.map((line) => (
                      <div key={line} className="border rounded-4 p-3 bg-light">{line}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="row g-4 mt-1">
                <div className="col-lg-6">
                  <h2 className="h5 fw-bold mb-3">Prompts when the participant goes quiet</h2>
                  <ul className="mb-0 ps-3">
                    {moderatorPrompts.map((prompt) => (
                      <li key={prompt} className="mb-2">{prompt}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6">
                  <h2 className="h5 fw-bold mb-3">Insights from the transcript</h2>
                  <ul className="mb-0 ps-3">
                    {thinkAloudInsights.map((insight) => (
                      <li key={insight} className="mb-2">{insight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
