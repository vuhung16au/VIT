import { InterfaceCard } from "@/components/InterfaceCard";
import { PlaygroundNav } from "@/components/PlaygroundNav";

const cards = [
  {
    title: "Command-Line Interface",
    description: "Fast, text-heavy, and efficient for expert users who already know the commands.",
    href: "/cli",
    pros: "Efficient for power users",
    cons: "Low discoverability",
    icon: "⌨️",
  },
  {
    title: "Traditional GUI",
    description: "Classic desktop interaction with menus, toolbars, forms, and modal dialogs.",
    href: "/gui",
    pros: "High discoverability",
    cons: "Needs precise pointing",
    icon: "🖱️",
  },
  {
    title: "Touch Interface",
    description: "Thumb-friendly mobile flow with large tap targets and swipe-based navigation.",
    href: "/touch",
    pros: "Great for casual mobile use",
    cons: "Fat-finger risk",
    icon: "📱",
  },
  {
    title: "Voice Interface",
    description: "Hands-free booking through prompts, transcript feedback, and text fallback.",
    href: "/voice",
    pros: "Hands-free interaction",
    cons: "Privacy and accuracy issues",
    icon: "🎙️",
  },
  {
    title: "Gesture Interface",
    description: "Touchless interaction for specialized settings such as accessibility or sterile workflows.",
    href: "/gesture",
    pros: "Touchless and novel",
    cons: "Physically tiring",
    icon: "🖐️",
  },
];

export default function HomePage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
          Week 06 Demo Plan
        </p>
        <h1 className="text-4xl leading-tight text-calm-900 md:text-5xl">
          Interface Playground
        </h1>
        <p className="max-w-3xl text-slate-700">
          Explore five interface types for the same task, booking a doctor appointment, and compare
          their trade-offs in efficiency, discoverability, accessibility, and context suitability.
        </p>
        <PlaygroundNav currentPath="/" />
      </header>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <InterfaceCard key={card.href} {...card} />
        ))}
      </section>
    </main>
  );
}
