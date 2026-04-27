import { RequirementsNav } from "@/components/RequirementsNav";
import { TraceabilityMatrix } from "@/components/TraceabilityMatrix";
import { userStories } from "@/data/userStories";
import { mapsToForRequirementId } from "@/lib/mapsToForRequirement";

const traceabilityItems = userStories.flatMap((story) =>
  story.relatedRequirements.map((requirementId) => ({
    requirementId,
    persona: story.persona,
    storyId: story.id,
    mapsTo: mapsToForRequirementId(requirementId),
    priority: story.priority,
  })),
);

export default function TraceabilityPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <RequirementsNav currentPath="/traceability" />
        </div>
        <div className="col-12">
          <div className="card section-card">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Traceability matrix</h1>
              <div className="text-muted col-lg-9">
                <p className="mb-3">
                  Connect requirements to personas, user stories, and concrete product features or
                  measurable quality targets.
                </p>
                <p className="mb-0 small">
                  Traceability shows that every requirement is backed by real user needs and
                  lands in shippable work. It helps spot gaps (stories without requirements or the
                  reverse), assess change impact when something shifts, and explain scope to
                  stakeholders and auditors without hunting through documents.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <TraceabilityMatrix items={traceabilityItems} />
        </div>
      </div>
    </main>
  );
}
