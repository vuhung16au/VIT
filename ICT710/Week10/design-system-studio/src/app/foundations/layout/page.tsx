import { GridOverlay } from "@/components/GridOverlay";
import { SystemNav } from "@/components/SystemNav";

export default function LayoutPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <SystemNav currentPath="/foundations/layout" />
        </div>
        <div className="col-12">
          <GridOverlay />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold">Breakpoint guidance</h2>
              <div className="row g-3">
                <div className="col-md-3"><div className="border rounded-4 p-3 bg-light">sm: 640px</div></div>
                <div className="col-md-3"><div className="border rounded-4 p-3 bg-light">md: 768px</div></div>
                <div className="col-md-3"><div className="border rounded-4 p-3 bg-light">lg: 1024px</div></div>
                <div className="col-md-3"><div className="border rounded-4 p-3 bg-light">xl: 1280px</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
