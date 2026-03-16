import Link from "next/link";

const concepts = [
  {
    title: "Understanding User Experience",
    bullet: "The home journey map communicates progress across care stages.",
    bullet2: "The system reflects the patient goal: recover, not merely schedule.",
    scene: "/",
    sceneLabel: "Open Scene 1",
  },
  {
    title: "Cognitive Aspects",
    bullet: "Icon-first specialties support recognition over recall.",
    bullet2: "Progressive disclosure splits booking into manageable decisions.",
    scene: "/scene-2",
    sceneLabel: "Open Scene 2",
  },
  {
    title: "Social Interaction",
    bullet: "Typing indicators signal live attention from the doctor.",
    bullet2: "Shared visual workspace enables co-presence during consultation.",
    scene: "/scene-3",
    sceneLabel: "Open Scene 3",
  },
  {
    title: "Emotional Interaction",
    bullet: "Calm palette and whitespace reduce stress.",
    bullet2: "Empathetic error copy offers reassurance and immediate recovery.",
    scene: "/scene-4",
    sceneLabel: "Open Scene 4",
  },
];

export default function ConceptsPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-calm-600">Design Explanation</p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">How Key Concepts Are Illustrated</h1>
        <p className="max-w-3xl text-slate-700">
          This guide maps IxD/UX concepts directly to the interfaces in the Patient Journey demo so students can connect
          theory to visible UI decisions.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Back to Home
          </Link>
          <Link
            href="/key-takeaways"
            className="rounded-xl bg-calm-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-calm-900"
          >
            View Key Takeaways
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {concepts.map((item) => (
          <article key={item.title} className="scene-card">
            <h2 className="text-2xl text-calm-900">{item.title}</h2>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="rounded-lg border border-sky-100 bg-white p-3">{item.bullet}</li>
              <li className="rounded-lg border border-sky-100 bg-white p-3">{item.bullet2}</li>
            </ul>
            <Link
              href={item.scene}
              className="mt-4 inline-flex rounded-xl border border-calm-400 px-4 py-2 text-sm font-semibold text-calm-600 transition hover:bg-calm-50"
            >
              {item.sceneLabel}
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
