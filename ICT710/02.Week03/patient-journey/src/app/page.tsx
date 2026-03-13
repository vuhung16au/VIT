import { JourneyNav } from "@/components/JourneyNav";
import Link from "next/link";

const milestones = [
  { label: "Find a Doctor", status: "current", detail: "Symptoms recorded" },
  { label: "Video Consult", status: "upcoming", detail: "Waiting room ready" },
  { label: "Get Medicine", status: "upcoming", detail: "Prescription after call" },
];

export default function SceneOnePage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">The Patient Journey</p>
        <h1 className="text-4xl leading-tight text-calm-900 md:text-5xl">Scene 1: The Holistic Journey</h1>
        <p className="max-w-3xl text-slate-700">
          This dashboard frames healthcare as a complete journey, not a single booking action. The interface keeps the
          patient anchored to one meaningful goal: feeling better.
        </p>
        <JourneyNav currentStep={1} />
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="scene-card">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl text-calm-900">Journey Map</h2>
            <span className="rounded-full bg-mint-100 px-3 py-1 text-sm font-medium text-mint-700">Live status</span>
          </div>

          <ol className="space-y-4">
            {milestones.map((item, idx) => (
              <li key={item.label} className="rounded-2xl border border-sky-100 bg-sky-50/55 p-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 grid h-8 w-8 place-items-center rounded-full text-sm font-bold ${
                      item.status === "current" ? "bg-mint-400 text-white" : "bg-white text-calm-600"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{item.label}</p>
                    <p className="text-sm text-slate-600">{item.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <aside className="scene-card space-y-5">
          <h2 className="text-2xl text-calm-900">Patient Snapshot</h2>
          <div className="rounded-2xl border border-sky-100 bg-white p-4">
            <p className="text-sm text-slate-500">Patient</p>
            <p className="text-lg font-semibold text-slate-900">Alex Nguyen</p>
            <p className="mt-2 text-sm text-slate-600">&quot;Sore throat and mild fever for 2 days.&quot;</p>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-white p-4">
            <p className="text-sm text-slate-500">Suggested next action</p>
            <p className="text-base font-semibold text-slate-900">Select specialist based on symptoms</p>
          </div>
          <Link
            href="/scene-2"
            className="inline-flex w-full items-center justify-center rounded-xl bg-calm-600 px-4 py-3 font-semibold text-white transition hover:bg-calm-900"
          >
            Continue to Smart Booking
          </Link>
        </aside>
      </section>

      <section className="scene-card space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-calm-600">Learning Hub</p>
        <h2 className="text-3xl text-calm-900">Understand The Design Decisions</h2>
        <p className="max-w-3xl text-slate-700">
          These pages explain what students should learn from this demo and how each IxD/UX concept is represented in
          the interface.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/key-takeaways"
            className="rounded-2xl border border-sky-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-calm-400"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-calm-600">For students</p>
            <h3 className="mt-2 text-2xl text-calm-900">Key Takeaways</h3>
            <p className="mt-2 text-sm text-slate-600">A concise checklist of what to observe, critique, and discuss.</p>
          </Link>

          <Link
            href="/concepts"
            className="rounded-2xl border border-sky-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-calm-400"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-calm-600">Concept mapping</p>
            <h3 className="mt-2 text-2xl text-calm-900">How Concepts Are Illustrated</h3>
            <p className="mt-2 text-sm text-slate-600">
              Understand user experience, cognitive, social, and emotional interaction design in context.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
