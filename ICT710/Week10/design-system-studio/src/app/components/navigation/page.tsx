import { SystemNav } from "@/components/SystemNav";

export default function NavigationPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <SystemNav currentPath="/components/navigation" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Navigation patterns</h1>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <button className="btn btn-primary">Primary nav item</button>
                <button className="btn btn-outline-primary">Secondary item</button>
                <button className="btn btn-link text-decoration-none">Text-only item</button>
              </div>
              <div className="mt-4 border rounded-4 p-4 bg-light">
                <div className="small text-muted mb-2">Pattern guidance</div>
                <ul className="mb-0">
                  <li>Highlight the current location clearly.</li>
                  <li>Keep label wording short and predictable.</li>
                  <li>Use the same visual hierarchy across sections.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
