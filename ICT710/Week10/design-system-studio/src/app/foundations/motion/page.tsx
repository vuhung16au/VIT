import { SystemNav } from "@/components/SystemNav";
import { motionTokens } from "@/lib/designTokens";

export default function MotionPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <SystemNav currentPath="/foundations/motion" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Motion principles</h1>
              <p className="text-muted mb-0">
                Motion should provide feedback, guide attention, and respect reduced-motion preferences.
              </p>
            </div>
          </div>
        </div>
        {motionTokens.map((token) => (
          <div key={token.name} className="col-md-4">
            <div className="card border-0 shadow-sm h-100 motion-demo">
              <div className="card-body p-4">
                <div className="small text-primary fw-semibold">{token.duration}</div>
                <h2 className="h4 fw-bold">{token.name}</h2>
                <p className="mb-0 text-muted">{token.use}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold">Good motion</h2>
              <ul className="mb-0">
                <li>Button hover lift</li>
                <li>Modal fade and slide</li>
                <li>Form success confirmation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold">Overkill</h2>
              <ul className="mb-0">
                <li>Decorative animation without meaning</li>
                <li>Long delays between state changes</li>
                <li>Motion that conflicts with accessibility needs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
