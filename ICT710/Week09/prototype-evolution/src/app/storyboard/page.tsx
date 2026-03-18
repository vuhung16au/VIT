import { PrototypeNav } from "@/components/PrototypeNav";
import { storyboardScenes } from "@/data/prototypeFeedback";

export default function StoryboardPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <PrototypeNav currentPath="/storyboard" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Storyboarding the booking journey</h1>
              <p className="text-muted mb-0">
                This comic-strip style sequence shows context, emotion, and decisions beyond the UI itself.
              </p>
            </div>
          </div>
        </div>
        {storyboardScenes.map((scene, index) => (
          <div key={scene.title} className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="small text-danger fw-semibold mb-2">Scene {index + 1}</div>
                <div className="rounded-4 bg-light p-4 mb-3" style={{ minHeight: "160px" }}>
                  <div className="display-6">{"🙂"}</div>
                  <div className="small text-muted mt-2">Mood: {scene.mood}</div>
                </div>
                <h2 className="h5 fw-bold">{scene.title}</h2>
                <p className="mb-0 text-muted">{scene.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
