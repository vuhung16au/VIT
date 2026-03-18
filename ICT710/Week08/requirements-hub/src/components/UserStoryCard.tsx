import { PriorityBadge } from "@/components/PriorityBadge";
import type { UserStory } from "@/types/requirements";

type UserStoryCardProps = {
  story: UserStory;
};

export function UserStoryCard({ story }: UserStoryCardProps) {
  return (
    <article className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
          <div>
            <div className="small text-success fw-semibold">{story.id}</div>
            <h2 className="h5 fw-bold mb-0">{story.persona}</h2>
          </div>
          <PriorityBadge priority={story.priority} />
        </div>
        <p className="mb-3">
          {story.story}, <span className="text-muted">{story.benefit}</span>
        </p>
        <div className="small text-muted mb-1">Acceptance criteria</div>
        <ul className="mb-3">
          {story.acceptanceCriteria.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="small text-muted mb-1">Related requirements</div>
        <div className="d-flex flex-wrap gap-2">
          {story.relatedRequirements.map((id) => (
            <span key={id} className="badge text-bg-light">
              {id}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
