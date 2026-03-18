import { RequirementsNav } from "@/components/RequirementsNav";
import { environmentalRequirements } from "@/data/environmentalRequirements";

export default function EnvironmentPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <RequirementsNav currentPath="/requirements/environment" />
        </div>
        <div className="col-12">
          <div className="card section-card">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Environmental context</h1>
              <p className="text-muted mb-0">
                Physical, social, organizational, and technical context all shape the requirements.
              </p>
            </div>
          </div>
        </div>
        {environmentalRequirements.map((item) => (
          <div key={`${item.category}-${item.title}`} className="col-lg-6">
            <div className="card section-card h-100">
              <div className="card-body p-4">
                <div className="small text-success fw-semibold">{item.category}</div>
                <h2 className="h4 fw-bold">{item.title}</h2>
                <p className="text-muted">{item.details}</p>
                <div className="small text-muted mb-1">Design response</div>
                <p className="mb-0">{item.designResponse}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
