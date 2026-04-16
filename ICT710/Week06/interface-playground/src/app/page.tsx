import { InterfaceCard } from "@/components/InterfaceCard";
import { PlaygroundNav } from "@/components/PlaygroundNav";
import { emergingInterfaces, foundationalInterfaces } from "@/data/interfaceCatalog";

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
          Compare foundational, multimodal, spatial, adaptive, and AI-native interfaces for the
          same doctor-booking task. The goal is not just to add more screens, but to understand how
          interaction design changes once interfaces become embodied, predictive, or generated.
        </p>
        <PlaygroundNav currentPath="/" />
      </header>

      <section className="scene-card space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
          Interface Taxonomy
        </p>
        <h2 className="text-3xl text-calm-900">Foundational and multimodal interfaces</h2>
        <p className="max-w-3xl text-slate-700">
          These are the interaction forms most students already recognize: command-driven systems,
          desktop windows, mobile touch, and newer voice or gesture-based control.
        </p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {foundationalInterfaces.map((card) => (
            <InterfaceCard key={card.href} {...card} />
          ))}
        </div>
      </section>

      <section className="scene-card space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
          Emerging and intelligent interfaces
        </p>
        <h2 className="text-3xl text-calm-900">Where interaction design is moving next</h2>
        <p className="max-w-3xl text-slate-700">
          Spatial computing, non-invasive BCI, mid-air haptics, smart interfaces, and generative
          UI shift interaction from a fixed screen into rooms, bodies, sensors, and AI-generated
          workflows.
        </p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {emergingInterfaces.map((card) => (
            <InterfaceCard key={card.href} {...card} />
          ))}
        </div>
      </section>

      <section className="scene-card">
        <h2 className="text-2xl text-calm-900">A useful way to categorize them</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Foundational", "CLI, GUI, and Touch establish the classic trade-off between efficiency, discoverability, and direct manipulation."],
            ["Multimodal", "Voice, Gesture, and Haptics combine multiple human senses and reduce reliance on the keyboard-screen-mouse trio."],
            ["Spatial", "VR, AR, Mixed Reality, and pass-through spatial computing bring depth, lighting, and audio into the interaction model."],
            ["Adaptive", "Smart, Zero-UI, BCI, and Generative UI shift the focus from explicit commands toward sensing, prediction, and dynamic composition."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="text-xl text-calm-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
