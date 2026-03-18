import { GestureVisualizer } from "@/components/GestureVisualizer";
import { PlaygroundNav } from "@/components/PlaygroundNav";

export default function GesturePage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">Interface Type</p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Gesture-Based Interface</h1>
        <p className="max-w-3xl text-slate-700">
          Gesture controls can support touchless interaction in accessibility or sterile contexts,
          but they demand clear visual guidance and can be tiring over time.
        </p>
        <PlaygroundNav currentPath="/gesture" />
      </header>
      <GestureVisualizer />
    </main>
  );
}
