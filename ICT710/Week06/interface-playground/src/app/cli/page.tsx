import { CLITerminal } from "@/components/CLITerminal";
import { PlaygroundNav } from "@/components/PlaygroundNav";

export default function CLIPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">Interface Type</p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Command-Line Interface</h1>
        <p className="max-w-3xl text-slate-700">
          A CLI is efficient once users learn the commands, but the gulf of execution is high for
          beginners because they must know what to type.
        </p>
        <PlaygroundNav currentPath="/cli" />
      </header>
      <CLITerminal />
    </main>
  );
}
