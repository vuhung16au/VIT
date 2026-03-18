"use client";

import { useMemo, useState } from "react";

import { JourneyNav } from "@/components/JourneyNav";

export default function ABTestingPage() {
  const [clicks, setClicks] = useState({ variantA: 0, variantB: 0 });
  const [userChoice, setUserChoice] = useState<"A" | "B" | null>(null);

  const totalClicks = clicks.variantA + clicks.variantB;
  const conversionA = useMemo(
    () => (totalClicks > 0 ? ((clicks.variantA / totalClicks) * 100).toFixed(1) : "0"),
    [clicks.variantA, totalClicks],
  );
  const conversionB = useMemo(
    () => (totalClicks > 0 ? ((clicks.variantB / totalClicks) * 100).toFixed(1) : "0"),
    [clicks.variantB, totalClicks],
  );

  const handleClick = (variant: "A" | "B") => {
    setClicks((current) => ({
      ...current,
      [variant === "A" ? "variantA" : "variantB"]:
        current[variant === "A" ? "variantA" : "variantB"] + 1,
    }));
    setUserChoice(variant);
  };

  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
          Demo 3
        </p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">A/B Testing Demo</h1>
        <p className="max-w-3xl text-slate-700">
          Compare two CTA designs and see how a simple experiment can measure which one performs
          better. In practice, this would be tested with many more users.
        </p>
        <JourneyNav currentPath="/ab-testing" />
      </header>

      <section className="scene-card">
        <h2 className="mb-4 text-2xl text-calm-900">Live Results</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-calm-50 p-4">
            <h3 className="font-bold text-slate-900">Variant A</h3>
            <p className="text-3xl font-bold text-calm-600">{conversionA}%</p>
            <p className="text-sm text-slate-600">{clicks.variantA} clicks</p>
          </div>
          <div className="rounded-2xl bg-mint-100 p-4">
            <h3 className="font-bold text-slate-900">Variant B</h3>
            <p className="text-3xl font-bold text-mint-700">{conversionB}%</p>
            <p className="text-sm text-slate-600">{clicks.variantB} clicks</p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <article className="scene-card">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Variant A: Generic</h2>
          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="mb-4 text-slate-700">Book an appointment with a doctor</p>
            <button
              type="button"
              onClick={() => handleClick("A")}
              className="rounded-lg bg-slate-600 px-6 py-3 text-white transition-colors hover:bg-slate-700"
            >
              Submit
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Neutral styling and vague copy give users less reason to act.
          </p>
        </article>

        <article className="scene-card">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Variant B: Optimized</h2>
          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="mb-4 text-slate-700">Get care from top doctors in 24 hours</p>
            <button
              type="button"
              onClick={() => handleClick("B")}
              className="rounded-xl bg-calm-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-calm-900"
            >
              Book Your Appointment →
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Benefit-focused copy, stronger contrast, and clearer action make the choice easier.
          </p>
        </article>
      </section>

      {userChoice && (
        <section className="scene-card">
          <p className="rounded-2xl border border-mint-400 bg-mint-100 p-4 text-mint-700">
            You clicked Variant {userChoice}. In a real A/B test we would measure behavior across
            a much larger audience before deciding on a winner.
          </p>
        </section>
      )}

      <section className="scene-card">
        <h2 className="mb-3 text-2xl text-calm-900">How A/B Testing Works</h2>
        <ol className="ml-5 list-decimal space-y-2 text-slate-700">
          <li>Create two versions of the same interface element.</li>
          <li>Randomly show each version to different users.</li>
          <li>Measure a target behavior such as clicks or bookings.</li>
          <li>Use the results to inform the next design decision.</li>
        </ol>
      </section>
    </main>
  );
}
