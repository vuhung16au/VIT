import { RequirementsNav } from "@/components/RequirementsNav";
import { TraceabilityMatrix } from "@/components/TraceabilityMatrix";
import { functionalRequirements } from "@/data/functionalRequirements";
import { userStories } from "@/data/userStories";

const traceabilityItems = userStories.flatMap((story) =>
  story.relatedRequirements.map((requirementId) => {
    const requirement = functionalRequirements.find((item) => item.id === requirementId);

    return {
      requirementId,
      persona: story.persona,
      storyId: story.id,
      feature: requirement?.mappedFeature ?? "Quality attribute",
      priority: story.priority,
    };
  }),
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
              <p className="text-muted mb-0">
                Connect requirements to personas, user stories, and concrete product features.
              </p>
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
