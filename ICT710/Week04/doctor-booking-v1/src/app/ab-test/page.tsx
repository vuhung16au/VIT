"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { AppNav } from "@/components/AppNav";

type Metrics = {
  versionA: { views: number; completions: number; avgTime: number };
  versionB: { views: number; completions: number; avgTime: number };
};

function calcRate(completions: number, views: number) {
  return ((completions / views) * 100).toFixed(1);
}

function Metric({
  label,
  value,
  subtext,
  color,
}: {
  label: string;
  value: string;
  subtext: string;
  color: "blue" | "green";
}) {
  return (
    <div>
      <p className="mb-1 text-sm text-slate-600">{label}</p>
      <p className={`text-3xl font-bold ${color === "blue" ? "text-indigo-600" : "text-emerald-600"}`}>
        {value}
      </p>
      <p className="text-xs text-slate-500">{subtext}</p>
    </div>
  );
}

function AnalysisCard({
  title,
  value,
  detail,
  winner,
}: {
  title: string;
  value: string;
  detail: string;
  winner?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-4 ${winner ? "border border-emerald-200 bg-emerald-50" : "bg-slate-50"}`}>
      <p className="mb-1 text-sm text-slate-600">{title}</p>
      <p className={`mb-1 text-2xl font-bold ${winner ? "text-emerald-700" : "text-slate-900"}`}>{value}</p>
      <p className="text-xs text-slate-600">{detail}</p>
    </div>
  );
}

export default function ABTestPage() {
  const router = useRouter();
  const [metrics] = useState<Metrics>({
    versionA: { views: 247, completions: 178, avgTime: 142 },
    versionB: { views: 253, completions: 172, avgTime: 156 },
  });

  const startTest = (version: "A" | "B") => {
    router.push(version === "A" ? "/version-a-multistep" : "/version-b-singlepage");
  };

  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Deliver Phase</p>
        <h1 className="text-4xl text-slate-900 md:text-5xl">A/B Test Dashboard</h1>
        <p className="max-w-3xl text-slate-700">
          Compare the multi-step and single-page alternatives using simple simulated metrics to
          emphasize data-driven iteration.
        </p>
        <AppNav currentPath="/ab-test" />
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <article className="scene-card border-l-4 border-l-indigo-500">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Version A</h2>
              <p className="text-slate-600">Multi-Step Form</p>
            </div>
            <button
              type="button"
              onClick={() => startTest("A")}
              className="rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Test It
            </button>
          </div>
          <div className="space-y-4">
            <Metric
              label="Completion Rate"
              value={`${calcRate(metrics.versionA.completions, metrics.versionA.views)}%`}
              subtext={`${metrics.versionA.completions}/${metrics.versionA.views} completed`}
              color="blue"
            />
            <Metric
              label="Avg. Time to Complete"
              value={`${metrics.versionA.avgTime}s`}
              subtext="2 minutes 22 seconds"
              color="blue"
            />
            <Metric
              label="Drop-off Point"
              value="Step 2"
              subtext="12% abandon after Step 1"
              color="blue"
            />
          </div>
        </article>

        <article className="scene-card border-l-4 border-l-emerald-500">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Version B</h2>
              <p className="text-slate-600">Single-Page Accordion</p>
            </div>
            <button
              type="button"
              onClick={() => startTest("B")}
              className="rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Test It
            </button>
          </div>
          <div className="space-y-4">
            <Metric
              label="Completion Rate"
              value={`${calcRate(metrics.versionB.completions, metrics.versionB.views)}%`}
              subtext={`${metrics.versionB.completions}/${metrics.versionB.views} completed`}
              color="green"
            />
            <Metric
              label="Avg. Time to Complete"
              value={`${metrics.versionB.avgTime}s`}
              subtext="2 minutes 36 seconds"
              color="green"
            />
            <Metric
              label="Drop-off Point"
              value="Section 3"
              subtext="15% abandon at date and time"
              color="green"
            />
          </div>
        </article>
      </section>

      <section className="scene-card">
        <h2 className="mb-6 text-2xl text-slate-900">Statistical Analysis</h2>
        <div className="mb-6 grid gap-6 md:grid-cols-3">
          <AnalysisCard title="Winner" value="Version A" detail="+4.0% completion rate" winner />
          <AnalysisCard title="Confidence Level" value="95%" detail="Statistically significant" />
          <AnalysisCard title="Sample Size" value="500 users" detail="Adequate for decision" />
        </div>

        <div className="rounded-2xl bg-indigo-50 p-6">
          <h3 className="mb-3 font-bold text-slate-900">Recommendation</h3>
          <p className="mb-3 text-slate-700">
            Implement <strong>Version A</strong> for production because it completes faster and
            achieves a higher completion rate.
          </p>
          <p className="text-sm text-slate-600">
            Next step: combine the stronger flow from Version A with edit-friendly details inspired
            by Version B.
          </p>
        </div>
      </section>
    </main>
  );
}
