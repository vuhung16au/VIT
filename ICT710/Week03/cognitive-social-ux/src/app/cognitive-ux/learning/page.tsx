"use client";

import { useState } from "react";

import { JourneyNav } from "@/components/JourneyNav";

export default function LearningPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    specialty: "",
    doctor: "",
    date: "",
    time: "",
  });

  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
          Cognitive UX
        </p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Learning: Progressive Disclosure</h1>
        <p className="max-w-3xl text-slate-700">
          Good learning experiences reveal complexity gradually so users can focus on the current
          decision instead of the entire process at once.
        </p>
        <JourneyNav currentPath="/cognitive-ux" />
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <article className="scene-card">
          <h2 className="mb-4 text-xl font-bold text-red-600">All at Once (Overwhelming)</h2>
          <div className="rounded-2xl bg-white p-6 opacity-80 shadow-sm">
            <div className="space-y-4">
              {["Specialty", "Doctor", "Date", "Time", "Consultation Type", "Insurance Provider"].map(
                (label) => (
                  <div key={label}>
                    <label className="mb-1 block text-sm text-slate-700">{label}</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2"
                    />
                  </div>
                ),
              )}
              <div>
                <label className="mb-1 block text-sm text-slate-700">Reason for Visit</label>
                <textarea rows={3} className="w-full rounded-lg border border-slate-300 px-3 py-2" />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Seven fields at once creates cognitive overload before the user has built momentum.
            </p>
          </div>
        </article>

        <article className="scene-card">
          <h2 className="mb-4 text-xl font-bold text-green-600">
            Progressive Disclosure (Manageable)
          </h2>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex justify-between">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center">
                  <div
                    className={`grid h-8 w-8 place-items-center rounded-full text-sm font-semibold ${
                      item <= step ? "bg-calm-600 text-white" : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {item}
                  </div>
                  {item < 4 && <div className="mx-2 h-1 w-10 rounded-full bg-slate-200" />}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">Step 1: What specialty?</h3>
                <select
                  value={formData.specialty}
                  onChange={(event) => setFormData({ ...formData, specialty: event.target.value })}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                >
                  <option value="">Choose specialty...</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="dermatology">Dermatology</option>
                </select>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">Step 2: Which doctor?</h3>
                <div className="space-y-2">
                  {["Dr. Sarah Smith", "Dr. Mike Jones"].map((doctor) => (
                    <button
                      key={doctor}
                      type="button"
                      onClick={() => setFormData({ ...formData, doctor })}
                      className={`w-full rounded-xl border-2 p-3 text-left transition-colors ${
                        formData.doctor === doctor
                          ? "border-calm-400 bg-calm-50"
                          : "border-slate-200 hover:border-calm-400"
                      }`}
                    >
                      {doctor}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">Step 3: Pick a date</h3>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(event) => setFormData({ ...formData, date: event.target.value })}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">Step 4: Select time</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, time })}
                      className={`rounded-xl border-2 p-3 transition-colors ${
                        formData.time === time
                          ? "border-mint-400 bg-mint-100"
                          : "border-slate-200 hover:border-calm-400"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 rounded-xl border border-slate-300 px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Back
                </button>
              )}
              {step < 4 && (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="flex-1 rounded-xl bg-calm-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-calm-900"
                >
                  Next
                </button>
              )}
              {step === 4 && (
                <button
                  type="button"
                  className="flex-1 rounded-xl bg-mint-700 px-4 py-3 font-semibold text-white transition-colors hover:bg-calm-900"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
