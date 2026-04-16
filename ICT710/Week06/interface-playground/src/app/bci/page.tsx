import { PlaygroundNav } from "@/components/PlaygroundNav";

const opportunities = [
  "Accessibility: users with limited mobility can trigger commands without a mouse, keyboard, or gesture.",
  "Reduced physical effort: select, scroll, and confirm become lightweight intent signals rather than body movements.",
  "Attention-aware flows: the system can detect focus, hesitation, or overload and simplify the interface accordingly.",
];

const risks = [
  "Signal quality is noisy, so confidence feedback and undo paths are essential.",
  "BCI needs strong consent and privacy practices because neural data feels deeply personal.",
  "The user must always know whether the interface is reading deliberate intent or incidental mental activity.",
];

export default function BCIPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">Emerging Interface</p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Brain-Computer Interface</h1>
        <p className="max-w-3xl text-slate-700">
          Non-invasive BCI uses headbands, earbuds, or other EEG-like sensors to detect neural
          patterns and convert them into commands such as select, scroll, or focus.
        </p>
        <PlaygroundNav currentPath="/bci" />
      </header>

      <section className="scene-card grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-2xl text-calm-900">Why it matters for ICT710</h2>
          <p className="mt-3 text-slate-700">
            BCI represents a huge leap for accessibility. It reframes interaction design around
            intent detection rather than muscle movement, which makes it one of the most important
            future-facing examples for inclusive design.
          </p>
        </article>
        <article className="rounded-2xl border border-calm-100 bg-calm-50 p-5">
          <h2 className="text-2xl text-calm-900">Example booking flow</h2>
          <p className="mt-3 text-slate-700">
            A patient highlights a doctor card by gaze and confirms with a neural “select” signal,
            then uses a lightweight “next” intent to move through appointment slots without lifting
            a hand.
          </p>
        </article>
      </section>

      <section className="scene-card">
        <h2 className="text-2xl text-calm-900">Design opportunities</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {opportunities.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="scene-card">
        <h2 className="text-2xl text-calm-900">Key IxD risks</h2>
        <div className="mt-4 space-y-3">
          {risks.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
