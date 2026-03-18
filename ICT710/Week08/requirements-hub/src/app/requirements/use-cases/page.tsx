import { RequirementsNav } from "@/components/RequirementsNav";
import { UseCaseDiagram } from "@/components/UseCaseDiagram";
import { useCases } from "@/data/useCases";

export default function UseCasesPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <RequirementsNav currentPath="/requirements/use-cases" />
        </div>
        <div className="col-12">
          <div className="card section-card">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Use cases</h1>
              <p className="text-muted mb-0">
                Explore the main actors, included behaviors, and end-to-end task flows.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <UseCaseDiagram useCases={useCases} />
        </div>
      </div>
    </main>
  );
}
