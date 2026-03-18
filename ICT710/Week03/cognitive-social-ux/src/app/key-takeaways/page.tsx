import { JourneyNav } from "@/components/JourneyNav";

const takeaways = [
  "Visual hierarchy determines what users notice first.",
  "Recognition is easier than recall, especially under stress.",
  "Progressive disclosure helps users learn complex flows step by step.",
  "Trust matters deeply in healthcare and is communicated through details and tone.",
  "Family-centered features are part of social UX, not just added functionality.",
  "A/B testing helps validate design choices with behavior, not just opinion.",
];

export default function KeyTakeawaysPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
          Reflection
        </p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Key Takeaways</h1>
        <p className="max-w-3xl text-slate-700">
          These are the main UX lessons students should walk away with after exploring the Week 03
          demos.
        </p>
        <JourneyNav currentPath="/" />
      </header>

      <section className="scene-card">
        <ul className="space-y-4">
          {takeaways.map((item) => (
            <li key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
