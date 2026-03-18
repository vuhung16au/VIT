import { JourneyNav } from "@/components/JourneyNav";
import { SectionCard } from "@/components/SectionCard";

export default function CognitiveUXPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
          Week 03 Demo 1
        </p>
        <h1 className="text-4xl leading-tight text-calm-900 md:text-5xl">Cognitive UX Principles</h1>
        <p className="max-w-3xl text-slate-700">
          Explore how attention, memory, and learning patterns affect healthcare interfaces and
          how thoughtful design reduces cognitive strain.
        </p>
        <JourneyNav currentPath="/cognitive-ux" />
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <SectionCard
          title="Attention"
          description="Visual hierarchy guides user focus to the right information first."
          href="/cognitive-ux/attention"
          icon="👁️"
        />
        <SectionCard
          title="Memory"
          description="Recognition is easier than recall, especially under stress."
          href="/cognitive-ux/memory"
          icon="🧠"
        />
        <SectionCard
          title="Learning"
          description="Progressive disclosure reveals complexity only when it is needed."
          href="/cognitive-ux/learning"
          icon="📚"
        />
      </section>
    </main>
  );
}
