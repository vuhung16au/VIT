import { PriorityBadge } from "@/components/PriorityBadge";
import type { FunctionalRequirement, NonFunctionalRequirement } from "@/types/requirements";

type RequirementCardProps = {
  requirement: FunctionalRequirement | NonFunctionalRequirement;
};

export function RequirementCard({ requirement }: RequirementCardProps) {
  const isFunctional = "title" in requirement;

  return (
    <article className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
          <div>
            <div className="small text-success fw-semibold">{requirement.id}</div>
            <h2 className="h5 fw-bold mb-0">
              {isFunctional ? requirement.title : `${requirement.category} requirement`}
            </h2>
          </div>
          <PriorityBadge priority={requirement.priority} />
        </div>

        <p className="text-muted mb-3">{isFunctional ? requirement.description : requirement.statement}</p>

        {requirement.evidence && (
          <>
            <div className="small text-muted mb-1">Research evidence</div>
            <p className="mb-3 small">{requirement.evidence}</p>
          </>
        )}

        {isFunctional ? (
          <>
            <div className="small text-muted mb-1">Personas</div>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {requirement.personas.map((persona) => (
                <span key={persona} className="badge text-bg-light">
                  {persona}
                </span>
              ))}
            </div>
            <div className="small text-muted mb-1">Mapped feature</div>
            <p className="mb-3">{requirement.mappedFeature}</p>
            <div className="small text-muted mb-1">Acceptance criteria</div>
            <ul className="mb-0">
              {requirement.acceptanceCriteria.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <div className="small text-muted mb-1">Measure</div>
            <p>{requirement.measure}</p>
            <div className="small text-muted mb-1">Design impact</div>
            <p className="mb-0">{requirement.designImpact}</p>
          </>
        )}
      </div>
    </article>
  );
}
