import Link from "next/link";

import { AppNav } from "@/components/AppNav";

const versions = [
  {
    title: "Bad Version",
    description: "Discover Phase: problems identified through critique",
    href: "/bad-version",
    color: "border-red-500 hover:bg-red-50",
    metrics: "15% completion rate",
  },
  {
    title: "Version A: Multi-Step",
    description: "Develop Phase: progressive disclosure and guided flow",
    href: "/version-a-multistep",
    color: "border-indigo-500 hover:bg-indigo-50",
    metrics: "72% completion rate (predicted)",
  },
  {
    title: "Version B: Single-Page",
    description: "Develop Phase: accordion sections and faster overview",
    href: "/version-b-singlepage",
    color: "border-emerald-500 hover:bg-emerald-50",
    metrics: "68% completion rate (predicted)",
  },
];

const phases = [
  { phase: "Discover", icon: "🔍", description: "Analyze the bad version and identify pain points." },
  { phase: "Define", icon: "🎯", description: "Turn observations into a clear problem statement." },
  { phase: "Develop", icon: "💡", description: "Create multiple alternatives before choosing one." },
  { phase: "Deliver", icon: "🚀", description: "Compare outcomes and decide using evidence." },
];

export default function HomePage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
          Week 04 Demo Plan
        </p>
        <h1 className="text-4xl text-slate-900 md:text-5xl">
          Doctor Booking App Design Iterations
        </h1>
        <p className="max-w-3xl text-slate-700">
          This project applies the Double Diamond framework to the first working doctor booking app:
          discover problems, define the challenge, develop alternatives, and deliver a tested
          recommendation.
        </p>
        <AppNav currentPath="/" />
      </header>

      <section className="grid gap-8 md:grid-cols-3">
        {versions.map((version) => (
          <Link
            key={version.href}
            href={version.href}
            className={`block rounded-3xl border-l-4 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${version.color}`}
          >
            <h2 className="mb-2 text-xl font-bold text-slate-900">{version.title}</h2>
            <p className="mb-4 text-slate-600">{version.description}</p>
            <p className="text-sm font-semibold text-slate-700">{version.metrics}</p>
          </Link>
        ))}
      </section>

      <section className="scene-card">
        <h2 className="mb-6 text-2xl text-slate-900">Double Diamond Process</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {phases.map((phase) => (
            <article key={phase.phase} className="text-center">
              <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-full bg-indigo-100 text-2xl">
                {phase.icon}
              </div>
              <h3 className="font-bold text-slate-900">{phase.phase}</h3>
              <p className="mt-1 text-sm text-slate-600">{phase.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="scene-card">
        <h2 className="mb-4 text-2xl text-slate-900">Supporting Documents</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">Discover</p>
            <p className="mt-2 text-sm text-slate-600">See `docs/DISCOVER-FINDINGS.md`.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">Define</p>
            <p className="mt-2 text-sm text-slate-600">See `docs/DEFINE-PROBLEM.md`.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">Deliver</p>
            <p className="mt-2 text-sm text-slate-600">See `docs/DELIVER-DECISIONS.md`.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
