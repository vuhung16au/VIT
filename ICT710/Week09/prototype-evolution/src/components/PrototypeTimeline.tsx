import Link from "next/link";

import { prototypeStages } from "@/data/prototypeFeedback";

export function PrototypeTimeline() {
  return (
    <div className="row g-4">
      {prototypeStages.map((stage, index) => (
        <div key={stage.slug} className="col-lg-3 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <div className="small text-danger fw-semibold">Stage {index + 1}</div>
              <h2 className="h4 fw-bold">{stage.title}</h2>
              <div className="d-flex justify-content-between small text-muted mb-3">
                <span>{stage.fidelity} fidelity</span>
                <span>{stage.cost}</span>
              </div>
              <p className="text-muted">{stage.useWhen}</p>
              <Link href={`/prototypes/${stage.slug}`} className="btn btn-outline-danger">
                Open demo
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
