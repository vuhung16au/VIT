import { LabNav } from "@/components/LabNav";
import { unmoderatedSetup, unmoderatedTradeoffs } from "@/data/testingData";

export default function UnmoderatedPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <LabNav currentPath="/unmoderated" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Unmoderated testing demo</h1>
              <p className="mb-0">
                Use this mode when you need scale and faster turnaround, but can accept less probing and less control during the session.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-3">Setup flow</h2>
              <ul className="mb-0 ps-3">
                {unmoderatedSetup.map((item) => (
                  <li key={item} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="d-grid gap-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h5 fw-bold mb-3">Pros</h2>
                <div className="d-flex flex-wrap gap-2">
                  {unmoderatedTradeoffs.pros.map((item) => (
                    <span key={item} className="badge rounded-pill text-bg-success-subtle border border-success-subtle">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h5 fw-bold mb-3">Cons</h2>
                <div className="d-flex flex-wrap gap-2">
                  {unmoderatedTradeoffs.cons.map((item) => (
                    <span key={item} className="badge rounded-pill text-bg-danger-subtle border border-danger-subtle">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
