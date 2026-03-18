import { SystemNav } from "@/components/SystemNav";
import { Card } from "@/components/ui/Card";

export default function CardsPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <SystemNav currentPath="/components/cards" />
        </div>
        <div className="col-md-6 col-lg-4">
          <Card title="Default card" subtitle="Balanced and neutral">
            <p className="mb-0">Use for general content containers and documentation sections.</p>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card title="Feature card" subtitle="More emphasis">
            <p className="mb-0">Use when you want to highlight an important pattern or example.</p>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card title="Alert card" subtitle="Contextual emphasis">
            <p className="mb-0">Use for warnings, system notes, or educational callouts.</p>
          </Card>
        </div>
      </div>
    </main>
  );
}
