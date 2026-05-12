import { SystemNav } from "@/components/SystemNav";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const banners = [
  {
    title: "Appointment confirmed",
    body: "A confirmation state should feel calm, clear, and actionable without overwhelming the user.",
    accent: "var(--ds-success)",
    icon: "✓",
    action: "View details",
  },
  {
    title: "Profile needs attention",
    body: "Warning states should explain what is incomplete and what the user can do next.",
    accent: "var(--ds-warning)",
    icon: "!",
    action: "Complete profile",
  },
  {
    title: "Payment could not be processed",
    body: "Error states should preserve trust with plain language, visible recovery, and no blame.",
    accent: "var(--ds-error)",
    icon: "×",
    action: "Try again",
  },
];

export default function FeedbackPatternsPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <SystemNav currentPath="/patterns/feedback" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase fw-semibold small text-primary mb-2">Pattern layer</p>
              <h1 className="display-6 fw-bold">Feedback patterns</h1>
              <p className="text-muted col-lg-8 mb-0">
                Design language becomes visible when the interface responds. These examples show
                how tone, state, spacing, and action work together during success, warning, error,
                and empty moments.
              </p>
            </div>
          </div>
        </div>

        {banners.map((banner) => (
          <div key={banner.title} className="col-12">
            <div className="feedback-banner p-4 d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center" style={{ ["--feedback-accent" as string]: banner.accent }}>
              <div className="feedback-banner__icon flex-shrink-0">{banner.icon}</div>
              <div className="flex-grow-1">
                <h2 className="h4 fw-bold mb-1">{banner.title}</h2>
                <p className="mb-0 text-muted">{banner.body}</p>
              </div>
              <Button variant={banner.accent === "var(--ds-error)" ? "danger" : "primary"}>{banner.action}</Button>
            </div>
          </div>
        ))}

        <div className="col-lg-7">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 p-md-5">
              <h2 className="h3 fw-bold mb-3">Validation and recovery</h2>
              <p className="text-muted">
                A system should show trouble at the right level. The field is specific, the helper
                text is direct, and the screen still offers a safe next step.
              </p>
              <div className="row g-3 mt-1">
                <div className="col-md-6">
                  <label className="form-label">Email address</label>
                  <Input defaultValue="jordan.example.com" aria-invalid="true" className="form-control border-danger" />
                  <div className="text-danger small mt-2">Enter a valid email address with an @ symbol.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone number</label>
                  <Input placeholder="+61 4xx xxx xxx" />
                  <div className="text-muted small mt-2">Optional, but useful for urgent appointment updates.</div>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <Button>Save changes</Button>
                <Button variant="secondary">Review later</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 p-md-5">
              <h2 className="h3 fw-bold mb-3">Empty state</h2>
              <div className="border rounded-4 p-4 bg-light">
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="state-chip">No saved doctors</span>
                  <span className="state-chip">Actionable next step</span>
                </div>
                <h3 className="h5 fw-bold">Your shortlist is still empty</h3>
                <p className="text-muted">
                  Instead of leaving blank space, use the moment to orient the user and invite the
                  next action in the same voice as the rest of the product.
                </p>
                <Button>Browse specialists</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold">Teaching cues</h2>
              <ul className="mb-0">
                <li>Feedback patterns carry the personality of the product, not just its status colors.</li>
                <li>Each state should combine visual emphasis, plain-language copy, and a sensible action.</li>
                <li>Errors should be recoverable, warnings should be specific, and empty states should teach.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
