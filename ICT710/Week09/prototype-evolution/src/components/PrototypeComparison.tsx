import { prototypeStages } from "@/data/prototypeFeedback";

export function PrototypeComparison() {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <h2 className="h3 fw-bold mb-4">Prototype comparison</h2>
        <div className="row g-4">
          {prototypeStages.slice(1, 3).map((stage) => (
            <div key={stage.slug} className="col-lg-6">
              <div className="border rounded-4 p-4 h-100 bg-light">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <div className="small text-danger fw-semibold">{stage.fidelity} fidelity</div>
                    <h3 className="h5 fw-bold mb-0">{stage.title}</h3>
                  </div>
                  <span className="badge text-bg-light border">{stage.cost}</span>
                </div>
                <p className="text-muted">{stage.useWhen}</p>
                <ul className="mb-0">
                  {stage.feedback.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
