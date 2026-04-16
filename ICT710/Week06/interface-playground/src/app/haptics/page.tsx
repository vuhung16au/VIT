import { PlaygroundNav } from "@/components/PlaygroundNav";

const layers = [
  ["Gesture", "The user points, pinches, or hovers in space rather than touching a glass screen."],
  ["Mid-air haptics", "Focused ultrasound or high-frequency vibration simulates a tactile pulse against the hand."],
  ["Feedback loop", "The click sensation reassures the user that the virtual control was activated successfully."],
];

export default function HapticsPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">Emerging Interface</p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Haptic &amp; Tactile Interface</h1>
        <p className="max-w-3xl text-slate-700">
          Interaction design is no longer only visual. Mid-air haptics make touchless systems feel
          physical by simulating a click, pulse, or edge in open space.
        </p>
        <PlaygroundNav currentPath="/haptics" />
      </header>

      <section className="scene-card">
        <h2 className="text-2xl text-calm-900">How a mid-air haptic flow works</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {layers.map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-xl text-calm-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="scene-card grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-2xl text-calm-900">Why it matters</h2>
          <p className="mt-3 text-slate-700">
            Haptics close the feedback gap in gesture systems. Instead of wondering whether a hover
            target actually triggered, users feel a moment of confirmation.
          </p>
        </article>
        <article className="rounded-2xl border border-coral-100 bg-coral-100/40 p-5">
          <h2 className="text-2xl text-calm-900">Design caution</h2>
          <p className="mt-3 text-slate-700">
            Designers must avoid overusing it. If every movement causes a pulse, the interface turns
            from reassuring to distracting very quickly.
          </p>
        </article>
      </section>
    </main>
  );
}
