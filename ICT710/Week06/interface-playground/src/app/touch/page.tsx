import { PlaygroundNav } from "@/components/PlaygroundNav";
import { TouchCards } from "@/components/TouchCards";

export default function TouchPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">Interface Type</p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Touch-Optimized Interface</h1>
        <p className="max-w-3xl text-slate-700">
          Touch interfaces work well for mobile contexts when controls are large, direct, and
          thumb-friendly.
        </p>
        <PlaygroundNav currentPath="/touch" />
      </header>
      <TouchCards />
    </main>
  );
}
