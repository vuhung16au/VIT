import { PlaygroundNav } from "@/components/PlaygroundNav";

const traits = [
  {
    title: "Context-awareness",
    detail: "The interface understands where the user is, what they are doing, and what matters in that moment.",
  },
  {
    title: "Sensor-driven interaction",
    detail: "GPS, cameras, accelerometers, microphones, and biometrics replace explicit button presses as the main input source.",
  },
  {
    title: "Predictive and proactive",
    detail: "The system acts before the user asks, which is why Zero UI is often treated as a smart-interface behavior.",
  },
  {
    title: "Natural and multimodal",
    detail: "Voice, gesture, visual overlays, and notifications combine to make interaction feel more invisible.",
  },
];

export default function SmartPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">Adaptive Interface</p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Smart Interfaces &amp; Zero UI</h1>
        <p className="max-w-3xl text-slate-700">
          Smart interfaces use sensors, AI, and machine learning to sense the environment, infer
          intent, and act without waiting for a traditional click.
        </p>
        <PlaygroundNav currentPath="/smart" />
      </header>

      <section className="scene-card">
        <h2 className="text-2xl text-calm-900">The defining characteristics</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {traits.map((trait) => (
            <article key={trait.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-xl text-calm-900">{trait.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{trait.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="scene-card grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-2xl text-calm-900">Doctor-booking example</h2>
          <p className="mt-3 text-slate-700">
            A healthcare assistant sees a 9:00 AM appointment in the calendar, notices heavy
            traffic, and prompts: “Leave in 10 minutes to arrive on time.” That is Zero UI because
            the suggestion appears before the user asks for navigation help.
          </p>
        </article>
        <article className="rounded-2xl border border-calm-100 bg-calm-50 p-5">
          <h2 className="text-2xl text-calm-900">Core design question</h2>
          <p className="mt-3 text-slate-700">
            When should the system act for the user, and when should it ask first? Smart interfaces
            fail when they are technically clever but socially intrusive.
          </p>
        </article>
      </section>
    </main>
  );
}
