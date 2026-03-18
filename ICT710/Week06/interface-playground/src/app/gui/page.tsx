import { GUIWindow } from "@/components/GUIWindow";
import { PlaygroundNav } from "@/components/PlaygroundNav";

export default function GUIPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">Interface Type</p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Traditional GUI</h1>
        <p className="max-w-3xl text-slate-700">
          GUI patterns are familiar, discoverable, and visually rich, which helps new users see
          their options without remembering commands.
        </p>
        <PlaygroundNav currentPath="/gui" />
      </header>
      <GUIWindow />
    </main>
  );
}
