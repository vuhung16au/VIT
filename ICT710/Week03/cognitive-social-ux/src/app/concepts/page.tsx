import { JourneyNav } from "@/components/JourneyNav";

const concepts = [
  {
    title: "Attention",
    description: "Use hierarchy, contrast, and layout to guide focus through the interface.",
  },
  {
    title: "Memory",
    description: "Favor recognition patterns like visible lists, chips, and selectable cards.",
  },
  {
    title: "Learning",
    description: "Reveal complexity gradually so users can build confidence one step at a time.",
  },
  {
    title: "Trust",
    description: "Credentials, reviews, language, and transparency reduce uncertainty.",
  },
  {
    title: "Social UX",
    description: "Support real-world relationships such as family booking and shared decision making.",
  },
  {
    title: "Measurement",
    description: "A/B testing helps teams compare changes using real interaction data.",
  },
];

export default function ConceptsPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
          Concept Mapping
        </p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">How The Concepts Are Illustrated</h1>
        <p className="max-w-3xl text-slate-700">
          Each route in this project is mapped to a UX principle so students can connect theory
          with interface behavior.
        </p>
        <JourneyNav currentPath="/" />
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {concepts.map((concept) => (
          <article key={concept.title} className="scene-card">
            <h2 className="text-2xl text-calm-900">{concept.title}</h2>
            <p className="mt-3 text-slate-700">{concept.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
