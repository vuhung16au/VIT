import { PlaygroundNav } from "@/components/PlaygroundNav";
import { VoiceChat } from "@/components/VoiceChat";

export default function VoicePage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">Interface Type</p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Voice User Interface</h1>
        <p className="max-w-3xl text-slate-700">
          Voice helps with eyes-free or hands-free situations, but it needs strong transcript
          feedback and fallback options when recognition fails.
        </p>
        <PlaygroundNav currentPath="/voice" />
      </header>
      <VoiceChat />
    </main>
  );
}
