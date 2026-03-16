import { JourneyNav } from "@/components/JourneyNav";
import Link from "next/link";

const chat = [
  { by: "System", text: "You are in the waiting room. Dr. Smith will join in ~2 min." },
  { by: "Doctor", text: "Reviewing your notes now...", typing: true },
];

export default function SceneThreePage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">The Patient Journey</p>
        <h1 className="text-4xl leading-tight text-calm-900 md:text-5xl">Scene 3: Social Interaction</h1>
        <p className="max-w-3xl text-slate-700">
          The interface builds social presence before and during the call with visible activity, conversational cues, and
          co-presence tools.
        </p>
        <JourneyNav currentStep={3} />
      </header>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="scene-card space-y-4">
          <h2 className="text-2xl text-calm-900">Waiting Room Chat</h2>
          <div className="space-y-3 rounded-2xl border border-sky-100 bg-white p-4">
            {chat.map((item, idx) => (
              <div key={`${item.by}-${idx}`} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">{item.by}</p>
                <p className="text-sm text-slate-700">{item.text}</p>
                {item.typing ? (
                  <div className="mt-2 flex gap-1">
                    <span className="h-2 w-2 animate-pulse-soft rounded-full bg-calm-400" />
                    <span className="h-2 w-2 animate-pulse-soft rounded-full bg-calm-400 [animation-delay:180ms]" />
                    <span className="h-2 w-2 animate-pulse-soft rounded-full bg-calm-400 [animation-delay:320ms]" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600">Typing indicators signal human attention and reduce uncertainty.</p>
        </article>

        <article className="scene-card space-y-4">
          <h2 className="text-2xl text-calm-900">Video Co-presence</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-sky-100 bg-calm-900 p-4 text-white">
              <p className="text-sm text-sky-100">Doctor View</p>
              <p className="mt-6 text-lg font-semibold">Dr. Emma Smith</p>
              <p className="text-sm text-sky-100">&quot;Can you point to where the pain is strongest?&quot;</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-slate-900 p-4 text-white">
              <p className="text-sm text-slate-200">Patient View</p>
              <p className="mt-6 text-lg font-semibold">Alex Nguyen</p>
              <p className="text-sm text-slate-200">&quot;Mainly here near the left side.&quot;</p>
            </div>
          </div>

          <div className="rounded-2xl border border-mint-100 bg-mint-100/45 p-4">
            <p className="text-sm font-semibold text-mint-700">Shared medical diagram</p>
            <div className="relative mt-3 h-32 rounded-xl border border-mint-400/30 bg-white">
              <span className="absolute left-[38%] top-[32%] rounded bg-coral-100 px-2 py-1 text-xs font-semibold text-coral-500">
                Doctor cursor
              </span>
              <span className="absolute left-[62%] top-[58%] rounded bg-calm-100 px-2 py-1 text-xs font-semibold text-calm-600">
                Patient cursor
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              href="/scene-2"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Back
            </Link>
            <Link
              href="/scene-4"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-calm-600 px-4 py-3 font-semibold text-white transition hover:bg-calm-900"
            >
              Continue
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
