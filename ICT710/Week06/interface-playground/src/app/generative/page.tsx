import { PlaygroundNav } from "@/components/PlaygroundNav";

const guardrails = [
  "The generated interface still needs a stable information hierarchy so users know where to look.",
  "AI-generated layouts must preserve accessibility semantics, keyboard order, labels, and contrast.",
  "High-risk actions need reviewable states rather than hidden automatic decisions.",
  "Users should understand why the interface is shaped this way and be able to reset to a standard view.",
];

export default function GenerativePage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">AI-native Interface</p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Generative UI</h1>
        <p className="max-w-3xl text-slate-700">
          Generative or liquid interfaces do not rely on one fixed screen. Instead, AI constructs a
          custom interface at runtime based on the user&apos;s intent and context.
        </p>
        <PlaygroundNav currentPath="/generative" />
      </header>

      <section className="scene-card grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl text-calm-900">What changes from classic UI design?</h2>
          <p className="mt-3 text-slate-700">
            In a traditional interface, a designer pre-builds every screen. In a generative
            interface, the system can assemble a bespoke comparison table, filter panel, or booking
            wizard based on the request.
          </p>
          <p className="mt-3 text-slate-700">
            Example: “Help me compare these three medical insurance plans.” The interface might
            generate a side-by-side table with the differences already highlighted rather than
            forcing the user into a static navigation tree.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
            Design shift
          </p>
          <p className="mt-3 text-sm text-slate-700">
            The designer moves from drawing every state to defining rules, constraints, tone,
            priorities, and safe fallback patterns.
          </p>
        </div>
      </section>

      <section className="scene-card">
        <h2 className="text-2xl text-calm-900">Guardrails matter</h2>
        <div className="mt-4 space-y-3">
          {guardrails.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
