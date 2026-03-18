import { LabNav } from "@/components/LabNav";
import { thinkAloudTranscript } from "@/data/testingData";

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
              <p className="text-muted mb-4">
                Ask participants to verbalize what they expect, what they notice, and what confuses them.
              </p>
              <div className="d-grid gap-3">
                {thinkAloudTranscript.map((line) => (
                  <div key={line} className="border rounded-4 p-3 bg-light">{line}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
