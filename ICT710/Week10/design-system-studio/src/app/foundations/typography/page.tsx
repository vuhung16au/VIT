import { SystemNav } from "@/components/SystemNav";
import { TypeScale } from "@/components/TypeScale";

export default function TypographyPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <SystemNav currentPath="/foundations/typography" />
        </div>
        <div className="col-12">
          <TypeScale />
        </div>
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold">Do</h2>
              <ul className="mb-0">
                <li>Use the modular scale consistently.</li>
                <li>Keep body copy readable with 1.5 line-height.</li>
                <li>Use weight and size to guide attention.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold">Don&apos;t</h2>
              <ul className="mb-0">
                <li>Mix random font sizes without a system.</li>
                <li>Use decorative type for long body text.</li>
                <li>Reduce contrast between heading levels.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
