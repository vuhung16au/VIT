"use client";

import { useState } from "react";

import { JourneyNav } from "@/components/JourneyNav";

const doctors = [
  { id: "smith", name: "Dr. Sarah Smith", specialty: "Cardiology" },
  { id: "jones", name: "Dr. Mike Jones", specialty: "Pediatrics" },
  { id: "chen", name: "Dr. Lisa Chen", specialty: "Dermatology" },
];

export default function MemoryPage() {
  const [recallInput, setRecallInput] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
          Cognitive UX
        </p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Memory: Recognition vs Recall</h1>
        <p className="max-w-3xl text-slate-700">
          Interfaces should help users recognize choices instead of forcing them to remember exact
          terms, especially in stressful healthcare situations.
        </p>
        <JourneyNav currentPath="/cognitive-ux" />
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <article className="scene-card">
          <h2 className="mb-4 text-xl font-bold text-red-600">Recall (Harder)</h2>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <label className="mb-3 block font-semibold text-slate-900">
              What specialty was the doctor you saw last month?
            </label>
            <input
              type="text"
              value={recallInput}
              onChange={(event) => setRecallInput(event.target.value)}
              placeholder="Type the specialty..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-calm-400 focus:outline-none focus:ring-2 focus:ring-calm-400/30"
            />
            <p className="mt-4 text-sm text-slate-600">
              Users must remember exact terms from memory, which increases errors and hesitation.
            </p>
          </div>
        </article>

        <article className="scene-card">
          <h2 className="mb-4 text-xl font-bold text-green-600">Recognition (Easier)</h2>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <label className="mb-3 block font-semibold text-slate-900">
              Which doctor did you see last month?
            </label>
            <div className="space-y-3">
              {doctors.map((doctor) => (
                <button
                  key={doctor.id}
                  type="button"
                  onClick={() => setSelectedDoctor(doctor.id)}
                  className={`w-full rounded-2xl border-2 p-4 text-left transition-all ${
                    selectedDoctor === doctor.id
                      ? "border-calm-400 bg-calm-50"
                      : "border-slate-200 hover:border-calm-400"
                  }`}
                >
                  <p className="font-semibold text-slate-900">{doctor.name}</p>
                  <p className="text-sm text-slate-600">{doctor.specialty}</p>
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Recognition works better because users can scan and identify the right option from a
              clear list.
            </p>
          </div>
        </article>
      </section>

      <section className="scene-card">
        <h2 className="mb-3 text-2xl text-calm-900">Apply This to Booking Flows</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-l-4 border-red-500 bg-white p-5">
            <p className="font-semibold text-slate-900">Don&apos;t do this</p>
            <p className="mt-2 text-sm text-slate-700">
              Ask users to type a time format or remember a specialty name with no support.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-green-500 bg-white p-5">
            <p className="font-semibold text-slate-900">Do this instead</p>
            <p className="mt-2 text-sm text-slate-700">
              Present times as clickable slots and show doctors or specialties as visible options.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
