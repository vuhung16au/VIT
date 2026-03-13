import { JourneyNav } from "@/components/JourneyNav";
import Link from "next/link";

const specialties = [
  { icon: "🫁", label: "Ear, Nose & Throat", hint: "Throat pain, sinus pressure" },
  { icon: "❤️", label: "Heart", hint: "Chest pain, heart rhythm" },
  { icon: "🩺", label: "General Physician", hint: "Cold, fever, fatigue" },
  { icon: "🧠", label: "Neurology", hint: "Headache, dizziness" },
];

const progressiveSteps = ["1. Symptoms", "2. Date & Time", "3. Confirm payment"];

export default function SceneTwoPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">The Patient Journey</p>
        <h1 className="text-4xl leading-tight text-calm-900 md:text-5xl">Scene 2: Cognitive Load Reduction</h1>
        <p className="max-w-3xl text-slate-700">
          Recognition-first choices and progressive disclosure reduce mental effort for users who may be anxious,
          fatigued, or in pain.
        </p>
        <JourneyNav currentStep={2} />
      </header>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="scene-card space-y-5">
          <h2 className="text-2xl text-calm-900">Recognition Over Recall</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {specialties.map((item) => (
              <button
                key={item.label}
                type="button"
                className="group rounded-2xl border border-sky-100 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-calm-400"
              >
                <p className="text-2xl">{item.icon}</p>
                <p className="mt-2 font-semibold text-slate-900">{item.label}</p>
                <p className="text-sm text-slate-600">{item.hint}</p>
              </button>
            ))}
          </div>
        </article>

        <article className="scene-card space-y-5">
          <h2 className="text-2xl text-calm-900">Progressive Disclosure Flow</h2>
          <ul className="space-y-3">
            {progressiveSteps.map((step) => (
              <li key={step} className="rounded-xl border border-mint-100 bg-mint-100/40 p-3 text-sm font-medium text-mint-700">
                {step}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-sky-100 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Current form panel</p>
            <p className="mt-1 font-semibold text-slate-900">Symptoms</p>
            <textarea
              className="mt-3 h-28 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none ring-calm-400 transition focus:ring"
              defaultValue="Scratchy throat, slight fever, fatigue"
              aria-label="Symptoms"
              readOnly
            />
          </div>

          <div className="flex gap-3">
            <Link
              href="/"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Back
            </Link>
            <Link
              href="/scene-3"
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
