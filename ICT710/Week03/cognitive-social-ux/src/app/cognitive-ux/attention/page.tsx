import { JourneyNav } from "@/components/JourneyNav";

export default function AttentionPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
          Cognitive UX
        </p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Attention: Visual Hierarchy</h1>
        <p className="max-w-3xl text-slate-700">
          Compare a noisy appointment card with a clearer version that uses size, grouping, and
          contrast to guide the eye naturally.
        </p>
        <JourneyNav currentPath="/cognitive-ux" />
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <article className="scene-card">
          <h2 className="mb-4 text-xl font-bold text-red-600">Poor Visual Hierarchy</h2>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="mb-2 text-base">Book Appointment with Dr. Smith</p>
            <p className="mb-2 text-base">Cardiology Specialist</p>
            <p className="mb-2 text-base">Monday, March 10, 2025</p>
            <p className="mb-2 text-base">2:00 PM - 3:00 PM</p>
            <p className="mb-2 text-base">Video Consultation</p>
            <p className="mb-4 text-base">$150 consultation fee</p>
            <button className="rounded-lg bg-slate-400 px-4 py-2 text-base text-white">
              Confirm
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Problem: every line has the same weight, so important details are buried and the
            primary action does not stand out.
          </p>
        </article>

        <article className="scene-card">
          <h2 className="mb-4 text-xl font-bold text-green-600">Strong Visual Hierarchy</h2>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Dr. Sarah Smith</h3>
            <p className="mb-4 text-sm text-slate-500">Cardiology Specialist</p>

            <div className="mb-4 rounded-xl bg-calm-50 p-4">
              <p className="text-lg font-semibold text-calm-900">Monday, March 10, 2025</p>
              <p className="text-xl font-bold text-calm-600">2:00 PM - 3:00 PM</p>
            </div>

            <div className="mb-5 flex items-center gap-2 text-sm text-slate-700">
              <span>🎥 Video Consultation</span>
              <span className="text-slate-300">•</span>
              <span className="font-semibold">$150</span>
            </div>

            <button className="w-full rounded-xl bg-calm-600 py-4 text-lg font-semibold text-white transition-colors hover:bg-calm-900">
              Confirm Appointment
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Solution: the doctor name leads, date and time sit in a highlighted block, and the
            action button is visually dominant.
          </p>
        </article>
      </section>

      <section className="scene-card">
        <h2 className="mb-3 text-2xl text-calm-900">Attention Design Principles</h2>
        <ul className="space-y-2 text-slate-700">
          <li>Size communicates priority.</li>
          <li>Contrast attracts attention and separates key information.</li>
          <li>Position influences reading order and scan behavior.</li>
          <li>White space isolates what matters most.</li>
          <li>Motion should be used sparingly to highlight, not distract.</li>
        </ul>
      </section>
    </main>
  );
}
