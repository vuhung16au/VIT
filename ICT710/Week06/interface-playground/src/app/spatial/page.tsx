import { PlaygroundNav } from "@/components/PlaygroundNav";

const modes = [
  {
    title: "Virtual Reality",
    summary: "A fully immersive digital environment replaces the physical world and gives the designer complete control over context.",
  },
  {
    title: "Augmented Reality",
    summary: "Digital overlays sit on top of the physical world, so the user still treats their room as primary and the interface as assistance.",
  },
  {
    title: "Mixed Reality",
    summary: "Digital objects behave as if they exist in the room, anchored to surfaces and responding to movement, depth, and occlusion.",
  },
];

const challenges = [
  "Depth and reachability: buttons cannot float at arbitrary distances if they should feel comfortably clickable.",
  "Lighting and materiality: virtual cards look fake if they ignore the brightness and shadows of the room.",
  "Spatial audio: sound should come from the object the user is interacting with, not from a generic stereo channel.",
  "Attention safety: immersive systems must avoid burying urgent real-world cues such as people walking nearby or time-sensitive alerts.",
];

export default function SpatialPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">Emerging Interface</p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Spatial Computing</h1>
        <p className="max-w-3xl text-slate-700">
          Spatial computing is the modern umbrella for VR, AR, and mixed reality. Instead of a flat
          screen, the interface lives around the user and must feel physically believable in the
          room.
        </p>
        <PlaygroundNav currentPath="/spatial" />
      </header>

      <section className="scene-card">
        <h2 className="text-2xl text-calm-900">VR, AR, and Mixed Reality are the core modes</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {modes.map((mode) => (
            <article key={mode.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-xl text-calm-900">{mode.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{mode.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="scene-card grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-2xl text-calm-900">Why “spatial computing” matters in 2026</h2>
          <p className="mt-3 text-slate-700">
            Devices like Apple Vision Pro and the pass-through evolution of Meta Quest changed the
            conversation. The interaction model is no longer only “immersive headset” but “digital
            objects anchored into the real environment.”
          </p>
          <p className="mt-3 text-slate-700">
            For a booking app, that could mean a doctor shortlist pinned beside the kitchen bench,
            a floating timeline attached to the wall, or appointment reminders attached to a physical
            calendar board in the room.
          </p>
        </div>
        <div className="rounded-3xl border border-calm-100 bg-calm-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
            IxD Focus
          </p>
          <p className="mt-3 text-sm text-slate-700">
            The challenge is not only layout, but physical plausibility: distance, angle, lighting,
            comfort, and motion all become part of the interface.
          </p>
        </div>
      </section>

      <section className="scene-card">
        <h2 className="text-2xl text-calm-900">Interaction design challenges</h2>
        <div className="mt-4 space-y-3">
          {challenges.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
