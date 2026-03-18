import { ComponentPlayground } from "@/components/ComponentPlayground";
import { SystemNav } from "@/components/SystemNav";
import { Button } from "@/components/ui/Button";

export default function ButtonsPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <SystemNav currentPath="/components/buttons" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Button library</h1>
              <p className="text-muted mb-0">Variants, sizes, states, and interactive preview.</p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="primary" loading>Loading</Button>
          </div>
        </div>
        <div className="col-12">
          <ComponentPlayground />
        </div>
      </div>
    </main>
  );
}
