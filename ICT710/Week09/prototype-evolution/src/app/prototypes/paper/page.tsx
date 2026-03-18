import { FeedbackAnnotations } from "@/components/FeedbackAnnotations";
import { PaperPrototypeViewer } from "@/components/PaperPrototypeViewer";
import { PrototypeNav } from "@/components/PrototypeNav";
import { paperNotes } from "@/data/prototypeFeedback";

export default function PaperPrototypePage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <PrototypeNav currentPath="/prototypes/paper" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase text-danger fw-semibold small mb-1">Stage 1</p>
              <h1 className="display-6 fw-bold">Paper prototype simulator</h1>
              <p className="text-muted mb-0">
                This view demonstrates Wizard of Oz testing, rough sketches, and annotation-based
                feedback before real UI code exists.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <PaperPrototypeViewer />
        </div>
        <div className="col-12">
          <FeedbackAnnotations notes={paperNotes} />
        </div>
      </div>
    </main>
  );
}
