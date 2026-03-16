import { JourneyNav } from "@/components/JourneyNav";
import Link from "next/link";

export default function SceneFourPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">The Patient Journey</p>
        <h1 className="text-4xl leading-tight text-calm-900 md:text-5xl">Scene 4: Emotional Design for Trust</h1>
        <p className="max-w-3xl text-slate-700">
          Warm visuals, reassuring microcopy, and a humanized doctor profile work together to lower anxiety and preserve
          trust when something goes wrong.
        </p>
        <JourneyNav currentStep={4} />
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="scene-card space-y-4">
          <h2 className="text-2xl text-calm-900">Humanized Doctor Profile</h2>
          <div className="rounded-2xl border border-sky-100 bg-white p-4">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-calm-100 text-2xl">🙂</div>
              <div>
                <p className="text-lg font-semibold text-slate-900">Dr. Emma Smith</p>
                <p className="text-sm text-slate-600">ENT Specialist • 12 years experience</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-700">
              &quot;I focus on calm, clear communication so patients always understand what is happening and what to do next.&quot;
            </p>
          </div>

          <div className="rounded-2xl border border-mint-100 bg-mint-100/50 p-4">
            <p className="text-sm font-semibold text-mint-700">Post-consultation action</p>
            <button
              type="button"
              className="mt-3 inline-flex rounded-xl bg-mint-700 px-4 py-2 font-semibold text-white transition hover:bg-mint-400"
            >
              Download Prescription (PDF)
            </button>
          </div>
        </article>

        <article className="scene-card space-y-4">
          <h2 className="text-2xl text-calm-900">Empathetic Error Handling</h2>
          <div className="rounded-2xl border border-coral-100 bg-coral-100/55 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-coral-500">Connection Update</p>
            <p className="mt-2 text-slate-800">
              We lost connection, but do not worry. Dr. Smith is still waiting for you. Reconnect below and you will
              return to the same consultation room.
            </p>
            <button
              type="button"
              className="mt-4 rounded-xl bg-coral-500 px-4 py-2 font-semibold text-white transition hover:brightness-95"
            >
              Reconnect to Consultation
            </button>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Why this works</p>
            <p className="mt-1">Gentle wording acknowledges stress and gives immediate, clear recovery steps.</p>
          </div>

          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Restart Journey Demo
          </Link>
        </article>
      </section>
    </main>
  );
}
