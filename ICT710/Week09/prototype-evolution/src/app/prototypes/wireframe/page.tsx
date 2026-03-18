import { PrototypeNav } from "@/components/PrototypeNav";
import { WireframeCanvas } from "@/components/WireframeCanvas";

export default function WireframePage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <PrototypeNav currentPath="/prototypes/wireframe" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase text-danger fw-semibold small mb-1">Stage 2</p>
              <h1 className="display-6 fw-bold">Wireframe version</h1>
              <p className="text-muted mb-0">
                The wireframe removes color and visual polish so layout, spacing, and hierarchy can
                be evaluated in isolation.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <WireframeCanvas />
        </div>
      </div>
    </main>
  );
}
