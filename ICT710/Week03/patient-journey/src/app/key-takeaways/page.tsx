import Link from "next/link";

const takeaways = [
  {
    title: "UX is end-to-end",
    detail: "The journey map keeps focus on health outcomes, not just booking mechanics.",
  },
  {
    title: "Lower mental effort",
    detail: "Recognition-first specialist choices and step-by-step forms reduce fatigue.",
  },
  {
    title: "Design social presence",
    detail: "Waiting-room feedback and shared call context make remote care feel human.",
  },
  {
    title: "Design for emotions",
    detail: "Warm aesthetics and empathetic recovery copy reduce anxiety during failure states.",
  },
];

const prompts = [
  "Which screen best supports user confidence, and why?",
  "Where does the interface reduce cognitive load most effectively?",
  "How would accessibility improvements change this experience?",
  "What would you redesign first for older adults?",
];

export default function KeyTakeawaysPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-calm-600">Teaching Resource</p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Key Takeaways</h1>
        <p className="max-w-3xl text-slate-700">
          Use this page as a lecture handout for discussing what the patient-journey interface demonstrates about
          interaction design in healthcare.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Back to Home
          </Link>
          <Link
            href="/concepts"
            className="rounded-xl bg-calm-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-calm-900"
          >
            View Concept Mapping
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {takeaways.map((item) => (
          <article key={item.title} className="scene-card">
            <h2 className="text-2xl text-calm-900">{item.title}</h2>
            <p className="mt-2 text-slate-700">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="scene-card">
        <h2 className="text-2xl text-calm-900">Discussion Prompts</h2>
        <ul className="mt-4 space-y-3">
          {prompts.map((prompt, idx) => (
            <li key={prompt} className="rounded-xl border border-sky-100 bg-white p-3 text-slate-700">
              <span className="mr-2 font-semibold text-calm-600">{idx + 1}.</span>
              {prompt}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
