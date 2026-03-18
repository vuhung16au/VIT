import { IconGrid } from "@/components/IconGrid";
import { SystemNav } from "@/components/SystemNav";

export default function IconsPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <SystemNav currentPath="/foundations/icons" />
        </div>
        <div className="col-12">
          <IconGrid />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold">Usage guidelines</h2>
              <ul className="mb-0">
                <li>Use 24px as the minimum touch-friendly icon size.</li>
                <li>Keep stroke weight and visual density consistent.</li>
                <li>Pair icons with text when meaning may be ambiguous.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
