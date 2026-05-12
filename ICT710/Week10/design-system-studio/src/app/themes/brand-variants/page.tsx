import { SystemNav } from "@/components/SystemNav";

const variants = [
  {
    name: "Clinical calm",
    description: "A careful, high-trust language for healthcare and professional services.",
    cues: ["Serif heading for authority", "Cool blue palette", "Structured spacing", "Gentle rounded corners"],
    style: {
      ["--theme-surface" as string]: "#f8fbff",
      ["--theme-text" as string]: "#0f172a",
      ["--theme-primary" as string]: "#2563eb",
      ["--theme-accent" as string]: "#0891b2",
      ["--theme-heading" as string]: '"Georgia", "Times New Roman", serif',
      ["--theme-body" as string]: '"Garamond", "Times New Roman", serif',
      ["--theme-radius" as string]: "24px",
    },
  },
  {
    name: "Warm welcome",
    description: "A friendlier language for family wellness, onboarding, or community care.",
    cues: ["Softer coral and gold accents", "Rounder surfaces", "Warmer copy tone", "More inviting contrast"],
    style: {
      ["--theme-surface" as string]: "#fff9f2",
      ["--theme-text" as string]: "#3f2f2f",
      ["--theme-primary" as string]: "#ea580c",
      ["--theme-accent" as string]: "#d97706",
      ["--theme-heading" as string]: '"Trebuchet MS", "Gill Sans", sans-serif',
      ["--theme-body" as string]: '"Trebuchet MS", "Gill Sans", sans-serif',
      ["--theme-radius" as string]: "32px",
    },
  },
];

export default function BrandVariantsPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <SystemNav currentPath="/themes/brand-variants" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase fw-semibold small text-primary mb-2">Theme layer</p>
              <h1 className="display-6 fw-bold">Brand variants</h1>
              <p className="text-muted col-lg-8 mb-0">
                Both examples use the same information structure. What changes is the expression:
                type, color, curvature, and tone. That is design language in practice.
              </p>
            </div>
          </div>
        </div>

        {variants.map((variant) => (
          <div key={variant.name} className="col-xl-6">
            <section className="theme-card h-100" style={variant.style}>
              <div className="theme-card__hero mb-4">
                <p className="text-uppercase small fw-semibold mb-2 opacity-75">Same feature, new voice</p>
                <h2 className="h1 fw-bold mb-2">{variant.name}</h2>
                <p className="mb-0 opacity-75">{variant.description}</p>
              </div>

              <div className="theme-card__panel p-4 mb-4">
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="theme-card__pill">10:30 AM</span>
                  <span className="theme-card__pill">Follow-up visit</span>
                  <span className="theme-card__pill">1 parent attending</span>
                </div>
                <h3 className="h4 fw-bold">Oliver Tran with Dr Patel</h3>
                <p className="mb-3">
                  The layout is identical across both cards. Only the language system changes the
                  emotional read of the interface.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <button className="theme-card__button is-primary">Confirm booking</button>
                  <button className="theme-card__button is-secondary">Reschedule</button>
                </div>
              </div>

              <div>
                <div className="small text-uppercase fw-semibold mb-2">Language cues</div>
                <ul className="mb-0">
                  {variant.cues.map((cue) => (
                    <li key={cue}>{cue}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        ))}

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold">Teaching cues</h2>
              <ul className="mb-0">
                <li>The architecture stays the same while the personality shifts.</li>
                <li>Students can discuss which variables affect trust, warmth, clarity, and energy.</li>
                <li>This is a simple way to distinguish design language from mere page decoration.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
