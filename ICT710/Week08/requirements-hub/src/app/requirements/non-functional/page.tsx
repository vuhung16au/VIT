import { RequirementCard } from "@/components/RequirementCard";
import { RequirementsNav } from "@/components/RequirementsNav";
import { nonFunctionalRequirements } from "@/data/nonFunctionalRequirements";

export default function NonFunctionalRequirementsPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <RequirementsNav currentPath="/requirements/non-functional" />
        </div>
        <div className="col-12">
          <div className="card section-card">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Non-functional requirements</h1>
              <p className="text-muted mb-0">
                These requirements describe how well the system must perform, protect users, and
                support accessibility.
              </p>
            </div>
          </div>
        </div>
        {nonFunctionalRequirements.map((requirement) => (
          <div key={requirement.id} className="col-lg-6">
            <RequirementCard requirement={requirement} />
          </div>
        ))}
      </div>
    </main>
  );
}
