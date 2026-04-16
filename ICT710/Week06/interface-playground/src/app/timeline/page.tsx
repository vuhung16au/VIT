import { PlaygroundNav } from "@/components/PlaygroundNav";

const timeline = [
  { era: "1960s", label: "CLI", detail: "Machine-centric but powerful for experts." },
  { era: "1980s", label: "WIMP / GUI", detail: "Windows, menus, and pointers improved discoverability." },
  { era: "2000s", label: "Touch", detail: "Mobile-first interaction made direct manipulation mainstream." },
  { era: "2010s", label: "Voice", detail: "Assistants enabled hands-free interaction in daily life." },
  { era: "2020s", label: "Spatial Computing", detail: "VR, AR, and mixed reality bring depth, pass-through video, and room awareness into IxD." },
  { era: "2020s", label: "Haptics / BCI", detail: "Interfaces are becoming tactile without touch and neural without muscle movement." },
  { era: "2020s+", label: "Smart / Generative", detail: "Context-aware and AI-generated interfaces shift from explicit input to adaptive orchestration." },
];

const matrix = [
  ["CLI", "High", "High", "Low", "Low", "Low"],
  ["GUI", "Medium", "Medium", "High", "Medium", "Office / desktop"],
  ["Touch", "Low", "Medium", "High", "Medium", "Mobile / casual"],
  ["Voice", "Low", "Medium", "Medium", "High", "Driving / hands-free"],
  ["Gesture", "Medium", "Low", "Low", "High", "Touchless / niche"],
  ["Spatial", "High", "Medium", "Medium", "Medium", "Immersive / room-scale"],
  ["BCI", "High", "Low", "Low", "Very high", "Accessibility / low-mobility"],
  ["Haptics", "Medium", "Medium", "Medium", "High", "Touchless + feedback"],
  ["Smart", "Low", "High", "Low", "Medium", "Context-aware automation"],
  ["Generative", "Medium", "Medium", "Medium", "Medium", "Task-specific adaptive workflows"],
];

export default function TimelinePage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">Demo 2</p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Interface Evolution Timeline</h1>
        <p className="max-w-3xl text-slate-700">
          Interfaces have moved from machine-centric commands toward human-centric, multi-modal
          systems. Older forms do not disappear, they keep serving specific contexts while newer
          ones add spatial depth, sensing, prediction, and AI-generated structure.
        </p>
        <PlaygroundNav currentPath="/timeline" />
      </header>

      <section className="scene-card">
        <div className="grid gap-4 md:grid-cols-5">
          {timeline.map((item) => (
            <article key={item.era} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-calm-600">{item.era}</p>
              <h2 className="mt-2 text-xl text-calm-900">{item.label}</h2>
              <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="scene-card">
        <h2 className="mb-4 text-2xl text-calm-900">Comparison Matrix</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="px-3 py-2">Interface</th>
                <th className="px-3 py-2">Learning curve</th>
                <th className="px-3 py-2">Efficiency</th>
                <th className="px-3 py-2">Discoverability</th>
                <th className="px-3 py-2">Accessibility support</th>
                <th className="px-3 py-2">Best context</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr key={row[0]} className="border-b border-slate-100">
                  {row.map((cell) => (
                    <td key={cell} className="px-3 py-3 text-slate-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
