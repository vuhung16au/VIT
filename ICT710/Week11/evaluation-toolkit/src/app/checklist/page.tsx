import { ChecklistItem } from "@/components/ChecklistItem";
import { EvaluationNav } from "@/components/EvaluationNav";
import { checklistSections } from "@/data/sampleFindings";

export default function ChecklistPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <EvaluationNav currentPath="/checklist" />
        </div>
        {checklistSections.map((section) => (
          <div key={section.title} className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h2 className="h4 fw-bold mb-4">{section.title}</h2>
                <div className="d-grid gap-3">
                  {section.items.map((item) => (
                    <ChecklistItem key={item} label={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
