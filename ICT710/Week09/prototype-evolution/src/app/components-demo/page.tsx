import { PrototypeNav } from "@/components/PrototypeNav";

export default function ComponentsDemoPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <PrototypeNav currentPath="/components-demo" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Prototype component library</h1>
              <p className="text-muted mb-0">
                Reusable components speed up prototyping and make interaction decisions easier to compare.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold">Buttons</h2>
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-danger">Primary</button>
                <button className="btn btn-outline-danger">Secondary</button>
                <button className="btn btn-dark">Danger</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold">Inputs</h2>
              <input className="form-control mb-2" placeholder="Full name" />
              <input className="form-control mb-2" type="date" />
              <select className="form-select">
                <option>General Practice</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold">Doctor card</h2>
              <div className="rounded-4 border p-3">
                <div className="doctor-photo mb-3" />
                <div className="fw-bold">Dr. Ava Stone</div>
                <div className="text-muted small">General Practice • 4.9 stars</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
