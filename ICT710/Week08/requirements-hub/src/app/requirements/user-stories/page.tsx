import { RequirementsNav } from "@/components/RequirementsNav";
import { UserStoryCard } from "@/components/UserStoryCard";
import { userStories } from "@/data/userStories";

export default function UserStoriesPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <RequirementsNav currentPath="/requirements/user-stories" />
        </div>
        <div className="col-12">
          <div className="card section-card">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">User stories</h1>
              <p className="text-muted mb-0">
                Each story connects a persona need to a measurable product outcome.
              </p>
            </div>
          </div>
        </div>
        {userStories.map((story) => (
          <div key={story.id} className="col-lg-6">
            <UserStoryCard story={story} />
          </div>
        ))}
      </div>
    </main>
  );
}
