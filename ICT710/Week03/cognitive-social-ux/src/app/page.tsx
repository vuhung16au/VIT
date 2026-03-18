import Link from "next/link";

import { JourneyNav } from "@/components/JourneyNav";
import { SectionCard } from "@/components/SectionCard";

export default function HomePage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
          Week 03 Demo Plan
        </p>
        <h1 className="text-4xl leading-tight text-calm-900 md:text-5xl">
          User Experience Foundations
        </h1>
        <p className="max-w-3xl text-slate-700">
          This project explores three UX lenses: cognitive, social, and emotional. It finishes with
          a simple A/B testing simulator to show how design improvements can be measured.
        </p>
        <JourneyNav currentPath="/" />
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <SectionCard
          title="Cognitive UX"
          description="Attention, memory, and learning patterns shape how users process interfaces."
          href="/cognitive-ux"
          icon="🧠"
        />
        <SectionCard
          title="Trust and Social UX"
          description="Healthcare products must build confidence and support family-centered usage."
          href="/social-emotional/trust"
          icon="🤝"
        />
        <SectionCard
          title="A/B Testing"
          description="Compare two design variants and track which one performs better."
          href="/ab-testing"
          icon="🧪"
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="scene-card">
          <h2 className="mb-3 text-3xl text-calm-900">What Students Should Notice</h2>
          <ul className="space-y-3 text-slate-700">
            <li>How visual hierarchy helps users read quickly.</li>
            <li>Why recognition patterns reduce cognitive load.</li>
            <li>How progressive disclosure keeps forms manageable.</li>
            <li>Which cues make healthcare products feel trustworthy.</li>
            <li>How A/B testing turns design ideas into measurable experiments.</li>
          </ul>
        </article>

        <aside className="scene-card space-y-4">
          <h2 className="text-2xl text-calm-900">Project Notes</h2>
          <p className="text-sm text-slate-700">
            The demos are intentionally simple and focused on teaching UX principles rather than
            full backend workflows.
          </p>
          <Link
            href="/docs"
            className="hidden"
          >
            Hidden placeholder
          </Link>
          <Link
            href="/key-takeaways"
            className="inline-flex items-center justify-center rounded-xl bg-calm-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-calm-900"
          >
            View key takeaways
          </Link>
        </aside>
      </section>
    </main>
  );
}
